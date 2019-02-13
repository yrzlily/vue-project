<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',

  methods:{
    
    changeShow:function(){
      data.show = false;
    }
  },
  data(){
    return{
      token:localStorage.getItem('token'),
    }
  }
}
</script>

<style>

</style>
