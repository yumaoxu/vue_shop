<template>
  <div>
    <Header></Header>
    <router-view></router-view>
    <Footer v-show="$route.meta.showFooter"></Footer>
  </div>
</template>

<script>
import Header from "./components/Header"
import Footer from "./components/Footer"
export default {
name:"App",
components:{Header,Footer},
mounted() {
  //派发一个action，获取一个三级菜单列表，之前放在search下路由跳转会重复发请求，现在放在app中，只会请求一次，提高性能
   this.$store.dispatch("categoryList");
},
}
</script>

<style>
</style>