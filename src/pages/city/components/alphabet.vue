/**
* Created by ccw-kevin on 2018/6/17.
*/
<template>
  <div class="wrapper">
    <ul class="list">
      <li class="item"
          v-for="item in letters"
          :key="item"
          :ref="item"
          @click="handlClikKey"
          @touchstart="handleTouchStart"
          @touchmove="handleTouchMove"
          @touchend="handleTouchEnd"
      >
        {{ item }}
      </li>
    </ul>
  </div>

</template>
<script>
export default {
  name: 'cityalphabet',
  props: {
    cities: Object
  },
  computed: {
    letters () {
      const letters = []
      for (var i in this.cities) {
        letters.push(i)
      }
      console.log(letters)
      return letters
    }
  },
  data () {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  updated () { // 数据更新完成 页面渲染后调用此钩子
    this.startY = this.$refs['A'][0].offsetTop // 为了节流 提高效率
  },
  methods: {
    handlClikKey (e) {
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.timer) { // 为了节流 减少touch的滑动请求次数
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => {
        if (this.touchStatus) {
          // const startY = this.$refs['A'][0].offsetTop
          const touchY = e.touches[0].clientY - 74
          const index = Math.floor((touchY - this.startY) / 22)
          console.log(index)
          if (index >= 0 && index <= this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }
      }, 16)
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .list
    display flex
    flex-direction: column
    justify-content: center
    position absolute
    top: 1.55rem
    bottom 0
    width .4rem
    right 0
    .item
      text-align center
      line-height .44rem
      color: $bgColor
</style>
