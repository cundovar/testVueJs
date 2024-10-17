<template>
  <div :class="[' flex justify-center items-center', customClass]">

    <div class="transform bg-oange-400 h-full active:border border-black  hover:bg-red focus:border-black  relative -translate-y-1/2 ">
      <div class="h-auto  bg-blck w-32 flex justify-center items-center">
        <div class="rounded-full shadow-2xl  cursor-pointer z100 w-20 h-20 flex  flex-col justify-center items-center bgRounded">
          <div class="h-full w-full flex justify-center items-center   rounded-full transition-all ease-in-out   shadow-inner hover:shadow-stone-400 shadow-slate-50 duration-300">

            <font-awesome-icon :icon="logo" size="2xl"  />
          </div>
        </div>

      </div>
      <p class="text-sm absolute w-full  text-white text-center">{{ label }} </p>

    </div>


  </div>

</template>


<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import "@/icons/icons"

export default {
  name: "Buttonred",
  props: {
    label: {
      type: String,
      Required: true
    },
    logo: {
      type: Array,
      Required: true
    },
    customClass: {
      type: String,
      Required: true

    }
  
 
  },
  components: {
    FontAwesomeIcon
  }
}

</script>

<style>
.bgRounded{
  background-color: rgb(255, 89, 80);
}
</style>