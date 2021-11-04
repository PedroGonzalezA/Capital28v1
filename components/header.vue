<template>
<div>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
      dark
      height="48px"
      color="#262d3c"
    >
      <v-app-bar-nav-icon 
      
      @click.stop="drawer = !drawer" 
      />   
      <v-img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAP4AAAA1CAMAAABWZ6YUAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAADkUExURUdwTP///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8Yc0v8AAABLdFJOUwAKBxP1EAH9IgVZyLp0Ag7u3utN+2H4leeuLdcfdxaDPfGmomWygjLPe8Ta5DjLjkgb4RlqnYbzUdNVQHDBJmg2bSpDqr1/i7eYXedkHTwAAAyWSURBVGje7ZvnlrKwuoApCiICgiI2sCAjVuxdZ+zt/u9nJwEFy1hmzTdnr7N2fszSRN7wpLwtGQzDMDzLWQo3FrA/KsW93tUH/E8erYFHu427TURzObcMdjg0p6ueXCSv2/21jjKtxCWpZRq94Iw41S+6/SMofb34R/gDGnS3ZX7y6MEHHi3d1vNaw2Jh26nEE4eLASAiK8nTfExtF3ZDsn6qGtb+Bj8Ch/vjR/jB8PFIc7f1aaN/vC6JpNsufNy0DwcUaNBCbk25+Sf4I9iX9Zv4VJOFMum4aLLleiqOaGjz6zz3GRtQStXL9WGVthcI3ESyd0RK1F/g11aJRCL4q7OPZXPHoT6J1GbpdKDYUKcIZ32azkgOfq0qg2IgHUguJ+vzbBte/HX7L/AZXBCEE/3s8x0l+C0+I6sLwrMaPqAioFVn6a/Qal+eO2r3orD5QGGtC4XwV9rPLZ2+NPgF/JvhKKH5TdvqrQoXvtdg4HvY3MWxC30ofv05/jx6ZLXfx8eEtYsciYHPOnFhfOG0l9tYxYtvJv9+9n1HevMP8LEJBJqjjwX4cXKh19pwdMw01r2wFeR9URQhkOlFcpEm/birsihGINuzZDKg+fHr/UuBDU5qaaf1UqMKSVA06ox/bA3SoKbYplzt4NcCi+Ss7e3uTXw05R/8CT8a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"
        alt="logo"
        max-height="36px"        
        max-width="200px"
        position="center"
        aspect-ratio="1.4"
        contain
      >
      </v-img>
        <v-spacer /> 
            
        <v-spacer />
        <Perfil
          v-for='(dato,id) in datos' 
          :key="id"
          :img="dato.img"
          :id="dato.id"
          :fullName="dato.fullName"
          :email="dato.email"
          :totalLeads="dato.totalLeads"
          :leadsActivos="dato.leadsActivos"
          :tipoUsuario="dato.tipoUsuario"
          :fechaRegistro="dato.fechaRegistro"
          :ultimaActualizacion="dato.ultimaActualizacion"
          :telefono="dato.telefono"
        />

      <v-btn icon
      color="red"
      >
        <v-icon>mdi-power</v-icon>      
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
      color="#262d3c"
      dark
      temporary
    >
    <v-list-item class="px-2">
        <v-btn
            icon
            @click.stop="miniVariant = !miniVariant"
          >
            <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
        </v-btn>
      </v-list-item>
      <v-list>

        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" class=".text-caption" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
</div>
        
    
</template>
<script>
export default {
  data () {
    return {
      clipped: false ,
      drawer: false,
      miniVariant: true,
      right: true,
      rightDrawer: false,
      title: '',
      datos: [{
        id:'1',
        img:'https://res.cloudinary.com/capital28-investments/image/upload/v1629139962/Capital%2028/brokers/Test_Admin_Test_Desarrollo_atiu0n.jpg',
        fullName: 'Pedro Gonzalez',
        email: 'pedro-pruebas@hotmail.com',
        totalLeads:100,
        leadsActivos:10,
        tipoUsuario:'usuario',
        fechaRegistro:'3 de octubre de 2021',
        ultimaActualizacion:'3 de octubre de 2021',
        telefono:'9981316578',
        contra:'',
        confirmarContra:'',
      }],
      items: [
        {
          icon: 'mdi-account-box-multiple-outline',
          title: 'Leads',
          to: '/admin/lead'
        },
        {
          icon: 'mdi-account-group',
          title: 'Asesores',
          to: '/admin/contacts'
        },
        {
          icon: 'mdi-format-list-checks',
          title: ' Asignación',
          to: '/Asignacion'
        },
        {
          icon: 'mdi-office-building',
          title: 'Dessarrollos inmobiliarios',
          to: '/admin/real-estate-development/list'
        },
        {
          icon: 'mdi-home-outline',
          title: 'Propiedades',
          to: '/admin/property'
        },
        {
          icon: 'mdi-comment-text-multiple-outline',
          title: 'Comentarios',
          to: '/admin/manifest/recent-comments'
        },
        {
          icon: 'mdi-newspaper-variant-multiple-outline',
          title: 'Reportes',
          to: '/Reportes'
        }
      ],
      
    }
  }
}
</script>
