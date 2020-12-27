<template>
    <div>
        1111
        <p>年龄：{{this.$store.state.age}}</p>
        <button @click="ang()">+</button>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        ang(){
            this.$store.commit('do')
        }
    }
}
</script>