<template>
  <div>
    <div
      v-for="item in goods"
      :key="item.index"
    >
      <van-row>
        <van-card
          :num="item.number"
          :price="item.price"
          :desc="item.describe"
          :title="item.goodName"
          thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
        />
      </van-row>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Row, Col } from 'vant';
import { Card } from 'vant';

Vue.use(Card);

Vue.use(Row).use(Col);

    export default {
        name: 'GoodsCard',
        data() {
            return {
                
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

<style lang="" scoped>
    
</style>