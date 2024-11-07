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
      {/* Header with matching gradient */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-teal-50 via-emerald-100 to-blue-200 backdrop-blur-sm border-b border-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Your existing header content */}
            <div className="flex items-center">

            </div>
          </div>
        </div>
      </div>

    <header className="sticky top-0 z-50 w-full border-b border-teal-200 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-14 items-center">
        <Link className="flex items-center gap-2 font-semibold" href="#">
        <iframe
              src="https://www.youtube.com/embed/yceBdKReq6g?autoplay=1&mute=1&loop=1&playlist=yceBdKReq6g"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="h-14 w-14"
            ></iframe>
          <div className="flex flex-col">
            <span>Orca Monsta - Developed by @STACCoverflow</span>
            <div className="text-center w-full">
              <p className="text-sm text-muted-foreground">
                Contract Address: <span className="font-mono">CaLyryATQhnVZaau425zAJ9fNf4uNWVa1GKD6JN94AX9</span>
              </p>
            </div>
          </div>
        </Link>
          <button
            className="ml-auto md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
          <nav className={`${
            isMenuOpen 
              ? 'absolute left-0 right-0 top-14 border-b bg-background p-4 md:border-0' 
              : 'hidden'
            } md:static md:ml-auto md:flex md:items-center md:space-x-6 md:p-0`}>
            <Link className="block py-2 text-sm font-medium text-foreground/60 transition-colors hover:text-foreground md:py-0" href="#">
              Home
            </Link>
            <Link className="block py-2 text-sm font-medium text-foreground/60 transition-colors hover:text-foreground md:py-0" href="/whitepaper">
              About
            </Link>
            <Link className="block py-2 text-sm font-medium text-foreground/60 transition-colors hover:text-foreground md:py-0" href="mailto:OrcaMonsta@gmail.com">
              Contact
            </Link>
            <Link className="block py-2 text-sm font-medium text-foreground/60 transition-colors hover:text-foreground md:py-0" href="/whitepaper">
              Whitepaper
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1 relative z-10">
        <section className="container space-y-6 py-8 md:py-12 lg:py-24">
          <div className="mx-auto flex max-w-[64rem] flex-col items-center gap-4 text-center">
            <h1 className="font-heading text-3xl font-bold sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
              ORCA MONSTA
            </h1>
            <h2 className="font-heading text-3xl font-bold sm:text-5xl md:text-6xl lg:text-7xl text-teal-700">
              The Future of Crypto is Here.
            </h2>
            <p className="max-w-[42rem] leading-normal text-teal-600 sm:text-xl sm:leading-8">
              Discover the power of decentralized currency with Orca Monsta. Generate passive income from liquidity pools for holding Orca Monsta.
            </p>
            <div className="flex space-x-4">
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
            <Card className="flex flex-col bg-white/60 border-teal-200 shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm">
              <CardHeader>
                <DollarSign className="h-10 w-10 text-teal-600" />
                <CardTitle className="text-teal-700">Revenue from Fees</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-teal-600">
                  Enjoy constant revenue from fees generated by organic & automated transactions from multiple liquidity pools, from Orca Monsta.
                </p>
              </CardContent>
            </Card>
            <Card className="flex flex-col bg-white/60 border-teal-200 shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm">
              <CardHeader>
                <TrendingUp className="h-10 w-10 text-teal-600" />
                <CardTitle className="text-teal-700">Appreciating Asset</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-teal-600">
                  Enjoy the inherient appreciation of Orca Monsta as Burn functions continually reduce the amounts of Orca Monsta in ciruclation.
                </p>
              </CardContent>
            </Card>
            <Card className="flex flex-col bg-white/60 border-teal-200 shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm sm:col-span-2 md:col-span-1">
              <CardHeader>
                <Bitcoin className="h-10 w-10 text-teal-600" />
                <CardTitle className="text-teal-700">Easy to Use</CardTitle>
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