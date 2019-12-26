<template>
  <div class="home">
    <div>
      <van-pull-refresh
        v-model="isLoading"
        @refresh="get_allPosts"
        :success-text="refresh_text"
        :success-duration="1000"
      >
        <div>
          <PostCard :posts="postList" />
        </div>
      </van-pull-refresh>
    </div>
    <div class="button">
      <van-button
        type="info"
        to="/NewPost"
        :round="true"
        icon="plus"
      />
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import PostCard from "../components/PostCard";
import { Tabbar, TabbarItem } from "vant";
import { Row, Col } from "vant";
import { Swipe, SwipeItem } from "vant";
import { Image, Toast } from "vant";
import { PullRefresh } from "vant";
import { Divider } from "vant";
import { Icon } from "vant";
import { Button } from 'vant';

Vue.use(Icon);
Vue.use(Button);
Vue.use(PullRefresh);
Vue.use(Divider);
Vue.use(Image);
Vue.use(Toast);
Vue.use(Row).use(Col);

Vue.use(Swipe).use(SwipeItem);

Vue.use(Tabbar).use(TabbarItem);

export default {
  name: "Home",
  components: {
    // HelloWorld,components: {
    PostCard: PostCard
  },
  data() {
    return {
      isLoading: false,
      refresh_text: "",
      postList: [
        {
          postId: 1,
          userId: "babadalal",
          details:
            "IT之家12月16日消息 在12月初的夏威夷骁龙技术峰会上，高通正式发布了新一代旗舰移动平台骁龙865。",
          title: "性能猛增！高通骁龙865原型机及基准跑分全公布",
          photo:
            "https://img.ithome.com/newsuploadfiles/2019/12/20191216_220341_424.jpg",
          icon: require("../assets/default.jpg"),
          postTime: "2019-12-12 16:30",
          totalNumber: "2"
        },
        {
          postId: 2,
          userId: "babadalal",
          details:
            "IT之家12月17日消息 今天下午，DxOMark网站正式公布了华为Mate30 Pro 5G版相机得分，其中拍照得分134分，视频拍摄得分102分，总分为123分，超过华为Mate30 Pro、小米CC9 Pro尊享版获得DxOMark手机榜单第一名。",
          title: "DxOMark公布华为Mate30 Pro 5G版相机得分，123分夺第一",
          photo:
            null,
          icon: require("../assets/default.jpg"),
          postTime: "2019-12-12 16:30",
          totalNumber: "1"
        },
        {
          postId: 3,
          userId: "babadalal",
          details:
            "IT之家12月17日消息 上周，腾讯视频、爱奇艺两大视频网站平台均在会员制基础上，推出了超前点播付费模式。会员用户可花费50元购买加速权益包，始终超前看6集《庆余年》。",
          title:
            "买会员还要再花钱，腾讯视频王娟回应《庆余年》争议：对会员的消费心理不够体贴",
          photo:
            "https://img.ithome.com/newsuploadfiles/2019/12/20191217_120735_266.png",
          icon: require("../assets/default.jpg"),
          postTime: "2019-12-12 16:30",
          totalNumber: "1"
        }
      ]
    };
  },
  mounted() {
    this.get_allPosts();
  },
  methods: {
    get_allPosts() {
      axios
        .get("http://localhost:8090/androidApp/Comment/FindAllForums")
        .then(response => {
          // eslint-disable-next-line no-console
          console.log(response);
          this.postList = response.data;
          // eslint-disable-next-line no-console
          setTimeout(() => {
            this.refresh_text = "刷新成功！";
            this.isLoading = false;
          }, 500);
        })
        .catch(error => {
          // eslint-disable-next-line no-console
          console.log(error);
          setTimeout(() => {
            Toast("网络开小差了，请稍后再试！");
            this.refresh_text = "刷新失败！";
            this.isLoading = false;
          }, 500);
        });
    },
    click() {
      Toast("submit");
    }
  }
};
</script>
<style scoped>
.top {
  position: fixed;
  width: 100%;
  top: 0px;
  height: 50px;
  z-index: 1;
  background-color: rgb(255, 255, 255);
  height: 50px;
  box-shadow: 1px 1px 3px #cecece;
  line-height: 68px;
}
  .button{
      text-align: center;
      position:fixed;
      z-index: 1;
      bottom:60px;
      right: 10px;
  }
</style>
