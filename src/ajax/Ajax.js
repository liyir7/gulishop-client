
//这个文件就是我们发送的ajax请求模块
//目的是为了对ajax进行二次封装
    // 配置基础路径和超时限制

	// 添加进度条信息  nprogress

	// 返回的响应不再需要从data属性当中拿数据，而是响应就是我们要的数据

    // 统一处理请求错误, 具体请求也可以选择处理或不处理
    //一般我们在二次封装axios的时候不会直接在axios身上去动土
    //而是通过create创建一个新的axios实例进行操作
// axios.create()

// 配置基础路径和超时限制
import axios from 'axios'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

// 创建一个新的axios实例
const instance = axios.create( {
    //配置请求基础路径
    baseURL: '/api',
    //配置请求超时时间
    timeout: 77000,
  });


   //请求和相应栏拦截
  // 添加进度条信息  nprogress
  // https://github.com/axios/axios
  //请求拦截器中添加打开进度条的功能

  // Add a request interceptor
// axios.interceptors.request.use(function (config) {
//     // Do something before request is sent
//     return config;
//   }, 
// //   不处理失败回调
// //   function (error) {
// //     // Do something with request error
// //     return Promise.reject(error);
// //   }
//   );
// 简写
instance.interceptors.request.use(
    config => {
        // 处理config(请求报文)
        // 添加额外的功能(使用进度条)
        NProgress.start();//https://github.com/rstacruz/nprogress
        return config
        // 返回config 请求继续 发送的报文信息就是最新的config对象
    }
);

//响应拦截器
// Add a response interceptor
instance.interceptors.response.use(
    // 成功
    response => {
        // 默认返回去的是response 也就是我们的响应报文信息
        // 如果要拿到数据信息 response.data去获取
        // 现在我们是在返回响应之前把响应直接改成了数据 以后我们那数据就不需要再去data了
        NProgress.done();
        return response.data
    },
    // 失败
    error => {
        NProgress.done();
        // 
        alert('发送请求失败' + error.message || '未知错误')
        
        // 如果需要进一步去处理错误 则返回一个失败的promise
        // new Error('请求失败')自定义错误信息
        // return Promise.reject(new Error('请求失败'))
        // 如果不需要再去处理这个错误 那么就返回一个pending状态的promise(终止promise链)
        return new Promise(() => {})
    }
);

// 暴露出去我们的axios工具 后面发送请求使用
export default instance
