<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          dark
          text
          v-bind="attrs"
          v-on="on"
        >
          {{nombre}}
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">Actualizar</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
                <v-col
                cols="12"
                sm="6"
                md="8"
              >
                <v-text-field
                  label="ID"
                  required
                  prepend-inner-icon="mdi-vector-square-edit"
                  v-model="cordenadas.mapping_coords"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  label="Precio"
                  required
                  prepend-inner-icon="mdi-cash"
                  v-model="precio"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="2"
              >
                <v-text-field
                  label="Recamaras"
                  v-model="recamaras"
                  type="number"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="2"
              >
                <v-text-field
                  label="Baños"
                  v-model="banos"
                  required
                  type="number"
                ></v-text-field>
              </v-col>
              <v-col cols="4">
                <v-text-field
                  label="TDP"
                  v-model="TDP"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="4"
              >
                <v-select
                  :items="estados"
                  v-model="estado"
                  label="Estado"
                ></v-select>
              </v-col>
              <v-divider></v-divider>

              <v-col cols="4">
                <v-text-field
                  label="Construcción"
                  v-model="m2.construction"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="4"
              >
               <v-text-field
                  label="Terraza"
                  v-model="m2.terrace"
                  
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="4"
              >
                <v-text-field
                  label="Total"
                  v-model="m2.total"
                  required
                ></v-text-field>
              </v-col>
              
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Cerrar
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="Actualizar"
          >
            Guardar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
  import { mapState, mapActions,mapGetters } from 'vuex'
  export default {
    data: () => ({
      dialog: false,
      estados:["disponible","vendido"]
    }),
    props:{
        id: {
          type: String,required:'true',default:'0'
        },
        nombre: {
          type: String,required:'true',default:'Sin nombre'
        },
        precio: {
          type: Number,required:'true',default(){return}
        },
        estado: {
          type: String,required:'true',default:'Sin status'
        },
        recamaras: {
          type: String,required:'true',default:'Sin recamaras'
        },
        banos: {
          type: String,required:'true',default:'Sin desdeUSA'
        },
        TDP: {
          type: String,required:'true',default:'Sin desdeMXN'
        },
        m2: {
          type: Object,required:'true',default: () => ({})
        },
        cordenadas: {
          type: Object, required:'true',default:() => ({})
        },
    },
    methods:{
        Actualizar() {
            let id = this.id
            let precio 
            precio= this.precio
            precio=parseInt(precio);
            this.$store.dispatch('propiedades/cambiarDatosPropiedades', { id,precio,});
            this.$emit('update:precio',precio)
            this.dialog = false       
        }
    },
  }
</script>