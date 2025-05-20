<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-sm px-4">
    <div class="container-fluid d-flex justify-content-between align-items-center">

      <!-- LOGO -->
      <router-link to="/" class="navbar-brand fw-bold text-primary fs-4">
        DigitalBooks
      </router-link>

      <!-- NAVIGATION -->
      <ul class="navbar-nav flex-row gap-3">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Accueil</router-link>
        </li>
    
      </ul>

      <!-- PROFIL -->
      <router-link to="/admin/books" 
      class="btn btn-outline-secondary rounded-circle d-flex align-items-center justify-content-center" 
      style="width: 40px; height: 40px;"
      title="accès admin">
        <i class="bi bi-person-gear"></i>
      </router-link>
    </div>
  </nav>
</template>

<script setup>
</script>

<style scoped>
.nav-link.router-link-exact-active {
  font-weight: bold;
  color: #0d6efd !important;
}
</style>
