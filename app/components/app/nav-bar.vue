<template>
  <div class="navbar relative bg-primary text-primary-content px-1">
    <div class="navbar-start">
      <NuxtLink to="/" class="btn btn-ghost text-md">
        Travel Log
      </NuxtLink>
    </div>
    <div class="navbar-end">
      <AppThemeToggle />
      <NuxtLink to="/signin" class="btn btn-secondary text-md">
        Sign In with GitHub
        <Icon name="tabler:brand-github" size="24" />
      </NuxtLink>
    </div>
  </div>
</template>
