<template>
    <div class="home">
      <!-- header -->
      <Header />
      <!-- end header -->
  
      <!-- slider -->
      <Slider />
      <!-- end slider -->
  
      <!-- main content -->
      <div class="container-fluid mt-3 mb-5">
        <div class="row">
          <div class="col-md-8">
            <div class="row">
              <!-- berita section -->
              <div class="col-md-12 mb-3">
                <h4><i class="fas fa-book-open"></i> BERITA TERBARU</h4>
                <div class="line line-xs line-market"></div>
              </div>
  
              <div v-if="posts.length > 0" class="row">
                <div class="col-md-4 mb-4" v-for="post in posts" :key="post.id">
                  <div class="card h-100 shadow-sm border-0 rounded-lg">  
                    <div class="card-img-top">
                      <img :src="post.image" class="w-100"
                        style="height: 200px;object-fit: cover;border-top-left-radius: .3rem;border-top-right-radius: .3rem;">
                        
                    </div>
                    <div class="card-body">
                      <router-link :to="{ name: 'detail_post', params: { slug: post.slug } }"
                        class="text-dark text-decoration-none">
                        <h4>{{ post.title }}</h4>
                      </router-link>
                    </div>
                    <div class="card-footer bg-white">
                      <i class="fa fa-calendar" aria-hidden="true"></i> {{ post.created_at }}
                      <!-- category -->
                      <i class="fa fa-folder" aria-hidden="true"></i> {{ post.category.name }}
                    </div>
                  </div>
                </div>
              </div>
  
              <div v-else>
                <div class="row">
                  <div class="col-md-4 mb-3" v-for="loader in posts_loader" :key="loader">
                    <div class="card border-0 shadow-sm rounded-lg">
                      <div class="card-body">
                        <FacebookLoader />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- end berita section -->
  
              <!-- foto section -->
              <div class="col-md-12 mb-3 mt-4">
                <h4 class="mb-2 mt-2 ls1 text-uppercase fw-bold"><i class="fa-solid fa-camera"></i> Galeri Kegiatan</h4>
                <div class="line line-xs line-market"></div>
              </div>
  
              <div v-if="photos.length > 0">
                <swiper :style="{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                  }"
                  :spaceBetween="10"
                  :navigation="true"
                  :thumbs="thumbsSwiper"
                  :modules="modules"
                  class="mySwiper2"
                >
                  <swiper-slide v-for="photo in photos" :key="photo.id">
                    <img :src="photo.image" class="d-block w-100 h-100" />
                    <div class="carousel-caption ">
                      <h5 class="text-white" >{{ photo.heading }}</h5>
                      <p class="text-start text-white">{{ photo.date }}</p>
                    </div>
                  </swiper-slide>
                </swiper>
                <swiper @swiper="setThumbsSwiper"
                  :spaceBetween="10"
                  :slidesPerView="4"
                  :freeMode="true"
                  :watchSlidesProgress="true"
                  :modules="modules"
                  class="mySwiper"
                >
                  <swiper-slide v-for="photo in photos" :key="photo.id">
                    <img :src="photo.image" class="d-block w-100" />
                  </swiper-slide>
                </swiper>
              </div>
  
              <div v-else class="mt-5">
                <div class="card border-0 shadow-sm rounded-lg mb-3" v-for="loader in photos_loader" :key="loader">
                  <div class="card-body pt-4">
                    <ContentLoader />
                  </div>
                </div>
              </div>
  
              <!-- end foto section -->
  
              <!-- video section -->
              <div class="col-md-12 mb-3 mt-4">
                <h4><i class="fas fa-video"></i> VIDEO TERBARU</h4>
                <div class="line line-xs line-market"></div>
              </div>
  
              <div v-if="videos.length > 0" class="row">
                <div class="col-md-6 mb-4" v-for="video in videos" :key="video.id">
                  <div class="card h-100 shadow-sm border-0 rounded-lg">
                    <div class="card-img">
                      <iframe style="width:100%;height:200px;border-top-left-radius:.3rem;border-top-right-radius:.3rem"
                        :src="video.embed" frameborder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen></iframe>
                    </div>
                    <div class="card-body text-center">
                      <h6>{{ video.title }}</h6>
                    </div>
                  </div>
                </div>
              </div>
  
              <div v-else>
                <div class="row">
                  <div class="col-md-6 mb-3" v-for="loader in videos_loader" :key="loader">
                    <div class="card border-0 shadow-sm rounded-lg">
                      <div class="card-body p-2">
                        <ContentLoader />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
  
              <!-- end video section -->
            </div>
          </div>
          <div class="col-md-4 sticky-lg-top" id="coba">
            <!-- kategori section -->
            <div class="title mb-4 mt-5">
              <h4><i class="fa fa-folder" aria-hidden="true"></i> KATEGORI </h4>
            </div>
  
            <div v-if="categories.length > 0">
              <div class="list-group">
                <router-link :to="{ name: 'detail_category', params: { slug: category.slug } }"
                  class="list-group-item list-group-item-action border-0 shadow-sm mb-2 rounded"
                  v-for="category in categories" :key="category.id"><i class="fa fa-folder-open"
                    aria-hidden="true"></i> {{ category.name.toUpperCase() }}</router-link>
              </div>
            </div>
  
            <div v-else>
              <div class="row">
                <div v-for="loader in categories_loader" :key="loader">
                  <div class="card border-0 shadow-sm rounded-lg mb-3">
                    <div class="card-body pt-4">
                      <BulletListLoader />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- end kategori section -->
  
            <!-- start money section -->
            <div class="title mb-4 mt-5">
              <h4><i class="fa fa-money" aria-hidden="true"></i> INFORMASI KEUANGAN</h4>
            </div>
  
            <div v-if="moneys !== null" class="card border-0 shadow-sm rounded-lg mb-3">
              <div class="card-body">
                <h6>SALDO MASUK: {{ moneys.masuk }} </h6>
                <h6>SALDO KELUAR {{ moneys.keluar }} </h6>
                <h6>SALDO {{ moneys.saldo }} </h6>
              </div>
            </div>
  
            <div v-else>
              <div class="card border-0 shadow-sm rounded-lg mb-3">
                <div class="card-body pt-4">
                  <ContentLoader />
                </div>
              </div>
            </div>
            <!-- end money section -->
             <!-- Newsletter
Subscribe to our mailing list -->
<div class="title mb-4 mt-5">
  <h4><i class="fa fa-envelope" aria-hidden="true"></i> BERLANGGANAN</h4>
  <form action="">
    <div class="input-group mb-3">
      <input type="text" class="form-control" placeholder="Email" aria-label="Email" aria-describedby="button-addon2">
      <button class="btn btn-outline-secondary" type="button" id="button-addon2">Berlangganan</button>
    </div>
  </form>
</div>
<div class="widget clearfix">
                            <h4 class="mb-2 ls1 text-uppercase fw-bold">Follow <a href="" target="_blank">@masjiduika.official</a></h4>
                            <div class="line line-xs line-sports"></div>

                           
                           
                        </div>
   
          </div>
        </div>
      </div>
      <!-- end main content -->
  
      <!-- footer -->
      <Footer />
      <!-- end footer -->
    </div>
  </template>
  
  <script>
    import {
      ContentLoader,
      FacebookLoader,
      BulletListLoader,
    } from 'vue-content-loader';
  
    import axios from 'axios';
  
    import { ref, onMounted } from 'vue';
  
    import Header from "../../components/Header.vue";
    import Slider from "../../components/Slider.vue";
    import Footer from "../../components/Footer.vue";
  
    import { Swiper, SwiperSlide } from 'swiper/vue';
  
    import 'swiper/css';
    import 'swiper/css/free-mode';
    import 'swiper/css/navigation';
    import 'swiper/css/thumbs';
    import './style.css';
  
    import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
  
    export default {
      name: 'HomeComponent',
  
      components: {
        ContentLoader,
        FacebookLoader,
        BulletListLoader,
        Header,
        Slider,
        Footer,
        Swiper,
        SwiperSlide,
      },
  
      setup() {
        const posts = ref([]);
        const posts_loader = ref(3);
  
        const videos = ref([]);
        const videos_loader = ref([]);
  
        const categories = ref([]);
        const categories_loader = ref(1);
  
        const photos = ref([]);
        const photos_loader = ref(1);
  
        const moneys = ref(null);
  
        const thumbsSwiper = ref(null);
  
        const setThumbsSwiper = (swiper) => {
          thumbsSwiper.value = swiper;
        };
  
        onMounted(async () => {
          axios.get('/api/homepage/post')
            .then(response => {
              posts.value = response.data.data;
            })
  
          axios.get('/api/homepage/video')
            .then(response => {
              videos.value = response.data.data;
            })
  
          axios.get('/api/category')
            .then(response => {
              categories.value = response.data.data.data;
            })
  
          axios.get('/api/homepage/photo')
            .then(response => {
              photos.value = response.data.data;
            })
  
          axios.get('/api/homepage/money')
            .then(response => {
              moneys.value = response.data.data;
            })
        });
  
        return {
          posts,
          posts_loader,
          videos,
          videos_loader,
          categories,
          categories_loader,
          photos,
          photos_loader,
          moneys,
          thumbsSwiper,
          setThumbsSwiper,
          modules: [FreeMode, Navigation, Thumbs],
        }
      }
    }
  </script>
  