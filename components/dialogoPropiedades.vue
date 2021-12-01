<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
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
        <v-card-title class="text-h5 tituloComentario">
          Comentario
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
        <v-card-text class="pa-1">
          <v-container>
            <v-row>
              <v-col
                cols="12"
                sm="6"
                md="8"
                class="pa-1"
              >
                <v-text-field
                  label="ID"
                  required
                  prepend-inner-icon="mdi-vector-square-edit"
                  v-model="cordenadas.mapping_coords"
                ></v-text-field>
              </v-col>
              <v-col
                cols="6"
                sm="6"
                md="4"
                class="pa-1"
              >
                <v-text-field
                  label="Precio"
                  type="number"
                  prepend-inner-icon="mdi-cash"
                  v-model="precio"
                ></v-text-field>
              </v-col>
              <v-col
                cols="3"
                sm="2"
                md="2"
                class="pa-1"
              >
                <v-text-field
                  label="#Recamaras"
                  v-model="recamaras"
                  type="number"
                ></v-text-field>
              </v-col>
              <v-col
                cols="3"
                sm="2"
                md="2"
                class="pa-1"
              >
                <v-text-field
                  label="#Baños"
                  v-model="banos"
                  type="number"
                ></v-text-field>
              </v-col>
              <v-col cols="6" sm="4" class="pa-1">
                <v-text-field
                  label="TDP"
                  v-model="TDP"
                ></v-text-field>
              </v-col>
              <v-col
                cols="6"
                sm="4"
                class="pa-1"
              >
                <v-select
                  :items="estados"
                  v-model="estado"
                  label="Estado"
                ></v-select>
              </v-col>
              <v-divider></v-divider>

              <v-col 
                cols="6" 
                sm="4"
                class="pa-1"
              >
                <v-text-field
                  label="Construcción"
                  type="number"
                  v-model="m2.construction"
                ></v-text-field>
              </v-col>
              <v-col
                cols="6"
                sm="4"
                class="pa-1"
              >
                <v-text-field
                  label="Terraza"
                  
                  v-model="m2.terrace"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="4"
                class="pa-1"
              >
                <v-text-field
                  label="Total"
                  type="number"
                  v-model="m2.total"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions class="botones">
          <v-spacer></v-spacer>
          <v-btn
            text
            @click="Actualizar"
            class="btnGuardar"
          >
            <v-icon>
              mdi-content-save
            </v-icon>
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
      estados:["disponible","vendido","reservado","indefinido"]
    }),
    props:{
        id: {
          type: String,required:'true',default:'0'
        },
        nombre: {
          type: String,required:'true',default:'Sin nombre'
        },
        precio: {
          type: Number,required:'true',default(){return precio}
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
            this.$emit('update:precio',precio)
            this.$store.dispatch('propiedades/cambiarDatosPropiedades', { id,precio,});
            this.dialog = false       
        }
    },
  }
</script>

<style lang="scss" scoped>
.tituloComentario{
    background: $azulBC28 ;
    color: white;
  }
.btnCerrar{
    color: $rojoC28;
}
.botones{
  background: $azulBC28;
}
.btnGuardar{
  color: $azulC28;
}
</style>