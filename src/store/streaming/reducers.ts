import { createSlice } from '@reduxjs/toolkit'
import initialState from './state'
import { fetchUser } from './actions'

export const streamingSlice = createSlice({
  name: 'setting',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.id = action.payload.id
      state.name = action.payload.name
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = false
        state.id = action.payload.id
        state.name = action.payload.name
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Ошибка при загрузке пользователя'
      })
  },
})
export const { setUser } = streamingSlice.actions
export default streamingSlice.reducer
