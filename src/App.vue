<template>
    <div>
      <!-- 只要标签中间没有写代码就都用单标签 -->
      <Header/>
      <router-view></router-view>
      <!-- 判断页面下面是否要有footer -->
      <Footer v-if="!$route.meta.isHide"/>
      <!-- <Footer v-if="$route.path ==='/home' || $route.path === '/search'"/> -->
      <!-- v-if="$route.path ==='/home' || $route.path === '/search'" -->
  </div>
</template>

<script>

import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  name: 'App',
  
  components:{
    Header,
    Footer
  }

}
</script>

<style>
</style>
