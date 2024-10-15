<template>
    <article class="  flex bg-pink-300 m-auto justify-center items-center flex-wrap border w-full ">

       
        <div class="border m-3 w-full sm:w-[18rem]  sm:space-y-3 h-[rem] bg-slate-100" v-for="article in visibleArticles" :key="article.title">
            <div class="lg:p-5 h-[13rem] lg:space-y-3 ">
                <h3 class="text-xl">{{ article.title }} </h3>
                <p>{{ article.content }} </p>

            </div>
            <img class="w-full h-full " :src="article.img" />
        </div>
    </article>
    <button @click="toggleArticles" type="button"> {{ buttonText }} </button>
</template>


<script>
import { articles } from '@/object/ObjectArticle';
import { buttonRedList } from '@/components/france_travail/beandeau/ButtonRedList';

export default {
    name: 'ArticleFetch',
    data() {
        return {
            articles,
            visibleCount: 4,
            showAll:false,
            buttonRedList
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
              this.visibleCount=4
            }else{
                this.visibleCount=this.articles.length
            }
            this.showAll=!this.showAll

        }
        
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
