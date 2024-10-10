<template>

    <div class="w-full space-y-5 entreprise">

        <div class="flex flex-col space-y-5 justify-center items-center">
            <div class="">
                <h1 class="text-3xl">
                    Entreprise
                </h1>
                <div class="border w-16 mt-3 m-auto">

                </div>

            </div>
            <p> Vous êtes une entreprise ou un particulier employeur ? France Travail vous propose un espace dédié !</p>

            <div class="flex gap-3">
                <button type="button" class=" but m-auto text-white rounded-xl p-2  bg-lime-600 ">
                    ENTREPRISE
                </button>

                <button type="button" class=" but text-white rounded-xl p-2  bg-emerald-600">
                    PARTICULIER EMPLOYEUR
                </button>


            </div>

        </div>

        <div class="w-full flex flex-col pt-20  bg-slate-200 items-center">

            <h1 class="text-3xl"> Actualités de l'emploi</h1>

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

import ArticleFetch from './ArticleFetch.vue';






export default {
    name: "MainTravail",
    components: {
        ArticleFetch
       
    }
}

</script>