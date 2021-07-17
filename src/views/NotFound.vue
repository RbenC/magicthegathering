<template>
  <div class="text-center">
      <TitleBar/>


      <h2 class="my-4 ">Page Not Found</h2>
      <hr/>
      <v-btn class="btn primary my-4" @click="BackHome">
          Home
      </v-btn>

  </div>
</template>

<script>
import TitleBar from '../components/titlebar/TitleBar.vue';

export default {
    name:'NotFound',
    components:{
        TitleBar,
    },
    methods:{
        BackHome(){
            this.$router.push('/');
        }
    }
    
}
</script>

<style>

</style>