<template>
    <div class="bandeau w-full mt-14 flex flex-col items-center relative border   h-[31rem] ">
        <div 
         class="  absolute bottom-0  h-28 md:w-5/6  text-white border flex justify-around w-full">
      
             
                   <ButtonRed :logo="['fa', 'newspaper']" customClass="" label="M'actualiser"/>
                   <ButtonRed :logo="['fa', 'folder']" customClass="hidden md:block" label="Gérer mes dossier"/>
                   <ButtonRed :logo="['fa', 'laptop']" customClass="hidden lg:block " label="M'inscrire"/>
                   <ButtonRed :logo="['fa', 'store'] " customClass="hidden lg:block " label="Allocation et aides"/>
                   <ButtonRed :logo="['fa', 'graduation-cap']" customClass="hidden lg:block " label="trouver ma formation"/>
                   <ButtonRed :logo="['fa', 'list']" customClass="hidden lg:block " label="explorer les services en ligne de l'emploi"/>
                   


    <ButtonRed customClass="relative" @click="togglesServices" :logo="['fa','ellipsis']" label="plus de services"/>


<div v-if="isServiceVisible" class="z200 absolute 2xl:right-10 xl:right-9 md:right-16 lg:right-2  top-14 max-md:hidden border bg-white w-32">
plus de services dispo
</div>



          
        </div>


        <div
            class=" z100 h-full md:w-3/6 sm:w-4/6 max-sm:w-5/6  sm:mt-9  w-full border-green-400 flex-col space-y4 p-5 top-0 absolute m-auto ">


            <div class="max-sm:p-5">
                <h1 class="text-3xl text-center text-white "> 1 073 968 offres d'emploi disponibles</h1>
            </div>

            <div class="search-container space-x-1 m-auto  flex">
                <div class="space-y-2 w-11/12">
                    <input class="input-item flex items-center w-full text-stone-500 text-[0.8rem] " type="text" placeholder="Métier, compétence, mot-clé, n° d'offre" ></input>
                    <input class="input-item flex items-center w-full text-stone-500 text-[0.8rem]   " type="text" placeholder="Lieu de travail" ></input>
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
import "@/icons/icons"
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';


export default {
    name: "Bandeau",
    components:{
        ButtonRed,
        FontAwesomeIcon
    }, data(){
        return{
            isServiceVisible:false
        }
    },
    methods:{
        togglesServices(){
            this.isServiceVisible=!this.isServiceVisible
        }
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
html,body {
    min-width: 20rem !important;
}
</style>