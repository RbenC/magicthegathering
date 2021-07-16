<template>
    <div>
        <v-img
            
            :src="imageUrl" :alt="name"
        >
        </v-img>
        <v-card-title>
            {{name}} 
            
        </v-card-title>
        <v-flex mt-4 mb-3>
                <MoreDetails :name='name' :imageUrl='imageUrl' :text='text'/>
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
    },

    data(){
        return{


        }

    }


}
</script>

<style lang="scss" scoped>
img {
    width: 90%;

}
</style>