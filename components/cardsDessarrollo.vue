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
        max-width="440"      
        height="241px"
      >
          
            <div class="imagenCardDiv">
              <v-img v-bind:src='imagen' class="imagenCard"></v-img>
              <div>
                hola
              </div>
            </div>
            
        
        <v-card-text class="text-center" >
          <v-row align="center">

            <v-col cols="6" class="paddingCol">
              <div class=" text--primary">
                <strong>{{nombre}}</strong>
              </div>
            </v-col>
            
            <v-col cols="6" class="paddingCol">
              <div>
                <v-chip
                  :color="getColor(status)"
                  dark
                >
                  {{getName(status)}}
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
            :to="'/admin/real-estate-development/edit/'+nombre"          
          >
              <v-icon>
                 mdi-playlist-edit
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
        img: {
          type: Object,
          default: () => ({}),
          required:'true',
        },
        nombre: {
          type: String,
          default:'Sin nombre',
          required:'true',
        },
        direccion: {
          type: Object,
          default: () => ({}),
          required:'true',
        },
        status: {
          type: Object,
          required:'true',
          default: () => ({})
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
    },
    data() {
      return{
        imagen: this.img
       
      }
    },
    methods: {
      getColor (dato) {
        if (dato == 'construction') return 'orange'
        else if (dato == '') return 'black'
        else return 'black'
      },
      getName (dato) {
        if (dato == 'construction') return 'EN OBRA'
        else if (dato == '') return ''
        else return ''
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
  width: 400px;
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
  height:145px;
  width:280px;
  border-radius: 5px 5px 0 0;
}
.imagenCardDiv{
  width:280px;
}
.datos{
  height: 170px;
}
</style>