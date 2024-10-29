<template>
    <div class="post-index">
        <!-- header -->
        <Header />
        <!-- end header -->

        <!-- main content -->
        <header>
            <div id="page-title" class="page-title-mini page-title-dark" style="background-color: #793d18;">
                <div class="container clearfix">
                    <h1 class="mt-3">AGENDA</h1>
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><router-link to="/">Beranda</router-link></li>
                        <li class="breadcrumb-item active" aria-current="page">Agenda</li>
                    </ol>
                </div>
            </div>
        </header>

        <div class="container-fluid mt-5 mb-5">
            <div v-if="events.length > 0" class="row gy-4">
                <div class="col-md-6" v-for="event in events" :key="event.id">
                    <router-link :to="{ name: 'detail_event', params: { slug: event.slug } }" class="text-decoration-none text-dark">
                        <div class="card h-100 shadow-sm border-0">
                            <div class="row g-0">
                                <div class="col-md-4">
                                    <img :src="event.image" class="img-fluid rounded-start" :alt="event.title" />
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">{{ event.title }}</h5>
                                        <p class="card-text" v-html="event.desc"></p>
                                        <p class="card-text">
                                            <small class="text-body-secondary">
                                                <i class="fa fa-map-marker" aria-hidden="true"></i> {{ event.location }}
                                            </small>
                                        </p>
                                        <p class="card-text">
                                            <small class="text-body-secondary">
                                                <i class="fa fa-calendar" aria-hidden="true"></i> {{ event.date }}
                                            </small>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>

            <div v-else class="row gy-4">
                <div class="col-md-6" v-for="loader in events_loader" :key="loader">
                    <div class="card h-100 border-0 shadow-sm rounded-lg">
                        <div class="card-body">
                            <FacebookLoader />
                        </div>
                    </div>
                </div>
            </div>

            <div class="text-center mt-4" v-show="moreExists">
                <button type="button" class="btn btn-primary btn-md" @click="loadMore">
                    <span class="fa fa-arrow-down"></span> LIHAT LEBIH BANYAK
                </button>
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
import Header from "../../components/Header.vue";
import Footer from "../../components/Footer.vue";
import { FacebookLoader } from 'vue-content-loader';

export default {
    name: 'EventComponent',
    components: { Header, Footer, FacebookLoader },
    setup() {
        const events = ref([]);
        const events_loader = ref(4);
        const moreExists = ref(false);
        const nextPage = ref(0);

        const fetchDataEvents = () => {
            axios.get('/api/event').then(response => {
                events.value = response.data.data.data;
                moreExists.value = response.data.data.current_page < response.data.data.last_page;
                nextPage.value = response.data.data.current_page + 1;
            });
        };

        const loadMore = () => {
            axios.get(`/api/event?page=${nextPage.value}`).then(response => {
                if (response.data.data.current_page < response.data.data.last_page) {
                    moreExists.value = true;
                    nextPage.value = response.data.data.current_page + 1;
                } else {
                    moreExists.value = false;
                }
                events.value.push(...response.data.data.data);
            });
        };

        onMounted(fetchDataEvents);

        return { events, events_loader, moreExists, nextPage, loadMore };
    }
};
</script>

<style scoped>
.row.gy-4 > * {
    margin-bottom: 20px; /* Jarak antar elemen card */
}
</style>
