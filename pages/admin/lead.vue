<template>
  <v-row>
    <v-col class="text-center" > 
      <div v-for="dato in datosLead" :key="dato._id">
         {{dato._id}}
      </div>
     
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
    ...mapGetters('lead', {
            datosLead: 'getLead',
        })
  },
  methods:{
    ...mapActions('lead', {
            datosLeadF: 'datosLead',
    })
  },
  mounted(){
      this.datosLeadF();
      
  }
}
</script>