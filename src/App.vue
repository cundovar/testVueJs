  <script setup>
  import {ref} from 'vue'
import Apibanque from './components/api/Apibanque.vue';


  const nom="john"
  const count=ref(0)
  const increment=ref(0)
  
  const incrementaion=()=>{
    increment.value++
  }
  setInterval(() => {
    if(count.value >=10){
      count.value=0
    
    }else{
      count.value++
  
    }
  },1000);
  </script>



<template>
 <div>
  

    <router-view></router-view>
  </div>



</template>


<style scoped>

</style>