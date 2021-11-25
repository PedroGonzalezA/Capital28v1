<template>
  <v-row>

    <v-col cols="12">
         <v-col cols="12">
           <v-row align="center">
              <v-col
                cols="10"
                sm="11"
                md="11"
                lg="10"
              >
                <v-text-field
                  v-model="search"
                  append-icon="mdi-magnify"
                  label="Buscar"
                  hide-details
                  clearable
                 ></v-text-field>
              </v-col>
              <v-col
                cols="2"
                sm="1"
                md="1"
                lg="2"
              >
                  <v-switch
                    v-model="estadoA"
                    label=" Solo Disponibles"
                    class="pa-3"
                  ></v-switch>
              </v-col>
            </v-row>
         </v-col>
          <v-col cols="12">
            <v-row no-gutters justify="center" >
                <div  v-for='item in filteredCourses' :key="item._id">
                
                          <CardPropiedades 
                              :id='item._id'
                              :code="item.code"
                              :cordenadas="item.miscellaneous"
                              :nombreDessarrollo="item.desarrollo.name"
                              :tipoMoneda='item.pricing.currency'
                              :precio.sync='item.pricing.price'
                              :status='item.contract_status'
                              :recamaras='item.features.rooms'
                              :banos='item.features.bathrooms'
                              :planta='item.floor.name'
                              :tdp='item.building.type'
                              :m2='item.building'
                              precioxm2='item.precioxm2'
                              :construccion='item.construction'
                              :terraza='item.terrace'                
                          />
                  
                  </div>
                  
            </v-row>  
          </v-col> 
          <v-col cols="12">
            <v-row no-gutters justify="center" >
                <div  v-for='item in filteredCourses' :key="item._id">
                
                          <CardsPropiedades 
                              :id='item._id'
                                          
                          />
                  
                  </div>
                  
            </v-row>  
          </v-col>            
    </v-col>
  </v-row>
</template>
<script>
  import { mapState, mapActions,mapGetters } from 'vuex'
  export default {
    data: () => ({
    }),
    methods:{
       ...mapActions('propiedades', {
            datosPropiedadesF: 'datosPropiedades',
      }),
      
      getEstado (dato) {
        if (dato == 'disponible') return 'DISPONIBLE'
        else if (dato == 'reservado') return 'RESERVADO'
        else return 'VENDIDO'
      },
    },
  
    computed: {
        ...mapGetters('propiedades', {
            datosPropiedades: 'getPropiedades',
            filtro: 'getFilteredCourse',
            todos: 'allCourses',
            estado:'getEstado',
            searchW:'getSearchWord'
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
            return this.searchW
          },
          set (value) {
            this.$store.dispatch('propiedades/FILTERED_COURSES', value)
            
          }
        },
        estadoA: {
          get () {
            return this.estado
          },
          set (value) {
            this.$store.dispatch('propiedades/ESTADO',value)
          }
        }
        
    },
    
    mounted() {
      this.datosPropiedadesF();
    },
   
  }
</script>

<style>

</style>