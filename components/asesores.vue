<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="datos"
      :options.sync="options"
      :server-items-length="totalDatos"
      :loading="loading"

      class="elevation-1"
    >
            <template v-slot:item.status="{ item }">
                <v-simple-checkbox
                  v-model="item.status"
                            :single-select="singleSelect"

                ></v-simple-checkbox>
              </template>
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
                        class="mb-2"
                        v-bind="attrs"
                        v-on="on"
                        >
                        Agregar Asesor
                        <v-icon right>
                            mdi-plus
                        </v-icon>
                        </v-btn>
                    </template>

                    <v-card>
                        <v-card-title>
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
                                    
                                    v-model="editedItem.asesor"
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
                                    :items="roles"
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
                                    v-model="editedItem.contra"
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
                                    v-model="editedItem.confirmarContra"
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
                            {{ formBtn }}
                        </v-btn>
                        </v-card-actions>
                    </v-card>
                    </v-dialog>
                    <v-dialog v-model="dialogDelete" max-width="500px">
                    <v-card>
                        <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
                        <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" text @click="closeDelete">Cancelar</v-btn>
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
        <template v-slot:item.desempeno="{ item }">
            <v-progress-linear
                color="#6ED9A0"
                height="15"
                :value="item.desempeno"
            >      <strong>{{ Math.ceil(item.desempeno) }}%</strong> </v-progress-linear>
        </template>
    </v-data-table>
    
  </div>
</template>
<script>
  export default {
    data () {
      return {
        dialog: false,
        dialogDelete: false,
                singleSelect: false,

        totalDatos: 0,
        roles: ['admin', 'broker'],
        datos: [],
        loading: true,
        options: {},
        headers: [
          {
            text: 'Foto',
            align: 'start',
            sortable: false,
            value: 'foto',
          },
          { text: 'Asesor', value: 'asesor' },
          { text: 'Correo', value: 'correo' },
          { text: 'Telefono', value: 'telefono' },
          { text: 'Proyecto', value: 'proyecto' },
          { text: 'Status', value: 'status' },
          { text: 'Proyectos Activos', value: 'proyectosActivos' },
          { text: '% de desempeño', value: 'desempeno' },
          { text: 'Rol', value: 'rol' },
          { text: 'Acciones', value: 'actions', sortable: false },

        ],
        editedIndex: -1,
        editedItem: {
            foto: '',
            asesor: '',
            correo: '',
            telefono: '',
            proyecto: '-',
            status: true,
            proyectosActivos: '',
            desempeno: 0,
            rol: '',
            contra:'',
            confirmarContra:'',
        },
        defaultItem: {
            foto: '',
            asesor: '',
            correo: '',
            telefono: '',
            proyecto: '',
            status: true,
            proyectosActivos: '',
            desempeno: 0,
            rol: '',
            contra:'',
            confirmarContra:'',
        },
      }
    },
     computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'Agregar Asesor' : 'Asesor'
      },
      formBtn () {
        return this.editedIndex === -1 ? 'Agregar' : 'Actualizar'
      },
    },
    watch: {
      options: {
        handler () {
          this.getDataFromApi()
        },
        deep: true,
      },

      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },
    
    mounted () {
      this.getDataFromApi()
    },
    methods: {
      getDataFromApi () {
        this.loading = true
        this.fakeApiCall().then(data => {
          this.datos = data.items
          this.totalDatos = data.total
          this.loading = false
        })
      },
      /**
       * In a real application this would be a call to fetch() or axios.get()
       */
      fakeApiCall () {
        return new Promise((resolve, reject) => {
          const { sortBy, sortDesc, page, itemsPerPage } = this.options

          let items = this.getDatos()
          const total = items.length

          if (sortBy.length === 1 && sortDesc.length === 1) {
            items = items.sort((a, b) => {
              const sortA = a[sortBy[0]]
              const sortB = b[sortBy[0]]

              if (sortDesc[0]) {
                if (sortA < sortB) return 1
                if (sortA > sortB) return -1
                return 0
              } else {
                if (sortA < sortB) return -1
                if (sortA > sortB) return 1
                return 0
              }
            })
          }

          if (itemsPerPage > 0) {
            items = items.slice((page - 1) * itemsPerPage, page * itemsPerPage)
          }

          setTimeout(() => {
            resolve({
              items,
              total,
            })
          }, 500)
        })
      },
      getDatos () {
        return [
          {
            foto: '',
            asesor: 'Test',
            correo: 'v@cccc.com',
            telefono: 24,
            proyecto: 'Test Dessarrollo',
            status: true,
            proyectosActivos: '1',
            desempeno: 50,
            rol: 'admin',


          },
        
        ]
      },

      editItem (item) {
        this.editedIndex = this.datos.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        this.editedIndex = this.datos.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        this.datos.splice(this.editedIndex, 1)
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
          Object.assign(this.datos[this.editedIndex], this.editedItem)
        } else {
          this.datos.push(this.editedItem)
        }
        this.close()
      },
    },
  }
</script>