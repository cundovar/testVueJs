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

    <footer class="w-full flex  flex-wrap pt-10 max-sm:pb-20 md:h-80 md:items-start md:justify-center text-white">
       
        <div class="flex  md:w-1/2 xl:w-1/3 w-full ">
            <div class="w-1/2  ">

                <FooterComponent :footer="footers[0]" />

            </div>
            <div class="w-1/2">
                
                <FooterComponent :footer="footers[1]" />

            </div>

        </div>
        
        
<div class="w-full md:w-1/2  xl:w-1/3 flex">

    <div class=" w-1/2 xl:w-1/2 flex  max-md:p-1 max-md:m-1" v-for="footer in footers.slice(2) " :key="footer.title">
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
    font-size:15px !important;
    color:#ccc;
    margin-bottom:3px ;
}
@media screen and (max-width: 600px){
    footer p{
        font-size: 1rem !important;
    }
}

footer h4{
    font-size: 0.7rem;
}
</style>