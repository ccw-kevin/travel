<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
        输入城市/景点/主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{ this.city }}
        <span class="iconfont arrow-icon">&#xe64a;</span>
      </div>
    </router-link>
  </div>
</template>
<script>
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    /**
     * mapState(obj)
     * obj 可以是 数组如下,也可以是对象 { key: value }
     */
    // 这种写发是mapState把vuex组件里的city 映射到了computed 上
    ...mapState(['city']),
    ...mapGetters(['doubleCitys'])
  },
  methods: {}
}
</script>
<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
.header
  display: flex
  line-height: $headerLintHeight
  height .86rem
  color: #fff
  background: $bgColor
  .header-left
    width: 0.64rem
    float: left
    margin-left .12rem
    .back-icon
      text-align: center
      padding .1rem 0
      font-size: .4rem
  .header-input
    color: #ccc
    flex: 1
    height .64rem
    background: #fff
    line-height: 0.64rem
    margin-top:.12rem
    margin-left: .2rem
    border-radius: .1rem
    padding-left: .2rem
  .header-right
    color: #fff
    min-width 1.04rem
    padding 0 .1rem
    float: right
    text-align: center
    .arrow-icon
      font-size: .24rem
      margin-left: -.03rem
</style>
