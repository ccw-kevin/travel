/**
* Created by ccw-kevin on 2018/6/17.
*/
<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area border-topbottom">
          <div class="title">当前城市</div>
          <div class="button-list">
            <div class="button-wrapper">
                <div class="button">{{this.city}}</div>
            </div>
          </div>
      </div>
      <div class="area border-topbottom">
        <div class="title">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="item in hot" :key="item.id">
            <div class="button" @click="handleCity(item.name)">{{ item.name }}</div>
          </div>
        </div>
      </div>
      <div class="area border-topbottom"
           v-for="(item, key) in cities"
           :key="key"
           :ref="key"
      >
        <div class="title">{{ key }}</div>
        <div class="item-list">
          <div class="item border-bottom"
               v-for="innerItem in item"
               :key="innerItem.id"
               @click="handleCity(innerItem.name)"
          >
            {{ innerItem.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
// eslint-disable-next-line
import { mapState, mapMutations} from 'vuex'
export default {
  name: 'cityList',
  props: {
    cities: Object,
    hot: Array,
    letter: String
  },
  computed: {
    ...mapState(['city'])
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  },
  methods: {
    handleCity (val) {
      // this.$store.commit('changeCity', val)
      this.changeCity(val)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity']) // 把vux 的muataions 里的changeCity 映射成一个changeCity 事件
  },
  watch: {
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        // console.log(element)
        this.scroll.scrollToElement(element)
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .border-topbottom
    &:before
      border-color: #ccc
    &:after
      border-color: #ccc
  .border-bottom
    &:before
      border-color: #ccc
    &:after
      border-color: #ccc
  .list
    overflow hidden
    position: absolute
    top: 1.55rem
    left: 0
    right 0
    bottom: 0
    .title
      line-height .44rem
      background #eee
      font-size .2rem
      color: #666
      padding-left .2rem
    .button-list
      overflow hidden
      padding .1rem .6rem .1rem .1rem
      .button-wrapper
        float left
        width 25%
        .button
          margin .1rem
          text-align center
          padding .2rem 0
          border: .02rem solid #ccc
          border-radius .06rem
    .item-list
      line-height .76rem
      padding-left .2rem
</style>
