<template>
  <div>
    <div
      v-for="item in comments"
      :key="item.index"
    >
      <div>
        <van-row
          type="flex"
          justify="center"
          style="margin-top:10px"
        >
          <van-col span="23">
            <van-col span="3">
              <van-image
                round
                width="35px"
                height="35px"
                :src="item.icon"
              />
            </van-col>
            <van-col span="21">
              {{ item.userId }}
              <van-row>
                <van-col span="21">
                  <li style="font-size:10px;list-style: none;">
                    第{{ item.indexNumber }}楼 {{ item.commentTime }}
                  </li>
                </van-col>
              </van-row>
            </van-col>
            <van-row class="comment">
              {{ item.commentDetails }}
            </van-row>
          </van-col>
        </van-row>
        <van-divider />
      </div>
    </div>
  </div>
</template>

<script>
    import Vue from 'vue';
    import { Divider } from 'vant';
    import { Image } from 'vant';
    import { Row, Col } from 'vant';

    Vue.use(Image);
    Vue.use(Row).use(Col);
    Vue.use(Divider);

    export default {
        name: 'CommentList',
        data() {
            return {
                
            }
        },
         props: {
          comments:{
            type: Array,
            default: null,
          },
        },
    }
</script>

<style scoped>
.comment{
    font-size:17px;
    color:black;
}
    
</style>