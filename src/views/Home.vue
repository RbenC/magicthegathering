<template>
  <div>
    <TitleBar titulo="Magic The Gathering"/>
    
    <Cartas :miscartas="miscartas"/>
    
    
  </div>
</template>

<script>

  import TitleBar from '../components/titlebar/TitleBar.vue';
  
  import Cartas from '../components/cartas/Cartas.vue';
  const miscartas = require('../data/dataSucursal1.json');
  
  

 

  export default {
    name: 'Home',
   
    components: { 
      TitleBar,
      
      Cartas,      
    },

    data(){
      return{
        miscartas,
        
      
        
      }
      
    }



  }
</script>
