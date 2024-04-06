<template>
  <div id="muadzin">
      <!-- header -->
      <Header />
      <!-- end header -->

      <!-- main content -->
      <header class="pt-5 border-bottom bg-light">
          <div class="container pt-md-1 pb-md-1">
              <h1 class="bd-title mt-4 font-weight-bold"><i class="fa-solid fa-user"></i> IMAM DAN MUADZIN </h1>
              
          </div>
      </header>
      <!-- team  -->
      <section class="bg-light py-3 py-md-5 py-xl-8">    
          <div class="container overflow-hidden">
              <div class="row gy-4 gy-lg-0 gx-xxl-5">
                  <!-- image -->
                  <div v-for="muadzinData in muadzin" :key="muadzinData.id" class="col-12 col-md-6 col-lg-3">
                      <div class="card border-0 border-bottom border-primary shadow-sm overflow-hidden">
                          <div class="card-body p-0">
                              <figure class="m-0 p-0">
                                  <img :src="muadzinData.image" class="img-fluid" loading="lazy" :alt="muadzinData.name">
                                  <figcaption class="m-0 p-4">
                                      <h4 class="mb-1 text-center">{{ muadzinData.name }}</h4>
                                      <p class="text-secondary mb-0 text-center">Muadzin</p>
                                  </figcaption>
                              </figure>
                          </div>
                      </div>
                  </div>
                  <!-- end image -->
              </div>
          </div>
      </section>
      <Footer />
  </div>
</template>

<script>
  //import axios
  import axios from 'axios';

  //import hook onMounted from vue
  import { ref, onMounted } from 'vue';

  //import component
  import Header from "../../components/Header.vue";
  import Footer from "../../components/Footer.vue";

  export default {
      name: 'muadzinComponent',

      components: {
          // component app
          Header,
          Footer
      },

      setup() {
          // Data reactive untuk menyimpan data muadzin
          const muadzin = ref([]);

          // Menggunakan Axios untuk mendapatkan data dari API
          onMounted(async () => {
              try {
                  const response = await axios.get('http://localhost:8000/api/homepage/muadzin');
                  muadzin.value = response.data.data; // mengisi data muadzin dengan hasil respons
              } catch (error) {
                  console.error('Error fetching muadzin data:', error);
              }
          });

          return {
              muadzin,
          };
      }
  }
</script>
