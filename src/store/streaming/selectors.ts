import { UserState } from './types'

export const selectUser = (state: { user: UserState }) =>
  state.user || { loading: false, error: null }
