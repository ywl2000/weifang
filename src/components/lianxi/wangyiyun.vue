<template>
    <div>
        <div class="box">
            <!-- 头开始 -->
            <div class="header">
                <div class="header_left">悦听</div>
                <div class="header_right"><input type="text" v-model="query"><button @click="dianji()">确定</button></div>
            </div>
            <!-- 头结束 -->
            <!-- 内容开始 -->
            <div class="center">
                <div class="center_left">
                    <!-- <textarea name="" id="" cols="1" rows="1">
                        2222222222222222222222222222222222222222222222222222222222222222222
                    </textarea> -->
                    <ul v-for="(value,key) of music" :key="key">
                        <li @click="fang(value.id)">{{value.name}}</li>
                        <li v-if="value.mvid!=0" @click="playmv(value.mvid)">mv</li>
                    </ul>
                </div>
                <div class="center_center">
                    <!-- <div class="center_center_tu"> -->
                        <img :src="tu" alt="">
                    <!-- </div> -->
                    
                </div>
                <div class="center_right">
                    <p style="margin-top:5px;margin-bottom:10px">热门歌曲 </p>
                    <div class="center_right_tou" v-for="(value,key) of ping" :key="key">
                        <p class="right_tou_1" style="margin-left:10px">
                            <img :src="value.user.avatarUrl" alt="">
                        </p>
                        <p class="right_tou_2" style="margin-left:10px">{{value.user.nickname}}<br>
                            <span>{{value.content}}</span>
                        </p>
                    
                        
                    </div>
                </div>
            </div>
            <!-- 内容结束 -->
            <!-- 底部开始 -->
            <div class="button">
                <audio @click="play()" :src="yin" controls autoplay loop></audio>
            </div>
            <!-- 底部结束 -->
            <div class="mv" v-show="isshow">
                <video controls="controls" :src="mvurl"></video>
            </div>
        </div>
        <!-- mv -->

    </div>
</template>
<script>
export default {
    data(){
        return {
            query:'',
            // 歌单
            music:[],
            // 歌曲播放
            yin:{},
            // 图片专辑
            tu:'',
            // 歌曲品论
            ping:[],
            // mv影藏
            isshow:false,
            // mv地址
            mvurl:''
        }
    },
    methods:{
        dianji(){
                this.axios.get('https://autumnfish.cn/search?keywords='+this.query).then((res)=>{
                    console.log(res)
                    this.music=res.data.result.songs
                })
            },
        // 歌曲播放
    fang(mus){
        // console.log(mus)
        this.axios.get('https://autumnfish.cn/song/url?id='+mus).then((res)=>{
            // console.log(res.data.data)
            this.yin=res.data.data[0].url
            })

            // 专辑封面 https://autumnfish.cn/song/detail
            this.axios.get('https://autumnfish.cn/song/detail?ids='+mus).then((res)=>{
                // console.log(res.data.songs[0].al.picUrl)
                this.tu=res.data.songs[0].al.picUrl
            })

            // 评论 https://autumnfish.cn/comment/hot?type=0
            this.axios.get('https://autumnfish.cn/comment/hot?type=0&id='+mus).then((res)=>{
                console.log(res)
                this.ping=res.data.hotComments
            })
        },
        play(){
            console.log(1)
        },
        pause(){
            console.log(pause)
        },

        // mv
        playmv(mvid){
            this.axios.get('https://autumnfish.cn/mv/url?id='+mvid).then((res)=>{
                console.log(res.data.data)
                this.isshow=true
                // this.mvurl=res.data.data.url
            })
        }


    },
}
</script>
<style stylus>
    .box{
        width: 800px;
        height: 516px;
        border: 2px solid rgb(247, 149, 22);
        margin: 100px auto;
    }
    .header{
        width: 100%;
        height: 60px;
        background-color: rgb(86, 156, 247);
        line-height: 60px;
        display: flex;
        justify-content: space-between;
    }
    .header_left{
        margin-left: 10px;
    }
    .center_left>ul>li{
        width: 100%;
        height: 25px;
        margin-bottom: 10px;
        /* background-color: aqua; */
        cursor:pointer;
    }
    .header_right{
        margin-right: 50px;
    }
    .header_right>input{
        width: 300px;
        height: 25px;
        border-radius: 20px;
        /* border-width: 0; */
        border: 0;
        outline: 0;
    }
    .header_right>button{
        border-radius: 20px;
        height: 25px;
        border: 0;
        outline: 0;
    }

    .center{
        width: 100%;
        height: 400px;
        border-bottom: 1px solid red;
        display: flex;
    }
    .center_center{
        width: 100%;
        height:  400px;
    }
    .center_center>img{
        display: block;
        width: 200px;height: 200px;
        border-radius: 50%;
        margin: 100px auto;
    }
    .center_left{
        width: 30%;
        border-right: 1px solid rgb(8, 168, 75);
        overflow: hidden;
    }
    .center_center{
        width: 40%;
        border-right: 1px solid rgb(8, 168, 75);
    }
    .center_right{
        width: 30%;
        overflow: hidden;
    }
    .center_right_tou{
        width: 100%;
        display: flex;
    }
    .right_tou_1>img{
        width: 30px;height: 30px;
        border-radius: 50%;
    }
    .right_tou_2>span{
        font-size: 12px;
        display: block;
        margin-top: 10px;
        margin-bottom: 10px;
    }
    .center_right>textarea{
        width: 97%;
        height: 393px;
        /* 取消拉伸效果 */
        resize: none;
        /* 没有水平滚动条 */
        overflow-x:hidden;

    }

    .button{
        width: 100%;

    }
    .button>audio{
        width: 100%;
        background-color: rgb(68, 182, 248);
    }

    .mv{
        width: 500px;
        height: 200px;
        border: 1px solid red;
    }
    .mv>video{
        width: 100%;
        height: 200px;
    }
</style>