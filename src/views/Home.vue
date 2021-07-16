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
  
  

  // const cartas = require('../data/dataCards.json');
  // const veamos = Object.values(cartas);
  // const thecards= veamos[0]
  // const deckOfCards = thecards.filter((element)=>{
  //   return element.multiverseid
  // })


 

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
