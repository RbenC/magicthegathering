<template>
  <div>
    
    <TitleBar titulo="Magic The Gathering"/>    
    <Cartas />       
  </div>
</template>

<script>

  
  import TitleBar from '../components/titlebar/TitleBar.vue';
  import Cartas from '../components/cartas/Cartas.vue'; 
  import { getCards } from '../configuration/APIconexion';
  getCards();


  export default {
    name: 'Home',
   
    components: { 
      TitleBar,
      
      Cartas,      
    },

    data(){
      return{       
        
      }
      
    }
  }
</script>
