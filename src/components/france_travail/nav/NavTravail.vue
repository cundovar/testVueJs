<template>
<nav class=" w-full h-14 flex  border">

    <div class="w-2/3 border flex">
    <div class="border w-14 flex h-14">
        <div @click="toggleMenu" class="">
            burger
        </div>
        <div class="max-xl:hidden"></div>
        </div>
    <div class="border w-16 h-14">
        <img class="" src="/public/images/logoR.png"/>
    </div>
    
    <div class="border w-36 ">
        <img class=" w-full h-full object-cover" src="/public/images/logo.webp"/>
    </div>

    <div class="flex">
        <div>
            vide

        </div>
        <div class="max-xl:hidden">
            <img src="/public/images/banniere.gif" alt="">
        </div>

    </div>

</div>


<div class="border w-1/3">connect</div>
  
</nav>



</template>

<script>
import { eventBus } from '@/eventBus';

export default{
    name:'NavTravail',
    methods:{
        toggleMenu(){
            eventBus.emit("toggle-menu")
        }
    }
    
}


</script>