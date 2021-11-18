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
          <v-col cols="4" class="white--text">
            {{id}}
          </v-col>
          <v-col cols="8"  class="white--text">
            {{nombreDessarrollo}}
          </v-col>
        </v-row>
      </v-card-title>

      <v-card-text class="pa-0">
        <v-container fluid>
          <v-row align="center" justify="center">
            <v-col cols="8" class="pa-2">
              <div class="white--text">
               Precio: {{precio}} 
              </div>
              
            </v-col>
            <v-col cols="4" class="pa-2">
              <v-chip
                :color="getColor(status)"
                dark
                label
              >
                {{status}}
              </v-chip>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>

      <v-card-actions >
        <v-btn
          color="white"
          icon
        >
          <v-icon>
            mdi-playlist-edit
          </v-icon>
        </v-btn>

        <v-spacer></v-spacer>

        <v-btn
          icon
          @click="show = !show"
          color="white"
        >
          <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
        </v-btn>
      </v-card-actions>
                      
      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>
          
          <v-card-text style="background:white;" >
            <v-row align="center" justify="center">
              <v-col cols="12" class="pa-1">
                  <h3>DETALLES</h3>
              </v-col>
              <v-col cols="6" class="pa-1">
                  <div>
                    <strong>Recamaras: </strong>{{recamaras}} 
                  </div>
              </v-col>
              <v-col cols="6" class="pa-1">
                  <strong>Baños: </strong>{{banos}}
              </v-col>
              <v-col cols="6" class="pa-1">
                  <div>
                    <strong>Planta: </strong>{{planta}} 
                  </div>
              </v-col>

              <v-col cols="6" class="pa-1">
                <div><strong>TDP: </strong>{{tdp}}</div>  
              </v-col>
              <v-col cols="6" class="pa-1"> 
                <div><strong>M2: </strong>{{m2}}</div>
              </v-col>
              <v-col cols="6" class="pa-1">
                <div><strong>Precio X M2: </strong>{{precioxm2}}</div>
              </v-col>
            </v-row>
          </v-card-text>
        </div>
      </v-expand-transition>
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
          type: String,
          default:'Sin precio',
          required:'true',
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
          type: String,
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
              show: false,
            max25chars: v => v.length <= 25 || 'Entrada demasiado larga!',

       
      }
    },
    methods: {
      getColor (dato) {
        if (dato == 'EN OBRA') return 'yellow'
        else if (dato == '') return ''
        else return 'green'
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
    color:black;
  }
</style>>