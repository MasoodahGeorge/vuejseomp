<template>
  <div class="about" id="about">
    <div class="container">
      <div class="row align-items-center">
        <div>
          <div v-if="about" class="about-container">
            <h1>{{ about.heading }}</h1>
            <p>{{ about.description }}</p>
          </div>
          <div v-else class="loading">
            Loading...
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from 'axios';

export default {
  name: 'AboutView',
  data() {
    return {
      about: null
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
      this.about = data.about;
    })
    .catch(error => {
      console.error('Error fetching about data:', error);
    });
}

};
</script>

<style scoped>
.about {
  padding: 5rem;
  background-image: none;
  text-align: center;
}

.about-container {
  background-color: rgb(255, 255, 255);
  padding: 5%;
  max-width: 100%;
  margin: 0 auto;
}

.profile-image {
  width: 100%;
}

h1 {
  font-size: 2.5em;
  margin-bottom: 20px;
  color: #333;
}

p {
  font-size: 1.2em;
  color: #555;
  line-height: 1.6;
}

.loading {
  font-size: 1.5em;
  color: #999;
}

/* Responsive styles */
@media only screen and (max-width: 300px) {
  .profile-image {
    width: 100%;
  }
  .about-container {
    padding: 3%;
  }
  h1 {
    font-size: 2em;
  }
  p {
    font-size: 100%;
  }
}

/* Medium screens (max-width: 600px) */
@media only screen and (max-width: 600px) {

  .about-container {
    padding: 4%;
  }
  h1 {
    font-size: 2.2em;
  }
  p {
    font-size: 1.1em;
  }
}

/* Large screens (max-width: 900px) */
@media only screen and (max-width: 900px) {
  .about-container {
    padding: 5%;
  }
  h1 {
    font-size: 2.5em;
  }
  p {
    font-size: 1.2em;
  }
}

/* Extra large screens (min-width: 1200px) */
@media only screen and (min-width: 1200px) {
  .about-container {
    padding: 6%;
  }
  h1 {
    font-size: 3em;
  }
  p {
    font-size: 1.5em;
  }
}
</style>
