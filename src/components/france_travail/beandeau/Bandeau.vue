<template>
    <div class="bandeau w-full  relative bg-red-400   h-[31rem] ">
        <div class="absolute bottom-0 h-20  text-white border flex justify-around w-full">
      
                <div class="transform -translate-y-1/2 ">
                   <ButtonRed label="M'actualiser"/>

                </div>


                <div class="transform -translate-y-1/2 ">
                   
                  <ButtonRed label="plus de services"/>
                   
                </div>


          
        </div>


        <div
            class=" z100 h-full  w-full flex-col space-y-10 p-5 top-0 absolute m-auto border flex justify-center items-center">


            <div class="mt-">
                <h1 class="text-3xl text-white "> 1 073 968 offres d'emploi disponibles</h1>
            </div>

            <div class="search-container space-x-2 flex">
                <div class="space-y-2">
                    <div class="input-item">Métier, compétence, mot-clé, n° d'offre</div>
                    <div class="input-item">Lieu de travail</div>
                </div>


                <button class="search-btn">🔍</button>
            </div>

            <p class="">
                rechercher des offres par regios ou pas secteur d'activité
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
    border-radius: 5px;
}

.search-btn {
    background: #ff4d4d;
    color: white;
    border: none;
    padding: 15px;
    border-radius: 5px;
    cursor: pointer;
}
</style>