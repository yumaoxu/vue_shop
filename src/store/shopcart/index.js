import { reqShopCart, reqDeleteCartById, reqUpdateCheckedById } from "@/api";
const state = {
    cartList: [],
}
const mutations = {
    GETSHOPCART(state, cartList) {
        state.cartList = cartList
    }
}
const actions = {
    async getShopCart({ commit }) {
        let result = await reqShopCart()
        if (result.code == 200) {
            commit("GETSHOPCART", result.data)
        }
    },
    async deleteCartListBySkuId({ commit }, skuId) {
        let result = await reqDeleteCartById(skuId)
        if (result.code == 200) {
            return "ok"
        } else {
            return Promise.reject(new error("faile"))
        }
    },
    async updateCheckedById({ commit }, { skuId, isChecked }) {
        let result = await reqUpdateCheckedById(skuId, isChecked)
        if (result.code == 200) {
            return "ok"
        } else {
            return Promise.reject(new error("faile"))
        }
    },
    //第一个参数是从context中解构出来的，context中有commit（常用），dispatch（派发actions），getters，state等
    deleteAllCheckedCart({ dispatch, getters }) {
        let PromiseAll = []
        getters.cartList.cartInfoList.forEach(item => {
            let Promise = item.isChecked == 1 ? dispatch("deleteCartListBySkuId", item.skuId) : ""
            PromiseAll.push(Promise)
        })
        //promise的all方法，如果所有promise对象返回结果为成功即返回成功，否则返回失败
        return Promise.all(PromiseAll)
    },
    updateAllChecked({ dispatch, state }, isChecked) {
        let PromiseAll = []
        state.cartList[0].cartInfoList.forEach(item => {
            let promise = dispatch("updateCheckedById", { skuId: item.skuId, isChecked })
            PromiseAll.push(promise)
        })
        return Promise.all(PromiseAll)
    }
}
const getters = {
    cartList(state) {
        return state.cartList[0] || {}
    }
}
export default {
    state,
    mutations,
    actions,
    getters
}