<template>
    <div id="socket">
        <button v-on:click="sendMessage">sendMessage</button>
    </div>
</template>
<script>
export default {
    data(){
        return{
            websock:''
        }
    },
    methods:{
        sendMessage(){
            this.websock.send('发送信息');
        },
        linkweb(){
            const wsuri = "ws://127.0.0.1/api/index/websocket";
            this.websock = new WebSocket(wsuri); 
            // this.websock.onopen = function(){
            //     this.websock.send(localStorage.getItem('token'));
            // }
            let message = { 
                time: new Date(), 
                text: "Hello world!", 
                clientId: "asdfp8734rew" 
            };

            this.websock.onopen = function(data){
                console.log(data);
            }

            this.websock.onmessage = function(data){
                console.log(data);
            }

            this.websock.onerror = function(data){
                console.log(data);
            }

            // this.websock.send(JSON.stringify(message)); 
            // this.websock.onmessage = function(event){
            //     var data = event.data; 
            //     console.log(data);
            // }
        }
    },
    created(){
        console.log(this.token);
        this.linkweb();
    }
}
</script>
<style>

</style>
