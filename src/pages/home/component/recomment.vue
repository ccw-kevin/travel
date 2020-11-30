/**
* Created by ccw-kevin on 2018/6/10.
*/
<template>
  <div>
    <div class="title">热销产品</div>
    <ul>
      <li class="item border-bottom " v-for="item in recommendList" :key="item.id">
          <img class='item-img' :src="item.imgUrl" />
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
          <button class="item-btn">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecomment',
  data () {
    return {
    }
  },
  props: {
    recommendList: {
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
    display: flex
    overflow: hidden
    height: 1.9rem
    padding: .1rem 0
    .item-img
      padding: .1rem
      width: 1.8rem
      height: 1.8rem
    .item-info
      flex: 1
      padding .1rem
      min-width: 0
      .item-title
        line-height .54rem
        font-size .32rem
      .item-desc
        line-height: .35rem
        height: .66rem
        color: #ccc
        overflow:hidden
        text-overflow:ellipsis
        display:-webkit-box
        -webkit-box-orient:vertical
        -webkit-line-clamp:2
      .item-btn
          margin-top: .1rem
          background: #ff9300
          line-height: .44rem
          padding: 0 .1rem
          border-radius: .6rem
          color: #fff

</style>
