<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-data-table
          :headers="table.headers"
          :items="table.data"
          loader-height="3"
          loading-text="در حال بارگیری ... "
        ></v-data-table>
      </v-col>
      <v-col cols="12" md="6" lg="4">
        <v-card>
          <v-card-title> asdasd </v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      table: {
        headers: [
          {
            text: 'عنوان سند',
            sortable: false,
            value: 'title',
          },
          {
            text: 'کد',
            sortable: false,
            value: 'code',
          },
          {
            text: 'سطح دسترسی',
            sortable: false,
            value: 'documentAccess',
          },
        ],
        data: [{ title: 'sdfdsf', code: 'asdasd', documentAccess: 1 }],
      },
    }
  },
}
</script>

<style></style>
