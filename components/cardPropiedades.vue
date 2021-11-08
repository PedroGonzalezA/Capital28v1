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
        height="245px"
      >
        <v-card-text class="text-center">
          <v-row>
            <v-col cols="10">
              <p class="text-h5 text--primary">
                {{nombreDessarrollo}}
              </p>
            </v-col>
            <v-col cols="2">
              <p class="text-h5 text--primary">
                {{id}}
              </p>
            </v-col> 
            <v-col cols="8">
              <p>{{precio}}</p>
            </v-col>
            <v-col cols="2">
                            <p>{{recamaras}}</p>

            </v-col>
            <v-col cols="2">
              <p>{{banos}}</p>
            </v-col>
          </v-row>
          
          <div>
            <v-chip
              :color="getColor(status)"
              dark
            >
              {{status}}
            </v-chip>
          </div>
        </v-card-text>
        <v-card-actions>
          <v-btn
            tile
            text
            class=" text-capitalize  transparent"
            block
            color="teal accent-4"
            @click="$emit('update:reveal',!reveal)"
          >
            Detalles
          </v-btn>
        </v-card-actions>

        <v-expand-transition>
          <v-card
            v-if="reveal"
            class="transition-fast-in-fast-out v-card--reveal"
            style="height: 100%;"
          >
            <v-card-title class="v-card-title--pers">
              <p class="text-h4 text--primary">
                Detalles
              </p>
              <v-spacer />
              <v-btn icon height="25px" width="25px" :to="'/admin/real-estate-development/card/'+id">
                <v-icon>
                  mdi-playlist-edit
                </v-icon>
              </v-btn>
            </v-card-title>
            <v-card-text class="pb-0">
              <v-row>
                <v-col cols="6" class="pa-1 v-col--pers" >
                  <div class="text--primary">
                    <div><p><strong>Desde USA: </strong>{{desdeUSA}}</p></div>
                  </div>
                </v-col> 
                <v-col cols="6" class="pa-1 v-col--pers">
                  <div class="text--primary">
                    <div><p><strong>Hasta USA: </strong>{{hastaUSA}}</p></div>
                  </div>
                </v-col> 
                <v-col cols="6" class="pa-1 v-col--pers">
                  <div class="text--primary">
                    <div><p><strong>Desde MXN: </strong>{{desdeMXN}}</p></div>
                  </div>
                </v-col> 
                <v-col cols="6" class="pa-1 v-col--pers">
                  <div class="text--primary">
                    <div><p><strong>Hasta MXN: </strong>{{hastaMXN}}</p></div>
                  </div>
                </v-col> 
              </v-row>         
            </v-card-text>
            <v-card-actions class="pt-0">
              <br>
              <br>
              <br>
              <v-btn
                tile
                text
                class="   transparent"
                block
                color="red darken-2"
                dark
                @click="$emit('update:reveal',!reveal)"
              >
                Cerrar
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
        
       
      }
    },
    methods: {
      getColor (dato) {
        if (dato == 'EN OBRA') return 'yellow'
        else if (dato == '') return ''
        else return 'green'
      },
    },
  }
</script>
<style>
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
</style>