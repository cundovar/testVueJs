

<template>
 <h1>
    get name peint
</h1>
    <ul>
       
        <li class="flex space-x-6" v-for="peintItem in peint" :key="peintItem.id">
          nom :   <p class="text-black">
              
              {{peintItem.name}}
          </p>
          <img :class="m-auto " :src="'https://bac.varascundo.com/images/oeuvre/'+peintItem.image " class="w-10 h-10 "/>
        </li>
    </ul>



</template>



    <script>

    import axios from 'axios';

    export default {
  name: 'Apibanque',
  data(){
    return{
        peint:[],
       
    }
  },
  mounted(){
    this.getPeint()
    
  },
  methods:{
    async getPeint(){
        try{
            
            const response=await axios.get("https://bac.varascundo.com/api/oeuvres/")
            this.peint=response.data['hydra:member']
            console.log(this.peint)
         
        }catch(error){
            console.error("erreur récup",error)
        }
    }
   
  }
};

    
    
    </script>