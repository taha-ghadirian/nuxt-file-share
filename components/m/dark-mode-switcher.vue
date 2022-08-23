<template>
  <div class="ml-4">
    <label for="DarkModeSwitcher">
      <v-icon v-show="!$vuetify.theme.dark"> mdi-white-balance-sunny</v-icon>
      <v-icon v-show="$vuetify.theme.dark"> mdi-weather-night</v-icon>
    </label>
    <input
      id="DarkModeSwitcher"
      v-model="$vuetify.theme.dark"
      type="checkbox"
      class="d-none"
    />
  </div>
</template>

<script>
export default {
  name: 'DarkModeSwitcher',
}
</script>

<style scoped></style>
