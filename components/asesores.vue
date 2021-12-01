<template>
    <v-container fluid>
  <v-row>
    <v-col cols="12" class="pa-0">
        <v-container fluid class="pa-0">
          <v-col cols="12">
            <v-row align="center" justify="center" >
              <v-col cols="4" sm="2" md="2" lg="1">
                 <h3>Asesores</h3> 
              </v-col>
              <v-col cols="7" sm="6" md="7" lg="9">
                <v-text-field 
                    label="Buscar"
                    clearable
                    type="text"
                    v-model="search"
                    append-icon="mdi-magnify"
                  >
                </v-text-field>
              </v-col>
              <v-col cols="11" sm="4" md="3" lg="2" class="btnNuevoAsesor" style="align-content: right;">
                <NuevoAsesor
                  :datosDesarrollo="datosDesarrollosD"
                />
              </v-col>
            </v-row>
          </v-col>
          
          <v-col cols="12" class="pa-0">
            <v-row no-gutters justify="center">
               <div v-for=" dato in filteredCourses" :key="dato._id">
                    <CardsAsesores
                      :id="dato._id"
                      :img="dato.media.featured_image"
                      :nombre="dato.name"
                      :correo="dato.email"
                      :telefono="dato.phone"
                      :proyecto="dato.real_estate_develop_id[0]"
                      :status="dato.status"
                      v-show="dato.status!=0"
                      :prospectosA="dato.performance"
                      desempeno="[]"
                      :rol="dato.role"
                    />
                  </div>
                  <div v-for=" dato in filteredCourses" :key="dato.contact_id">
                    <CardsAsesores
                      :id="dato._id"
                      :img="dato.media.featured_image"
                      :nombre="dato.name"
                      :correo="dato.email"
                      :telefono="dato.phone"
                      :proyecto="dato.real_estate_develop_id[0]"
                      :status="dato.status"
                      v-show="dato.status==0"
                      :prospectosA="dato.performance"
                      desempeno="[]"
                      :rol="dato.role"
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
     computed: {
      ...mapGetters('asesores', {
            datosAsesores: 'getAsesores',
            datosDesarrollosD: 'getDesarrollos',
            filtro: 'getFilteredCourse',
            todos: 'allCourses',
            nombre:'getSearchWord',
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
            this.$store.dispatch('asesores/FILTERED_COURSES', value)
          }
        },
        
    },
    watch: {
    },
    
    mounted () {
      this.datosAsesoresF()
      this.desarrollosD();
    },
    methods: {
      ...mapActions('asesores', {
        datosAsesoresF: 'datosAsesores',
        desarrollosD:'datosDessarrollos'
      }),
    },
  }
</script>
<style lang="scss" scoped>
  .btnNuevoAsesor{
    align-content: right;
  }
</style>