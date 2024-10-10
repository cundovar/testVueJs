import FootTravail from "@/components/france_travail/footer/FootTravail.vue";



export default {

    title: 'Components/Footer',
    component: FootTravail
}

const Template=(args)=>({
    components:{FootTravail},
    setup(){
        return {args}
    },
    template: '<FootTravail v-bind="args" />'
})

export const Defaut =Template.bind({})
Defaut.args = {}