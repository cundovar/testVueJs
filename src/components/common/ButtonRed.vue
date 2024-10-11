<template>
  <div class="border flex justify-center">

    <div class="transform border relative -translate-y-1/2 ">
 
      <div class="rounded-full w-20 h-20  bg-red-300 ">
        {{ logo }}
      </div>
 
    </div>
    <p class="text-sm absolute top-10 text-white text-center">{{ label }} </p>


  </div>
            
</template>


<script>
export default{
    name:"Buttonred",
    props:{
      label:{
        type:String,
        Required:true
      },
      logo:{
        type:Object,
        Required:true
      }

    }
}

</script>