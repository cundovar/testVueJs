<template>

    <div class="w-full space-y-5 entreprise">
         
        <div class="flex flex-col space-y-2 justify-center items-center">
            <div class="">
                <h1 class="text-3xl mt-5">
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

        <div class="w-full flex flex-col pt-12  bg-slate-200 items-center">

            <h1 class="text-3xl pb-16"> Actualités de l'emploi</h1>
            <HautMain/>
            <ArticleFetch />

        </div>




    </div>
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