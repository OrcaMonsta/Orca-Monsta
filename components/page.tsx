'use client'

export const dynamic = 'force-dynamic'

import * as React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Twitter, 
  MessageCircle, 
  Globe, 
  FileText, 
  Bitcoin, 
  DollarSign, 
  TrendingUp, 
  Menu, 
  X, 
  ArrowRight 
} from 'lucide-react'
import { TokenData } from '@/components/TokenData'

export function Page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-['Cornerstone'] tracking-tighter">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px)] bg-[size:14px] opacity-10" />
      
      <header className="sticky top-0 z-50 w-full border-b border-[#6acd0c]/20 tracking-tighter">
        <div className="bg-gradient-to-r from-[#faef55]/30 to-[#30aa49]/30 backdrop-blur-sm">
          <div className="container mx-auto h-16 px-4">
            <div className="grid grid-cols-12 items-center h-full">
              <div className="col-span-4 flex items-center gap-2 sm:gap-4">
                <div className="relative h-8 w-8 sm:h-12 sm:w-12 overflow-hidden rounded-lg shadow-md">
                  <iframe
                    src="https://www.youtube.com/embed/yceBdKReq6g?autoplay=1&mute=1&loop=1&playlist=yceBdKReq6g"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
                
                <div className="flex flex-col text-left font-['Cornerstone']">
                  <span className="text-sm sm:text-base font-semibold text-left">
                    <span className="bg-gradient-to-r from-[#30aa49] to-[#6acd0c] bg-clip-text text-transparent font-bold text-base sm:text-lg">
                      Orca Monsta
                    </span>
                    <span className="text-[#30aa49] hidden sm:inline">
                      {" - "}
                      Developed by <Link href="https://x.com/STACCoverflow" target="_blank" rel="noopener noreferrer" className="text-sm sm:text-base hover:text-[#6acd0c] transition-colors">@STACCoverflow</Link>
                    </span>
                  </span>
                  <div className="flex items-center gap-1 sm:gap-2 text-left">
                    <span className="text-xs sm:text-sm text-[#30aa49] font-bold whitespace-nowrap">
                      Contract:
                    </span>
                    <code 
                      onClick={() => copyToClipboard('CaLyryATQhnVZaau425zAJ9fNf4uNWVa1GKD6JN94AX9')}
                      className="font-['Cornerstone'] rounded bg-[#30aa49]/5 px-1 sm:px-2 py-0.5 text-[8px] sm:text-xs text-[#30aa49] cursor-copy 
                      hover:bg-[#30aa49]/10 transition-all duration-200 relative 
                      transform hover:scale-105 hover:-translate-y-0.5 hover:shadow-lg"
                      title="Click to copy"
                    >
                      CaLyryATQhnVZaau425zAJ9fNf4uNWVa1GKD6JN94AX9
                      {copied && (
                        <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-black text-white px-2 py-1 rounded text-xs">
                          Copied!
                        </span>
                      )}
                    </code>
                  </div>
                </div>
              </div>

              <nav className="col-span-6 col-start-8 hidden md:flex md:items-center md:space-x-8 font-['Cornerstone'] text-base sm:text-lg ml-36">
                <Link 
                  href="/" 
                  className="relative text-[#30aa49] hover:text-[#6acd0c] transition-colors group"
                >
                  Home
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-[#6acd0c] scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </Link>
                <Link 
                  href="/about" 
                  className="relative text-[#30aa49] hover:text-[#6acd0c] transition-colors group"
                >
                  About
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-[#6acd0c] scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </Link>
                <Link 
                  href="mailto:OrcaMonsta@gmail.com" 
                  className="relative text-[#30aa49] hover:text-[#6acd0c] transition-colors group"
                >
                  Contact
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-[#6acd0c] scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </Link>
                <Link 
                  href="/whitepaper" 
                  className="relative text-[#30aa49] hover:text-[#6acd0c] transition-colors group"
                >
                  Whitepaper
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-[#6acd0c] scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </Link>
              </nav>

              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="col-span-2 md:hidden p-2 text-[#30aa49] justify-self-end"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>
      <main className="flex-1 w-full bg-gradient-to-r from-[#faef55]/30 to-[#30aa49]/30 font-['Cornerstone'] tracking-tighter">
        <div className="container mx-auto px-4">
          {/* Landing section - added key positioning classes */}
          <section className="relative min-h-[90vh] flex items-center justify-center">
            <div className="mx-auto text-center w-full">
              <div className="relative w-full max-w-[1200px] mx-auto"> 
                <img
                  src="/Landing Page Title.png"
                  alt="Orca Monsta"
                  className="w-full h-auto object-contain"
                  style={{
                    maxHeight: '70vh',
                    objectFit: 'contain',
                    objectPosition: 'top'
                  }}
                />
                
                {/* Updated button container */}
                <div className="relative z-50 flex justify-center space-x-4 mt-8"> {/* Changed from absolute to relative positioning */}
                  <a 
                    href="https://dexscreener.com/solana/6wsryhng1c7t9s5csqxcijxmivbmu8p8dmh9ckuhew2a"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-gradient-to-r from-[#30aa49] to-[#6acd0c] text-white font-medium rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 text-sm sm:text-base cursor-pointer"
                  >
                    Buy Orca Monsta
                  </a>

                  <a 
                    href="/whitepaper"
                    className="px-6 py-3 border-2 border-[#30aa49] text-[#30aa49] font-medium rounded-lg hover:bg-white hover:text-[#30aa49] hover:border-[#30aa49] transition-colors duration-200 text-sm sm:text-base cursor-pointer"
                  >
                    Read Whitepaper
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section className="py-4 md:py-6 lg:py-12">
            <div className="relative -mt-20 md:-mt-24 lg:-mt-32">
              {/* Full-width image */}
              <div className="w-full">
                <img
                  src="/why choose.png"
                  alt="Why Choose Orca Monsta?"
                  className="w-full h-auto object-contain px-4 sm:px-6 lg:px-8"
                />
              </div>

              {/* Overlaid cards grid - moved down 5% */}
              <div className="absolute top-[55%] left-0 right-0 mx-auto grid justify-center gap-6 sm:grid-cols-2 md:max-w-[80rem] md:grid-cols-4 px-4 sm:px-6 lg:px-8">
                {/* Revenue from Fees Card */}
                <Card className="group bg-gradient-to-br from-[#faef55]/10 via-[#30aa49]/10 to-[#6acd0c]/10 backdrop-blur-sm 
                  border-[#ccdc2a]/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl 
                  hover:border-[#30aa49]/30 hover:from-[#faef55]/15 hover:via-[#30aa49]/15 hover:to-[#6acd0c]/15
                  relative overflow-hidden rounded-xl min-w-[280px]">
                  <CardHeader className="space-y-2 relative z-10">
                    <div className="group-hover:scale-110 transition-transform duration-300 
                      bg-gradient-to-br from-white/90 to-white/70 p-4 rounded-full w-fit
                      shadow-lg group-hover:shadow-xl group-hover:rotate-3">
                      <DollarSign className="h-12 w-12 text-black transition-colors" />
                    </div>
                    <CardTitle className="text-xl sm:text-2xl text-[#30aa49] group-hover:text-[#6acd0c] 
                      transition-colors tracking-wider font-bold">
                      Constant Revenue
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <p className="text-base sm:text-lg text-[#30aa49]/70 group-hover:text-[#30aa49]/90 
                      transition-colors leading-relaxed">
                      Enjoy constant revenue from fees generated by organic & automated transactions from multiple liquidity pools, By holding $ORCA.
                    </p>
                  </CardContent>
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-[#6acd0c]/5 
                    group-hover:via-white/10 group-hover:to-[#6acd0c]/10 transition-all duration-300" />
                </Card>
                
                {/* Appreciating Asset Card */}
                <Card className="group bg-gradient-to-tl from-[#faef55]/10 via-[#30aa49]/10 to-[#6acd0c]/10 backdrop-blur-sm 
                  border-[#ccdc2a]/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl 
                  hover:border-[#30aa49]/30 hover:from-[#faef55]/15 hover:via-[#30aa49]/15 hover:to-[#6acd0c]/15
                  relative overflow-hidden rounded-xl min-w-[280px]">
                  <CardHeader className="space-y-2 relative z-10">
                    <div className="group-hover:scale-110 transition-transform duration-300 
                      bg-gradient-to-tl from-white/90 to-white/70 p-4 rounded-full w-fit
                      shadow-lg group-hover:shadow-xl group-hover:-rotate-3">
                      <TrendingUp className="h-12 w-12 text-black transition-colors" />
                    </div>
                    <CardTitle className="text-xl sm:text-2xl text-[#30aa49] group-hover:text-[#6acd0c] 
                      transition-colors tracking-wider font-bold">
                      Appreciating Asset
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <p className="text-base sm:text-lg text-[#30aa49]/70 group-hover:text-[#30aa49]/90 
                      transition-colors leading-relaxed">
                      Enjoy the inherent appreciation of Orca Monsta as Burn functions continually reduce the amounts of Orca Monsta in circulation.
                    </p>
                  </CardContent>
                  <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-white/5 to-[#6acd0c]/5 
                    group-hover:via-white/10 group-hover:to-[#6acd0c]/10 transition-all duration-300" />
                </Card>
                
                {/* Easy to Use Card */}
                <Card className="group bg-gradient-to-tr from-[#faef55]/10 via-[#30aa49]/10 to-[#6acd0c]/10 backdrop-blur-sm 
                  border-[#ccdc2a]/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl 
                  hover:border-[#30aa49]/30 hover:from-[#faef55]/15 hover:via-[#30aa49]/15 hover:to-[#6acd0c]/15
                  relative overflow-hidden rounded-xl min-w-[280px]">
                  <CardHeader className="space-y-2 relative z-10">
                    <div className="group-hover:scale-110 transition-transform duration-300 
                      bg-gradient-to-tr from-white/90 to-white/70 p-4 rounded-full w-fit
                      shadow-lg group-hover:shadow-xl group-hover:rotate-3">
                      <img 
                        src="/solanalogo.png" 
                        alt="Solana Logo" 
                        className="h-[52px] w-[52px] object-contain brightness-100 transition-all duration-300"
                      />
                    </div>
                    <CardTitle className="text-xl sm:text-2xl text-[#30aa49] group-hover:text-[#6acd0c] 
                      transition-colors tracking-wider font-bold">
                      Easy to Use
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <p className="text-base sm:text-lg text-[#30aa49]/70 group-hover:text-[#30aa49]/90 
                      transition-colors leading-relaxed">
                      Brought to you on the Solana network, providing seamless and secure tx's. Use your favorite wallet provider to HODL Orca Monsta today!
                    </p>
                  </CardContent>
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-[#6acd0c]/5 
                    group-hover:via-white/10 group-hover:to-[#6acd0c]/10 transition-all duration-300" />
                </Card>
                
                {/* Technology Card */}
                <Card className="group bg-gradient-to-bl from-[#faef55]/10 via-[#30aa49]/10 to-[#6acd0c]/10 backdrop-blur-sm 
                  border-[#ccdc2a]/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl 
                  hover:border-[#30aa49]/30 hover:from-[#faef55]/15 hover:via-[#30aa49]/15 hover:to-[#6acd0c]/15
                  relative overflow-hidden rounded-xl min-w-[280px]">
                  <CardHeader className="space-y-2 relative z-10">
                    <div className="group-hover:scale-110 transition-transform duration-300 
                      bg-gradient-to-bl from-white/90 to-white/70 p-4 rounded-full w-fit
                      shadow-lg group-hover:shadow-xl group-hover:-rotate-3">
                      <FileText className="h-12 w-12 text-black transition-colors" />
                    </div>
                    <CardTitle className="text-xl sm:text-2xl text-[#30aa49] group-hover:text-[#6acd0c] 
                      transition-colors tracking-wider font-bold">
                      Technology
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <p className="text-base sm:text-lg text-[#30aa49]/70 group-hover:text-[#30aa49]/90 
                      transition-colors leading-relaxed">
                      Built on Solana's cutting-edge blockchain, featuring automated smart contracts, advanced tokenomics and our own revolutionary, never before seen technology.
                    </p>
                  </CardContent>
                  <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-white/5 to-[#6acd0c]/5 
                    group-hover:via-white/10 group-hover:to-[#6acd0c]/10 transition-all duration-300" />
                </Card>
              </div>
            </div>
          </section>

          <section className="py-8 md:py-12 lg:py-24">
            <div className="relative">
              {/* Title and Button */}
              <div className="relative">
                <div className="w-full">
                  <img
                    src="/howitworkstitle.png"
                    alt="How It Works"
                    className="w-full h-auto object-contain px-4 sm:px-6 lg:px-8 -mt-20 md:-mt-24 lg:-mt-32"
                  />
                </div>

                <div className="absolute left-1/2 top-[60%] transform -translate-x-1/2 -translate-y-1/2">
                  <button 
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-[#30aa49] to-[#6acd0c] text-white font-medium rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
                  >
                    {isExpanded ? 'Hide Content' : 'Watch Video'}
                  </button>
                </div>
              </div>

              {/* Expandable Content - positioned even closer to button */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-full max-w-4xl mx-auto -mt-40 relative z-10"
                  >
                    <div className="bg-white/60 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-[#ccdc2a]/20">
                      {/* YouTube Video Section */}
                      <div className="flex justify-center items-center mb-8">
                        <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg">
                          <iframe 
                            src="https://www.youtube.com/embed/LJ3jUXtnFGA?si=Csez2HSKaaUszk-j" 
                            title="YouTube video player" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            allowFullScreen
                            className="absolute top-0 left-0 w-full h-full"
                          ></iframe>
                        </div>
                      </div>
                      
                      {/* Text Content */}
                      <div className="prose max-w-none text-left space-y-6 px-4">
                        {/* Introduction */}
                        <div className="relative">
                          <h3 className="text-[#30aa49] font-bold text-3xl mb-4">
                            Alright, here's a simplified explanation of the Orca Whirlpool project & fee distribution concept:
                          </h3>
                        </div>

                        <div className="space-y-6">
                          {/* Orca Protocol Fees */}
                          <div>
                            <h3 className="text-xl font-bold text-[#0e6627] mb-2">
                              Orca Protocol Fees
                            </h3>
                            <p className="text-[#0e6627] leading-relaxed">
                              Fees generated from the protocol will go not only to the specific pools involved in successful prediction markets (which win rounds through swaps), but 10% of all protocol fees will also go directly to $ORCA token holders. This adds a valuable utility to $ORCA, rewarding holders and making the token more attractive.
                            </p>
                          </div>

                          {/* App Functionality */}
                          <div>
                            <h3 className="text-xl font-bold text-[#0e6627] mb-2">
                              App Functionality
                            </h3>
                            <p className="text-[#0e6627] leading-relaxed">
                              This app functions as an automated trading tool within the Orca ecosystem. When users interact with it, they are essentially "aping into" (or investing in) specific pools. Similar to platforms like Bullx or Photon, the app automatically trades and optimizes all your Orca positions. It does this on the backend using a unique key generated by the app to manage your assets effectively.
                            </p>
                          </div>

                          {/* High Yield Potential */}
                          <div>
                            <h3 className="text-xl font-bold text-[#0e6627] mb-2">
                              High Yield Potential
                            </h3>
                            <p className="text-[#0e6627] leading-relaxed">
                              The idea is that this tool will generate high annual returns (potentially in the millions of percent, theoretically speaking) by efficiently managing positions and capturing trading fees.
                            </p>
                          </div>

                          {/* Fee Distribution */}
                          <div>
                            <h3 className="text-xl font-bold text-[#0e6627] mb-2">
                              Fee Distribution
                            </h3>
                            <ul className="space-y-2 text-[#0e6627] list-disc pl-5 marker:text-[#0e6627]">
                              <li>10% of fees are returned to $ORCA token holders, enhancing the token's appeal.</li>
                              <li>90% of fees are allocated to emerging prediction market pools, such as those in a Polymarket-style system. This means new or smaller pools will receive a portion of these accumulated fees based on their total value locked (TVL), helping to grow their resources over time.</li>
                            </ul>
                          </div>
                        </div>

                        {/* Conclusion */}
                        <div className="relative">
                          <h3 className="text-[#30aa49] font-bold text-2xl mb-4 text-center mx-auto">
                            In essence, as more people use this system, they fuel both their own pool investments and help bolster the Orca ecosystem, creating a dynamic and rewarding cycle.
                          </h3>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </section>

          <section className="py-8 md:py-12 lg:py-24">
            <div className="relative">
              {/* Background Image - moved up 70% */}
              <img
                src="/join.png"
                alt="Join the Orca Monsta Community today!"
                className="w-full h-auto object-contain absolute -top-[70%] left-0"
              />
              
              {/* Dexscreener Embed */}
              <div className="relative z-10 mx-auto max-w-[64rem] w-full">
                <style jsx>{`
                  #dexscreener-embed{
                    position:relative;
                    width:100%;
                    padding-bottom:125%;
                  }
                  @media(min-width:1400px){
                    #dexscreener-embed{
                      padding-bottom:65%;
                    }
                  }
                  #dexscreener-embed iframe{
                    position:absolute;
                    width:100%;
                    height:100%;
                    top:0;
                    left:0;
                    border:0;
                    border-radius: 0.75rem;
                    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
                  }
                `}</style>
                <div id="dexscreener-embed">
                  <iframe src="https://dexscreener.com/solana/6wSRYHNg1C7T9S5cSqXCijxmiVBMu8P8dMH9ckUhEW2A?embed=1&theme=dark"></iframe>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <footer className="w-full border-t border-[#6acd0c]/20 sticky bottom-0 left-0 right-0 z-50 tracking-tighter">
        <div className="bg-gradient-to-r from-[#faef55]/30 to-[#30aa49]/30 backdrop-blur-sm py-1">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center justify-center space-y-1 font-['Cornerstone']">
              <Link 
                className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#30aa49] to-[#6acd0c] hover:scale-105 transition-transform leading-none" 
                href="#"
              >
                ORCAMONSTA
              </Link>
              <p className="text-[#30aa49] font-medium text-xs">
                © 2024 ORCAMONSTA. All rights reserved.
              </p>
              {/* Social Media Links */}
              <div className="flex gap-6 mb-2">
                <Link 
                  href="https://x.com/OrcaMonsta" 
                  target="_blank" 
                  className="text-black hover:text-[#6acd0c] transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link 
                  href="https://t.me/+8BkOy7gJUElkZjQx" 
                  target="_blank" 
                  className="text-black hover:text-[#6acd0c] transition-colors"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span className="sr-only">Telegram</span>
                </Link>
                <Link 
                  href="https://orca-monsta.vercel.app/" 
                  target="_blank" 
                  className="text-black hover:text-[#6acd0c] transition-colors"
                >
                  <Globe className="h-5 w-5" />
                  <span className="sr-only">Website</span>
                </Link>
                <Link 
                  href="https://dexscreener.com/solana/6wsryhng1c7t9s5csqxcijxmivbmu8p8dmh9ckuhew2a" 
                  target="_blank" 
                  className="text-black hover:text-[#6acd0c] transition-colors"
                >
                  <img 
                    src="/dexscreenericon.png" 
                    alt="Dex Screener Logo" 
                    className="h-7 w-7 -mt-0.5"
                  />
                  <span className="sr-only">DEX Screener</span>
                </Link>
              </div>
              <div className="flex gap-4 font-['Cornerstone']">
                <Link className="text-sm font-medium text-[#30aa49] hover:text-[#6acd0c] hover:underline underline-offset-4" href="/terms">
                  Terms
                </Link>
                <span className="text-sm text-[#30aa49]">•</span>
                <Link className="text-sm font-medium text-[#30aa49] hover:text-[#6acd0c] hover:underline underline-offset-4" href="/privacy">
                  Privacy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}