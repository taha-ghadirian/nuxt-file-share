export const store = () => ({
  snackbar: {
    message: '',
    color: 'error',
    status: 0,
  },
})

export const mutations = () => ({
  SET_SNACK_BAR_OPTION: (state, value) => {
    state.snackbar.message = value.message
    state.snackbar.color = value.color
    state.snackbar.status = value.status
  },
})
