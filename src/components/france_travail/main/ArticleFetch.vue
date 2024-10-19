<template>
    <article class="  flex m-auto  items-center justify-between  flex-wrap border xl:w-[71.3rem] ">
        
        <HautMain/>
        <div class="border mt-10  shadow-lg max-sm:w-full  overflow-hidden  lg:w-[20rem] xl:w-[20.5rem] md:w-[23rem] sm:h-[26rem] sm:w-[20rem] cursor-pointer bg-slate-100" v-for="article in visibleArticles" :key="article.title">
            <div class="md:p-5 md:pt-0 h-1/2  lg:space-y-3 ">
                <h3 class="text-xl mb-2">{{ article.title }} </h3>
                <p class="max-sm:text-lg">{{ article.content }} </p>

            </div>
            <img class="w-full  h-1/2 object-cover" :src="article.img" />
        </div>
    </article>

    <div @click="toggleArticles" class="m-5 border ">
        <ButtonGlobal colorText=" text-slate-600 border-slate-700 border p-2 rounded-lg active:border-none " :label="buttonText   " color="black"/>

    </div>
</template>


<script>
import { articles } from '@/object/ObjectArticle';
import { buttonRedList } from '@/components/france_travail/beandeau/ButtonRedList';
import HautMain from './HautMain.vue';
import ButtonGlobal from '@/components/common/ButtonGlobal.vue';

export default {
    name: 'ArticleFetch',
    data() {
        return {
            articles,
            visibleCount: 6,
            showAll:false,
            buttonRedList,
           
        }
    },
    computed: {
        visibleArticles() {
            return this.articles.slice(0, this.visibleCount)
        },
        buttonText(){
            return this.showAll ? 'Voir moins' :  "voir plus"
        }

    },
        methods:{
        toggleArticles(){
            if( this.showAll){
              this.visibleCount=6
            }else{
                this.visibleCount=this.articles.length
            }
            this.showAll=!this.showAll

        }
        
},components:{
    HautMain,
    ButtonGlobal,

}
    }

</script>

<style>
@media screen and (max-width:640px) {
    article p {
        font-size: .8rem;

    }


    article h3 {
        font-size: 1.2rem;
    }

    article p,
    article h3 {
        padding: 5px 25px 15px;


    }

}

article h3 {
    padding-top: 20px;
}
</style>
