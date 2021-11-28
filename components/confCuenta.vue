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
                                        MAX-width="48px"
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
                              <v-col cols="12">
                                  <v-row v-for="dato in datosHeaderContactRealEstateGroup" :key="dato._id">
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
                                                  {{fechaUsuario(dato.created_at)}} 
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
                                                  {{fechaUsuario(dato.updated_at)}}
                                              </div>
                                          </v-col>
                                      </v-row>
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
                 class="pb-0"
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
                  <div class="alertaE" >
                    {{mensaje}}
                  </div>
                </v-col>
                <v-col cols="12" sm="12" class="py-0 btnActualizarC">
                  <v-btn
                      class="btnActualizar"
                      text
                      @click="cambioDatosUsuario"
                    >
                      Actualizar
                    </v-btn>    
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
  import { mapState, mapActions,mapGetters } from 'vuex'
  export default {
    data: () => ({
      dialog: false,
    }),
    props:{
       id: {
          type: String,required:'true',default:'Sin id'
        },
        contact_id: {
          type: String,required:'true',default:'Sin id'
        },
        img: {
          type: Object,required:'true',default: () => ({}),
        },
       fullName: {
          type: String,required:'true',default:'sin nombre'
        },
        email: {
          type: String,required:'true',default:'Sin email'
        },
        
        tipoUsuario: {
          type: String,required:'true',default:'Sin usuario'
        },
        telefono: {
          type: String,required:'true',default:'Sin telefono'
        },
    },
    computed:{
    ...mapGetters('datos', {
            datosHeaderContactRealEstateGroup: 'getDatosHeaderContactRealEstateGroup',
    }),
    ...mapGetters('user', {
            mensaje: 'getMessage',
        })
    },
    methods:{
      ...mapActions('datos', {
              datosHeaderUserF: 'datosHeaderUser',
      }),
      fechaUsuario(dato){
          var fecha 
          var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',minutes: 'long',seconds: 'numeric' };
          fecha = new Date(dato);
          return fecha.toLocaleDateString("es-ES", options)
      },
      cambioDatosUsuario() {
            let email = this.email
            let name = this.fullName
            let phone = this.telefono
            let role = this.tipoUsuario
            let table = this.tipoUsuario
            let user_id = this.id
            let _id = this.contact_id
            this.$emit('update:fullName',this.fullName)
            this.$store.dispatch('user/actualizarDatos', { _id,user_id,table,role,phone,name,email});
            this.dialog=false
        }
    },
    mounted(){
        this.datosHeaderUserF();
    }
  }
</script>
<style lang="scss" scoped>
.contenedor{
    background: $colorPrincipal;
}
.alertaE{
    background: $colorVerde;
    color: white;
    text-align: center;
    border-radius: 2px;
    font-size: 16px;
    
}
 .tituloComentario{
    background: $azulBC28 ;
    color: white;
  }
  .btnCerrar{
    color: $rojoC28;
  }
  .btnActualizarC{
    text-align: right;
  }
  .btnActualizar{
    color: $azulBC28;
  }
</style>