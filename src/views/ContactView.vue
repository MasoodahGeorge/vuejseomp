<template>
    <div class="contact" id="contact">
        <BR></BR>
        <BR></BR>
        <BR></BR>
      <div v-if="contact" class="contact-container">
        <h1>{{ contact.heading }}</h1>
        <p>{{ contact.paragraph }}</p>
        <form action="https://formspree.io/f/mpzvvdbv" method="POST" class="contact-form">
            <div v-for="(field, index) in contact.form.fields" :key="index" class="form-group">
                <label :for="field.label">{{ field.label }}</label>
                <input v-if="field.type !== 'textarea'" :type="field.type" :placeholder="field.placeholder" :id="field.label" :name="field.label" required>
                <textarea v-else :placeholder="field.placeholder" :id="field.label" :name="field.label" rows="4" required></textarea>
            </div>
            <button type="submit" class="btn btn-primary">{{ contact.form.submitButtonText }}</button>
            <BR></BR>
            <div class="icons">
              <a v-for="(icon, index) in contact.icons" :key="index" :href="icon.link" target="_blank">
                <img :src="icon.icon" alt="Contact Icon" class="contact-icon">
              </a>
            </div>
        </form>
      </div>
      <div v-else class="loading">
        Loading...
      </div>
    </div>
  </template>
  
  <script>
  // import axios from 'axios';
  
  export default {
    name: 'ContactView',
    data() {
      return {
        contact: null
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
        this.contact = data.contact; // Assuming your JSON structure has an 'contact' object
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
    /* padding: 20px; */
    /* background-image: url('https://i.postimg.cc/pL2pKB9Y/home.png'); */
    /* background-repeat: no-repeat;
    background-size: cover; */
    background-position: center;
    text-align: center;
  }
  
  .contact-container {
    background:  rgba(243, 243, 243, 0.5); /* slightly transparent background */
    padding-right: 3%;
    padding-left: 3%;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    /* max-width: 800px; */
    width: 80%;
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
  
  .contact-icon {
    width: 60px;
    height: 60px;
    border-radius: 9999px;
    padding: 10%;
  }
  
  .contact-form {
    display: flex;
    flex-direction: column;
    align-items: center;
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
  