<template>
    <v-col 
      cols="12"
      sm="12"
      md="12"
      lg="12"
      class="pa-2 mx-auto"
    >
      <v-card
        class="mx-auto cardNuevo"
        height="209px"
      >
        <v-container fluid>
          <v-row justify="center" align="center" class="divSuperior">
            <v-col lg="4" class="imagenD">
              <v-img class="imagenP" :src="require(`static/user.png`)">
              </v-img>
            </v-col>
            <v-col lg="8" class="textoD">
                <v-row>
                  <v-col cols="12" class="pb-0">
                    <div>Nombre:</div>
                    {{nombre}}
                  </v-col>
                  <v-col cols="12" class="py-1">
                    <div>Email:</div>
                    {{correo}}
                  </v-col>
                  <v-col cols="12" class="py-1">
                    <div>Telefono:</div>
                    {{telefono}}
                  </v-col>
                </v-row>
            </v-col>
          </v-row>
          
        </v-container>
      </v-card>
    </v-col>

 
</template>
<script>
export default {
  props:{
        id: {
          type: String,default:'Sin id',required:'true',
        },
        nombre: {
          type: String,default:'Sin nombre',required:'true',
        },
        correo: {
          type: String,default:'Sin nombre',required:'true',
        },
        telefono: {
          type: String,default:'- -',required:'true',
        },
        proyecto: {
          type: String,default:'- -',required:'true',
        },
        status: {
          type: Number,default:0,required:'true',
        },
        propectosA: {
          type: Object,default: () => ({}),required:'true',
        },
        desempeno: {
          type: String,default:'- -',required:'true',
        },
        rol: {
          type: String,default:'rol',required:'true',
        },

  }
}
</script>
<style lang="scss" scoped>
  .imagenP{
  }
  .imagenD{
 
  }
  .textoD{
    font-size: 12px;
    text-align: center;
    color: white;
  }
  .divSuperior{
    background: $azulBC28;
    border-radius: 6px 6px 0 0;
  }
</style>