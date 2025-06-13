<script setup>
import portfolioData from '@/data/portfolio.json'

const { personal } = portfolioData
</script>

<template>
  <section class="hero">
    <div class="hero__content">
      <h1 class="hero__title">{{ personal.name }}</h1>
      <p class="hero__subtitle">{{ personal.title }}</p>
      
      <div class="hero__description">
        <p class="hero__description-main">Crafting scalable solutions that make a real impact in the digital world.</p>
        <p class="hero__description-sub">With a dash of clean code obsession and a sprinkle of coding perfectionism ✨</p>
      </div>
      
      <div class="hero__social">
        <a :href="personal.social.github" target="_blank" class="hero__social-link">
          <i class="fab fa-github"></i>
        </a>
        <a :href="personal.social.linkedin" target="_blank" class="hero__social-link">
          <i class="fab fa-linkedin"></i>
        </a>
        <a :href="personal.social.email" target="_target" class="hero__social-link">
          <i class="fas fa-envelope"></i>
        </a>
        <a :href="personal.social.whatsapp" target="_blank" class="hero__social-link">
          <i class="fab fa-whatsapp"></i>
        </a>
        <a :href="personal.social.twitter" target="_blank" class="hero__social-link">
          <i class="fab fa-twitter"></i>
        </a>
      </div>

      <div class="hero__cta">
        <router-link to="/projects" class="hero__button">View Projects</router-link>
        <a href="/resume.pdf" target="_blank" class="hero__button hero__button--outline">Download Resume</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background: linear-gradient(45deg, #121212, #1a1a1a);
  color: #fff;
}

.hero__content {
  text-align: center;
  max-width: 800px;
}

.hero__title {
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #fff, #888);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero__subtitle {
  font-size: 1.5rem;
  color: #888;
  margin-bottom: 2rem;
}

.hero__description {
  margin-bottom: 2.5rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.hero__description-main {
  font-size: 1.3rem;
  color: #fff;
  margin-bottom: 0.8rem;
  line-height: 1.4;
}

.hero__description-sub {
  font-size: 1.1rem;
  color: #888;
  font-style: italic;
  line-height: 1.4;
}

.hero__social {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.hero__social-link {
  color: #888;
  font-size: 1.5rem;
  transition: color 0.3s ease;
}

.hero__social-link:hover {
  color: #fff;
}

.hero__cta {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.hero__button {
  padding: 0.8rem 2rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
}

.hero__button:not(.hero__button--outline) {
  background: #fff;
  color: #121212;
}

.hero__button--outline {
  border: 1px solid #fff;
  color: #fff;
}

.hero__button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

@media (max-width: 768px) {
  .hero__title {
    font-size: 3rem;
  }

  .hero__subtitle {
    font-size: 1.2rem;
  }

  .hero__cta {
    flex-direction: column;
  }
}
</style> 