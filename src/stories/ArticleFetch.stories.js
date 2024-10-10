import ArticleFetch from "@/components/france_travail/main/ArticleFetch.vue";



export default {
    title: 'Components/ArticleFetch',
    component: ArticleFetch,
  };
  
  const Template = (args) => ({
    components: { ArticleFetch },
    setup() {
      return { args };
    },
    template: '<div class="flex w-full flex-col border  justify-center items-center" > <ArticleFetch v-bind="args" /> </div>',
  });
  
  export const Default = Template.bind({});
  Default.args = {};