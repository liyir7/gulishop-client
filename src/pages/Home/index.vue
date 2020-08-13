<template>
  <div>
    <TypeNav />
    <ListContainer />
    <Recommend />
    <Rank />
    <Like />
    <Floor />
    <Brand />
  </div>
</template>

<script>
import ListContainer from './ListContainer'
import Recommend from './Recommend'
import Brand from './Brand'
import Floor from './Floor'
import Like from './Like'
import Rank from './Rank'
export default {
  name: 'Home',
  components:{
    ListContainer,
    Recommend,
    Rank,
    Like,
    Floor,
    Brand



  }
}
</script>

<style lang="less" scoped>

</style>
