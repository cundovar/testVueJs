<template>
    <article class=" h-auto flex  flex-wrap border w-full ">
        <div class="border m-3 w-full bg-slate-100" v-for="article in visibleArticles" :key="article.title">
            <h3 class="">{{ article.title }} </h3>
            <p>{{ article.content }} </p>
            <img class="w-full" :src="article.img" />
        </div>
    </article>
    <button @click="toggleArticles" type="button"> {{ buttonText }} </button>
</template>


<script>
import { articles } from '@/object/ObjectArticle';


export default {
    name: 'ArticleFetch',
    data() {
        return {
            articles,
            visibleCount: 3,
            showAll:false 
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
              this.visibleCount=3
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
