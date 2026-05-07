<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'

const router = useRouter()
const auth = useAuthStore()

const form = ref({ name: '', email: '', password: '', confirm: '' })
const showPassword = ref(false)
const showConfirm = ref(false)
const submitted = ref(false)

onMounted(() => {
  auth.clearError()
  if (auth.isLoggedIn) router.replace('/')
})

const passwordStrength = computed(() => {
  const p = form.value.password
  if (!p) return { level: 0, label: '', color: '' }
  let score = 0
  if (p.length >= 8) score++
  if (/[A-Z]/.test(p)) score++
  if (/[0-9]/.test(p)) score++
  if (/[^A-Za-z0-9]/.test(p)) score++
  if (score <= 1) return { level: 1, label: '약함', color: 'danger' }
  if (score === 2) return { level: 2, label: '보통', color: 'warning' }
  if (score === 3) return { level: 3, label: '강함', color: 'info' }
  return { level: 4, label: '매우 강함', color: 'success' }
})

const isPasswordMatch = computed(() =>
  form.value.password && form.value.confirm
    ? form.value.password === form.value.confirm
    : null
)

const isValid = computed(() =>
  form.value.name.trim().length >= 2 &&
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.value.email) &&
  form.value.password.length >= 6 &&
  form.value.password === form.value.confirm
)

const handleSubmit = async () => {
  submitted.value = true
  if (!isValid.value) return
  const ok = await auth.register({
    name: form.value.name.trim(),
    email: form.value.email.trim(),
    password: form.value.password
  })
  if (ok) router.replace('/')
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

      <h2 class="auth-title">회원가입</h2>
      <p class="auth-desc">무료로 가입하고 스마트한 가계부를 시작하세요</p>

      <!-- 에러 메시지 -->
      <div v-if="auth.error" class="alert alert-danger d-flex align-items-center gap-2 py-2">
        <i class="fa-solid fa-circle-exclamation"></i>
        <span>{{ auth.error }}</span>
      </div>

      <form @submit.prevent="handleSubmit" novalidate>
        <!-- 이름 -->
        <div class="mb-3">
          <label class="form-label fw-semibold">이름</label>
          <div class="input-group">
            <span class="input-group-text bg-light border-end-0">
              <i class="fa-solid fa-user text-muted"></i>
            </span>
            <input
              v-model="form.name"
              type="text"
              class="form-control border-start-0"
              :class="{ 'is-invalid': submitted && form.name.trim().length < 2 }"
              placeholder="이름을 입력하세요 (2자 이상)"
              autocomplete="name"
            />
            <div class="invalid-feedback">이름은 2자 이상이어야 합니다.</div>
          </div>
        </div>

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
              :class="{ 'is-invalid': submitted && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) }"
              placeholder="이메일을 입력하세요"
              autocomplete="email"
            />
            <div class="invalid-feedback">올바른 이메일 주소를 입력하세요.</div>
          </div>
        </div>

        <!-- 비밀번호 -->
        <div class="mb-3">
          <label class="form-label fw-semibold">비밀번호</label>
          <div class="input-group">
            <span class="input-group-text bg-light border-end-0">
              <i class="fa-solid fa-lock text-muted"></i>
            </span>
            <input
              v-model="form.password"
              :type="showPassword ? 'text' : 'password'"
              class="form-control border-start-0 border-end-0"
              :class="{ 'is-invalid': submitted && form.password.length < 6 }"
              placeholder="비밀번호 (6자 이상)"
              autocomplete="new-password"
            />
            <button
              type="button"
              class="input-group-text bg-light border-start-0"
              @click="showPassword = !showPassword"
            >
              <i :class="showPassword ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye'" class="text-muted"></i>
            </button>
            <div class="invalid-feedback">비밀번호는 6자 이상이어야 합니다.</div>
          </div>
          <!-- 비밀번호 강도 -->
          <div v-if="form.password" class="mt-2">
            <div class="d-flex gap-1 mb-1">
              <div
                v-for="i in 4" :key="i"
                class="password-strength-bar"
                :class="i <= passwordStrength.level ? `bg-${passwordStrength.color}` : 'bg-light border'"
              ></div>
            </div>
            <small :class="`text-${passwordStrength.color}`">
              비밀번호 강도: {{ passwordStrength.label }}
            </small>
          </div>
        </div>

        <!-- 비밀번호 확인 -->
        <div class="mb-4">
          <label class="form-label fw-semibold">비밀번호 확인</label>
          <div class="input-group">
            <span class="input-group-text bg-light border-end-0">
              <i class="fa-solid fa-shield-halved text-muted"></i>
            </span>
            <input
              v-model="form.confirm"
              :type="showConfirm ? 'text' : 'password'"
              class="form-control border-start-0 border-end-0"
              :class="{
                'is-invalid': submitted && form.confirm && !isPasswordMatch,
                'is-valid': form.confirm && isPasswordMatch
              }"
              placeholder="비밀번호를 다시 입력하세요"
              autocomplete="new-password"
            />
            <button
              type="button"
              class="input-group-text bg-light border-start-0"
              @click="showConfirm = !showConfirm"
            >
              <i :class="showConfirm ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye'" class="text-muted"></i>
            </button>
            <div class="invalid-feedback">비밀번호가 일치하지 않습니다.</div>
            <div class="valid-feedback">비밀번호가 일치합니다.</div>
          </div>
        </div>

        <!-- 가입 버튼 -->
        <button
          type="submit"
          class="btn btn-primary w-100 py-2 fw-semibold mb-3"
          :disabled="auth.loading"
        >
          <span v-if="auth.loading">
            <span class="spinner-border spinner-border-sm me-2"></span>처리 중...
          </span>
          <span v-else>
            <i class="fa-solid fa-user-plus me-2"></i>회원가입
          </span>
        </button>

        <!-- 로그인 링크 -->
        <p class="text-center text-muted mb-0" style="font-size: .9rem;">
          이미 계정이 있으신가요?
          <RouterLink to="/login" class="text-primary fw-semibold text-decoration-none">
            로그인
          </RouterLink>
        </p>
      </form>
    </div>
  </div>
</template>
