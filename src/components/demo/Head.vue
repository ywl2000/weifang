<template>
    <div>我是头组件
        <div @click="getData()">
            点击
        </div>
    </div>
</template>

<script>
export default {
  name: 'Head',
//   methods:{
//       getData(){
//           this.$axios.get('https://api.apiopen.top/getJoke?type=gif').then(res=>{
//               console.log(res.data)
//           })
//       }
//   }
 
}
</script>