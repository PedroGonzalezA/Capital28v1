<template>
  <v-container class="pa-0" fluid>
    <v-row>
        <v-col>
            <div class="property-table" >
                 <v-card>
                    <v-card-title>
                      <v-row align="center">
                        <v-col
                        cols="10"
                        sm="11"
                        md="11"
                        lg="11"
                        >
                          <v-text-field
                          v-model="search"
                          append-icon="mdi-magnify"
                          label="Buscar"

                          ></v-text-field>
                        </v-col>
                        <v-col
                        cols="2"
                        sm="1"
                        md="1"
                        lg="1"
                        >
                          <v-btn icon>
                            <v-icon>mdi-tune</v-icon>      
                          </v-btn>
                        </v-col>
                      </v-row>
                    </v-card-title>
                    <v-data-table
                    :headers="headers"
                    :items="datos"
                    :search="search"
                    :options.sync="options"
                    :server-items-length="totalDatos"
                    :loading="loading"
                    class="elevation-1"
                    >
                    <template v-slot:item.estado="{ item }">
                      <v-chip
                        :color="Estado(item.estado)"
                        dark
                      >
                        {{ item.estado }}
                      </v-chip>
                    </template>

                        <template v-slot:item.precio="props">
                            <v-edit-dialog
                            :return-value.sync="props.item.precio"
                            large
                            
                            @save="save"
                            cancel-text="Cerrar"
                            save-text="Guardar"
                            >
                            <div>{{ props.item.precio }}</div>
                            <template v-slot:input>
                                <div class="mt-4 text-h6">
                                Actualizar
                                </div>
                                <v-text-field
                                v-model="props.item.precio"
                                :rules="[max25chars]"
                                label="Edit"
                                single-line
                                counter
                                autofocus
                                ></v-text-field>
                            </template>
                            </v-edit-dialog>
                        </template>

                        <template v-slot:item.recamaras="props">
                            <v-edit-dialog
                            :return-value.sync="props.item.recamaras"
                            large
                            
                            @save="save"
                            cancel-text="Cerrar"
                            save-text="Guardar"
                            >
                            <div>{{ props.item.recamaras }}</div>
                            <template v-slot:input>
                                <div class="mt-4 text-h6">
                                Actualizar
                                </div>
                                <v-text-field
                                v-model="props.item.recamaras"
                                :rules="[max25chars]"
                                label="Edit"
                                single-line
                                type="number"
                                counter
                                autofocus
                                ></v-text-field>
                            </template>
                            </v-edit-dialog>
                        </template>

                        <template v-slot:item.banos="props">
                            <v-edit-dialog
                            :return-value.sync="props.item.banos"
                            large
                            
                            @save="save"
                            cancel-text="Cerrar"
                            save-text="Guardar"
                            >
                            <div>{{ props.item.banos }}</div>
                            <template v-slot:input>
                                <div class="mt-4 text-h6">
                                Actualizar
                                </div>
                                <v-text-field
                                v-model="props.item.banos"
                                :rules="[max25chars]"
                                type="number"
                                label="Edit"
                                single-line
                                counter
                                autofocus
                                ></v-text-field>
                            </template>
                            </v-edit-dialog>
                        </template>

                        <template v-slot:item.tdp="props">
                            <v-edit-dialog
                            :return-value.sync="props.item.tdp"
                            large
                            @save="save"
                            cancel-text="Cerrar"
                            save-text="Guardar"                            
                            >
                            <div>{{ props.item.tdp }}</div>
                            <template v-slot:input>
                                <div class="mt-4 text-h6">
                                Actualizar
                                </div>
                                <v-text-field
                                v-model="props.item.tdp"
                                :rules="[max25chars]"
                                label="Edit"
                                single-line
                                counter
                                autofocus
                                ></v-text-field>
                            </template>
                            </v-edit-dialog>
                        </template>

                          <template v-slot:item.m2="props">
                            <v-edit-dialog
                            :return-value.sync="props.item.m2"
                            large
                            @save="save"
                            cancel-text="Cerrar"
                            save-text="Guardar"
                            >
                            <div>{{ props.item.m2 }}</div>
                            <template v-slot:input>
                                <div class="mt-4 text-h6">
                                Actualizar
                                </div>
                                <v-text-field
                                v-model="props.item.construccion"
                                :rules="[max25chars]"
                                label="Edit"
                                single-line
                                counter
                                autofocus
                                ></v-text-field>
                                 <v-text-field
                                v-model="props.item.terraza"
                                :rules="[max25chars]"
                                label="Edit"
                                single-line
                                counter
                                autofocus
                                ></v-text-field>
                                 <v-text-field
                                v-model="props.item.m2"
                                :rules="[max25chars]"
                                label="Edit"
                                single-line
                                counter
                                autofocus
                                ></v-text-field>
                            </template>
                            </v-edit-dialog>
                        </template>

                        

                        <template v-slot:item.estado="props">
                            <v-edit-dialog
                            :return-value.sync="props.item.estado"
                            large
                            @save="save"
                            cancel-text="Cerrar"
                            save-text="Guardar"
                            >
                             <v-btn
                              :color="Estado(props.item.estado)"
                              dark
                              width="130px"
                             >
                               <div>{{ props.item.estado }}</div>
                             </v-btn>
                            <template v-slot:input>
                                <div class="mt-4 text-h6">
                                Actualizar
                                </div>
                                <v-select
                                  :items="estadoActual"
                                  
                                  label="Estado"
                                  v-model="props.item.estado"
                                  :rules="[max25chars]"
                                  single-line
                                  counter
                                  autofocus
                                ></v-select>
                            
                            </template>
                            </v-edit-dialog>
                        </template>

                    </v-data-table>
                    <v-snackbar
                      v-model="snack"
                      :timeout="1000"
                      :color="snackColor"
                    >
                      {{ snackText }}

                      <template v-slot:action="{ attrs }">
                        <v-btn
                          v-bind="attrs"
                          text
                          @click="snack = false"
                        >
                          Cerrar
                        </v-btn>
                      </template>
                    </v-snackbar>
                </v-card>
                
            </div>
        </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        snack: false,
        snackColor: '',
        snackText: '',
        search: '',
        totalDatos: 0,
        estadoActual: ['DISPONIBLE', 'RESERVADO', 'VENDIDO', 'INDEFINIDO'],
        datos: [],
        max25chars: v => v.length <= 25 || 'Entrada demasiado larga!',
        loading: true,
        options: {},
        headers: [
          {
            text: 'Status',
            align: 'start',
            sortable: false,
            value: 'estado',
            
          },
          { text: 'ID', value: 'id' },
          { text: 'Dessarrollo', value: 'dessarrollo' },
          { text: 'Precio', value: 'precio' },
          { text: '#Recs.', value: 'recamaras' },
          { text: '#Baños', value: 'banos' },
          { text: 'Planta', value: 'planta' },
          { text: 'TDP', value: 'tdp' },
          { text: 'M2', value: 'm2' },
          { text: 'Precio x M2', value: 'precioxm2' },

        ],
      }
    },
    watch: {
      options: {
        handler () {
          this.getDataFromApi()
        },
        deep: true,
      },
    },
    mounted () {
      this.getDataFromApi()
    },
    methods: {
        save () {
        this.snack = true
        this.snackColor = 'success'
        this.snackText = 'Dato cambiado'
      },
      cancel () {
        this.snack = true
        this.snackColor = 'error'
        this.snackText = 'Cancelado'
      },
      open () {
        this.snack = true
        this.snackColor = 'info'
        this.snackText = 'Dialogo abierto'
      },
      close () {
        console.log('Dialog cerrado')
      },
    
      Estado (estado) {
        if (estado =='DISPONIBLE') return 'green'
        else if(estado=='RESERVADO') return 'red'
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
            estado: 'DISPONIBLE',
            id: 'A001',
            dessarrollo: 'Test Dessarrollo',
            precio: '$85,000 USD',
            recamaras: '1',
            banos: '2',
            planta:'Planta Baja',
            tdp:'A',
            m2:'34m2',
            precioxm2:'$2,500 USD m2',
            construccion:'90',
            terraza:'4',
          },
          {
            estado: 'DISPONIBLE',
            id: 'A002',
            dessarrollo: 'Test Dessarrollo',
            precio: '$95,000 USD',
            recamaras: '1',
            banos: '2',
            planta:'Planta Alta',
            tdp:'A',
            m2:'34m2',
            precioxm2:'$2,500 USD m2',
            construccion:'90',
            terraza:'4',
          },
         
         
        ]
      },
    },
  }
</script>
<style>

</style>