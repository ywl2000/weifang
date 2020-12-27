<template>
    <div>
      <el-carousel :interval="4000" type="card" height="400px">
        <el-carousel-item v-for="item in 5" :key="item">
            <h3 class="medium">{{ item }}</h3>
            <!-- <img src="../../assets/timg.jpg" alt=""> -->
        </el-carousel-item>
      </el-carousel>
      <div>
        <button @click="get()">跨域</button>
      </div>
    </div>
</template>

<script>
export default {
  data(){
    return{
      img:'https://qjck-file-web.oss-cn-beijing.aliyuncs.com/2020-11-27/932fa4df-04c1-4b67-8adf-b858845ae256.png'
    }
  },
  methods:{
    get(){
      this.axios.get('https://ocr.tencentcloudapi.com/?Action=QrcodeOCR&ImageUrl=https://qjck-file-web.oss-cn-beijing.aliyuncs.com/2020-11-27/932fa4df-04c1-4b67-8adf-b858845ae256.png&Version=2018-11-19&Region=ap-beijing').then((res)=>{
                    console.log(res)
                    this.music=res.data.result.songs
                })
    }
  }
}
</script>

<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(1) {
    background-color: rebeccapurple;
    background-image: url("../../assets/timg.jpg");
  }
  
  .el-carousel__item:nth-child(2) {
    background-color: red;
    background-image: url("../../assets/timg (4).jpg");
  }
  .el-carousel__item:nth-child(3) {
    background-color: red;
    background-image: url("../../assets/timg (1).jpg");
  }
  .el-carousel__item:nth-child(4) {
    background-color: red;
    background-image: url("../../assets/timg (2).jpg");
  }
  .el-carousel__item:nth-child(5) {
    background-color: red;
    background-image: url("../../assets/timg (3).jpg");
  }

</style>