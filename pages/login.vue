<template>
  <section class="login-form-container">
    <nuxt-link
      to="/"
      class="text-h6 text-center d-block text-decoration-none primary--text"
    >
      File Sharing
    </nuxt-link>
    <p class="text-subtitle-1 text-center">
      برای ورود به File Sharing اطلاعات زیر را وارد کنید
    </p>
    <O-AuthFormLogin></O-AuthFormLogin>
  </section>
</template>

<script>
export default {
  name: 'LoginPage',
  layout: 'auth',
}
</script>

<style></style>
