<template>
    <v-row align="center" justify="center" >
        <v-col cols="3" sm="7" md="9" lg="11">
                <v-text-field v-model="nombre" ></v-text-field>
        </v-col>
        <v-col cols="9" sm="5" md="3" lg="1">
                <v-btn icon @click="agregarTarea"><v-icon>mdi-plus</v-icon></v-btn>
        </v-col>
    </v-row>
</template>
<script>
  export default {
      data: () => ({
      titulo:'gym',
      tareas:[],
      nuevaTarea:'',
    }),
    props:{
        id: {
          type: Number,
          required:'true',
          default:'0'
        },
        nombre: {
          type: String,
          default:'Sin nombre',
          required:'true',
        },
 
    },
    methods:{
      agregarTarea: function(){
        this.tareas.push({
        nombre:this.nombre,
        direccion:'Sin dirrecion',
        status:'Sin estado',
        desdeUSA:'',
        hastaUSA:'',
        desdeMXN:'',
        hastaMXN:'',
        reveal:false,
      });
        this.nuevaTarea='';
      }
    }
   
  }
</script>