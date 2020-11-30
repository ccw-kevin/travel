/**
* Created by ccw-kevin on 2018/6/17.
*/
<template>
  <div>
    <div class="search">
      <input type="text" v-model="keyword" class="search-text" placeholder="请输入城市名和拼音">
    </div>
    <div class="search-content" ref="search" v-if="keyword">
        <ul>
          <li  class="search-item border-bottom"
               v-for="item in list" :key="item.id"
               @click="handleCity(item.name)"
          >
            {{ item.name }}
          </li>
          <li class="search-item border-bottom" v-show="hasNoData">
            没有查询到匹配数据
          </li>
        </ul>
    </div>
  </div>

</template>
<script>
import Bscorll from 'better-scroll'
import { mapMutations } from 'vuex'
export default {
  name: 'citySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      timmer: null,
      list: [],
      bscroll: ''
    }
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  },
  mounted () {
    if (this.keyword) {
      this.bscroll = new Bscorll(this.$refs.search)
    }
  },
  methods: {
    handleCity (val) {
      console.log(val)
      // this.$store.commit('changeCity', val)
      this.changeCity(val)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity']) // 把vux 的muataions 里的changeCity 映射成一个changeCity 事件
  },
  watch: {
    keyword () {
      if (this.timmer) {
        clearTimeout(this.timmer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timmer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .search
    height .72rem
    margin-top -.02rem // 头部与搜索有条白色的线
    padding: 0 .1rem
    background $bgColor
    .search-text
      box-sizing border-box
      width 100%
      text-align center
      color: #666
      height .6rem
      line-height .6rem
      padding: 0 .1rem
      margin-top .02rem
      border-radius .06rem
  .search-content
    z-index: 1
    position: absolute
    overflow hidden
    top: 1.45rem
    left: 0
    right: 0
    bottom: 0
    background-color: #eee
    .search-item
      line-height .64rem
      padding-left .2rem
      color: #666
      background-color: #fff
</style>
