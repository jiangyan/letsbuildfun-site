import Link from 'next/link'
import { Cpu } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-[#1F3440] text-white py-4">
      <div className="container mx-auto px-6">
        <nav className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Cpu className="h-8 w-8 text-[#25BDB0]" />
            <span className="text-xl font-bold">Let&apos;s Build Fun</span>
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li><Link href="#features" className="text-gray-300 hover:text-[#25BDB0]">Products</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-[#25BDB0]">About</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-[#25BDB0]">Contact</Link></li>
            </ul>
          </nav>
        </nav>
      </div>
    </header>
  )
}

