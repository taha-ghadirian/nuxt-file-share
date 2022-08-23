export const state = () => ({
  mini: false,
  snackbar: {
    message: '',
    color: 'error',
    status: 0,
  },
})

export const mutations = {
  SET_MINI: (state) => (state.mini = !state.mini),
  SET_SNACK_BAR_OPTION: (state, value) => {
    state.snackbar.message = value.message
    state.snackbar.color = value.color
    state.snackbar.status = value.status
  },
}
