<template>
  <div>
    <div class="top">
      <van-nav-bar
        title
        left-text="发新帖"
        right-text="发送"
        left-arrow
        @click-left="onClickLeft"
        @click-right="send"
      />
    </div>
    <van-row
      type="flex"
      justify="center"
      style="padding-top: 46px;"
    >
      <van-field
        v-model="title"
        placeholder="标题"
      />
      <van-divider />
    </van-row>
    <van-row>
      <van-field
        v-model="message"
        rows="2"
        autosize
        type="textarea"
        placeholder="在此输入帖子内容"
        :border="false"
      />
    </van-row>
    <van-row
      type="flex"
      justify="center"
    >
      <van-col span="23">
        <div v-if="photo!=null">
          <van-image :src="photo" />
          <van-button
            type="default"
            @click="deletePhoto"
            icon="cross"
          />
        </div>
      </van-col>
    </van-row>

    <div class="bottom">
      <van-cell center>
        <template slot="title">
          <van-uploader :after-read="afterRead">
            <span style="color:grey">
              <van-icon
                name="photo-o"
                size="30"
              />
            </span>
          </van-uploader>
        </template>
      </van-cell>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import { Row, Col } from "vant";
import { Icon } from "vant";
import { NavBar } from "vant";
import { Toast } from "vant";
import { Cell, CellGroup } from "vant";
import { Button } from "vant";
import { Uploader } from "vant";
import { Field } from "vant";
import { Image } from "vant";
import { Divider } from "vant";

Vue.use(Divider);

Vue.use(Image);

Vue.use(Field);

Vue.use(Uploader);

Vue.use(Button);

Vue.use(Cell).use(CellGroup);

Vue.use(NavBar);

Vue.use(Toast);
Vue.use(Icon);
Vue.use(Row).use(Col);
export default {
  name: "NewPost",
  components: {},
  data() {
    return {
      title: "",
      message: "",
      photo: null
    };
  },
  methods: {
    onClickLeft() {
      window.history.go(-1);
    },
    send() {
      axios
        .post("http://192.168.137.1:8090/androidApp/Comment/InsertPost", {
          title: this.title,
          details: this.message,
          photo: this.photo
        })
        .then(() => {
          Toast("发送成功");
          window.history.go(-1);
        })
        .catch(error => {
          // eslint-disable-next-line no-console
          console.log(error);
          Toast("服务器开小差了，请稍后再试！");
        });
    },
    afterRead(file) {
      this.photo = file.content;
    },
    deletePhoto() {
      this.photo = null;
    }
  }
};
</script>

<style scoped>
.top {
  position: fixed;
  top: 0px;
  width: 100%;
  background-color: rgb(255, 255, 255);
  height: 46px;
  z-index: 1;
  box-shadow: 1px 1px 3px #cecece;
}
.bottom {
  position: fixed;
  bottom: 0px;
  z-index: 1;
  width: 100%;
}
</style>