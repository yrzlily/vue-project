<template>
    <div id="Register">
        <div class="textbox">
            <input name="phone" v-model="data.phone" type="text" />
        </div>
        <div class="textbox">
            <input name="password" v-model="data.password" type="password" />
        </div>
        <div class="textbox">
            <input type="button" value="login" v-on:click="getRegister" />
        </div>
        <router-link to="/login/index">login</router-link>
        <router-link to="/data">data</router-link>
    </div>
</template>
<script>
export default {
    data(){
        return{
            data:{
                phone:'',
                password:''
            }
        }
    },
    props:{

    },
    methods:{
        getRegister:function(){
            console.log(this.data);
            this.http.post('/login/register',this.data,response=>{
                console.log(response);
            });

        }
    }
}
</script>
<style>

</style>
