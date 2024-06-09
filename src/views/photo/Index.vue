<template>
    <div class="post-index">
      <!-- header -->
      <Header />
      <!-- end header -->
        
      <div class="container-fluid mt-5 mb-5">
        <swiper :navigation="true" :modules="modules" class="mySwiper" :autoplay="{delay: 3000}" >
            <swiper-slide v-for="(photo, id) in photos" :key="photo.id">
              <a :href="photo.link" target="_blank">
                <img :src="photo.image" class="img">
              </a>
            </swiper-slide>
        </swiper>
          
        <div class="fancy-title title-border">
            <h3>Album Terbaru</h3>
        </div>
        <div class="row">

          <div v-if="photos.length > 0" class="row">
              <div class="col-md-4 mb-4" v-for="photo in photos" :key="photo.id">
                  <div class="card h-100 shadow-sm border-0 rounded-lg">
                      <div class="card-img">
                          <img :src="photo.image" class="w-100"
                              style="height: 300px;object-fit: cover;border-top-left-radius: .3rem;border-top-right-radius: .3rem;">
                      </div>
                      <div class="card-body text-start">
                          <h5 class="card-title">{{ photo.heading }}</h5>
                          <span class="subtitle">{{ photo.date }}</span>
                          <p class="card-body" style="unicode-bidi: isolate;" v-html="photo.caption"></p>
                      </div>
                  </div>
              </div>
          </div>
  
          <!-- <div v-else>
            <div class="row">
              <div class="col-md-4 mb-3" v-for="loader in photos_loader" :key="loader">
                <div class="card border-0 shadow-sm rounded-lg">
                  <div class="card-body p-2">
                    <ContentLoader />
                  </div>
                </div>
              </div>
            </div>
          </div>
   -->
          <div class="text-center" v-show="moreExists">
            <button type="button" class="btn btn-primary btn-md" v-on:click="loadMore"><span class="fa fa-arrow-down"></span> LIHAT LEBIH BANYAK</button>
          </div>
        </div>
      </div>
      <!-- main content -->
  
      <!-- footer -->
      <Footer />
      <!-- end footer -->
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  import { ContentLoader } from 'vue-content-loader';
  import Header from '../../components/Header.vue';
  import Footer from '../../components/Footer.vue';
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';
  
  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/navigation';
 

  // Import required modules
  import { Navigation } from 'swiper/modules';


  export default {
    name: 'PhotoComponent',
    components: {
      ContentLoader,
      Header,
      Footer
    },
    setup() {
      const photos = ref([]);
      const photos_loader = ref(6);
      const moreExists = ref(false);
      const nextPage = ref(0);
  
      const fetchDataPhotos = () => {
        axios.get('/api/photo')
          .then(response => {
            photos.value = response.data.data.data;
            if (response.data.data.current_page < response.data.data.last_page) {
              moreExists.value = true;
              nextPage.value = response.data.data.current_page + 1;
            } else {
              moreExists.value = false;
            }
          });
      };
  
      const loadMore = () => {
        axios.get(`/api/photo?page=${nextPage.value}`)
          .then(response => {
            if (response.data.data.current_page < response.data.data.last_page) {
              moreExists.value = true;
              nextPage.value = response.data.data.current_page + 1;
            } else {
              moreExists.value = false;
            }
            response.data.data.data.forEach(data => {
              photos.value.push(data);
            });
          });
      };
  
      onMounted(() => {
        fetchDataPhotos();
      });
  
      return {
        photos,
        photos_loader,
        moreExists,
        nextPage,
        loadMore,
        modules: [Navigation],
      };
    }
  }
  </script>
  
  <style scoped>
  .post-index {
    padding: 20px;
  }
  .card-img img {
    height: 300px;
    object-fit: cover;
    border-top-left-radius: .3rem;
    border-top-right-radius: .3rem;
  }
  .card-body {
    text-align: center;
  }
  </style>
  