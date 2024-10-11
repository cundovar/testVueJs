<template>

<button :class="[color,'flex p-2 t justify-center items-center   border rounded-2xl']" >
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