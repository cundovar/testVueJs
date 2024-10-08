<script setup>
import Apibanque from '@/components/api/Apibanque.vue';
import {ref} from 'vue'



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


<h1>bonjour <span class="text-pink-600">{{ nom.toUpperCase() }} </span> </h1>
<p>comment aller vous ?</p>
<p>comteur = {{ count }}</p>
<div class="space-x-5 flex">

<button class="border p-2 focus:text-purple-500 text-2xl" v-on:click="incrementaion" >+  </button> <span class="border rounded-full w-10 h-10 flex justify-center items-center bg-violet-300 p-3 "> 
  <div class="relative  h-4 w-2" >
    <p class="absolute bottom-0 m-0 p-0"> {{ increment }}</p> 

  </div>

</span> <button type="button" class="text-2xl  border p-2" @click="increment--">-</button>
</div>

<Apibanque/>

</template>


<style scoped>

</style>