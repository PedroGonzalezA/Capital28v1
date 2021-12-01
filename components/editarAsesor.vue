<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          text
          dark
          v-bind="attrs"
          v-on="on"
          class="btnEdit"
          min-width="30%"
        >
          <v-icon>mdi-playlist-edit</v-icon>
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="text-h5 tituloComentario">
          Editar Asesor
          <v-spacer></v-spacer>
          <v-btn
            class="btnCerrar"            
            text
            @click="dialog = false"
            icon
          >
            <v-icon>
                mdi-close-box
            </v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text>
            <v-row justify="center" align="center" class="pa-2">
                <v-col cols="12" sm="12" md="6" lg="6" class="pb-0">
                    <v-text-field
                        label="Nombre"
                        v-model="nombre"
                        outlined
                    ></v-text-field>
                </v-col>
                <v-col  cols="12" sm="12" md="6" lg="6" class="pb-0">
                    <v-text-field
                        label="Usuario"
                        disabled
                        v-model="text"
                        outlined
                    ></v-text-field>
                </v-col>
                <v-col cols="12" sm="12" md="6" lg="6" class="pb-0">
                    <v-text-field
                        label="Correo"
                        disabled
                        outlined
                        v-model="email"
                        type="email"
                    ></v-text-field>
                </v-col>
                <v-col cols="12" sm="12" md="6" lg="6" class="pb-0">
                    <v-text-field
                        label="Telefono"
                        v-model="telefono"
                        outlined
                    ></v-text-field>
                </v-col>
                <v-col cols="12">
                    <v-row align="center" justify="center">
                        <v-col cols="12">
                            Proyectos Asignados
                        </v-col>
                        <v-col cols="12" class="">
                            <div>
                                <v-chip class="chipD" color="#5fa7a4">
                                    {{proyecto}}
                                </v-chip>
                            </div>
                        </v-col>
                    </v-row>
                </v-col>
                
            </v-row>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            class="btnAceptar"
            text
            @click="dialog = false"
          >
            Aceptar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import { mapState, mapActions,mapGetters } from 'vuex'
  export default {
    data () {
      return {
        dialog: false,
        text:"Usuario"
      }
    },
     computed: {
        ...mapGetters('asesores', {
            datosD: 'getAgregarDato',
      }),
    },
    mounted () {

    },
    methods: {
      editarDesarrollo(dato) {
            this.$store.dispatch('asesores/agregarDatos', { dato});
        }
  
    },
    props:{
        id: {
          type: String,default:'Sin id',required:'true',
        },
        nombre: {
          type: String,default:'Sin nombre',required:'true',
        },
        email: {
          type: String,default:'Sin nombre',required:'true',
        },
        telefono: {
          type: String,default:'Sin nombre',required:'true',
        },
        proyecto: {
          type: String,default:'Sin nombre',required:'true',
        },
    }
  }
</script>
<style lang="scss" scoped>
 .btnEdit{
    width: 50%;
    text-align: center;
    color:white;
  }
  .btnNuevoAsesor{
      background: $azulC28;
  }
  .tituloComentario{
      background: $azulC28;
      color: white;
  }
  .btnCerrar{
      color:$rojoC28;
  }
  .btnD{
    justify-content: start;
  }
  .chipD{
    color: white;
    width: 100%;
    justify-content: center;
  }
  .btnAceptar{
    color: white;
    background: $azulBC28;
  }
</style>