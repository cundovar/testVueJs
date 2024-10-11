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
    components:{
        FontAwesomeIcon
    }
}



</script>



<template>
 
 <div v-if="isMenuVisible" class=" pb-20  bg-white max-sm:w-full h-dvh  fixed inset-y-14 z200 " style=" overflow-y: auto;">
<div class="w-11/12 m-auto mt-5  mb-3">

    <div class="mb-6" v-for="menus in Menu" :key="menus.title" >
        <div class="border-b-2   pb-3 ">
         
         <h4> {{ menus.title }}  </h4>
        </div>
        <div class=" border">

            <div class=" w-10/12 m-auto flex items-center p-2 border-b"  v-for="(subTitle, index) in menus.subTitle" :key="index">
                <p class="text-sm">
                 <div class="">
                     <font-awesome-icon :icon="menus.icon" size="xl" />
                </div>
                 {{ subTitle }}
    
             </p> 
            </div>

        </div>
    </div>


</div>

 </div>



</template>