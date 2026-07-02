"use client"

import { motion } from "motion/react"

export default function PricingSimple() {
  return (
    <section className="relative flex flex-col items-center py-12">
      <div className="flex w-full flex-col items-center justify-center gap-8 md:flex-row">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="glass text-leaf-100 flex w-80 flex-col items-center rounded-2xl border border-leaf-800 px-8 py-6 text-center transition-transform hover:scale-105"
        >
          <div className="mb-2 text-4xl font-extrabold text-leaf-400">$19/mo</div>
          <div className="text-leaf-300 mb-4 text-sm font-light">
            Perfect for individuals
          </div>
          <ul className="text-leaf-300 mb-6 space-y-1 text-left text-xs font-light">
            <li>✔️ Unlimited Projects</li>
            <li>✔️ Email Support</li>
            <li>✔️ All Features</li>
          </ul>
          <button className="bg-leaf-500 text-leaf-950 hover:bg-leaf-600 w-full rounded-xl px-4 py-2.5 font-bold transition duration-300">
            Get Started
          </button>
        </motion.div>
      </div>
    </section>
  )
}
