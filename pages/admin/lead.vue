<template>
  <v-row>
    <v-col class="text-center">
    
    </v-col>
  </v-row>
</template>
<script>
import { mapState, mapActions,mapGetters } from 'vuex'

export default {
  data(){
    return{
      datos:[],
    }
  },
  computed:{
    
  },
  methods:{
    datosUsuario(){
    
      this.datos=this.$store.state('token');
    },
    
  },
  mounted(){
      this.$store.dispatch('user/tokenP');
     
  }
}
</script>