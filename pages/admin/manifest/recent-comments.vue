<template>
      <v-container
    class="fill-height  contenedor"
    fluid 
    >
        <v-row
        align="center"
        justify="center"
        class="fill-height "
        
        >
            <v-col>
                <Comentarios/>
            </v-col>
        </v-row>
    </v-container>
  
</template>
<script>
import { mapState, mapActions,mapGetters } from 'vuex'

export default {
    data(){
        return{
        }
    },

    methods:{
        ...mapActions('comentarios', {
            datosComentariosF: 'datosComentarios',
        }),
    },
    computed:{
        ...mapGetters('comentarios', {
            datosComentarios: 'getComentarios',
        }),
    },
     mounted() {
      this.datosComentariosF();
      console.log(this.datosComentarios);
    },
}
</script>