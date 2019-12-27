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
          :thumb="item.photo1"
        />
      </van-row>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Row, Col } from 'vant';
import { Card } from 'vant';
import { Button } from 'vant';


Vue.use(Card);
Vue.use(Button);
Vue.use(Row).use(Col);


    export default {
        name: 'BuyCard',
        data() {
            return {
                goodId:'',
                photo:require('../assets/123.jpg'),
            }
        },
        props: {
          goods:{
            type: Array,
            default: null,
          },
        },
        methods: {
        },
    }
</script>

<style lang="" scoped>
    
</style>