//当前这个模块对api统一管理
import requests from "./request";
import mockRequest from "./mockAjax"
//三级联动的接口:/api/product/getBaseCategoryList
export const reqCategoryList=()=>requests({url:"/product/getBaseCategoryList",method:"get"})
//获取banner（Home首页轮播图接口）
export const reqBannerList=()=>mockRequest.get("/banner")
//获取floor
export const reqFloorList=()=>mockRequest.get("/floor")
//获取搜索模块数据
//这个接口（获取搜索模块的数据），给服务器传递一个参数（至少得是一个空对象）
export const reqGetSearchInfo=(params)=>requests({url:"/list",method:"post",data:params})
//获取详情页数据
export const reqGoodsInfo=(skuid)=>requests({url:`/item/${skuid}`,method:"get"})
//将产品添加到购物车中
export const reqAddOrUpdateShopCart=(skuid,skuNum)=>requests({url:`/cart/addToCart/${skuid}/${skuNum}`,method:"post"})
//获取购物车内容
export const reqShopCart=()=>requests({url:"/cart/cartList",method:"get"})
//删除购物车内容
export const reqDeleteCartById=(skuId)=>requests({url:`cart/deleteCart/${skuId}`,method:"delete"})
//修改商品的选中状态
export const reqUpdateCheckedById=(skuId,isChecked)=>requests({url:`/cart/checkCart/${skuId}/${isChecked}`,method:"get"})
//获取注册验证码
export const reqGetCode=(phone)=>requests({url:`/user/passport/sendCode/${phone}`,method:"get"})
//注册
export const reqUserRegister=(data)=>requests({url:"/user/passport/register",data,method:"post"})
//登陆
export const reqUserLogin=(data)=>requests({url:"/user/passport/login",data,method:"post"})
//获取用户信息（带着token）
export const reqUserInfo=()=>requests({url:"/user/passport/auth/getUserInfo",method:"get"})
//退出登录
export const reqLogout=()=>requests({url:"/user/passport/logout",method:"get"})
//获取用户地址
export const reqAddressInfo=()=>requests({url:"/user/userAddress/auth/findUserAddressList",method:"get"})
//获取商品清单
export const reqOrderInfo=()=>requests({url:"/order/auth/trade",method:"get"})
//提交订单
export const reqSubmitOrder=(tradeNo,data)=>requests({url:`/order/auth/submitOrder?tradeNo=${tradeNo}`,data,method:"post"})
//获取支付信息 
export const reqPayInfo=(orderId)=>requests({url:`/payment/weixin/createNative/${orderId}`,method:"get"})
//获取支付状态
export const reqPayStatus=(orderId)=>requests({url:`/payment/weixin/queryPayStatus/${orderId}`,method:"get"})
//获取个人中心数据 
export const reqMyOrderList=(page,limit)=>requests({url:`/order/auth/${page}/${limit}`,method:"get"})