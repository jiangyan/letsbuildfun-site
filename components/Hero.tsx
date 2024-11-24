import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-[#1F3440] to-[#2C6566] text-white py-20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Revolutionizing Automotive Services with AI</h1>
          <p className="text-xl mb-6">Empowering technicians and workshops with cutting-edge AI solutions for faster, more accurate diagnostics and repairs.</p>
          <Button variant="secondary" size="lg">Learn More</Button>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-full max-w-[500px]">
            <Image
              src="/letsbuildfun.png"
              alt="AI robot diagnosing a modern car with glowing teal accents"
              width={500}
              height={500}
              className="rounded-lg shadow-lg"
              style={{ width: '100%', height: 'auto' }}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

