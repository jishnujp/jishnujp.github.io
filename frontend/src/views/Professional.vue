<script setup>
import portfolioData from '@/data/portfolio.json'
import { ref } from 'vue'

const workExperience = portfolioData.workExperience
const expandedItems = ref({})

const toggleWorkItem = (jobIndex, workIndex) => {
  const key = `${jobIndex}-${workIndex}`
  expandedItems.value[key] = !expandedItems.value[key]
}
</script>

<template>
  <main class="experience">
    <div class="experience__container">
      <h1 class="experience__title">Experience</h1>
      
      <section class="experience__section">
        <!-- <h2 class="experience__section-title">Work Experience</h2> -->
        <div class="experience__timeline">
          <div v-for="(job, jobIndex) in workExperience" :key="job.title" class="experience__item">
            <h3 class="experience__item-title">{{ job.title }}</h3>
            <p class="experience__item-company">{{ job.company }}</p>
            <p class="experience__item-period">{{ job.period }}</p>
            <p class="experience__item-description">{{ job.jobDescription }}</p>
            
            <div v-if="job.workItems && job.workItems.length > 0" class="experience__work-items">
              <div v-for="(work, workIndex) in job.workItems" :key="workIndex" class="experience__work-item">
                <div class="experience__work-item-header" @click="toggleWorkItem(jobIndex, workIndex)">
                  <h4 class="experience__work-item-title">{{ work.title }}</h4>
                  <div v-if="!expandedItems[`${jobIndex}-${workIndex}`]" class="experience__work-item-tech">
                    <span v-for="(tech, techIndex) in work.technologies.slice(0, 3)" :key="tech" class="experience__tech-tag">{{ tech }}</span>
                    <span v-if="work.technologies.length > 3" class="experience__tech-tag experience__tech-tag-more">+{{ work.technologies.length - 3 }}</span>
                  </div>
                  <span class="experience__work-item-toggle" :class="{ 'expanded': expandedItems[`${jobIndex}-${workIndex}`] }">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 4L6 8L10 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </span>
                </div>
                <div v-show="expandedItems[`${jobIndex}-${workIndex}`]" class="experience__work-item-content">
                  <div class="experience__work-item-tech experience__work-item-tech-expanded">
                    <span v-for="tech in work.technologies" :key="tech" class="experience__tech-tag">{{ tech }}</span>
                  </div>
                  <p class="experience__work-item-description">{{ work.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<style scoped>
.experience {
  min-height: 100vh;
  padding: 8rem 2rem 4rem;
  background: #121212;
  color: #fff;
}

.experience__container {
  max-width: 1200px;
  margin: 0 auto;
}

.experience__title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 3rem;
  background: linear-gradient(45deg, #fff, #888);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.experience__section {
  margin-bottom: 4rem;
}

.experience__section-title {
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #fff;
}

.experience__timeline {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.experience__item {
  background: rgba(255, 255, 255, 0.05);
  padding: 1.5rem;
  border-radius: 8px;
  transition: transform 0.3s ease;
}

.experience__item:hover {
  transform: translateY(-4px);
}

.experience__item-title {
  font-size: 1.5rem;
  color: #fff;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.experience__item-company {
  color: #888;
  margin-bottom: 0.5rem;
}

.experience__item-period {
  color: #888;
  font-size: 0.875rem;
}

.experience__item-description {
  color: #888;
  margin-bottom: 1rem;
  line-height: 1.6;
}

.experience__work-items {
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.experience__work-item {
  margin-bottom: 1.5rem;
}

.experience__work-item:last-child {
  margin-bottom: 0;
}

.experience__work-item-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 4px;
  transition: background-color 0.2s ease;
}

.experience__work-item-header:hover {
  background: rgba(255, 255, 255, 0.05);
}

.experience__work-item-title {
  font-size: 1rem;
  color: #aaa;
  margin: 0;
  flex: 1;
  font-style: italic;
  font-weight: 500;
}

.experience__work-item-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  color: #888;
  transition: transform 0.2s ease;
}

.experience__work-item-toggle.expanded {
  transform: rotate(180deg);
}

.experience__work-item-content {
  padding: 1rem 0.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin-top: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.experience__work-item-tech-expanded {
  margin: 0;
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.experience__work-item-description {
  color: #888;
  line-height: 1.6;
  margin: 0;
}

.experience__work-item-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  align-items: center;
}

.experience__tech-tag {
  background: rgba(255, 255, 255, 0.05);
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.875rem;
  color: #888;
}

.experience__tech-tag-more {
  background: rgba(255, 255, 255, 0.02);
  color: #666;
}

.experience__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.experience__card {
  background: rgba(255, 255, 255, 0.05);
  padding: 1.5rem;
  border-radius: 8px;
  transition: transform 0.3s ease;
}

.experience__card:hover {
  transform: translateY(-4px);
}

.experience__card-title {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
}

.experience__card-title a {
  color: #fff;
  text-decoration: none;
  transition: color 0.3s ease;
}

.experience__card-title a:hover {
  color: #888;
}

.experience__card-institution {
  color: #888;
  font-size: 0.875rem;
  margin-bottom: 1rem;
}

.experience__card-description {
  color: #888;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .experience {
    padding: 6rem 1rem 2rem;
  }

  .experience__title {
    font-size: 2.5rem;
  }

  .experience__section-title {
    font-size: 1.75rem;
  }
}
</style> 