<template>
  <div>
    <div>
      <van-field
        v-model="title"
        placeholder="请输入标题"
      />
    </div>
    <div
      id="div1"
      class="toolbar"
    />
    <div
      id="div2"
      class="text"
    />
    <!--可使用 min-height 实现编辑区域自动增加高度-->
  </div>
</template>

<script>
import E from "wangeditor";
import Vue from "vue";
import { Field } from "vant";
import { Row, Col } from "vant";
Vue.use(Row).use(Col);

Vue.use(Field);

export default {
  name: "Editor",
  data() {
    return {
      editorContent: "",
      title: ""
    };
  },
  methods: {
    getContent() {
      alert(this.editorContent);
    }
  },
  mounted() {
    var editor = new E("#div1", "#div2");
    editor.customConfig.menus = [
      "undo",
      "redo",
      "image",
      "foreColor",
      "bold",
      "quote",
      "list",
      "link"
    ];
    editor.customConfig.zIndex = 0;
    editor.customConfig.onchange = html => {
      this.editorContent = html;
    };
    editor.create();
  }
};
</script>

<style scoped>
.toolbar {
  position: fixed;
  bottom: 0px;
  width: 100%;
  z-index: 10005;
  box-shadow: 1px 1px 4px #cecece;
}
.text {
  min-height: 800px;
}
</style>
