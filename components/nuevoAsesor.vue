<template>
  <div class="text-right">
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          class="btnNuevoAsesor"
          dark
          v-bind="attrs"
          v-on="on"
        >
          <v-icon>
              mdi-plus
          </v-icon>
          Agregar Asesor
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="text-h5 tituloComentario">
          Agregar Asesor
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
                        outlined
                    ></v-text-field>
                </v-col>
                <v-col  cols="12" sm="12" md="6" lg="6" class="pb-0">
                    <v-select
                        :items="items"
                        label="Rol"
                        outlined
                    ></v-select>
                </v-col>
                <v-col cols="12" sm="12" md="6" lg="6" class="pb-0">
                    <v-text-field
                        label="Correo"
                        outlined
                        type="email"
                    ></v-text-field>
                </v-col>
                <v-col cols="12" sm="12" md="6" lg="6" class="pb-0">
                    <v-text-field
                        label="Telefono"
                        outlined
                    ></v-text-field>
                </v-col>
                <v-col cols="12" sm="12" md="6" lg="6" class="pb-0">
                    <v-text-field
                        label="Contraseña(Temporal)"
                        outlined
                    ></v-text-field>
                </v-col>
                <v-col cols="12" sm="12" md="6" lg="6" class="pb-0">
                    <v-text-field
                        label="Confirmar Contraseña(Temporal)"
                        outlined
                    ></v-text-field>
                </v-col>
                <v-col cols="12" class="pa-0"><div class="msj">Por seguridad, recuerda avisar al nuevo asesor actualizar su contraseña.</div> </v-col>
                <v-col cols="12">
                    <v-row align="center" justify="center">
                        <v-col cols="12">
                            Proyectos Asignados
                        </v-col>
                        <v-col cols="12" class="">
                            <div>
                                <v-chip class="chipD" color="#5fa7a4">
                                    {{datosD}}
                                </v-chip>
                            </div>
                        </v-col>
                    </v-row>
                </v-col>
                <v-col cols="12">
                    <v-row align="center" justify="center">
                        <v-col v-for="item in datosDesarrollo" :key="item._id" cols="12" class="pa-1">
                           <v-btn @click="agregarDesarrollo(item.name)" block text class="btnD">
                             <v-icon>mdi-plus</v-icon>
                              {{item.name}} 
                           </v-btn>
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
              items: ['admin', 'broker'],
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
      agregarDesarrollo(dato) {
            this.$store.dispatch('asesores/agregarDatos', { dato});
        }
  
    },
    props:{
        datosDesarrollo: {
          type: Array, required:'true',default:() => []
        },
    }
  }
</script>
<style lang="scss" scoped>
.msj{
    color: orange;
    font-size: 13px;
    text-align: center;
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