<template>
  <!-- Header -->
  <header id="header" class="header-size-sm" data-sticky-shrink="false">
    <div class="container">
      <div class="header-row justify-content-between">
        
        <!-- Logo -->
        <div id="logo" class="col-auto ms-auto ms-mb-0 me-mb-0 order-md-2">
          <router-link :to="{ name: 'home' }" class="standard-logo">
            <img class="mx-auto" src="/assets/img/logo2.png" alt="MASJID IBN KHALDUN">
          </router-link>
          <router-link :to="{ name: 'home' }" class="retina-logo">
            <img class="mx-auto" src="/assets/img/logo2.png" alt="MASJID IBN KHALDUN">
          </router-link>
        </div><!-- #logo end -->

        <div class="w-100 d-block d-md-none"></div>

        <div class="col-12 col-sm-6 col-md-4 justify-content-center justify-content-sm-start d-flex order-md-1 mb-4 mb-sm-0">
          <!-- social media -->
        </div>

        <div class="col-12 col-sm-6 col-md-4 order-md-3 mb-4 mb-md-0">
          <ul class="nav align-items-center justify-content-center justify-content-sm-end">
            <li class="nav-item">
              <div id="top-search" class="header-misc-icon">
                <a href="#" id="top-search-trigger">
                  <i class="icon-line-search"></i><i class="icon-line-cross"></i>
                </a>
              </div>
            </li>
          </ul>
        </div>

      </div>
    </div>

    <div id="header-wrap" class="border-top border-f5">
      <div class="container">
        <div class="header-row justify-content-between flex-row-reverse flex-lg-row">
          
          <div @click="toggleMenu" id="primary-menu-trigger">
            <svg class="svg-trigger" viewBox="0 0 100 100">
              <path d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"></path>
              <path d="m 30,50 h 40"></path>
              <path d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"></path>
            </svg>
          </div>

          <!-- Primary Navigation -->
          <nav class="primary-menu with-arrows mt-3">
            <ul :class="{ 'd-block d-lg-none': isMenuOpen, 'd-lg-flex d-none': !isMenuOpen }" class="menu-container">
              <li class="menu-item current menu-color-home">
                <router-link :to="{ name: 'home' }" class="menu-link">
                  <div>Beranda</div>
                </router-link>
              </li>
              <li class="menu-item menu-color-home">
                <a @click="toggleSubMenu" class="menu-link" href="#">
                  <div>Profil</div>
                </a>
                <ul :class="{ 'd-block': isSubMenuOpen, 'd-none': !isSubMenuOpen }" class="sub-menu-container">
                  <li class="menu-item">
                    <router-link :to="{ name: 'visi' }" class="menu-link">Visi dan Misi</router-link>
                  </li>
                  <li class="menu-item">
                    <router-link :to="{ name: 'history' }" class="menu-link">Sejarah</router-link>
                  </li>
                  <li class="menu-item">
                    <router-link :to="{ name: 'management' }" class="menu-link">Pimpinan</router-link>
                  </li>
                  <li class="menu-item">
                    <router-link :to="{ name: 'muadzin' }" class="menu-link">Imam dan Muadzin</router-link>
                  </li>
                </ul>
              </li>
              <li class="menu-item menu-color-home">
                <router-link :to="{ name: 'post' }" class="menu-link">
                  <div>Berita</div>
                </router-link>
              </li>
              <li class="menu-item menu-color-home">
                <router-link :to="{ name: 'event' }" class="menu-link">
                  <div>Agenda</div>
                </router-link>
              </li>
              <li class="menu-item menu-color-home">
                <a href="#" class="menu-link">
                  <div>Layanan</div>
                </a>
                <ul class="sub-menu-container">
                  <li v-for="service in services" :key="service.id" class="menu-item">
                    <a :href="service.url" target="_blank" class="menu-link">
                      <div>{{ service.name }}</div>
                    </a>
                  </li>
                </ul>
              </li>
              <li class="menu-item menu-color-home">
                <router-link :to="{ name: 'photo' }" class="menu-link">
                  <div>Galeri</div>
                </router-link>
              </li>
              <li class="menu-item menu-color-home">
                <router-link :to="{ name: 'video' }" class="menu-link">
                  <div>Video</div>
                </router-link>
              </li>
              <li class="menu-item menu-color-home">
                <router-link :to="{ name: 'contact' }" class="menu-link">
                  <div>Kontak</div>
                </router-link>
              </li>
            </ul>
          </nav><!-- #primary-menu end -->

          <form class="top-search-form" action="https://Al-hijri.or.id/blog/search" method="get">
            <input type="text" name="title" class="form-control" placeholder="Search Post" autocomplete="off">
          </form>
        </div>
      </div>
    </div>
    <div class="header-wrap-clone"></div>
  </header><!-- #header end -->
</template>

<script>
import axios from 'axios';

export default {
  name: 'HeaderComponent',
  data() {
    return {
      isMenuOpen: false,
      isSubMenuOpen: false,
      services: [],
    };
  },
  created() {
    this.fetchServiceData();
  },
  methods: {
    fetchServiceData() {
      axios.get('http://localhost:8000/api/service')
          .then(response => {
            if (response.data && response.data.data) {
              this.services = response.data.data;
            }
          })
          .catch(error => {
            console.error("There was an error fetching the service data!", error);
          });
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    toggleSubMenu() {
      this.isSubMenuOpen = !this.isSubMenuOpen;
    }
  }
}
</script>
