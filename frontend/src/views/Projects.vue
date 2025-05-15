<script setup>
import { ref } from 'vue'
import ProjectCard from '@/components/projects/ProjectCard.vue'
import portfolioData from '@/data/portfolio.json'

const projects = ref(portfolioData.projects)
</script>

<template>
  <main class="projects">
    <div class="projects__container">
      <h1 class="projects__title">Projects</h1>
      <p class="projects__subtitle">A collection of my work and personal projects</p>
      
      <div class="projects__grid">
        <ProjectCard
          v-for="project in projects"
          :key="project.name"
          :project="project"
        />
      </div>
    </div>
  </main>
</template>

<style scoped>
.projects {
  min-height: 100vh;
  padding: 8rem 2rem 4rem;
  background: #121212;
  color: #fff;
}

.projects__container {
  max-width: 1200px;
  margin: 0 auto;
}

.projects__title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #fff, #888);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.projects__subtitle {
  color: #888;
  font-size: 1.2rem;
  margin-bottom: 3rem;
}

.projects__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

@media (max-width: 768px) {
  .projects {
    padding: 6rem 1rem 2rem;
  }

  .projects__title {
    font-size: 2.5rem;
  }

  .projects__subtitle {
    font-size: 1rem;
  }
}
</style> 