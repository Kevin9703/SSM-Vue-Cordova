import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'vant/lib/index.css';
import 'view-design/dist/styles/iview.css';
import '@vant/touch-emulator';

import axios from 'axios'

axios.defaults.baseURL = 'http://192.168.137.1:8090/androidApp'
Vue.prototype.axios = axios

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

import {
  Dialog
} from 'vant';

router.beforeEach((to, from, next) => {
  //获取用户登录成功后储存的登录标志
  let getFlag = localStorage.getItem("Flag")
  //如果登录标志存在且为isLogin，即用户已登录
  if (getFlag === "isLogin") {
    //设置vuex登录状态为已登录
    store.state.isLogin = true
    next()
    //如果已登录，还想想进入登录注册界面，则定向回首页
    if (!to.meta.isLogin) {
      //iViewUi友好提示
      Dialog.alert({
        title: '提示',
        message: '请先退出登录'
      }).then(() => {
        // on close
      });
      next({
        path: '/'
      })
    }
    //如果登录标志不存在，即未登录
  } else {
    //用户想进入需要登录的页面，则定向回登录界面
    if (to.meta.isLogin) {
      Dialog.alert({
        title: '提示',
        message: '请先登录！'
      }).then(() => {
        // on close
      });
      next({
        path: '/login',
      })
      //用户进入无需登录的界面，则跳转继续
    } else {
      next()
    }
  }
});