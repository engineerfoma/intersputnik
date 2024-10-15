import { configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'

import settingReducer from './setting/reducers'
import streamitReducer from './streamit/reducers'
import streamingReducer from './streaming/reducers'
import streamitShop from './shop/reducers'
import streamitMedia from './media/reducers'
export const store = () =>
  configureStore({
    reducer: {
      setting: settingReducer,
      streamit: streamitReducer,
      streaming: streamingReducer,
      shop: streamitShop,
      media: streamitMedia,
    },
  })
export type AppStore = ReturnType<typeof store>
export type RootState = ReturnType<AppStore['getState']>
export const wrapperStore = createWrapper(store)
