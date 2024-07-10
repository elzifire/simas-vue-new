<template>
    <div class="post-index">
        <!-- header -->
        <Header />
        <!-- end header -->

        <!-- page title -->
        <section id="page-title" class="page-title-mini bg-color page-title-dark">
            <div class="container clearfix mt-2">
                <h1 style="margin-top: 1rem;">Kontak Kami</h1>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="#">Beranda</a></li>
                    <!-- <li class="breadcrumb-item">Halaman</li> -->
                    <li class="breadcrumb-item active" aria-current="page">Kontak</li>
                </ol>
            </div>
        </section>
        <!-- end page title -->

        <!-- content -->
        <div class="container-fluid mt-5 mb-5">
            <div class="row">
                <div class="col-md-7">
                    <div class="card border-0 shadow-sm rounded">
                        <div class="card-body">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15854.747685004415!2d106.7924118!3d-6.5611463!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c46c9a3721e9%3A0x270b284c8a1f7e49!2sUniversitas%20Ibn%20Khaldun%20Bogor!5e0!3m2!1sid!2sid!4v1712010165495!5m2!1sid!2sid"
                                width="100%" height="400" frameborder="0" style="border:0;" allowfullscreen=""
                                aria-hidden="false" tabindex="0"></iframe>
                        </div>
                    </div>
                </div>
                <div class="col-md-5">
                    <div class="card border-0 shadow-sm rounded">
                        <div class="card-body">
                            <h3>KONTAK KAMI</h3>
                            <hr>
                            <div v-for="contact in contacts" :key="contact.id" class="mb-3">
                                <p><i class="fa fa-user"></i> {{ contact.name }}</p>
                                <p><i class="fas fa-phone"></i> {{ contact.phone }}</p>
                            </div>
                            <p>
                                <i class="fas fa-envelope"></i> 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- main content -->

        <!-- footer -->
        <Footer />
        <!-- end footer -->
    </div>
</template>

<script>
    // import axios
    import axios from "axios";
    
    //import hook onMounted from vue
    import { ref, onMounted } from 'vue';

    //import component
    import Header from "../../components/Header.vue";
    import Footer from "../../components/Footer.vue";

    export default {
        name: 'ContactComponent',
        components: {
            Header,
            Footer
        },
        setup() {
            const contacts = ref([]);

            onMounted(async () => {
                try {
                    const response = await axios.get('http://localhost:8000/api/contact');
                    if (response.data && response.data.data) {
                        contacts.value = response.data.data;
                    }
                } 
                catch (error) {
                    console.error(error.response.data.data) ;// show error message
                }
            });

            return {
                contacts
            };
        }
    }
</script>

<style scoped>
/* Add styles to ensure the new header section looks good */
.page-title-mini {
  height: 80px;
}

.page-title-mini h1 {
  font-size: 24px;
  line-height: 80px;
  margin-top: 1rem;
}

.breadcrumb {
    background: none;
    padding: 0;
    margin-bottom: 0;
}
</style>
