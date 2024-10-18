
<template>
   
<div class="  w-full justify-center max-sm:items-start   flex">
  <div class="  max-sm:w-11/12 space-y-3">
<div class="">
  <h6 class="text-white text-center h-10 w-36 xl:w-44 lg:flex justify-center items-end " >{{ footer.title }}</h6 >
<div class="m-auto mt-2 w-14 h-[5px]" :style="{ backgroundColor: footer.color }"></div>

</div>
    <ul class="flex w-full flex-col">
      <li v-for="(paragraph, index) in footer.paragraphs" :key="index">
        <p class="max-sm:text-lg text-start">
          {{ paragraph }}

        </p>
      
      </li>
    </ul>

  </div>


</div>
 
</template>

<script>
export default {
  name: "FooterComponent",
  props: {
    footer: {
      type: Object,
      required: true
    }
  }
};
</script>