<template>
  <div class="home" id="home">
    <div v-if="home" class="profile-container">
      <!-- <img :src="home.image" alt="Profile Image" class="profile-image"> -->
      <h1>{{ home.name }} {{ home.surname }}</h1>
      <h2>{{ home.title }}</h2>
    </div>
    <div v-else class="loading">
      Loading...
    </div>
  </div>
</template>

<script>
// import axios from 'axios';
// import Navbar from '../components/NavbarComp.vue'

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
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
    /* started changes */
  background-image: url('https://github.com/MasoodahGeorge/p3img/blob/main/lmaoo.png?raw=true');
  background-repeat: no-repeat;
  background-size: cover;
  /* background-size: cover;
  background-repeat: repeat-y; */
  text-align: center;
}


.profile-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background: rgba(243, 243, 243, 0.9); */
  padding-left: 10%;
  padding-right: 10%;
  padding-top: 5%;
  padding-bottom: 5%;
  /* box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3); */
  border-radius:10px;
}


h1 {
  margin: 0;
  color: white;
  font-size: 500%;
}

h2 {
  font-size: 100%;
  color: white;
}

.loading {
  font-size: 100%;
  color: #5d5d5d;
}

@media only screen and (min-width: 300px) {
  .home {
  display: flex;
  justify-content: center;
  align-items: center;
    /* started changes */
  background-image: url('https://github.com/MasoodahGeorge/p3img/blob/main/lmaoo.png?raw=true');
  background-repeat: no-repeat;
  width: 100%;
  background-size: cover;
  height: 100vh;
  /* background-size: cover;
  background-repeat: repeat-y; */
  text-align: center;
}


.profile-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background: rgba(243, 243, 243, 0.9);
  padding-left: 10%;
  padding-right: 10%;
  padding-top: 5%;
  padding-bottom: 5%;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  border-radius:10px; */
}

h1 {
  margin: 0;
  color: white;
  font-size: 300%;
}

h2 {
  margin-top: 5%;
  font-size: 80%;
  color: white;
}

.loading {
  font-size: 100%;
  color: #5d5d5d;
}
}

@media only screen and (min-width: 481px) {
  .home {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
    /* started changes */
  background-image: url('https://github.com/MasoodahGeorge/p3img/blob/main/lmaoo.png?raw=true');
  background-repeat: no-repeat;
  background-size: cover;
  /* background-size: cover;
  background-repeat: repeat-y; */
  text-align: center;
}


.profile-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background: rgba(243, 243, 243, 0.9); */
  /* padding-left: 10%;
  padding-right: 10%;
  padding-top: 5%;
  padding-bottom: 5%;
  /* box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  border-radius:10px; */
}

h1 {
  margin: 0;
  color: white;
  font-size: 300%;
}

h2 {
  font-size: 80%;
  color: white;
}

.loading {
  font-size: 100%;
  color: #5d5d5d;
}
}

/* Example of targeting smaller tablets and larger phones */
@media only screen and (min-width: 641px) {
  .home {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
    /* started changes */
  background-image: url('https://github.com/MasoodahGeorge/p3img/blob/main/lmaoo.png?raw=true');
  background-repeat: no-repeat;
  background-size: cover;
  /* background-size: cover;
  background-repeat: repeat-y; */
  text-align: center;
}


.profile-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background: rgba(243, 243, 243, 0.9); */
  /* padding-left: 10%;
  padding-right: 10%;
  padding-top: 5%;
  padding-bottom: 5%;
  /* box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  border-radius:10px; */
}

h1 {
  margin: 0;
  color: white;
  font-size: 300%;
}

h2 {
  font-size: 80%;
  color: white;
}

.loading {
  font-size: 100%;
  color: #5d5d5d;
}
}

/* Example of targeting tablets and larger phones */
@media only screen and (min-width: 769px) {
  .home {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
    /* started changes */
  background-image: url('https://github.com/MasoodahGeorge/p3img/blob/main/lmaoo.png?raw=true');
  background-repeat: no-repeat;
  background-size: cover;
  /* background-size: cover;
  background-repeat: repeat-y; */
  text-align: center;
}


.profile-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background: rgba(243, 243, 243, 0.9); */
  /* padding-left: 10%;
  padding-right: 10%;
  padding-top: 5%;
  padding-bottom: 5%;
  /* box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  border-radius:10px; */
}

h1 {
  margin: 0;
  color: white;
  font-size: 300%;
}

h2 {
  font-size: 80%;
  color: white;
}

.loading {
  font-size: 100%;
  color: #5d5d5d;
}}

/* Example of targeting tablets and smaller desktops */
@media only screen and (min-width: 1025px) {
  .home {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
    /* started changes */
  background-image: url('https://github.com/MasoodahGeorge/p3img/blob/main/lmaoo.png?raw=true');
  background-repeat: no-repeat;
  background-size: cover;
  /* background-size: cover;
  background-repeat: repeat-y; */
  text-align: center;
}


.profile-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background: rgba(243, 243, 243, 0.9); */
  /* padding-left: 10%;
  padding-right: 10%;
  padding-top: 5%;
  padding-bottom: 5%;
  /* box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  border-radius:10px; */
}

h1 {
  margin: 0;
  color: white;
  font-size: 500%;
}

h2 {
  font-size: 100%;
  color: white;
}

.loading {
  font-size: 100%;
  color: #5d5d5d;
}}

</style>