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
                  <v-switch
                    
                    label=""
                    class="pa-3"
                  ></v-switch>
              </v-col>
            </v-row>
         </v-col>
          <v-col cols="12">
            <v-row no-gutters justify="center" >
                <div  v-for='item in filteredCourses' :key="item._id">
                
                          <CardPropiedades 
                              
                              :id="item.code"
                              :nombreDessarrollo="item.desarrollo.name"
                              :tipoMoneda='item.pricing.currency'
                              :precio='item.pricing.price'
                              :status='item.contract_status'
                              :recamaras='item.features.rooms'
                              :banos='item.features.bathrooms'
                              :planta='item.floor.name'
                              :tdp='item.building.type'
                              :m2='item.building.total'
                              precioxm2='item.precioxm2'
                              :construccion='item.construction'
                              :terraza='item.terrace'                
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
            return this.$store.state.searchWord
          },
          set (value) {
            this.$store.dispatch('propiedades/FILTERED_COURSES', value)
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