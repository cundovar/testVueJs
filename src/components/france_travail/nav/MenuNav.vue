<script>
import { eventBus } from '@/eventBus';
import { Menu } from '@/object/ObjectMenuNav';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import "@/icons/icons"
export default{
    name:"MenuNav",
    data(){
        return{
            isMenuVisible:false,
            Menu
        }
    },
    mounted(){
        eventBus.on("toggle-menu",()=>{
            this.isMenuVisible=!this.isMenuVisible
        })
    },
    methods:{
        toggleMenu() {
      eventBus.emit("toggle-menu");
    }
    },
    components:{
        FontAwesomeIcon
    }
}



</script>



<template>
 
 <div v-if="isMenuVisible" class=" pb-20   bg-white max-sm:w-full h-dvh  fixed inset-y-16 w-4/12 z200 " style=" overflow-y: auto;">
<div class="w-11/12 m-auto mt-5  mb-3">
<div class="absolute right-2 active:border" @click="toggleMenu"   >
    <font-awesome-icon :icon="['fas', 'xmark']" size="xl" style="color: #6f7276;"/>
</div>
    <div class="mb-6" v-for="menus in Menu" :key="menus.title" >
        <div class="border-b-2   pb-3 ">
            <h4> {{ menus.title }}  </h4>
        </div>
        <div class=" mt-2">
            
            <div class="w-10/12 m-auto flex items-center p-2 border-b space-x-7" v-for="(subTitle, index) in menus.subTitle" :key="index">
                <div class=" w-10 flex justify-center items-center">
                    <font-awesome-icon :icon="subTitle.icon" size="xl" :style="{ color: subTitle.color || '#8f8f8f' }" />
                   
                </div>
        <p class="text-sm">{{ subTitle.text }}</p>
      </div>
            

        </div>
    </div>


</div>

 </div>



</template>