<template>
  <div
    class="home"
    style="text-align: center;"
  >
    <div style="text-align:center;margin-top:80px">
      <van-swipe
        :autoplay="3000"
        indicator-color="#6495ED"
      >
        <van-swipe-item>
          <van-image
            width="400"
            height="200"
            :src="images"
          />
        </van-swipe-item>
        <van-swipe-item>
          <van-image
            width="400"
            height="200"
            src="https://img.yzcdn.cn/vant/cat.jpeg"
          />
        </van-swipe-item>
        <van-swipe-item>
          <van-image
            width="400"
            height="200"
            src="https://img.yzcdn.cn/vant/cat.jpeg"
          />
        </van-swipe-item>
        <van-swipe-item>
          <van-image
            width="400"
            height="200"
            src="https://img.yzcdn.cn/vant/cat.jpeg"
          />
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Tabbar, TabbarItem } from 'vant';
import { Swipe, SwipeItem } from 'vant';
import { Image } from 'vant';

Vue.use(Image);

Vue.use(Swipe).use(SwipeItem);

Vue.use(Tabbar).use(TabbarItem);

export default {
  name: 'Home',
  components: {
    // HelloWorld,
  },
  data(){
    return{
        images: require('../assets/123.jpg'),
    }
  }
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
