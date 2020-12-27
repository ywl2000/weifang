<template>
  <div>
      <el-select v-model="add.goodsLocationId" placeholder="货位地址" @change="changeLocationValue">
          <el-option v-for="lo in locations" :label="lo.locationName" :value="lo.id" :key="lo.id"></el-option>
      </el-select>
      <el-select v-model="add.good" @input="input">
        <el-option
            v-for="item in goodtwo"
            :key="item.value"
            :label="item.label"
            :value="item.value">

        </el-option>
      </el-select>

  <!-- <el-input  v-model="model"></el-input> -->
    <el-button @click="subent">确定</el-button>
  </div>
</template>

<script>
export default {
  data(){
    return{
      getid: '',
      getName: '',
      add:{
         goodsLocationId: '',
        model: '',
        good: '',
      },
      locations: [{
          id: '选项1',
          locationName: '黄金糕'
        }, {
          id: '选项2',
          locationName: '双皮奶'
        }, {
          id: '选项3',
          locationName: '蚵仔煎'
        }, {
          id: '选项4',
          locationName: '龙须面'
        }, {
          id: '选项5',
          locationName: '北京烤鸭'
        }],
       
        goodtwo:[
          {
            label: '北京',
            value: '1'
          },
          {
            label: '双高那红',
            value: '2'
          }
        ]
    }
  },
  methods:{

    input(){
      console.log(this.add.good)
    },
    changeLocationValue(val){
      //locations是v-for里面的也是datas里面的值
      let obj = {};
      obj = this.locations.find((item)=>{
        return item.id === val;
      });
      let getName = ''
      this.getName = obj.locationName;
      this.getid = obj.id;
      this.add.good = this.getName;

      console.log(this.getName)
      console.log(this.getid)
      // console.log(this.goodsLocationId)
    },
    subent(){
      let a = {
        goodsLocationId : this.add.goodsLocationId,
        good : this.getid
      }

      setTimeout(() => {
        this.add.good =this.getid;
        console.log(this.add)
      },500)
      setTimeout(() => {
        this.add.good = this.getName
      console.log(this.getName)
      },1000)
      

    }
  }
}
</script>