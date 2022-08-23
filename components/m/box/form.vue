<template>
  <ValidationObserver v-slot="{ invalid, handleSubmit }">
    <form
      v-bind="$attrs"
      v-on="$listeners"
      @submit.prevent="handleSubmit(submit)"
    >
      <slot :invalid="invalid"></slot>
    </form>
  </ValidationObserver>
</template>

<script>
import { ValidationObserver } from 'vee-validate'

export default {
  name: 'AppForm',
  components: {
    ValidationObserver,
  },
  inheritAttrs: false,
  props: {
    submit: {
      required: true,
      type: Function,
    },
  },
}
</script>
