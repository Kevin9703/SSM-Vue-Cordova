<template>
  <div>
    <div class="top">
      <van-nav-bar
        title="我买到的商品"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
      />
    </div>
    <div style="padding-top:46px">
      <van-pull-refresh
        v-model="isLoading"
        @refresh="get_allGoods"
        :success-text="refresh_text"
        :success-duration="1000"
      >
        <div>
          <!-- 所有商品列表 -->
          <BuyCard :goods="goodsList" />
        </div>
      </van-pull-refresh>
      <div class="button">
        <!-- 出售按钮 -->
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import BuyCard from "../components/BuyCard";
import "@vant/touch-emulator";

import { Search, Toast } from "vant";
import { Button } from "vant";
import { PullRefresh } from "vant";
import { Row, Col } from "vant";
import { NavBar } from "vant";

Vue.use(NavBar);

Vue.use(Row).use(Col);
Vue.use(PullRefresh);
Vue.use(Button);
Vue.use(Search);

export default {
  name: "MyBuy",
  components: {
    BuyCard: BuyCard
  },
  data() {
    return {
      refresh_text: "",
      search: false,
      value: "",
      count: 0,
      isLoading: false,
      goodsList: [
        {
          goodId: 1,
          userId: "abbadalal",
          goodName: "test",
          number: 1,
          price: 999,
          describe: "null",
          photo1: require("../assets/123.jpg")
        },
        {
          goodId: 2,
          userId: "abbadalal",
          goodName: "test2",
          number: 1,
          price: 999,
          describe: "null",
          photo1: require("../assets/123.jpg")
        },
        {
          goodId: 3,
          userId: "abbadalal",
          goodName: "test3",
          number: 1,
          price: 999,
          describe: "null",
          photo1: require("../assets/123.jpg")
        },
        {
          goodId: 4,
          userId: "abbadalal",
          goodName: "test4",
          number: 1,
          price: 999,
          describe: "null",
          photo1: require("../assets/123.jpg")
        },
        {
          goodId: 5,
          userId: "abbadalal",
          goodName: "test5",
          number: 1,
          price: 999,
          describe: "null",
          photo1: require("../assets/123.jpg")
        }
      ]
    };
  },
  mounted() {
    this.get_allGoods();
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    get_allGoods() {
      this.axios
        .get("/Goods/FindMyPurchasedGoods")
        .then(response => {
          // eslint-disable-next-line no-console
          console.log(response);
          this.goodsList = response.data;
          // eslint-disable-next-line no-console
          console.log("goodsList", this.goodsList);
          setTimeout(() => {
            this.refresh_text = "刷新成功！";
            this.value = "";
            this.isLoading = false;
            this.search = false;
          }, 500);
        })
        .catch(error => {
          // eslint-disable-next-line no-console
          console.log(error);
          setTimeout(() => {
            Toast("网络开小差了，请稍后再试！");
            this.refresh_text = "刷新失败！";
            this.isLoading = false;
            this.search = false;
          }, 500);
        });
    },
    onRefresh() {
      setTimeout(() => {
        this.$toast("刷新成功");
        this.isLoading = false;
        this.search = false;
      }, 500);
    }
  }
};
</script>


<style scoped>
.top {
  top: 0px;
  z-index: 1;
  position: fixed;
  width: 100%;
}
.button {
  text-align: center;
  position: fixed;
  z-index: 1;
  bottom: 60px;
  right: 10px;
}
</style>