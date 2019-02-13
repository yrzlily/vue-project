<template>
    <div id="data">
        <form>
            <div v-for="(val, key) in data" :key="key" class="textbox">
                <input type="text"  v-model="val.username" />
                <input type="number" v-model="val.age" />
                <label><input type="radio" v-model="val.sex" value="1" />男</label>
                <label><input type="radio" v-model="val.sex" value="0" />女</label>
                <div>
                    <div>favorite</div>
                    <template v-for="(ves, index) in val.favorite" >
                        <div :key="ves.id">
                            <input type="text" v-model="ves.name" />
                            <input type="number" v-model="ves.star" />
                            <template v-if="index==0">
                                <button v-on:click="add(key, index)" type="button" class="add">+</button>
                            </template>
                            <template v-else>
                                <button v-on:click="del(key, index)" type="button" class="remove">-</button>
                            </template>
                            <input v-on:change="imgUpload(key,index)" type="file" multiple />
                        </div>
                    </template>
                </div>
                <div>
                    <div v-if="val.family">family</div>
                    <div v-for="(ves, kes) in val.family" :key="kes">
                        <input type="text" v-model="ves.name" />
                        <input type="number" v-model="ves.age" />
                    </div>
                </div>
            </div>
            <input type="button" value="put" v-on:click="put" />
        </form>
    </div>
</template>
<script>
export default {
    data(){
        return{
            data:[],
            img:'',
        }
    },
    created(){
        let that = this;
        this.http.get('/index/messDate',{},response=>{
            that.data = response;
        });
    },
    computed:{
        
    },
    methods:{
        put:function() {
            console.log(this.data);
        },
        add:function(key, index){
            console.log(this.data[0].favorite)
            this.data[key].favorite.push({
                name: '',
                star: ''
            });
        },
        del:function(key, index){
            this.data[key].favorite.splice(index,1);
        },
        imgUpload:function(key, index){
            let that = this;
            let file = event.target.files[0];
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = function () {

                let formData = new FormData();
                formData.append('file', file);

                that.http.post('/index/upload',formData,response=>{
                    // console.log(response);
                });
                
                if(!that.data[key].favorite[index].img){
                    that.data[key].favorite[index].img = [];
                }
                that.data[key].favorite[index].img = reader.result;
                
            }
        }
    }
}
</script>
<style>
#data .textbox{
    margin-bottom: 15%;
}
</style>
