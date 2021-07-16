<template>
  <v-layout :wrap="true">
    <v-flex xs12>
      <v-card color="error" dark>
        <v-card-text class="text-md-center">          
          <img src="../../../public/Magicthegathering-logo.svg" alt="logo" width="20%">
          <p>{{titulo}}</p>
        </v-card-text>
      </v-card>
    </v-flex>    
  </v-layout>
</template>

<script>
export default {
    name:'BarraTitulo',
    props: {
        titulo:String
    }

}
</script>

<style lang="scss" scoped>
p {
    font-size: 1.2rem;
    font-weight: bold;
    color: rgb(189, 179, 179);
}
</style>