<template>
  <div>
    <div>
      <van-search
        placeholder="请输入搜索关键词"
        v-model="search"
        shape="round"
      />
    </div>
    <div>
      <GoodsCard
        :goods="goodsList"
      />
    </div>
    <div>
      <van-button 
        type="primary"
        @click="get_allGoods"
      >
        主要按钮
      </van-button>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import GoodsCard from '../components/GoodsCard'
import axios from 'axios';
import { Search } from 'vant';
import { Button } from 'vant';

Vue.use(Button);


Vue.use(Search);

export default {
    name:'AllItem',
    components: {
        GoodsCard: GoodsCard,
    },
    data() {
        return {
            search: '',
            goodsList: [{"goodId":4,"userId":"001","goodName":"篮球","number":1,"price":88,"describe":"好！","phone1":null,"phone2":null,"phone3":null},{"goodId":6,"userId":"009","goodName":"足球","number":1,"price":55,"describe":"好！","phone1":null,"phone2":null,"phone3":null},{"goodId":7,"userId":"005","goodName":"电脑","number":1,"price":2000,"describe":null,"phone1":null,"phone2":null,"phone3":null},{"goodId":8,"userId":"008","goodName":"电脑","number":1,"price":3000,"describe":null,"phone1":null,"phone2":null,"phone3":null}],
        }     
    },
    updated(){
      this.get_allGoods();
    },
    methods: {
      get_allGoods(){
        axios.get('http://localhost:8090/androidApp/Goods/FindAllGoods')
        .then(response=>{
          // eslint-disable-next-line no-console
          console.log(response);
        })
      }
    },
}
</script>


<style>
    
</style>