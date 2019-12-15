<template>
  <div>
    <div class="search">
      <van-search
        v-model="value"
        placeholder="请输入搜索关键词"
        show-action
        shape="round"
        @search="onSearch"
      >
        <div
          slot="action"
          @click="onSearch"
        >
          搜索
        </div>
      </van-search>
    </div>
    <div class="refresh">
      <van-pull-refresh
        v-model="isLoading"
        @refresh="get_allGoods"
        :success-text="refresh_text"
        :success-duration="1000"
      >
        <div v-if="search == false">
          <GoodsCard
            :goods="goodsList"
          />
        </div>
        <div v-else-if="search == true">
          <GoodsCard
            :goods="searchList"
          />
        </div>
      </van-pull-refresh>
    </div> 
  </div>
</template>

<script>
import Vue from 'vue';
import GoodsCard from '../components/GoodsCard'
import axios from 'axios';
import '@vant/touch-emulator';

import { Search, Toast } from 'vant';
import { Button } from 'vant';
import { PullRefresh } from 'vant';

Vue.use(PullRefresh);
Vue.use(Button);
Vue.use(Search);

export default {
    name:'AllItem',
    components: {
        GoodsCard: GoodsCard,
    },
    data() {
        return {
          refresh_text:'',
          search: false,
          value: '',
          count: 0,
          isLoading: false,
          searchList: [],
          goodsList: [{"goodId":4,"userId":"001","goodName":"篮球","number":1,"price":88,"describe":"好！","phone1":null,"phone2":null,"phone3":null},{"goodId":6,"userId":"009","goodName":"足球","number":1,"price":55,"describe":"好！","phone1":null,"phone2":null,"phone3":null},{"goodId":7,"userId":"005","goodName":"电脑","number":1,"price":2000,"describe":null,"phone1":null,"phone2":null,"phone3":null},{"goodId":8,"userId":"008","goodName":"电脑","number":1,"price":3000,"describe":null,"phone1":null,"phone2":null,"phone3":null}],
        }     
    },
    mounted(){
      this.get_allGoods();
    },
    methods: {
      get_allGoods(){
        axios.get('http://localhost:8090/androidApp/Goods/FindAllGoods')
        .then(response=>{
          // eslint-disable-next-line no-console
          console.log(response);
          this.goodsList=response.data;
          setTimeout(() => {
            this.refresh_text="刷新成功！";
            this.isLoading = false;
            this.search=false;
          }, 500);
        })
        .catch(error=>{
          // eslint-disable-next-line no-console
          console.log(error);
          setTimeout(() => {
            Toast("网络开小差了，请稍后再试！")
            this.refresh_text="刷新失败！";
            this.isLoading = false;
            this.search=false;
          }, 500);
        })
      },
      onRefresh() {
        setTimeout(() => {
          this.$toast('刷新成功');
          this.isLoading = false;
          this.search=false;
        }, 500);
      },
      onSearch(){
        axios.post('http://localhost:8090/androidApp/Goods/FindGoodsByName',{
          goodName:this.value,
        })
        .then(response=>{
          // eslint-disable-next-line no-console
          console.log(response);
          this.search_list=response.data;
          this.search=true;
          if(response.data==null){
            Toast('未查询到结果');
            location.reload();
          }
        })
        .catch(error=>{
          Toast("网络开小差了，请稍后再试！");
          // eslint-disable-next-line no-console
          console.log(error);
          this.search=true;
        })
      },
      search_check(){
        if(this.value == ''){
          this.get_allGoods();
          // eslint-disable-next-line no-console
          console.log("搜索栏清空")
        }
      },
    },
}
</script>


<style>
  .search{
    position:sticky;
    top:0px;
    z-index: 1;
  }
  .refresh{
    z-index:2;
  }
</style>