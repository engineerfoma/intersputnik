import { configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'

import settingReducer from './setting/reducers'
import faraReducer from './fara/reducers'
import streamingReducer from './streaming/reducers'
import faraMedia from './media/reducers'
export const store = () =>
  configureStore({
    reducer: {
      setting: settingReducer,
      fara: faraReducer,
      streaming: streamingReducer,
      media: faraMedia,
    },
  })
export type AppStore = ReturnType<typeof store>
export type RootState = ReturnType<AppStore['getState']>
export const wrapperStore = createWrapper(store)
