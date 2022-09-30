import { reqGetSearchInfo } from "@/api";
//仓库存储数据的地方
const state={
    SearchInfo:{},
};
//修改state的唯一手段
const mutations={
    GETSEARCHINFO(state,SearchInfo){
        state.SearchInfo=SearchInfo
    }
}; 
//处理action，可以书写自己的业务逻辑，也可以处理异步
const actions={
    //获取search模块数据，并需要一个params参数，这里设置为默认空对象，因为他至少得为一个空对象
    async getSearchInfo({commit},params={}){
        let result =await reqGetSearchInfo(params)
        if(result.code==200){
            commit("GETSEARCHINFO",result.data)
        }
    },
};
//理解为计算属性，用于简化数据，让组件获取仓库的数据更加方便
const getters={
    //这个形参state是当前仓库的state，不是大仓库的
    //这边的放回数据可能会出现问题，我们为了以防万一，在放回数据出问题时至少返回一个空数组
    attrsList(state){
        return state.SearchInfo.attrsList||[]
    },
    goodsList(state){
        return state.SearchInfo.goodsList||[]
    },
    trademarkList(state){
        return state.SearchInfo.trademarkList||[]
    },
};
export default {
    state,
    mutations,
    actions,
    getters
}