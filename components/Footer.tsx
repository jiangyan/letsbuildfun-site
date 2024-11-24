import Link from 'next/link'
import { Cpu } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#1F3440] text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">About Us</h3>
            <p className="text-gray-300">
              We&apos;re dedicated to revolutionizing the automotive industry through innovative AI solutions.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <p className="text-gray-300">
              Let&apos;s discuss how we can transform your workshop.
            </p>
          </div>
          {/* ... rest of the footer content ... */}
        </div>
      </div>
    </footer>
  )
}

