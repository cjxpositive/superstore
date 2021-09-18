<template xmlns:slot="" >
  <div>
  <tab-bar>
    <tab-bar-item path="/home" >
    <template #item-icon><img  src="~assets/img/tabbar/home(1).png" ></template>
      <template #item-icon-active><img src="~assets/img/tabbar/home(2).png"></template>
      <template #item-text><div  >首页</div></template>
    </tab-bar-item>
    <tab-bar-item path="/classify" >
      <template #item-icon><img  src="~assets/img/tabbar/classify(1).png" ></template>
      <template #item-icon-active><img src="~assets/img/tabbar/classify(2).png"></template>
      <template #item-text><div  >分类</div></template>
    </tab-bar-item>
    <tab-bar-item path="/shopping" >
      <template #item-icon><img  src="~assets/img/tabbar/shopping(1).png" ></template>
      <template #item-icon-active><img src="~assets/img/tabbar/shopping(2).png"></template>
      <template #item-text><div >购物车</div></template>
    </tab-bar-item>
    <tab-bar-item path="/my" >
      <template #item-icon><img  src="~assets/img/tabbar/profile(1).png" ></template>
      <template #item-icon-active><img src="~assets/img/tabbar/profile(2).png"></template>
      <template #item-text><div >我的</div></template>
    </tab-bar-item>
  </tab-bar>
  </div>
</template>

<script>
import TabBar from "../../common/tabbar/TabBar";
import TabBarItem from "../../common/tabbar/TabBarItem";
export default {
  name: "MainTabBar",
  activeColor:'',
  components: {
    TabBar,
    TabBarItem
  }

}
</script>

<style scoped>

</style>
