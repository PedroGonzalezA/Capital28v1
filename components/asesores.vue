<template>
    <v-container fluid>
  <v-row>
    <v-col cols="12">
        <v-container fluid>
          <v-col cols="12">
            <v-row align="center" justify="center" >
              <v-col cols="12" sm="12" md="1" lg="1">
                 <h3>Asesores</h3> 
              </v-col>
              <v-col cols="0" sm="0" md="9" lg="9"/>
              <v-col cols="12" sm="12" md="2" lg="2" class="btnNuevoAsesor">
                <NuevoAsesor
                  :datosDesarrollo="datosDesarrollosD"
                />
              </v-col>
            </v-row>
          </v-col>
          
          <v-col cols="12">
            <v-row no-gutters justify="center">
               <div v-for=" dato in datosAsesores" :key="dato._id">
                    <CardsAsesores
                      :id="dato._id"
                      :nombre="dato.name"
                      :correo="dato.email"
                      :telefono="dato.phone"
                      proyecto="{}"
                      :status="dato.status"
                      :propectosA="dato.performance"
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
      }),
      ...mapGetters('asesores', {
            datosDesarrollosD: 'getDesarrollos',
      }),
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