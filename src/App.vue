<template>
  <NavbarComponent/>

  <router-view></router-view>
  </template>
  <script>
  import { RouterView } from 'vue-router'
  
  import NavbarComponent from './components/NavbarComponent.vue';
  
  export default {
    name: 'App',
    components : {
      NavbarComponent,
    }
  }
  </script>
  <style scoped>
  
  </style>