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
      <v-card-title  >
        <v-row>
          <v-col cols="4" class="white--text py-1">
            {{id}}
          </v-col>
          <v-col cols="8"  class="white--text py-1">
            {{nombreDessarrollo}}
          </v-col>
        </v-row>
      </v-card-title>

      <v-card-text class="pa-0 textoCard">
        <v-container fluid>
          <v-row align="center" justify="center" class="textoCard">
            <v-col cols="7" class="pa-2 py-1">
              <div class="white--text">
                <v-text-field
                  v-model="precio"
                  prepend-inner-icon="mdi-cash"
                >
                </v-text-field>
                {{tipoMoneda}}
               <v-icon>mdi-cash</v-icon> ${{precio}}{{tipoMoneda}}
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
            <v-col cols="7" class="pa-2 py-1">
                  <div>
                    <strong>Planta: </strong>{{planta}} 
                  </div>
            </v-col>
            <v-col cols="5" class="pa-2 py-1">
                  <div>
                    <strong>Recamaras: </strong>{{recamaras}} 
                  </div>
            </v-col>

            <v-col cols="6" class="pa-2 py-1">
                  <strong>Baños: </strong>{{banos}}
            </v-col>
            <v-col cols="6" class="pa-2 py-1">
                <div><strong>TDP: </strong>{{tdp}}</div>  
            </v-col>
            
            <v-col cols="4" class="pa-2 py-1"> 
                <div><strong>M2: </strong>{{m2}} m2</div>
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
          type: String,
          required:'true',
          default:'0'
        },
        nombreDessarrollo: {
          type: String,
          default:'Sin nombre',
          required:'true',
        },
        precio: {
          type: Number,
          default:'Sin precio',
          required:'true',
        },
        tipoMoneda: {
          type: String,
          required:'true',
          default:'Sin Moneda'
        },
        status: {
          type: String,
          required:'true',
          default:'Sin status'
        },
        recamaras: {
          type: String,
          required:'true',
          default:'Sin recamaras'
        },
        banos: {
          type: String,
          required:'true',
          default:'Sin desdeUSA'
        },
        planta: {
          type: String,
          required:'true',
          default:'Sin hastaMXN'
        },
        tdp: {
          type: String,
          required:'true',
          default:'Sin desdeMXN'
        },
        m2: {
          type: Number,
          required:'true',
          default:'Sin desdeMXN'
        },
        precioxm2: {
          type: String,
          required:'true',
          default:'Sin desdeMXN'
        },
        construccion: {
          type: String,
          required:'true',
          default:'Sin desdeMXN'
        },
        terraza: {
          type: String,
          required:'true',
          default:'Sin desdeMXN'
        },

        
    },
    data() {
      return{
            show: false,
            max25chars: v => v.length <= 25 || 'Entrada demasiado larga!',
       
      }
    },
    methods: {
      getColor (dato) {
        if (dato == 'disponible') return '#70C879'
        else if (dato == 'reservado') return 'yellow'
        else return '#D22424'
      },
      getName (dato) {
        if (dato == 'disponible') return 'DISPONIBLE'
        else if (dato == 'reservado') return 'RESERVADO'
        else return 'VENDIDO'
      },
      save () {
        this.snack = true
        this.snackColor = 'success'
        this.snackText = 'Dato cambiado'
      },
      cancel () {
        this.snack = true
        this.snackColor = 'error'
        this.snackText = 'Cancelado'
      },
      open () {
        this.snack = true
        this.snackColor = 'info'
        this.snackText = 'Dialogo abierto'
      },
      close () {
        console.log('Dialog cerrado')
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
    background:$colorAzulB;
    color: white;
  }
  .textoCard{
    color: white;
  }
</style>>