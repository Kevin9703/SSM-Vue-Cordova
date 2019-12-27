<template>
  <div style="text-align:center;">
    <br>
    <h1>用户登录</h1>
    <div>
      <Input
        prefix="ios-contact-outline"
        placeholder="用户名"
        size="large"
        clearable
        style="width: 90%;margin-top:30px;"
        v-model="userId"
      />
      <Input
        prefix="ios-lock-outline"
        type="password"
        size="large"
        password
        placeholder="密码"
        style="width: 90%;margin-top:30px;"
        v-model="userPassword"
      />
    </div>
    <div>
      <Button
        type="primary"
        size="large"
        @click="login_check"
        style="width: 90%;margin-top:30px;"
      >
        登录
      </Button>
      <br>
      <div style="margin-top:30px;">
        <router-link to="/register">
          注册账户
        </router-link>
        <br>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { Input, Button } from "view-design";
import Vue from "vue";
import { Toast } from "vant";
import { Loading } from "vant";
import { Dialog } from "vant";

Vue.use(Loading);
Vue.use(Toast);
Vue.component("Input", Input);
Vue.component("Button", Button);

export default {
  name: "Login",
  data() {
    return {
      userId: "",
      userPassword: "" // 双向绑定数据，输入后post到后台进行登陆验证(axios)
    };
  },
  methods: {
    login_test() {
      if (this.userId == "1" && this.userPassword == "1") {
        this.$store.dispatch("userLogin", true);
        //Vuex在用户刷新的时候userLogin会回到默认值false，所以我们需要用到HTML5储存
        //我们设置一个名为Flag，值为isLogin的字段，作用是如果Flag有值且为isLogin的时候，证明用户已经登录了。
        localStorage.setItem("Flag", "isLogin");
        //登录成功后跳转到指定页面
        Toast("欢迎！"); // 跳转页面到主页
        this.$router.push("/");
      }
    },
    login_check() {
      if (this.userId == "" || this.userPassword == "") {
        Dialog.alert({
          title: "提示",
          message: "用户名或密码不能为空！"
        }).then(() => {
          // on close
        });
      } else {
        axios
          .post("http://localhost:8090/androidApp/User/Login", {
            userId: this.userId,
            password: this.userPassword
          })
          .then(response => {
            // eslint-disable-next-line no-console
            console.log("response :", response);
            if (response.data == "fail") {
              Dialog.alert({
                title: "提示",
                message: "用户名或密码错误！"
              }).then(() => {
                // on close
              });
            } else if (response.data == "success") {
              this.$store.dispatch("userLogin", true);
              //Vuex在用户刷新的时候userLogin会回到默认值false，所以我们需要用到HTML5储存
              //我们设置一个名为Flag，值为isLogin的字段，作用是如果Flag有值且为isLogin的时候，证明用户已经登录了。
              localStorage.setItem("Flag", "isLogin");
              //登录成功后跳转到指定页面
              Toast("欢迎！"); // 跳转页面到主页
              this.$router.push("/");
              // 1.将登陆成功之后的token保存到客户端的sessionStorage中
              // 2.通过编程式导航跳转到后台主页this.$router.push("/");
            }
          })
          .catch(error => {
            // eslint-disable-next-line no-console
            console.log("error :", error);
            Dialog.alert({
              title: "提示",
              message: "数据请求失败，请重试！"
            }).then(() => {
              // on close
            });
          });
      }
    }
  }
};
</script>

<style>
.background {
  background: rgb(247, 247, 247);
}
</style>