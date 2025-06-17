'use client'

import { useState } from 'react'
import { useAppSelector, useAppDispatch } from '@/lib/redux/hooks'
import { setError } from '@/lib/redux/authSlice'
import { AuthService } from '@/lib/supabase/auth'

export function AuthComponent() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isSignUp, setIsSignUp] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  
  const { user, error } = useAppSelector((state) => state.auth)
  const dispatch = useAppDispatch()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    dispatch(setError(null))

    try {
      if (isSignUp) {
        const { error } = await AuthService.signUp(email, password)
        if (error) {
          dispatch(setError(error.message))
        } else {
          dispatch(setError('Check your email for verification link'))
        }
      } else {
        const { error } = await AuthService.signIn(email, password)
        if (error) {
          dispatch(setError(error.message))
        }
      }
    } finally {
      setIsLoading(false)
    }
  }

  const handleSignOut = async () => {
    await AuthService.signOut()
  }

  if (user) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Welcome!</h2>
        <p className="mb-4">Logged in as: {user.email}</p>
        <button
          onClick={handleSignOut}
          className="w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
        >
          Sign Out
        </button>
      </div>
    )
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-md">
      <h2 className="text-2xl font-bold mb-4">
        {isSignUp ? 'Sign Up' : 'Sign In'}
      </h2>
      
      {error && (
        <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 disabled:opacity-50"
        >
          {isLoading ? 'Loading...' : (isSignUp ? 'Sign Up' : 'Sign In')}
        </button>
      </form>

      <button
        onClick={() => setIsSignUp(!isSignUp)}
        className="w-full mt-4 text-blue-500 hover:underline"
      >
        {isSignUp ? 'Already have an account? Sign In' : 'Need an account? Sign Up'}
      </button>
    </div>
  )
}