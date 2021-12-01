<template>
    <v-col 
      cols="12"
      sm="12"
      md="12"
      lg="12"
      class="pa-2 mx-auto"
    >
      <v-card
        class="mx-auto cardNuevo"
        height="209px"
      >
        <v-container fluid>
          <v-row justify="center" align="center" class="divSuperior">
            <v-col cols="4" sm="4" md="4" lg="4" class="imagenD">
              <v-img class="imagenP" :src="require(`static/user.png`)" v-show="img.src==''">
              <div v-show="status==0" class="txtE">Eliminado</div>
              </v-img>
              <v-avatar v-show="img.src!=''" width="80px" height="80px">
                <v-img class="imagenP" :src="img" >
                </v-img>
              </v-avatar>
              
              <v-layout align-center justify-center>
                <v-flex xs6>
                  <EditarAsesor 
                      :id="id"
                      :nombre="nombre"
                      :email="correo"
                      :telefono="telefono"
                      :proyecto="proyecto"
                  />
                </v-flex>
                <v-flex xs6>
                  <EliminarAsesor 
                    v-show="id!=idU.User.contact_id && status==1 || status==2"
                    :id="id"
                    :nombre="nombre"
                  />
                  <RestaurarAsesor 
                    v-show="id!=idU.User.contact_id && status==0"
                    :id="id"
                    :nombre="nombre"
                  />
                </v-flex>
              </v-layout>
            </v-col>
            <v-col cols="8" sm="8" md="8" lg="8" class="textoD">
                
                <v-row>
                  <v-checkbox
                  class="c"
                  v-model="estadoF"
                  ></v-checkbox>
                  <v-col cols="12" class="pb-0">
                    <div>Nombre:</div>
                    {{nombre}}
                  </v-col>
                  <v-col cols="12" class="py-1">
                    <div>Email:</div>
                    {{correo}}
                  </v-col>
                  <v-col cols="12" class="py-1">
                    <div>Telefono:</div>
                    {{telefono}}
                  </v-col>
                </v-row>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" lg="12">
                <v-row class="textoB">
                  <v-col lg="5" class="pb-0">
                    <div>Rol: {{rol}}</div>
                  </v-col>
                  <v-col lg="7" class="pb-0">
                    <div>Prospectos Activos: {{prospectosA.active}}</div>
                  </v-col>
                  <v-col lg="12" class="pb-0">
                    <div>Proyecto: {{proyecto}}</div>
                  </v-col>
                </v-row>
            </v-col>
          </v-row>
          
        </v-container>
      </v-card>
    </v-col>

 
</template>
<script>
import { mapState, mapActions,mapGetters } from 'vuex'

export default {
  data () {
      return {
        checkbox: true,
      }
  },
  props:{
        id: {
          type: String,default:'Sin id',required:'true',
        },
        img: {
          type: Object,default: () => ({}),required:'true',
        },
        nombre: {
          type: String,default:'Sin nombre',required:'true',
        },
        correo: {
          type: String,default:'Sin nombre',required:'true',
        },
        telefono: {
          type: String,default:'- -',required:'true',
        },
        proyecto: {
          type: String,default:'Sin proyecto',required:'true',
        },
        status: {
          type: Number,default:0,required:'true',
        },
        prospectosA: {
          type: Object,default: () => ({}),required:'true',
        },
        desempeno: {
          type: String,default:'- -',required:'true',
        },
        rol: {
          type: String,default:'rol',required:'true',
        },
  },
  computed: {
    ...mapGetters('user', {
            idU: 'getToken',
      }),
      nombreD:{
        get () {
            return this.proyecto
        },
        set (value) {
            localStorage.setItem('idD',value);
            return this.$store.dispatch('asesores/nombreDesarrollo')
        }
      },
      estadoF:{
        get () {
            return this.status
          },
          set (value) {
            localStorage.setItem('idD',this.id);
            localStorage.setItem('rolU',this.rol);
            localStorage.setItem('estado',value);
            return this.$store.dispatch('asesores/cambiarEstadoFF')
          }
      },
      estado: {
          get () {
            return this.status
          },
          set (value) {
            localStorage.setItem('idD',this.id);
            localStorage.setItem('rolU',this.rol);
            this.$store.dispatch('asesores/cambiarEstado', {value})
          }
      },
  },
  methods: {
     
  },
}
</script>
<style lang="scss" scoped>
  .imagenP{
    max-width: 100px;
  }
  .imagenD{
 
  }
  .cardNuevo{
    width: 315px;
  }
  .textoD{
    font-size: 12px;
    text-align: center;
    color: white;
  }
  .divSuperior{
    background: $azulBC28;
    border-radius: 6px 6px 0 0;
  }
 
  .btnCerrar{
    min-width: 20%;
    width: 20%;
    text-align: center;
    color: $rojoC28;
  }
  .c{
    position: absolute;
  }
  .textoB{
    font-size: 12px;
  }
  .txtE{
    color: $rojoC28;
    font-size: 12PX;
    text-align: center;
  }
</style>