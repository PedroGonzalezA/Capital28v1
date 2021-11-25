<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="50%"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-card class="cardComentario">
          <v-layout align-center justify-center class="tituloComentario"> 
            <v-flex xs12>
                {{leadName}}
            </v-flex>
          </v-layout>
            <v-layout lign-center justify-center>
              <v-flex xs12>
                <v-btn
                  color="#262d3c"
                  dark
                  block
                  v-bind="attrs"
                  v-on="on"
                  class="abrirComentario"
                  text
                >
                <v-layout align-center justify-center>
                  <v-flex xs2>
                    {{nombre}}
                  </v-flex>
                  <v-flex xs6>
                    <v-chip label color="#70C879">
                      {{fechaUsuario(fecha)}} 
                    </v-chip>
                  </v-flex>
                  <v-flex xs4>
                    <v-chip label color="#70C879">
                      {{fecha}} 
                    </v-chip>
                  </v-flex>
                </v-layout>                    
                </v-btn>
              </v-flex>
            </v-layout>            
        </v-card>
       
      </template>

      <v-card>
        <v-card-title class="text-h5 tituloComentario">
          Comentario
          <v-spacer></v-spacer>
          <v-btn
            color="red"
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
                        
                        {{dato.created_at}}
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
          var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
          fecha = new Date(dato);
          return fecha.toLocaleDateString("es-ES", options)
        },
        horaUsuario(dato){
          let horas
          let horaSin=""
          for (var i = 11; i < 19; i++) {
            horas=dato[i]
            horaSin=horaSin+horas
          }
          console.log(horaSin);
          var fecha 
          var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
          fecha = new Date(horaSin);
          return fecha.toLocaleDateString("es-ES", options)
        }
    },
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
    background: $colorAzulB ;
    color: white;
  }
  .timeline{
    background-color:$colorPrincipal;
  }
</style>