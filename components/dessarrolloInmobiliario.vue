<template>
  <v-row>
    <v-col cols="12">
        <v-container fluid>
          <v-col cols="12">
            <v-row align="center" justify="center" >
              <v-col cols="9" sm="7" md="9" lg="11">
                  <v-text-field v-model="nuevaTarea" v-on:keyup.enter="agregarTarea" ></v-text-field>
              </v-col>
              <v-col cols="3" sm="5" md="3" lg="1">
                  <v-btn icon @click="agregarTarea"><v-icon>mdi-plus</v-icon></v-btn>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12">
            <v-row no-gutters justify="center">
                <div  v-for='(item,Identificador) in tareas' :key="Identificador">
                
                          <CardsDessarrollo
                              :key="Identificador"
                              :id="Identificador"
                              :img="item.img"
                              :nombre="item.nombre"
                              :direccion='item.direccion'
                              :status='item.status'
                              :desdeUSA='item.desdeUSA'
                              :hastaUSA='item.hastaUSA'
                              :desdeMXN='item.desdeMXN'
                              :hastaMXN='item.hastaMXN'
                              :reveal.sync="item.reveal"
                
                          />
                  
                  </div>
            </v-row>  
          </v-col> 
          
          
      </v-container>
    </v-col>
  </v-row>
</template>
<script>
  export default {
    data: () => ({
      tareas:[
         {
              id:0,
              nombre:'Test1 proyecto prueba',
              direccion:'Direccion',
              status:'EN OBRA',
              desdeUSA:'$250,000 USA',
              hastaUSA:'$500,000 USA',
              desdeMXN:'$500,000 MXN',
              hastaMXN:'$12,000,000 MXN',        
              reveal: false, 
              img:'https://res.cloudinary.com/capital28-investments/image/upload/v1570208235/Capital%2028/TheBoatOver.jpg'
          },
          {
              id:1,
              nombre:'Test2',
              direccion:'Direccion',
              status:'EN OBRA',
              desdeUSA:'$250,000 USA',
              hastaUSA:'$500,000 USA',
              desdeMXN:'$500,000 MXN',
              hastaMXN:'$1,000,000 MXN',        
              reveal: false, 
              img:'https://res.cloudinary.com/capital28-investments/image/upload/v1570208235/Capital%2028/TheBoatOver.jpg'
          },
          {
              id:2,
              nombre:'Test3',
              direccion:'Direccion',
              status:'EN OBRA',
              desdeUSA:'$250,000 USA',
              hastaUSA:'$500,000 USA',
              desdeMXN:'$500,000 MXN',
              hastaMXN:'$1,000,000 MXN',        
              reveal: false, 
              img:''
          },
          {
              id:3,
              nombre:'Test4',
              direccion:'Direccion',
              status:'EN OBRA',
              desdeUSA:'$250,000 USA',
              hastaUSA:'$500,000 USA',
              desdeMXN:'$500,000 MXN',
              hastaMXN:'$1,000,000 MXN',        
              reveal: false, 
              img:''
          },
          {
              id:4,
              nombre:'Test5',
              direccion:'Direccion',
              status:'EN OBRA',
              desdeUSA:'$250,000 USA',
              hastaUSA:'$500,000 USA',
              desdeMXN:'$500,000 MXN',
              hastaMXN:'$1,000,000 MXN',        
              reveal: false, 
              img:''
          },
          {
              id:5,
              nombre:'Test6',
              direccion:'Direccion',
              status:'EN OBRA',
              desdeUSA:'$250,000 USA',
              hastaUSA:'$500,000 USA',
              desdeMXN:'$500,000 MXN',
              hastaMXN:'$1,000,000 MXN',        
              reveal: false, 
              img:''
          },
          {
              id:6,
              nombre:'Test7',
              direccion:'Direccion',
              status:'EN OBRA',
              desdeUSA:'$250,000 USA',
              hastaUSA:'$500,000 USA',
              desdeMXN:'$500,000 MXN',
              hastaMXN:'$1,000,000 MXN',        
              reveal: false, 
              img:''
          },
      ],
      nuevaTarea:'',
    }),
    methods:{
      agregarTarea: function(){
        this.tareas.push({
        id:this.id,
        nombre:this.nuevaTarea,
        direccion:'Sin dirrecion',
        status:'Sin estado',
        desdeUSA:'Vacio',
        hastaUSA:'Vacio',
        desdeMXN:'Vacio',
        hastaMXN:'Vacio',
        reveal:false,
        img:'Vacio'
      });
        this.nuevaTarea='';
        localStorage.setItem('componente',JSON.stringify(this.tareas));
      }
    },
  
    computed: {
        posts() {
            return this.$store.getters['posts/getPosts']
        },
        
    },
    
    mounted() {
      let datos =JSON.parse(localStorage.getItem('componente'));
      this.tareas=datos;
  },
  watch: {
  
  }
   
  }
</script>

<style>

</style>