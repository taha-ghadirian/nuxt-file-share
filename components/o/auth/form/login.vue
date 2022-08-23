<template>
  <M-BoxForm :submit="submitLoginForm">
    <M-BoxInput
      v-model="username"
      rules="required|min:5|max:100"
      label="نام کاربری"
      outlined
    ></M-BoxInput>
    <M-BoxInput
      v-model="password"
      rules="required|min:8|max:100"
      type="password"
      label="رمزعبور"
      outlined
    ></M-BoxInput>
    <v-btn type="submit" block color="primary"> ورود </v-btn>
  </M-BoxForm>
</template>

<script>
export default {
  name: 'LoginFormOrganism',
  data() {
    return {
      username: '',
      password: '',
    }
  },
  methods: {
    submitLoginForm() {
      alert('loggedIn')
    },
  },
}
</script>

<style></style>
