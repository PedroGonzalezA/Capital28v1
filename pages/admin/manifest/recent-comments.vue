<template>
    <v-container
        class="fill-height"
        fluid 
    >
        <v-row
            align="center"
            justify="center"
            class="fill-height "
        >
            <v-col cols="12" class="titulo text-h6 py-0">
                Comentarios recientes
                <v-divider/>
            </v-col>
            <v-col cols="12" sm="10">
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