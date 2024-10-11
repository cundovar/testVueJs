<template>

<div class="w-full pb-4  flex max-sm:flex-col  ">
    <div class="w-11/12 m-auto flex pb-5 pt-5 bg-white shadow-md  " v-for="bloc in blocs" >
 <div class=" w-full  flex">
<div class="w-1/2">
    <img class="" :src="bloc.img "/>
</div>
<div class="w-1/2  h-full space-y-2 p-1 ">

    <div class="space-y-3">
        <h3 :class="[bloc.colorText,'text-xl font-medium'] "> {{ bloc.title }} </h3>
        <p>{{ bloc.text }} </p>
    </div>
        <ButtonGlobal 
             :label="bloc.buttons " />
     </div>

</div>
</div>


  

</div>

</template>


<script>
import ButtonGlobal from '@/components/common/ButtonGlobal.vue';
import { blocs } from '@/object/objectBloc';


export default{
    name:"HautMain",
    data(){
        return{
            blocs
        }
    },components:{
        ButtonGlobal
    }
}


</script>