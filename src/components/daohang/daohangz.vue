<template>
    <div>
        <!-- 头部选项卡开始 -->
        <mt-navbar v-model="dao">
            <mt-tab-item id="1">a</mt-tab-item>
            <mt-tab-item id="2">b<big></big></mt-tab-item>
            <mt-tab-item id="3">c</mt-tab-item>
        </mt-navbar>

        <mt-tab-container v-model="dao">
            <mt-tab-container-item id="1">1</mt-tab-container-item>
            <mt-tab-container-item id="2">2</mt-tab-container-item>
            <mt-tab-container-item id="3">3</mt-tab-container-item>
        </mt-tab-container>
        <!-- 头部选项卡结束 -->
    </div>
</template>
<script>
export default {
    data(){
        return{
            dao:1
        }
    }
}
</script>