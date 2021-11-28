<template>
  <v-col 
      cols="12"
      sm="12"
      md="12"
      lg="12"
      class="pa-2 mx-auto"
  >
    <v-card
    
      class="mx-auto titulo"
      width="304"
    >
      <v-card-title  class="tituloCard">
        <v-row align="center" justify="center">
          <v-col cols="4" class="white--text py-1">
            {{code}}
          </v-col>
          <v-col cols="8"  class="white--text py-1">
            <DialogoPropiedades
              :id="id"
              :nombre="nombreDessarrollo"
              :precio.sync="precio"
              :recamaras="recamaras"
              :cordenadas="cordenadas"
              :banos="banos"
              :TDP="tdp"
              :m2="m2"
              :estado="status"
            />
          </v-col>
        </v-row>
      </v-card-title>

      <v-card-text class="pa-0 textoCard">
        <v-container fluid>
          <v-row align="center" justify="center" class="textoCard">
            <v-col cols="7" class="pa-2 py-1">
              <div class="white--text">
               <v-icon>mdi-cash</v-icon> $ {{precio}} {{tipoMoneda}}
              </div>
              
            </v-col>
            <v-col cols="5" class="pa-2 py-1">
              <v-chip
                :color="getColor(status)"
                dark
                label
              >
                {{getName(status)}}
              </v-chip>
            </v-col>
            <v-col cols="6" class="pa-2 py-1">
                <div><strong>TDP: </strong>{{tdp}}</div>  
            </v-col>
            <v-col cols="6" class="pa-2 py-1">
                  <div>
                    <strong>Planta: </strong>{{planta}} 
                  </div>
            </v-col>
           
            

            <v-col cols="6" class="pa-2 py-1">
                  <strong>#Baños: </strong>{{banos}}
            </v-col>
            <v-col cols="6" class="pa-2 py-1">
                  <div>
                    <strong>#Recs: </strong>{{recamaras}} 
                  </div>
            </v-col>
            
            <v-col cols="4" class="pa-2 py-1"> 
                <div><strong>M2: </strong>{{m2.total}} m2</div>
            </v-col>
            <v-col cols="8" class="pa-2 py-1">
                <div><strong>Precio X M2: </strong>{{precioxm2}}</div>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>
  </v-col>
</template>
   
<script>
  export default {
    props:{
        id: {
          type: String,required:'true',default:'0'
        },
        code: {
          type: String,required:'true',default:'0'
        },
        nombreDessarrollo: {
          type: String,default:'Sin nombre',required:'true',
        },
        precio: {
          type: Number,required:'true',default:function(){return{precio:precio}}
        },
        tipoMoneda: {
          type: String,default:'Sin Moneda',required:'true',
        },
        status: {
          type: String,required:'true',default:'Sin status'
        },
        recamaras: {
          type: String,required:'true',default:'Sin recamaras'
        },
        banos: {
          type: String,required:'true',default:'Sin desdeUSA'
        },
        planta: {
          type: String,required:'true',default:'Sin hastaMXN'
        },
        tdp: {
          type: String,required:'true',default:'Sin desdeMXN'
        },
        m2: {
          type: Object,required:'true',default: () => ({})
        },
        cordenadas: {
          type: Object, required:'true',default:() => ({})
        },
        precioxm2: {
          type: String,required:'true',default:'Sin desdeMXN'
        },
        construccion: {
          type: String,required:'true',default:'Sin desdeMXN'
        },
        terraza: {
          type: String,required:'true',default:'Sin desdeMXN'
        },

        
    },
    data() {
      return{
            show: false,
            max25chars: v => v.length <= 25 || 'Entrada demasiado larga!',
       
      }
    },
     mounted() {
      this.$emit('update:precio',this.precio)
    },
    methods: {
      getColor (dato) {
        if (dato == 'disponible') return '#70C879'
        else if (dato == 'reservado') return 'yellow'
        else return '#eb5a56'
      },
      getName (dato) {
        if (dato == 'disponible') return 'DISPONIBLE'
        else if (dato == 'reservado') return 'RESERVADO'
        else return 'VENDIDO'
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
  }
  .v-col--pers{
    max-height: 44px;
  }
  .cardNuevo{
    width: 300px;
  }
  .titulo{
    background:$azulBC28;
    color: white;
  }
  .textoCard{
    color: white;
  }
  .tituloCard{
    background: $azulFC28;
  }
</style>>