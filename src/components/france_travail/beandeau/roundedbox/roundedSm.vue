<script>
import ButtonRed from '@/components/common/ButtonRed.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import "@/icons/icons"



export default{
    name:"RoundedSm",
    components:{
        ButtonRed,
        FontAwesomeIcon
    }
}


</script>



<template>

<div  class="  h-full flex-wrap pt-36  flex items-start  justify-around w-full">

    <div class="flex flex-col   m-3  cursor-pointer active:border   w-20 justify-center items-center">
        <div class="h-20 w-20 rounded-full bg-red-500  flex flex-col justify-center items-center">
            <font-awesome-icon :icon="['fa', 'graduation-cap']"  />
        </div>
        <div>
            <p class="text-center text-white">Me former</p>
        </div>

    </div> 

    <div class="flex flex-col   m-3  w-20 cursor-pointer active:border    justify-center items-center">
            <div class="h-20 w-20 rounded-full bg-red-500  flex flex-col justify-center items-center">
                <font-awesome-icon :icon="['fa', 'building']"  />
            </div>
            <div>
                <p class="text-center text-white">Créer une entreprise</p>
            </div>
        </div>

 


        <div class="flex flex-col   m-3  w-20 cursor-pointer active:border    justify-center items-center">
            <div class="h-20 w-20 rounded-full bg-red-500  flex flex-col justify-center items-center">
                <font-awesome-icon :icon="['fa', 'store']"  />
            </div>
            <div>
                <p class="text-center text-white">Droit à l'erreur</p>
            </div>
        </div>


 



        <div class="flex flex-col   m-3  w-20 cursor-pointer active:border   justify-center items-center">
            <div class="h-20 w-20 rounded-full bg-red-500  flex flex-col justify-center items-center">
                <font-awesome-icon :icon="['fa', 'address-book']"  />
            </div>
            <div>
                <p class="text-center text-white"> Contact</p>
            </div>
        </div>


    <div class="flex flex-col   m-3  cursor-pointer active:border    w-20 justify-center items-center">
        <div class="h-20 w-20 rounded-full bg-red-500  flex flex-col justify-center items-center">
            <font-awesome-icon :icon="['fa', 'globe']"  />
        </div>
        <div>
            <p class="text-center text-white">Mes service en ligne</p>
        </div>
    </div>


    
    <div class="flex flex-col  m-3   cursor-pointer active:border    w-20 justify-center items-center">
        <div class="h-20 w-20 rounded-full bg-red-500  flex flex-col justify-center items-center">
            <font-awesome-icon :icon="['fa', 'crosshairs']" />
        </div>
        <div>
            <p class="text-center text-white">Mon parcour info</p>
        </div>
    </div>




    <div class="flex flex-col  m-3   cursor-pointer active:border    w-20 justify-center items-center">
        <div class="h-20 w-20 rounded-full bg-red-500  flex flex-col justify-center items-center">
            <font-awesome-icon :icon="['fas', 'briefcase']"  />
        </div>
        <div>
            <p class="text-center text-white">Découvrir le marché du travail </p>
        </div>
    </div>
</div>

</template>