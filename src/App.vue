<template>
  <div class="app">
    <navbar></navbar>
<router-view></router-view>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
export default {
components:{
  Navbar
}
}
</script>

<style scoped>
*{
  margin: 0;
  padding-bottom: 0;
  box-sizing: border-box;
}
.app{
  padding: 20px;
}
</style>
