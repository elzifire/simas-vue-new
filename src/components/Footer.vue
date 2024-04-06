<template>
    <footer id="footer" class="light">

        <div class="container">

            <!-- Footer Widgets
============================================= -->
            <div class="footer-widgets-wrap row clearfix">

                <div class="col-lg-5 col-sm-6 mb-5 mb-lg-0">
                    <!-- Footer Widget 1
        ============================================= -->
                    <div class="widget clearfix">
                        <img src="/assets/logo4.png" alt="HUMAS MASJID Al-hijri" class="footer-logo"
                            style="height: 120px">
                        <div style="background-size: 100%;">
                            <p>Selamat Datang Di Website Resmi Masjid Al-hijri. Memberdayakan Umat Dan Menyuarakan
                                Moderasi Islam.</p>
                                <abbr title="Telepon"><strong>Telepon :</strong></abbr> +62 81314223820<br>
                                <abbr title="Email"><strong>Email :</strong></abbr> info@Al-hijri.or.id<br>
                                <abbr title="Alamat"><strong>Alamat :</strong></abbr> Jl. Sholeh Iskandar No.KM.2, RT.01/RW.10, Kedungbadak, Kec. Tanah Sereal, Kota Bogor, Jawa Barat 16164
                        </div>
                    </div>
                </div>

                <!-- Footer Widget 2
        ============================================= -->
                <div class="col-lg-3 col-sm-6 mb-5 mb-lg-0">
                    <h4 class="mb-3 mb-sm-4">Tags</h4>
                    <div class="tagcloud">
                        <div v-if="tags.length > 0">
                            <router-link :to="{name: 'detail_tag', params: { slug: tag.slug }}" v-for="tag in tags" :key="tag.id" class="btn btn-sm btn-outline-secondary mb-2 me-2">{{ tag.name.toUpperCase() }}</router-link>
                        </div>
                        <div v-else class="text-center">
                            <ListLoader/>
                        </div>
                    </div>
                </div>


                <!-- Footer Widget 4
    ============================================= -->
                <div class="col-lg-4 col-sm-6 mb-0">
                    <div class="widget widget_links clearfix">
                        <h4 class="mb-3 mb-sm-4">Download Aplikasi E-Al-hijri</h4>
                        <p>E-Al-hijri merupakan layanan dompet digital yang membantu jamaah masjid Al-hijri untuk
                            melakukan transaksi keuangan secara digital dengan menyimpan uang, melakukan pembayaran
                            online dan offline dengan aman, kapanpun dan dimanapun dengan mudah.</p>
                        <a href="../play.google.com/store/apps/detailse91c.html?id=com.zocial.Al-hijri"
                            class="button button-light text-dark w-100 text-center bg-white nott ls0 button-rounded button-xlarge ms-0"
                            target="_blank"><i class="icon-googleplay"></i>Google Play</a>
                    </div>
                </div>

            </div>

        </div>

        <!-- Copyrights
============================================= -->
        <div id="copyrights">

            <div class="container clearfix">

                <div class="row justify-content-center">
                    <div class="col-md-6 align-self-center">
                        Copyrights &copy;
                        {{ currentYear }}
                    </div>

                    <!-- <div class="col-md-6 align-self-center">
                        <div class="copyrights-menu float-end copyright-links m-0 clearfix">
                            <a href="index.html">Beranda</a>/<a href="blog.html">Blog</a>/<a
                                href="webpage/agenda.html">Agenda</a>/<a href="webpage/video.html">Al-hijri
                                TV</a>/<a href="webpage/download.html">Download</a>/<a
                                href="webpage/kontak.html">Kontak</a>
                        </div>
                    </div> -->
                </div>

            </div>

        </div><!-- #copyrights end -->

    </footer><!-- #footer end -->
        
    
</template>

<script>
    //import content loader
    import {
        ListLoader
    } from 'vue-content-loader';

    //import axios
    import axios from 'axios';

    //import hook onMounted from vue
    import { ref, onMounted, computed } from 'vue';

    export default {
        name: 'FooterComponent',

        components: {
            //loader component
            ListLoader
        },

        setup() {

            //define state
            const tags = ref([]);
            const currentYear = computed(() => new Date().getFullYear());

            //on mounted
            onMounted(() => {
                axios.get('/api/tag')
                    .then(response => {
                        tags.value = response.data.data.data;
                    })
                    .catch(() => {
                        tags.value = [];
                    });
            });

            //return data
            return {
                tags,
                currentYear
            }
        }
    }
</script>