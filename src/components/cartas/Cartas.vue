<template>
<div>
    <SearchBar/>
    <v-layout :wrap="true" v-if="deckOfCards.length">
        <v-flex v-for="(item,index) in deckOfCards" :key="index" sm4  >
            <v-card
                class="mx-6 my-6"
                max-width=auto                      
            >                
            <Carta  :name='item.name' :imageUrl='item.imageUrl' :text='item.text' />
            </v-card>
        </v-flex>
    </v-layout>
    <div v-else>         
        <v-btn
            color="red"
            elevation="2"
            loading            
        >Loading...</v-btn>      
        <hr />
        <p class="nothign">There is nothing to show<br/>Try again!</p>
        <hr />
    </div>  
</div>  
</template>

<script>

import Carta from '../../components/carta/Carta.vue';
import SearchBar from '../../components/searchbar/SearchBar.vue';

export default {
    name:'Cartas',
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
            return this.$store.getters.sendData.filter((element)=>{
                return element.name.toLowerCase().includes(this.$store.state.cardnamesearch.toLowerCase())
            }) ; 
        }
    }

}
</script>

<style lang="scss" scoped>
.nothign{
    margin-top: 20px;
    font-size: 24px;
    font-weight: bold;
    text-align: center;
}
</style>