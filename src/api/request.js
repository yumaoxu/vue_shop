import axios from "axios";
//引入进度条和进度条样式
import nProgress from "nprogress";
//获取仓库:存储数据
import store from "@/store";
import "nprogress/nprogress.css"

const requests = axios.create({
    //配置对象基础路径和超时时间
    baseURL: "/api",
    timeout: 5000
})
//请求拦截器
requests.interceptors.request.use((config)=>{
    //config:配置对象,对象里有一个属性很重要,headers请求头
    if(localStorage.getItem("UUIDTOKEN")){
        config.headers.userTempId=localStorage.getItem("UUIDTOKEN");
    }
    if(store.state.user.token){
        config.headers.token=store.state.user.token
    }
    nProgress.start();    //进度条开始
    return config;
})
//响应拦截器
requests.interceptors.response.use((res)=>{
    //成功的回调函数:服务器响应数据回来以后,相应拦截器可以检测到,可以做一些事情
    nProgress.done()    //进度条结束
    return res.data;
},(error)=>{
    //相应失败的回调函数
    // console.log(error.message);
    return Promise.reject(new Error("faile"));
})
export default requests;