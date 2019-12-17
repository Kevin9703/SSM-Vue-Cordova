<template>
  <div>
    <div
      v-for="item in posts"
      :key="item.index"
    >
      <router-link :to="&quot;/PostDetail/&quot; + item.postId">
        <van-row type="flex">
          <van-col span="3">
            <div style="margin-left:5px;margin-top:5px;">
              <van-image
                round
                width="35px"
                height="35px"
                :src="item.icon"
              />
            </div>
          </van-col>
          <van-col
            span="20"
            style="margin-top:5px;"
          > 
            <span style="color:black;font-size:13px;">{{ item.userId }}</span>        
            <br>
            <span style="color:black;font-size:16px;">{{ item.title }}</span>      
            <br>
            <span class="show_text">{{ item.details }}</span>
            <br>
            <van-image
              width="10rem"
              height="10rem"
              fit="contain"
              :src="item.photo"
            />
            <br>
            <van-col span="18">
              <span style="color:grey;font-size:12px">{{ item.postTime }}</span>
            </van-col>
            <span><van-icon name="comment-o" /></span>
            <span style="color:grey;font-size:12px;"> {{ item.totalNumber }}</span>
          </van-col>
        </van-row>
        <van-divider />
      </router-link>
    </div>
  </div>
</template>

<script>
    import Vue from 'vue';
    import { Cell, CellGroup } from 'vant';
    import { Divider } from 'vant';
    import { Image } from 'vant';
    import { Row, Col } from 'vant';
    import { Icon } from 'vant';

    Vue.use(Icon);

    Vue.use(Row).use(Col);
    Vue.use(Image);
    Vue.use(Divider);
    Vue.use(Cell).use(CellGroup);

    export default {
        name: 'PostCard',
        data() {
            return {
                userId:'babadlala',
                details:'IT之家12月17日消息 今日，移动应用数据分析平台Sensor Tower发布了最新研究报告，带来了2019年11月期间中国手游产品在海外市场下载排行榜单。',
                title: '11月中国手游海外下载排行',
                photo: 'null',
                icon: 'null',
                postTime: '2019-12-17',
                totalNumber:'12',
            }
        },
        props: {
          posts:{
            type: Array,
            default: null,
          },
        },
    }
</script>

<style scoped>
.show_text{
    overflow:hidden;
    text-overflow:ellipsis;
    display:-webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:2;
    color:grey;
    font-size:13px;
}
    
</style>