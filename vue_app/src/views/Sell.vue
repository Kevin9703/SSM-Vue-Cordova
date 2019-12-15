<template>
  <div class="register">
    <div class="top">
      <van-nav-bar
        title="商品出售"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
        right-text="发布"
        @click-right="onClickRight"
      />
    </div>
    <div>
      <van-field
        v-model="userId"
        required
        label="商品名称"
        placeholder="请输入商品名称"
        :error="userError"
        @blur="userNameCheck"
        @focus="userError=false"
        size="large"
        clearable
      />

      <van-field
        v-model="password"
        label="价格"
        placeholder="请输入价格"
        required
        :error="passwordError"
        @blur="passwordCheck"
        @focus="passwordError=false"
        size="large"
        clearable
      />
        
      <van-field
        v-model="phone"
        type="tel"
        label="电话"
        placeholder="请输入电话"
        required
        :error="phoneError"
        @blur="phoneCheck"
        @focus="phoneError=false"
        size="large"
        clearable
      />

      <van-field
        v-model="address"
        label="地址"
        placeholder="请输入地址"
        required
        :error="addressError"
        @blur="addressCheck"
        @focus="addressError=false"
        size="large"
        clearable
      />

      <van-field
        v-model="name"
        label="姓名"
        placeholder="你的真实姓名"
        size="large"
        clearable
      />
        
      <van-field
        v-model="sex"
        label="性别"
        placeholder="你的性别"
        size="large"
        clearable
      />

      <van-field
        v-model="qq"
        label="QQ"
        type="number"
        placeholder="请输入QQ"
        size="large"
        clearable
      />
    </div>
    <div style="text-align:center">
      <Button
        type="primary"
        size="large"
        @click="submitInfo"
        style="width: 90%;margin-top:30px;"
        :disabled="buttonDisabled"
      >
        提交
      </Button>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import axios from 'axios'
import { Field,NavBar,Toast,Dialog,Icon } from 'vant';
import { Button } from 'view-design';
import { Loading } from 'vant';

Vue.use(Loading);
Vue.use(Field,Toast);
Vue.use(Dialog);
Vue.use(NavBar);
Vue.use(Icon);
Vue.component('Button', Button);

export default {
    name: 'Register',
    data() {
        return {
            buttonDisabled: true,
            userError: false,
            passwordError: false,
            phoneError: false,
            addressError: false,
            password:'',
            userId:'',
            name:'',
            address:'',
            phone:'',
            qq:'',
            sex:'',
        }
    },
    updated() {
        this.check()  // 输入内容完整判断
    },
    methods: {
        onClickLeft() {
            this.$router.go(-1);
        },
        onClickRight(){
          Toast('发布');
        },
        check(){  // 有空的话提交按钮禁用
            if(this.username==''||this.password==''||this.phone==''||this.address==''){
                this.buttonDisabled=true;
            }else{
                this.buttonDisabled=false;
            }
        },
        submitInfo(){
            //用post向后台提交注册信息  ======未完成：注册输入框判断======
            axios.post('http://localhost:8090/androidApp/User/Register',{
              userId: this.userId,
              password: this.password,
              userName: this.name,
              address: this.address,
              phone: this.phone,
              qq: this.qq,
              sex: this.sex,
            })
            .then(response=>{
              // eslint-disable-next-line no-console
              console.log('response :', response);
              if(response.data == 'success'){
                Toast.success('注册成功！');
                // eslint-disable-next-line no-console
                window.history.go(-1);
              }
              else if(response.data == 'fail'){
                Dialog.alert({
                title: '提示',
                message: '用户名已存在，请重新输入！'
                }).then(() => {
                  // on close
                });
              }
              else{
                Dialog.alert({
                title: '提示',
                message: '数据请求失败，请重试！'
                }).then(() => {
                  // on close
                });
              }
            })
            .catch(error=>{
              // eslint-disable-next-line no-console
              console.log('error :', error);
              Dialog.alert({
                  title: '提示',
                  message: '数据请求失败，请重试！'
                  }).then(() => {
                    // on close
                  });
            })
        },
        userNameCheck(){   
            if(this.username==''){
                this.userError=true
            }else{
                this.userError=false
            }
        },
        passwordCheck(){   
            if(this.password==''){
                this.passwordError=true
            }else{
                this.passwordError=false
            }
        },
        phoneCheck(){   
            if(this.phone==''){
                this.phoneError=true
            }else{
                this.phoneError=false
            }
        },
        addressCheck(){   
            if(this.address==''){
                this.addressError=true
            }else{
                this.addressError=false
            }
        },
    },
}
</script>

<style coped>
  .top{
    position:sticky;
    top:0px;
    z-index: 1;
  }
</style>