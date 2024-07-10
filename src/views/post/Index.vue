<template>
    <div class="post-index">
        <!-- header -->
        <Header />
        <!-- end header -->

        <!-- main content -->
         
        <!-- buatkan navigasi lalu di dalam navigasi ada category -->
        <div class="container-fluid mt-5">
            <div class="row">
                <div class="col-md-12">
                    <nav class="navbar navbar-expand-lg bg-color page-title-dark">
                        <div class="container">
                            <div class="collapse navbar-collapse" id="navbarNav">
                                <ul class="navbar-nav">
                                    <li class="nav-item d-flex" v-if="categories.length > 0">
                                        <router-link :to="{ name: 'detail_category', params: { slug: category.slug } }"
                                            class="nav-link text-white" v-for="category in categories" :key="category.id">{{ category.name.toUpperCase() }}</router-link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
        

        <div class="container-fluid mt-5 mb-5">

            <div class="row">

                <div v-if="posts.length > 0" class="row">
                    <div class="col-md-4 mb-4" v-for="post in posts" :key="post.id">
                        <div class="card h-100 shadow-sm border-0 rounded-lg">
                            <div class="card-img">
                                <img :src="post.image" class="w-100"
                                    style="height: 200px;object-fit: cover;border-top-left-radius: .3rem;border-top-right-radius: .3rem;">
                            </div>
                            <div class="card-body">
                                <router-link :to="{name: 'detail_post', params: {slug: post.slug}}"
                                    class="text-dark text-decoration-none">
                                    <h6>{{ post.title }}</h6>
                                </router-link>
                            </div>
                            <div class="card-footer bg-white">
                                <i class="fa fa-calendar" aria-hidden="true"></i> {{ post.created_at }}
                            </div>
                        </div>
                    </div>
                </div>

                <div v-else>
                    <div class="row">
                        <div class="col-md-4 mb-3" v-for="loader in posts_loader" :key="loader">
                            <div class="card border-0 shadow-sm rounded-lg">
                                <div class="card-body">
                                    <FacebookLoader />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="text-center" v-show="moreExists">
                    <button type="button" class="btn btn-primary btn-md" v-on:click="loadMore"><span class="fa fa-arrow-down"></span> LIHAT LEBIH BANYAK</button>
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
    //import content loader
    import {
        FacebookLoader
    } from 'vue-content-loader';

    //import axios
    import axios from 'axios';

    //import hook onMounted from vue
    import { ref, onMounted } from 'vue';

    //import component
    import Header from "../../components/Header.vue";
    import Footer from "../../components/Footer.vue";

    export default {
        name: 'PostCmponent',

        components: {
            //loader component
            FacebookLoader,
            // component app
            Header,
            Footer
        },

        setup() {
            
            //define state
            const posts = ref([]);
            const posts_loader = ref(6);

            // define category
            const categories = ref([]);

            //define state moreExists
            let moreExists = ref(false);
            let nextPage = ref(0);
            
            //define method
            const fetchDataPosts = () => {
                axios.get('/api/post')
                    .then(response => {

                        //assign response to state posts
                        posts.value = response.data.data.data

                        //check if response has next page
                        if (response.data.data.current_page < response.data.data.last_page) {
                            
                            //set state moreExists to true
                            moreExists.value = true

                            //increment nextPage
                            nextPage.value = response.data.data.current_page + 1
                        } else {

                            //set state moreExists to false
                            moreExists.value = false
                        }
                    })
            };

            // define method categories
            const fetchDataCategories = () => {
                axios.get('/api/category')
                    .then(response => {
                        categories.value = response.data.data.data
                    })
            };

            //define method loadMore
            const loadMore = () => {
                axios.get(`/api/post?page=${nextPage.value}`)
                    .then(response => {
                        if (response.data.data.current_page < response.data.data.last_page) {
                                
                                //set state moreExists to true
                                moreExists = true

                                //increment nextPage
                                nextPage = response.data.data.current_page + 1
                        } else {

                                //set state moreExists to false
                                this.moreExists = false
                        }
                        
                        //assign response to state posts
                        response.data.data.data.forEach(data => {
                            posts.value.push(data)
                        })
                    })
            };

            //run hook onMounted
            onMounted(() => {

                //fetch data posts
                fetchDataPosts()

                // fetch data categories
                fetchDataCategories()
            });

            //return data
            return {
                posts,
                posts_loader,
                categories,
                moreExists,
                nextPage,
                loadMore
            }

        }
    }
</script>