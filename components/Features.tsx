import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Search, Clock, Wrench, Settings } from 'lucide-react'

const features = [
  {
    title: "Automotive AI Diagnosis",
    description: "Identify causes and find solutions for auto symptoms and fault codes with our advanced AI system.",
    icon: Settings
  },
  {
    title: "Natural Language Parts Query",
    description: "Easily find complex parts and assembly illustrations using natural language queries.",
    icon: Search
  },
  {
    title: "AI Labor Time App",
    description: "Generate accurate labor time estimates using AI and parts data, eliminating manual calculations.",
    icon: Clock
  },
  {
    title: "Smart Repair Recommendations",
    description: "Get AI-powered suggestions for efficient repair procedures and best practices.",
    icon: Wrench
  }
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-[#f8f9fa]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our AI-Powered Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index}>
              <CardHeader>
                <feature.icon className="h-10 w-10 text-[#25BDB0] mb-2" />
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

