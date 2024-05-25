<template>
    <div id="history">
        <Header />
        <!-- New header section -->
        <section id="page-title" class="page-title-mini bg-color page-title-dark">
            <div class="container clearfix">
                <h1>Sejarah</h1>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="#">Beranda</a></li>
                    <li class="breadcrumb-item active" aria-current="page">Sejarah</li>
                </ol>
            </div>
        </section>
        <!-- end header section -->

        <!-- content -->
        <div class="container-fluid mt-5 mb-5">
            <div class="row">
                <div class="col-md-7 mx-auto">
                    <div class="card border-0 shadow-sm rounded">
                        <div class="card-body">
                            <p class="mt-1 align-item-center" style="text-align: justify;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae accusamus officia odit
                                alias repellat pariatur eligendi, nihil excepturi amet error iusto. Nihil aperiam
                                quaerat atque nulla tenetur aliquid vel quibusdam amet mollitia, quidem facilis
                                voluptate inventore reprehenderit consectetur, fugiat quos incidunt minus, ducimus
                                voluptates tempora impedit eius ut! Aliquam maxime cum ratione, reprehenderit asperiores
                                amet sequi fugiat nisi, accusamus nemo nihil qui voluptatem. Reprehenderit ab iusto
                                laudantium! Libero magni accusantium dolor sint earum odit architecto consequuntur
                                nesciunt. Tempore laudantium soluta recusandae obcaecati vel nam dolores voluptas. Hic
                                nesciunt laudantium rem vel? Natus recusandae facere, ipsam saepe id enim perspiciatis
                                atque consequuntur explicabo nesciunt, asperiores sit, quaerat hic nostrum! Sint ea
                                accusamus consectetur saepe? Praesentium minus officiis tempore iusto eos nam, mollitia
                                cupiditate minima magnam eveniet recusandae earum at placeat consequatur obcaecati
                                incidunt itaque officia libero excepturi id animi temporibus ut fugit. Ex expedita
                                dignissimos voluptates exercitationem facilis recusandae voluptas sequi, perspiciatis
                                vero, temporibus possimus autem nihil perferendis, eligendi aliquam magni quam cum vel
                                excepturi sit. Quos quam sint voluptate, blanditiis perspiciatis, repellat ut beatae
                                laboriosam, nemo odit minima. Quo dignissimos eveniet quasi quas commodi blanditiis eum
                                consequatur ullam ipsam consequuntur nulla animi culpa modi sunt quidem eaque nobis,
                                sapiente asperiores quae recusandae omnis dicta suscipit. Aliquid at blanditiis dolor
                                autem ex, ipsum iusto? Aliquam eum nesciunt autem sapiente illo architecto esse nam
                                voluptatum incidunt, eos officiis consequuntur nobis a vero, commodi id vitae dolor amet
                                illum eligendi repellat natus assumenda earum! Error dolores eius reprehenderit, beatae
                                quam assumenda minima laudantium, officiis consequuntur est commodi ut nemo, rerum
                                aspernatur laboriosam harum! Veritatis eligendi dolorum cumque suscipit ipsum nobis
                                inventore numquam atque, modi, sed eius soluta ipsa officiis totam rerum asperiores
                                dolorem, esse tenetur nostrum incidunt doloribus! Et quaerat maiores iste rerum nam
                                debitis animi dolore odit amet similique beatae consequatur reiciendis delectus suscipit
                                adipisci molestiae cupiditate, deleniti autem, explicabo nulla eos? Error fugit
                                obcaecati libero quaerat ullam repellat vero officia alias tempore dolor mollitia
                                quisquam nostrum atque odit, cupiditate nihil deserunt totam quia inventore beatae
                                quidem tenetur. Deleniti numquam mollitia dicta ad quo modi reiciendis, commodi
                                provident distinctio sequi, necessitatibus sapiente minus cumque saepe, yang tubuh
                                menuduh tentu saja. Voluptas neque repellat ut nobis dolores, nisi aut
                                tubuhnya voloptatibus optio cum dolor eaque ea laborum enim deleniti atque
                                retreat blanditiis, hidup berbeda merusak orang pelarian!
                                Laboriosam total vel
                                Keterangan: Quisquam dicta nemo dolor dan keanehan yang besar? Setiap nama itu.
                                Keduanya optio, rerum explicabo, beatae sequi mollitia
                                Kebutuhan dalam pencahayaan sementara menyala ut
                                dengan tepat tidak mungkin, menuduh terpisah itu
                                animator, saya baru saja mendikte. Nemo serupa rusak nam molestiae optio?
                                Sebagian dari pelatihan yang bagus, sangat mudah untuk tidak sejenis
                                membutuhkan kesenangan dari siapa, tempat besar mempertahankan tenetur. Pemulihan tidak rata
                                perasaan seseorang. Jarak yang benar-benar berbeda untuk menetapkan, saya tinggal di sana, layak untuk menghadapi desain arsitektur
                                sementara yang besar ditutupi oleh penampilan besar, id
                                membagi mempermalukan perasaan dari kesalahan terbesar dari produk kami, dibandingkan.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- main content -->

        <!-- start footer -->
        <Footer />
        <!-- end footer -->
    </div>
</template>

<script>
//import component
import Header from "../../components/Header.vue";
import Footer from "../../components/Footer.vue";

export default {
    name: 'historyComponent',

    components: {
        // component app
        Header,
        Footer
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
</style>
