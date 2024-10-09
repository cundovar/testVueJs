<script>

import FooterComponent from '@/components/elements/FooterComponent.vue';
import { footers } from '@/object/ObkjectFooter';

export default {
    name: "FootTravail",
    components: {
        FooterComponent
    },
    data() {
        return {
            footers
        }
    }
}
</script>


<template>

    <footer class="w-full flex flex-wrap pt-10   text-white">
       
        <div class="flex w-full ">
            <div class="w-1/2">

                <FooterComponent :footer="footers[0]" />

            </div>
            <div class="w-1/2">
                
                <FooterComponent :footer="footers[1]" />

            </div>

        </div>
        
        
<div class="w-full flex">

    <div class=" w-1/2  flex  p-1 m-1" v-for="footer in footers.slice(2) " :key="footer.title">
        <FooterComponent :footer="footer" />
    </div>

</div>

    </footer>

</template>

<style>
footer{
    background-color: rgb(43, 46, 48);
}

footer p{
    font-size:13px !important;
    color:#ccc;
    margin-bottom:3px ;
}

footer h4{
    font-size: 0.7rem;
}
</style>