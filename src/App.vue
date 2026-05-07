<script setup>
import { computed } from 'vue'
import { RouterLink, RouterView, useRouter } from 'vue-router'
import { useAuthStore } from './stores/auth'

const auth = useAuthStore()
const router = useRouter()

const isLoggedIn = computed(() => auth.isLoggedIn)

const logout = () => {
  auth.logout()
  router.push('/login')
}

const userInitial = computed(() =>
  auth.user?.name ? auth.user.name.charAt(0).toUpperCase() : '?'
)
</script>

<template>
  <div class="app-shell">
    <!-- 로그인 상태일 때만 사이드바 표시 -->
    <aside v-if="isLoggedIn" class="sidebar">
      <div class="brand">
        <i class="fa-solid fa-wallet brand-icon"></i>
        <div>
          <div class="brand-title">MoneyBook</div>
          <div class="brand-sub">Smart Ledger</div>
        </div>
      </div>

      <nav class="nav flex-column gap-1">
        <RouterLink to="/" class="nav-link" active-class="active" exact-active-class="active">
          <i class="fa-solid fa-chart-pie"></i> 대시보드
        </RouterLink>
        <RouterLink to="/transactions" class="nav-link" active-class="active">
          <i class="fa-solid fa-list-ul"></i> 거래 내역
        </RouterLink>
        <RouterLink to="/add" class="nav-link" active-class="active">
          <i class="fa-solid fa-plus-circle"></i> 거래 추가
        </RouterLink>
      </nav>

      <!-- 사용자 정보 & 로그아웃 -->
      <div class="sidebar-user">
        <div class="user-avatar">{{ userInitial }}</div>
        <div class="user-info">
          <div class="user-name">{{ auth.user?.name }}</div>
          <div class="user-email">{{ auth.user?.email }}</div>
        </div>
        <button class="btn-logout" @click="logout" title="로그아웃">
          <i class="fa-solid fa-right-from-bracket"></i>
        </button>
      </div>

      <div class="sidebar-footer">
        <i class="fa-solid fa-circle-info"></i> Vue 3 · Pinia · Bootstrap 5
      </div>
    </aside>

    <main :class="isLoggedIn ? 'main-content' : 'main-content main-content--auth'">
      <RouterView />
    </main>
  </div>
</template>
