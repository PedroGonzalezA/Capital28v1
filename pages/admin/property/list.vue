<template>
  <v-row>

    <v-col cols="12">
         <v-col cols="12">
           <v-row align="center">
              <v-col
                cols="10"
                sm="11"
                md="11"
                lg="11"
              >
                <v-text-field
                  v-model="search"
                  append-icon="mdi-magnify"
                  label="Buscar"
                  hide-details
                 ></v-text-field>
              </v-col>
              <v-col
                cols="2"
                sm="1"
                md="1"
                lg="1"
              >
                <v-btn icon>
                  <v-icon>mdi-tune</v-icon>      
                </v-btn>
              </v-col>
            </v-row>
         </v-col>

          <v-col cols="12">
            <v-row no-gutters justify="center">
                <div  v-for='item in tareas' :key="item.id" >
                
                          <CardPropiedades 
                              
                              :id="item.id"
                              :nombreDessarrollo="item.nombreDessarrollo"
                              :precio='item.precio'
                              :status='item.status'
                              :recamaras='item.recamaras'
                              :banos='item.banos'
                              :planta='item.planta'
                              :tdp='item.tdp'
                              :m2='item.m2'
                              :precioxm2='item.precioxm2'
                              :construccion='item.construccion'
                              :terraza='item.terraza'
                              :reveal.sync="item.reveal"
                
                          />
                  
                  </div>
            </v-row>  
          </v-col>           
    </v-col>
  </v-row>
</template>
<script>
  export default {
    data: () => ({
      search:'',
      tareas:[
        {
          id:'L-110',
          status:'Disponible',
          nombreDessarrollo:'Prueba test 1',
          precio:'$1,000,000 MXN',
          recamaras: '1',
          banos: '2',
          planta:'Planta Baja',
          tdp:'A',
          m2:'34m2',
          precioxm2:'$2,500 USD m2',
          construccion:'90',
          terraza:'4',
          reveal:false,
        },
        {
          id:'L-111',
          status:'Disponible',
          nombreDessarrollo:'prueba1',
          precio:'$300,000 MXN',
          recamaras: '1',
          banos: '2',
          planta:'Planta Baja',
          tdp:'A',
          m2:'34m2',
          precioxm2:'$2,500 USD m2',
          construccion:'90',
          terraza:'4',
          reveal:false
        },
         {
          id:'L-112',
          status:'Disponible',
          nombreDessarrollo:'prueba2',
          precio:'$400,000 MXN',
          recamaras: '1',
          banos: '2',
          planta:'Planta Baja',
          tdp:'A',
          m2:'34m2',
          precioxm2:'$2,500 USD m2',
          construccion:'90',
          terraza:'4',
          reveal:false
        },
         {
          id:'L-113',
          status:'Disponible',
          nombreDessarrollo:'prueba3',
          precio:'$400,000 MXN',
          recamaras: '1',
          banos: '2',
          planta:'Planta Baja',
          tdp:'A',
          m2:'34m2',
          precioxm2:'$2,500 USD m2',
          construccion:'90',
          terraza:'4',
          reveal:false
        }
      ],
      nuevaTarea:'',
      reveal:false,
    }),
    methods:{
      
    },
  
    computed: {
        
    }
   
  }
</script>

<style>

</style>