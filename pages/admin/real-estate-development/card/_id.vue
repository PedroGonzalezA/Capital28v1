<template>
    <v-row>
        <v-col>
            <p>hola</p>
        </v-col>
    </v-row>
</template>
<script>
export default {
    created(){
        let cardId=this.$route.params.id;
        console.log(cardId);
    }
}
</script>