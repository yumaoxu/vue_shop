import { reqAddressInfo,reqOrderInfo } from "@/api";
const state = {
    addressList:[],
    orderInfo:{}
}
const mutations = {
    GETADDRESSINFO(state,addressList){
        state.addressList=addressList
    },
    GETORDERINFO(state,orderInfo){
        state.orderInfo=orderInfo
    }
}
const actions = {
    async getAddressInfo({ commit }) {
        let result = await reqAddressInfo()
        if(result.code==200){
            commit("GETADDRESSINFO",result.data)
        }
    },
    async getOrderInfo({ commit }) {
        let result = await reqOrderInfo()
        if(result.code==200){
            commit("GETORDERINFO",result.data)
        }
    }
}
const getters = {}
export default {
    state,
    mutations,
    actions,
    getters
}