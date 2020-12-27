<template>
    <div>
        <!-- 头部选项卡开始 -->
        <!-- <mt-navbar v-model="dao">
            <mt-tab-item id="1">a</mt-tab-item>
            <mt-tab-item id="2">b<big></big></mt-tab-item>
            <mt-tab-item id="3">c</mt-tab-item>
        </mt-navbar>

        <mt-tab-container v-model="dao">
            <mt-tab-container-item id="1">1</mt-tab-container-item>
            <mt-tab-container-item id="2">2</mt-tab-container-item>
            <mt-tab-container-item id="3">3</mt-tab-container-item>
        </mt-tab-container> -->
        <!-- 头部选项卡结束 -->

        <!-- 头部开始 -->

        <!-- 头部结束 -->

        
        <!-- 面板开始 -->
        <mt-tab-container v-model="xuan">
            <mt-tab-container-item id="1">
                <!-- 头部样式写入 -->
                <mt-header title="首页">
                    <router-link to="" slot="left">
                        <mt-button icon="back">返回</mt-button>
                    </router-link>
                    <mt-button icon="more" slot="right"></mt-button>
                </mt-header>
                <!-- 引入头部选型卡组件 -->
                <daohangz></daohangz>
                <div>
                    <ul
                    v-infinite-scroll="loadMore"
                    infinite-scroll-disabled="loading"
                    infinite-scroll-distance="10">
                    <li v-for="(item,index) in list" :key="index">{{ item }}</li>
                    </ul>
                </div>
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
                <!-- 头部样式写入 -->
                <mt-header title="购物">
                    <router-link to="" slot="left">
                        <mt-button icon="back">返回</mt-button>
                    </router-link>
                    <mt-button icon="more" slot="right"></mt-button>
                </mt-header>
                <!-- 引入头部选型卡组件 -->
                <daohangz></daohangz>
            </mt-tab-container-item>
            <mt-tab-container-item id="3">
                <!-- 头部样式写入 -->
                <mt-header title="购物">
                    <router-link to="" slot="left">
                        <mt-button icon="back">返回</mt-button>
                    </router-link>
                    <mt-button icon="more" slot="right"></mt-button>
                </mt-header>      

                <daohangz></daohangz>

            </mt-tab-container-item>
        </mt-tab-container>
        <!-- 面板结束 -->
    

        <!-- 底部选项卡开始 -->
        <mt-tabbar v-model="xuan" fixed>
            <mt-tab-item id="1">首页</mt-tab-item>
            <mt-tab-item id="2">购物</mt-tab-item>
            <mt-tab-item id="3">我</mt-tab-item>
        </mt-tabbar>
        <!-- 底部选项卡结束 -->

    </div>
</template>
<script>
import daohangz from '@/components/daohang/daohangz.vue'
export default {
    name:'daohang',
    components:{
        daohangz
    },
    data(){
        return {
            // dao:1,
            xuan:1,
            list:120
        }
    },
    methods:{
        loadMore() {
  this.loading = true;
  setTimeout(() => {
    let last = this.list[this.list.length - 1];
    for (let i = 1; i <= 10; i++) {
      this.list.push(last + i);
    }
    this.loading = false;
  }, 2500);
}
    },


    // watch:{
    //     xuan(){ 
    //         switch(this.xuan){
    //             case '1':
    //                 this.$router.push("./jiekou");
    //                 break;
    //                 case '2':
    //                     this.$router.push('./');
    //                     break
    //         }
    //     }
    // }
}
</script>