<template>
  <div class="navbar relative bg-primary text-primary-content px-1">
    <div class="navbar-start">
      <NuxtLink to="/" class="btn btn-ghost text-md">
        Travel Log
      </NuxtLink>
    </div>
    <div class="navbar-end">
      <AppThemeToggle />
      <AuthButton />
    </div>
  </div>
</template>
