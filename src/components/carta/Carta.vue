<template>
    <div>
        <v-img
            height="250"
            :src="imageUrl" :alt="name"
        >
        </v-img>
        <v-card-title>
            {{name}} 
        </v-card-title>
    </div>
  
</template>

<script>
export default {
    name:'Carta',
    props:{
        name:String,
        imageUrl:String,
    },

    data(){
        return{


        }

    }


}
</script>

<style>

</style>