<template>
    <div id="index">
        <headers></headers>
        <router-view />
        <router-link to="/web" >index</router-link>
        <router-link to="/data" >data</router-link>
        <router-link to="/foo/1" >other</router-link>
        <router-link to="/module" >module</router-link>
        <router-link to="/socket" >socket</router-link>
        <a v-if="token != null" class="logout" v-on:click="logout">退出</a>
        <footers></footers>
    </div>
</template>
<script>
import header from '@/pages/common/header';
import footer from '@/pages/common/footer';

export default {
    created(){
        
    },
    methods:{
        logout(){
            localStorage.removeItem("token");
            this.$toast.center('退出成功');
            this.$router.push({
                path: '/login/index'
            });
        }
    },
    data(){
        return{
            token: localStorage.getItem('token')
        };
    },
    components: {
        'headers': header,
        'footers': footer
    },
}
</script>
<style>
h1{text-align: center;}
.logout{cursor: pointer;}
</style>

