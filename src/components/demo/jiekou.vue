<template>
    <div>
       
        <div>
            <p v-show="show">滴滴</p>
            <button @click="dd()">点击</button>
        </div>

        <div @click="to()">
            {{name}},
            <!-- {{result}} -->
            <!-- <img :src="result" alt="松鼠"> -->
        </div>
        <div @click="to2()">
            app
        </div>

        <div class="d1" v-for="(value,key) of result" :key="key">
            <div>{{value.id}}</div>
            <img :src="value.img" alt="松鼠">
            <p>{{value.time}}</p>
            <!-- <h1>{{result}}</h1> -->
           
        </div>


        <h1>年龄{{this.$store.state.age}}</h1>

        <!-- 以上测试 -->

        <div>
            
        </div>


    </div>
</template>

<script>

export default {

    data(){
        return{
            name:'点击',
            result:'',
            show:true,
            city:''
        }
    },
    methods:{
        dd(){
            this.show=!this.show
        },
        to(){
            this.axios.get('https://api.apiopen.top/getImages').then(res=>{
                console.log(res.data)
                this.result=res.data.result
            })
        },
        to2(){
            this.axios.get('http://localhost:8089   ').then(res=>{
                console.log(res.data)
            }).catch(error=>{
                console.log('失败')
            })
        },
        // to2(){
        //     this.axios.get('http://localhost:3000/search?keywords=%E6%B5%B7%E9%98%94%E5%A4%A9%E7%A9%BA').then(res=>{
        //         console.log(res.data)
        //     })
        // },
        // to2(){
        //     this.axios.get('https://blog.csdn.net/ddx2019/article/details/104972089/').then(res=>{
        //         console.log(res.data)
        //     })
        // },
    },
    // beforeCreate(){
    //     console.log(`创建前...`)
    //     this.axios.get("https://api.apiopen.top/getImages",{

    //     }).then(res=>{
    //         console.log(res.data)
    //         this.result=res.data.result
    //     })
    // },
    // created(){
        
    //     console.log(`创建后...`)
    // },

}
</script>
<style  scoped>
.d1{
    width: 400px;
    height: 400px;
    border: 1px solid red;
}
img{
    width: 400px;
    height: 400px;
}
</style>