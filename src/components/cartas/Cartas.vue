<template>
<div>
    <SearchBar/>
    <v-layout :wrap="true">
        <v-flex v-for="(item,index) in miscartas" :key="index" md3  >
            <v-card
                class="mx-auto my-6"
                max-width="375"                
            >                
            <Carta  :nombre='item.nombre' :imagen='item.imagen' :precio='item.precio' :unidad='item.unidad'/>
            </v-card>
        </v-flex>
    </v-layout>
  
</div>  
</template>

<script>

import Carta from '../../components/carta/Carta.vue';
import SearchBar from '../../components/searchbar/SearchBar.vue';

export default {
    name:'Cartas',
    props:{
        miscartas:Array,        
    },
    components: {
        Carta,
        SearchBar,
        
    },

    data(){

        return{

            


        }

    },
    methods: {
        filtrar(){
            console.log('información filtrada');
        }

    }

        
    



}
</script>

<style>

</style>