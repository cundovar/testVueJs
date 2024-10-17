<template>
    <nav class=" w-full h-16 bg-white bg-opacity-90 xl border-t  flex fixed overflow-hidden z200 ">

        <div class="w-2/3   h-full   xl flex justify-center items-center">
            <div class=" w-14 flex cursor-pointer mr-3 xl:hidden h-14">
                <div @click="toggleMenu" class="flex focus:border justify-center items-center w-full h-full">
                    <font-awesome-icon v-if="!isMenuVisible" :icon="['fas', 'bars']" size="xl" :style="{ color: colorIcon }" />
                    <font-awesome-icon v-else :icon="['fas', 'xmark']" size="xl" style="color: #6f7276;"/>
                </div>
              
            </div>

            <div class=" max-xl:w-24  h-full xl:mr-3 overflow-hidden">
                <img class="xl:h-20 object-cover h-full w-full" src="/public/images/logoR.png" />
            </div>

            <div class=" w-40 h-full xl:mr-3 ">
                <img class=" w-full  h-full object-cover" src="/public/images/logo.webp" />
            </div>

            <div @click="toggleMenu"  class="  max-xl:hidden cursor-pointer active:border flex justify-center items-center space-x-3  h-14">
                <div class="flex  justify-center items-center w-full h-full">
                    <font-awesome-icon :icon="['fas', 'bars']" size="xl" :style="{ color: colorIcon }" />
                    
                </div>
                <div class="">
                    menu
                </div>
            </div>

            <div class="flex w-full">

                <div class="max-xl:hidden w-full flex justify-end items-end">
                    <img src="/public/images/banniere.gif" alt="">
                </div>

            </div>

        </div>


        <div class=" flex justify-end sm:space-x-4 items-center pr-3 w-1/3">

            <div class="h-10 flex justify-center items-center space-x-3 border-r pr-3  z200">
                <font-awesome-icon :icon="['fa', 'user']" size="xl" :style="{ color: colorIcon }" />
                <h6 class="hidden lg:block text-sm ">Connexion</h6>
            </div>

            <div class="h-10 flex justify-center space-x-3 items-center ">
                <font-awesome-icon :icon="['fa', 'magnifying-glass']" size="xl" :style="{ color: colorIcon }" />
                <p class="hidden lg:block text-sm ">Rechercher</p>
            </div>


        </div>

    </nav>



</template>

<script>
import { eventBus } from '@/eventBus';
import '@/icons/icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
export default {
    name: 'NavTravail',
    data() {
        return {

            colorIcon: '#8f8f8f',
            isMenuVisible: false
        }
    },
    methods: {
        toggleMenu() {
            this.isMenuVisible = !this.isMenuVisible; 
            eventBus.emit("toggle-menu")
        }
    },
    components: {
        FontAwesomeIcon
    }

}


</script>