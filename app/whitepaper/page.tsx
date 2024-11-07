"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { 
  ArrowRight, 
  Waves as WavesIcon, 
  Users as UsersIcon, 
  Shield as ShieldIcon, 
  Coins as CoinsIcon, 
  BarChart as ChartIcon,
  Rocket as RocketIcon
} from "lucide-react"
import Link from "next/link"

export default function Whitepaper() {
  const sections = [
    {
      title: "1. Introduction",
      icon: <WavesIcon className="h-8 w-8 text-blue-500" />,
      content: "Welcome to Orca Monsta, the token that is making waves in the crypto ocean. Designed for fairness and transparency, Orca Monsta ensures that holders are rewarded with fees from trades executed on-chain."
    },
    {
      title: "2. Vision",
      icon: <UsersIcon className="h-8 w-8 text-blue-500" />,
      content: "The ORCA MONSTA Team aims to build a community-driven economy where loyalty and active participation are handsomely rewarded. By distributing trade fees to holders, Orca fosters a strong, supportive network. We are currently developing ground breaking state of the art technology not yet seen in the crypto space, that will be released soon. We will implement this technology as well as other developments from both the ORCA MONSTA developers and suggestions from the community to ensure the overall long term sustainability of ORCA MONSTA ."
    },
    {
      title: "3. How It Works",
      icon: <ShieldIcon className="h-8 w-8 text-blue-500" />,
      content: [
        "Fee Distribution: A small dynamic percentage of every on-chain transaction is collected as fees.",
        "Orca Monsta Holders: These collected fees are distributed proportionally to holders at regular 24hr (randomized) intervals.",
        "Transparency: All transactions and fee distributions are transparently recorded on the blockchain for anyone to verify.",
        "New technology: Currently we are developing ground breaking technology not yet seen in the crypto space, that will be released in the coming weeks / months. Unfortunately due to the sensitive nature of this new technology, we will not be disclosing any details at this time."
      ]
    },
    {
      title: "4. Benefits",
      icon: <CoinsIcon className="h-8 w-8 text-blue-500" />,
      content: [
        "Passive Income: Holders earn passive income simply by holding Orca Monsta.",
        "Community Engagement: Encourages active participation and long-term commitment.",
        "Sustainability: Ensures a self-sustaining ecosystem with continuous incentives for holding and trading."
      ]
    },
    {
      title: "5. Tokenomics",
      icon: <ChartIcon className="h-8 w-8 text-blue-500" />,
      content: [
        "Total Supply: 999,000,000 ORCA that is continually reduced due to liquidity pool token burn",
        "Initial Distribution: Fairlaunch with no pre-mines or insider allocations.",
        "Transaction Fees: Fees are dynamic based on volume, which are then in turn distributed to holders."
      ]
    },
    {
      title: "6. Roadmap",
      icon: <RocketIcon className="h-8 w-8 text-blue-500" />,
      content: [
        "Phase 1: Launch community via social media & web portal for engagement.",
        "Phase 2: Implement fee distribution system for hodlers of Orca Monsta",
        "Phase 3: Expand partnerships and integrations and liquidity pools.",
        "Phase 4: Continuous development and improvements based on community feedback."
      ]
    },
    {
      title: "7. Conclusion",
      icon: <WavesIcon className="h-8 w-8 text-blue-500" />,
      content: "Orca isn't just a token; it's a tide of change in the crypto market. Join us today and ride the wave of transparency, fairness, and community-driven growth all the way to the moon."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 via-emerald-100 to-blue-200 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-4 top-1/4 h-72 w-72 rounded-full bg-blue-300/20 blur-3xl animate-pulse"></div>
        <div className="absolute right-0 top-1/2 h-96 w-96 rounded-full bg-teal-300/20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-emerald-300/20 blur-3xl animate-pulse"></div>
      </div>

      <div className="max-w-4xl mx-auto p-8 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
            ORCA Whitepaper
          </h1>
          <div className="text-teal-700 text-xl">Making waves in the crypto ocean</div>
        </motion.div>

        {/* Sections */}
        {sections.map((section, index) => (
          <motion.div
            key={index}
            className="mb-12 bg-white/60 rounded-xl p-8 shadow-lg border border-teal-200 backdrop-blur-sm hover:shadow-xl transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-4">
              {section.icon}
              <h2 className="text-2xl font-bold text-teal-700">{section.title}</h2>
            </div>
            {Array.isArray(section.content) ? (
              <ul className="space-y-4">
                {section.content.map((item, i) => (
                  <motion.li 
                    key={i}
                    className="flex items-start text-teal-700"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <ArrowRight className="h-5 w-5 mr-2 mt-1 flex-shrink-0 text-teal-500" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            ) : (
              <p className="text-teal-700 leading-relaxed">{section.content}</p>
            )}
          </motion.div>
        ))}

        {/* Call to Action */}
        <motion.div 
          className="text-center py-12"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-6 text-teal-700">Ready to dive in with $ORCA? 🐋</h2>
          <Link 
            href="/"
            className="px-6 py-3 bg-gradient-to-r from-teal-600 to-blue-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
          >
            Join the Pod
          </Link>
        </motion.div>
      </div>
    </div>
  )
}