import Vue from 'vue'
import Vuex from 'vuex'
// import * as getters from ''这种语法的意思是，比如我们从getters中取singer
// 直接就可以用getters.singer来取到这个值，不用说我都用{}的方式来
// {}是导出组件中某个值或者方法，直接导出整个组件的引用就直接写变量名就好
import * as actions from './actions'
import * as getters from './getters'
import state from './state'
import mutations from './mutations'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'
//  这里是要导出一个store的实例，类似于工厂化的方式
// actions,getters,state, mutations,都作为参数传进去的
export default new Vuex.Store({
  actions,
  getters,
  state,
  mutations,
  strict: debug,
  plugins: debug ? [createLogger()] : []
})