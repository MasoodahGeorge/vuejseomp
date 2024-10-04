<template>
  <div class="home" id="home">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-6" v-if="home">
          <h1>{{ home.name }} {{ home.surname }}</h1>
            <h2>{{ home.title }}</h2>
        </div>
        <div class="col-md-6">
          <div v-if="home" class="profile-container">
            <img :src="home.image" alt="Profile Image" class="profile-image">
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

export default {
  name: 'HomeView',
  data() {
    return {
      home: null
    };
  },
  mounted() {
  fetch('https://raw.githubusercontent.com/MasoodahGeorge/lmao.json/main/data/data.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      return response.json();
    })
    .then(data => {
      this.home = data.home;
    })
    .catch(error => {
      console.error('Error fetching home data:', error);
    });
}
};
</script>

<style scoped>
.home {
  height: 100vh;
  background-color: #ead0d1;
  padding-top: 10rem;
  padding-bottom: 3rem;
}

.profile-container {
  margin:0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.profile-image {
  width: 80%;
}

h1 {
  margin: 0;
  color: white;
  font-size: 3em;
}

h2 {
  font-size: 1.5em;
  color: white;
}

.loading {
  font-size: 1.5em;
  color: #5d5d5d;
}

/* Responsive Styles */
@media (max-width: 767px) {
  .profile-container {
    padding: 3%;
  }

  h1 {
    font-size: 2em;
  }

  h2 {
    font-size: 1.2em;
  }
}
</style>
