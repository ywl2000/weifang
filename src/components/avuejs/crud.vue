<template>
    <div>
        <avue-crud :data="data" :option="option" v-model="obj"
               @row-del="rowDel" @row-save="handleRowSave"
               @row-update="handleRowUpdate"
              >
            
        </avue-crud>
        <div style="margin-top: 20px">
            
            <el-button @click="toggleSelection()">取消选择</el-button>
        </div>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        obj:{},
        data: [{
            name:'张三',
            sex:'男',
            date:'1994-02-23 00:00:00'
          }, {
            name:'李四',
            sex:'女',
            date:'1994-02-23 00:00:00'
          }, {
            name:'王五',
            sex:'女',
            date:'1994-02-23 00:00:00'
          }, {
            name:'赵六',
            sex:'男',
            date:'1994-02-23 00:00:00'
          }],
        option:{
          title:'表格的标题',         
          // addBtn:false,  // 是否取消自带新增按钮        
          // addTitle:'wo', // 新增窗口文案          
          // addRowBtn:true,  // 表格行内添加按钮          
          // dateBtn:true,  // 日期组件按钮          
          // dialogFullscreen:true, // 是否为全屏Dialog         
          // expand:true, // 是否展开折叠行
          selection:true,  //行可勾选
          page:false,
          align:'center',
          menuAlign:'center',
          column:[
            {
              label:'姓名',
              prop:'name'
            },
            {
              label:'性别',
              prop:'sex',
              type:'cascader',
              
            },{
              label: "日期",
              prop: "date",
              type: "date",
              format: "yyyy-MM-dd hh:mm:ss",
              valueFormat: "yyyy-MM-dd hh:mm:ss",
            }
          ]
        }
      }
    },

    methods: {
      // 增加按钮
      handleRowSave(row,done,loading) {
        this.data.splice(0, 0, row);
        done();  // 关闭表单
        loading(); // 按钮停止加载
      },
      // 修改按钮
      handleRowUpdate(row,index,done,loading) {
        this.data.splice(index, 1, row);
        done();  // 关闭表单
        loading(); // 按钮停止加载
      },
      // 删除按钮
      rowDel(row, index) {
        this.$confirm('是否删除该条信息？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.data.splice(index, 1);
        });
      },
      toggleSelection(){
        console.log("点击了")
         this.axios.get('https://api.apiopen.top/getImages').then(res=>{
                console.log(res.data)
                this.result=res.data.result
            })
      },
      
    },
    created(){
      console.log(1)
      this.toggleSelection()
    },
    
  }
</script>