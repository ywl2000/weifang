<template>
    <div>
        <input type="text" v-model="yong" placeholder="请输入用户名"><br>
        <input type="text" v-model="mi" placeholder="请输入密码"><br>
        <button @click="deng">登陆</button><br><br>
        <input type="text" v-model="zhuy" placeholder="请填写用户名">
        <input type="text" v-model="zhum" placeholder="请填写密码">
        <input type="text" v-model="zhux" placeholder="请填写邮箱">
        <button @click="chu">注册</button>
        <br>
        <br>
            <mt-field 
      type="password"
      label="密码"
      :state="passwordState"
      disableClear
      placeholder="请输入密码"
      v-model="password"
      @blur.native.capture="checkPassword">
    </mt-field> 
    </div>
</template>
<script>
export default {
    data(){
        return {
            mi:'',
            yong:'',
            zhuy:'',
            zhum:'',
            zhux:''
        }
    },
    methods:{
        deng(){
        this.axios.get(`https://api.apiopen.top/developerLogin?name=${this.yong}&passwd=${this.mi}`).then((res)=>{
            if(res.data.code==200){
                console.log("哦了")
                this.$messagebox('登陆成功')
                this.passwordState = 'success'
                // this.$router.push('')
            }else{
                console.log("错了")
                this.$messagebox('登陆失败')
            }
            console.log(res.data.code);
            // this.result=res.data.result;
            })
           
        },
        // 用户注册
        chu(){
            this.axios.get(`https://api.apiopen.top/developerRegister?name=${this.zhuy}&passwd=${this.zhum}&email=${this.zhux}`).then((res)=>{
                console.log(res.data)
            })
        }
    }
}
</script>

<style scoped>
    input{
        width: 300px;
        height: 40px;
    }
    button{
        width: 300px;
        height: 60px;
    }
</style>