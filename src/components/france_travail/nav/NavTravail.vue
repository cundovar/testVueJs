<template>
<nav class=" w-full h-16 bg-white flex fixed overflow-hidden z200 border">

    <div class="w-2/3 border flex">
    <div class="border w-14 flex h-14">
        <div @click="toggleMenu" class="flex justify-center items-center w-full h-full">
            <font-awesome-icon :icon="['fas', 'bars']"size="xl"  :style="{color:colorIcon}" />
        </div>
        <div class="max-xl:hidden"></div>
        </div>
    <div class="border w-16 h-14 overflow-hidden">
        <img class="" src="/public/images/logoR.png"/>
    </div>
    
    <div class="border w-36 ">
        <img class=" w-full h-full object-cover" src="/public/images/logo.webp"/>
    </div>

    <div class="flex w-full">
      
        <div class="max-xl:hidden w-full flex justify-center items-center">
            <img src="/public/images/banniere.gif" alt="">
        </div>

    </div>

</div>


<div class="border flex justify-end sm:space-x-4 items-center w-1/3">

    <div class="h-10 flex justify-center items-center   z200">
        <font-awesome-icon :icon="['fa', 'user']" size="xl"  :style="{color:colorIcon}" />
            <h6 class="hidden sm:block text-sm ">CONNEXION</h6>
    </div>

    <div class="h-10 flex justify-center items-center ">
        <font-awesome-icon :icon="['fa', 'magnifying-glass']" size="xl" :style="{color:colorIcon}"  />
        <p class="hidden sm:block text-sm ">RECHERCHER</p>
    </div>


</div>
  
</nav>



</template>

<script>
import { eventBus } from '@/eventBus';
import '@/icons/icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
export default{
    name:'NavTravail',
    data(){
        return{
            
            colorIcon:'#8f8f8f'
        }
    },
    methods:{
        toggleMenu(){
            eventBus.emit("toggle-menu")
        }
    },
    components:{
   FontAwesomeIcon
    }
    
}


</script>