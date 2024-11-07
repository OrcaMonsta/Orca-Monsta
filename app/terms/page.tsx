 "use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function Terms() {
  const currentDate = new Date().toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 via-emerald-100 to-blue-200">
      <div className="max-w-4xl mx-auto p-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h1 className="text-6xl font-bold text-teal-700 text-center mb-8">Terms of Agreement</h1>
          <p className="text-teal-600 text-center">
            <span className="font-bold">Last updated:</span> {currentDate}
          </p>

          <section className="bg-white/60 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-teal-200">
            <h2 className="text-2xl font-bold text-teal-700 mb-4">Introduction</h2>
            <p className="text-teal-700 leading-relaxed">
              These Terms of Agreement ("Terms") govern your use of the website Orca Monsta ("we," "our," "us") and the services related to ORCA Token ("Token"). By accessing or using our website, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our website or services.
            </p>
          </section>

          <section className="bg-white/60 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-teal-200">
            <h2 className="text-2xl font-bold text-teal-700 mb-4">Eligibility</h2>
            <p className="text-teal-700 leading-relaxed">
              By using our website and services, you represent that you are at least 18 years of age and have the legal capacity to enter into binding contracts. If you are using our website on behalf of an organization, you represent that you have the authority to bind that organization to these Terms.
            </p>
          </section>

          <section className="bg-white/60 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-teal-200">
            <h2 className="text-2xl font-bold text-teal-700 mb-4">Use of Services</h2>
            <ul className="space-y-4 text-teal-700">
              <li><span className="font-semibold">Account Registration:</span> To access certain features of our website and services, you may be required to register for an account. You agree to provide accurate and complete information during the registration process and to keep your account information up to date.</li>
              <li><span className="font-semibold">Account Security:</span> You are responsible for maintaining the confidentiality of your account login credentials and for all activities that occur under your account.</li>
              <li><span className="font-semibold">Prohibited Activities:</span> You agree not to engage in any activities that violate laws, infringe on rights, or interfere with our services.</li>
            </ul>
          </section>

          <section className="bg-white/60 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-teal-200">
            <h2 className="text-2xl font-bold text-teal-700 mb-4">Cryptocurrency Transactions</h2>
            <ul className="space-y-4 text-teal-700">
              <li><span className="font-semibold">Transaction Fees:</span> Certain transactions involving the Token may be subject to fees. You agree to pay any applicable fees as specified on our website.</li>
              <li><span className="font-semibold">Transaction Risks:</span> You acknowledge and accept the inherent risks associated with cryptocurrency transactions.</li>
              <li><span className="font-semibold">Compliance:</span> You agree to comply with all applicable laws and regulations related to cryptocurrency transactions.</li>
            </ul>
          </section>

          <section className="bg-white/60 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-teal-200">
            <h2 className="text-2xl font-bold text-teal-700 mb-4">Contact Us</h2>
            <div className="text-teal-700">
              <p>If you have any questions or concerns about these Terms, please contact us:</p>
              <div className="mt-4 space-y-2">
                <p className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">ORCA MONSTA</p>
                <p className="flex items-center gap-2">
                  <span className="font-bold min-w-[80px]">Email:</span>
                  <a href="mailto:orcamonsta@gmail.com" 
                     className="hover:text-teal-600 transition-colors underline-offset-4 hover:underline">
                    orcamonsta@gmail.com
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <span className="font-bold min-w-[80px]">Telegram:</span>
                  <a href="https://t.me/+8BkOy7gJUElkZjQx" 
                     target="_blank" 
                     rel="noopener noreferrer" 
                     className="hover:text-teal-600 transition-colors underline-offset-4 hover:underline">
                    Join our community
                  </a>
                </p>
              </div>
            </div>
          </section>

          <div className="text-center">
            <Link 
              href="/"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-teal-600 to-blue-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
            >
              Back to Home
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}