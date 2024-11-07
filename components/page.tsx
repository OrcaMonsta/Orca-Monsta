'use client'

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Twitter, MessageCircle, Globe, FileText, Bitcoin, DollarSign, TrendingUp, Menu, X } from 'lucide-react'
import { useState } from 'react'

export function Page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-teal-50 via-emerald-100 to-blue-200">
      <header className="sticky top-0 z-50 w-full border-b border-teal-200 bg-white/80 backdrop-blur-lg">
        <div className="container flex h-16 items-center justify-between px-4">
          {/* Logo and Contract Section */}
          <div className="flex items-center gap-4">
            {/* YouTube iframe with better containment */}
            <div className="relative h-12 w-12 overflow-hidden rounded-lg shadow-md">
              <iframe
                src="https://www.youtube.com/embed/yceBdKReq6g?autoplay=1&mute=1&loop=1&playlist=yceBdKReq6g"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            
            {/* Text Content with Better Typography */}
            <div className="flex flex-col">
              <span className="text-sm font-semibold">
                <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">Orca Monsta</span> 
                <span className="text-teal-600">- Developed by @STACCoverflow</span>
              </span>
              <div className="flex items-center gap-2">
                <span className="text-xs text-teal-600 font-bold">Contract Address:</span>
                <code className="rounded bg-gray-100 px-2 py-0.5 text-xs font-mono text-teal-600 hover:bg-gray-200 transition-colors cursor-pointer" 
                      onClick={() => navigator.clipboard.writeText('CaLyryATQhnVZaau425zAJ9fNf4uNWVa1GKD6JN94AX9')}
                      title="Click to copy">
                  CaLyryATQhnVZaau425zAJ9fNf4uNWVa1GKD6JN94AX9
                </code>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center">
            {/* Mobile Menu Button */}
            <button
              className="ml-auto md:hidden rounded-lg p-2 hover:bg-gray-100 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5 text-teal-600" /> : <Menu className="h-5 w-5 text-teal-600" />}
            </button>

            {/* Navigation Links */}
            <nav className={`${
              isMenuOpen 
                ? 'absolute left-0 right-0 top-16 border-b bg-white/95 backdrop-blur-lg shadow-lg' 
                : 'hidden'
              } md:static md:flex md:items-center md:space-x-8 md:bg-transparent md:shadow-none`}>
              {[
                { href: '#', label: 'Home' },
                { href: '/whitepaper', label: 'About' },
                { href: 'mailto:OrcaMonsta@gmail.com', label: 'Contact' },
                { href: '/whitepaper', label: 'Whitepaper' }
              ].map(({ href, label }) => (
                <Link
                  key={label}
                  href={href}
                  className="block px-4 py-2 text-sm font-medium text-gray-600 hover:text-teal-600 transition-colors md:px-0 md:py-0"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1 relative z-10">
        <section className="container space-y-6 py-8 md:py-12 lg:py-24 relative">
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px)] bg-[size:14px] opacity-20" />
          
          <div className="mx-auto flex max-w-[64rem] flex-col items-center gap-4 text-center">
            <div className="space-y-2">
              <h1 className="font-heading text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent animate-fade-in">
                ORCA MONSTA
              </h1>
              <h2 className="font-heading text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl text-teal-700 animate-fade-in-up">
                The Future of Crypto is Here.
              </h2>
            </div>
            <p className="max-w-[42rem] leading-normal text-teal-600 sm:text-xl sm:leading-8 animate-fade-in-up delay-100">
              Discover the power of decentralized currency with Orca Monsta. Generate passive income from liquidity pools for holding Orca Monsta.
            </p>
            <div className="flex space-x-4 animate-fade-in-up delay-200">
              <Link 
                href="/get-started"
                className="px-6 py-3 bg-gradient-to-r from-teal-600 to-blue-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
              >
                Get Started
              </Link>
              <Link 
                href="/whitepaper"
                className="px-6 py-3 border-2 border-teal-600 text-teal-600 font-medium rounded-lg hover:bg-teal-50 transition-colors duration-200"
              >
                Read Whitepaper
              </Link>
            </div>
          </div>
        </section>
        <section className="container space-y-6 py-8 md:py-12 lg:py-24">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h2 className="font-heading text-3xl font-bold leading-[1.1] sm:text-3xl md:text-6xl text-teal-700">
              Why Choose Orca Monsta?
            </h2>
          </div>
          <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
            <Card className="flex flex-col bg-white/60 border-teal-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
              <CardHeader>
                <div className="group-hover:scale-110 transition-transform duration-300">
                  <DollarSign className="h-10 w-10 text-teal-600" />
                </div>
                <CardTitle className="text-teal-700 group-hover:text-teal-600 transition-colors">
                  Revenue from Fees
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-teal-600">
                  Enjoy constant revenue from fees generated by organic & automated transactions from multiple liquidity pools, By holding $ORCA.
                </p>
              </CardContent>
            </Card>
            
            <Card className="flex flex-col bg-white/60 border-teal-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
              <CardHeader>
                <div className="group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="h-10 w-10 text-teal-600" />
                </div>
                <CardTitle className="text-teal-700 group-hover:text-teal-600 transition-colors">
                  Appreciating Asset
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-teal-600">
                  Enjoy the inherient appreciation of Orca Monsta as Burn functions continually reduce the amounts of Orca Monsta in ciruclation.
                </p>
              </CardContent>
            </Card>
            
            <Card className="flex flex-col bg-white/60 border-teal-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group sm:col-span-2 md:col-span-1">
              <CardHeader>
                <div className="group-hover:scale-110 transition-transform duration-300">
                  <Bitcoin className="h-10 w-10 text-teal-600" />
                </div>
                <CardTitle className="text-teal-700 group-hover:text-teal-600 transition-colors">
                  Easy to Use
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-teal-600">
                  Brought to you on the solana network, providing seamless and secure tx's. Use your favorite wallet provider to HODL Orca Monsta today!
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
        <section className="container space-y-6 py-8 md:py-12 lg:py-24">
    <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
      <h2 className="font-heading text-3xl font-bold leading-[1.1] sm:text-3xl md:text-6xl text-teal-600">
        How It Works
      </h2>
      <Link 
        href="/how-it-works"
        className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-teal-600 to-blue-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
      >
        How it works
      </Link>
    </div>
  </section>
          <section className="container space-y-6 py-8 md:py-12 lg:py-24">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
              <h2 className="font-heading text-3xl font-bold leading-[1.1] sm:text-3xl md:text-6xl text-teal-700">
                Join the Orca Monsta Community today!
              </h2>
            </div>
            <div className="mx-auto max-w-[64rem] w-full">
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
  </section>
</main>
      <footer className="w-full bg-gradient-to-b from-teal-50 via-emerald-100 to-blue-200 backdrop-blur-sm border-t border-teal-600 py-1 sticky bottom-0 left-0 right-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center space-y-1">
            <Link 
              className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600 hover:scale-105 transition-transform leading-none" 
              href="#"
            >
              ORCAMONSTA
            </Link>
            <p className="text-black font-medium text-xs">
              © 2024 ORCAMONSTA. All rights reserved.
            </p>
            {/* Social Media Links */}
            <div className="flex gap-6 mb-2">
              <Link href="https://x.com/OrcaMonsta" target="_blank" className="hover:text-teal-700 transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="https://t.me/+8BkOy7gJUElkZjQx" target="_blank" className="hover:text-teal-700 transition-colors">
                <MessageCircle className="h-5 w-5" />
                <span className="sr-only">Telegram</span>
              </Link>
              <Link href="https://orca-monsta.vercel.app/" target="_blank" className="hover:text-teal-700 transition-colors">
                <Globe className="h-5 w-5" />
                <span className="sr-only">Website</span>
              </Link>
              <Link href="https://dexscreener.com/solana/6wsryhng1c7t9s5csqxcijxmivbmu8p8dmh9ckuhew2a" target="_blank" className="hover:text-teal-700 transition-colors">
                <img 
                  src="/dexscreenericon.png" 
                  alt="Dex Screener Logo" 
                  className="h-7 w-7 -mt-0.5"
                />
                <span className="sr-only">DEX Screener</span>
              </Link>
            </div>
            <div className="flex gap-4">
              <Link className="text-sm font-medium hover:underline underline-offset-4" href="/terms">
                Terms
              </Link>
              <span className="text-sm text-teal-600">•</span>
              <Link className="text-sm font-medium hover:underline underline-offset-4" href="/privacy">
                Privacy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}