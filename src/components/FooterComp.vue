<template>
    <footer class="footer">
      <p style="color:#666;">&copy; {{ currentYear }} Masoodah George. All rights reserved.</p>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'FooterComp',
    data() {
      return {
        currentYear: new Date().getFullYear()
      };
    }
  };
  </script>
  
  <style scoped>
  .footer {
    font-family: "Fredoka", system-ui;
    font-optical-sizing: auto;
    font-weight: <weight>;
    font-style: normal;
    font-variation-settings:"wdth" 100;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    background-color: #fff;
    width: 100%;
    text-align: center;
  }
  
  .footer p {
    margin: 0;
  }
  </style>
  