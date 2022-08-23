<template>
  <validation-provider
    v-slot="{ errors }"
    :mode="validateMode"
    :name="label"
    :rules="rules"
  >
    <v-textarea
      :class="{ 'v-messages__message__ltr': dir === 'ltr' }"
      :dir="dir ? dir : 'rtl'"
      :error-messages="errors"
      :label="label"
      v-bind="$attrs"
      v-on="$listeners"
      @input="$emit('input', $event.value)"
    />
  </validation-provider>
</template>

<script>
import { ValidationProvider } from 'vee-validate'

export default {
  name: 'TextareaBoxMolecule',
  components: {
    ValidationProvider,
  },
  inheritAttrs: false,
  props: {
    validateMode: {
      type: String,
      default: 'eager',
    },
    dir: {
      type: String,
      default: 'rtl',
    },
    label: {
      type: String,
      required: true,
    },
    rules: {
      type: [String, () => Object],
      default: '',
    },
  },
}
</script>

<style>
.v-messages__message__ltr .v-messages {
  text-align: left !important;
}

.v-messages__message__ltr .error--text {
  text-align: right !important;
}
</style>
