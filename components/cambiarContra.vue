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
          color="#5fa7a4"
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
        <v-card-title class="text-h5 tituloComentario">
          Cambiar contraseña
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
            <v-row justify="center">
              
              <v-col
                cols="12"
                sm="12"
                class="pa-0"
              >
              <v-card-subtitle>
                  <p>Estas por cambiar tu contraseña</p>
              </v-card-subtitle>
              </v-col>

              <v-col
                cols="12"
                sm="6"
                class="py-0"
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
                class="py-0"
              >
               <v-text-field
                    label="Confirmar nueva contraseña"
                    filled
                    placeholder="Confirmar contraseña"
                ></v-text-field>
              </v-col>
              <p class="info--text red--text"><small>Por seguridad, es necesario volver a iniciar sesión una vez realizadó el cambio.</small> </p>
              
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
                    <v-spacer></v-spacer>

                  <v-btn
                    class="btnCambiar"
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
<style lang="scss" scoped>
  .tituloComentario{
    background: $azulBC28 ;
    color: white;
  }
  .btnCerrar{
    color: $rojoC28;
  }
  .btnCambiar{
    color: $azulBC28;
  }
</style>