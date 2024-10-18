<script>
import "@/icons/icons"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
const text=[
    
]
export default{
    name:"RoundedXl",
    components:{
          FontAwesomeIcon
    }
}

</script>


<template>
    <div class="flex flex-col items-start justify-center p-5 space-y-3">
<div class="flex items-start justify-center space-x-7">



    <div class="flex flex-col cursor-pointer active:border    w-20 justify-center items-center">
        <div class="h-10 w-10 rounded-full bg-red-500  flex flex-col justify-center items-center">
            <font-awesome-icon :icon="['fa', 'globe']"  />
        </div>
        <div>
            <p class="text-center">Mes service en ligne</p>
        </div>
    </div>


    
    <div class="flex flex-col cursor-pointer active:border    w-20 justify-center items-center">
        <div class="h-10 w-10 rounded-full bg-red-500  flex flex-col justify-center items-center">
            <font-awesome-icon :icon="['fa', 'crosshairs']" />
        </div>
        <div>
            <p class="text-center">Mon parcour info</p>
        </div>
    </div>




    <div class="flex flex-col cursor-pointer active:border    w-20 justify-center items-center">
        <div class="h-10 w-10 rounded-full bg-red-500  flex flex-col justify-center items-center">
            <font-awesome-icon :icon="['fas', 'briefcase']"  />
        </div>
        <div>
            <p class="text-center">Découvrir le marché du travail </p>
        </div>
    </div>



    <div class="flex flex-col cursor-pointer active:border   w-20 justify-center items-center">
        <div class="h-10 w-10 rounded-full bg-red-500  flex flex-col justify-center items-center">
            <font-awesome-icon :icon="['fa', 'graduation-cap']"  />
        </div>
        <div>
            <p class="text-center">Me former</p>
        </div>

    </div>

</div>

<div class="flex items-start space-x-7 justify-center">

    <div class="flex flex-col w-20 cursor-pointer active:border    justify-center items-center">
            <div class="h-10 w-10 rounded-full bg-red-500  flex flex-col justify-center items-center">
                <font-awesome-icon :icon="['fa', 'building']"  />
            </div>
            <div>
                <p class="text-center">Créer une entreprise</p>
            </div>
        </div>

 


        <div class="flex flex-col w-20 cursor-pointer active:border    justify-center items-center">
            <div class="h-10 w-10 rounded-full bg-red-500  flex flex-col justify-center items-center">
                <font-awesome-icon :icon="['fa', 'store']"  />
            </div>
            <div>
                <p class="text-center">Droit à l'erreur</p>
            </div>
        </div>


 



        <div class="flex flex-col w-20 cursor-pointer active:border   justify-center items-center">
            <div class="h-10 w-10 rounded-full bg-red-500  flex flex-col justify-center items-center">
                <font-awesome-icon :icon="['fa', 'address-book']"  />
            </div>
            <div>
                <p class="text-center"> Contact</p>
            </div>
        </div>


</div>









    </div>


</template>