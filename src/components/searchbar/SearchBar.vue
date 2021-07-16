<template>
  <div>
    <v-text-field      
      v-model="search"
      label="Buscar"
      placeholder="Search"      
      hide-details="auto"            
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

    watch:{
      search(){
        this.$store.state.cardnamesearch = this.search; 
      }
    },
  
}
</script>

<style>

</style>