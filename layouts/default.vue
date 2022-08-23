<template>
  <v-app>
    <O-Navigation ref="navbar" />

    <O-Navbar @toggle-drawer="$refs.navbar.toggleRight()" />

    <v-main class="light">
      <!-- page station -->
      <Nuxt />
    </v-main>

    <O-Footer />
    <M-Snackbar></M-Snackbar>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
}
</script>

<style></style>
