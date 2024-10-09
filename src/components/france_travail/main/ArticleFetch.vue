
<template>
 <article class=" h-auto flex flex-wrap border w-full ">
          <div class="border m-3  bg-slate-100" v-for="article in articles" :key="article.title">
            <h3 class="">{{ article.title }} </h3>
            <p>{{ article.content }} </p>
            <img :src= "article.img "/>
          </div>
 </article>

</template>


    <script>
import { articles } from '@/object/ObjectArticle';

    export default{
        name:'ArticleFetch',
        data(){
            return{
                articles
            }
        }
    }
    
    </script>

    <style>


    @media screen and (max-width:640px) {
        article p{
            font-size: .8rem;

        }
        article h3{
            font-size: 1.2rem ;
        }
       article p, article h3{
        padding: 5px 25px 15px;
           

       } 

    }

article h3{
    padding-top: 20px;
}
</style>

