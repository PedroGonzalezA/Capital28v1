<template>
  <v-timeline>
    <v-timeline-item 
      v-for="dato in datosComentarios.Manifest" 
      :key="dato._id"
    >
      <template v-slot:icon >
        <v-avatar v-for="datos in dato.comments_contact_admin" :key="datos._id">
          <img :src="datos.media.featured_image.src">
        </v-avatar>
      </template>
      <template v-slot:opposite >
        <v-chip label v-for="datos in dato.comments_contact_admin" :key="datos._id">
          {{datos.name}}
        </v-chip>
      </template>
      <VerComentario
        :nombre="dato.comments[0].text"
        :fecha="dato.comments[0].created_at"
        :comentarios="dato.comments"
        :usuario="dato.comments_contact_admin"
        :leadName="dato.contact_lead_name"
      />
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