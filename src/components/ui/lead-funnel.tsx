"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, ShieldCheck, Laptop, Search, Users, HelpCircle, CheckCircle } from "lucide-react";

export function LeadFunnel({ initialUrl = "", onComplete }: { initialUrl?: string; onComplete?: (data: any) => void }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    url: initialUrl,
    concern: "",
    businessType: "",
    urgency: "",
    name: "",
    phone: "",
    email: "",
    callTime: "",
  });

  const [scanning, setScanning] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);

  const concerns = [
    { value: "Slow loading", label: "Slow loading", icon: <Laptop className="w-4 h-4" /> },
    { value: "Not showing up on Google", label: "Not showing up on Google", icon: <Search className="w-4 h-4" /> },
    { value: "Looks outdated", label: "Looks outdated", icon: <HelpCircle className="w-4 h-4" /> },
    { value: "Not getting leads", label: "Not getting leads", icon: <Users className="w-4 h-4" /> },
    { value: "Not sure, just curious", label: "Not sure, just curious", icon: <ShieldCheck className="w-4 h-4" /> },
  ];

  const urgencies = [
    { value: "ASAP", label: "ASAP (High Priority)", desc: "Need changes implemented immediately" },
    { value: "Within a month", label: "Within a month", desc: "Planning next steps soon" },
    { value: "Just exploring", label: "Just exploring", desc: "Gathering estimates and information" },
  ];

  const handleNext = () => {
    if (step === 1 && !formData.url) return;
    if (step === 2 && !formData.concern) return;
    if (step === 3 && !formData.businessType) return;
    if (step === 4 && !formData.urgency) return;

    if (step === 1) {
      // Simulate brief scanner
      setScanning(true);
      let progress = 0;
      const interval = setInterval(() => {
        progress += 1;
        setScanProgress(progress);
        if (progress >= 3) {
          clearInterval(interval);
          setScanning(false);
          setStep(2);
        }
      }, 800);
    } else {
      setStep((prev) => prev + 1);
    }
  };

  const [submitting, setSubmitting] = useState(false);

  const handleBack = () => {
    setStep((prev) => prev - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.callTime) return;
    
    setSubmitting(true);

    try {
      const webhookUrl = import.meta.env.VITE_N8N_WEBHOOK_URL || "";
      if (webhookUrl) {
        await fetch(webhookUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
      } else {
        console.log("No VITE_N8N_WEBHOOK_URL environment variable configured. Form data:", formData);
      }
    } catch (err) {
      console.error("Failed to submit form to n8n webhook:", err);
    } finally {
      // Simulate short pause for natural UX
      setTimeout(() => {
        setSubmitting(false);
        setStep(6);
        if (onComplete) {
          onComplete(formData);
        }
      }, 800);
    }
  };

  const selectConcern = (val: string) => {
    setFormData((prev) => ({ ...prev, concern: val }));
    setTimeout(() => setStep(3), 300);
  };

  const selectUrgency = (val: string) => {
    setFormData((prev) => ({ ...prev, urgency: val }));
    setTimeout(() => setStep(5), 300);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  return (
    <div className="glass p-8 md:p-12 rounded-[40px] border border-leaf-500/20 max-w-2xl mx-auto relative overflow-hidden shadow-2xl bg-leaf-950/80">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-80 bg-leaf-500/5 rounded-full blur-[80px] pointer-events-none" />

      {step < 6 && (
        <div className="w-full bg-leaf-900/30 h-1.5 rounded-full mb-8 overflow-hidden relative border border-leaf-900/45">
          <motion.div
            className="bg-leaf-500 h-full rounded-full"
            initial={{ width: "16.6%" }}
            animate={{ width: `${(step / 5) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      )}

      <AnimatePresence mode="wait" custom={step}>
        {submitting ? (
          <motion.div
            key="submitting"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center justify-center py-10"
          >
            <div className="w-12 h-12 border-4 border-leaf-500/25 border-t-leaf-500 rounded-full animate-spin mb-6" />
            <p className="text-leaf-300 font-mono text-sm animate-pulse text-center">
              Queueing your custom audit callback...<br />
              <span className="text-[11px] text-leaf-500">Connecting to n8n intake service</span>
            </p>
          </motion.div>
        ) : scanning ? (
          <motion.div
            key="scanning"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center justify-center py-10"
          >
            <div className="w-12 h-12 border-4 border-leaf-500/25 border-t-leaf-500 rounded-full animate-spin mb-6" />
            <p className="text-leaf-300 font-mono text-sm animate-pulse">
              {scanProgress === 0 && "Analyzing mobile Core Web Vitals..."}
              {scanProgress === 1 && "Optimizing script payload budgets..."}
              {scanProgress === 2 && "Checking localized SEO indexing..."}
            </p>
          </motion.div>
        ) : (
          <motion.div
            key={step}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "tween", ease: "easeInOut", duration: 0.35 }}
            className="min-h-[280px] flex flex-col justify-between"
          >
            {/* Step 1: URL Entry */}
            {step === 1 && (
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-leaf-500">Step 1 of 5</span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-white mt-2 font-display">Free Performance Audit</h2>
                <p className="text-leaf-300 mt-2 font-light text-sm">
                  We'll inspect your load speeds, mobile layout responsiveness, and SEO keywords ranking.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <input
                    type="url"
                    value={formData.url}
                    onChange={(e) => setFormData((prev) => ({ ...prev, url: e.target.value }))}
                    placeholder="Enter your website URL (e.g. mysite.com)"
                    className="flex-1 bg-leaf-900/40 border border-leaf-800 rounded-full px-6 py-4 text-white text-sm focus:outline-none focus:border-leaf-500/50"
                  />
                  <button
                    onClick={handleNext}
                    disabled={!formData.url}
                    className="bg-white hover:bg-leaf-100 disabled:opacity-40 disabled:hover:bg-white text-leaf-950 font-bold px-8 py-4 rounded-full text-sm transition-all duration-300 shadow-md flex items-center justify-center gap-2"
                  >
                    Analyze Site <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Site Concern */}
            {step === 2 && (
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-leaf-500">Step 2 of 5</span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-white mt-2 font-display">What's your biggest concern with your current site?</h2>
                
                <div className="mt-6 space-y-2.5">
                  {concerns.map((c) => (
                    <button
                      key={c.value}
                      onClick={() => selectConcern(c.value)}
                      className={`w-full p-4 rounded-2xl border text-left flex items-center gap-4 transition-all duration-300 ${
                        formData.concern === c.value
                          ? "bg-leaf-500/10 border-leaf-500 text-white"
                          : "bg-leaf-900/20 border-leaf-900/60 text-leaf-300 hover:border-leaf-800 hover:text-white"
                      }`}
                    >
                      <span className={`w-8 h-8 rounded-xl flex items-center justify-center ${formData.concern === c.value ? "bg-leaf-500 text-leaf-950" : "bg-leaf-900/50 text-leaf-400"}`}>
                        {c.icon}
                      </span>
                      <span className="font-semibold text-sm">{c.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3: Business Type */}
            {step === 3 && (
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-leaf-500">Step 3 of 5</span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-white mt-2 font-display">What type of business do you run?</h2>
                <p className="text-leaf-400 mt-2 font-light text-sm">helps us customize our audit report and design strategy</p>
                <div className="mt-8">
                  <input
                    type="text"
                    value={formData.businessType}
                    onChange={(e) => setFormData((prev) => ({ ...prev, businessType: e.target.value }))}
                    placeholder="e.g. Local Dentist, E-commerce Store, Consulting"
                    className="w-full bg-leaf-900/40 border border-leaf-800 rounded-2xl px-6 py-4 text-white text-sm focus:outline-none focus:border-leaf-500/50"
                  />
                  <div className="mt-8 flex justify-between">
                    <button onClick={handleBack} className="text-xs text-leaf-400 hover:text-leaf-300 flex items-center gap-1.5 font-bold">
                      <ArrowLeft className="w-3.5 h-3.5" /> Back
                    </button>
                    <button
                      onClick={handleNext}
                      disabled={!formData.businessType}
                      className="bg-white hover:bg-leaf-100 disabled:opacity-40 text-leaf-950 font-bold px-8 py-3.5 rounded-full text-sm transition-all duration-300 shadow-md flex items-center gap-2"
                    >
                      Next Step <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Urgency */}
            {step === 4 && (
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-leaf-500">Step 4 of 5</span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-white mt-2 font-display">When are you looking to make a change?</h2>
                
                <div className="mt-6 space-y-3">
                  {urgencies.map((u) => (
                    <button
                      key={u.value}
                      onClick={() => selectUrgency(u.value)}
                      className={`w-full p-5 rounded-2xl border text-left flex flex-col transition-all duration-300 ${
                        formData.urgency === u.value
                          ? "bg-leaf-500/10 border-leaf-500 text-white"
                          : "bg-leaf-900/20 border-leaf-900/60 text-leaf-300 hover:border-leaf-800 hover:text-white"
                      }`}
                    >
                      <span className="font-bold text-sm">{u.label}</span>
                      <span className="text-xs text-leaf-400 mt-1 font-light">{u.desc}</span>
                    </button>
                  ))}
                </div>
                <div className="mt-8 flex justify-start">
                  <button onClick={handleBack} className="text-xs text-leaf-400 hover:text-leaf-300 flex items-center gap-1.5 font-bold">
                    <ArrowLeft className="w-3.5 h-3.5" /> Back
                  </button>
                </div>
              </div>
            )}

            {/* Step 5: Contact Info */}
            {step === 5 && (
              <form onSubmit={handleSubmit}>
                <span className="text-xs font-bold uppercase tracking-widest text-leaf-500">Step 5 of 5</span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-white mt-2 font-display">Where should we send your report?</h2>
                
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                    placeholder="Full Name"
                    className="w-full bg-leaf-900/40 border border-leaf-800 rounded-xl px-5 py-3 text-white text-sm focus:outline-none focus:border-leaf-500/50"
                  />
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                    placeholder="Email Address"
                    className="w-full bg-leaf-900/40 border border-leaf-800 rounded-xl px-5 py-3 text-white text-sm focus:outline-none focus:border-leaf-500/50"
                  />
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                    placeholder="Phone Number"
                    className="w-full bg-leaf-900/40 border border-leaf-800 rounded-xl px-5 py-3 text-white text-sm focus:outline-none focus:border-leaf-500/50"
                  />
                  <input
                    type="text"
                    required
                    value={formData.callTime}
                    onChange={(e) => setFormData((prev) => ({ ...prev, callTime: e.target.value }))}
                    placeholder="Best callback time (e.g. Afternoon, 3 PM)"
                    className="w-full bg-leaf-900/40 border border-leaf-800 rounded-xl px-5 py-3 text-white text-sm focus:outline-none focus:border-leaf-500/50"
                  />
                </div>

                <div className="mt-8 flex justify-between items-center">
                  <button type="button" onClick={handleBack} className="text-xs text-leaf-400 hover:text-leaf-300 flex items-center gap-1.5 font-bold">
                    <ArrowLeft className="w-3.5 h-3.5" /> Back
                  </button>
                  <button
                    type="submit"
                    className="bg-leaf-500 hover:bg-leaf-600 text-leaf-950 font-bold px-8 py-3.5 rounded-full text-sm transition-all duration-300 shadow-md flex items-center gap-2"
                  >
                    Submit Audit Request <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}

            {/* Step 6: Confirmation */}
            {step === 6 && (
              <div className="text-center py-6 flex flex-col items-center justify-center">
                <div className="w-16 h-16 bg-leaf-500 rounded-full flex items-center justify-center text-leaf-950 mb-6 shadow-lg">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-leaf-500">Diagnostics Queued</span>
                <h2 className="text-3xl font-extrabold text-white mt-3 font-display">Thanks, {formData.name}!</h2>
                <p className="text-leaf-300 mt-4 max-w-md mx-auto font-light leading-relaxed">
                  We are running your site audit for <span className="text-white font-mono">{formData.url}</span>. 
                  Collin Fraum will call you at <strong className="text-white">{formData.callTime}</strong> with the results.
                </p>
                <div className="mt-4 border border-leaf-900/40 bg-leaf-900/10 px-5 py-3 rounded-2xl text-[11px] text-leaf-400 max-w-sm">
                  💬 Confirmation email sent to {formData.email}.
                </div>
                <button
                  onClick={() => {
                    setStep(1);
                    setFormData({
                      url: "",
                      concern: "",
                      businessType: "",
                      urgency: "",
                      name: "",
                      phone: "",
                      email: "",
                      callTime: "",
                    });
                  }}
                  className="mt-8 text-xs text-leaf-400 hover:text-leaf-300 underline"
                >
                  Run another audit
                </button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
