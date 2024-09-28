<template>
    <div id="management">
        <!-- start header -->
        <Header />
        <!-- end header -->
        
        <!-- new header section -->
        <section id="page-title" class="page-title-mini bg-color page-title-dark">
            <div class="container clearfix">
                <h1 class="mt-3">Pejabat</h1>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="https://istiqlal.or.id/">Beranda</a></li>
                    <li class="breadcrumb-item active" aria-current="page">Pejabat Badan Pengelola Masjid Istiqlal</li>
                </ol>
            </div>
        </section>
        <!-- end new header section -->

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
                    <div class="row">
                        <!-- management data -->
                        <div v-for="(manager, index) in management" :key="index" class="col-lg-4 col-md-6 bottommargin">
                            <div class="team">
                                <div class="team-image" style="display: flex; justify-content: center;">
                                    <img :src="manager.image" :alt="manager.name" class="rounded-circle" style="max-height: 200px; width: auto;">
                                </div>
                                <div class="team-desc team-desc-bg">
                                    <div class="team-title">
                                        <h4>{{ manager.name }}</h4>
                                        <span>{{ manager.position }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- end management data -->
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
                    const url = import.meta.env.VITE_URL_ENDPOINT_MANAGEMENT;
                    const response = await axios.get(url);
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

<style scoped>
/* Add styles to ensure the new header section looks good */
.page-title-mini {
    padding: 20px 0;
}

.page-title-dark {
    background-color: #333;
    color: white;
}

.breadcrumb {
    background: none;
    padding: 0;
    margin-bottom: 0;
}

.breadcrumb-item a {
    color: white;
    text-decoration: none;
}

.breadcrumb-item.active {
    color: #aaa;
}

.team {
    text-align: center;
    margin-bottom: 30px;
}

.team-image {
    margin-bottom: 15px;
}

.team-title h4 {
    font-size: 18px;
    font-weight: bold;
}

.team-title span {
    display: block;
    font-size: 14px;
    color: #888;
}

.team-desc-bg {
    background: #f7f7f7;
    padding: 20px;
    border-radius: 5px;
}
</style>
