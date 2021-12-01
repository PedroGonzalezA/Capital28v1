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
          class="btnClose"
          min-width="30%"
        >
          <v-icon>mdi-shield-check</v-icon>
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="text-h5 tituloComentario">
          Restaurar Asesor
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

        <v-card-text class="pa-0">
          <v-container>
            Quieres restaurar este asesor <strong class="nombre">{{nombre}}</strong>
          </v-container>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions class="pa-0 btnE">
          <v-spacer></v-spacer>
          <v-btn
            text
            block
            @click="restaurar(id)"
            class="btnEliminar"
          >
           SI
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        dialog: false,
      }
    },
    props:{
        id: {
          type: String,default:'Sin id',required:'true',
        },
        nombre: {
          type: String,default:'Sin nombre',required:'true',
        },
    },
    methods:{
      restaurar(dato){
        localStorage.setItem('idD',dato);
        this.$store.dispatch('asesores/restaurarAsesores')
        this.dialog = false
      }
    }
  }
</script>
<style lang="scss" scoped>
 .btnClose{
    width: 50%;
    text-align: center;
    color:$colorVerde;
  }
  .btnCerrar{
    color:white;
  }
  .btnEliminar{
    color:$colorVerde;
  }

  .nombre{
    color:$colorVerde;
  }
  .tituloComentario{
    background: $colorVerde;
    color: white;
  }
</style>