import { Suspense } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import { ErrorBoundaryClient } from '@/app/components/ErrorBoundaryClient'

export default function Home() {
  return (
    <ErrorBoundaryClient>
      <div className="min-h-screen flex flex-col">
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <main>
            <Hero />
            <Features />
            <CTA />
          </main>
        </Suspense>
        <Footer />
      </div>
    </ErrorBoundaryClient>
  )
}

