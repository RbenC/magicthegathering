<template>
    <div>
        <v-img
            height="250"
            :src="imagen" :alt="nombre"
        >
        </v-img>
        <v-card-title>
            {{nombre}} ${{precio}} {{unidad}}
        </v-card-title>
    </div>
  
</template>

<script>
export default {
    name:'Carta',
    props:{
        nombre:String,
        imagen:String,
        precio:Number,
        unidad:String,
    },

    data(){
        return{


        }

    }


}
</script>

<style>

</style>