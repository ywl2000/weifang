<template>
    <div>
        <avue-crud ref="crud" :option="option" :data="data" @row-update="addUpdate" @row-click="handleRowClick">
            <template slot="menuLeft">
                <el-button @click="addRow" size="small">添加10条</el-button>
            </template>
            
            <!-- <template slot="menu" slot-scope="{row,index,size,type}">
                <el-button @click="addBreakRow(index)" :size="size" :type="type">向上添加</el-button>
                <el-button @click="addNextRow(index)" :size="size" :type="type">向下添加</el-button>
            </template> -->
        </avue-crud>
    </div>
</template>

<script>
export default {
    data(){
        return {
        data:[{
            id:0,
            name:'张三',
            sex:1,
            $cellEdit:true
        },{
            id:1,
            name:'李四',
            sex:0,
        }],
        option:{
            addBtn:false,
            // 编辑
            editBtn:false,
            // 自己添加的新增按钮
            addRowBtn:true,
            // 自定义编辑
            cellBtn:true,
            // menuWidth:250,
            border:true,
            column: [{
                label:'姓名',
                prop: 'name',
                // 是否显示input框
                cell: true,
                rules: [
                {
                    required: true,
                    message: '请输入姓名',
                    trigger: 'blur'
                }
                ]
            },{
                label:'性别',
                // prop: 'sex',
                type:'select',
                dicData:[{
                    label:'男',
                    value:0
                },{
                    label:'女',
                    value:1
                }],
                cell: true
            },
            {
                label:'开关',
                prop: 'switch',
                // type:'switch',
                type:'input',
                cell: true
            },
            {
                label:'开关2',
                prop: 'switch',
                // type:'switch',
                type:'input',
                cell: true
            }
            ]
        }
        }
    },
    methods:{
        // 编辑数据后确定触发该事件
        addUpdate(form,index,done,loading){
            this.$message.success('模拟网络请求')
            setTimeout(() => {
                this.$message.success('关闭按钮等待')
                loading()
            }, 1000)
            setTimeout(() => {
                this.$message.success(
                '编辑数据' + JSON.stringify(form) + '数据序号' + index
                )
                done()
            }, 2000)
        },
        // 添加10条数据
        addRow() {
            this.$message.success('正在添加，请稍后')
            setTimeout(() => {
                for (let i = 0; i < 10; i++) {
                this.$refs.crud.rowCellAdd({
                    name: '',
                });
                }
            }, 500)
        },
        // 向下添加
        addNextRow(index){
            this.data.splice(index+1,0,{
                $cellEdit:true
            })
        },
        // 向上添加
        addBreakRow(index){
            this.data.splice(index==0?0:(index-1),0,{
                $cellEdit:true
            })
        },
        // 当某一行被点击时会触发该事件
        handleRowClick(row, event, column) {
            console.log(row)
            console.log(event)
            console.log(column)
            this.$message({
            showClose: true,
            message: '序号' + row.$index,
            type: 'success',
            });
        }
    }
}
</script>