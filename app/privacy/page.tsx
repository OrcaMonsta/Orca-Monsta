"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-4xl font-bold text-teal-600 mb-8 text-center">Privacy Policy</h1>
      
      <div className="space-y-8 text-gray-700">
        <section>
          <p className="mb-4">
            This privacy policy ("policy") will help you understand how OrcaMonsta ("us", "we", "our") uses and 
            protects the data you provide to us when you visit and use our website ("service").
          </p>
          <p className="mb-4">
            We reserve the right to change this policy at any given time, of which you will be promptly updated. 
            If you want to make sure that you are up to date with the latest changes, we advise you to frequently visit this page.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-teal-600 mb-4">What User Data We Collect</h2>
          <p className="mb-2">When you visit the website, we may collect the following data:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Your IP address.</li>
            <li>Your contact information and email address.</li>
            <li>Other information such as interests and preferences.</li>
            <li>Data profile regarding your online behavior on our website.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-teal-600 mb-4">Why We Collect Your Data</h2>
          <p className="mb-2">We are collecting your data for several reasons:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>To better understand your needs.</li>
            <li>To improve our services and products.</li>
            <li>To send you promotional emails containing information we think you will find interesting.</li>
            <li>To contact you to fill out surveys and participate in other types of market research.</li>
            <li>To customize our website according to your online behavior and personal preferences.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-teal-600 mb-4">Safeguarding and Securing the Data</h2>
          <p>
            OrcaMonsta is committed to securing your data and keeping it confidential. We have done all in our power 
            to prevent data theft, unauthorized access, and disclosure by implementing the latest technologies and 
            software, which help us safeguard all the information we collect online.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-teal-600 mb-4">Our Cookie Policy</h2>
          <p className="mb-4">
            Once you agree to allow our website to use cookies, you also agree to use the data it collects regarding 
            your online behavior (analyze web traffic, web pages you visit and spend the most time on).
          </p>
          <p className="mb-4">
            The data we collect by using cookies is used to customize our website to your needs. After we use the 
            data for statistical analysis, the data is completely removed from our systems.
          </p>
          <p className="mb-4">
            If you want to disable cookies, you can do it by accessing the settings of your internet browser. You 
            can visit <a href="https://www.internetcookies.com" className="text-teal-600 hover:underline">www.internetcookies.com</a>, 
            which contains comprehensive information on how to do this on a wide variety of browsers and devices.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-teal-600 mb-4">Links to Other Websites</h2>
          <p>
            Our website contains links that lead to other websites. If you click on these links, OrcaMonsta is not 
            held responsible for your data and privacy protection. Visiting those websites is not governed by this 
            privacy policy agreement. Make sure to read the privacy policy documentation of the website you go to 
            from our website.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-teal-600 mb-4">Restricting the Collection of your Personal Data</h2>
          <p className="mb-2">
            At some point, you might wish to restrict the use and collection of your personal data. You can achieve 
            this by doing the following:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>When you are filling the forms on the website, make sure to check if there is a box which you can 
                leave unchecked, if you don't want to disclose your personal information.</li>
            <li>If you have already agreed to share your information with us, feel free to contact us via email 
                and we will be more than happy to change this for you.</li>
          </ul>
        </section>

        <section>
          <p className="mt-8 text-sm">
            OrcaMonsta will not lease, sell or distribute your personal information to any third parties, unless we 
            have your permission. We might do so if the law forces us. Your personal information will be used when 
            we need to send you promotional materials if you agree to this privacy policy.
          </p>
        </section>
      </div>
    </div>
  )
} 