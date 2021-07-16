<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="600">
      <template v-slot:activator="{ on }">
        <v-btn class="success" dark v-on="on">More...</v-btn>
      </template>
      <v-card>
        <v-card-title class="headline grey lighten-2 center" primary-title>{{name}}</v-card-title>
        <v-img
            center
            
            :src="imageUrl" :alt="name"
        >
        </v-img>
        <p>{{text}}</p>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
    name:'MoreDetails',
    props:{
        name:String,
        text:String,
        imageUrl:String,
    },

    data(){
        return{
            dialog:''
        }
    }
}
</script>

<style lang="scss" scoped>

.center{
    margin-right:auto;
}
</style>