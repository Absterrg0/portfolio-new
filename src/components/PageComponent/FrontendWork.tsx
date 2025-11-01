"use client"
import SectionTitle from "../SectionTitle"
import { LuExternalLink } from "react-icons/lu"
import AnimatedWrapper from "@/utils/AnimatedWrapper"
import Image from "next/image"

const frontendProjects = [
  {
    id: 1,
    name: "NeoAI",
    description: "Smart AI for shopping, delivery, and travel planning",
    url: "https://neoai.abstergo.dev/",
    image: "/assets/Images/frontend/NeoAi.png",
  },
  {
    id: 2,
    name: "Clandestine",
    description: "AI-powered cybersecurity platform with real-time threat detection",
    url: "https://clandestine.abstergo.dev/",
    image: "/assets/Images/frontend/Clandestine.png",
  },
  {
    id: 3,
    name: "Email Management Component",
    description: "AI-powered email management dashboard with smart filtering and CRM",
    url: "https://components.abstergo.dev/five",
    image: "/assets/Images/frontend/Email.png",
  },
  {
    id: 7,
    name: "Pricing Plans Component",
    description: "A versatile pricing plans component with tiered subscription options",
    url: "https://components.abstergo.dev/one",
    image: "/assets/Images/frontend/PricingPlan.png",
  },
  {
    id: 4,
    name: "Order Customizer Component",
    description: "Shopify order editing component for customer self-service order management",
    url: "https://components.abstergo.dev/two",
    image: "/assets/Images/frontend/Order.png",
  },
  {
    id: 5,
    name: "Portfolio Component",
    description: "Clean and modern portfolio showcase component with profile display",
    url: "https://components.abstergo.dev/third",
    image: "/assets/Images/frontend/Portfolio.png",
  },
  {
    id: 6,
    name: "Grok Dashboard Component",
    description: "AI dashboard interface component with smart intelligence features",
    url: "https://components.abstergo.dev/four",
    image: "/assets/Images/frontend/Grok.png",
  },
  {
    id: 8,
    name: "User Avatar Component",
    description: "Simple and elegant user avatar display component",
    url: "https://components.abstergo.dev/six",
    image: "/assets/Images/frontend/Profile.png",
  },
]

const FrontendWork = () => {
  let delayValue = 0
  return (
    <section className="flex flex-col gap-4">
      <SectionTitle title="Frontend Work" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {frontendProjects.map((project, index) => (
          <AnimatedWrapper
            key={project.id}
            delay={index === 0 ? delayValue : (delayValue += 0.05)}
          >
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-lg p-5 hover:border-zinc-600 transition-all duration-300 hover:shadow-lg hover:shadow-zinc-900/50 flex flex-col justify-between min-h-[140px] overflow-hidden"
            >
              <div className="flex flex-col gap-3">
                <div className="relative w-full h-48 mb-2 rounded-md overflow-hidden bg-zinc-950 border border-zinc-800 group-hover:border-zinc-700 transition-colors duration-300">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold group-hover:text-zinc-100 transition-colors duration-300">
                    {project.name}
                  </h2>
                  <LuExternalLink className="text-zinc-500 group-hover:text-zinc-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed group-hover:text-zinc-300 transition-colors duration-300">
                  {project.description}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-zinc-800 group-hover:border-zinc-700 transition-colors duration-300">
                <span className="text-xs text-zinc-500 group-hover:text-zinc-400 transition-colors duration-300">
                  Visit website →
                </span>
              </div>
            </a>
          </AnimatedWrapper>
        ))}
      </div>
    </section>
  )
}

export default FrontendWork

