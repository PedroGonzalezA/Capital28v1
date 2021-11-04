<template>
    <v-data-table
      :headers="headers"
      :items="datos"
       loading
       loading-text="Cargando...."
    >
    <template v-slot:item.status="{ item }">
      <v-chip
        dark
        color="#262d3c"
      >
        {{ item.status }}
      </v-chip>
    </template>
      <template v-slot:item.perfilacion="{ item }">
      <v-chip
        dark
        color="#262d3c"
        outlined
      >
        {{ item.perfilacion }}
        <v-icon right>
          mdi-auto-fix
        </v-icon>
      </v-chip>
    </template>
    
    <template v-slot:item.posponer="{ item }">

    </template>
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

      <template v-slot:item.nombre="props">
        <v-edit-dialog
          :return-value.sync="props.item.nombre"
          large
          persistent
          @save="save"
          @cancel="cancel"
          @open="open"
          @close="close"
        >
          <div>{{ props.item.nombre }}</div>
          
          <template v-slot:input>
            <div class="mt-4 text-h6">
              Actualizar
            </div>
            <v-text-field
              v-model="props.item.nombre"
              :rules="[max25chars]"
              label="Editar"
              single-line
              counter
              autofocus
            ></v-text-field>
          </template>

        </v-edit-dialog>
      </template>
      
    </v-data-table>
</template>
<script>
  export default {
    data () {
      return {
        snack: false,
        search:'',
        toggle_multiple: [0, 1, 2],
        snackColor: '',
        snackText: '',
        max25chars: v => v.length <= 25 || 'exeso de datos',
        pagination: {},
        headers: [
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
            { text: 'Acciones', value: 'iron' },
        ],
        datos: [
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
            perfilacion:'5%',
            asignado:'Test Admin',
            status:'Asignado',
            posponer:'1 dias',
          },
        
         
        ],
      }
    },
    methods: {
      save () {
        this.snack = true
        this.snackColor = 'success'
        this.snackText = 'Datos guardados'
      },
      cancel () {
        this.snack = true
        this.snackColor = 'error'
        this.snackText = 'Cancelado'
      },
      open () {
        this.snack = true
        this.snackColor = 'info'
        this.snackText = 'Diálogo abierto'
      },
      close () {
        console.log('Diálogo cerrado')
      },
    },
  }
</script>