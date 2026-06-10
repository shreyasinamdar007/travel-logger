<script setup lang="ts">
import { useAuthStore } from "~/store/auth";

const authStore = useAuthStore();
</script>

<template>
  <button :disabled="authStore.loading" class="btn btn-secondary" @click="authStore.signIn">
    Sign In with GitHub
    <span v-if="authStore.loading" class="loading loading-spinner loading-md" />
    <Icon v-else name="tabler:brand-github" size="24" />
  </button>
</template>
