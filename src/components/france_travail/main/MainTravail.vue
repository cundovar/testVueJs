<template>
<main class="  bg-slate-200  ">

    <div class="w-full 2xl:w-4/6 m-auto  ">
         
        <div class="flex flex-col xl:hidden xl:absolute space-y-2 bg-white p-7 justify-center items-center">
            <div class="">
                <h2 class="text-3xl ">
                    Entreprise
                </h2>
                <div class="border w-12 mt-3 m-auto">

                </div>

            </div>
            <p class="text-center p-3 pt-0 text-sm"> Vous êtes une entreprise ou un particulier employeur ? France Travail vous propose un espace dédié !</p>

            <div class="flex gap-3">
              <ButtonGlobal
               label="ENTREPRISE"
                color="bg4"
                colorText="text-white"
                />

              <ButtonGlobal 
              label="PARTICULIER EMPLOYEUR"
               color="bg3"
               colorText="text-white"
               />

           

            </div>

        </div>

        <div class="w-full  flex flex-col pt-12 items-center">

            <h2 class="text-3xl lg:text-center border  lg:w-2/6 pb-16"> Actualités de l'emploi</h2>
         
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







export default {
    name: "MainTravail",
    components: {
        ArticleFetch,
        ButtonGlobal,

    }
}

</script>