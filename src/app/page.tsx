'use client'

import { useAppSelector, useAppDispatch } from '@/lib/hooks'
import { setUser, logout } from '@/lib/features/auth/authSlice'
import { supabase } from '@/lib/supabase'
import { useEffect, useState } from 'react'

export default function Home() {
  const dispatch = useAppDispatch()
  const { user } = useAppSelector((state) => state.auth)
  const [connectionStatus, setConnectionStatus] = useState<string>('Checking...')

  useEffect(() => {
    // Test Supabase connection
    const testSupabaseConnection = async () => {
      try {
        const { error } = await supabase.from('test').select('*').limit(1)
        if (error) {
          setConnectionStatus('Supabase connection established (table not found is expected)')
        } else {
          setConnectionStatus('Supabase fully connected')
        }
      } catch {
        setConnectionStatus('Supabase connection failed')
      }
    }

    testSupabaseConnection()
  }, [])

  const handleLogin = () => {
    dispatch(setUser({
      id: '1',
      email: 'demo@example.com',
      name: 'Demo User'
    }))
  }

  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Priver Sport Vision
          </h1>
          <p className="text-lg text-gray-600">
            Next.js + TailwindCSS + Redux + Supabase Base Project
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Integration Status
            </h2>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-md">
                <span className="font-medium text-green-800">Next.js</span>
                <span className="text-green-600">✓ Active</span>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-md">
                <span className="font-medium text-green-800">TailwindCSS</span>
                <span className="text-green-600">✓ Active</span>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-md">
                <span className="font-medium text-green-800">Redux</span>
                <span className="text-green-600">✓ Active</span>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-blue-50 rounded-md">
                <span className="font-medium text-blue-800">Supabase</span>
                <span className="text-blue-600">{connectionStatus}</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Redux Demo
            </h3>
            
            {user ? (
              <div className="space-y-3">
                <div className="p-4 bg-green-50 rounded-md">
                  <p className="text-green-800">
                    <strong>Logged in as:</strong> {user.name} ({user.email})
                  </p>
                </div>
                <button
                  onClick={handleLogout}
                  className="w-full bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-md transition-colors"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="space-y-3">
                <div className="p-4 bg-gray-50 rounded-md">
                  <p className="text-gray-600">Not logged in</p>
                </div>
                <button
                  onClick={handleLogin}
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition-colors"
                >
                  Demo Login
                </button>
              </div>
            )}
          </div>

          <div className="pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500 text-center">
              This is a base project template. Modify as needed for your application.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
