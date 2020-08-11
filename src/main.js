


import Vue from 'vue'

import App from './App.vue'

Vue.config.productionTip = false
// 定义组件三大步骤


new Vue({

    // el:'#App',
    render:h => h(App)
    // components:{
    //     App
    // },
    // template:<'App/'>,

}).$mount('#App')

