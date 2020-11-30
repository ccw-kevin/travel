// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import 'styles/reset.css' // 在各种机型上默认样式不统一 需要在弄成统一的
import 'styles/border.css' // 像素一边框的问题 独立像素和物理像素的问题
import 'styles/iconfont.css' // 像素一边框的问题 独立像素和物理像素的问题
import fastclick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
// require styles
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
// 绑定fastclick 到body 消除移动端300毫秒的延迟
fastclick.attach(document.body)
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
