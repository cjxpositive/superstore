<template>
  <div id="home">
    <nav-bar>
      <template #center><h3>购物街</h3></template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/NavBar/NavBar.vue";
export default {
  name: "home",
  components:{
    NavBar
  }
}
</script>

<style scoped>

</style>
