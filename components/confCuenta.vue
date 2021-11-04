<template>
    <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          v-bind="attrs"
          v-on="on"
          class="text-capitalize  v-btn--block  transparent"
          
        >
          Mi cuenta
          <v-spacer></v-spacer>
          <v-icon
          size="16px"
          >
                mdi-cog-outline
            </v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-toolbar
              color="#262d3c"
              dark
            >    
            <v-toolbar-title>
               <h5>Mi cuenta</h5> 
            </v-toolbar-title>
            </v-toolbar>
        <v-card-text>
          <v-container>
            <v-row justify="center">
              <v-col
                cols="12"
                sm="6"
                class="py-5"
                
              >
                <v-row>
                    <v-card
                    max-height="60vh"
                    width="100%">
                        <v-container>
                            <v-row align="center" justify="center">
                                <v-col
                                cols="12"
                                sm="12"
                                align="center"
                                justify="center"
                                >
                                    <v-avatar
                                        height="20vh"
                                        min-width="48px"
                                        width="20vh"
                                        >
                                        <v-img
                                          :src="img"
                                        >

                                        </v-img>
                                    </v-avatar>
                                </v-col>

                                <v-col
                                    cols="12"
                                    align="center"
                                    justify="center"
                                >
                                        <CambiarContra />
                                </v-col>

                               <v-col
                                cols="12"
                                >
                                <div>
                                    <h4>
                                        Usuario:
                                    </h4>
                                </div>
                                <v-row
                                align="start"
                                justify="start"
                                >
                                    <v-col
                                    cols="12"
                                    class="py-2 px-5"
                                    >
                                        <div>
                                            {{tipoUsuario}}
                                        </div>
                                    </v-col>
                                </v-row>
                                </v-col>

                                <v-col
                                cols="12"
                                >
                                <div>
                                    <h4>
                                        Fecha de registro:
                                    </h4>
                                </div>
                                <v-row
                                align="start"
                                justify="start"
                                >
                                    <v-col
                                    cols="12"
                                    class="py-2 px-5"
                                    >
                                        <div>
                                            {{fechaRegistro}}
                                        </div>
                                    </v-col>
                                </v-row>
                                </v-col>

                                <v-col
                                cols="12"
                                >
                                <div>
                                    <h4>
                                        Ultima Actualizacion:
                                    </h4>
                                </div>
                                <v-row
                                align="start"
                                justify="start"
                                >
                                    <v-col
                                    cols="12"
                                    class="py-2 px-5"
                                    >
                                        <div>
                                            {{ultimaActualizacion}}
                                        </div>
                                    </v-col>
                                </v-row>
                                </v-col>
                            </v-row>    
                        </v-container>
                        
                    </v-card>
                </v-row> 
              </v-col>

              <v-col
                cols="12"
                sm="6"
                md="6"
                
              >
              <v-row>
                <v-col
                cols="12"
                sm="12"
                >
                <v-text-field
                    label="Nombre"
                    v-model="fullName"
                    filled
                ></v-text-field>
                </v-col>

                <v-col
                 cols="12"
                 sm="12"
                 >
                <v-text-field
                    label="Correo"
                    v-model="email"
                    filled
                ></v-text-field>
                </v-col>

                <v-col
                 cols="12"
                 sm="12"
                 >
                <v-text-field
                    label="Telefono"
                    v-model="telefono"
                    filled
                ></v-text-field>
                </v-col>

                <v-col
                 cols="12"
                 sm="12"
                 >
                  <v-card-actions>
                    <v-btn
                      color="red darken-2"
                      text
                      @click="dialog = false"
                    >
                      Cancelar
                    </v-btn>                    
                    <v-spacer></v-spacer>

                    <v-btn
                      color="#6ED9A0"
                      text
                      @click="dialog = false"
                    >
                      Actualizar
                    </v-btn>
                  </v-card-actions>
                </v-col>
                
               
              </v-row>
               

              </v-col>
              
            </v-row>
          </v-container>
        </v-card-text>
       
      </v-card>
    </v-dialog>
</template>
<script>
  export default {
    data: () => ({
      dialog: false,
    }),
    props:{
       id: {
          type: String,
          required:'true',
          default:'Sin id'
        },
        img: {
          type: String,
          required:'true',
          default:'Sin imagen'
        },
       fullName: {
          type: String,
          required:'true',
          default:'Sin nombre'
        },
        email: {
          type: String,
          required:'true',
          default:'Sin email'
        },
        
        tipoUsuario: {
          type: String,
          required:'true',
          default:'Sin usuario'
        },
        fechaRegistro: {
          type: String,
          required:'true',
          default:'Sin fecha de registro'
        },
        ultimaActualizacion: {
          type: String,
          required:'true',
          default:'Sin ultima actualizacion'
        },
        telefono: {
          type: String,
          required:'true',
          default:'Sin telefono'
        },
    }
  }
</script>