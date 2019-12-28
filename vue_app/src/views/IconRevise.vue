<template>
  <div>
    <div>
      <van-nav-bar
        title
        left-arrow
        left-text="上传头像"
        @click-left="onClickLeft"
        right-text="提交"
        @click-right="submit"
      />
    </div>
    <div style="text-align:center;margin-top:50px;">
      <van-uploader
        :after-read="afterRead"
        v-model="fileList"
        multiple
        :max-count="1"
      />
      <br>
      <br>
      <span class="font">选择一个好看的头像吧！</span>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Uploader } from "vant";
import { NavBar } from "vant";
import { Button } from "vant";
import { Notify } from "vant";

Vue.use(Notify);

Vue.use(Button);
Vue.use(NavBar);
Vue.use(Uploader);

export default {
  name: "IconRevise",
  data() {
    return {
      fileList: [],
      photo: ""
    };
  },
  methods: {
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      this.photo = file.content;
    },
    onClickLeft() {
      window.history.go(-1);
    },
    submit() {
      this.axios
        .post("/User/UpdateIcon", {
          icon: this.photo
        })
        .then(response => {
          // eslint-disable-next-line no-console
          console.log(response);
          Notify("上传成功");
          window.history.go(-1);
        })
        .catch(error => {
          // eslint-disable-next-line no-console
          console.log(error);
        });
    }
  }
};
</script>

<style scoped>
.font {
  color: #778899;
}
</style>