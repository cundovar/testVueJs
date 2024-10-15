<template>
<main class="entreprise  bg-slate-200  ">

    <div class="w-full xl:w-4/6 m-auto space-y-5 ">
         
        <div class="flex flex-col xl:hidden space-y-2 bg-white p-7 justify-center items-center">
            <div class="">
                <h1 class="text-3xl ">
                    Entreprise
                </h1>
                <div class="border w-12 mt-3 m-auto">

                </div>

            </div>
            <p class="text-center p-3 pt-0 text-sm"> Vous êtes une entreprise ou un particulier employeur ? France Travail vous propose un espace dédié !</p>

            <div class="flex gap-3">
              <ButtonGlobal
               label="ENTREPRISE"
                color="bg-lime-600"
                colorText="text-white"
                />

              <ButtonGlobal 
              label="PARTICULIER EMPLOYEUR"
               color="bg-emerald-600"
               colorText="text-white"
               />

           

            </div>

        </div>

        <div class="w-full  flex flex-col pt-12 items-center">

            <h1 class="text-3xl lg:text-center border xl:w-1/6 lg:w-2/6 pb-16"> Actualités de l'emploi</h1>
            <HautMain/>
            <ArticleFetch />

        </div>




    </div>



</main>
</template>

<style>


.but{
    font-size: 10px;
}
</style>

<script>

import ButtonGlobal from '@/components/common/ButtonGlobal.vue';
import ArticleFetch from './ArticleFetch.vue';
import HautMain from './HautMain.vue';






export default {
    name: "MainTravail",
    components: {
        ArticleFetch,
        ButtonGlobal,
        HautMain
       
    }
}

</script>