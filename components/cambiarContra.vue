<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          v-bind="attrs"
          v-on="on"
          color="#6ED9A0"
          text
        >
          Cambiar Contraseña
          <v-icon
          size="15px"
          >
             mdi-pencil-lock
          </v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-toolbar
              color="#262d3c"
              dark
            >
              <v-toolbar-title>
                <h7>Cambiar contraseña</h7> 
              </v-toolbar-title>
            </v-toolbar>
        <v-card-text>
          <v-container>
            <v-row justify="center">
              
              <v-col
                cols="12"
                sm="12"
                
              >
              <v-card-subtitle
              
              >
                  <p>Estas por cambiar tu contraseña</p>
              </v-card-subtitle>
              </v-col>

              <v-col
                cols="12"
                sm="6"
                
              >
               <v-text-field
                    label="Nueva Contraseña"
                    filled
                    placeholder="Contraseña"
                ></v-text-field>
                
              </v-col>

              <v-col
                cols="12"
                sm="6"
                
              >
               <v-text-field
                    label="Confirmar nueva contraseña"
                    filled
                    placeholder="Confirmar contraseña"
                ></v-text-field>
              </v-col>
              <p class="info--text"><small>Por seguridad, es necesario volver a iniciar sesión una vez realizadó el cambio.</small> </p>
              
            </v-row>
          </v-container>
        </v-card-text>
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
                    Cambiar contraseña
                  </v-btn>
                </v-card-actions>
       
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
  export default {
    data: () => ({
      dialog: false,
    }),
  }
</script>