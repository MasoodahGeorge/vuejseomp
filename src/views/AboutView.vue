<template>
  <div class="about" id="about">
    <div class="container">
      <div class="row align-items-center justify-content-center">
        <div class="col-lg-8 col-md-10 col-sm-12">
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
  padding: 5rem 0;
  text-align: center;
}

.about-container {
  padding-top:5rem;
  padding-bottom:5rem;
  margin: 0 auto;
}

h1 {
  margin-bottom: 20px;
  color: #333;
}

p {
  font-size: 1rem;
  color: #555;
  line-height: 1.6;
}

.loading {
  font-size: 1.5em;
  color: #999;
}

</style>
