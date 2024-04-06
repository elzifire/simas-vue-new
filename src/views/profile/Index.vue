<template>
    <div id="profile">
        <Header />
    </div>
</template>

<script>
//import component
    import Header from "../../components/Header.vue";
    import Slider from "../../components/Slider.vue";
    import Footer from "../../components/Footer.vue";
    
    export default{
        name: 'profile',
        
        components: {
            Header,
        },
    }

</script>