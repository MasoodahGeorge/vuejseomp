<template>
  <div id="app">
    <Navbar />
    <div v-if="isLoading" class="spinner-container">
      <Spinner :isLoading="isLoading"></Spinner>
    </div>
    <div v-else>
      <router-view></router-view>
      <section id="home-section">
        <router-view name="home"></router-view>
      </section>
      <section id="about-section">
        <router-view name="about"></router-view>
      </section>
      <section id="resume-section">
        <router-view name="resume"></router-view>
      </section>
      <section id="skills-section">
        <router-view name="skills"></router-view>
      </section>
      <section id="testimonials-section">
        <router-view name="testimonials"></router-view>
      </section>
      <section id="projects-section">
        <router-view name="projects"></router-view>
      </section>
      <section id="contact-section">
        <router-view name="contact"></router-view>
      </section>
      <FooterComp />
    </div>
  </div>
</template>

<script>
import Navbar from './components/NavbarComp.vue';
import FooterComp from './components/FooterComp.vue';
import Spinner from './components/SpinnerComp.vue'; // Adjust the path if needed

export default {
  name: 'App',
  components: {
    Navbar,
    FooterComp,
    Spinner
  },
  data() {
    return {
      isLoading: true
    };
  },
  mounted() {
    // Simulate data loading with a timeout
    setTimeout(() => {
      this.isLoading = false;
    }, 3000); // Adjust the timeout duration as needed
  }
};
</script>

<style scoped>
#about-section {
  background-repeat: none;
  background-color: #ead0d1;
  background-size: cover;
}
#skills-section {
  background-repeat: none;
  background-color: #ead0d1;
  background-size: cover;
}
#testimonials-section {
  background-color: #ead0d1;
  background-repeat: none;
  background-size: cover;
}
#projects-section {
  background-color: #ead0d1;
  background-repeat: none;
  background-size: cover;
}
#contact-section {
  background-color: #ead0d1;
  background-repeat: none;
  background-size: cover;
}

#app {
  font-family: "Fredoka", system-ui;
  font-optical-sizing: auto;
  font-weight: <weight>;
  font-style: normal;
  font-variation-settings:
    "wdth" 100;
  text-align: center;
  color: #666;
  background-color: #F3F3F3;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

.spinner-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(255, 172, 237);
  z-index: 1000;
}

</style>
