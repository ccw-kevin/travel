/**
* Created by ccw-kevin on 2018/6/3.
*/
<template>
  <div class="icons">
    <swiper :options="iconOption">
      <swiper-slide v-for="(page, key) in pages" :key="key">
        <div class="icon" v-for="item in page" :key="item.id">
          <div class="icon-img">
            <img class='icon-img-content' :src="item.imgUrl"/>
            <div/>
            <span class="text-desc">{{item.desc}}</span>
          </div>
        </div>
      </swiper-slide>
      <div class="icon-pagination"  slot="pagination">1111</div>
    </swiper>
  </div>
</template>
<script>
export default {
  components: {},
  name: 'HomeIcons',
  data () {
    return {
      iconOption: {
        pagination: '.icon-pagination'
      }
    }
  },
  props: {
    iconList: {
      type: Array
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  @import '~styles/mixins.styl'
  .icons >>> .swiper-pagination-bullet-active
    background: #00afbecc
  .icons >>> .swiper-container
    height: 0
    padding-bottom: 52%
  .icons
    margin-top: .1rem
    .icon
      position: relative
      height: 0
      width: 25%
      float: left
      padding-bottom: 25%
      .icon-img
        position: absolute
        top: 0
        left: 0
        right: 0
        bottom: 2rem
        box-sizing: border-box
        padding: .3rem
        .icon-img-content
          display: block
          margin 0 auto
          width: 100%
      .text-desc
        position: absolute
        top: 1.5rem
        left: 0
        right: 0
        bottom: 0
        height: .85rem
        line-height: .85rem
        text-align: center
        ellipsis()
  .icon-pagination
    position: absolute;
    bottom: .01rem;
    width: 100%;
    margin-top: .2rem
    text-align: center;
</style>
