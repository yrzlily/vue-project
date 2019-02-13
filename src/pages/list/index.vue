<template>
    <div id="list">
        <ul>
            <template v-for="(val) in list">
                <li :key="val.id">{{val.goodName}}</li>
            </template>
        </ul>
        <button type="button" v-on:click="sendParent" >sendParent</button>
    </div>
</template>
<script>
export default {
    data(){
        return{
            list:[]
        };
    },
    methods:{
        sendParent(){
            this.$parent.now = 2;
            console.log(this.$parent.now = 2);
        }
    },
    created(){
        var that = this;
        this.http.get('/index/lists',{
            
        },response=>{
            console.log(response);
            that.list = response;
        });

    }
}
</script>
<style>

</style>
