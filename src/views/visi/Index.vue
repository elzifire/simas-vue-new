<template>
    <div id="visi">
        <!-- Include Header component -->
        <Header />
        
        <!-- New header section -->
        <section id="page-title" class="page-title-mini bg-color page-title-dark">
            <div class="container clearfix">
                <h1>Visi dan Misi</h1>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="#">Beranda</a></li>
                    <li class="breadcrumb-item active" aria-current="page">Visi dan Misi</li>
                </ol>
            </div>
        </section>
        <!-- end header section -->

        <section class="container py-5">
            <div class="row">
                <div class="col-12">
                    <p class="text-center">Visi dan Misi dari Masjid Al-Ikhlas</p>
                </div>
            </div>
            <!-- Show loader if data is being fetched -->
            <div v-if="isLoading" class="text-center">
                <p>Loading...</p>
            </div>
            <!-- Show data if available -->
            <div v-else-if="visi.length > 0" class="row">
                <div class="col-12">
                    <h3 class="text-start">Visi</h3>
                    <!-- Render Visi HTML content -->
                    <p class="text-start" v-html="visi[0].visi"></p>
                </div>
                <div class="col-12">
                    <h3 class="text-start">Misi</h3>
                    <!-- Render Misi HTML content -->
                    <p class="text-start" v-html="visi[0].misi"></p>
                </div>
            </div>
            <!-- Show message if no data is available -->
            <div v-else class="text-center">
                <p>No data available.</p>
            </div>
        </section>
        
        <!-- Include Footer component -->
        <Footer />
    </div>
</template>

<script>
import Header from "../../components/Header.vue";
import Footer from "../../components/Footer.vue";
import axios from 'axios';
import { ref, onMounted } from 'vue';

export default {
    name: 'visiComponent',

    components: {
        Header,
        Footer
    },

    setup() {
        // Define refs for visi and isLoading
        const visi = ref([]);
        const isLoading = ref(true); // Initially set loading to true
        
        onMounted(async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/visi');
                visi.value = response.data.data;
                isLoading.value = false; // Set loading to false after data is fetched
            } catch (error) {
                console.error('Error fetching visi data:', error);
                isLoading.value = false; // Set loading to false in case of error
            }
        });

        return {
            visi,
            isLoading
        };
    }
};
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
</style>
