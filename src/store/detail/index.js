import { reqGoodsInfo, reqAddOrUpdateShopCart } from "@/api"
import {getuuid} from "@/utils/uuid_token"
const state = {
    goodInfo: {},
    uuid_token:getuuid()
}
const mutations = {
    GETGOODINFO(state, goodInfo) {
        state.goodInfo = goodInfo
    },
}
const actions = {
    //获取产品信息
    async getGoodInfo({ commit }, skuid) {
        let result = await reqGoodsInfo(skuid)
        if (result.code == 200) {
            commit("GETGOODINFO", result.data)
        }
    },
    //将产品添加到购物车中(解构赋值)
    async AddOrUpdateShopCart({ commit }, { skuid, skuNum }) {
        //加入购物车后只是将数据发送给服务器保存，并没有返回数据，所以这里不用三连环
        let result = await reqAddOrUpdateShopCart(skuid, skuNum)
        // console.log(result);
        if(result.code==200){
            return "ok"
        }else{
            return Promise.reject(new Error("faile"))
        }
    }
}
const getters = {
    //简化路径导航数据
    categoryView(state) {
        //当服务器数据回来前，至少返回一个空对象，不至于找不到属性出错，返回空对象就会是undefined，不会报错
        return state.goodInfo.categoryView || {}
    },
    //简化产品信息数据
    skuInfo(state) {
        return state.goodInfo.skuInfo || {}
    },
    //简化售卖属性
    spuSaleAttrList(state) {
        return state.goodInfo.spuSaleAttrList || []
    }
}
export default {
    state, mutations, actions, getters
}