<template>
    <div>
        <div class="tian">天知道</div>
        <div class="sou">
            <input class="input" type="text" v-model="tianqi">
            <button @click="sou()" class="but">搜索</button>
        </div>
        <div class="remen">
            <a href="#tianqi" @click="renmen('北京')">北京</a>
            <a href="#tianqi" @click="renmen('广州')">广州</a>
            <a href="#tianqi" @click="renmen('上海')">上海</a>
            <a href="#tianqi" @click="renmen('郑州')">郑州</a>
        </div>
        <div class="fu">
            <div class="xiang" v-for="(value,key) of xiangqin" :key="key">
                <p>今天天气{{value.type}} {{value.fengxiang}}</p>
                <p>最{{value.high}} 最{{value.low}}</p>
                <p>{{value.date}}</p>
            </div>
                        
        </div>

        
    </div>
</template>
<script>
export default {
    data(){
        return {
            tianqi:'',
            xiangqin:[],
        }
    },
    methods:{
        sou(){
            console.log(this.tianqi)
            this.axios.get('http://wthrcdn.etouch.cn/weather_mini?city='+this.tianqi).then(res=>{
                console.log(res.data.data.forecast)
                this.xiangqin=res.data.data.forecast
            })             

        },
        renmen(tianqi){
            console.log(this.tianqi)
            this.tianqi=tianqi
            // 点击热门城市，然后直接渲染到页面中
            this.sou()
            // console.log(this.sou())
        }
    }
}
</script>



<style scoped>
    .tian{
        font-size: 40px;
        width: 150px;
        margin: 0 auto;
        margin-top: 100px;
        margin-bottom: 50px;
    }   
    .sou{
        width: 360px;
        height: 50px;

        margin: 0 auto;
    }
    .input{
        height: 30px;
        width: 300px;
        border: 2px solid rgb(5, 96, 170);
        margin: 0;
    }
    .but{
        height: 35px;
        margin: 0;
    }
    .fu{

        /* border: 1px solid rgb(103, 21, 151); */
        display: flex;
        justify-content: center;
    }
    .xiang>p{
        width: 200px;height: 100px;
        border: 1px solid rgb(205, 16, 230);
        line-height: 100px;
    }
    .xiang>p:nth-child(1){
        color: rgb(235, 206, 46);
    }
    .xiang>p:nth-child(2){
        color: rgb(235, 206, 46);
    }
    .remen{
        width: 200px;
        margin: 0 auto;
        margin-bottom: 50px;
    }
    .remen>a{
        color: black;
        text-decoration: none;
        margin-left: 10px;
    }
</style>