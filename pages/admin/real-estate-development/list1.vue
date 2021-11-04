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
        <template v-slot:top>
            <v-toolbar
                flat
            >
                <v-row align="center">
                    <v-col
                    cols="5"
                    sm="6"
                    md="9"
                    lg="10"
                    >
                        <v-text-field
                            v-model="search"
                            append-icon="mdi-magnify"
                            label="Buscar"
                            single-line
                            hide-details
                        ></v-text-field>
                    </v-col>
                    <v-col cols="7"
                    sm="6"
                    md="3"
                    lg="2"
                    >  
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
                                NUEVO DESSARROLLO
                                
                                </v-btn>
                            </template>

                            <v-card>
                                <v-card-title >
                                  
                                <span class="text-h5">{{ formTitle }}</span>
                                </v-card-title>

                                <v-card-text>
                                <v-form>
                                    <v-row>
                                        <v-col
                                            cols="12"
                                            sm="12"
                                            md="12"
                                        >
                                            <v-text-field
                                            filled
                                            v-model="editedItem.nombre"
                                            label="Nombre"
                                            :rules="[rules.required]"
                                           
                                            ></v-text-field>
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
                    </v-col>
                </v-row>            
                
                
                
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
                color="light-blue"
                height="15"
                :value="item.desempeno"
                striped
            >      <strong>{{ Math.ceil(item.desempeno) }}%</strong> </v-progress-linear>
        </template>

        <template v-slot:item.status="{ item }">
            <v-chip
              dark
              v-model="item.status"
              :color="Estado(item.status)"
            >
                {{item.status}}
            </v-chip>
        </template>
    </v-data-table>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        dialog: false,
        search: '',
        dialogDelete: false,
        totalDatos: 0,
        roles: ['admin', 'broker'],
        datos: [],
        loading: true,
        options: {},
        
        headers: [
          {
            text: 'Nombre',
            align: 'start',
            sortable: false,
            value: 'nombre',
          },
          { text: 'Dirección', value: 'direccion' },
          { text: 'Status', value: 'status' },
          { text: 'Desde(USD)', value: 'desdeUSD' },
          { text: 'Hasta(USD)', value: 'hastaUSD' },
          { text: 'Desde(MXN)', value: 'desdeMXN' },
          { text: 'Hasta(MXN)', value: 'hastaMXN' },
          { text: 'Acciones', value: 'actions', sortable: false },

        ],
        editedIndex: -1,
        editedItem: {
            nombre: '',
            dirreccion: '',
            status: '',
            desdeUSD: '',
            hastaUSD: '',
            desdeMXN: '',
            hastaMXN: '',
        },
        defaultItem: {
            nombre: '',
            dirreccion: '',
            status: '',
            desdeUSD: '',
            hastaUSD: '',
            desdeMXN: '',
            hastaMXN: '',
        },
         email: '',
        rules: {
          required: value => !!value || 'Requerido.',
          
        }
      }
    },
     computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'Nuevo Desarrollo Inmobiliario' : 'Asesor'
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

      Estado (estado) {
        if (estado =='') return 'transparent'
        else if(estado=='EN OBRA') return 'orange'
      },
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
            nombre: 'Test dessarrollo',
            dirreccion: 'Direccion',
            status: 'EN OBRA',
            desdeUSD: '$250,000 USD',
            hastaUSD: '$420,000 USD',
            desdeMXN: '',
            hastaMXN: '',
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