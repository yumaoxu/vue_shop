const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  //打包不生成map文件
  productionSourceMap:false,
  //这样所有的资源都会被链接为相对路径，这样打出来的包可以被部署在任意路径。
  publicPath: './',
  transpileDependencies: true,
  lintOnSave:false,
  //代理跨域
  devServer: {
    proxy:{
      //对api的请求进行服务器代理
      "/api":{
        //目标服务器
        target:"http://gmall-h5-api.atguigu.cn"
      }
    }
  },
})
