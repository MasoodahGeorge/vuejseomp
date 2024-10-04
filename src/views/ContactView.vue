<template>
  <div class="contact" id="contact">
    <div v-if="contact" class="contact-container">
      <h1>{{ contact.heading }}</h1>
      <p>{{ contact.paragraph }}</p>
      <form action="https://formspree.io/f/mpzvvdbv" method="POST" class="contact-form">
        <div class="row">
          <div class="col-md-6">
            <div v-for="(field, index) in contact.form.fields" :key="index" class="form-group">
              <label :for="field.label">{{ field.label }}</label>
              <input v-if="field.type !== 'textarea'" 
                     :type="field.type" 
                     :placeholder="field.placeholder" 
                     :id="field.label" 
                     :name="field.label" 
                     class="form-control" 
                     required>
              <textarea v-else 
                        :placeholder="field.placeholder" 
                        :id="field.label" 
                        :name="field.label" 
                        rows="4" 
                        class="form-control" 
                        required></textarea>
            </div>
            <button type="submit" class="btn btn-primary">{{ contact.form.submitButtonText }}</button>
          </div>

          <div class="col-md-6" style="padding:1rem;">
            <div v-for="(icon, index) in contact.icons" :key="index" class="social-icon" style="padding:3px;">
              <a :href="icon.link" target="_blank">
                <img :src="icon.icon" alt="Contact Icon" class="contact-icon">
              </a>
            </div>
              <p>My cell: 062 163 3155</p>
              <p>Cape Town, Western Cape</p>
          </div>
        </div>
      </form>
    </div>
    <div v-else class="loading">
      Loading...
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactView',
  data() {
    return {
      contact: null
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
        this.contact = data.contact; // Assuming your JSON structure has a 'contact' object
      })
      .catch(error => {
        console.error('Error fetching contact data:', error);
      });
  }
};
</script>

<style scoped>
.contact {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-position: center;
  text-align: center;
  padding: 2rem 0; /* Added padding for vertical spacing */
}

.contact-container {
  background: rgba(243, 243, 243, 0.5); /* slightly transparent background */
  padding: 3rem; /* Increased padding for better layout */
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 90%; /* Adjusted width for responsiveness */
  max-width: 800px; /* Maximum width for larger screens */
  margin: 0 auto;
  margin-bottom: 5%;
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
  margin-bottom: 20px;
}

.icons {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
}

.social-icon {
  margin-bottom: 10px;
}

.contact-icon {
  width: 50px; /* Adjusted size for better responsiveness */
  height: 50px;
  border-radius: 9999px;
}

.contact-form {
  display: flex;
  flex-direction: column;
  align-items: stretch; /* Stretch to full width */
}

.form-group {
  margin-bottom: 15px;
  width: 100%;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input,
textarea {
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 1em;
}

button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

.loading {
  font-size: 1.5em;
  color: #999;
}
</style>
