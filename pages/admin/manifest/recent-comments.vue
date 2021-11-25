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
            <v-col cols="10" class="titulo">
                Comentarios recientes
            </v-col>
            <v-col cols="10">
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
    },
}
</script>
<style lang="scss" scoped>
    .titulo{
        text-align: center;
    }
</style>