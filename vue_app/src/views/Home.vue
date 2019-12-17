<template>
  <div
    class="home"
  >
    <div>
      <van-pull-refresh
        v-model="isLoading"
        @refresh="get_allPosts"
        :success-text="refresh_text"
        :success-duration="1000"
      >
        <div><PostCard :posts="postList" /> </div>
      </van-pull-refresh>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import axios from 'axios';
import PostCard from '../components/PostCard';
import { Tabbar, TabbarItem } from 'vant';
import { Swipe, SwipeItem } from 'vant';
import { Image,Toast } from 'vant';
import { PullRefresh } from 'vant';

Vue.use(PullRefresh);

Vue.use(Image);
Vue.use(Toast);

Vue.use(Swipe).use(SwipeItem);

Vue.use(Tabbar).use(TabbarItem);

export default {
  name: 'Home',
  components: {
    // HelloWorld,components: {
        PostCard: PostCard,
    },
  data(){
    return{
        isLoading: false,
        refresh_text:'',
        images: require('../assets/123.jpg'),
        postList:[
                  {
                    postId:1,
                    userId:'babadalal',
                    details:'IT之家12月17日消息 今日，移动应用数据分析平台Sensor Tower发布了最新研究报告，带来了2019年11月期间中国手游产品在海外市场下载排行榜单。',
                    title: '11月中国手游海外下载排行',
                    photo: 'null',
                    icon: 'null',
                    postTime: '2019-12-17',
                    totalNumber:'12',
                  },
                  {
                    postId:2,
                    userId:'babadalal',
                    details:'IT之家12月17日消息 今日，移动应用数据分析平台Sensor Tower发布了最新研究报告，带来了2019年11月期间中国手游产品在海外市场下载排行榜单。',
                    title: '11月中国手游海外下载排行',
                    photo: 'null',
                    icon: 'null',
                    postTime: '2019-12-17',
                    totalNumber:'12',
                  },
                  {
                    postId:3,
                    userId:'babadalal',
                    details:'IT之家12月17日消息 今日，移动应用数据分析平台Sensor Tower发布了最新研究报告，带来了2019年11月期间中国手游产品在海外市场下载排行榜单。',
                    title: '11月中国手游海外下载排行',
                    photo: 'null',
                    icon: 'null',
                    postTime: '2019-12-17',
                    totalNumber:'12',
                  },
                ],
    }
  },
  mounted(){
    this.get_allPosts();
  },
  methods: {
    get_allPosts(){
              axios.get('http://localhost:8090/androidApp/Comment/FindAllForums')
        .then(response=>{
          // eslint-disable-next-line no-console
          console.log(response);
          this.postList=response.data;
          // eslint-disable-next-line no-console
          console.log("goodsList",this.goodsList);
          setTimeout(() => {
            this.refresh_text = "刷新成功！";
          }, 500);
        })
        .catch(error=>{
          // eslint-disable-next-line no-console
          console.log(error);
          setTimeout(() => {
            Toast("网络开小差了，请稍后再试！")
            this.refresh_text="刷新失败！";
          }, 500);
        })
    }
  },
}
</script>
<style scoped>
.background{
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgb(247,247,247);
}
</style>
