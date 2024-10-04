<template>
  <div class="skills" id="skills">
    <br />
    <br />
    <div class="container">
      <div class="skills-container">
        <h1>{{ skills.heading }}</h1>
        <div class="row justify-content-center">
          <div 
            v-for="skill in skills.items" 
            :key="skill.name" 
            class="col-lg-3 col-md-4 col-sm-6 mb-4"
          >
            <div class="card">
              <img :src="skill.image" :alt="skill.name" class="card-img-top" />
              <div class="card-body">
                <p class="card-text">{{ skill.name }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from 'axios';

export default {
  name: 'SkillsView',
  data() {
    return {
      skills: {
        heading: '',
        items: []
      }
    };
  },
  mounted() {
    fetch('https://raw.githubusercontent.com/MasoodahGeorge/lmao.json/main/data/data.json') // Replace with your API endpoint
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        this.skills = data.skills; // Assuming your JSON structure has an 'skills' object
      })
      .catch(error => {
        console.error('Error fetching skills data:', error);
      });
  }
};
</script>

<style scoped>
.skills {
  padding: 5% 0; /* Adjust padding as needed */
}

.skills-container {
  text-align: center;
  max-width: 80%; /* Maintain responsiveness */
  margin: 0 auto;
  background-color: rgba(243, 243, 243, 0.5);
  border-radius: 10px;
  padding: 2%; /* Adjust padding as needed */
}

h1 {
  color: #333;
}

.card {
  border: none;
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-10px); /* Example hover effect, adjust as needed */
}

.card-img-top {
  width: 100%; /* Ensure images are responsive */
  height: auto;
}

.card-body {
  text-align: center;
}

.card-text {
  color: #666;
  font-size: 1.2em;
}
</style>
