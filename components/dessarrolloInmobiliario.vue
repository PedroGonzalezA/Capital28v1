<template>
<v-container fluid>
  <v-row>
    <v-col cols="12">
        <v-container fluid>
          <v-col cols="12">
            <v-row align="center" justify="center" >
              <v-col cols="12" sm="12" md="4" lg="4">
                  <v-text-field 
                    label="Buscar"
           
                    clearable
                    type="text"
                    v-model="search"
                    append-icon="mdi-magnify"
                  >
                  </v-text-field>
              </v-col>
              <v-col cols="0" sm="0" md="3" lg="3"></v-col>
              <v-col cols="10" sm="10" md="4" lg="4">
                    <v-text-field 
                        label="Nuevo desarrollo"
                        clearable
                        v-model="nuevaTarea" 
                        v-on:keyup.enter="crearDesarrolloF" 
                        :hint="'Codigo Generado: '+convertirTexto(nuevaTarea)"
                    >
                    </v-text-field>
               
              </v-col>
              <v-col cols="1">
                  <v-btn icon @click="crearDesarrolloF"><v-icon>mdi-plus</v-icon></v-btn>
              </v-col>
            </v-row>
          </v-col>
          
          <v-col cols="12">
            <v-row no-gutters justify="center">
               <div v-for=" dato in filteredCourses" :key="dato._id">
                    <CardsDessarrollo
                      :key="dato._id"
                      :img="dato.media"
                      :nombre="dato.name"
                      :direccion='dato.address'
                      :status='dato.development_status'
                      :precio='dato.pricing'
                    />
                  </div>
            </v-row>  
          </v-col> 
          
          
      </v-container>
    </v-col>
  </v-row>
</v-container>
  
</template>
<script>
import { mapState, mapActions,mapGetters } from 'vuex'
  export default {
    data: () => ({
      nuevaTarea:'',
    }),
    methods:{
      ...mapActions('dessarrolloInmobiliario', {
          datosDessarrolloF: 'datosDessarrollo',
      }),
      crearDesarrolloF() {
        let nombreDesarrollo= this.nuevaTarea;
        let code= this.convertirTexto(this.nuevaTarea);
        this.$store.dispatch('dessarrolloInmobiliario/crearDesarrollo', { code,nombreDesarrollo});
        this.nuevaTarea='';
      },
      convertirTexto(texto){
        let txtSinEspacio
        let txtSinEs=""
        let textoMinuscula=texto.toLowerCase();
        for (var i = 0; i < textoMinuscula.length; i++) {
          txtSinEspacio = textoMinuscula[i].replace(' ', '-');
          txtSinEs=txtSinEs+txtSinEspacio
        }
          return txtSinEs;
      }
    },
    
    computed: {
        ...mapGetters('dessarrolloInmobiliario', {
            datosDessarrollo: 'getDessarrollo',
            nuevoDessarrollo: 'getNuevoDessarrollo',
            filtro: 'getFilteredCourse',
            todos: 'allCourses',
            nombre:'getSearchWord',
            estado:'getEstado'
        }),
        
        filteredCourses() {
            try {
            let a = (this.filtro || this.todos)
            console.log(a)
            return a
          } catch (e) {
            console.log(e)
          }
        },
        search: {
          get () {
            return this.nombre
          },
          set (value) {
            this.$store.dispatch('dessarrolloInmobiliario/FILTERED_COURSES', value)
            
          }
        },
        
    },
    
    mounted() {
      this.datosDessarrolloF();
    },
 
   
  }
</script>
<style>

</style>