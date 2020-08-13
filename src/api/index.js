//这个文件是所有的接口请求函数的文件
//每一个请求接口数据功能都给它定义成一个函数，以后哪里需要去请求数据，就调用对应的这个接口请求函数就好了

//刚才暴露出去的instance
import Ajax from '@/ajax/Ajax'  

// reqCategoryList请求类名列表
// 分别暴露
export const reqCategoryList = () => {
  return Ajax({
    url:'/product/getBaseCategoryList',
    method:'get'
  })
}
// 不能直接在这里调用
// reqCategoryList()