<template>

      <v-card
        class="mx-auto cardNuevo"
        height="210px"
      >
      <v-row>
          <v-col cols="8" class="pt-0 pe-0">
                <v-img v-bind:src='imagen' class="imagenCard">
              
              
              <div class="contenidoImagen">
                <v-btn
                  class="text-capitalize botonImagen"
                  dark
                  icon
                  :to="'/admin/real-estate-development/edit/'+nombre"
                >
                  <v-icon class="iconoImagen">
                  mdi-playlist-edit
                  </v-icon>
                </v-btn>
                <div class="tituloImagen">
                  <strong>{{nombre}}</strong>
                </div>
                
              </div>

            </v-img>
            <v-btn
              tile
              :color="getColor(status.actual_status)"
              class="text-capitalize"
              block
              dark
            >
              {{getName(status.actual_status)}}
            </v-btn>
          </v-col>
          <v-col cols="4" class="pt-0 pl-0" v-for="dato in precio" :key="dato.real_estate_group_id" :v-if="dato==''">
            <div class="">
                <v-row 
                    justify="center" 
                    class="precioCard"
                    
                >
                <v-col cols="10" class="pb-1 px-1">
                    <div>
                    <strong>Desde USA:</strong>
                    <br>${{dato.general_price_ranging.from}} {{dato.currency}}
                    </div>
                </v-col>
                <v-col cols="10" class="pa-1">
                    <div>
                    <strong>Hasta USA:</strong>
                    <br>${{dato.general_price_ranging.to}} {{dato.currency}}
                    </div>
                </v-col>
                <v-col cols="10" class="pa-1">
                    <div>
                    <strong>Desde MXM:</strong>
                    <br>${{dato.general_price_ranging.to}} {{dato.currency}}
                    </div>
                </v-col>
                <v-col cols="10" class="pa-1">
                    <div>
                    <strong>Hasta MXN:</strong>
                    <br>${{dato.general_price_ranging.to}} {{dato.currency}}
                    </div>
                </v-col>
                </v-row>
            </div>
          </v-col>
      </v-row>
      <div>
          
          
      </div>     
        <v-card-text class="text-center" >
       
          <v-row align="center">

            <v-col cols="8" class="paddingCol">
              <div class=" text--primary">
                  <strong>Direccion:</strong>
                  {{direccion.full_address}}
              </div>
            </v-col>
            


          </v-row>
        </v-card-text>

      </v-card>

 
</template>
<script>
  export default {
    props:{
        img: {
          type: Object,default: () => ({}),required:'true',
        },
        nombre: {
          type: String,default:'Sin nombre',required:'true',
        },
        direccion: {
          type: Object,required:'true',default: () => ({}),
        },
        status: {
          type: Object,required:'true',default: () => ({})
        },
        precio: {
          type: Array, required:'true',default:() => []
        },

    },
    data() {
      return{
        imagen: this.img,
        precioL:this.precio
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
      getPrecio(dato){
        if(dato==""){
          
        }
      }
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
  width: 100%;
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
  width:210px;
  border-radius: 5px 5px 0 0;
}
.datos{
  height: 170px;
}
.botonImagen{
  position: relative;
}
.iconoImagen{
  color: $colorPrincipal;
}
.tituloImagen{
  position: relative;
  display: inline-block;
  width: 77%;
  text-align: center;
}
.estadoCard{
  color: white;
}
.precioCard{
  font-size: 13px;
  text-align: center;
}
.imagenDiv{
    width: 60%;
}
.precioDiv{
    width: 40%;
}
</style>