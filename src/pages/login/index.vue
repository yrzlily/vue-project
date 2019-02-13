<template>
    <div class="Login">
        <div class="textbox">
            <input name="phone" v-model="data.phone" type="text" />
        </div>
        <div class="textbox">
            <input name="password" v-model="data.password" type="password" />
        </div>
        <div class="textbox">
            <input type="button" value="login" v-on:click="getLogin" />
        </div>
        <router-link to="register">register</router-link>
        <router-link to="/data">data</router-link>
    </div>
</template>
<script>
export default {
    data(){
        return{
            data:{
                phone:'13800138000',
                password:'123456'
            }
        }
    },
    beforeCreate(){
        
        if(localStorage.getItem('token')){
            this.$router.push({
                path: '/web'
            });
        }
    },
    created(){
        if(this.$route.params.login == 1){
            this.$toast.center('请登录');
        }
    },
    props:{
        phone:'Number'
    },
    methods:{
        getLogin:function(){
         
            this.http.post('/login/index',this.data,response=>{
                if(response.code == 1){
                    localStorage.setItem('token', response.token);
                    this.$toast.center(response.msg);
                    this.$router.push({
                        path: '/web'
                    });
                }
            });

        }
    }
}
</script>
<style>

</style>

