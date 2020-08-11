
// 引入
import Vue from 'vue'
import VueRouter from 'Vue-Router'



//声明使用插件 vue的插件都要声明使用 第三方免了
Vue.use(VueRouter)

//暴露
const router = new VueRouter({
    // 专门配置各种路由器的地方
    router:[
        // 里面属于路由
        // 路由 路径和组件的配置过程
        {
            path:'/home',
            component:Home
        },
        {},
        {},
        {},
    ]
})
export default router