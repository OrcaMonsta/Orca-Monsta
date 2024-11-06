"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 via-emerald-100 to-blue-200">
      <div className="max-w-4xl mx-auto p-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h1 className="text-4xl font-bold text-teal-700 text-center mb-8">Privacy Policy</h1>
          <p className="text-teal-600 text-center">Last updated: November 5, 2024</p>

          {/* Introduction */}
          <motion.section className="bg-white/60 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-teal-200">
            <h2 className="text-2xl font-bold text-teal-700 mb-4">Introduction</h2>
            <p className="text-teal-700 leading-relaxed">
              Your privacy is important to us. This Privacy Disclaimer outlines how Orca Monsta ("we," "our," "us") 
              collects, uses, and protects your information when you visit our website and use our services related 
              to ORCA Token ("Token"). By accessing or using our website, you consent to the practices described in this policy.
            </p>
          </motion.section>

          {/* Information We Collect */}
          <motion.section className="bg-white/60 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-teal-200">
            <h2 className="text-2xl font-bold text-teal-700 mb-4">Information We Collect</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-teal-700">Personal Information</h3>
                <p className="text-teal-700">When you register on our site or use our services, we may collect personal information such as your name, email address, and contact details.</p>
              </div>
              <div>
                <h3 className="font-semibold text-teal-700">Transactional Information</h3>
                <p className="text-teal-700">To facilitate transactions, we may collect information related to your cryptocurrency transactions, including wallet addresses, transaction amounts, and transaction history.</p>
              </div>
              <div>
                <h3 className="font-semibold text-teal-700">Usage Data</h3>
                <p className="text-teal-700">We may collect information about your interactions with our website, including IP addresses, browser type, operating system, referring URLs, page views, and clickstream data.</p>
              </div>
              <div>
                <h3 className="font-semibold text-teal-700">Payment Information</h3>
                <p className="text-teal-700">We may collect payment information to process transactions. This information is handled securely and in compliance with relevant payment processing regulations.</p>
              </div>
            </div>
          </motion.section>

          <div className="text-center">
            <Link 
              href="/"
              className="inline-block bg-teal-600 text-white px-6 py-3 rounded-full hover:bg-teal-700 transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 