<template>
  <div class="projects" id="projects">
    <div v-if="projects" class="projects-container">
      <h1>{{ projects.heading }}</h1>
      <div class="row justify-content-center">
        <div 
          v-for="(item, index) in projects.items" 
          :key="index" 
          class="col-lg-4 col-md-6 col-sm-12 mb-4"
        >
          <div class="card project-card">
            <div class="image-container">
              <img :src="item.image" :alt="item.name" class="card-img-top project-image">
            </div>
            <div class="card-body">
              <h5 class="card-title">{{ item.name }}</h5>
              <p class="card-text">{{ item.description }}</p>
              <div class="overlay">
                <button @click="openLink(item.github)" class="btn btn-primary">GitHub</button>
                <button @click="openLink(item.view)" class="btn btn-secondary">View</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="loading">
      Loading...
    </div>
  </div>
</template>

<script>
// import axios from 'axios';

export default {
  name: 'ProjectsView',
  data() {
    return {
      projects: null
    };
  },
  mounted() {
    fetch('https://raw.githubusercontent.com/MasoodahGeorge/lmao.json/main/data/data.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        this.projects = data.projects;
      })
      .catch(error => {
        console.error('Error fetching projects data:', error);
      });
  },
  methods: {
    openLink(url) {
      window.open(url, '_blank');
    }
  }
};
</script>

<style scoped>
.projects {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 5rem 0;
}

.projects-container {
  padding: 2rem;
  border-radius: 10px;
  width: 100%;
  margin: 0 auto;
}

h1 {
  font-size: 2.5em;
  margin-bottom: 20px;
  color: #333;
}

.project-card {
  padding:;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  height: 350px;
}

.image-container {
  height: 200px;
  overflow: hidden;
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-body {
  padding: 20px;
  height: 100px;
}

.overlay {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-card:hover .overlay {
  opacity: 1;
  border-radius: 8px;
}

.overlay button {
  padding: 10px 20px;
  font-size: 16px;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn {
  background-color: #5C867D;
  justify-content: center;
  text-align: center;
}

.overlay {
  height: 100%;
  width: 100%;
  top: 0;
  opacity: 0;
  transition: .5s ease;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3%;
}

.overlay button:hover {
  background-color: #7fa39b;
}

.loading {
  font-size: 1.5em;
  color: #999;
}
</style>
