<script setup>
import portfolioData from '@/data/portfolio.json'

const education = portfolioData.education
const certifications = portfolioData.certifications
const workshops = portfolioData.workshops
</script>

<template>
  <main class="education">
    <div class="education__container">
      <h1 class="education__title">Education</h1>
      
      <section class="education__section">
        <h2 class="education__section-title">Academic Background</h2>
        <div class="education__timeline">
          <div v-for="edu in education" :key="edu.degree" class="education__item">
            <h3 class="education__item-degree">{{ edu.degree }}</h3>
            <p class="education__item-institution">{{ edu.institution }}</p>
            <p class="education__item-period">{{ edu.period }}</p>
          </div>
        </div>
      </section>

      <section class="education__section">
        <h2 class="education__section-title">Certifications</h2>
        <div class="education__grid">
          <div v-for="cert in certifications" :key="cert.name" class="education__card">
            <img 
              v-if="cert.imageUrl" 
              :src="cert.imageUrl" 
              :alt="cert.name"
              class="education__card-image"
            />
            <h3 class="education__card-title">{{ cert.name }}</h3>
            <p class="education__card-institution">{{ cert.institution }}</p>
            <p class="education__card-description">{{ cert.description }}</p>
            <a :href="cert.certificate" target="_blank" class="education__card-link">
              <i class="fas fa-file-alt"></i>
              View Certificate
            </a>
          </div>
        </div>
      </section>

      <section class="education__section">
        <h2 class="education__section-title">Workshops</h2>
        <div class="education__grid">
          <div v-for="workshop in workshops" :key="workshop.name" class="education__card">
            <h3 class="education__card-title">{{ workshop.name }}</h3>
            <p class="education__card-institution">{{ workshop.venue }}</p>
            <p class="education__card-description">{{ workshop.description }}</p>
            <a :href="workshop.certificate" target="_blank" class="education__card-link">
              <i class="fas fa-file-alt"></i>
              View Certificate
            </a>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<style scoped>
.education {
  min-height: 100vh;
  padding: 8rem 2rem 4rem;
  background: #121212;
  color: #fff;
}

.education__container {
  max-width: 1200px;
  margin: 0 auto;
}

.education__title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 3rem;
  background: linear-gradient(45deg, #fff, #888);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.education__section {
  margin-bottom: 4rem;
}

.education__section-title {
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #fff;
}

.education__timeline {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.education__item {
  background: rgba(255, 255, 255, 0.05);
  padding: 1.5rem;
  border-radius: 8px;
  transition: transform 0.3s ease;
}

.education__item:hover {
  transform: translateY(-4px);
}

.education__item-degree {
  font-size: 1.25rem;
  color: #fff;
  margin-bottom: 0.5rem;
}

.education__item-institution {
  color: #888;
  margin-bottom: 0.5rem;
}

.education__item-period {
  color: #888;
  font-size: 0.875rem;
}

.education__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.education__card {
  background: rgba(255, 255, 255, 0.05);
  padding: 1.5rem;
  border-radius: 8px;
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
}

.education__card:hover {
  transform: translateY(-4px);
}

.education__card-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 4px;
  margin-bottom: 1rem;
}

.education__card-title {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
}

.education__card-title{
  color: #fff;
  text-decoration: none;
  transition: color 0.3s ease;
}

.education__card-title:hover {
  color: #888;
}

.education__card-institution {
  color: #888;
  font-size: 0.875rem;
  margin-bottom: 1rem;
}

.education__card-description {
  color: #888;
  line-height: 1.6;
}

.education__card-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #888;
  text-decoration: none;
  margin-top: auto;
  padding-top: 1rem;
  transition: color 0.3s ease;
}

.education__card-link:hover {
  color: #fff;
}

.education__card-link svg {
  transition: transform 0.3s ease;
}

.education__card-link:hover svg {
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .education {
    padding: 6rem 1rem 2rem;
  }

  .education__title {
    font-size: 2.5rem;
  }

  .education__section-title {
    font-size: 1.75rem;
  }
}
</style> 