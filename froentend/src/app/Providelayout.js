"use client"
import React from 'react'
import { Provider } from 'react-redux'
import store from './component/store/Store'

const Providelayout = ({children}) => {
  return (
    <Provider store={store}>
        {children}
    </Provider>
  )
}

export default Providelayout