<template>
    <div class="home">
      <!-- Header -->
      <Header />
      <!-- Slider -->
      <Slider />
  
      <!-- Main content -->
      <div class="container-fluid mt-3 mb-5">
        <div class="row">
          <div class="col-md-8">
            <!-- Your existing content -->
          </div>
  
          <div class="col-md-4">
            <!-- Start money section -->
            <div class="title mb-4 mt-5">
              <h4><i class="fa fa-money" aria-hidden="true"></i> INFORMASI KEUANGAN</h4>
            </div>
  
            <div v-if="financialData !== null" class="card border-0 shadow-sm rounded-lg mb-3">
              <div class="card-body">
                <h6>Total Masuk: {{ financialData.masuk }}</h6>
                <h6>Total Keluar: {{ financialData.keluar }}</h6>
                <h6>Saldo: {{ financialData.saldo }}</h6>
              </div>
            </div>
  
            <div v-else>
              <div class="card border-0 shadow-sm rounded-lg mb-3">
                <div class="card-body pt-4">
                  <ContentLoader />
                </div>
              </div>
            </div>
            <!-- End money section -->
          </div>
        </div>
      </div>
      <!-- End main content -->
  
      <!-- Footer -->
      <Footer />
      <!-- End footer -->
    </div>
  </template>
  
  <script>
    // Import necessary components and Axios
    import { ref, onMounted } from 'vue';
    import axios from 'axios';
    import { ContentLoader } from 'vue-content-loader';
    import Header from '../../components/Header.vue';
    import Slider from '../../components/Slider.vue';
    import Footer from '../../components/Footer.vue';
  
    export default {
      name: 'HomeComponent',
      components: {
        // Loader component
        ContentLoader,
        // App components
        Header,
        Slider,
        Footer
      },
      setup() {
        // Define state
        const financialData = ref(null);
  
        // Hook onMounted
        onMounted(async () => {
          // Fetch financial data
          axios.get('/api/homepage/money')
            .then(response => {
              financialData.value = response.data.data;
            })
            .catch(error => {
              console.error('Error fetching financial data: ', error);
            });
        });
  
        // Return state
        return {
          financialData
        };
      }
    };
  </script>
  