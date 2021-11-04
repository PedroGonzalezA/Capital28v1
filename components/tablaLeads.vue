<template>
  <div
  class="py-5"
  >
    <v-data-table
      :headers="headers"
      :items="desserts"
      item-key="name"
      class="elevation-1 pd-5"
      :search="search"
      :custom-filter="filterOnlyCapsText"
      loading
      v-model="selected"
      show-select
    >
      <template v-slot:top>
        <v-row>
          <v-col
          cols="6"
          sm="6"
          md="9"
          lg="10"
          >
            <v-text-field
              v-model="search"
              label="Buscar"
              class="mx-4"
              single-line
              solo
            ></v-text-field>
          </v-col>

          <v-col
          cols="6"
          sm="6"
          md="3"
          lg="2"
          >
            <v-btn-toggle
              v-model="toggle_multiple"
              mandatory
            >
                <v-btn icon>
                <v-icon>mdi-trello</v-icon>      
              </v-btn>

              <v-btn icon>
                <v-icon>mdi-refresh</v-icon>      
              </v-btn>

              <v-btn icon>
                <v-icon>mdi-tune</v-icon>      
              </v-btn>

              
            </v-btn-toggle>
          </v-col>
        </v-row>
      </template> 
    </v-data-table>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        search: '',
        fechaRegistro: '',
        selected: [],
        toggle_multiple: [0, 1, 2],
        desserts: [
          {
            fechaRegistro:'23-sep-2021 11:54 am',
            nombre: 'lead',
            telefono: '',
            correo: 'oscar.cach@wayaweb.com',
            llegoPor: 'propiedadesplayadelcarmen',
            presupuesto:'-',
            comoNosEncontro:'Google',
            ubicacion:'',
            perfil:'',
            observaciones:'Test Cach. Enviado desde Postman',
            perfilacion:'',
            asignado:'Test Admin',
            status:'',
            posponer:'',

          },
        ],
      }
    },
    computed: {
      headers () {
        return [
          {
            text: 'Fecha de registro',
            value: 'fechaRegistro',
            filter: value => {
              if (!this.fechaRegistro) return true

              return value < parseInt(this.fechaRegistro)
            },
          },
          { text: 'Nombre', value: 'nombre' },
          { text: 'Telefono', value: 'telefono' },
          { text: 'Correo', value: 'correo' },
          { text: 'Llego por', value: 'llegoPor' },
          { text: 'Presupuesto', value: 'presupuesto' },
          { text: '¿Como nos encontro?', value: 'comoNosEncontro' },
          { text: 'Ubicacion', value: 'ubicacion' },
          { text: 'Perfil', value: 'perfil' },
          { text: 'Observaciones', value: 'obsevaciones' },
          { text: '%Perfilacion', value: 'perfilacion' },
          { text: 'Asignado a', value: 'asignado' },
          { text: 'Status', value: 'status' },
          { text: 'Posponer', value: 'posponer' },
          { text: '', value: 'iron' },





        ]
      },
    },
    methods: {
      filterOnlyCapsText (value, search, item) {
        return value != null &&
          search != null &&
          typeof value === 'string' &&
          value.toString().toLocaleUpperCase().indexOf(search) !== -1
      },
    },
  }
</script>