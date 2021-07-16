<template>
  <div>
    <v-text-field      
      v-model="search"
      label="Buscar"
      placeholder="Search"      
      hide-details="auto"      
      @change="getSearch(search)"
    ></v-text-field>    
  </div>
</template>

<script>
export default {
    name:'SearchBar',

    data() {
      return{
        search:'',



      }
    },

    methods:{
      getSearch(search){
        console.log('Se buscara según lo escrito '+search );
      }

    }



    

    
}
</script>

<style>

</style>