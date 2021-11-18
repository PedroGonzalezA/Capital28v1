<template>
  <v-expansion-panels>
    <v-expansion-panel disabled>
      <v-expansion-panel-header>
        <template>
          <v-row no-gutters>
            <v-col cols="4">
              INFORMACION
            </v-col>
            
          </v-row>
        </template>
      </v-expansion-panel-header>

      <v-expansion-panel-content>
        
      </v-expansion-panel-content>
    </v-expansion-panel>

    <v-expansion-panel>
      <v-expansion-panel-header>
        <v-row no-gutters>
          <v-col cols="4">
            IMAGENES Y GALERIAS
          </v-col>
        </v-row>
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-row no-gutters>
          <v-spacer></v-spacer>
          <v-col cols="12">
              <div>
                Capital28 utiliza Cloudinary para un mejor control y experiencia de imágenes, por lo que es necesario que se cree una cuenta y llene los siguientes campos.
              </div>
          </v-col>
          <v-col cols="12">
            <v-text-field
              placeholder="Cloud Name"
              chips
              flat
            >
            </v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              placeholder="API Key"
              chips
              flat
            >
            </v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              placeholder="API Secret"
              chips
              flat
            >
            </v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              placeholder="API Environment variable"
              chips
              flat
            >
            </v-text-field>
          </v-col>
          <v-col
            cols="6"
          >
            <v-btn
              color="primary"
            >
              Guardar
            </v-btn>
          </v-col>

          <v-col
            cols="6"
          >
            <v-btn
              color="primary"
            >
              REGISTRARE EN CLOUDINARY
            </v-btn>
          </v-col>
        </v-row>
      </v-expansion-panel-content>
    </v-expansion-panel>

    <v-expansion-panel>
      <v-expansion-panel-header>
        <v-row no-gutters>
          <v-col cols="4">
            AGREGAR PROPIEDADES
          </v-col>

        </v-row>
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-row
          justify="space-around"
          no-gutters
        >
            <v-container>
                <h4>Importar propiedades con excel</h4>
                <div>
                    <v-row no-gutters align="center" justify="center">
                        <v-col class="10">
                            <v-file-input
                                multiple
                                label="Seleccionar archivo"
                            ></v-file-input>
                        </v-col>
                        <v-col cols="2" class="pl-2" >
                            <v-btn small dark >
                                Upload
                                <v-icon right>
                                    mdi-cloud-upload
                                </v-icon>
                            </v-btn>
                        </v-col>
                    </v-row>
                </div>
            </v-container>
            
        </v-row>
      </v-expansion-panel-content>
    </v-expansion-panel>

    <v-expansion-panel disabled>
      <v-expansion-panel-header>
        <template v-slot:default="{ open }">
          <v-row no-gutters>
            <v-col cols="4">
              COTIZADOR
            </v-col>
            <v-col
              cols="8"
              class="text--secondary"
            >
              <v-fade-transition leave-absolute>
                <span
                  v-if="open"
                  key="0"
                >
                  Enter a name for the trip
                </span>
                
              </v-fade-transition>
            </v-col>
          </v-row>
        </template>
      </v-expansion-panel-header>

      <v-expansion-panel-content>
        <v-text-field
          v-model="trip.name"
          placeholder="Caribbean Cruise"
        ></v-text-field>
      </v-expansion-panel-content>
    </v-expansion-panel>

     <v-expansion-panel>
      <v-expansion-panel-header >
        <v-row no-gutters>
          <v-col cols="4">
            REGLAS DE PRECIOS
          </v-col>
        </v-row>
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-row no-gutters>
          <v-spacer></v-spacer>
          <v-col cols="6" class="pa-3">
            
            <v-select
              v-model="trip.location"
              :items="locations"
              prepend-icon="mdi-home-modern"
              placeholder="Propiedades"
              chips
              flat
              
            ></v-select>
          </v-col>
          <v-col cols="6" class="pa-3">
            <v-select
              v-model="trip.location"
              :items="locations"
              placeholder="Tipo de contrato"
              chips
              flat
            ></v-select>
          </v-col>
          <v-col cols="6" class="pa-3">
            <v-text-field
              placeholder="Descripcion"
              chips
              flat
            >

            </v-text-field>
            
          </v-col>
          <v-col cols="6" class="pa-3">
            <v-select
              v-model="trip.location"
              :items="locations"
              placeholder="Elije tu forma de pago"
              chips
              flat
            ></v-select>
          </v-col>
          <v-col cols="6" class="pa-3">
            
            <v-text-field
              placeholder="Enganche"
              prepend-icon="mdi-percent-outline"
              type="number"
              chips
              flat
            >

            </v-text-field>
          </v-col>
          <v-col cols="6" class="pa-3">
            
            <v-text-field
              placeholder="Reserva"
              prepend-icon="mdi-currency-usd"              
              type="number"
              chips
              flat
            >

            </v-text-field>
          </v-col>
          <v-col cols="6" class="pa-3">
            <v-text-field
              placeholder="Meses acordados"
              prepend-icon="mdi-pound"              
              type="number"
              chips
              flat
            >
            </v-text-field>
          </v-col>
          <v-col cols="6" class="pa-3">
            <v-text-field
              placeholder="Pagos mensuales"
              prepend-icon="mdi-currency-usd"              
              type="number"
              chips
              flat
            >
            </v-text-field>
          </v-col>
          <v-col cols="6" class="pa-3">
            <v-select
              v-model="trip.location"
              :items="locations"
              placeholder="Elije el tipo de descuento"
              chips
              flat
            ></v-select>
          </v-col>
          <v-col cols="6" class="pa-3">
           
            <v-text-field
              placeholder="Descuento"
              prepend-icon="mdi-currency-usd"              
              type="number"
              chips
              flat
            >
            </v-text-field>
          </v-col>
          <v-col
            cols="6"
          >
            <v-btn
              color="primary"
            >
              Guardar
            </v-btn>
          </v-col>
        </v-row>

        
      </v-expansion-panel-content>
    </v-expansion-panel>

     <v-expansion-panel>
      <v-expansion-panel-header v-slot="{ open }">
        <v-row no-gutters>
          <v-col cols="4">
            ETIQUETAS DE SEO
          </v-col>
          <v-col
            cols="8"
            class="text--secondary"
          >
            <v-fade-transition leave-absolute>
              <span
                v-if="open"
                key="0"
              >
                Capital28 utiliza Cloudinary para un mejor control y experiencia de imágenes, por lo que es necesario que se cree una cuenta y llene los siguientes campos.
              </span>
            </v-fade-transition>
          </v-col>
        </v-row>
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-row no-gutters>
          <v-spacer></v-spacer>
          <v-col cols="5">
            <v-select
              v-model="trip.location"
              :items="locations"
              chips
              flat
              solo
            ></v-select>
          </v-col>

          <v-divider
            vertical
            class="mx-4"
          ></v-divider>

          <v-col cols="3">
            Select your destination of choice
            <br>
            <a href="#">Learn more</a>
          </v-col>
        </v-row>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            text
            color="secondary"
          >
            Cancel
          </v-btn>
          <v-btn
            text
            color="primary"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-expansion-panel-content>
    </v-expansion-panel>

  </v-expansion-panels>
</template>
<script>
  export default {
    data: () => ({
      date: null,
      trip: {
        name: '',
        location: null,
        start: null,
        end: null,
      },
      locations: ['Australia', 'Barbados', 'Chile', 'Denmark', 'Ecuador', 'France'],
    }),
  }
</script>