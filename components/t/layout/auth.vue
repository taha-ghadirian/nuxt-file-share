<template>
  <v-app>
    <v-main>
      <v-container fluid class="fill-height py-0">
        <v-row class="fill-height">
          <!-- 
            dynamic section 
            auth forms 
            right section in desktop size 
          -->
          <v-col
            cols="12"
            md="5"
            class="fill-height d-flex align-center justify-center"
          >
            <Nuxt></Nuxt>
          </v-col>
          <!-- end dynamic section-->

          <!--
              static component
              image section
              left section in desktop size
           -->
          <O-AuthOverlay></O-AuthOverlay>
          <!-- end static section-->
        </v-row>
      </v-container>
    </v-main>
    <!-- this component regesterd in all layout level -->
    <M-Snackbar></M-Snackbar>
  </v-app>
</template>

<script>
export default {
  name: 'AuthLayoutTepmlate',
}
</script>

<style></style>
