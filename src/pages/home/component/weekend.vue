/**
* Created by ccw-kevin on 2018/6/10.
*/
<template>
  <div>
    <div class="title">周末去哪里</div>
    <ul>
      <li class="item border-bottom " v-for="item in weekendList" :key="item.id">
        <div class="item-img-warpper">
          <img class='item-img' :src="item.imgUrl" />
        </div>
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecomment',
  data () {
    return {}
  },
  props: {
    weekendList: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/mixins.styl"
  .title
    line-height: .6rem
    background: #eee
    text-indent: .2rem
    margin-top: .2rem
  .item
    overflow: hidden
    padding: .1rem 0
  .item-img-warpper
    height: 0
    overflow: hidden
    padding-bottom: 37.43%
    .item-img
      width: 100%
  .item-info
    padding .1rem
    .item-title
      line-height .54rem
      font-size .32rem
    .item-desc
      line-height: .35rem
      color: #ccc
      overflow:hidden
      text-overflow:ellipsis
      display:-webkit-box
      -webkit-box-orient:vertical
      -webkit-line-clamp:2

</style>
