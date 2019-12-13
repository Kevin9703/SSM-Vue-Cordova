<template>
  <div>
    <van-uploader :after-read="afterRead" />
  </div>
</template>

<script>
import Vue from 'vue';
import { Uploader } from 'vant';

Vue.use(Uploader);
  export default {
    name: '',
    data() {
      return {
        
      }
    },
    methods: {
      afterRead(file) {
      // ??????file.content?base64??????
      // eslint-disable-next-line no-console
      console.log(file.content);
      }
    },
  }
</script>

<style>
  
</style>