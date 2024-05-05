<template>
    <div id="management">
        <!-- start header -->
        <Header />
        <!-- end header -->
        <!-- title -->
        <header class="pt-5 border-bottom bg-light">
            <div class="container pt-md-1 pb-md-1">
                <h1 class="bd-title mt-4 font-weight-bold"><i class="fa-solid fa-user-tie"></i> PIMPINAN </h1>
            </div>
        </header>
        <!-- end title -->
        <section class="bg-light py-3 py-md-5 py-xl-8">
            <div class="container overflow-hidden">
                <!-- Check if management array is empty -->
                <template v-if="management.length === 0">
                    <!-- Show ContentLoader if management array is empty -->
                    <ContentLoader :height="100" :width="400" :speed="2">
                        <rect x="0" y="0" rx="5" ry="5" :width="400" :height="20" />
                        <rect x="0" y="30" rx="5" ry="5" :width="400" :height="20" />
                        <rect x="0" y="60" rx="5" ry="5" :width="400" :height="20" />
                        <rect x="0" y="90" rx="5" ry="5" :width="400" :height="20" />
                    </ContentLoader>
                </template>
                <!-- Show management data if not empty -->
                <template v-else>
                    <div class="row gy-4 gy-lg-0 gx-xxl-5">
                        <!-- image muadzin -->
                        <div v-for="(manager, index) in management" :key="index" class="col-12 col-md-6 col-lg-3">
                            <div class="card border-0 border-bottom border-primary shadow-sm overflow-hidden">
                                <div class="card-body p-0">
                                    <figure class="m-0 p-0 text-center">
                                        <img :src="manager.image" max-height="200px" width="auto" class="mx-auto">
                                        <figcaption class="m-0 p-4">
                                            <h4 class="mb-1 text-center">{{ manager.name }}</h4>
                                            <p class="text-secondary mb-0 text-center">{{ manager.position }}</p>
                                        </figcaption>
                                    </figure>
                                </div>
                            </div>
                        </div>
                        <!-- end image -->
                    </div>
                </template>
            </div>
        </section>
        <!-- start Footer -->
        <Footer />
        <!-- end Footer -->
    </div>
</template>

<script>
    import { ContentLoader } from 'vue-content-loader';
    import axios from 'axios';
    import { ref, onMounted } from 'vue';
    import Header from "../../components/Header.vue";
    import Footer from "../../components/Footer.vue";

    export default {
        name: 'managementComponent',

        components: {
            // component app
            Header,
            Footer,
            ContentLoader
        },

        setup() {
            const management = ref([]);

            onMounted(async () => {
                try {
                    const response = await axios.get('http://localhost:8000/api/management');
                    management.value = response.data.data; // Mengisi array management dengan data dari API
                } catch (error) {
                    console.error('Error fetching management data:', error);
                }
            });

            return {
                management,
            };
        }
    }
</script>
