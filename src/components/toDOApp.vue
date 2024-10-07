<template>
    <div></div>
  </template>
  
  <script>
  export default {
    name: 'TodoApp',
  
    data() {
      return {
        todos: [
          {
            id: 1,
            text: 'Apprendre Vue.js 3',
            completed: false,
          },
        ],
      };
    },
  };
  </script>