<template>
    <div class="projects" id="projects">
      <div v-if="projects" class="projects-container">
        <h1>{{ projects.heading }}</h1>
        <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div v-for="(item, index) in projects.items" :key="index" :class="['carousel-item', { active: index === 0 }]">
              <div class="carousel-item-container">
                <div class="card project-card">
                  <img :src="item.image" :alt="item.name" class="card-img-top project-image">
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
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
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
  }
  ,
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
    background-repeat: no-repeat;
    background-size: cover;
    text-align: center;
    height: 100vh;
  }
  
  .projects-container {
    /* background: rgba(243, 243, 243, 0.9); slightly transparent background */
    padding: 15%;
    border-radius: 10px;
    /* box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); */
    width: 100%;
    margin: 0 auto;
  }
  
  h1 {
    font-size: 2.5em;
    margin-bottom: 20px;
    color: #333;
  }
  
  .carousel-item-container {
    display: flex;
    justify-content: center;
  }
  
  .project-card {
    width: 70%;
    margin: 0 10px;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  
  
  .project-image {
    width: 100%;
    height: auto;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    transition: opacity 0.3s ease;
  }
  
  .project-card:hover .project-image {
    opacity: 0.7;
  }
  
  .card-body {
    padding: 20px;
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
  
  .btn{
    background-color: #5C867D;
    justify-content: center;
    text-align: center;
  }
  .overlay{
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