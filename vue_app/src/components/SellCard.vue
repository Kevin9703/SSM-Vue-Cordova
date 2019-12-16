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
        >
          <div slot="footer">
            <router-link :to="&quot;/ReviseGoods/&quot; + item.goodId">
              <van-button
                size="mini"
                round
                type="warning"
              >
                修改
              </van-button>
            </router-link>
          </div>
        </van-card>
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
        name: 'SellCard',
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