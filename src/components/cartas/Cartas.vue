<template>
<div>
    <SearchBar/>
    <v-layout :wrap="true">
        <v-flex v-for="(item,index) in deckOfCards" :key="index" sm4  >
            <v-card
                class="mx-6 my-6"
                max-width="300"
                v-if="item.multiverseid"        
            >                
            <Carta  :name='item.name' :imageUrl='item.imageUrl' v-if="item.multiverseid"/>
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
    // props:{
    //     deckOfCards:Array,        
    // },
    components: {
        Carta,
        SearchBar,

        
    },
    data(){
        return{

        
        }

    },
    computed:{
        deckOfCards(){
            return this.$store.getters.sendData; 
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