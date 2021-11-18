<template>
    <v-col 
      cols="12"
      sm="12"
      md="12"
      lg="12"
      class="pa-2 mx-auto"
    >
      <v-card
        class="mx-auto cardNuevo"
        max-width="344"      
        height="241px"
      >
        <div class="imagenCard">
          <v-img v-bind:src='imagen' class="imagenCard"></v-img>
        </div>
        <v-card-text class="text-center" >
          <v-row align="center">
            <v-col cols="8" class="paddingCol">
              <div class=" text--primary">
                <strong>{{nombre}}</strong>
              </div>
            </v-col>
            
            <v-col cols="4" class="paddingCol">
              <div>
                <v-chip
                  :color="getColor(status)"
                  dark
                >
                  {{status}}
                </v-chip>
              </div>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions class="pa-0">
          <v-btn
            tile
        
            class=" text-capitalize  transparent boton"
            block
            dark
            @click="$emit('update:reveal',!reveal)"
          >
              <v-icon>
                  mdi-chevron-up
                </v-icon>
          </v-btn>
        </v-card-actions>

        <v-expand-transition>
          <v-card
            v-if="reveal"
            class="transition-fast-in-fast-out v-card--reveal"
            style="height: 100%;"
          >
          
            <v-card-title class="v-card-title--pers" >
              <p class="text-h4  white--text">Detalles</p>
              <v-spacer />
              <v-btn icon height="25px" width="25px" :to="'/admin/real-estate-development/edit/'+nombre">
                <v-icon color="white">
                  mdi-playlist-edit
                </v-icon>
              </v-btn>
            </v-card-title>
            <v-card-text class="pb-0">
              <v-container fluid class="datosDessarrollo">
                <v-row justify="center" align="center">
                  <v-col cols="12" class="pa-1">
                    <div>
                      {{direccion}}
                    </div>
                  </v-col>
                  <v-col cols="6" class="pa-1">
                    <div>
                     <strong>DESDE USA:</strong> {{desdeUSA}}
                      
                    </div>
                  </v-col>
                  <v-col cols="6" class="pa-1">
                    <div>
                      <strong>HASTA USA:</strong> {{hastaUSA}}
                      
                    </div>
                  </v-col>
                  <v-col cols="6" class="pa-1"> 
                    <div>
                      <strong>DESDE MXN:</strong> {{desdeMXN}}
                      
                    </div>
                  </v-col>
                  <v-col cols="6" class="pa-1">
                    <div>
                      <strong>HASTA MXN:</strong> {{hastaMXN}}
                      
                    </div>
                  </v-col>
                </v-row>  
              </v-container>
                     
            </v-card-text>

            <v-card-actions class="pa-0">
              <v-btn  
                text
                color="blue"
                class="   transparent botonCerrar"
                block
                dark
                @click="$emit('update:reveal',!reveal)"
              >
                <v-icon>
                  mdi-chevron-down
                </v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-expand-transition>
      </v-card>
    </v-col>

 
</template>
<script>
  export default {
    props:{
        id: {
          type: Number,
          required:true,
          default:0
        },
        img: {
          type: String,
          default:'Sin img',
          required:'true',
        },
        nombre: {
          type: String,
          default:'Sin nombre',
          required:'true',
        },
        direccion: {
          type: String,
          default:'Sin dirreccion',
          required:'true',
        },
        status: {
          type: String,
          required:'true',
          default:'Sin status'
        },
        hastaUSA: {
          type: String,
          required:'true',
          default:'Sin hastaUSA'
        },
        desdeUSA: {
          type: String,
          required:'true',
          default:'Sin desdeUSA'
        },
        hastaMXN: {
          type: String,
          required:'true',
          default:'Sin hastaMXN'
        },
        desdeMXN: {
          type: String,
          required:'true',
          default:'Sin desdeMXN'
        },
        reveal: {
          type: Boolean,
          required:'true',
          default(){
            return false
          }
        },

        
    },
    data() {
      return{
        imagen: this.img
       
      }
    },
    methods: {
      getColor (dato) {
        if (dato == 'EN OBRA') return 'orange'
        else if (dato == '') return ''
        else return 'black'
      },
     
    },
  }
</script>
<style lang="scss" scoped>
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
.v-card-title--pers {
  max-height: 68px;
  background:$colorAzulB;
}
.v-col--pers{
  max-height: 44px;
}
.cardNuevo{
  width: 300px;
}

.paddingCol{
    max-height: 56px;
    padding: 0px;
}
.datosDessarrollo{
  height: 137px;
}
.botonCerrar{
  border-radius: 0 0 5px 5px;
}
.boton{
  border-radius: 0 0 5px 5px;
  background: $colorAzulB;
}
.imagenCard{
  height:165px;
  width:300px;
  border-radius: 5px 5px 0 0;
}
.datos{
  height: 170px;
}
</style>