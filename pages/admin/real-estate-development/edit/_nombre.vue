<template>
    <v-row align="center" justify="center">
        <v-col cols="12">
            <v-container fluid>
                <v-col cols="12">
                    <v-container fluid>
                        <div>
                            <v-btn icon to="/admin/real-estate-development/list">
                                <v-icon>
                                    mdi-chevron-left
                                </v-icon>
                            </v-btn>
                            <h2 class="text-center">Dessarrollo {{nombre}}</h2>
                        </div>      
                    </v-container>
                </v-col>
                <v-col cols="12">
                    <v-container fluid>
                        <DessarrolloDetalle/>   
                    </v-container>
                    
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