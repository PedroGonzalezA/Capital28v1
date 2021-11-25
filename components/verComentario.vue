<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on, attrs }">
        <div>
            {{leadName}}
        </div>
        <v-btn
          color="red lighten-2"
          dark
          v-bind="attrs"
          v-on="on"
        >
            <v-row>
                <v-col cols="4">
                    {{nombre}}
                </v-col>
                <v-col cols="8">
                    <v-chip label>
                       {{fecha}} 
                    </v-chip>
                </v-col>
            </v-row>
            
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
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
    }
  }
</script>