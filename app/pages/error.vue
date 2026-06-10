<script setup lang="ts">
const route = useRoute();
const error = route.query.error || "An unknown error occured";
</script>

<template>
  <div class="card bg-base-300 container mt-4 min-w-1/3 min-h-72 text-center mx-auto flex justify-center items-center">
    <div class="flex flex-col item-center justify-center gap-4 w-2/4">
      <div role="alert" class="alert alert-error min-w-1/2 text-center">
        <span>Oh No! {{ error }}</span>
      </div>
      <div>
        <NuxtLink to="/" class="btn btn-primary w-1/4">
          Home
          <Icon name="tabler:arrow-left" size="32" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
