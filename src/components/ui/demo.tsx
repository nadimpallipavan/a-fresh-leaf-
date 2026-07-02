"use client"

import { motion } from "motion/react"

export default function PricingCreative() {
  return (
    <section className="relative flex flex-col items-center py-16">
      <div className="flex flex-col items-center justify-center gap-12 md:flex-row">
        {/* Starter Card */}
        <motion.div
          initial={{ opacity: 0, y: 40, rotate: -3 }}
          animate={{ opacity: 1, y: 0, rotate: -3 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="relative z-10 w-72 rounded-2xl border border-leaf-800/40 bg-leaf-950/40 px-8 py-10 text-leaf-100 shadow-[0_0_0_1px_rgba(90,200,120,.05)_inset] backdrop-blur-md transition-transform hover:scale-105"
        >
          <div className="mb-2 text-lg font-bold text-leaf-400">Starter</div>
          <div className="mb-4 text-3xl font-extrabold text-white">$5/mo</div>
          <ul className="mb-6 space-y-2 text-sm text-leaf-300/80">
            <li><span className="mr-2 text-leaf-400">✔</span>1 Project</li>
            <li><span className="mr-2 text-leaf-400">✔</span>Email Support</li>
          </ul>
          <button className="w-full rounded-md bg-leaf-500 py-2 font-semibold text-leaf-950 hover:bg-leaf-600 transition">
            Start Now
          </button>
        </motion.div>

        {/* Creative Pro Card (Floating) */}
        <motion.div
          initial={{ opacity: 0, y: 60, rotate: 0 }}
          animate={{ opacity: 1, y: -10, rotate: 0 }}
          transition={{ type: "spring", duration: 0.7 }}
          className="relative z-20 w-80 scale-105 rounded-3xl border-4 border-leaf-500/50 bg-gradient-to-b from-[#5ac878] to-[#3a9554] px-10 py-14 text-leaf-950 shadow-xl transition-transform hover:scale-[1.08]"
        >
          <motion.div
            animate={{ y: [10, 6, 10] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="absolute -top-6 left-1/2 -translate-x-1/2 rounded-full border border-leaf-950/20 bg-leaf-950 px-5 py-1 text-xs font-extrabold text-leaf-400 shadow"
          >
            Best Deal
          </motion.div>
          <div className="mb-2 text-lg font-bold text-leaf-950">Creative Pro</div>
          <div className="mb-4 text-5xl font-black text-leaf-950">$19/mo</div>
          <ul className="mb-6 space-y-2 text-base text-leaf-950/90 font-medium">
            <li><span className="mr-2 text-leaf-900">✔</span>Unlimited Projects</li>
            <li><span className="mr-2 text-leaf-900">✔</span>Priority Support</li>
            <li><span className="mr-2 text-leaf-900">✔</span>Team Collaboration</li>
            <li><span className="mr-2 text-leaf-900">✔</span>Early Access</li>
          </ul>
          <button className="w-full rounded-md bg-leaf-950 py-2 font-bold text-leaf-100 hover:bg-leaf-900 transition">
            Go Pro
          </button>
        </motion.div>

        {/* Enterprise Card */}
        <motion.div
          initial={{ opacity: 0, y: 40, rotate: 3 }}
          animate={{ opacity: 1, y: 0, rotate: 3 }}
          transition={{ type: "spring", duration: 0.6 }}
          className="relative z-10 w-72 rounded-2xl border border-leaf-800/40 bg-leaf-950/40 px-8 py-10 text-leaf-100 shadow-[0_0_0_1px_rgba(90,200,120,.05)_inset] backdrop-blur-md transition-transform hover:scale-105"
        >
          <div className="mb-2 text-lg font-bold text-leaf-400">Enterprise</div>
          <div className="mb-4 text-3xl font-extrabold text-white">Custom</div>
          <ul className="mb-6 space-y-2 text-sm text-leaf-300/80">
            <li><span className="mr-2 text-leaf-400">✔</span>Dedicated Manager</li>
            <li><span className="mr-2 text-leaf-400">✔</span>Custom Integrations</li>
            <li><span className="mr-2 text-leaf-400">✔</span>SLA &amp; Support</li>
          </ul>
          <button className="w-full rounded-md bg-leaf-500 py-2 font-semibold text-leaf-950 hover:bg-leaf-600 transition">
            Contact Us
          </button>
        </motion.div>
      </div>
    </section>
  )
}
