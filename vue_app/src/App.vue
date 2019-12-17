<template>
  <div
    id="app"
  >
    <router-view />
    <!-- 不显示底部导航栏 -->
    <div
      v-if="$route.path!=='/login' && $route.path!=='/register'&& $route.name!=='PostDetail'"
      class="nav"
    >
      <van-tabbar v-model="active">
        <van-tabbar-item
          name="home"
          icon="chat-o"
          to="/"
        >
          圈子
        </van-tabbar-item>
        <van-tabbar-item
          name="allItem"
          icon="bag-o"
          to="/allitem"
        >
          所有商品
        </van-tabbar-item>
        <van-tabbar-item
          name="shoppingCart"
          icon="shopping-cart-o"
          to="/shoppingcart"
        >
          购物车
        </van-tabbar-item>
        <van-tabbar-item
          name="my"
          icon="user-o"
          to="/userdetail" 
        >
          我的
        </van-tabbar-item>
      </van-tabbar>
    </div>  
  </div>
</template>

<script>
import '@vant/touch-emulator';
export default {
  data(){
    return{
      active: 'home',
    }
  },
  updated (){
    this.nav();
  },
  methods: {
    nav() {
      // eslint-disable-next-line no-console
      // console.log(this.$route);
      if(this.$route.name=='home'){
        this.active='home'
      }
      if(this.$route.name=='AllItem'){
        this.active='allItem'
      }
      if(this.$route.name=='ShoppingCart'){
        this.active='shoppingCart'
      }
      if(this.$route.name=='UserDetail'){
        this.active='my'
      }
    },
  },
}
</script>

<style>
html,body,#app{
    background-color: #ffffff;
    /* position: fixed; */
  }
.nav{
  height :50px;
}
</style>
