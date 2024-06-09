<template>
    <swiper :navigation="true" :modules="modules" class="mySwiper" :autoplay="{delay: 3000}">
      <swiper-slide v-for="(slider, id) in sliders" :key="slider.id">
        <a :href="slider.link" target="_blank">
          <img :src="slider.image" style="width: auto; height: max-content;">
        </a>
      </swiper-slide>
    <div v-if="sliders_loader.length === 0" class="mt-5">
        <div class="card border-0 shadow-sm rounded-lg mb-3" v-for="loader in sliders_loader" :key="loader">
            <div class="card-body pt-4">
                <ContentLoader />
            </div>
        </div>
    </div>
    </swiper>
  </template>
  
  <script>
    // Import Swiper Vue.js components
    import { Swiper, SwiperSlide } from 'swiper/vue';
  
    // Import Swiper styles
    import 'swiper/css';
    import 'swiper/css/navigation';
   
  
    // Import required modules
    import { Navigation } from 'swiper/modules';
  
    // Import ContentLoader component
    import { ContentLoader } from 'vue-content-loader';
    
    // Import axios
    import axios from 'axios';
  
    // Import hooks from Vue
    import { ref, onMounted } from 'vue';
  
    export default {
      name: 'SliderComponent',
      components: {
        Swiper,
        SwiperSlide,
        ContentLoader,
      },
      setup() {
        const sliders = ref([]);
        const sliders_loader = ref(1);
  
        onMounted(() => {
          axios.get('/api/slider')
            .then(response => {
              sliders.value = response.data.data.data;
            })
            .catch(() => {
              sliders.value = [];
            });
        });
  
        return {
          sliders,
          sliders_loader,
          modules: [Navigation],
        };
      },
    };
  </script>
  