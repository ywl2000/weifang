<template>
  <div class="home">
    <my-tab1 v-show="show1"></my-tab1>
    <my-tab2 v-show="show2"></my-tab2>
    <my-tab3 v-show="show3"></my-tab3>
    <!-- <my-header></my-header> -->
    <!-- <daohang></daohang> -->
    <!-- <xiang></xiang> -->
    

    <!-- <div @click="to()">
      2344
    </div> -->

    <!-- 顶部导航栏开始 -->

    <!-- 顶部导航栏结束 -->
    <!-- 面板区域开始 -->
    <mt-tab-container v-model="xuan">
      <mt-tab-container-item id="d1">
        <p>面板1
          <!-- <button @click="wang()">网络封装模块</button> -->
        </p>
      </mt-tab-container-item>
      <mt-tab-container-item id="d2">
        <p>面板2</p>
      </mt-tab-container-item>
      <mt-tab-container-item id="d3">
        <p>面板3</p>
      </mt-tab-container-item>
    </mt-tab-container>
    <!-- 面板区域结束 -->
    <!-- 底部选项卡 -->
    <div>
      <mt-tabbar v-model="xuan" fixed>
        <mt-tab-item id="d1">首页
          <img src="../assets/oa-t-house.png" slot="icon" alt="">
        </mt-tab-item>
        <mt-tab-item id="d2">购物车
          <img src="../assets/oa-t-house.png" slot="icon" alt="">
        </mt-tab-item>
        <mt-tab-item id="d3">个人中心
          <img src="../assets/oa-t-house.png" slot="icon" alt="">
        </mt-tab-item>
      </mt-tabbar>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
 import Head from '@/components/demo/Head.vue'
//  import About from '@/views/About'
 import xiang from '@/components/demo/xiang.vue'
//  引入网络封装模块
// import {get} from "../utlis/requser"

import daohang from '@/views/About.vue'

export default {
  name: 'Home',
  components: {
    Head,
    xiang,
    daohang
    // About,
    
  },
  data(){
    return{
      show1:true,
      show2:true,
      show3:true,
      xuan:'d1'
    }
  },
  // methods:{
  //   wang(){
  //     this.axios.get("https://blog.csdn.net/ddx2019/article/details/104972089/").then(res=>{
  //       console.log(res.data)
  //     })
  //   }
  // },

  watch:{
    xuan(){
      switch(this.xuan){
        case 'd1':
          // this.$router.push("/");
          this.show2=false;
          this.show3=false;
          this.show1=true
          break;
          case 'd2':
            // this.$router.push('/');
            this.show1=false;
            this.show2=true;
            this.show3=false;
            break;
            case 'd3':
            // this.$router.push('/')
            this.show1=false;
            this.show2=false;
            this.show3=true;
      }
    }
  },
  // 在挂载之前被调用
  beforeMount:function(){
    console.log(this.show1)
    this.show2=false
    this.show3=false
  }
    
  


}
</script>
