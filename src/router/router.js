
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'

export default [
    
        // 里面属于路由
        // 路由 路径和组件的配置过程
        {
            // 路径
            path:'/home',
            // 组件
            component:Home
        },
        {
            path:'/search/:keyword?',
            // ? 代表参数可传可不传
            component:Search,
            name:'search',
            // props:true,
            //布尔值写法： 代表只是把params参数通过属性传递给相应的组件
            // props:{name:'zly'}
            // 对象写法，只能传递静态的数据  几乎不用  因为需要额外传递静态数据才会用到

            props(route){ 
                //route 收集好参数的路由对象
                //把传递过来的params参数和query参数一起映射为组件的属性（）
                return {keyword:route.params.keyword,keyword2:route.query.keyword}
              }

        },
        {
            path:'/login',
            component:Login,
            meta:{
                // 证明要隐藏footer
                isHide:true
            },
            props:true
        },
        {
            path:'/register',
            component:Register,
            meta:{
                // 证明要隐藏footer
                isHide:true
            }

        },
        //重定向
        {
            path:'/',
            redirect:'/home'
        },
    
]