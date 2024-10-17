<template>
    <div class="bandeau w-full mt-16 flex flex-col  items-center relative   h-[31rem] ">

        <div
            class="absolute w-64 pl-7 max-xl:hidden flex flex-col justify-center space-y-2 bg h-36 rounded-l-3xl right-0 top-36">
            <div
                class=" cursor-pointer border w-full bg4 users rounded-l-full transition-transform duration-300 ease-in-out delay-150 hover:translate-x-4 flex items-center text-white h-14  ">
                <div class="w-2/3  space-x-2 flex pl-2 items-center">
                    <div class=" w-10 h-10  flex justify-center bg-black bg-opacity-40 items-center rounded-full p-1 self-start ">

                        <font-awesome-icon :icon="['fa', 'user']" size="md" :style="{ color: colorIcon }" />
                    </div>
                    <p class="w-3/4 flex justify-start items-start ">
                        Entreprise
                    </p>
                </div>
                <div class="w-1/3  flex justify-end items-center pr-3">
                    <p class="signe"> ></p>
                </div>

            </div>
            <div
                class=" cursor-pointer border w-full bg3 users2 rounded-l-full transition-transform duration-300 ease-in-out delay-150 hover:translate-x-4 flex items-center text-white h-14  ">
                <div class="w-2/3  space-x-2 flex pl-2 items-center">
                    <div class=" w-10 h-10  flex justify-center bg-black bg-opacity-40 items-center rounded-full p-1 self-start ">

                        <font-awesome-icon :icon="['fa', 'user']" size="md" :style="{ color: colorIcon }" />
                    </div>
                    <p class="w-3/4 flex justify-start items-start ">
                        Particulier 
                    </p>
                </div>
                <div class="w-1/3 flex justify-end items-center pr-3">
                    <p class="signe"> ></p>
                </div>

            </div>

        </div>

        <div class="  absolute bottom-0   h-28  bg-black bg-opacity-30 text-white flex justify-around w-full">


            <div class="relative w-20  flex justify-center h-20  ">
            <ButtonRed :logo="['fa', 'folder']" customClass="  " label="Gérer mes dossier" />
            </div>
            <div class="relative flex justify-center  max-lg:hidden  w-20 h-20  ">

                <ButtonRed :logo="['fa', 'laptop']" customClass="hidden lg:block " label="M'inscrire" />
            </div>
            <div class="relative flex justify-center max-lg:hidden w-20 h-20 ">

                <ButtonRed :logo="['fa', 'store']" customClass="hidden lg:block " label="Allocation et aides" />
            </div>
            <div class="relative flex justify-center w-20 h-20  max-lg:hidden b">
                <ButtonRed :logo="['fa', 'graduation-cap']" customClass="hidden lg:block " label="trouver ma formation" />

            </div>  <div class="relative flex justify-center w-20 max-lg:hidden h-20 ">
                <ButtonRed :logo="['fa', 'list']" customClass="hidden lg:block "
                    label="explorer les services en ligne de l'emploi" />

            </div>

<div class="relative flzx justify-center w-20 h-20  ">
    
                <ButtonRed customClass="relative" @click="togglesServices" :logo="['fa', 'ellipsis']"
                    label="plus de services" />
    
    
                <div v-if="isServiceVisible"
                    class="z200 absolute  max-md:hidden border h-20 bg w-32">

                    <div class="max-xl:hidden">
                        <RoundedXl/>
                    </div>
                   
                </div>

</div>




        </div>


        <div
            class=" z100  md:w-3/6 sm:w-4/6 max-sm:w-5/6  sm:mt-9  w-full border-green-400 flex-col space-y4 p-5 top-0 absolute m-auto ">


            <div class="max-sm:p-5">
                <h1 class="text-3xl text-center text-white mb-6"> 1 073 968 offres d'emploi disponibles</h1>
            </div>

            <div class="search-container space-x-1 m-auto  flex">
                <div class="max-xl:space-y-2 w-11/12 xl:flex ">
                    <div class="relative flex xl:w-1/2 items-center w-full border">
                        <input class="input-item  w-full text-stone-500 text-[0.8rem] "
                            type="text" placeholder="Métier, compétence, mot-clé, n° d'offre">
                            <font-awesome-icon :icon="['fas', 'briefcase']" class="absolute left-2 top-1/2 transform -translate-y-1/2" size="md" style="color: #a2a7ae;" />
                        </input>

                    </div>
                    <div class="relative flex xl:w-1/2 items-center w-full border">
                        <input class="input-item  w-full text-stone-500 text-[0.8rem] "
                            type="text" placeholder="lieu de travail">
                            <font-awesome-icon :icon="['fas', 'location-dot']" class="absolute left-2 top-1/2 transform -translate-y-1/2" size="md" style="color: #a2a7ae;" />
                        </input>

                    </div>
                   
                   
                </div>


                <button class=" active:bg-red-600 search-btn">
                    <font-awesome-icon :icon="['fa', 'magnifying-glass']" size="xl"  />
                </button>
            </div>

            <p class=" text-white text-center mt-3 text-[1rem]">
                rechercher des offres par regions ou pas secteur d'activité
            </p>




        </div>

    </div>

</template>



<script>
import ButtonRed from '@/components/common/ButtonRed.vue';
import "@/icons/icons"
import { colorIcon } from '@/object/ObjectMenuNav';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import RoundedXl from './roundedbox/roundedXl.vue';


export default {
    name: "Bandeau",
    components: {
        ButtonRed,
        FontAwesomeIcon,
        RoundedXl
    }, data() {
        return {
            isServiceVisible: false
        }
    },
    methods: {
        togglesServices() {
            this.isServiceVisible = !this.isServiceVisible
        }
    }
}

</script>


<style>
.z100 {
    z-index: 1000;

}

.z200 {
    z-index: 1001;
}

.bandeau {
    background-image: url("/public/images/home-cover.jpg");
    background-position: 27%;
    /* Centrer l'image */
    background-size: cover;
    /* Pour s'assurer que l'image couvre tout le conteneur */
}



.input-item {
    background: white;
    border: 1px solid #ccc;
    padding: 10px;
    padding-left: 30px;
    height: 3.3rem;
    padding-top: 13px;

}

.search-btn {
    background: rgb(255, 89, 80);
    color: white;
    border: none;

    padding: 15px;
    border-radius: 0 5px 5px 0px;
    cursor: pointer;
}


html,
body {
    min-width: 20rem !important;
}
.bg{
    background-color: rgb(236, 240, 242);
}
.bg1{
    background-color: rgb(77, 136, 105);
}
.bg2{
    background-color:rgb(36, 162, 154) ;
}

.users:hover{
    background-color: rgb(77, 136, 105);
}
.users2:hover{
    background-color:rgb(36, 162, 154) ;
}
.users p,.users2 p{
    color: beige !important;
    font-size: 1rem;
}
.signe{
    font-size: 1.6rem !important;
    
}

</style>