<template>
    <div>  
        <TitleBar/>            
            <div class="text-center mt-4">
                <v-btn class="info" @click="Back">
                    volver
                </v-btn>
            </div>
            <v-card                  
                class="mx-auto my-12"
                max-width="250"
            >
                <v-img
                height="70%"
                :src="cardSelected.imageUrl"
                :alt="cardSelected.name"
                ></v-img>
                <v-card-title>{{cardSelected.name}}</v-card-title>
                <v-card-text>
                    {{cardSelected.type}}
                    {{cardSelected.text}}
                    {{cardSelected.flavor}}
                    

                </v-card-text>
                <v-divider class="mx-4"></v-divider>
                
            </v-card>
            
    </div>
</template>

<script>
import { getCardId } from '../configuration/APIconexion'; 
import TitleBar from '../components/titlebar/TitleBar.vue';

export default {
    name:'ViewCard',
    components:{
        TitleBar,
    },

    data(){
        return{
            

        }

        
    },
    mounted(){
       getCardId(this.$route.params.id);
    },

    computed:{
        cardSelected(){
            return this.$store.getters.sendDataId;
        }
    },
    methods:{
        Back(){
            this.$router.go(-1);
        }
    }
    
  
    
}
</script>

<style>

</style>