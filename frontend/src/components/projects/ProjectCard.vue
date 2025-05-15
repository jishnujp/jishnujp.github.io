<script setup>
defineProps({
  project: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <article class="project-card">
    <h3 class="project-card__title">
      <a :href="project.repo" target="_blank" class="project-card__title-link">
        {{ project.name }}
      </a>
    </h3>
    
    <p class="project-card__description">{{ project.description }}</p>
    
    <div class="project-card__technologies">
      <span v-for="tech in project.technologies" :key="tech" class="project-card__tech">
        {{ tech }}
      </span>
    </div>

    <div class="project-card__links">
      <a v-if="project.demo" :href="project.demo" target="_blank" class="project-card__demo">
        <i class="fas fa-play"></i> Demo
      </a>
      <a v-if="project.repo" :href="project.repo" target="_blank" class="project-card__code">
        <i class="fab fa-github"></i> Code
      </a>
      <a v-if="project.link" :href="project.link" target="_blank" class="project-card__link">
        <i class="fas fa-link"></i> Link
      </a>
      <a v-if="project.certificate" :href="project.certificate" target="_blank" class="project-card__certificate">
        <i class="fas fa-file-alt"></i> Certificate
      </a>
    </div>
  </article>
</template>

<style scoped>
.project-card {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  padding: 1.5rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.project-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
}

.project-card__title {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.project-card__title-link {
  color: #fff;
  text-decoration: none;
  transition: color 0.3s ease;
}

.project-card__title-link:hover {
  color: #888;
}

.project-card__description {
  color: #888;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.project-card__technologies {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.project-card__tech {
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
  font-size: 0.875rem;
}

.project-card__links {
  display: flex;
  gap: 1rem;
}

.project-card__demo,
.project-card__code,
.project-card__certificate,
.project-card__link {
  color: #888;
  text-decoration: none;
  font-size: 0.875rem;
  transition: color 0.3s ease;
}

.project-card__demo:hover,
.project-card__code:hover,
.project-card__certificate:hover,
.project-card__link:hover {
  color: #fff;
}

.project-card__demo i,
.project-card__code i,
.project-card__certificate i,
.project-card__link i {
  margin-right: 0.5rem;
}
</style> 