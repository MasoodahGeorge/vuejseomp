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
            <div class="card skill-card" @mouseover="skill.isHovered = true" @mouseleave="skill.isHovered = false">
              <a v-if="skill.link" :href="skill.link" target="_blank">
                <img :src="skill.image" :alt="skill.name" class="card-img-top" />
                <div v-if="skill.isHovered" class="overlay">
                  <button class="view-button">View Certificates</button>
                </div>
              </a>
              <img v-else :src="skill.image" :alt="skill.name" class="card-img-top" />
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
        // Add isHovered property to each skill item
        this.skills = data.skills;
        this.skills.items = this.skills.items.map(skill => ({
          ...skill,
          isHovered: false
        }));
      })
      .catch(error => {
        console.error('Error fetching skills data:', error);
      });
  }
};
</script>

<style scoped>
.skills {
  padding: 5% 0; 
}

.skills-container {
  text-align: center;
  max-width: 80%;
  margin: 0 auto;
  background-color: #ead0d1;
  border-radius: 10px;
  padding: 2%;
}

h1 {
  color: #333;
}

.card {
  border: none;
  transition: transform 0.3s ease;
  position: relative; /* Added for overlay */
  overflow: hidden; /* To hide the overlay */
}

.card:hover {
  transform: translateY(-10px);
}

.card-img-top {
  width: 100%;
  height: auto;
}

.card-body {
  text-align: center;
}

.card-text {
  color: #666;
  font-size: 1.2em;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}

.view-button {
  background-color: #ff5722;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.view-button:hover {
  background-color: #e64a19;
}
</style>
