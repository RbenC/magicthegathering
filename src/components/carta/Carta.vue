<template>
    <div>
        <v-img class="image"
            
            :src="imageUrl" :alt="name"
            @click="ira(id)"
        >
        </v-img>
        <v-card-title>
            {{name}} 
            
        </v-card-title>
        <v-flex mt-4 mb-3>
                <MoreDetails :name='name' :imageUrl='imageUrl' :text='text' :id='id'/>
            </v-flex>      
    </div>
  
</template>

<script>
import MoreDetails from '../modals/MoreDetails';

export default {
    name:'Carta',
    components: {
        MoreDetails,
    },
    props:{
        name:String,
        imageUrl:String,
        text:String,
        id:String
    },

   data(){
        return{


        }

    },
    methods:{
        ira(id){                 
            this.$router.push(`card/${id}`)
            
        }
    },

}
</script>

<style lang="scss" scoped>
.image {
    cursor: pointer;
}
</style>