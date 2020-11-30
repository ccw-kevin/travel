<template>
  <div>
    <home-header></home-header>
    <home-swiper :swiperList="swiperList"></home-swiper>
    <home-icons :iconList="iconList"></home-icons>
    <home-recomment :recommendList="recommendList"></home-recomment>
    <home-weekend :weekendList="weekendList"></home-weekend>
  </div>
</template>
<script>
import HomeHeader from './component/header'
import HomeSwiper from './component/swiper.vue'
import HomeIcons from './component/icons.vue'
import HomeRecomment from './component/recomment.vue'
import HomeWeekend from './component/weekend.vue'
import axios from 'axios'
import { mapState } from 'vuex'
export default {
  name: 'home',
  data () {
    return {
      lastCity: '',
      iconList: [],
      recommendList: [],
      swiperList: [],
      weekendList: []
    }
  },
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecomment,
    HomeWeekend
  },
  computed: {
    ...mapState(['city'])
  },
  mounted () {
    this.lastCity = this.city
    this.travelData()
  },
  activated () {
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
      this.travelData()
    }
  },
  methods: {
    travelData () {
      let self = this
      axios.get('/api/index.json?city=' + this.city).then(res => {
        const resData = typeof res.data.data === 'string' ? JSON.parse(res.data.data) : res.data.data
        if (res.data.ret && resData) {
          self.iconList = resData.iconList
          self.recommendList = resData.recommendList
          self.swiperList = resData.swiperList
          self.weekendList = resData.weekendList
        }
      })
    }
  }
}
</script>
