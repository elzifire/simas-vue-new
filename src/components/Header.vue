<template>
    <nav class="navbar navbar-expand-md navbar-white fixed-top bg-white" style="border-top: 5px solid;">
        <div class="container-fluid">

          <router-link :to="{ name: 'home' }" class="navbar-brand"><img src="/assets/img/logo2.png" alt="Logo" width="30" height="24" class="d-inline-block align-text-top">
       MASJID AL-HIJRI II</router-link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
                  aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav mr-auto mb-2 mb-md-0">
              <li class="nav-item">
                <router-link :to="{name: 'home'}" class="nav-link">BERANDA</router-link>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  PROFILE
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">VISI DAN MISI</a></li>
                  <li><a class="dropdown-item" href="#">SEJARAH</a></li>
                  <li><a class="dropdown-item" href="#">PIMPINAN</a></li>
                  <li><router-link :to="{name: 'muadzin'}" class="dropdown-item" >IMAM DAN MUADZIN</router-link></li>
                </ul>
              </li>
              <li class="nav-item">
                <router-link :to="{ name: 'post' }" class="nav-link"> BERITA</router-link>
              </li>
              <li class="nav-item">
                <router-link :to="{ name: 'event' }" class="nav-link"> AGENDA</router-link>
              </li>
              <li class="nav-item">
                <router-link :to="{ name: 'photo' }" class="nav-link"> GALERI</router-link>
              </li>
              <li class="nav-item">
                <router-link :to="{ name: 'video' }" class="nav-link">VIDEO</router-link>
              </li>
              <li class="nav-item">
                <router-link :to="{name: 'contact'}" class="nav-link">KONTAK</router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
  </template>
  
  <script>
  export default {
    name: 'HeaderComponent'
  }
  </script>
  