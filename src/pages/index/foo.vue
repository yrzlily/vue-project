<template>
    <div id="foo">
        foo{{$route.params.id}}
        <keep-alive>
        <ul>
            
            <li v-for="(value, item,key) in data" v-bind:key="key">
                {{value.true_name}}
            </li>
            
        </ul>
        </keep-alive>
    </div>
</template>
<script>

export default {
    data(){
        return{
           data:null
        }
    },
    created(){
        let that = this;
        this.http.get('index',{},response=>{
            console.log(response)
            if(response.code == 1){
                
                this.data = response.data;
                console.log(this.data);
            }else{
                this.$toast.center(response.msg);
            }
        })
    },
}
</script>
<style>

</style>

