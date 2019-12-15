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
          <div slot="tags">
            <van-tag
              plain
              type="danger"
            >
              标签
            </van-tag>
            <van-tag
              plain
              type="danger"
            >
              标签
            </van-tag>
          </div>
          <div slot="footer">
            <van-button size="mini">
              按钮
            </van-button>
            <van-button size="mini">
              按钮
            </van-button>
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