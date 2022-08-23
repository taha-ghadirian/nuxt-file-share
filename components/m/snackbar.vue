<template>
  <v-snackbar
    width="100%"
    max-width="500px"
    min-width="0px"
    :value="visible"
    :color="snackbar.color"
    @input="setSnackBarVisible"
  >
    <span v-show="snackbar.status !== 200">
      {{ snackbar.status }}
    </span>
    <div v-show="typeof snackbar.message === 'string'">
      {{ snackbar.message }}
    </div>
    <div
      v-for="(msg, index) of snackbar.message"
      v-show="typeof snackbar.message === 'object'"
      :key="index"
    >
      <div v-show="typeof msg === 'string'">
        {{ msg }}
      </div>
      <div
        v-for="(endMsg, counter) of msg"
        v-show="typeof msg === 'object'"
        :key="counter"
      >
        {{ endMsg }}
      </div>
    </div>
    <template #action="{ attrs }">
      <v-btn
        color="white"
        text
        v-bind="attrs"
        @click="setSnackBarVisible(false)"
      >
        بستن
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'AppSnackBar',
  data() {
    return {
      visible: false,
    }
  },
  computed: {
    ...mapGetters(['snackbar']),
  },
  watch: {
    snackbar: {
      deep: true,
      handler(snackbarValue) {
        if (snackbarValue.status !== 0) {
          this.visible = true
        }
      },
    },
  },
  methods: {
    ...mapMutations({ setSnackBar: 'SET_SNACK_BAR_OPTION' }),
    setSnackBarVisible(visibleValue) {
      this.visible = visibleValue
      if (!visibleValue) {
        this.setSnackBar({ status: 0, message: '', color: 'error' })
      }
    },
  },
}
</script>

<style scoped></style>
