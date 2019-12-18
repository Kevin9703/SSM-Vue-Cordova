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
    >
      <p>
        华为Mate30 Pro 5G的麒麟990 5G芯片采用了全新ISP5.0，首次在手机芯片上实现BM3D（Block-Matching and 3D filtering）单反级硬件降噪技术，暗光场景拍照更加明亮清晰。所以华为Mate30 Pro 5G版本在芯片上的升级要强于华为Mate30 Pro，前置拍照相对而言降噪技术更佳，夜景更佳明亮。

        华为 Mate 30 Pro的LTE版本在所有测试领域均有出色的表现。现在，华为Mate 30 Pro 5G夺走了榜首位置。毫无疑问，该手机在大多数情况下都拍出了与LTE款型非常相似的图像和视频质量，但通过软件调校优化在某些关键领域获得了改进。

        最重要的改进是稍微更好的细节和噪点管理，自动对焦在变焦下也更加稳定；在非常微弱的光线下拍摄时，效果也会略好一些，而在使用散景模式时，动态范围也更宽广。在视频模式下，自动对焦、细节和噪点也都得到了一些改善。美中不足的是，与竞品相较之下，Mate 30 Pro超广角摄像头的有效焦距的视场并不算宽广，而如今在新的反畸变算法下，视场又变小了。

        总体而言，Mate 30 Pro LTE机型与5G版本之间的摄像头差异并不大，但可以察觉得出来。

        照片

        优点

        在大多数测试条件下，细节丰富

        测标曝光在所有测试条件下都很正确

        在户外拍摄时可拍出悦目的色彩

        噪点控制得当

        散景模式下的深度估计准确，动态范围也不错

        近距和中距变焦照片中的细节到位

        闪光灯开启和自动闪光模式下的曝光和白平衡的表现都很好

        不足

        在高光下出现一些溢光剪切纹理

        在室内条件下偶尔出现一些色彩渐晕

        在散景模式下有时色彩饱和度不足

        变焦时会出现轻微的白平衡色偏

        使用闪光灯时，曝光和白平衡稍微不稳定

        视频

        优点

        大多数条件下的细节勾勒到位

        准确的测标曝光

        噪点控制得当

        户外和室内色彩不错

        有效的防抖

        快速、准确而可重复的自动对焦

        不足

        在大多数情况下出现短暂的闪烁噪点

        低光下出现了粗大的噪点和色彩量化

        色彩偶有轻微的不稳定
      </p>
    </div>
    
    
    
    <!--可使用 min-height 实现编辑区域自动增加高度-->
  </div>
</template>

<script>
    import E from 'wangeditor'
    import Vue from 'vue';
    import { Field } from 'vant';
    import { Row, Col } from 'vant';
    Vue.use(Row).use(Col);

    Vue.use(Field);

    export default {
      name: 'Editor',      
      data () {
        return {
          editorContent: '',
          title:'',
        }
      },
      methods: {
        getContent() {
            alert(this.editorContent)
        }
      },
      mounted() {
        var editor = new E('#div1', '#div2')
        editor.customConfig.menus=[
          'undo',
          'redo',
          'image',
          'foreColor',
          'bold',
          'quote',
          'list',
          'link',
        ];
        editor.customConfig.zIndex = 0;
        editor.customConfig.onchange = (html) => {
          this.editorContent = html
        };
        editor.create();
      }
    }
</script>

<style scoped>
.toolbar{
    position:fixed;
    bottom: 0px;
    width: 100%;
    z-index:10005;
    box-shadow:1px 1px 4px #cecece;
}
.text {
        min-height:800px;
      }
</style>
