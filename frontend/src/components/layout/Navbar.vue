<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<template>
  <nav class="navbar">
    <div class="navbar__logo">
      <router-link to="/">
        <img src="/favicon/favicon-32x32.png" alt="JishnuJP" class="navbar__logo-image">
      </router-link>
    </div>
    
    <div class="navbar__menu" :class="{ 'is-open': isMenuOpen }">
      <router-link to="/" class="navbar__link" @click="closeMenu">Home</router-link>
      <router-link to="/projects" class="navbar__link" @click="closeMenu">Projects</router-link>
      <router-link to="/professional" class="navbar__link" @click="closeMenu">Professional</router-link>
      <router-link to="/academic" class="navbar__link" @click="closeMenu">Academic</router-link>
      <a href="/resume.pdf" class="navbar__link" target="_blank" @click="closeMenu">Resume</a>
    </div>

    <button class="navbar__toggle" @click="toggleMenu" aria-label="Toggle menu">
      <span class="navbar__toggle-line"></span>
      <span class="navbar__toggle-line"></span>
      <span class="navbar__toggle-line"></span>
    </button>
  </nav>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: rgba(18, 18, 18, 0.8);
  backdrop-filter: blur(10px);
  z-index: 1000;
}

.navbar__logo a {
  color: #fff;
  font-size: 1.5rem;
  font-weight: 600;
  text-decoration: none;
}

.navbar__menu {
  display: flex;
  gap: 2rem;
}

.navbar__link {
  color: #888;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s ease;
}

.navbar__link:hover {
  color: #fff;
}

.navbar__toggle {
  display: none;
  flex-direction: column;
  gap: 6px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
}

.navbar__toggle-line {
  display: block;
  width: 24px;
  height: 2px;
  background: #fff;
  transition: all 0.3s ease;
}

@media (max-width: 768px) {
  .navbar__toggle {
    display: flex;
  }

  .navbar__menu {
    position: fixed;
    top: 0;
    right: -100%;
    height: 100vh;
    width: 70%;
    background: rgba(18, 18, 18, 0.95);
    flex-direction: column;
    padding: 6rem 2rem;
    transition: right 0.3s ease;
  }

  .navbar__menu.is-open {
    right: 0;
  }
}
</style> 