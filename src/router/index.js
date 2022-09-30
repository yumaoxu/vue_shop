import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes"
import store from "@/store"
Vue.use(VueRouter)
let router = new VueRouter({
    routes,
    scrollBehavior(to, from, savedPosition) {
        // 始终滚动到顶部
        return { y: 0 }
    },
})
router.beforeEach(async (to, from, next) => {
    let token = store.state.user.token
    let name = store.state.user.userInfo.name
    //未登陆不能跳转的黑名单
    let blackList = ["/pay", "/shopcart", "/center", "/trade","/addcart"]
    if (token) {
        //登陆了不能去登陆界面,直接返回首页
        if (to.path == "/login") {
            next("/home")
        } else {
            //如果去的不是登陆页面，就获取用户信息
            if (name) {
                //如果有用户名就直接放行，否则获取用户信息
                next()
            } else {
                //获取用户信息
                try {
                    await store.dispatch("getUserInfo")
                    next()
                } catch (error) {
                    //token失效了
                    await store.dispatch("userLogout")
                    alert("登陆过期")
                    next("/login")
                }
            }
        }
    } else {
        let toPath = to.path
        // if(toPath.indexOf("/pay")!=-1||toPath.indexOf("/trade")!=-1||toPath.indexOf("/center")!=-1){
        function isBlack(item) {
          return toPath.indexOf(item) == -1
        }
        if (blackList.every(isBlack)) {
            next()
        } else {
            alert("请登录")
            next("/login?redirect="+toPath)
        }
    }
})
export default router