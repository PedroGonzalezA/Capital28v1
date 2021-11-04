<template>
    <v-footer
      :absolute="!fixed"
      app
      color="#262d3c"
      dark
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
</template>
<script>
export default {
    data(){
        return{
            fixed: false,
        }
    }
}
</script>