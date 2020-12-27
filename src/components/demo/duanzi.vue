<template>
    <div>
        <mt-header title="段子">
            <router-link to="/duanzi" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
            <mt-but icon="more" slot="right">更多</mt-but>
        </mt-header>
        <div v-for="(valur,key) of result" :key="key" >
            <!-- 头像 -->
            <div class="haned" >
                <div class="haned_left">
                    <img :src="valur.header" alt="">
                </div>
                <div class="haned_right">
                    <p>{{valur.name}}</p>
                </div>
            </div>
            <!-- 头像结束 -->
            <!-- 标题开始 -->
            <div class="biao">{{valur.text}}</div>
            <!-- 标题结束 -->
            <!-- 图片开始 -->
            <div class="tu">
                <img :src="valur.images" alt="">
            </div>
            <!-- 图片结束 -->
            <!-- 评论开始 -->
            <div class="ping" @click="duanzi()">
                <img src="../../assets/pinglun.png" alt="">
            </div>
            <!-- 评论结束 -->
        </div>    
    </div>
</template>
<script>
export default {
    data(){
        return {
            // 接受返回的数据
            result:[]
        }
    },
    methods:{
        duanzi(){
            this.$router.push('/ceshi')
        }
    },
    // 创建后
    created(){
        this.axios.get("https://api.apiopen.top/getJoke?page").then((res)=>{
            console.log(res.data.result);
            this.result=res.data.result;
        })
        
    },
}
</script>
<style stylus>
    .haned{
        display: flex;
        height: 50px;
    }
    .haned_left{
        width: 50px;
        height: 50px;
        /* border: 1px solid red; */
        border-radius: 5px;
    }
    .haned_left>img{
        width: 100%;
        height: 50px;
    }
    .haned_right{
        line-height: 50px;
    }

    .biao{
        width: 100%;
        /* height: 40px; */
        /* border: 1px solid red; */
        line-height: 30px;
    }

    .tu{
        width: 220px;
        height: 380px;
        /* border: 1px solid red; */

    }
    .tu>img{
        width: 100%;
        height: 380px;
        border-radius: 10px;
    }

    .ping{
        width: 100%;
        height: 50px;
        margin-bottom: 20px;
        margin-top: 10px;
    }
</style>