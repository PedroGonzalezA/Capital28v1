<template>
<v-card>
    <v-card-title>
      <v-row align="center">
        <v-col
         cols="6"
         sm="6"
         md="9"
         lg="10"
        >
          <v-text-field
           v-model="search"
           append-icon="mdi-magnify"
           label="Buscar"
           
          ></v-text-field>
        </v-col>
        <v-col
         cols="6"
         sm="6"
         md="3"
         lg="2">
            <v-btn-toggle
              v-model="opciones"
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
    </v-card-title>
    <div id="leadTable">
        <v-data-table
        :search="search"
        :headers="titulos"
        :items="leads"
        :options.sync="options"
        :server-items-length="totalLeads"
        :loading="loading"
        sort-by="nombre"
        class="elevation-1"
        >
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

        <template v-slot:item.status="{ item }">
            <v-chip
                dark
                color="#262d3c"
                >
                {{ item.status }}
            </v-chip>
        </template>
        <template v-slot:item.posponer="{ item }">
            {{ item.posponer }}
        </template>
              <template v-slot:top>
    
        <v-dialog
          v-model="dialog"
          max-width="900px"
        >
          
          <v-card>
            <v-toolbar  color="#262d3c"
              dark>
              <v-toolbar-title >
                  <span class="text-h7">{{ formTitle }}</span>
              </v-toolbar-title>
              <v-spacer/>
              <v-spacer/>
                <v-btn class="transparent">
                  <v-icon ></v-icon>
                </v-btn>

                <v-btn icon class="transparent">
                  <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
              <v-btn
                color="red darken-2"
                text
                @click="close"
                icon
              >
                <v-icon>
                  mdi-close
                </v-icon>
              </v-btn>
            </v-toolbar>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col
                    cols="12"
                    sm="12"
                    md="12"
                  >
                  <v-row>
                    <v-col cols="6" sm="6" md="6">
                      <v-text-field
                        v-model="editedItem.correo"
                        filled
                        label="Correo"
                        prepend-icon="mdi-email"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="6" sm="6" md="6">
                      <v-text-field
                        v-model="editedItem.nombre"
                        filled
                        label="Nombre"
                        prepend-icon="mdi-account"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="6" sm="6" md="6">
                      <v-text-field
                        v-model="editedItem.telefono"
                        filled
                        label="Telefono"
                        prepend-icon="mdi-phone"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="6" sm="6" md="6">
                      <v-text-field
                        v-model="editedItem.ubicacion"
                        filled
                        label="Ubicacion"
                        prepend-icon="mdi-map-marker"
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="12" md="12">
                      
                    </v-col>

                    <v-col cols="9" sm="9" md="9">
                      <v-text-field
                        v-model="editedItem.presupuesto"
                        filled
                        label="Presupuesto"
                        prepend-icon="mdi-map-marker"
                      ></v-text-field>
                    </v-col>

                    <v-col cols="3" sm="3" md="3">
                      <v-select
                        v-model="editedItem.tipoMoneda"
                        :items="items"
                        filled
                        prepend-icon="mdi-currency-usd"
                        label="Tipo de moneda"
                      ></v-select>
                    </v-col>

                    <v-col cols="9" sm="9" md="9">
                      <v-text-field
                        v-model="editedItem.ubicacion"
                        filled
                        label="Observaciones"
                        prepend-icon="mdi-text"
                      ></v-text-field>
                    </v-col>

                    <v-col cols="3" sm="3" md="3">
                      <v-text-field
                        v-model="editedItem.ubicacion"
                        filled
                        label="Tipo de moneda"
                        prepend-icon="mdi-currency-usd"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="6" sm="6" md="6">
                      <v-select
                        menu-props="auto"
                        v-model="editedItem.asignado"
                        :items="asignacion"
                        filled
                        prepend-icon="mdi-account"
                        label="Asignacion"
                      ></v-select>
                    </v-col>

                    <v-col cols="6" sm="6" md="6">
                      <v-select
                        menu-props="auto"
                        v-model="editedItem.faseActual"
                        :items="fase"
                        filled
                        prepend-icon="mdi-filter"
                        label="Selecciona una fase"
                      ></v-select>
                    </v-col>
                    
                    <v-col cols="12" sm="12" md="12">
                       <v-select
                        v-model="tipologiaActual"
                        :items="tipologia"
                        :menu-props="{ maxHeight: '400' }"
                        label="Tipologia de interes"
                        filled
                        multiple
                      ></v-select>
                    </v-col>

                    <v-col cols="12" sm="12" md="12">
                      <v-select
                        v-model="formaPagoActual"
                        :items="formaPago"
                        :menu-props="{ maxHeight: '400' }"
                        label="Forma de pago"
                        filled
                        multiple
                        persistent-hint
                      ></v-select>
                    </v-col>
                  </v-row>
                    
                    
                  </v-col>

                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
            
              <v-btn
                color="blue darken-1"
                text
                @click="save"
              >
                <v-icon>
                  mdi-send
                </v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </template>
    
    <template v-slot:item.acciones="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-eye
      </v-icon>
    </template>
        </v-data-table>
    </div> 
</v-card>
 
</template>
<script>
  export default {
      
    data () {
        
      return {
        tipologiaActual:[],
        tipologia:['Departamentos','Consultorios','Locales Comerciales','Oficinas','Estudio','1 Rec','2 Recs','3 Recs','4 Recs','+4 Recs','PH','N/A'],
        search: '',
        max25chars: v => v.length <= 25 || 'exeso de datos',
        dialog: false,
        dialogDelete: false,
        items: ['MX','USA'],
        asignacion: ['Test Admin','Test'],
        fase: ['Por asignar','Asignado','Por perfilar','Busqueda','Seguimiento','Recorrido','Seguimiento post-recorrido','Ofertando','Apartado','Promesa','Cierre'],
        opciones:[0,1,2],
        totalLeads: 0,
        leads: [],
        loading: true,
        options: {},
        titulos: [
          {
          text: 'fecha de Registro',
          align: 'start',
          sortable: false,
          value: 'fechaRegistro',
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
          { text: 'Acciones', value: 'acciones', sortable: false },
        ],
         datos: [],
      editedIndex: -1,
      editedItem: {
        fechaRegistro:'-',
        nombre: '-',
        telefono: '',
        correo: '-',
        llegoPor: '-',
        presupuesto:0,
        comoNosEncontro:'-',
        ubicacion:'',
        perfil:'',
        observaciones:'-',
        perfilacion:'-',
        asignado:'-',
        status:'-',
        posponer:'-',
        tipoMoneda:'-',
        faseActual:''
      },
      defaultItem: {
        fechaRegistro:' ',
        nombre: '-',
        telefono: '',
        correo: '-',
        llegoPor: '-',
        presupuesto:0,
        comoNosEncontro:'-',
        ubicacion:'',
        perfil:'',
        observaciones:'-',
        perfilacion:'-',
        asignado:'-',
        status:'-',
        posponer:'-',
        tipoMoneda:'-',
        faseActual:''
        
      },
      }
      
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
    },
    mounted () {
      this.getDataFromApi()
    },
    methods: {
       editItem (item) {
        this.editedIndex = this.datos.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      close () {
        this.dialog = false
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
     
      open () {
        this.snack = true
        this.snackColor = 'info'
        this.snackText = 'Dialog opened'
      },
      cancel () {
        this.snack = true
        this.snackColor = 'error'
        this.snackText = 'Canceled'
      },
      getDataFromApi () {
        this.loading = true
        this.fakeApiCall().then(data => {
          this.leads = data.items
          this.totalLeads = data.total
          this.loading = false
        })
      },
      /**
       * In a real application this would be a call to fetch() or axios.get()
       */
      fakeApiCall () {
        return new Promise((resolve, reject) => {
          const { sortBy, sortDesc, page, itemsPerPage } = this.options

          let items = this.getLeads()
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
      getLeads () {
        return [
          {
            fechaRegistro:'23-sep-2021 11:54 am',
            nombre: 'lead',
            telefono: '',
            correo: 'oscar.cach@wayaweb.com',
            llegoPor: 'propiedadesplayadelcarmen',
            presupuesto:'',
            comoNosEncontro:'Google',
            ubicacion:'',
            perfil:'',
            observaciones:'Test Cach. Enviado desde Postman',
            perfilacion:'5%',
            asignado:'Test Admin',
            status:'Asignado',
            posponer:'1 dia',
            tipoMoneda:'MX',
            faseActual:'Asignado',
            tipologiaActual:'Consultorios'
          },

        ]
      },
    },
  }
</script>