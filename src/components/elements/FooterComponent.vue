
<template>
   
<div class="  w-full  flex">
  <div class=" space-y-3">
<div class="">
  <h4 class=" " >{{ footer.title }}</h4 >
<div class="bg-white mt-2 w-14 h-1" :style="{ backgroundColor: footer.color }"></div>

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