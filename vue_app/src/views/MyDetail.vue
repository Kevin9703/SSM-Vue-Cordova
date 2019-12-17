<template>
  <div>
    <div>
      <van-nav-bar
        title=""
        left-arrow
        left-text="个人信息"
        @click-left="onClickLeft"
      />
    </div>
    <div>
      <van-cell-group>
        <van-cell
          title="头像"
          center
          is-link
          to="IconRevise"
        >
          <van-image
            width="50"
            height="50"
            radius="5"
            :src="icon"
          />
        </van-cell>
        <van-cell
          title="用户名"
          :value="userId"
          is-link
        />
        <van-cell
          title="姓名"
          :value="userName"
          is-link
        />
        <van-cell
          title="性别"
          :value="sex"
          is-link
        />
        <van-cell
          title="电话"
          :value="phone"
          is-link
        />
        <van-cell
          title="QQ"
          :value="qq"
          is-link
        />
        <van-cell
          title="地址"
          :value="address"
          is-link
        />
        <van-cell
          title="密码修改"
          is-link
        />
      </van-cell-group>
    </div>
  </div>
</template>

<script>
    import Vue from 'vue';
    import axios from 'axios';
    import {NavBar} from 'vant';
    import { Cell, CellGroup } from 'vant';
    import { Stepper } from 'vant';
    import { Uploader } from 'vant';
    import { Image } from 'vant';

    Vue.use(Image);

    Vue.use(Uploader);

    Vue.use(Stepper);

    Vue.use(NavBar);
    Vue.use(Cell).use(CellGroup);

    export default {
        name: 'MyDetail',
        data() {
            return {
                fileList: [],
                icon: require('../assets/default.jpg'),
                userId:'null',
                userName:'null',
                phone:'null',
                qq:'null',
                password:'null',
                address:'null',
                sex:'null',
            }
        },
        mounted(){
            this.getInfo();
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