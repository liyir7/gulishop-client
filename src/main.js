

// 引入vue
import Vue from 'vue'
// 引入App
import App from './App.vue'

import router from '@/router'

import TypeNav from '@/components/TypeNav'

import store from '@/store'

// 为了测试用的
import '@/api'



// 全局注册TypeNav  因为他是一个公用组件
Vue.component('TypeNav',TypeNav)

Vue.config.productionTip = false
// 定义组件三大步骤
// 定义     注册    使用

//  1、注册组件App   2、使用组件   3、渲染组件
new Vue({
    // el:'#App',
    router,  //注册给vue添加路由功能并且让每个组件内部都有两个对象可以拿到 
    render:h => h(App),
    store
    // components:{
    //     App
    // },
    // template:<'App/'>,
}).$mount('#app')


