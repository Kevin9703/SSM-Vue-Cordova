<template>
  <div class="register">
    <div class="top">
      <van-nav-bar
        title="商品出售"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
      />
    </div>

    <div>
      <van-cell-group>
        <van-field
          v-model="goodName"
          required
          label="商品名称"
          placeholder="请输入商品名称"
          :error="goodNameError"
          @blur="goodNameCheck"
          @focus="goodNameError=false"
          clearable
        />

        <van-field
          v-model="price"
          label="价格"
          placeholder="请输入价格"
          required
          :error="priceError"
          @blur="priceCheck"
          @focus="priceError=false"
          clearable
        />
        <van-cell title="数量">
          <van-stepper
            v-model="number"
            integer
          />
        </van-cell>

        <van-field
          v-model="describe"
          rows="2"
          autosize
          label="商品描述"
          type="textarea"
          maxlength="100"
          placeholder="不超过100字"
          show-word-limit
        />
      </van-cell-group>
    </div>
    <div style="margin-top:20px;">
      <van-uploader
        :after-read="afterRead1"
        v-model="imageList1"
        multiple
        :max-count="1"
      />
      <van-uploader
        :after-read="afterRead2"
        v-model="imageList2"
        multiple
        :max-count="1"
      />
      <van-uploader
        :after-read="afterRead3"
        v-model="imageList3"
        multiple
        :max-count="1"
      />
    </div>

    <div style="text-align:center">
      <Button
        type="primary"
        @click="submitInfo"
        style="width: 90%;margin-top:30px;"
        :disabled="buttonDisabled"
        size="large"
      >
        提交
      </Button>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import { NavBar, Toast, Dialog, Icon } from "vant";
import { Field } from "vant";
import { Button } from "view-design";
import { Loading } from "vant";
import { Stepper } from "vant";
import { Cell, CellGroup } from "vant";
import { Uploader } from "vant";

Vue.use(Uploader);
Vue.use(Cell).use(CellGroup);
Vue.use(Stepper);
Vue.use(Loading);
Vue.use(Field);
Vue.use(Toast);
Vue.use(Dialog);
Vue.use(NavBar);
Vue.use(Icon);
Vue.component("Button", Button);

export default {
  name: "Register",
  data() {
    return {
      buttonDisabled: true,
      goodNameError: false,
      priceError: false,
      goodName: "",
      number: "1",
      price: "",
      describe: "",
      imageList1: [],
      imageList2: [],
      imageList3: [],
      photo1: "",
      photo2: "",
      photo3: "",
      temp: ""
    };
  },
  updated() {
    this.check(); // 输入内容完整判断
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {
      Toast("发布");
    },
    check() {
      // 有空的话提交按钮禁用
      if (this.goodName == "" || this.price == "" || this.imageList == "") {
        this.buttonDisabled = true;
      } else {
        this.buttonDisabled = false;
      }
    },
    submitInfo() {
      //用post向后台提交商品信息
      axios
        .post("http://192.168.137.1:8090/androidApp/Goods/AddGoods", {
          goodName: this.goodName,
          price: this.price,
          number: this.number,
          describe: this.describe,
          photo1: this.photo1,
          photo2: this.photo2,
          photo3: this.photo3
        })
        .then(response => {
          // eslint-disable-next-line no-console
          console.log("response :", response);
          if (response.data == "success") {
            Toast.success("商品发布成功！");
            // eslint-disable-next-line no-console
            window.history.go(-1);
          } else if (response.data == "fail") {
            Dialog.alert({
              title: "提示",
              message: "商品已存在，请重新输入！"
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
    goodNameCheck() {
      if (this.goodName == "") {
        this.goodNameError = true;
      } else {
        this.goodNameError = false;
      }
    },
    priceCheck() {
      if (this.price == "") {
        this.priceError = true;
      } else {
        this.priceError = false;
      }
    },
    afterRead1(file) {
      // 此时可以自行将文件上传至服务器
      // eslint-disable-next-line no-console
      console.log(file.content);
      this.photo1 = file.content;
    },
    afterRead2(file) {
      // 此时可以自行将文件上传至服务器
      // eslint-disable-next-line no-console
      console.log(file.content);
      this.photo2 = file.content;
    },
    afterRead3(file) {
      // 此时可以自行将文件上传至服务器
      // eslint-disable-next-line no-console
      console.log(file.content);
      this.photo3 = file.content;
    }
  }
};
</script>

<style coped>
.top {
  position: sticky;
  top: 0px;
  z-index: 1;
}
</style>