<template>
    <div class="bandeau w-full  relative    h-[31rem] ">
        <div class="absolute bottom-0  h-28  text-white border flex justify-around w-full">
      
             
                   <ButtonRed label="M'actualiser"/>

           


              
                   
                  <ButtonRed label="plus de services"/>
                   
            


          
        </div>


        <div
            class=" z100 h-full  w-full border-green-400 flex-col space-y4 p-5 top-0 absolute m-auto ">


            <div class="max-sm:p-5">
                <h1 class="text-3xl text-center text-white "> 1 073 968 offres d'emploi disponibles</h1>
            </div>

            <div class="search-container space-x-1 m-auto   flex">
                <div class="space-y-2 w-11/12">
                    <div class="input-item flex items-center text-stone-500 text-[0.8rem] ">Métier, compétence, mot-clé, n° d'offre</div>
                    <div class="input-item flex items-center text-stone-500 text-[0.8rem]  ">Lieu de travail</div>
                </div>


                <button class=" focus:bg-red-600 search-btn">🔍</button>
            </div>

            <p class=" text-white text-center mt-3 text-[0.8rem]">
                rechercher des offres par regions ou pas secteur d'activité
            </p>

           


        </div>

    </div>

</template>



<script>
import ButtonRed from '@/components/common/ButtonRed.vue';


export default {
    name: "Bandeau",
    components:{
        ButtonRed
    }
}

</script>


<style>
.z100 {
    z-index: 1000;

}
.z200{
   z-index:1001;
}

.bandeau {
    background-image: url("/public/images/home-cover.jpg");
    background-position: 27%;
    /* Centrer l'image */
    background-size: cover;
    /* Pour s'assurer que l'image couvre tout le conteneur */
}

.search-container {}

.input-item {
    background: white;
    border: 1px solid #ccc;
    padding: 10px;
    height: 3.3rem;
    
}

.search-btn {
    background: rgb(255, 89, 80);
    color: white;
    border: none;
    
    padding: 15px;
    border-radius: 0 5px 5px 0px;
    cursor: pointer;
}
</style>