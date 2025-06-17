'use client'

import { useEffect } from 'react'
import { useAppDispatch } from '@/lib/redux/hooks'
import { setUser, setLoading } from '@/lib/redux/authSlice'
import { AuthService } from '@/lib/supabase/auth'

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setLoading(true))

    // Get initial user
    AuthService.getCurrentUser().then((user) => {
      dispatch(setUser(user))
    })

    // Listen for auth changes
    const { data: { subscription } } = AuthService.onAuthStateChange((user) => {
      dispatch(setUser(user))
    })

    return () => subscription.unsubscribe()
  }, [dispatch])

  return <>{children}</>
}