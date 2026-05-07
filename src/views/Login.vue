<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'

const router = useRouter()
const auth = useAuthStore()

const form = ref({ email: '', password: '' })
const showPassword = ref(false)

onMounted(() => {
  auth.clearError()
  if (auth.isLoggedIn) router.replace('/')
})

const handleSubmit = async () => {
  const ok = await auth.login(form.value.email, form.value.password)
  if (ok) router.replace('/')
}

const fillDemo = () => {
  form.value.email = 'demo@moneybook.com'
  form.value.password = 'demo1234'
}
</script>

<template>
  <div class="auth-page">
    <div class="auth-card">
      <!-- 로고 -->
      <div class="auth-brand">
        <div class="auth-brand-icon">
          <i class="fa-solid fa-wallet"></i>
        </div>
        <div class="auth-brand-text">
          <div class="auth-brand-title">MoneyBook</div>
          <div class="auth-brand-sub">Smart Ledger</div>
        </div>
      </div>

      <h2 class="auth-title">로그인</h2>
      <p class="auth-desc">계정에 로그인하여 가계부를 관리하세요</p>

      <!-- 에러 메시지 -->
      <div v-if="auth.error" class="alert alert-danger d-flex align-items-center gap-2 py-2">
        <i class="fa-solid fa-circle-exclamation"></i>
        <span>{{ auth.error }}</span>
      </div>

      <form @submit.prevent="handleSubmit" novalidate>
        <!-- 이메일 -->
        <div class="mb-3">
          <label class="form-label fw-semibold">이메일</label>
          <div class="input-group">
            <span class="input-group-text bg-light border-end-0">
              <i class="fa-solid fa-envelope text-muted"></i>
            </span>
            <input
              v-model="form.email"
              type="email"
              class="form-control border-start-0"
              placeholder="이메일을 입력하세요"
              required
              autocomplete="email"
            />
          </div>
        </div>

        <!-- 비밀번호 -->
        <div class="mb-4">
          <label class="form-label fw-semibold">비밀번호</label>
          <div class="input-group">
            <span class="input-group-text bg-light border-end-0">
              <i class="fa-solid fa-lock text-muted"></i>
            </span>
            <input
              v-model="form.password"
              :type="showPassword ? 'text' : 'password'"
              class="form-control border-start-0 border-end-0"
              placeholder="비밀번호를 입력하세요"
              required
              autocomplete="current-password"
            />
            <button
              type="button"
              class="input-group-text bg-light border-start-0 cursor-pointer"
              @click="showPassword = !showPassword"
            >
              <i :class="showPassword ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye'" class="text-muted"></i>
            </button>
          </div>
        </div>

        <!-- 로그인 버튼 -->
        <button
          type="submit"
          class="btn btn-primary w-100 py-2 fw-semibold mb-3"
          :disabled="auth.loading"
        >
          <span v-if="auth.loading">
            <span class="spinner-border spinner-border-sm me-2"></span>로그인 중...
          </span>
          <span v-else>
            <i class="fa-solid fa-right-to-bracket me-2"></i>로그인
          </span>
        </button>

        <!-- 데모 계정 -->
        <button
          type="button"
          class="btn btn-outline-secondary w-100 py-2 mb-4"
          @click="fillDemo"
        >
          <i class="fa-solid fa-wand-magic-sparkles me-2"></i>데모 계정으로 체험하기
        </button>

        <!-- 회원가입 링크 -->
        <p class="text-center text-muted mb-0" style="font-size: .9rem;">
          아직 계정이 없으신가요?
          <RouterLink to="/register" class="text-primary fw-semibold text-decoration-none">
            회원가입
          </RouterLink>
        </p>
      </form>
    </div>
  </div>
</template>
