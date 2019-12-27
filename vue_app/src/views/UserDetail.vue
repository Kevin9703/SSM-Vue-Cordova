<template>
  <div>
    <div style="margin-top:20px;">
      <van-row
        @click="showDetail"
        style="margin-left:20px;"
      >
        <van-col span="6">
          <van-image
            width="70"
            height="70"
            :src="icon"
            radius="10"
          />
        </van-col>
        <van-col span="15">
          <span class="name">{{ userName }}</span>
          <br>
          <span>用户名 : {{ userId }}</span>
        </van-col>
        <van-col span="1">
          <br>
          <van-icon
            name="arrow"
            size="20px"
          />
        </van-col>
      </van-row>
      <div style="margin-top:20px;">
        <van-cell-group>
          <van-cell
            title="我买到的东西"
            is-link
            to="/MyBuy"
            icon="shopping-cart-o"
          />
          <van-cell
            title="我出售的东西"
            is-link
            to="/MySell"
            icon="balance-o"
          />
        </van-cell-group>
      </div>
    </div>
    <div style="text-align:center">
      <Button
        type="primary"
        size="large"
        @click="click"
        style="width: 90%;margin-top:30px;"
      >
        退出登录
      </Button>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Button } from "view-design";
import { Dialog, Toast } from "vant";
import { Loading } from "vant";
import { Row, Col } from "vant";
import { Cell, CellGroup } from "vant";
import { Icon } from "vant";
import { Image } from "vant";
import axios from "axios";

Vue.use(Image);

Vue.use(Icon);

Vue.use(Cell).use(CellGroup);

Vue.use(Row).use(Col);

Vue.component("Button", Button);
Vue.use(Toast);
Vue.use(Loading);

export default {
  name: "UserDetail",
  data() {
    return {
      icon: require("../assets/default.jpg"),
      userId: "null",
      userName: "null"
    };
  },
  mounted() {
    this.get_info();
  },
  methods: {
    click() {
      Toast.setDefaultOptions({ duration: 1000 });
      Dialog.confirm({
        title: "提示",
        message: "是否要注销当前登录账户？"
      })
        .then(() => {
          // on confirm
          Toast("注销成功");
          localStorage.removeItem("Flag");
          this.$router.push("/login");
        })
        .catch(() => {
          // on cancel
          return;
        });
    },
    showDetail() {
      this.$router.push({ path: "MyDetail" });
    },
    get_info() {
      axios
        .get("http://localhost:8090/androidApp/User/GetUserInfo")
        .then(response => {
          // eslint-disable-next-line no-console
          console.log(response);
          this.userName = response.data.userName;
          this.userId = response.data.userId;
          this.icon = response.data.icon;
        });
    }
  }
};
</script>

<style>
.name {
  font-family: "Microsoft YaHei", 微软雅黑, "MicrosoftJhengHei", 华文细黑,
    STHeiti, MingLiu;
  font-weight: 500;
  font-size: 20px;
  color: black;
}
</style>