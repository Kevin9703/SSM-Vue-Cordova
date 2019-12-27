<template>
  <div>
    <div class="top">
      <van-nav-bar
        title="购物车"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
      />
    </div>
    <div style="padding-top:50px;">
      <van-checkbox-group
        class="card-goods"
        v-model="checkedGoods"
      >
        <van-checkbox
          class="card-goods__item"
          v-for="item in goods"
          :key="item.goodId"
          :name="item.goodId"
        >
          <van-card
            :title="item.goodName"
            :desc="item.describe"
            :num="item.number"
            :price="formatPrice(item.price)"
            :thumb="item.photo1"
          />
        </van-checkbox>
      </van-checkbox-group>

      <van-submit-bar
        :price="totalPrice"
        :disabled="!checkedGoods.length"
        :button-text="submitBarText"
        @submit="onSubmit"
      />
    </div>
  </div>
</template>



<script>
import Vue from "vue";
import { Checkbox, CheckboxGroup, Card, SubmitBar, Toast } from "vant";
import axios from "axios";
import { NavBar } from "vant";

Vue.use(NavBar);

export default {
  components: {
    [Card.name]: Card,
    [Checkbox.name]: Checkbox,
    [SubmitBar.name]: SubmitBar,
    [CheckboxGroup.name]: CheckboxGroup
  },

  data() {
    return {
      checkedGoods: [],
      buy: [],
      goods: [
        {
          goodId: 1,
          goodName: "进口香蕉",
          describe: "约250g，2根",
          price: 200,
          number: 1,
          photo1:
            "https://img.yzcdn.cn/public_files/2017/10/24/2f9a36046449dafb8608e99990b3c205.jpeg"
        },
        {
          goodId: 2,
          goodName: "陕西蜜梨",
          describe: "约600g",
          price: 690,
          number: 2,
          photo1:
            "https://img.yzcdn.cn/public_files/2017/10/24/f6aabd6ac5521195e01e8e89ee9fc63f.jpeg"
        },
        {
          goodId: 3,
          goodName: "美国伽力果",
          describe: "约680g/3个",
          price: 2680,
          number: 1,
          photo1:
            "https://img.yzcdn.cn/public_files/2017/10/24/320454216bbe9e25c7651e1fa51b31fd.jpeg"
        }
      ]
    };
  },

  computed: {
    submitBarText() {
      const count = this.checkedGoods.length;

      return "结算" + (count ? `(${count})` : "");
    },

    totalPrice() {
      return this.goods.reduce(
        (total, item) =>
          total +
          (this.checkedGoods.indexOf(item.goodId) !== -1 ? item.price : 0) *
            item.number,
        0
      );
    }
  },
  mounted() {
    this.get_info();
  },

  methods: {
    formatPrice(price) {
      return (price).toFixed(2);
    },
    onClickLeft() {
      this.$router.go(-1);
    },
    onSubmit() {
      this.buy = this.goods.map(item => {
        return {
          goodId: item.goodId,
          number:
            this.checkedGoods.indexOf(item.goodId) !== -1 ? item.number : 0
        };
      });
      // eslint-disable-next-line no-console
      console.log(this.buy);
      axios
        .post("http://192.168.137.1:8090/androidApp/Goods/BuyGoods", this.buy)
        .then(response => {
          if (response.data == "success") {
            Toast("购买成功！");
            this.$router.go(-1);
          }
        })
        .catch(error => {
          Toast("服务器开小差了，请稍后再试");
          // eslint-disable-next-line no-console
          console.log(error);
        });
    },
    get_info() {
      axios
        .get("http://192.168.137.1:8090/androidApp/Goods/FindShoppingCart")
        .then(response => {
          this.goods = response.data;
        })
        .catch(error => {
          // eslint-disable-next-line no-console
          console.log(error);
        });
    }
  }
};
</script>



<style lang="less">
.card-goods {
  padding: 10px 0;
  background-color: #fff;

  &__item {
    position: relative;
    background-color: #fafafa;

    .van-checkbox__label {
      width: 100%;
      height: auto; // temp
      padding: 0 10px 0 15px;
      box-sizing: border-box;
    }

    .van-checkbox__icon {
      top: 50%;
      left: 10px;
      z-index: 1;
      position: absolute;
      margin-top: -10px;
    }

    .van-card__price {
      color: #f44;
    }
  }
}
.top {
  top: 0px;
  z-index: 1;
  position: fixed;
  width: 100%;
}
</style>