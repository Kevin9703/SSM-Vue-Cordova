<template>
  <div class="register">
    <div class="top">
      <van-nav-bar
        title="商品编辑"
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
          @focus="goodNameError=false"
          clearable
        />

        <van-field
          v-model="price"
          label="价格"
          placeholder="请输入价格"
          required
          :error="priceError"
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

    <div style="text-align:center">
      <van-button
        type="primary"
        @click="submitInfo"
        style="width: 90%;margin-top:30px;"
        size="large"
      >
        提交
      </van-button>
    </div>
    <div style="text-align:center">
      <van-button
        type="danger"
        @click="deleteGood"
        style="width: 90%;margin-top:30px;"
        size="large"
      >
        删除此商品
      </van-button>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { NavBar, Toast, Dialog, Icon } from "vant";
import { Field } from "vant";
import { Loading, Button } from "vant";
import { Stepper } from "vant";
import { Cell, CellGroup } from "vant";
import { Uploader } from "vant";
import { Notify } from "vant";

Vue.use(Notify);

Vue.use(Uploader);
Vue.use(Cell).use(CellGroup);
Vue.use(Stepper);
Vue.use(Loading);
Vue.use(Field);
Vue.use(Toast);
Vue.use(Dialog);
Vue.use(NavBar);
Vue.use(Icon);
Vue.use(Button);

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
      photo1: "",
      photo2: "",
      photo3: "",
      good_id: ""
    };
  },
  mounted() {
    this.get_Goods();
    this.get_id();
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {
      Toast("发布");
    },
    deleteGood() {
      Dialog.confirm({
        title: "提示",
        message: "确认删除此商品？"
      })
        .then(() => {
          // on confirm
          this.axios.post("/Goods/DeleteGoods", {
            goodId: this.$route.params.goodId
          });
          Notify({ type: "danger", message: "删除成功" });
          window.history.go(-1);
        })
        .catch(() => {
          // on cancel
          return;
        });
    },
    submitInfo() {
      //用post向后台提交商品信息
      this.axios
        .post("/Goods/UpdateGoods", {
          goodId: this.good_id,
          goodName: this.goodName,
          price: this.price,
          number: this.number,
          describe: this.describe
        })
        .then(response => {
          // eslint-disable-next-line no-console
          console.log("response :", response);
          Toast.success("商品修改成功！");
          // eslint-disable-next-line no-console
          window.history.go(-1);
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
    get_Goods() {
      this.axios
        .post("/Goods/FindGoodsById", {
          goodId: this.$route.params.goodId
        })
        .then(response => {
          // eslint-disable-next-line no-console
          console.log(response);
          this.goodName = response.data.goodName;
          this.number = response.data.number;
          this.price = response.data.price;
          this.describe = response.data.describe;
        })
        .catch(error => {
          // eslint-disable-next-line no-console
          console.log(error);
        });
    },
    get_id() {
      this.good_id = this.$route.params.goodId;
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