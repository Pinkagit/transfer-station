import Vue from 'vue'
import App from './app'
import VueRouter from 'vue-router'
import EMA from 'ema-proxy'
import './assets/js/date'
import './extend/filter'
import {
  Button,
  Select,
  FormItem,
  Option,
  Form,
  Loading,
  Input
} from 'element-ui'
import './assets/iconfont/iconfont.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import 'animate.css'

Vue.use(VueAwesomeSwiper)
Vue.use(Button)
Vue.use(Select)
Vue.use(Form)
Vue.use(Input)
Vue.use(FormItem)
Vue.use(Loading)
Vue.use(Option)
import routes from './RouterMap'
window.FastClick.attach(document.body, {})
window.EMA = new EMA()
Vue.use(VueRouter)
const router = new VueRouter(routes)
const app = new Vue({ // eslint-disable-line
  router,
  render: h => h(App)
})

function startApp () {
  window.app = {
    app
  }
  app.$mount('#app')
}

// 防止过快点击
Vue.directive('preventReClick', {
  inserted (el, binding) {
    el.addEventListener('click', () => {
      if(!el.disabled) {
        el.disabled = true;
        setTimeout(() => {
          el.disabled = false;
        }, binding.value || 2000)
      }
    })
  }
})

startApp()
