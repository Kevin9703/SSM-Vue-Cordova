<template>
  <div>
    <div style="margin-top:20px;">
      <van-row
        @click="showDetail"
        style="margin-left:20px;"
      >
        <van-col
          span="6"
        >
          <van-image
            width="70"
            height="70"
            :src="headimage"
            radius="10"
          />
        </van-col>
        <van-col span="15">
          <span class="name">babadalal</span>
          <br>
          <span>这里是个人简介</span>
        </van-col>
        <van-col span="1">
          <br>
          <van-icon
            name="arrow"
            size="20px"
          />
        </van-col>
      </van-row>
      <div style="margin-top:20px;">
        <van-cell-group>
          <van-cell
            title="我买到的东西"
            is-link
            to="/"
            icon="shopping-cart-o"
          />
          <van-cell
            title="我出售的东西"
            is-link
            to="/MySell"
            icon="balance-o"
          />
        </van-cell-group>
      </div>
    </div>
    <div style="text-align:center">
      <Button
        type="primary"
        size="large"
        @click="click"
        style="width: 90%;margin-top:30px;"
      >
        退出登录
      </Button>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Button } from 'view-design';
import { Dialog,Toast } from 'vant';
import { Loading } from 'vant';
import { Row, Col } from 'vant';
import { Cell, CellGroup } from 'vant';
import { Icon } from 'vant';
import { Image } from 'vant';

Vue.use(Image);

Vue.use(Icon);

Vue.use(Cell).use(CellGroup);

Vue.use(Row).use(Col);

Vue.component('Button', Button);
Vue.use(Toast);
Vue.use(Loading);

export default {
    name: 'UserDetail',
    data() {
        return {
            headimage: require('../assets/123.jpg'),
        }
    },
    methods: {
        click(){
          Toast.setDefaultOptions({ duration: 1000 });
          Dialog.confirm({
            title: '提示',
            message: '是否要注销当前登录账户？'
          }).then(() => {
            // on confirm
            Toast('注销成功')
            localStorage.removeItem("Flag")
            this.$router.push('/login')
          }).catch(() => {
            // on cancel
            return;
          });
        },
        showDetail(){
          Toast('显示个人详情界面')
        },
    },
}
</script>

<style>
    .name{
      font-family:"Microsoft YaHei",微软雅黑,"MicrosoftJhengHei",华文细黑,STHeiti,MingLiu;
      font-weight:500;
      font-size: 20px;
      color: black;
    }
</style>