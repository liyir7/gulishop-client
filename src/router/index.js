
// 引入
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from '@/router/router'



//声明使用插件 vue的插件都要声明使用 第三方免了
Vue.use(VueRouter)


const router = new VueRouter({
    // 专门配置各种路由器的地方
    routes
})
export default router