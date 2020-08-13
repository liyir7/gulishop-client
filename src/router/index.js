
// 引入
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from '@/router/router'



//声明使用插件 vue的插件都要声明使用 第三方免了
Vue.use(VueRouter)

// 解决多次触发编程试报错的方法
//保存原来的push函数 ，后面修改之后可以找到原来的
const originPush = VueRouter.prototype.push
const originReplace = VueRouter.prototype.replace

VueRouter.prototype.push = function(location,onResolved,onRejected){
  //调用push根本没有处理promise的回调，无论成功和失败
  if(onResolved === undefined && onRejected === undefined){
    return originPush.call(this,location).catch(() => {})
  }else{
    //代表调用push的时候，传了处理promise的回调
    return originPush.call(this,location,onResolved,onRejected)
  }
}

VueRouter.prototype.replace = function(location,onResolved,onRejected){
  //调用push根本没有处理promise的回调，无论成功和失败
  if(onResolved === undefined && onRejected === undefined){
    return originReplace.call(this,location).catch(() => {})
  }else{
    //代表调用push的时候，传了处理promise的回调
    return originReplace.call(this,location,onResolved,onRejected)
  }
}
  

const router = new VueRouter({
    // 专门配置各种路由器的地方
    routes
})
export default router