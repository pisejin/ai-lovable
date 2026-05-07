import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import api from './api'

export const useAuthStore = defineStore('auth', () => {
  // state — localStorage에서 복원
  const user = ref(JSON.parse(localStorage.getItem('mb_user') || 'null'))
  const token = ref(localStorage.getItem('mb_token') || null)
  const loading = ref(false)
  const error = ref(null)

  // getters
  const isLoggedIn = computed(() => !!token.value && !!user.value)

  // 세션 저장 헬퍼
  const _saveSession = (userData, tokenValue) => {
    user.value = userData
    token.value = tokenValue
    localStorage.setItem('mb_user', JSON.stringify(userData))
    localStorage.setItem('mb_token', tokenValue)
  }

  const _clearSession = () => {
    user.value = null
    token.value = null
    localStorage.removeItem('mb_user')
    localStorage.removeItem('mb_token')
  }

  // 로그인
  const login = async (email, password) => {
    loading.value = true
    error.value = null
    try {
      // json-server: email + password 로 사용자 검색
      const { data } = await api.get('/users', {
        params: { email, password }
      })

      if (!data || data.length === 0) {
        throw new Error('이메일 또는 비밀번호가 올바르지 않습니다.')
      }

      const found = data[0]
      // 간단한 토큰 생성 (실제 서비스에서는 JWT 사용)
      const fakeToken = btoa(`${found.id}:${found.email}:${Date.now()}`)
      _saveSession(
        { id: found.id, name: found.name, email: found.email },
        fakeToken
      )
      return true
    } catch (e) {
      error.value = e.message || '로그인에 실패했습니다.'
      return false
    } finally {
      loading.value = false
    }
  }

  // 회원가입
  const register = async ({ name, email, password }) => {
    loading.value = true
    error.value = null
    try {
      // 이메일 중복 확인
      const { data: exists } = await api.get('/users', { params: { email } })
      if (exists && exists.length > 0) {
        throw new Error('이미 사용 중인 이메일입니다.')
      }

      // 사용자 생성
      const { data: newUser } = await api.post('/users', {
        name,
        email,
        password,
        createdAt: new Date().toISOString()
      })

      const fakeToken = btoa(`${newUser.id}:${newUser.email}:${Date.now()}`)
      _saveSession(
        { id: newUser.id, name: newUser.name, email: newUser.email },
        fakeToken
      )
      return true
    } catch (e) {
      error.value = e.message || '회원가입에 실패했습니다.'
      return false
    } finally {
      loading.value = false
    }
  }

  // 로그아웃
  const logout = () => {
    _clearSession()
    error.value = null
  }

  const clearError = () => { error.value = null }

  return {
    user, token, loading, error,
    isLoggedIn,
    login, register, logout, clearError
  }
})
