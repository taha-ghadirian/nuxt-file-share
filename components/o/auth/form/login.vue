<template>
  <M-BoxForm :submit="submitLoginForm">
    <M-BoxInput
      v-model="loginFormData.username"
      rules="required|min:5|max:100"
      label="نام کاربری"
      solo
    ></M-BoxInput>
    <M-BoxInput
      v-model="loginFormData.password"
      rules="required|min:8|max:100"
      type="password"
      label="رمزعبور"
      solo
    ></M-BoxInput>
    <v-btn type="submit" block color="primary"> ورود </v-btn>
  </M-BoxForm>
</template>

<script>
export default {
  name: 'LoginFormOrganism',
  data() {
    return {
      loginFormData: {
        username: '',
        password: '',
      },
    }
  },
  methods: {
    async submitLoginForm() {
      try {
        const response = await this.$auth.loginWith('local', {
          data: this.loginFormData,
        })
        if (response.data.isSuccess !== true) {
          if (response.data.errors) {
            this.$store.commit('SET_SNACK_BAR_OPTION', {
              message: response.errors,
              color: 'error',
              status: response.status,
            })
          } else {
            this.$nuxt.error({
              status: response.status ?? 500,
              message:
                response.errors ??
                'کابر عزیز مشکلی پیش آمده است. ما به آن رسیدگی میکنیم',
            })
          }
        }
      } catch (err) {
        if (err.response.data.isSuccess !== true) {
          if (err.response.data.errors) {
            this.$store.commit('SET_SNACK_BAR_OPTION', {
              message: err.response.errors,
              color: 'error',
              status: err.response.status,
            })
          } else {
            this.$nuxt.error({
              status: err.response.status ?? 500,
              message:
                err.response.errors ??
                'کابر عزیز مشکلی پیش آمده است. ما به آن رسیدگی میکنیم',
            })
          }
        }
      }
    },
  },
}
</script>

<style></style>
