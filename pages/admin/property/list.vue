<template>
  <v-row>
    <v-col cols="12">
      <TablaPropiedades/>
    </v-col>
    <v-col cols="12">
          <v-col cols="12">
            <v-row no-gutters justify="center">
              <div v-for="post in posts" :key="post.id">
                <Cards
                  :id="post.id"
                  :nombre="post.username"
                  :direccion='post.address.street'
                  status='En OBRA'
                  desdeUSA=''
                  hastaUSA=''
                  desdeMXN=''
                  hastaMXN=''
                  :reveal.sync="reveal"
                />
              </div>
            </v-row>
            
          </v-col>
          <v-col cols="12">
            <v-row no-gutters justify="center">
                <div  v-for='(item,id) in tareas' :key="id">
                
                          <CardPropiedades 
                              :id="id"
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
      titulo:'gym',
      tareas:[
        {
          id:'1',
          status:'Disponible',
          nombreDessarrollo:'prueba',
          precio:'$200,000 MXN',
          recamaras: '1',
          banos: '2',
          planta:'Planta Baja',
          tdp:'A',
          m2:'34m2',
          precioxm2:'$2,500 USD m2',
          construccion:'90',
          terraza:'4',
          reveal:false
        ,}
      ],
      nuevaTarea:'',
      reveal:false,
    }),
    methods:{
      agregarTarea: function(){
        this.tareas.push({
        nombre:this.nuevaTarea,
        direccion:'Sin dirrecion',
        status:'Sin estado',
        desdeUSA:'Vacio',
        hastaUSA:'Vacio',
        desdeMXN:'Vacio',
        hastaMXN:'Vacio',
        reveal:false,
      });
        this.nuevaTarea='';
      }
    },
  
    computed: {
        posts() {
            return this.$store.getters['posts/getPosts']
        }
    }
   
  }
</script>

<style>

</style>