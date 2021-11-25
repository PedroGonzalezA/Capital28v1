<template>
  <v-col 
      cols="12"
      sm="12"
      md="12"
      lg="12"
      class="pa-2 mx-auto"
  >
    <v-card
    
      class="mx-auto titulo"
      width="304"
    >
      <v-card-title  >
        <v-row>
          <v-col cols="4" class="white--text py-1">
              {{id}}
          </v-col>
          <v-col cols="8"  class="white--text py-1">
          
          </v-col>
        </v-row>
      </v-card-title>

      <v-card-text class="pa-0 textoCard">
        <v-container fluid>
          <v-row align="center" justify="center" class="textoCard">
            <v-col cols="7" class="pa-2 py-1">
              <div class="white--text">
               <v-icon>mdi-cash</v-icon> $
              </div>
              
            </v-col>
            <v-col cols="5" class="pa-2 py-1">
              <v-chip
                :color="getColor(status)"
                dark
                label
              >
                
              </v-chip>
            </v-col>
            <v-col cols="7" class="pa-2 py-1">
                  <div>
                    <strong>Planta: </strong> 
                  </div>
            </v-col>
            <v-col cols="5" class="pa-2 py-1">
                  <div>
                    <strong>Recamaras: </strong>
                  </div>
            </v-col>

            <v-col cols="6" class="pa-2 py-1">
                  <strong>Baños: </strong>
            </v-col>
            <v-col cols="6" class="pa-2 py-1">
                <div><strong>TDP: </strong></div>  
            </v-col>
            
            <v-col cols="4" class="pa-2 py-1"> 
                <div><strong>M2: </strong> m2</div>
            </v-col>
            <v-col cols="8" class="pa-2 py-1">
                <div><strong>Precio X M2: </strong></div>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>
  </v-col>
</template>
   
<script>
  import { mapState, mapActions,mapGetters } from 'vuex'
  export default {
    props:{
        id: {
          type: String,required:'true',default:'0'
        },
        
    },
    data() {
      return{
            show: false,
            max25chars: v => v.length <= 25 || 'Entrada demasiado larga!',
       
      }
    },
    computed:{
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
    },
    mounted() {
      this.datosPropiedadesF();
    },
    methods: {
       ...mapActions('propiedades', {
            datosPropiedadesF: 'datosPropiedades',
      }),
      getColor (dato) {
        if (dato == 'disponible') return '#70C879'
        else if (dato == 'reservado') return 'yellow'
        else return '#D22424'
      },
      getName (dato) {
        if (dato == 'disponible') return 'DISPONIBLE'
        else if (dato == 'reservado') return 'RESERVADO'
        else return 'VENDIDO'
      },
    
    },
  }
</script>
<style lang="scss" scoped>
  .v-card--reveal {
    bottom: 0;
    opacity: 1 !important;
    position: absolute;
    width: 100%;
  }
  .v-card-title--pers {
    max-height: 68px;
  }
  .v-col--pers{
    max-height: 44px;
  }
  .cardNuevo{
    width: 300px;
  }
  .titulo{
    background:$colorAzulB;
    color: white;
  }
  .textoCard{
    color: white;
  }
</style>>