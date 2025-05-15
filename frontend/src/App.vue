<script setup>
import Navbar from './components/layout/Navbar.vue'
</script>

<template>
  <div class="app">
    <Navbar />
    <router-view></router-view>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css');

:root {
  --primary-bg: #121212;
  --secondary-bg: #1a1a1a;
  --text-primary: #ffffff;
  --text-secondary: #888888;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  overflow-x: hidden;
  width: 100%;
  position: relative;
}

body {
  font-family: 'Inter', sans-serif;
  background: var(--primary-bg);
  color: var(--text-primary);
  line-height: 1.6;
}

.app {
  min-height: 100vh;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

button {
  font-family: inherit;
}
</style>
