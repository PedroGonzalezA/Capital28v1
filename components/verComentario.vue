<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="100%"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-card class="cardComentario">
          <v-layout  class="tituloComentario"> 
            <v-flex xs12 sm12 md5 lg5>
                {{leadName}}
            </v-flex>
          </v-layout>
            <v-layout align-center justify-center>
              <v-row align="center" justify="center">
                <v-col cols="12" sm="12" md="4" class="pb-0">
                  {{nombre}}
                </v-col>
                <v-col cols="12" sm="6" md="5"  class="pb-0"> 
                    <v-chip label  class="fecha" color="#3e4b5c">
                      {{fechaUsuario(fecha)}} 
                    </v-chip>
                </v-col>
                <v-col cols="12" sm="6" md="3"  class="pb-0">
                    <v-chip label  outlined class="hora" color="#5fa7a4">
                        {{horaUsuario(fecha)}} 
                    </v-chip>
                </v-col>
                <v-col cols="12" class="pt-0">
                  <v-btn
                    color="#262d3c"
                    dark
                    block
                    v-bind="attrs"
                    v-on="on"
                    class="abrirComentario"
                    text
                  >
                    <v-icon>
                      mdi-chevron-up
                    </v-icon>
                  </v-btn>
                </v-col>
              </v-row>         
            </v-layout>            
        </v-card>
       
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
        <v-card-text>
            <v-timeline 
                dense
                clipped 
            >
                <v-timeline-item 
                v-for="dato in comentarios" 
                :key="dato.comment_id"
                small
                color="#262d3c"
                >   
                <v-layout>
                    <v-flex>
                        <div>
                         Fecha:   
                        </div>
                        
                        {{fechaUsuario(dato.created_at)}} {{horaUsuario(dato.created_at)}}
                    </v-flex>
                    <v-flex>
                        <div>
                           Comentario:  
                        </div>
                       
                        {{dato.text}}
                    </v-flex>
                </v-layout>
                    
                </v-timeline-item>
            </v-timeline>
        </v-card-text>

        <v-divider></v-divider>

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
      }
    },
    props:{
        nombre: {
          type: String,required:'true',default:'Sin nombre',
        },
        fecha: {
          type: String,required:'true',default:'Sin nombre',
        },
        comentarios: {
          type: Array,required:'true',default: () => [],
        },
        usuario: {
          type: Array,required:'true',default: () => [],
        },
        leadName: {
          type: String,required:'true',default:'Sin nombre',
        },
    },
    methods:{
        fechaUsuario(dato){
          var fecha 
          var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',minutes: 'long',seconds: 'numeric' };
          fecha = new Date(dato);
          return fecha.toLocaleDateString("es-ES", options)
        },
        horaUsuario(dato){
          var hora 
          hora = new Date(dato);
          return hora.toLocaleTimeString('es-US')
        },
        comF(dato){
        
            console.log(dato);
          
       }
    },
    computed:{
        ...mapGetters('comentarios', {
            datosComentarios: 'getComentarios',
        }),
    },
    mounted(){
      this.comF(this.comentarios)
    }
  }
</script>

<style lang="scss" scoped>
  .abrirComentario{
    width: 100%;
    border-radius: 0 0 5px 5px;
  }
  .cardComentario{
    width: 100%;
  }
  .tituloComentario{
    background: $azulBC28 ;
    color: white;
  }
  .btnCerrar{
    color: $rojoC28;
  }
  .timeline{
    background-color:$colorPrincipal;
  }
  .fecha{
    width: 100%;
    justify-content: center;
    color: white;
  }
  .hora{
    width: 100%;
    justify-content: center;
  }
</style>