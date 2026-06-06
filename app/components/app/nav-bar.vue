<template>
  <div class="navbar relative bg-primary text-primary-content px-1">
    <div class="navbar-start">
      <NuxtLink to="/" class="btn btn-ghost text-md">
        Travel Log
      </NuxtLink>
    </div>
    <div class="navbar-end">
      <NuxtLink to="/signin" class="btn btn-primary text-black text-md bg-accent hover:bg-teal-500 hover:text-white">
        Sign In with GitHub
        <Icon name="tabler:brand-github" size="24" />
      </NuxtLink>
    </div>
  </div>
</template>
