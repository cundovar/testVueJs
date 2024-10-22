<template>

<button :class="[color,'flex p-3   justify-center items-center hover:border-zinc-700  border rounded-3xl']" >
  <p  :class="colorText">
      {{ label }}

  </p>  
</button>


</template>



<script>

export default {
    name:"ButtonGlobal",
    props:{
        label:{
            type:String,
            Required:true
        },
        color:{
            type:String,
            Required:false,
            default:"bg-white"
        },
        colorText:{
            type:String,
            Required:false,
            default:"text-black"
        
            
        }
    }
}


</script>