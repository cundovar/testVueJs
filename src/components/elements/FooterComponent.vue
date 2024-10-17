
<template>
   
<div class="  w-full justify-center  flex">
  <div class=" space-y-3">
<div class="">
  <h6 class="text-white text-center " >{{ footer.title }}</h6 >
<div class="m-auto mt-2 w-14 h-[5px]" :style="{ backgroundColor: footer.color }"></div>

</div>
    <ul class="flex w-full flex-col">
      <li v-for="(paragraph, index) in footer.paragraphs" :key="index">
        <p>
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