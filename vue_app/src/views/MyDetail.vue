<template>
  <div>
    <van-nav-bar
      title=""
      left-arrow
      left-text="个人信息"
      @click-left="onClickLeft"
    />
  </div>
</template>

<script>
    import Vue from 'vue';
    import axios from 'axios';
    import {NavBar} from 'vant';

    Vue.use(NavBar);

    export default {
        name: 'MyDetail',
        data() {
            return {
                icon:'',
                userId:'',
                userName:'',
                phone:'',
                qq:'',
                password:'',
            }
        },
        methods: {
            getInfo(){
                axios.get('http://localhost:8090/androidApp/User/GetUserInfo')
                .then(response=>{
                    // eslint-disable-next-line no-console
                    console.log(response);
                    this.icon=response.data.icon;
                    this.userId=response.data.userId;
                    this.userName=response.data.userName;
                    this.phone=response.data.phone;
                    this.qq=response.data.qq;
                })
            },
            onClickLeft(){
                window.history.go(-1);
            },
        },
    }
</script>

<style lang="" scoped>
    
</style>