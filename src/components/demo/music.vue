<template>
    <div>
        <div>
            <input type="text" v-model="query"><button @click="dianji()">确定</button>
            <p v-for="(value,key) of music" :key="key" @click="bofang(value.id)">
                {{value.name}}
            </p>
            
        </div>
        <audio :src="yin" controls  pool></audio>
    </div>
</template>
<script>
export default {
    data(){
        return {
            query:'',
            music:[],
            yin:{}
        }
    },
    methods:{
        dianji(){
            this.axios.get('https://autumnfish.cn/search?keywords='+this.query).then((res)=>{
                // console.log(res)
                this.music=res.data.result.songs
            })
        },
        bofang(mus){
            console.log(mus)
            this.axios.get('https://autumnfish.cn/song/url?id='+mus).then((res)=>{
                console.log(res.data.data)
                this.yin=res.data.data[0].url
            })
        }
    },

}
</script>