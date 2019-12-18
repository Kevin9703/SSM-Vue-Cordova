<template>
  <div>
    <div class="top">
      <van-nav-bar
        title=""
        left-text="发新帖"
        left-arrow
        @click-left="onClickLeft"
      />
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Row, Col } from 'vant';
import { Icon } from 'vant';
import { NavBar } from 'vant';
import { Toast } from 'vant';

Vue.use(NavBar);

Vue.use(Toast);
Vue.use(Icon);
Vue.use(Row).use(Col);
    export default {
        name: 'NewPost',
        components: {
        },
        data() {
            return {
                
            }
        },
        methods: {
            onClickLeft() {
                window.history.go(-1);
            },
            onClickRight() {
                Toast('按钮');
            }
        },
    }
</script>

<style scoped>
.top{
    position:sticky;
    top:0px;
    z-index: 10002;
    background-color: rgb(255, 255, 255);
    height: 46px;
    box-shadow:1px 1px 3px #cecece;
  } 
</style>