import Link from 'next/link'
import { Cpu } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Cpu className="h-8 w-8 text-[#56D7B4]" />
            <span className="text-xl font-bold">Let's Build Fun, Inc.</span>
          </div>
          <nav>
            <ul className="flex flex-wrap justify-center md:justify-end space-x-6">
              <li><Link href="#" className="hover:text-[#56D7B4]">Home</Link></li>
              <li><Link href="#" className="hover:text-[#56D7B4]">Products</Link></li>
              <li><Link href="#" className="hover:text-[#56D7B4]">About</Link></li>
              <li><Link href="#" className="hover:text-[#56D7B4]">Contact</Link></li>
              <li><Link href="#" className="hover:text-[#56D7B4]">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-[#56D7B4]">Terms of Service</Link></li>
            </ul>
          </nav>
        </div>
        <div className="mt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Let's Build Fun, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

