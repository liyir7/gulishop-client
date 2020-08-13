import {reqCategoryList} from '@/api'

const state = {
  categoryList:[]
}
const mutations = {
  //直接修改数据  （不允许出现if  for  异步操作）
  RECEIVECATEGORYLIST(state,categoryList){
    state.categoryList = categoryList
  }
}
const actions = {
  //异步请求获取数据  允许if  for  异步操作
  async getCategoryList({commit}){
    //
    // reqCategoryList().then(result => {
    //   commit('RECEIVECATEGORYLIST',result.data)
    // })

    const result = await reqCategoryList()
    if(result.code === 200){
      commit('RECEIVECATEGORYLIST',result.data)
    }
  }
  
}
const getters = {
  // categoryList1(state){
  //   return state.categoryList
  // }
}

export default {
  state,
  mutations,
  actions,
  getters
}
