<template>
    <div>
        <avue-crud :data="data" :option="option" v-model="obj" :before-close="beforeOpen">
            <!--   自定义列-->
            <template slot="name" slot-scope="scope" >
                <el-tag></el-tag>
            </template>
                <!--  自定表单-->
            <template slot-scope="scope" slot="nameForm">
                <el-tag></el-tag>
            </template>
                <!-- 自定义菜单 配置slot卡槽为menuLeft为表单菜单左边位置,卡槽为menuRight为表格菜单右边的位置-->
                <template slot="menuLeft">
                    <el-button type="primary" size="small">自定义按钮</el-button>
                </template>
                <template slot="menuRight">
                    <el-button type="primary" icon="el-icon-edit" circle size="small"></el-button>
                </template>
                <!--  自定义表格里面的操作-->
                <template slot-scope="scope" slot="menu">
                <el-button icon="el-icon-check" size="small">自定义菜单按钮</el-button>
            </template>
        </avue-crud>
    </div>
</template>

<script>
export default {
     data() {
      return {
        obj:{},
        data: [
          {
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
          }
        ],
         // 表格配置
        option:{
          title:'表格的标题',
          height:"300", //表格的高度
          menu:true,    //是否显示操作栏菜单
          align:'center',  // 表格列齐方式
          menuAlign:'center', // 菜单栏对齐方式
          columnBtn:false, //列动态显隐按钮
          refreshBtn:false, // 刷新按钮
          saveBtn:false, // 保存按钮;
          updateBtn:false, // 更新按钮
          cancelBtn:false, // 行编辑取消按钮
          addBtn:false, // 表格新增按钮
          delBtn:false, // 行删除按钮
          editBtn:false, // 行编辑按钮
          column:[
             {
              label:'姓名',
              prop:'name',
              slot:true, // 自定义列
              formslot:true // 自定义表单
            },
            {
              label:'性别',
              prop:'sex'
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
    }
}
</script>