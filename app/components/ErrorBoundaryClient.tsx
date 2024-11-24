'use client'

import React from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { FallbackProps } from 'react-error-boundary'

// Make it a memo'd component to ensure proper client-side rendering
const ErrorFallback = React.memo(({ error }: FallbackProps) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-red-100 text-red-900">
      <div>
        <h2 className="text-lg font-semibold">Oops! Something went wrong:</h2>
        <p>{error.message}</p>
      </div>
    </div>
  )
})

ErrorFallback.displayName = 'ErrorFallback'

interface ErrorBoundaryClientProps {
  children: React.ReactNode
}

export const ErrorBoundaryClient = React.memo(({ children }: ErrorBoundaryClientProps) => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      {children}
    </ErrorBoundary>
  )
})

ErrorBoundaryClient.displayName = 'ErrorBoundaryClient' 