<template>
  <footer class="footer">
    <!-- Social Media Icons Section (above the copyright paragraph) -->
    <div class="social-media-banner mt-4">
      <ul class="list-unstyled d-flex justify-content-center mb-3">
        <li class="nav-item mx-3">
          <a href="https://github.com/MasoodahGeorge" target="_blank">
            <img src="https://i.postimg.cc/NF6pG0Qb/github.jpg" alt="GitHub Icon" class="contact-icon">
          </a>
        </li>
        <li class="nav-item mx-3">
          <a href="https://web.whatsapp.com/send?phone=27621636155" target="_blank">
            <img src="https://i.postimg.cc/HLnZ0Hts/whatsapp-icon-free-png.png" alt="WhatsApp Icon" class="contact-icon">
          </a>
        </li>
        <li class="nav-item mx-3">
          <a href="https://za.linkedin.com/in/masoodah-george-79515b2b6" target="_blank">
            <img src="https://i.postimg.cc/FRcxGKkm/linkedin-logo-linkedin-icon-transparent-free-png-1.png" alt="LinkedIn Icon" class="contact-icon">
          </a>
        </li>
      </ul>
    </div>

    <!-- Copyright Paragraph -->
    <div>
      <p style="color:#666;">&copy; {{ currentYear }} Masoodah George. All rights reserved.</p>
    </div>
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
  font-weight: weight;
  font-style: normal;
  font-variation-settings: "wdth" 100;
  display: flex;
  flex-direction: column;
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

.contact-icon {
  width: 30px;
  height: 30px;
  margin-right: 8px;
}
</style>
