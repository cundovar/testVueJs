<template>
  <div :class="[' flex justify-center items-center', customClass]">

    <div class="transform bg-oange-400 h-full  relative -translate-y-1/2 ">
      <div class="h-auto  bg-blck w-32 flex justify-center items-center">
        <div class="rounded-full cursor-pointer z200 w-20 h-20 flex  flex-col justify-center items-center bg-red-300">
          <font-awesome-icon :icon="logo" size="2xl" :style="{ color: colorIcon }" />
        </div>

      </div>
      <p class="text-sm absolute w-full  text-white text-center">{{ label }} </p>

    </div>


  </div>

</template>


<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import "@/icons/icons"
import { colorIcon } from '@/object/ObjectMenuNav';
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