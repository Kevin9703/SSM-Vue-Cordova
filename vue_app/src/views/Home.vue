<template>
  <div
    class="home"
    style="text-align: center;"
  >
    <h1>主页</h1>
    <div style="margin-top:20px;">
      <img
        alt="Vue logo"
        src="../assets/logo.png"
      >
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    </div> 
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Vue from 'vue';
import { Tabbar, TabbarItem } from 'vant';

Vue.use(Tabbar).use(TabbarItem);

export default {
  name: 'Home',
  components: {
    // HelloWorld,
  },
  data(){
    return{
    }
  }
}
</script>
<style scoped>
.background{
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgb(247,247,247);
}
</style>
