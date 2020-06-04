import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引入轮播图插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
//引入公共样式
import "./assets/css/reset.css"
import "./assets/css/all.css"

//引入轮播图swiper样式
import 'swiper/css/swiper.css'


//全局调用轮播图插件
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
