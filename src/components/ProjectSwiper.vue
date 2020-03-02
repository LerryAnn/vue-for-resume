<template>
  <swiper :options="swiperOption" class="carousel">
    <swiper-slide v-for="item in carouselList" :key="item.index">
      <img :src="item.imageUrl" alt />
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </swiper>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import { mapState } from "vuex";
export default {
  data() {
    return {
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        autoplay: true,
        mousewheel: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
    };
  },
  computed: {
    ...mapState({
      carouselList: state => state.carouselList
    })
  },
  components: {
    swiper,
    swiperSlide
  }
};
</script>

<style lang='stylus' scoped>
.swiper-slide {
  img {
    width: 100%;
    display: block;
    max-width: 768px;
    margin: 0 auto;
  }
}
</style>