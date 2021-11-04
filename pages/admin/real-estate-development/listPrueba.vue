<template>
<div>
        <v-col cols="12">
          <v-row align="center" justify="center" >
            <v-col cols="3" sm="7" md="9" lg="10"></v-col>
            <v-col cols="9" sm="5" md="3" lg="2">
              <CrearCardsDessarrollo 
                    
              />
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12">
          <v-row no-gutters justify="center">
            <Cards 
              v-for='(dato,id) in datos' 
              :key="id"
              :id="dato.id"
              :nombre='dato.nombre'
              :direccion='dato.direccion'
              :status='dato.status'
              :desdeUSA='dato.desdeUSA'
              :hastaUSA='dato.hastaUSA'
              :desdeMXN='dato.desdeMXN'
              :hastaMXN='dato.hastaMXN'
              :reveal.sync='dato.reveal'
              
            />
          </v-row>
            
        </v-col> 
      
</div>
 
</template>

<script>
export default {
  data(){
    return{
      datos:[
          {
              id:'0',
              nombre:'Test1',
              direccion:'Direccion',
              status:'EN OBRA',
              desdeUSA:'$250,000 USA',
              hastaUSA:'$500,000 USA',
              desdeMXN:'$500,000 MXN',
              hastaMXN:'$1,000,000 MXN',        
              reveal: false, 
          },
          {
              id:'1',
              nombre:'Test2',
              direccion:'Direccion',
              status:'EN OBRA',
              desdeUSA:'$250,000 USA',
              hastaUSA:'$500,000 USA',
              desdeMXN:'$500,000 MXN',
              hastaMXN:'$1,000,000 MXN',        
              reveal: false, 
          },
          {
              id:'2',
              nombre:'Test3',
              direccion:'Direccion',
              status:'EN OBRA',
              desdeUSA:'$250,000 USA',
              hastaUSA:'$500,000 USA',
              desdeMXN:'$500,000 MXN',
              hastaMXN:'$1,000,000 MXN',        
              reveal: false, 
          },
          {
              id:'3',
              nombre:'Test4',
              direccion:'Direccion',
              status:'EN OBRA',
              desdeUSA:'$250,000 USA',
              hastaUSA:'$500,000 USA',
              desdeMXN:'$500,000 MXN',
              hastaMXN:'$1,000,000 MXN',        
              reveal: false, 
          },
          {
              id:'4',
              nombre:'Test5',
              direccion:'Direccion',
              status:'EN OBRA',
              desdeUSA:'$250,000 USA',
              hastaUSA:'$500,000 USA',
              desdeMXN:'$500,000 MXN',
              hastaMXN:'$1,000,000 MXN',        
              reveal: false, 
          },
          {
              id:'5',
              nombre:'Test6',
              direccion:'Direccion',
              status:'EN OBRA',
              desdeUSA:'$250,000 USA',
              hastaUSA:'$500,000 USA',
              desdeMXN:'$500,000 MXN',
              hastaMXN:'$1,000,000 MXN',        
              reveal: false, 
          },
          {
              id:'6',
              nombre:'Test7',
              direccion:'Direccion',
              status:'EN OBRA',
              desdeUSA:'$250,000 USA',
              hastaUSA:'$500,000 USA',
              desdeMXN:'$500,000 MXN',
              hastaMXN:'$1,000,000 MXN',        
              reveal: false, 
          },
        ],
        methods:{
        agregarComponente: function(){
            this.tareas.push({
                nombre:this.nuevaTarea,
                estado:false
            });
            this.nuevaTarea='';
        }
    }
    }   
  }
  
           
}
</script>

<style>

</style>