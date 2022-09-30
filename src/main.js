import Vue from 'vue'
import App from './App.vue'
// 注册全局组件TypeNav,Carousel
import TypeNav from "@/components/TypeNav"
import Carousel from "@/components/Carousel"
import Pagination from "@/components/Pagination"
//引入element-ui
import { Button,MessageBox } from 'element-ui';
import store from "@/store"
//第一个参数为组件的名字，第二个为哪个组件注册为全局组件
Vue.component(TypeNav.name,TypeNav)
Vue.component(Carousel.name,Carousel)
Vue.component(Pagination.name,Pagination)
//注册全局组件的第一种写法
Vue.component(Button.name, Button);
//注册全局组件的第二种写法  
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert; 
//在没有vuex时使用
import * as API from "@/api"
//引入懒加载插件
import VueLazyload from 'vue-lazyload'
import loadimage from "@/assets/loadimage.webp"
Vue.use(VueLazyload,{
  //加载图片
  loading: loadimage,
})
//引入表单校验插件
import  "@/plugins/validate"  
//引入路由
import router from "@/router"
import "@/mock/mock"
import "swiper/css/swiper.css"
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  //全局事件总线$bus配置
  beforeCreate(){
    Vue.prototype.$bus=this
    Vue.prototype.$API=API
  },
  //注册路由
  router,
  store
}).$mount('#app')
