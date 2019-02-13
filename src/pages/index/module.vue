<template>
    <div id="modules">
        {{first}}
        <input type="text" v-model="title" />
        <router-view />
        <box>23333</box>
        <div class="nav">
            <template v-for="(val, key) in nav">
                <span :key="key">
                    <button :class="now==val.name?'active':''" v-on:click="now=val.name">{{val.name}}</button>
                </span>
            </template>
        </div>
        <keep-alive>
            <component :is="box"></component>
        </keep-alive>
        <div>
            <router-link to="/web">index</router-link>
            <router-link to="/list">list</router-link>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            title: 'title',
            first: 'first',
            nav:[
                {
                    name:1
                },
                {
                    name:2
                },
                {
                    name:3
                }
            ],
            now: 1
        }
    },
    components:{
        box:{
            template: '<div>你\(^o^)/~<slot></slot></div>'
        },
        box1:{
            template: '<div>1\(^o^)/~<slot></slot></div>'
        },
        box2:{
            template: '<div>2\(^o^)/~<slot></slot></div>'
        },
        box3:{
            template: '<div>3\(^o^)/~<slot></slot></div>'
        },
    },
    props:['tran'],
    created(){
        console.log(this.title);
    },
    watch:{
        title:function(newQuestion, oldQuestion){
            console.log([newQuestion, oldQuestion]);
            this.first = 'change';
        }
    },
    computed:{
        sums(){
           return this.title + this.first;
        },
        box(){
            return 'box' + this.now;
        }
    },
    methods:{
        titles:function(){
            return this.title + 'titless';
        }
    }
}
</script>
<style>
.nav .active{background: #000; color: #fff;}
</style>
