<template>
  <div class="wapper">
    <swiper :options="swiperOption" v-if="showSwiper">
      <swiper-slide v-for="item in swiperList" :key="item.id">
        <img  class="swiper-img" :src='item.imgUrl' />
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: 'homeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: 5000 // 自动轮播,几秒后
      }
    }
  },
  computed: {
    showSwiper () {
      return this.swiperList.length
    }
  },
  props: {
    swiperList: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  mounted () {
  // console.log('swipreList', this.swiperList)
  }
}
</script>
<style lang="stylus" scoped>
  .wapper >>> .swiper-pagination-bullet-active
     background: #fff
  .wapper
    width: 100%
    overflow: hidden
    height: 0
    padding-bottom: 26.67%
    background: #eee
    .swiper-img
      width: 100%
</style>
