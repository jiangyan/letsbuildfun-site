import { Button } from "@/components/ui/button"

export default function CTA() {
  return (
    <section className="bg-[#2C6566] text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Automotive Service?</h2>
        <p className="text-xl mb-8">Join the AI revolution and take your workshop to the next level.</p>
        <Button className="bg-[#EDBF43] text-[#1F3440] hover:bg-[#EDBF43]/90" size="lg">Get Started Today</Button>
      </div>
    </section>
  )
}

