<template>
  <div>
    <div class="top">
      <van-nav-bar
        title="商品详情"
        left-arrow
        left-text="返回"
        @click-left="onClickLeft"
      />
    </div>
    <div style="padding-top: 46px;padding-bottom: 50px;">
      <!-- 图片轮播 -->
      <div style="text-align:center;">
        <van-swipe indicator-color="white">
          <van-swipe-item>
            <van-image
              :width="screen_width"
              :height="screen_height"
              @click="imageView"
              fit="cover"
              :src="photo1"
            />
          </van-swipe-item>
          <van-swipe-item>
            <van-image
              :width="screen_width"
              :height="screen_height"
              @click="imageView"
              fit="cover"
              :src="photo2"
            />
          </van-swipe-item>
          <van-swipe-item>
            <van-image
              :width="screen_width"
              :height="screen_height"
              @click="imageView"
              fit="cover"
              :src="photo3"
            />
          </van-swipe-item>
        </van-swipe>
      </div>
      <!-- 商品描述区域 -->
      <div>
        <van-row
          type="flex"
          justify="center"
        >
          <van-col span="23">
            <span style="color:#ff5b0f">¥</span>
            <span class="price">{{ price }}</span>
          </van-col>
        </van-row>
        <van-row
          type="flex"
          justify="center"
          align="bottom"
        >
          <van-col span="18">
            <span class="name">{{ goodName }}</span>
          </van-col>
          <van-col span="5">
            <span>剩余 {{ number }} 件</span>
          </van-col>
        </van-row>
        <div class="fenge" />
        <div style="text-align:center;margin-top:10px;">
          商品描述
        </div>
        <van-row
          type="flex"
          justify="center"
        >
          <van-col span="23">
            <div>{{ describe }}</div>
          </van-col>
        </van-row>
      </div>
      <!-- 底部菜单 -->
      <div>
        <van-goods-action>
          <router-link to="/ShoppingCart">
            <van-goods-action-icon
              icon="cart-o"
              text="购物车"
              @click="onClickIcon"
            />
          </router-link>

          <van-goods-action-button
            type="warning"
            text="加入购物车"
            @click="addCart"
          />
          <van-goods-action-button
            type="danger"
            text="立即购买"
            @click="buy"
          />
        </van-goods-action>
      </div>
      <div>
        <van-action-sheet
          v-model="show"
          title="商品购买"
        >
          <van-row style="margin-top:5px">
            <van-col>
              <van-image
                width="100"
                height="80"
                @click="imageView"
                fit="contain"
                :src="photo1"
              />
            </van-col>
            <van-col>
              <van-row>
                <span style="color:#ff5b0f">¥</span>
                <span class="price">{{ price }}</span>
              </van-row>
              <van-row>
                <span style="color:grey;font-size:13px;">剩余 {{ number }} 件</span>
              </van-row>
            </van-col>
          </van-row>
          <van-cell-group>
            <van-cell title="选择数量">
              <van-stepper
                v-model="buyNumber"
                integer
                :max="number"
              />
            </van-cell>
          </van-cell-group>
          <div style="text-align:center;">
            <van-button
              type="warning"
              @click="subBuy"
              round
              style="width: 90%;margin-top:10px;margin-bottom:10px;"
            >
              立即购买
            </van-button>
          </div>
        </van-action-sheet>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { NavBar } from "vant";
import { Image } from "vant";
import { Swipe, SwipeItem } from "vant";
import { Row, Col } from "vant";
import { ImagePreview, Toast } from "vant";
import { GoodsAction, GoodsActionIcon, GoodsActionButton } from "vant";
import { Sku } from "vant";
import { ActionSheet } from "vant";
import { Cell, CellGroup } from "vant";
import { Stepper } from "vant";
import { Button } from "vant";

Vue.use(Button);
Vue.use(Cell).use(CellGroup);
Vue.use(ActionSheet);
Vue.use(Sku);
Vue.use(GoodsAction)
  .use(GoodsActionIcon)
  .use(GoodsActionButton);
Vue.use(ImagePreview).use(Toast);
Vue.use(Swipe).use(SwipeItem);
Vue.use(Image);
Vue.use(NavBar);
Vue.use(Row).use(Col);
Vue.use(Stepper);

export default {
  name: "GoodDetail",
  data() {
    return {
      goodId: 2,
      goodName: "好东西",
      number: 2,
      price: 9999,
      buyNumber: 0,
      describe: "这是一个好东西",
      imageList: [
        require("../assets/123.jpg"),
        require("../assets/234.jpg"),
        require("../assets/logo.png")
      ],
      screen_width: window.screen.width,
      screen_height: window.screen.height / 2,
      photo1: require("../assets/123.jpg"),
      photo2: require("../assets/234.jpg"),
      photo3: require("../assets/logo.png"),
      show: false
    };
  },
  mounted() {
    this.get_id();
    this.get_info();
  },
  methods: {
    get_id() {
      this.goodId = this.$route.params.goodId;
    },
    get_info() {
      this.axios
        .post("/Goods/FindGoodsById", {
          goodId: this.goodId
        })
        .then(response => {
          // eslint-disable-next-line no-console
          console.log(response);
          this.goodName = response.data.goodName;
          this.number = response.data.number;
          this.price = response.data.price;
          this.describe = response.data.describe;
          this.photo1 = response.data.photo1;
          this.photo2 = response.data.photo2;
          this.photo3 = response.data.photo3;
          this.imageList = [this.photo1, this.photo2, this.photo3];
        })
        .catch(error => {
          // eslint-disable-next-line no-console
          console.log(error);
        });
    },
    onClickLeft() {
      window.history.go(-1);
    },
    imageView() {
      ImagePreview(this.imageList);
    },
    onClickIcon() {
      Toast("点击图标");
    },
    buy() {
      this.show = true;
    },
    subBuy() {
      this.axios
        .post("/Goods/BuyGoods", [
          {
            goodId: this.goodId,
            number: this.buyNumber
          }
        ])
        .then(response => {
          if (response.data == "success") {
            Toast("购买成功");
            this.$router.push("/AllItem");
          }
        })
        .catch(error => {
          Toast("服务器开小差了，请稍后再试");
          // eslint-disable-next-line no-console
          console.log(error);
        });
    },
    addCart() {
      this.axios
        .post("/Goods/InsertShoppingCart", {
          goodId: this.goodId
        })
        .then(response => {
          if (response.data == "success") {
            Toast("添加成功");
          } else if (response.data == "fail") {
            Toast("数量超过商品总数上限");
          }
        })
        .catch(error => {
          Toast("服务器开小差了，请稍后再试");
          // eslint-disable-next-line no-console
          console.log(error);
        });
    }
  }
};
</script>

<style scoped>
.top {
  position: fixed;
  width: 100%;
  top: 0px;
  z-index: 1;
}
.price {
  color: #ff5b0f;
  font-size: 21px;
}
.name {
  color: black;
  font-size: 15px;
  font-weight: 500;
}
.fenge {
  width: 100%;
  height: 8px;
  background-color: #ebebeb;
  margin-top: 5px;
}
</style>