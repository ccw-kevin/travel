import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)
export default new Vuex.Store({
  state,
  mutations,
  getters: { // getters 相当于vue 的computed 计算state 里面的值然后在做传输 类似state的计算属性
    doubleCitys (state) {
      return state.city + ' ' + state.city
    }
  }
  // actions: {
  //   changeCity (ctx, val) {
  //     ctx.commit('changeCity', val)
  //   }
  // },
})
