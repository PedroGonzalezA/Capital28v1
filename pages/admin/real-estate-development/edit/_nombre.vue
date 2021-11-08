<template>
    <v-row align="center" justify="center">
        <v-col cols="12">
            <v-container>
                <v-col>
                    <v-container>
                            <h2 class="text-center">Dessarrollo {{nombre}}</h2>
                    </v-container>
                </v-col>
                <v-col>
                    <DessarrolloDetalle/>
                </v-col>
            </v-container>
        </v-col>
    </v-row>
</template>
<script>
export default {
    data(){
        return{
            nombre:this.$route.params.nombre
        }
    },
  
}
</script>