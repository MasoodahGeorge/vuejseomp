<template>
    <nav class="nav-sec">
      <div class="fixed-top" :class="{'scrolled': isScrolled}">
        <nav class="navbar navbar-expand-lg" id="nv">
          <div class="container-fluid">
            <router-link to="/" class="navbar-brand">
              <img src="https://github.com/MasoodahGeorge/p3img/blob/main/mg-removebg-preview.png?raw=true" alt="Logo" class="d-inline-block align-text-top"/>
            </router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
              <span class="navbar-toggler-icon"></span>
            </button>
  
            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
              <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div class="offcanvas-body">
                <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                  <li class="nav-item">
                    <a href="#home" class="nav-link" exact>Home</a>
                  </li>
                  <li class="nav-item">
                    <a href="#about" class="nav-link">About</a>
                  </li>
                  <li class="nav-item">
                    <a href="#resume" class="nav-link">Resume</a>
                  </li>
                  <li class="nav-item">
                    <a href="#skills" class="nav-link">Skills</a>
                  </li>
                  <li class="nav-item">
                    <a href="#testimonials" class="nav-link">Testimonials</a>
                  </li>
                  <li class="nav-item">
                    <a href="#projects" class="nav-link">Projects</a>
                  </li>
                  <li class="nav-item">
                    <a href="#contact" class="nav-link">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'NavbarComp',
    data() {
      return {
        isScrolled: false
      };
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll);
    },
    beforeUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
      handleScroll() {
        this.isScrolled = window.scrollY > 50;
      }
    }
  };
  </script>
  
  <style scoped>
  .fixed-top {
    /* background-color: transparent; */
    transition: background-color 0.3s ease;
  }
  
  .fixed-top.scrolled {
    background-color: rgba(175, 142, 200, 0.7); /* Change to desired color when scrolled */
  }
  
  .navbar {
    padding: 1rem 1rem;
    background-color: transparent;
  }
  
  .d-inline-block {
    width: 100%;
    height: 30px;
  }
  
  .offcanvas-body:not(.navbar-nav) {
    /* background-color: rgba(175, 142, 200, 0.7); */
    color: rgb(51, 51, 51);
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  }
  
  .nav-link {
    color: inherit;
    text-decoration: none;
    transition: color 0.3s ease, transform 0.3s ease;
  }
  
  .nav-link:hover {
    color: #696969;
    transform: scale(1.1);
  }
  </style>
  