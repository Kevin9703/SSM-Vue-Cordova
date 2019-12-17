<template>
  <div>
    <div
      v-for="item in goods"
      :key="item.index"
      class="card"
      style="text-align:center"
    >
      <router-link :to="&quot;/GoodDetail/&quot; + item.goodId">
        <van-col span="12">
          <van-image
            width="150"
            height="120"
            :src="item.photo1"
          />
          <br>
          <span class="name">{{ item.goodName }}</span>      
          <br>
          <van-col span="12">
            <span class="price">¥ {{ item.price }}</span>
          </van-col>
          <van-col span="10">
            <span class="number">在售 {{ item.number }} 件</span>
          </van-col>
          <br>
          <br>
        </van-col>
      </router-link>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Row, Col } from 'vant';
import { Card } from 'vant';
import { Image } from 'vant';

Vue.use(Image);

Vue.use(Card);

Vue.use(Row).use(Col);

    export default {
        name: 'GoodsCard',
        data() {
            return {
                photo:require('../assets/123.jpg'),
            }
        },
        props: {
          goods:{
            type: Array,
            default: null,
          },
        },
    }
</script>

<style scoped>
.name{
  font-size:15px;
  color: black;
}
.price{
  color:orange;
  font-size:16px;
}
.number{
  font-size:10px;
  color:gray;
}
    
</style>