import React from 'react'
import { Link } from 'react-router-dom'
import { FrownIcon } from './utils'

export default function NotFound() {
  return (

    <main class="bg-gray-100 dark:bg-gray-900 flex items-center justify-center min-h-screen">
      <div class="text-center">
        <div class="text-gray-500 mb-4">
          <FrownIcon className="w-16 h-16 mx-auto" />
        </div>
        <h1 class="text-4xl font-bold text-gray-800 mb-2">404 - Page Not Found</h1>
        <p class="text-gray-600 mb-6">Oops, the page you are looking for does not exist.</p>
        <Link to="/dashboard" class="bg-blue-600 h3 dark:text-white px-4 py-2 rounded hover:bg-blue-700 transition bg-transparent">Go Home</Link>
      </div>
    </main>
  )
} 