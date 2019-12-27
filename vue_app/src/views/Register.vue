<template>
  <div class="register">
    <div>
      <van-nav-bar
        title="用户注册"
        left-arrow
        left-text="返回"
        @click-left="onClickLeft"
      />
    </div>
    <div>
      <van-cell-group>
        <van-field
          v-model="userId"
          required
          label="用户名"
          placeholder="请输入用户名"
          :error="userError"
          @blur="userNameCheck"
          @focus="userError=false"
          size="large"
          clearable
        />

        <van-field
          v-model="password"
          type="password"
          label="密码"
          placeholder="请输入密码"
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
      </van-cell-group>
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
import Vue from "vue";
import axios from "axios";
import { Field, NavBar, Toast, Dialog, Icon } from "vant";
import { Button } from "view-design";
import { Loading } from "vant";
import { Cell, CellGroup } from "vant";

Vue.use(Loading);
Vue.use(Field, Toast);
Vue.use(Dialog);
Vue.use(NavBar);
Vue.use(Icon);
Vue.component("Button", Button);
Vue.use(Cell).use(CellGroup);

export default {
  name: "Register",
  data() {
    return {
      buttonDisabled: true,
      userError: false,
      passwordError: false,
      phoneError: false,
      addressError: false,
      password: "",
      userId: "",
      name: "",
      address: "",
      phone: "",
      qq: "",
      sex: ""
    };
  },
  updated() {
    this.check(); // 输入内容完整判断
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    check() {
      // 有空的话提交按钮禁用
      if (
        this.username == "" ||
        this.password == "" ||
        this.phone == "" ||
        this.address == ""
      ) {
        this.buttonDisabled = true;
      } else {
        this.buttonDisabled = false;
      }
    },
    submitInfo() {
      //用post向后台提交注册信息  ======未完成：注册输入框判断======
      axios
        .post("http://localhost:8090/androidApp/User/Register", {
          userId: this.userId,
          password: this.password,
          userName: this.name,
          address: this.address,
          phone: this.phone,
          qq: this.qq,
          sex: this.sex,
          icon:
            "data:image/jpeg;base64,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"
        })
        .then(response => {
          // eslint-disable-next-line no-console
          console.log("response :", response);
          if (response.data == "success") {
            Toast.success("注册成功！");
            // eslint-disable-next-line no-console
            window.history.go(-1);
          } else if (response.data == "fail") {
            Dialog.alert({
              title: "提示",
              message: "用户名已存在，请重新输入！"
            }).then(() => {
              // on close
            });
          } else {
            Dialog.alert({
              title: "提示",
              message: "数据请求失败，请重试！"
            }).then(() => {
              // on close
            });
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
    },
    userNameCheck() {
      if (this.username == "") {
        this.userError = true;
      } else {
        this.userError = false;
      }
    },
    passwordCheck() {
      if (this.password == "") {
        this.passwordError = true;
      } else {
        this.passwordError = false;
      }
    },
    phoneCheck() {
      if (this.phone == "") {
        this.phoneError = true;
      } else {
        this.phoneError = false;
      }
    },
    addressCheck() {
      if (this.address == "") {
        this.addressError = true;
      } else {
        this.addressError = false;
      }
    }
  }
};
</script>

<style coped>
</style>