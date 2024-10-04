<template>
  <div class="resume" id="resume">
    <br />
    <br />
    <div class="container">
      <div class="resume-container">
        <h1>{{ resume.heading }}</h1>
        <div class="timeline">
          <div 
            v-for="(item, index) in resume.timeline" 
            :key="index" 
            :id="'item' + (index + 1)" 
            class="timeline-item col-lg-6 col-md-8 col-sm-12" 
            :class="{ visible: item.visible }"
          >
            <div class="timeline-content">
              <h2>{{ item.duration }}</h2>
              <p>{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ResumeView',
  data() {
    return {
      resume: {
        heading: "",
        timeline: []
      }
    };
  },
  mounted() {
    axios.get('https://raw.githubusercontent.com/MasoodahGeorge/lmao.json/main/data/data.json') // Replace with your API endpoint
      .then(response => {
        this.resume = response.data.resume; // Assuming your JSON structure has a 'resume' object
        // Initialize visibility state for each timeline item
        this.resume.timeline = this.resume.timeline.map(item => ({
          ...item,
          visible: false
        }));
        this.initIntersectionObserver();
      })
      .catch(error => {
        console.error('Error fetching resume data:', error);
      });
  },
  methods: {
    initIntersectionObserver() {
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      };

      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.id.replace('item', '')) - 1;
            this.resume.timeline[index].visible = true;
            observer.unobserve(entry.target);
          }
        });
      }, options);

      this.$nextTick(() => {
        this.resume.timeline.forEach((item, index) => {
          const element = document.getElementById(`item${index + 1}`);
          if (element) {
            observer.observe(element);
          }
        });
      });
    }
  }
};
</script>

<style scoped>
.resume {
  text-align: center;
  padding: 1rem;
  background-color: #d9bbbd;
}

.resume-container {
  padding: 5%;
  border-radius: 10px;
  margin: 0 auto;
}

.timeline {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.timeline-item {
  width: 100%;
  margin-bottom: 2%;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 1s ease-out, transform 1s ease-out;
}

.timeline-item.visible {
  opacity: 1;
  transform: translateY(0);
}

.timeline-content {
  background: #fff;
  padding: 5%;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}

h1 {
  color: #333;
}

h2 {
  color: #806088;
}

p {
  color: #666;
}
</style>
