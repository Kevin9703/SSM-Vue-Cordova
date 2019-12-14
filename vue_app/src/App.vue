<template>
  <div
    id="app"
  >
    <!-- <div
      id="nav"
      style="text-align: center; margin-top:30px;"
    >
      <router-link to="/">
        Home
      </router-link> |
      <router-link to="/about">
        About
      </router-link>
    </div> -->
    <router-view />
    <!-- 登录和注册页面不显示底部导航栏 -->
    <div
      v-if="$route.path!=='/login' && $route.path!=='/register'"
      class="nav"
    >
      <van-tabbar v-model="active">
        <van-tabbar-item
          name="home"
          icon="home-o"
          to="/"
        >
          主页
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
.div{
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
    /* position: fixed; */
  }
.nav{
  height :50px;
}
</style>
