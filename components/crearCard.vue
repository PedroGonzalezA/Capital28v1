<template>
    <v-container fluid>
        
        <v-col cols="12">
          <v-row align="center" justify="center" >
            <v-col cols="3" sm="7" md="9" lg="11">
                <v-text-field v-model="nuevaTarea" ></v-text-field>
            </v-col>
            <v-col cols="9" sm="5" md="3" lg="1">
                <v-btn icon @click="agregarTarea"><v-icon>mdi-plus</v-icon></v-btn>
            </v-col>
          </v-row>
        </v-col>
        <v-col>
          <div 
            v-for="post in posts"
            :key="post.id"
          >
              <div><p>titulo:</p>{{post.id}}</div>
              <v-spacer></v-spacer>
              <div><p>Cuerpo:</p>{{post.name}}</div>
          </div>
          <CardsPost
            v-for="post in posts"
            :key="post.id"
            :nombre="post.username"
            :direccion='post.address.street'
            status=''
            desdeUSA=''
            hastaUSA=''
            desdeMXN=''
            hastaMXN=''
            :reveal.sync="post.reveal"
          />
        </v-col>
        <v-col cols="12">
          <v-row no-gutters justify="center">
              <div  v-for='(item,id) in tareas' :key="id">
               
                        <Cards 
                            :id="id"
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
</template>

<script>
  export default {
    data: () => ({
      titulo:'gym',
      tareas:[],
      nuevaTarea:'',
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