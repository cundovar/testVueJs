<template>
  <div class="rounded-full w-20 h-20 bg-red-300 ">
    {{ logo }}
  </div>
                    <p>{{ label }} </p>
            
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