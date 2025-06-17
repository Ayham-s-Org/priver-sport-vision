'use client'

import { Provider } from 'react-redux'
import { store } from '@/lib/redux/store'
import { AuthProvider } from './AuthProvider'

export function ReduxProvider({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <AuthProvider>
        {children}
      </AuthProvider>
    </Provider>
  )
}