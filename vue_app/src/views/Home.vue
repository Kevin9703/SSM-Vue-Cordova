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
          <PostCard :posts="pList" />
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
import { Button } from "vant";

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
      pList: [],
      postList: []
    };
  },
  mounted() {
    this.get_allPosts();
    this.pList = this.postList.reverse();
  },
  methods: {
    get_allPosts() {
      axios
        .get("http://192.168.137.1:8090/androidApp/Comment/FindAllForums")
        .then(response => {
          // eslint-disable-next-line no-console
          console.log(response);
          this.postList = response.data;
          this.pList = this.postList.reverse();
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
.button {
  text-align: center;
  position: fixed;
  z-index: 1;
  bottom: 60px;
  right: 10px;
}
</style>
