<template>
    <div id="muadzin">
        <!-- header -->
        <Header />
        <!-- end header -->

        <!-- main content -->
        <section id="page-title" class="page-title-mini bg-color page-title-dark">
            <div class="container clearfix">
                <h1 class="mt-3">IMAM DAN MUADZIN</h1>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="#">Beranda</a></li>
                    <li class="breadcrumb-item active" aria-current="page">Imam dan Muadzin</li>
                </ol>
            </div>
        </section>
        <!-- team  -->
        <section class="bg-light py-3 py-md-5 py-xl-8">
            <div class="container overflow-hidden">
                <div class="row gy-4 gy-lg-0 gx-xxl-5 w-100 h-auto">
                    <!-- image muadzin -->
                    <div v-if="muadzin.length > 0">
                        <div v-for="muadzinData in muadzin" :key="muadzinData.id" class="col-12 col-md-6 col-lg-3">
                            <div class="card border-0 border-bottom border-primary shadow-sm overflow-hidden">
                                <div class="card-body p-0">
                                    <figure class="m-0 p-0 2-100 ">
                                        <img :src="muadzinData.image" class="img-fluid" loading="lazy"
                                            :alt="muadzinData.name">
                                        <figcaption class="m-0 p-4">
                                            <h4 class="mb-1 text-center w-auto">{{ muadzinData.name }}</h4>
                                            <p class="text-secondary mb-0 text-center">Muadzin</p>
                                        </figcaption>
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div v-else>
                        <div class="card border-0 border-bottom border-primary shadow-sm overflow-hidden">
                            <div class="card-body p-0">
                                <FacebookLoader />

                            </div>
                        </div>
                    </div>
                    <!-- end image -->
                    
                </div>
            </div>
        </section>
        <section class="bg-light py-3 py-md-5 py-xl-8">
            <div class="container overflow-hidden">
                <div class="row gy-4 gy-lg-0 gx-xxl-5">
                    <div v-for="leaderData in leader" :key="leaderData.id" class="col-12 col-md-6 col-lg-3 mt-4">
            <div class="card border-0 border-bottom border-primary shadow-sm overdflow-hidden">
                <div class="card-body p-0">
                    <figure class="m-0 p-0">
                        <img :src="leaderData.image" class="img-fluid" loading="lazy"
                            :alt="leaderData.name" height="auto" width="100%">
                        <figcaption class="m-0 p-4">
                            <h4 class="mb-1 text-center"> {{ leaderData.name }} </h4>
                            <p class="text-secondary mb-0 text-center"> Imam </p>
                        </figcaption>
                    </figure>
                </div>
            </div>
        </div>
        <!-- end image imam -->
                    </div>
                </div>
        </section>
        
        <Footer />
    </div>
</template>

<script>
//import content loader
import {
    ContentLoader,
    FacebookLoader,
    BulletListLoader,
} from 'vue-content-loader';

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
        //loader component
        ContentLoader,
        FacebookLoader,
        Header,
        Footer
    },

    setup() {
        // Data reactive untuk menyimpan data muadzin
        const muadzin = ref([]);
        const leader = ref([]);
        const loader = ref(6);

        // Menggunakan Axios untuk mendapatkan data dari API
        onMounted(async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/homepage/muadzin');
                muadzin.value = response.data.data; // mengisi data muadzin dengan hasil respons
            } catch (error) {
                console.error('Error fetching muadzin data:', error);
            }

            try {
                const response = await axios.get('http://localhost:8000/api/homepage/leader');
                leader.value = response.data.data;
            } catch (error) {
                console.error(error);
            }
        });


        return {
            muadzin,
            leader,
            loader,
            FacebookLoader,
        };
    }
}
</script>
