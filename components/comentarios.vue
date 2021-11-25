<template>
  <v-timeline dense clipped>
    <v-timeline-item 
      v-for="dato in datosComentarios.Manifest" 
      :key="dato._id"
      small
      
    >
      <template v-slot:icon >
        <v-avatar 
          v-for="datos in dato.comments_contact_admin" 
          :key="datos._id"
          v-show="dato.comments_contact_admin!=''"
        >
          <img :src="datos.media.featured_image.src">
        </v-avatar>
        <v-avatar 
          v-for="datos in dato.comments_contact_broker" 
          :key="datos._id"
          v-show="dato.comments_contact_broker!=''"
        >
          <img :src="datos.media.featured_image.src">
        </v-avatar>
      </template>
    
      <v-layout>
        <v-flex xs2>
          <v-chip 
            label 
            v-for="datos in dato.comments_contact_admin" 
            :key="datos._id"
            v-show="dato.comments_contact_admin!=''"
            color="#262d3c"
            dark
            
          >
            {{datos.name}}
          </v-chip>

          <v-chip 
            label 
            v-for="datos in dato.comments_contact_broker" 
            :key="datos._id"
            v-show="dato.comments_contact_broker!=''"
            color="#262d3c"
            dark
            
          >
            {{datos.name}}
          </v-chip>
        </v-flex>
        <v-flex xs10>
          <VerComentario
            :nombre="dato.comments[0].text"
            :fecha="dato.comments[0].created_at"
            :comentarios="dato.comments"
            :usuario="dato.comments_contact_admin"
            :leadName="dato.contact_lead_name"
          />
        </v-flex>
      </v-layout>
      
    </v-timeline-item>
  </v-timeline>
</template>
<script>
import { mapState, mapActions,mapGetters } from 'vuex'

export default {
    data(){
        return{
          imagen:""
        }
    },

    methods:{
        ...mapActions('comentarios', {
            datosComentariosF: 'datosComentarios',
        }),
        nombreUsuario(dato){
          for (var i = 0; i < dato; i++) {
            if(dato[i]=="comments_contact_admin"){
              console.log("ad");
            }
          }
        },
        fechaUsuario(dato){
          for (var i = 0; i < 9; i++) {
            dato=dato[i]
          }
          var fecha 
          var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
          fecha = new Date(dato);
          return fecha.toLocaleDateString("es-ES", options)
        }
    },
    computed:{
        ...mapGetters('comentarios', {
            datosComentarios: 'getComentarios',
        }),
    },
     mounted() {
      this.datosComentariosF();
      this.imagen=localStorage.getItem('user_image');
    },
}
</script>
<style lang="scss" scoped>
  .nombreUser{
    background:$colorPrincipal;
  }
  
</style>