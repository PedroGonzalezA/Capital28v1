<template>
    <v-footer
      :absolute="!fixed"
      app
      class="footer"
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

<style lang="scss" scoped>
.footer{
  background: $colorPrincipal;
}
</style>