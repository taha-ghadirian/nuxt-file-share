<template>
  <v-container class="fill-height flex flex-column align-center justify-center">
    <h5 class="text-h1">{{ error.statusCode }}</h5>
    <p>{{ error.message }}</p>
  </v-container>
</template>

<script>
export default {
  name: 'ErrorLayout',
  props: ['error'],
}
</script>

<style></style>
