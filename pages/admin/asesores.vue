<template>
  <v-data-table
    :headers="headers"
    :items="desserts"
    sort-by="nombre"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar
        flat
      >
        <v-toolbar-title>Asesores</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-dialog
          v-model="dialog"
          max-width="500px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="#262d3c"
              dark
              class="ma-2 white--text  v-size--default primary--text"
              v-bind="attrs"
              v-on="on"
            >
              Agregar Asesor
              <v-icon>
                  mdi-plus
              </v-icon>
            </v-btn>
          </template>
          <v-card>
            <v-card-title class="justify-center pa-10">
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
                <v-form>
                    <v-row>
                        <v-col
                            cols="12"
                            sm="6"
                            md="6"
                        >
                            <v-text-field
                            filled
                            v-model="editedItem.nombre"
                            label="Nombre"
                            ></v-text-field>
                        </v-col>
                        <v-col
                            cols="12"
                            sm="6"
                            md="6"
                        >
                            <v-select
                            filled
                            label="Role"
                            v-model="editedItem.rol"
                            :items="items"
                            >

                            </v-select>
                        </v-col>
                        <v-col
                            cols="12"
                            sm="6"
                            md="6"
                        >
                            <v-text-field
                            v-model="editedItem.correo"
                            label="Correo"
                            filled
                            ></v-text-field>
                        </v-col>
                        <v-col
                            cols="12"
                            sm="6"
                            md="6"
                        >
                            <v-text-field
                            v-model="editedItem.telefono"
                            label="Telefono"
                            filled
                            ></v-text-field>
                        </v-col>
                        <v-col
                            cols="12"
                            sm="6"
                            md="6"
                        >
                            <v-text-field
                            v-model="editedItem.protein"
                            label="Contraseña"
                            placeholder="Temporal"
                            filled
                            ></v-text-field>
                        </v-col>

                        <v-col
                            cols="12"
                            sm="6"
                            md="6"
                        >
                            <v-text-field
                            v-model="editedItem.protein"
                            label="Confirmar contraseña"
                            placeholder="Temporal"
                            filled
                            
                            ></v-text-field>
                        </v-col>
                        <v-col
                            cols="12"
                            sm="12"
                            md="12"
                        >
                            <p class="success--text"><small>Por seguridad, recuerda avisar al nuevo asesor actualizar su contraseña.</small></p>
                        </v-col>
                    </v-row>
                </v-form>
                    <v-card class="mx-auto elevation-0">
                        <v-toolbar class="v-toolbar--flat transparent">
                            <v-toolbar-title>
                                Proyectos Asignados
                            </v-toolbar-title>
                            <v-spacer></v-spacer>
                            <v-col cols="6">
                                <v-input class="v-input--hide-details  v-text-field v-text-field--full-width v-text-field--single-line v-text-field--is-booted"> </v-input>
                            </v-col>
                        </v-toolbar>
                        <v-container class="py-0">
                            <v-row class="align-center justify-start">
                                <v-col>
                                    <p class="pa-10 grey--text">No has asignado ningun proyecto para este asesor</p>
                                </v-col>
                            </v-row>
                        </v-container>
                        <v-divider></v-divider>
                        <p class="py-5 grey--text">Proyectos disponibles para Asignar </p>
                        <v-list>
                            <v-list-item class="v-list-item--link">
                                <v-avatar class="v-list-item__avatar">
                                    <v-icon>
                                        mdi-plus
                                    </v-icon>
                                </v-avatar>
                                <v-list-item-title>
                                    Test Dessarrollo
                                </v-list-item-title>
                            </v-list-item>     
                        </v-list>
                    </v-card>                    
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                text
                @click="close"
              >
                Cancelar
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                @click="save"
              >
                Agregar
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card color="#262d3c" dark>
            <v-card-title class="text-h5">Estas seguro de eliminar este asesor?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="#6ED9A0" text @click="closeDelete">Cancelar</v-btn>
              <v-btn color="red darken-2" text @click="deleteItemConfirm">Eliminar</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>

      </v-toolbar>
    </template>

    <template v-slot:item.actions="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn
        color="primary"
        @click="initialize"
      >
        Reset
      </v-btn>
    </template>
  </v-data-table>
</template>
<script>
  export default {
    data: () => ({
      dialog: false,
      dialogDelete: false,
      items: ['Administrador', 'Broker'],
      headers: [
        {
          text: 'Foto',
          align: 'start',
          sortable: false,
          value: ' ',
        },
        { text: 'Asesor', value: 'nombre' },
        { text: 'Correo', value: 'correo' },
        { text: 'Telefono', value: 'telefono' },
        { text: 'Proyecto', value: 'proyecto' },
        { text: 'Status', value: 'status' },
        { text: 'Proyectos Activos', value: 'proyectosActivos' },
        { text: '%de desempeño', value: 'desempeno' },
        { text: 'Rol', value: 'rol' },
        { text: 'Acciones', value: 'actions', sortable: false },
      ],
      desserts: [],
      editedIndex: -1,
      editedItem: {
        nombre: '',
        correo: '',
        telefono: '-',
        proyecto: '',
        status: '-',
        proyectosActivos:'',
        desempeno:'',
        rol:'',
      },
      defaultItem: {
        nombre: '',
        correo: '',
        telefono: '-',
        proyecto: '',
        status: '-',
        proyectosActivos:'',
        desempeno:'',
        rol:'',
        
      },
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'Agregar Asesor' : 'Editar Asesor'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },

    created () {
      this.initialize()
    },

    methods: {
      initialize () {
        this.desserts = [
          {
            nombre: 'Pedro G',
            correo: 'pedro-pruebas@hotmail.com',
            telefono: '',
            proyecto: 'test de dessarrollo',
            status: ' ',
            proyectosActivos:'1',
            desempeno:'',
            rol:'Administrador',
          },
        ]
      },

      editItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        this.desserts.splice(this.editedIndex, 1)
        this.closeDelete()
      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.desserts[this.editedIndex], this.editedItem)
        } else {
          this.desserts.push(this.editedItem)
        }
        this.close()
      },
    },
  }
</script>