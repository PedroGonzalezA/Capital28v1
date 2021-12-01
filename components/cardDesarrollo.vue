<template>
      <div>
        <div>
          <v-card
            class="mx-auto cardNuevo"
            height="209px"
          >
            <div class="imagenE">
                  <v-img v-bind:src='imagen.featured_image' class="imagenCard">
                    hola              
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
                  <div class="estado text-center" :style="'background:'+getColor(status.actual_status)+''">
                      <strong>{{getName(status.actual_status)}}</strong>
                  </div>
            </div>
            <div class="textoImagen"  v-for="dato in precio" :key="dato.real_estate_group_id" :v-if="dato==''">
              <v-row 
                justify="center" 
                class="precioCard"
                          
              >
                      <v-col cols="10" class="pb-1 px-1">
                          <div>
                          <strong>Desde USA:</strong>
                          <br>${{dato.general_price_ranging.from}} {{dato.currency}}
                          </div>
                          <v-divider/>
                      </v-col>
                      
                      <v-col cols="10" class="pa-1">
                          <div>
                          <strong>Hasta USA:</strong>
                          <br>${{dato.general_price_ranging.to}} {{dato.currency}}
                          </div>
                          <v-divider/>
                      </v-col>
                      <v-col cols="10" class="pa-1">
                          <div>
                          <strong>Desde MXM:</strong>
                          <br>${{dato.general_price_ranging.to}} {{dato.currency}}
                          </div>
                          <v-divider/>
                      </v-col>
                      <v-col cols="10" class="pa-1">
                          <div>
                          <strong>Hasta MXN:</strong>
                          <br>${{dato.general_price_ranging.to}} {{dato.currency}}
                          </div>
                      </v-col>
              </v-row>
            </div>
            <div class="direccion">
              <div class=" text--primary text-center">
                <p class="titulo">Direccion:</p>
                {{direccion.full_address}}
              </div>
            </div>
          </v-card>
        </div>
      </div>
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
  background: $azulBC28;
  color: white;
}

.paddingCol{
    max-height: 56px;
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
  height:161px;
  width:210px;
  border-radius: 5px 0px 0 0;
}
.datos{
  height: 170px;
}
.botonImagen{
  position: relative;
}
.iconoImagen{
  color: $grisC28;
}
.tituloImagen{
  position: relative;
  display: inline-block;
  width: 70%;
  color: white;
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
.imagenE{
  width:207px;
  height:185px;
  border-radius: 5px 5px 0 0;
  display: inline-block;
}
.textoImagen{
   width:33%;
   height:185px;
   display: inline-block;
   position: absolute;
}
.direccion{
  background: $azulC28;
}
.titulo{
  color: white;
}
</style>