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
    <div className="min-h-screen bg-[#f5f1e4] font-['Cornerstone'] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px)] bg-[size:14px]" />
      <div className="absolute top-0 -left-4 w-[400px] h-[400px] bg-[#faef55]/30 rounded-full blur-[128px]" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#30aa49]/20 rounded-full blur-[128px]" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#6acd0c]/20 rounded-full blur-[128px]" />

      <div className="max-w-4xl mx-auto p-8 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-[#30aa49] to-[#6acd0c] bg-clip-text text-transparent">
            ORCA Whitepaper
          </h1>
          <div className="text-[#30aa49] text-xl">Making waves in the crypto ocean</div>
        </motion.div>

        {/* Sections */}
        {sections.map((section, index) => (
          <motion.div
            key={index}
            className="mb-12 bg-white/60 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-[#ccdc2a]/20 hover:border-[#30aa49]/30 transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-4">
              {section.icon}
              <h2 className="text-2xl font-bold text-[#30aa49]">{section.title}</h2>
            </div>
            {Array.isArray(section.content) ? (
              <ul className="space-y-4">
                {section.content.map((item, i) => (
                  <motion.li 
                    key={i}
                    className="flex items-start text-[#30aa49]/80"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <ArrowRight className="h-5 w-5 mr-2 mt-1 flex-shrink-0 text-[#30aa49]" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            ) : (
              <p className="text-[#30aa49]/80 leading-relaxed">{section.content}</p>
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
          <h2 className="text-4xl font-bold mb-6 text-[#30aa49]">Ready to dive in with $ORCA? 🐋</h2>
          <Link 
            href="/"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#30aa49] to-[#6acd0c] text-white font-medium rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
          >
            Join the Pod
          </Link>
        </motion.div>
      </div>
    </div>
  )
}