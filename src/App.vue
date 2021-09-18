<template>
  <div id="app">
     <MainTabBar></MainTabBar>
    <router-view></router-view>
  </div>
</template>

<script>
import MainTabBar from "./components/content/MainTabBar/MainTabBar";
export default {
  name: 'App',
  components:{
    MainTabBar
  }

}
</script>

<style>
/*引入外部样式*/
@import "./assets/css/base.css";
</style>
