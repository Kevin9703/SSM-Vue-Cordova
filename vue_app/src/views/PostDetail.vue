<template>
  <div>
    <div
      v-for="item in postList"
      :key="item.index"
    >
      <div
        style="padding-bottom: 50px;"
        v-if="item.postId == postId"
      >
        <div
          class="top"
        >
          <van-nav-bar
            title="主题帖"
            left-arrow
            left-text="返回"
            @click-left="onClickLeft"
          />
        </div>
        <div>
          <van-list
            v-model="loading"
            @load="onLoad"
            :finished="finished"
            finished-text="没有更多了"
            :offset="50"
          >
            <div>
              <van-row type="flex">
                <van-col span="3">
                  <div style="margin-left:5px;margin-top:5px;">
                    <van-image
                      round
                      width="35px"
                      height="35px"
                      :src="item.icon"
                    />
                  </div>
                </van-col>
                <van-col
                  span="10"
                  style="margin-top:5px;"
                > 
                  <li style="color:black;font-size:13px;list-style: none;">
                    {{ item.userId }}
                  </li> 
                  <li style="color:grey;font-size:12px;list-style: none;">
                    {{ item.postTime }}
                  </li>       
                </van-col>
              </van-row>
              <van-row
                type="flex"
                justify="center"
              >
                <van-col span="23">
                  <li class="title">
                    {{ item.title }}
                  </li>      
                  <li class="details">
                    {{ item.details }}
                  </li>
                </van-col>
              </van-row>
      
              <van-row 
                type="flex"
                justify="center"
              >
                <van-col span="23">
                  <van-image
                    :src="item.photo"
                  />
                </van-col>
              </van-row>
            </div>
            <div class="fenge" />
            <van-row
              type="flex"
              justify="center"
              style="margin-top:15px;"
            >
              <van-col span="23">
                全部评论
              </van-col>
            </van-row>
            <van-divider />
            <div
              v-for="items in commentsList"
              :key="items.index"
            >
              <div v-if="items.postId == postId">
                <div>
                  <van-row
                    type="flex"
                    justify="center"
                    style="margin-top:10px"
                  >
                    <van-col span="23">
                      <van-col span="3">
                        <van-image
                          round
                          width="35px"
                          height="35px"
                          :src="items.icon"
                        />
                      </van-col>
                      <van-col span="21">
                        {{ items.userId }}
                        <van-row>
                          <van-col span="21">
                            <li style="font-size:10px;list-style: none;">
                              第{{ items.indexNumber }}楼 {{ items.commentTime }}
                            </li>
                          </van-col>
                        </van-row>
                      </van-col>
                      <van-row class="comment">
                        {{ items.commentDetails }}
                      </van-row>
                    </van-col>
                  </van-row>
                  <van-divider />
                </div>
              </div>
            </div>
          </van-list>
        </div>
      
        <div class="bottom">
          <van-field
            v-model="comment"
            clearable
            placeholder="回复楼主"
            rows="1"
            type="textarea"
            autosize
          >
            <van-button
              slot="button"
              size="small"
              type="info"
              @click="subComment"
            >
              发送
            </van-button>
            <van-field />
          </van-field>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import Vue from 'vue';
    import axios from 'axios'
    import { Image } from 'vant';
    import { NavBar } from 'vant';
    import { Row, Col } from 'vant';
    import { Divider } from 'vant';
    import { Field,Button } from 'vant';
    import { Toast } from 'vant';
    import { List } from 'vant';

    Vue.use(List);
    Vue.use(Field);
    Vue.use(Button);
    Vue.use(Divider);
    Vue.use(Row).use(Col);
    Vue.use(NavBar);
    Vue.use(Image);

    export default {
        name: 'PostDetail',
        components: {
        // CommentList: CommentList,
    },
        data() {
            return {
                finished: false,
                loading: false,
                totalNumber:3,
                postId:'',
                iconList:[{no:'iocn'}],
                postList:[{
                    postId:1,
                    userId:'babadalal',
                    details:'IT之家12月16日消息 在12月初的夏威夷骁龙技术峰会上，高通正式发布了新一代旗舰移动平台骁龙865。',
                    title: '性能猛增！高通骁龙865原型机及基准跑分全公布',
                    photo: 'https://img.ithome.com/newsuploadfiles/2019/12/20191216_220341_424.jpg',
                    icon: require('../assets/default.jpg'),
                    postTime: '2019-12-12 16:30',
                    totalNumber:'2',
                  },
                  {
                    postId:2,
                    userId:'babadalal',
                    details:'IT之家12月17日消息 今天下午，DxOMark网站正式公布了华为Mate30 Pro 5G版相机得分，其中拍照得分134分，视频拍摄得分102分，总分为123分，超过华为Mate30 Pro、小米CC9 Pro尊享版获得DxOMark手机榜单第一名。',
                    title: 'DxOMark公布华为Mate30 Pro 5G版相机得分，123分夺第一',
                    photo: 'https://img.ithome.com/newsuploadfiles/2019/12/20191217_161518_254.png',
                    icon: require('../assets/default.jpg'),
                    postTime: '2019-12-12 16:30',
                    totalNumber:'1',
                  },
                  {
                    postId:3,
                    userId:'babadalal',
                    details:'IT之家12月17日消息 上周，腾讯视频、爱奇艺两大视频网站平台均在会员制基础上，推出了超前点播付费模式。会员用户可花费50元购买加速权益包，始终超前看6集《庆余年》。',
                    title: '买会员还要再花钱，腾讯视频王娟回应《庆余年》争议：对会员的消费心理不够体贴',
                    photo: 'https://img.ithome.com/newsuploadfiles/2019/12/20191217_120735_266.png',
                    icon: require('../assets/default.jpg'),
                    postTime: '2019-12-12 16:30',
                    totalNumber:'1',
                  },],
                comment:'',
                commentsList:[
                    {
                        "postId":1,
                        "icon":require('../assets/default.jpg'),
                        "userId":'babadalal',
                        "indexNumber":1,
                        "commentDetails":"帖子1评论1",
                        "commentTime":"2019-12-17 17:42"
                    },
                    {
                        "postId":1,
                        "icon":require('../assets/default.jpg'),
                        "userId":'babadalal',
                        "indexNumber":2,
                        "commentDetails":"帖子1评论2",
                        "commentTime":"2019-12-17 17:42"
                    },
                    {
                        "postId":2,
                        "icon":require('../assets/default.jpg'),
                        "userId":'babadalal',
                        "indexNumber":1,
                        "commentDetails":"帖子2评论1",
                        "commentTime":"2019-12-17 17:42"
                    },
                ],
            }
        },
        mounted(){
            this.get_id();
            this.get_post();
            this.get_comments();
        },
        // updated(){
        //   this.get_comments();
        // },
        methods: {
            onClickLeft() {
                this.$router.go(-1);
            },
            get_id(){        
              this.postId = this.$route.params.postId;
              // eslint-disable-next-line no-console
              console.log(this.postId)
            },
            get_post(){
                axios.get('http://localhost:8090/androidApp/Comment/FindAllForums')
                .then(response=>{
                    // eslint-disable-next-line no-console
                    console.log(response);
                    this.postList=response.data;
                    this.totalNumber=response.data.totalNumber;
                }).catch(error=>{
                    // eslint-disable-next-line no-console
                    console.log(error);
                    Toast("网络开小差了，请稍后再试！");
                })
            },
            get_comments(){
                axios.post('http://localhost:8090/androidApp/Comment/FindAllComments',{
                  postId:this.postId,
                })
                .then(response=>{
                    // eslint-disable-next-line no-console
                    console.log("获得评论：",response);
                    this.commentsList=response.data;
                }).catch(error=>{
                    // eslint-disable-next-line no-console
                    console.log(error);
                    Toast("网络开小差了，请稍后再试！");
                });
            },
            get_icon(){
              axios.post('http://localhost:8090/androidApp/Comment/getIcon',{
                  postId:this.postId,
                })
                .then(list=>{
                    // eslint-disable-next-line no-console
                    console.log("获得头像：",list);
                      this.iconList=list.data;
                }).catch(err=>{
                  // eslint-disable-next-line no-console
                  console.log("获取头像错误",err);
              })
            },
            subComment(){
              if(this.comment==''){
                Toast("评论不能为空！")
              }else{
                axios.post('http://localhost:8090/androidApp/Comment/InsertComment',{
                    commentDetails:this.comment,
                    postId:this.postId,
                  })
                .then(()=>{
                    Toast("评论成功！");
                    this.comment='';
                    this.get_comments();
                    Toast('评论成功后列表长度',this.commentsList.length);
                })
              }             
            },
            onLoad() {
              setTimeout(() => {
                  for (let i = 0; i < 1; i++) {
                    this.commentsList.push(this.commentsList.length + 1);
                  }
                  this.loading = false;
                  // Toast('评论成功前列表长度',this.commentsList.length);
                // 数据全部加载完成
                if (this.commentsList.length >= this.totalNumber){
                  this.finished = true;
                }    
              }, 500);
            }     
        },
    }
</script>

<style scoped>
.top{
    position:sticky;
    top:0px;
    z-index: 1;
  }
.title{
    color:#363636;
    font-size:20px;
    list-style: none;
    margin-top:13px;
    font-weight:bolder;
}
.details{
    list-style: none;
    color:black;
}
.fenge{
    width: 100%;
    height: 15px;
    background-color: #d1d1d1;
}
.bottom{
    position:fixed;
    bottom: 0px;
    z-index: 1;
    width: 100%;
    box-shadow:1px 1px 4px #cecece;
  }
</style>