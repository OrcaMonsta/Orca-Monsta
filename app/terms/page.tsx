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
            <h2 className="text-2xl font-bold text-teal-700 mb-4">Token Economics & Trading</h2>
            <div className="space-y-4 text-teal-700">
              <h3 className="text-xl font-semibold">Token Utility</h3>
              <p className="leading-relaxed">
                The ORCA Token serves as the native utility token within our ecosystem, providing:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Governance rights and voting power in community decisions</li>
                <li>Access to exclusive platform features and benefits</li>
                <li>Staking rewards and yield generation opportunities</li>
                <li>Trading fee discounts and platform incentives</li>
              </ul>
              
              <h3 className="text-xl font-semibold mt-6">Trading Guidelines</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Users must conduct their own research and due diligence before trading</li>
                <li>Market manipulation and fraudulent trading activities are strictly prohibited</li>
                <li>Users should be aware of the high volatility in cryptocurrency markets</li>
                <li>Trading decisions should be based on personal financial circumstances and risk tolerance</li>
              </ul>
            </div>
          </section>

          <section className="bg-white/60 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-teal-200">
            <h2 className="text-2xl font-bold text-teal-700 mb-4">Wallet Security & Smart Contracts</h2>
            <div className="space-y-4 text-teal-700">
              <h3 className="text-xl font-semibold">Wallet Security Requirements</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Users must maintain secure custody of their private keys and wallet credentials</li>
                <li>Implementation of strong passwords and two-factor authentication is recommended</li>
                <li>Regular security audits of connected wallets and devices</li>
                <li>Immediate reporting of any suspicious activities or unauthorized access</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6">Smart Contract Interactions</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>All smart contract interactions are final and irreversible</li>
                <li>Users must verify contract addresses before any transactions</li>
                <li>Understanding of gas fees and network conditions is required</li>
                <li>Regular monitoring of contract upgrades and announcements</li>
              </ul>
            </div>
          </section>

          <section className="bg-white/60 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-teal-200">
            <h2 className="text-2xl font-bold text-teal-700 mb-4">Privacy and Data Protection</h2>
            <div className="space-y-4 text-teal-700">
              <p className="leading-relaxed">
                We are committed to protecting your privacy and handling your data responsibly. Our privacy practices include:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Collection and use of personal information only as necessary for service provision</li>
                <li>Implementation of industry-standard security measures</li>
                <li>No sharing of personal data with third parties without consent</li>
                <li>Regular updates to privacy practices in compliance with regulations</li>
              </ul>
              <p className="mt-4">
                For detailed information about our data practices, please refer to our Privacy Policy.
              </p>
            </div>
          </section>

          <section className="bg-white/60 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-teal-200">
            <h2 className="text-2xl font-bold text-teal-700 mb-4">Intellectual Property Rights</h2>
            <div className="space-y-4 text-teal-700">
              <p className="leading-relaxed">
                All content on the Orca Monsta platform, including but not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Logos, trademarks, and brand elements</li>
                <li>Website design and interface</li>
                <li>Smart contract code and technical implementations</li>
                <li>Documentation and written content</li>
              </ul>
              <p className="mt-4">
                is the exclusive property of Orca Monsta and protected by intellectual property laws. Users may not copy, modify, or distribute this content without explicit permission.
              </p>
            </div>
          </section>

          <section className="bg-white/60 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-teal-200">
            <h2 className="text-2xl font-bold text-teal-700 mb-4">Disclaimers and Warranties</h2>
            <div className="space-y-4 text-teal-700">
              <p className="leading-relaxed">
                The Orca Monsta platform and ORCA Token are provided "as is" and "as available" without warranties of any kind, either express or implied:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>We do not guarantee uninterrupted or error-free service</li>
                <li>Market conditions and token values can fluctuate significantly</li>
                <li>Smart contract functionality is subject to blockchain network conditions</li>
                <li>Technical upgrades may affect platform availability</li>
              </ul>
              <p className="mt-4 font-semibold">
                Users acknowledge that cryptocurrency investments carry inherent risks and should invest only what they can afford to lose.
              </p>
            </div>
          </section>

          <section className="bg-white/60 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-teal-200">
            <h2 className="text-2xl font-bold text-teal-700 mb-4">Risk Disclosures</h2>
            <div className="space-y-4 text-teal-700">
              <h3 className="text-xl font-semibold">Market Risks</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>High volatility in cryptocurrency markets</li>
                <li>Potential for significant price fluctuations</li>
                <li>Market manipulation risks</li>
                <li>Liquidity risks in trading</li>
              </ul>
              
              <h3 className="text-xl font-semibold mt-6">Technical Risks</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Smart contract vulnerabilities</li>
                <li>Blockchain network congestion</li>
                <li>Wallet security breaches</li>
                <li>Software updates and technical changes</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6">Regulatory Risks</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Changes in cryptocurrency regulations</li>
                <li>Tax implications</li>
                <li>Cross-border transaction restrictions</li>
                <li>Compliance requirements</li>
              </ul>
            </div>
          </section>

          <section className="bg-white/60 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-teal-200">
            <h2 className="text-2xl font-bold text-teal-700 mb-4">Community Guidelines</h2>
            <div className="space-y-4 text-teal-700">
              <p className="leading-relaxed">
                Our community members are expected to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Treat all members with respect and professionalism</li>
                <li>Avoid spreading false information or engaging in FUD</li>
                <li>Not engage in harassment or discriminatory behavior</li>
                <li>Support new members and contribute positively to discussions</li>
                <li>Report violations and suspicious activities</li>
              </ul>
              <p className="mt-4">
                Violation of these guidelines may result in temporary or permanent removal from our community platforms.
              </p>
            </div>
          </section>

          <section className="bg-white/60 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-teal-200">
            <h2 className="text-2xl font-bold text-teal-700 mb-4">Termination Clauses</h2>
            <div className="space-y-4 text-teal-700">
              <p className="leading-relaxed">
                Orca Monsta reserves the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Terminate or suspend access to services without prior notice for violations of these Terms</li>
                <li>Block access from certain jurisdictions</li>
                <li>Remove content that violates our policies</li>
                <li>Take legal action for serious violations</li>
              </ul>
              <p className="mt-4">
                Users may terminate their participation at any time by ceasing use of our services and disposing of their tokens through appropriate channels.
              </p>
            </div>
          </section>

          <section className="bg-white/60 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-teal-200">
            <h2 className="text-2xl font-bold text-teal-700 mb-4">Governing Law and Dispute Resolution</h2>
            <div className="space-y-4 text-teal-700">
              <p className="leading-relaxed">
                These Terms are governed by and construed in accordance with the laws of [Jurisdiction], without regard to its conflict of law principles.
              </p>
              <h3 className="text-xl font-semibold mt-6">Dispute Resolution Process</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Parties will attempt to resolve disputes through good-faith negotiations</li>
                <li>Unresolved disputes will be subject to binding arbitration</li>
                <li>Arbitration will be conducted in English</li>
                <li>The arbitration venue will be at the discretion of Orca Monsta</li>
              </ul>
              <p className="mt-4">
                Users waive their right to participate in class action lawsuits or class-wide arbitration.
              </p>
            </div>
          </section>

          <section className="bg-white/60 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-teal-200">
            <h2 className="text-2xl font-bold text-teal-700 mb-4">Changes to Terms</h2>
            <div className="space-y-4 text-teal-700">
              <p className="leading-relaxed">
                We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting to our website. We will notify users of material changes through:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Email notifications</li>
                <li>Platform announcements</li>
                <li>Community channel updates</li>
                <li>Website notifications</li>
              </ul>
              <p className="mt-4">
                Continued use of our services after changes constitutes acceptance of the modified Terms.
              </p>
            </div>
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