import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Bitcoin } from 'lucide-react'

export default function Whitepaper() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="/">
          <Bitcoin className="h-6 w-6 mr-2" />
          <span className="font-bold">CryptoLand</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/">
            Home
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Contact
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/whitepaper">
            Whitepaper
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-8">
              CryptoLand Whitepaper
            </h1>
            <div className="prose max-w-none dark:prose-invert">
              <h2>1. Introduction</h2>
              <p>
                CryptoLand is a revolutionary cryptocurrency platform designed to address the challenges of modern
                digital finance. This whitepaper outlines our vision, technology, and roadmap for creating a more
                accessible and efficient financial ecosystem.
              </p>
              <h2>2. Technology</h2>
              <p>
                Our blockchain technology utilizes a unique consensus mechanism that combines the best aspects of
                Proof of Stake and Proof of Work, ensuring both security and energy efficiency.
              </p>
              <h2>3. Tokenomics</h2>
              <p>
                The CryptoLand token (CLT) has a fixed supply of 1 billion tokens. 50% of tokens are allocated for
                public sale, 20% for the development team, 20% for marketing and partnerships, and 10% reserved for
                future development.
              </p>
              <h2>4. Roadmap</h2>
              <ul>
                <li>Q3 2024: Mainnet Launch</li>
                <li>Q4 2024: Mobile Wallet Release</li>
                <li>Q1 2025: Decentralized Exchange Integration</li>
                <li>Q2 2025: Smart Contract Platform</li>
              </ul>
              <h2>5. Conclusion</h2>
              <p>
                CryptoLand aims to revolutionize the cryptocurrency space by providing a secure, efficient, and
                user-friendly platform for digital transactions. Join us in shaping the future of finance.
              </p>
            </div>
            <div className="mt-8">
              <Button>
                <Link href="/">Back to Home</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 CryptoLand. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}