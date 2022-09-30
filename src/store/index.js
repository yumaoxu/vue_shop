import Vue from "vue";
import Vuex from "vuex"
//需要使用插件一次
Vue.use(Vuex);
// //仓库存储数据的地方
// const state={};
// //修改state的唯一手段
// const mutations={}; 
// //处理action，可以书写自己的业务逻辑，也可以处理异步
// const actions={};
// //理解为计算属性，用于简化数据，让组件获取仓库的数据更加方便
// const getters={};
// ············································
//进行vuex模块化开发
import home from "./home"
import search from "./search"
import detail from "./detail"
import shopcart from "./shopcart";
import user from "./user"
import trade from "./trade";
//对外暴露Store类的一个实例
export default new Vuex.Store({
    modules: {
        home,
        search,
        detail,
        shopcart,
        user,
        trade
    }
})