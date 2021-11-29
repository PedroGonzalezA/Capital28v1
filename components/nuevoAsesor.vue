<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="red lighten-2"
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
        <v-card-title class="text-h5 grey lighten-2">
          Agregar Asesor
        </v-card-title>

        <v-card-text>
            <v-row justify="center" align="center" class="pa-2">
                <v-col cols="12" sm="12" md="6" lg="6">
                    <v-text-field
                        label="Nombre"
                        outlined
                    ></v-text-field>
                </v-col>
                <v-col  cols="12" sm="12" md="6" lg="6">
                    <v-select
                        :items="items"
                        label="Outlined style"
                        outlined
                    ></v-select>
                </v-col>
                <v-col cols="12" sm="12" md="6" lg="6">
                    <v-text-field
                        label="Correo"
                        outlined
                        type="email"
                    ></v-text-field>
                </v-col>
                <v-col cols="12" sm="12" md="6" lg="6">
                    <v-text-field
                        label="Telefono"
                        outlined
                    ></v-text-field>
                </v-col>
                <v-col cols="12" sm="12" md="6" lg="6">
                    <v-text-field
                        label="Contraseña(Temporal)"
                        outlined
                    ></v-text-field>
                </v-col>
                <v-col cols="12" sm="12" md="6" lg="6">
                    <v-text-field
                        label="Confirmar Contraseña(Temporal)"
                        outlined
                    ></v-text-field>
                </v-col>
                <v-col cols="12"><div class="msj">Por seguridad, recuerda avisar al nuevo asesor actualizar su contraseña.</div> </v-col>
                <v-col cols="12">
                    <v-row align="center" justify="center">
                        <v-col cols="12">
                            Proyectos Asignados
                        </v-col>
                        <v-col cols="12">
                            <div>
                                <v-chip>
                                    {{datosD}}
                                </v-chip>
                            </div>
                        </v-col>
                    </v-row>
                </v-col>
                <v-col cols="12">
                    <v-row align="center" justify="center">
                        <v-col v-for="item in datosDesarrollo" :key="item._id">
                           <v-btn @click="agregarDesarrollo(item.name)">
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
            color="primary"
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
</style>