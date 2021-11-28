<template>
  <v-row class="pa-0">
    <v-col cols="12" class="pa-0">
         <v-col cols="12">
           <v-row align="center">
              <v-col
                cols="9"
                sm="9"
                md="10"
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
                    @click="mensaje(snackText)"
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
                     
    </v-col>
    <div class="text-center ma-2">
    <v-snackbar
      v-model="snack"
      :timeout="3000"
      :color="snackColor"
    >
      {{ snackText }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="pink"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Cerrrar
        </v-btn>
      </template>
    </v-snackbar>
  </div>
  </v-row>
  
</template>
<script>
  import { mapState, mapActions,mapGetters } from 'vuex'
  export default {
    data: () => ({
      snack: false,
      snackColor: '',
      snackText: '',
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
      mensaje (data) {
        this.snack = true
        this.snackColor = 'success'
        this.snackText = 'Data saved'
        return
      },
      cancel () {
        this.snack = true
        this.snackColor = 'error'
        this.snackText = 'Canceled'
      },
      open () {
        this.snack = true
        this.snackColor = 'info'
        this.snackText = 'Dialog opened'
      },
      close () {
        console.log('Dialog closed')
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