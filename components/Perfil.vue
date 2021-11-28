<template>
      <v-menu
        bottom
        min-width="200px"
        rounded
        offset-y
        z-index="9"

        
      >
        <template v-slot:activator="{ on }">
          
          <v-chip
            
            v-on="on"
            class="transparent"
          >
            <v-avatar
              color="black"
              size="30 "
            >
              <v-img
                :src="img.featured_image"
              >

              </v-img>            
            </v-avatar>
            <v-icon>
              mdi-chevron-down
            </v-icon>
          </v-chip>
            
        </template>

        <v-card
        min-width="250px"
        max-width="400px"
        >

          <v-list>
            <v-list-item>
                  <v-avatar
                   height="50px"
                   min-width="50px"
                   width="50px"
                   class="v-list-item__avatar"
                  >
                    <v-img
                      :src="img.featured_image"
                    >
                    </v-img>
                  </v-avatar>           
                <v-list-item-content
                  class="v-list-item__content"
                >
                    <v-list-item-title
                    class="v-list-item__title"
                    >
                        <h5>{{ fullName }}</h5>
                    </v-list-item-title>
                    <v-list-item-subtitle
                        class="v-list-item__subtitle"
                    >
                      <p class="text-caption mt-1">
                        <small>{{ email }}</small> 
                      </p>
                    </v-list-item-subtitle>
                </v-list-item-content> 
                <v-list-item-action>
                  <v-tooltip left color="#262d3c">
                    <template v-slot:activator="{ on }">
                      <v-btn color="primary" dark v-on="on" class="black--text transparent">{{ totalLeads }}</v-btn>
                    </template>
                    <span class="primary--text">Total de leads: {{ totalLeads }}</span>
                    <br>
                    <span class="green--text">Leads activos: {{ leadsActivos }}</span>
                  </v-tooltip>
                </v-list-item-action>  
            </v-list-item>
            
          </v-list>
            <v-divider></v-divider>
          <v-list>
            <v-list-item>
              <v-list-item-action>
                <v-icon
                >
                  mdi-account
                </v-icon>
              </v-list-item-action>
              <v-list-item-title>

                      <ConfCuenta 
                        :id="id"
                        :contact_id="contact_id"
                        :img="img.featured_image"
                        :email="email"
                        :fullName.sync="fullName"
                        :tipoUsuario="tipoUsuario"
                        :telefono="telefono"
                      />
              </v-list-item-title>
            </v-list-item>
          </v-list>
            <v-divider></v-divider>
            <v-list class="cerrarSesion" dark>
              <v-card-actions class="pa-0">
                <v-btn
                  tile
                  text
                  class=" text-capitalize  transparent"
                  block
                  @click="CerrarSesion"
                >
                  Cerrar sesion
                </v-btn>
              </v-card-actions>
            </v-list>
         
        </v-card>
      </v-menu>
</template>

<script>
  export default {
    data: () => ({
    
    }),
    props:{
       id: {
          type: String,
          required:'true',
          default:'Sin id'
        },
        contact_id: {
          type: String,required:'true',default:'Sin id'
        },
        img: {
          type: Object,
          required:'true',
          default: () => ({}),
        },
       fullName: {
          type: String,
          required:'true',
          default:'Sin nombre'
        },
        email: {
          type: String,
          required:'true',
          default:'Sin email'
        },
        totalLeads: {
          type: String,
          required:'true',
          default:'Sin total leads'
        },
        leadsActivos: {
          type: String,
          required:'true',
          default:'Sin leads activos'
        },
        tipoUsuario: {
          type: String,
          required:'true',
          default:'Sin usuario'
        },
        telefono: {
          type: String,
          required:'true',
          default:'Sin telefono'
        },
    },
    methods:{
      CerrarSesion() {
          this.$store.dispatch('user/cerrarSesion');
      }
    }
  }
</script>
<style lang="scss" scoped>
  .cerrarSesion{
    background-color:$rojoC28;
    color: $rojoC28;
  }
</style>