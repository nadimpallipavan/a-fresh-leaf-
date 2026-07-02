import React, { useState, useRef } from 'react';
import Logo from "./components/Logo";
import { RisingGlow } from "./components/ui/rising-glow";
import HeroText from "./components/ui/hero-shutter-text";
import { TubesCursor } from "./components/ui/tube-cursor";
import FlipTextReveal from "./components/ui/next-reveal";
import { AnimatedFeatureCard } from "./components/ui/animated-feature-card";
import { InteractiveHoverLinks } from "./components/ui/interactive-hover-links";
import { Marquee } from "./components/ui/marquee";
import { Button } from "./components/ui/button";
import { CardStack } from "./components/ui/card-stack";
import { TextReveal } from "./components/ui/cascade-text";
import CircularGallery from "./components/ui/circular-flip-card-gallery";
import { 
  Item, 
  ItemGroup, 
  ItemContent, 
  ItemTitle, 
  ItemDescription 
} from "./components/ui/item";
import { Badge } from "./components/ui/badge-2";
import { Button as TheItemButton } from "./components/ui/the-item-one";
import { Switch } from "./components/ui/switch";
import PricingSection3 from "./components/ui/pricing-section-3";
import { cn } from "./lib/utils";
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { 
  Leaf, 
  Sparkles, 
  Droplet, 
  ArrowRight, 
  ShieldCheck, 
  Globe, 
  Award, 
  Menu, 
  X,
  ChevronRight,
  Palette,
  Smartphone,
  Code,
  Search,
  Wrench,
  Share2,
  HelpCircle
} from 'lucide-react';

const servicesList = [
  {
    index: "001",
    tag: "Website Design & Rebuilds",
    title: "Hand-crafted, custom-coded layouts optimized for mobile performance and visitor conversion.",
    imageSrc: "/images/web_design_service.jpg",
    color: "orange"
  },
  {
    index: "002",
    tag: "Website Speed & Trust Cleanup",
    title: "Diagnostic and cleanup sweeps targeting 90+ Core Web Vitals, script cleanups, and trust elements.",
    imageSrc: "/images/speed_cleanup_service.jpg",
    color: "blue"
  },
  {
    index: "003",
    tag: "AI Assistants & Chat Experiences",
    title: "Custom-trained AI agents and automated support chat setups mapped to your business workflows.",
    imageSrc: "/images/ai_chat_service.jpg",
    color: "purple"
  },
  {
    index: "004",
    tag: "Business Automation & Workflows",
    title: "Lead nurturing sequences, automated calendar booking, and CRM system integrations.",
    imageSrc: "/images/automation_service.jpg",
    color: "green"
  },
  {
    index: "005",
    tag: "Hosting & Website Care Plans",
    title: "Enterprise cloud hosting, automated daily backups, real-time security, and updates.",
    imageSrc: "/images/hosting_care_service.jpg",
    color: "orange"
  },
  {
    index: "006",
    tag: "Client Intake & Client Portals",
    title: "Bespoke onboarding forms and client-area dashboard designs to streamline communication.",
    imageSrc: "/images/client_intake_service.jpg",
    color: "purple"
  },
  {
    index: "007",
    tag: "CRM & Sales-Support Systems",
    title: "High-performing contact capture, sales pipelines, and automatic notification triggers.",
    imageSrc: "/images/crm_sales_service.jpg",
    color: "blue"
  },
  {
    index: "008",
    tag: "Branding & Mobile-First UX",
    title: "Refined brand typography, mobile usability testing, and conversion-centered trust indicators.",
    imageSrc: "/images/branding_ux_service.jpg",
    color: "green"
  },
  {
    index: "009",
    tag: "DevOps, QA & Rollback Backups",
    title: "Professional version control setups, staging environments, QA checks, and rollback backups.",
    imageSrc: "/images/devops_qa_service.jpg",
    color: "orange"
  }

];

const cardStackItems = servicesList.map(s => ({
  id: s.index,
  title: s.tag,
  description: s.title,
  imageSrc: s.imageSrc,
  href: "#estimate"
}));

const mobileNavLinks = [
  {
    heading: "Home",
    subheading: "Return to the main page backdrop",
    imgSrc: "/images/hero_bg.jpg",
    href: "#"
  },
  {
    heading: "Services",
    subheading: "Explore our digital growth capabilities",
    imgSrc: "/images/web_design_mockup.jpg",
    href: "#services"
  },
  {
    heading: "Our Work",
    subheading: "Case studies of brands that scaled",
    imgSrc: "/images/page_speed_mockup.jpg",
    href: "#work"
  },
  {
    heading: "About",
    subheading: "Collin Fraum and the AFL mission",
    imgSrc: "/images/seo_mockup.jpg",
    href: "#story"
  },
  {
    heading: "Pricing",
    subheading: "Starter and Growth hosting options",
    imgSrc: "/images/wordpress_maintenance_mockup.png",
    href: "#pricing"
  },
  {
    heading: "Contact",
    subheading: "Get started with your custom estimate",
    imgSrc: "/images/email_automation_mockup.png",
    href: "#estimate"
  }
];

const circularCardData = [
  { 
    image: "/images/postalprosplus_logo.png", 
    title: "PostalProsPlus", 
    url: "https://postalprosplus.com", 
    description: "Postal & shipping services with strong contact flow.",
    bgColor: "#111111",
    padding: "p-1"
  },
  { 
    image: "/images/fixmypagespeed_logo.png", 
    title: "FixMyPageSpeed", 
    url: "https://fixmypagespeed.com", 
    description: "Performance optimization WooCommerce store.",
    bgColor: "#ffffff",
    padding: "p-1"
  },
  { 
    image: "/images/saltwatercam_logo.png", 
    title: "SaltwaterCam", 
    url: "https://saltwatercam.com", 
    description: "Boynton Beach Inlet live underwater camera stream.",
    bgColor: "#09141f",
    padding: "p-0"
  },
  { 
    image: "/images/kingstonk9_logo.png", 
    title: "Kingston K9", 
    url: "https://kingstonk9.com", 
    description: "Premium dog training platform with local SEO.",
    bgColor: "#ffffff",
    padding: "p-1"
  },
  { 
    image: "/images/postalprosplus_logo.png", 
    title: "PostalProsPlus", 
    url: "https://postalprosplus.com", 
    description: "Postal & shipping services with strong contact flow.",
    bgColor: "#111111",
    padding: "p-1"
  },
  { 
    image: "/images/fixmypagespeed_logo.png", 
    title: "FixMyPageSpeed", 
    url: "https://fixmypagespeed.com", 
    description: "Performance optimization WooCommerce store.",
    bgColor: "#ffffff",
    padding: "p-1"
  },
  { 
    image: "/images/saltwatercam_logo.png", 
    title: "SaltwaterCam", 
    url: "https://saltwatercam.com", 
    description: "Boynton Beach Inlet live underwater camera stream.",
    bgColor: "#09141f",
    padding: "p-0"
  },
  { 
    image: "/images/kingstonk9_logo.png", 
    title: "Kingston K9", 
    url: "https://kingstonk9.com", 
    description: "Premium dog training platform with local SEO.",
    bgColor: "#ffffff",
    padding: "p-1"
  }
];

const FOUNDER_TESTIMONIALS = [
  {
    quote: "Most agencies build beautiful sites that are slow, or fast sites that are ugly. Collin engineers custom React systems that excel at both.",
    author: "Jan Dittrich, Tech Lead",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80&auto=format&fit=crop",
    alt: "Portrait of Jan Dittrich",
  },
  {
    quote: "Our website page speed went from 43 to 100 on mobile, resulting in a 40% conversion increase inside the first 30 days.",
    author: "Michael Riddering, E-Commerce Director",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80&auto=format&fit=crop",
    alt: "Portrait of Michael Riddering",
  },
  {
    quote: "Collin's direct codebase and SEO audit rescued our rankings and localized search authority when we rebuilt our business funnel.",
    author: "James Traf, Product Designer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80&auto=format&fit=crop",
    alt: "Portrait of James Traf",
  },
];

const timelineSteps = [
  {
    year: '01 / Audit & Strategy',
    title: 'Planting the Seed',
    description: 'We analyze your website performance, backlink profile, page speeds, and competitor strategy to build a localized plan for absolute market dominance.'
  },
  {
    year: '02 / High-Fidelity Design',
    title: 'Crafting the Aesthetic',
    description: 'Our design team builds beautiful visual prototypes customized for your target audience, prioritizing rich aesthetics, high contrast, and smooth transitions.'
  },
  {
    year: '03 / Modern Development',
    title: 'Clean Code & Speed',
    description: 'We code your website using modern frontend technology (React, Next.js, and Tailwind). We optimize assets, script loads, and fonts to ensure a perfect 100/100 Lighthouse speed score.'
  },
  {
    year: '04 / SEO & Optimization',
    title: 'Taking Root & Scaling',
    description: 'We launch with complete localized SEO setup, register search consoles, monitor semantic indexation, and track keyword progress continuously for maximum growth.'
  }
];

const TUBE_BASE_COLORS = ["#55b038", "#55b038", "#55b038"];
const TUBE_LIGHT_COLORS = ["#55b038", "#55b038", "#55b038", "#55b038"];

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedTimeline, setSelectedTimeline] = useState(0);
  const [currentPage, setCurrentPage] = useState("home");
  const [showAllFmps, setShowAllFmps] = useState(false);
  const [showAllAfl, setShowAllAfl] = useState(false);
  const [showAllSystems, setShowAllSystems] = useState(false);
  
  const [auditUrl, setAuditUrl] = useState("");
  const [auditStatus, setAuditStatus] = useState("idle"); // idle, scanning, success
  const [scanStep, setScanStep] = useState(0);

  const handleAuditSubmit = (e) => {
    e.preventDefault();
    if (!auditUrl.trim()) return;

    setAuditStatus("scanning");
    setScanStep(0);

    setTimeout(() => setScanStep(1), 1000);
    setTimeout(() => setScanStep(2), 2000);
    setTimeout(() => {
      setAuditStatus("success");
    }, 3200);
  };

  // Mouse move parallax effect for hero
  const heroRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!heroRef.current) return;
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX - innerWidth / 2) / 35;
    const y = (clientY - innerHeight / 2) / 35;
    setMousePosition({ x, y });
  };

  return (
    <div className="relative min-h-screen text-leaf-100 selection:bg-leaf-500 selection:text-leaf-950 font-sans">
      {/* Glow Orbs */}
      <div className="fixed top-0 left-1/4 w-[500px] h-[500px] bg-leaf-800/20 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="fixed bottom-10 right-1/4 w-[600px] h-[600px] bg-leaf-500/5 rounded-full blur-[150px] pointer-events-none -z-10" />

      {/* Floating header */}
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="fixed top-0 left-0 w-full z-50 px-6 py-4 lg:px-12"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between glass px-6 py-3.5 rounded-full shadow-lg border border-leaf-900/40">
          <a href="#">
            <Logo />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2 lg:gap-4">
            <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage("home"); }} className="relative inline-block group">
              <span className={`relative z-10 block uppercase font-sans font-semibold transition-colors duration-300 text-[11px] py-1.5 px-3 ${currentPage === "home" ? "text-leaf-950" : "text-leaf-300 group-hover:text-leaf-950"}`}>
                Home
              </span>
              <span className={`absolute inset-0 border-t border-b border-leaf-500 transform transition-all duration-300 origin-center ${currentPage === "home" ? "scale-y-100 opacity-100" : "scale-y-[1.8] opacity-0 group-hover:scale-y-100 group-hover:opacity-100"}`} />
              <span className={`absolute inset-0 bg-leaf-500 transform transition-all duration-300 origin-top ${currentPage === "home" ? "scale-100 opacity-100" : "scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100"}`} />
            </a>
            
            <a href="#services" onClick={(e) => { e.preventDefault(); setCurrentPage("services"); }} className="relative inline-block group">
              <span className={`relative z-10 block uppercase font-sans font-semibold transition-colors duration-300 text-[11px] py-1.5 px-3 ${currentPage === "services" ? "text-leaf-950" : "text-leaf-300 group-hover:text-leaf-950"}`}>
                Services
              </span>
              <span className={`absolute inset-0 border-t border-b border-leaf-500 transform transition-all duration-300 origin-center ${currentPage === "services" ? "scale-y-100 opacity-100" : "scale-y-[1.8] opacity-0 group-hover:scale-y-100 group-hover:opacity-100"}`} />
              <span className={`absolute inset-0 bg-leaf-500 transform transition-all duration-300 origin-top ${currentPage === "services" ? "scale-100 opacity-100" : "scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100"}`} />
            </a>

            <a href="#work" onClick={(e) => { e.preventDefault(); setCurrentPage("work"); }} className="relative inline-block group">
              <span className={`relative z-10 block uppercase font-sans font-semibold transition-colors duration-300 text-[11px] py-1.5 px-3 ${currentPage === "work" ? "text-leaf-950" : "text-leaf-300 group-hover:text-leaf-950"}`}>
                Our Work
              </span>
              <span className={`absolute inset-0 border-t border-b border-leaf-500 transform transition-all duration-300 origin-center ${currentPage === "work" ? "scale-y-100 opacity-100" : "scale-y-[1.8] opacity-0 group-hover:scale-y-100 group-hover:opacity-100"}`} />
              <span className={`absolute inset-0 bg-leaf-500 transform transition-all duration-300 origin-top ${currentPage === "work" ? "scale-100 opacity-100" : "scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100"}`} />
            </a>

            <a href="#story" onClick={(e) => { e.preventDefault(); setCurrentPage("about"); }} className="relative inline-block group">
              <span className={`relative z-10 block uppercase font-sans font-semibold transition-colors duration-300 text-[11px] py-1.5 px-3 ${currentPage === "about" ? "text-leaf-950" : "text-leaf-300 group-hover:text-leaf-950"}`}>
                About
              </span>
              <span className={`absolute inset-0 border-t border-b border-leaf-500 transform transition-all duration-300 origin-center ${currentPage === "about" ? "scale-y-100 opacity-100" : "scale-y-[1.8] opacity-0 group-hover:scale-y-100 group-hover:opacity-100"}`} />
              <span className={`absolute inset-0 bg-leaf-500 transform transition-all duration-300 origin-top ${currentPage === "about" ? "scale-100 opacity-100" : "scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100"}`} />
            </a>

            <a href="#pricing" onClick={(e) => { e.preventDefault(); setCurrentPage("pricing"); }} className="relative inline-block group">
              <span className={`relative z-10 block uppercase font-sans font-semibold transition-colors duration-300 text-[11px] py-1.5 px-3 ${currentPage === "pricing" ? "text-leaf-950" : "text-leaf-300 group-hover:text-leaf-950"}`}>
                Pricing
              </span>
              <span className={`absolute inset-0 border-t border-b border-leaf-500 transform transition-all duration-300 origin-center ${currentPage === "pricing" ? "scale-y-100 opacity-100" : "scale-y-[1.8] opacity-0 group-hover:scale-y-100 group-hover:opacity-100"}`} />
              <span className={`absolute inset-0 bg-leaf-500 transform transition-all duration-300 origin-top ${currentPage === "pricing" ? "scale-100 opacity-100" : "scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100"}`} />
            </a>

            <a href="#estimate" onClick={(e) => { e.preventDefault(); setCurrentPage("contact"); }} className="relative inline-block group">
              <span className={`relative z-10 block uppercase font-sans font-semibold transition-colors duration-300 text-[11px] py-1.5 px-3 ${currentPage === "contact" ? "text-leaf-950" : "text-leaf-300 group-hover:text-leaf-950"}`}>
                Contact
              </span>
              <span className={`absolute inset-0 border-t border-b border-leaf-500 transform transition-all duration-300 origin-center ${currentPage === "contact" ? "scale-y-100 opacity-100" : "scale-y-[1.8] opacity-0 group-hover:scale-y-100 group-hover:opacity-100"}`} />
              <span className={`absolute inset-0 bg-leaf-500 transform transition-all duration-300 origin-top ${currentPage === "contact" ? "scale-100 opacity-100" : "scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100"}`} />
            </a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a 
              href="#estimate" 
              className="text-xs font-semibold uppercase tracking-wider bg-leaf-800 hover:bg-leaf-700 text-white px-5 py-2.5 rounded-full border border-leaf-700/50 hover:border-leaf-500/50 transition-all duration-300"
            >
              Get a Fresh Start
            </a>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden group text-leaf-300 hover:text-white hover:bg-leaf-900/40"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <svg
              className="pointer-events-none"
              width={20}
              height={20}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 12L20 12"
                className="origin-center -translate-y-[7px] transition-all duration-300 [transition-timing-function:cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
              />
              <path
                d="M4 12H20"
                className="origin-center transition-all duration-300 [transition-timing-function:cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
              />
              <path
                d="M4 12H20"
                className="origin-center translate-y-[7px] transition-all duration-300 [transition-timing-function:cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
              />
            </svg>
          </Button>
        </div>
      </motion.nav>

      {/* Mobile navigation overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-0 z-40 bg-leaf-950/95 backdrop-blur-lg pt-28 px-8 md:hidden"
          >
            <div className="flex flex-col justify-center items-center h-full max-w-lg mx-auto pb-24">
              <InteractiveHoverLinks 
                links={mobileNavLinks} 
                onLinkClick={(e, href) => {
                  e.preventDefault();
                  setMobileMenuOpen(false);
                  if (href === "#") setCurrentPage("home");
                  else if (href === "#services") setCurrentPage("services");
                  else if (href === "#work") setCurrentPage("work");
                  else if (href === "#story") setCurrentPage("about");
                  else if (href === "#pricing") setCurrentPage("pricing");
                  else if (href === "#estimate") setCurrentPage("contact");
                }} 
                className="w-full"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 1. HERO SECTION */}
      {currentPage === "home" && (
      <section 
        ref={heroRef}
        onMouseMove={handleMouseMove}
        className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden px-6 lg:px-12"
      >
        {/* Interactive Tubes WebGL Background */}
        <div className="absolute inset-0 z-0">
          <TubesCursor
            title=""
            subtitle=""
            caption=""
            initialColors={TUBE_BASE_COLORS}
            lightColors={TUBE_LIGHT_COLORS}
            lightIntensity={220}
            enableRandomizeOnClick={false}
            className="w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-leaf-950 via-leaf-950/20 to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-leaf-950 to-transparent pointer-events-none" />
        </div>

        <div className="max-w-5xl mx-auto w-full z-10 flex flex-col items-center justify-center text-center py-20 relative">
          {/* Centered Brand Logo */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="relative mb-6"
          >
            <div className="absolute inset-0 bg-emerald-500/10 rounded-full blur-2xl animate-pulse" />
            <div className="w-32 h-32 rounded-full bg-white flex items-center justify-center relative z-10 shadow-2xl">
              <Logo iconOnly className="w-20 h-20" />
            </div>
          </motion.div>

          {/* Centered Brand Title */}
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif text-white tracking-tight leading-none mt-4 mb-2"
          >
            A fresh leaf<span className="text-leaf-500 font-bold">.</span>
          </motion.h1>

          {/* Subtitle */}
          {/* Subtitle / Tagline 1 */}
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg md:text-2xl font-serif text-white mt-4 font-light select-none italic"
          >
            "Plant the seed. Watch your business grow."
          </motion.p>

          {/* Description / Tagline 2 */}
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-sm md:text-base text-zinc-400 mt-4 max-w-lg leading-relaxed font-sans"
          >
            A fresh leaf builds websites, SEO, and digital strategy that take root and scale.
          </motion.p>

          {/* Scroll action indicator */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 1 }}
            className="mt-16"
          >
            <a 
              href="#services" 
              className="text-[10px] uppercase tracking-[0.4em] text-zinc-500 hover:text-white transition-colors duration-300 font-bold"
            >
              Scroll to Explore
            </a>
          </motion.div>

          {/* Star Accent (Bottom Right Corner Sparkle style) */}
          <div className="absolute bottom-0 right-8 pointer-events-none opacity-40">
            <svg className="w-8 h-8 text-zinc-600 animate-pulse fill-current" viewBox="0 0 24 24">
              <path d="M12 0l3 9 9 3-9 3-3 9-3-9-9-3 9-3z" />
            </svg>
          </div>
        </div>
      </section>
      )}

      {/* Services Marquee Banner under Hero */}
      {currentPage === "home" && (
      <section className="w-full bg-leaf-950/60 border-y border-leaf-900/40 py-6 backdrop-blur-md relative z-10 flex flex-col items-center gap-3">
        <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-leaf-500 font-sans select-none">
          Our Services
        </span>
        <Marquee duration={30} pauseOnHover className="text-white">
          <div className="flex items-center gap-12 text-sm md:text-base font-medium tracking-wider uppercase font-display select-none">
            <span className="flex items-center gap-2">
              <Leaf className="w-4 h-4 text-leaf-500 fill-current" />
              <span>Website Design & Rebuilds</span>
            </span>
            <span className="text-leaf-800">•</span>
            
            <span className="flex items-center gap-2">
              <Leaf className="w-4 h-4 text-leaf-500 fill-current" />
              <span>Website Speed & Trust Cleanup</span>
            </span>
            <span className="text-leaf-800">•</span>
            
            <span className="flex items-center gap-2">
              <Leaf className="w-4 h-4 text-leaf-500 fill-current" />
              <span>AI Assistants & Chat Experiences</span>
            </span>
            <span className="text-leaf-800">•</span>
            
            <span className="flex items-center gap-2">
              <Leaf className="w-4 h-4 text-leaf-500 fill-current" />
              <span>Business Automation & Workflows</span>
            </span>
            <span className="text-leaf-800">•</span>
            
            <span className="flex items-center gap-2">
              <Leaf className="w-4 h-4 text-leaf-500 fill-current" />
              <span>Hosting & Website Care Plans</span>
            </span>
            <span className="text-leaf-800">•</span>
            
            <span className="flex items-center gap-2">
              <Leaf className="w-4 h-4 text-leaf-500 fill-current" />
              <span>Client Intake & Client Portals</span>
            </span>
            <span className="text-leaf-800">•</span>

            <span className="flex items-center gap-2">
              <Leaf className="w-4 h-4 text-leaf-500 fill-current" />
              <span>CRM & Sales-Support Systems</span>
            </span>
            <span className="text-leaf-800">•</span>

            <span className="flex items-center gap-2">
              <Leaf className="w-4 h-4 text-leaf-500 fill-current" />
              <span>Branding & Mobile-First UX</span>
            </span>
            <span className="text-leaf-800">•</span>

            <span className="flex items-center gap-2">
              <Leaf className="w-4 h-4 text-leaf-500 fill-current" />
              <span>DevOps, QA & Rollback Backups</span>
            </span>
            <span className="text-leaf-800">•</span>
          </div>
        </Marquee>
      </section>
      )}

      {/* 2. THE STORY / PHILOSOPHY */}
      {currentPage === "about" && (
      <section id="story" className="relative py-24 lg:py-36 px-6 lg:px-12 border-t border-leaf-900/30">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-center">
          {/* Story Left Media */}
          <div className="lg:col-span-6 relative">
            <div className="aspect-[4/5] rounded-[40px] overflow-hidden border border-leaf-800 relative">
              <img 
                src="/images/hero_bg.jpg" 
                alt="Close up organic growth leaves" 
                className="w-full h-full object-cover filter contrast-125"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-leaf-950 via-transparent to-transparent" />
            </div>
            {/* Absolute Glass Card overlay */}
            <div className="absolute -bottom-6 -right-6 glass p-6 rounded-3xl border border-leaf-500/20 max-w-xs shadow-2xl">
              <p className="text-sm font-medium italic text-leaf-300">
                "Our philosophy is simple: Plant the seed, watch your business grow. We build web solutions that take root, scale, and rank."
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-leaf-800 flex items-center justify-center text-xs font-bold text-leaf-500">CF</div>
                <div>
                  <h4 className="text-xs font-bold text-white">Collin Fraum</h4>
                  <p className="text-[10px] text-leaf-400">Founder & Lead Strategist</p>
                </div>
              </div>
            </div>
          </div>

          {/* Story Right Content */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-leaf-500">Rooted in Performance</span>
            <h2 className="text-4xl md:text-5xl font-extrabold font-display text-white mt-3 leading-tight">
              Digital growth is not accidental. It is engineered.
            </h2>
            <p className="text-leaf-300 mt-6 font-light leading-relaxed text-lg">
              Most templates and off-the-shelf builders load hundreds of unused scripts, slowing down your website and hurting your SEO. At A Fresh Leaf, we hand-craft fast, clean-coded React platforms optimized to rank on page one and turn traffic into customers.
            </p>
            <div className="mt-8 space-y-6 w-full">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-leaf-900/60 border border-leaf-800 flex-shrink-0 flex items-center justify-center text-leaf-400">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-white">Speed & Metric Audited</h4>
                  <p className="text-sm text-leaf-400 mt-1">We optimize every asset, code split, and server layout to ensure a perfect 100/100 score on Core Web Vitals.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-leaf-900/60 border border-leaf-800 flex-shrink-0 flex items-center justify-center text-leaf-400">
                  <Globe className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-white">Localized SEO Authority</h4>
                  <p className="text-sm text-leaf-400 mt-1">Ethical, rank-focused strategy designed to capture localized searches and outrank your target competition.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      )}


      {/* 3. PRODUCT SHOWCASE SECTION */}
      {currentPage === "services" && (
      <section id="services" className="relative py-24 lg:py-36 px-6 lg:px-12 bg-leaf-950/60 border-t border-leaf-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-leaf-500">Tailored Growth Solutions</span>
            <h2 className="text-4xl md:text-5xl font-extrabold font-display text-white mt-3 text-center">Our Core Services</h2>
            <p className="text-leaf-400 mt-4 font-light">Leverage state-of-the-art web technology and data-backed search engine optimization built to convert.</p>
            
            {/* Rising Glow particle emitter */}
            <div className="w-full mt-6 flex justify-center">
              <RisingGlow
                particleCount={80}
                particleColor="#55b038"
                height={80}
                width="100%"
              />
            </div>
          </div>

          {/* Moving Marquee banner */}
          <div className="w-full border-y border-leaf-900/40 py-6 mb-20 select-none">
            <Marquee duration={30} pauseOnHover className="text-white">
              <div className="flex items-center gap-12 text-sm md:text-base font-medium tracking-wider uppercase font-display">
                <span className="flex items-center gap-2">
                  <Leaf className="w-4 h-4 text-leaf-500 fill-current" />
                  <span>Website Design & Rebuilds</span>
                </span>
                <span className="text-leaf-800">•</span>
                
                <span className="flex items-center gap-2">
                  <Leaf className="w-4 h-4 text-leaf-500 fill-current" />
                  <span>Website Speed & Trust Cleanup</span>
                </span>
                <span className="text-leaf-800">•</span>
                
                <span className="flex items-center gap-2">
                  <Leaf className="w-4 h-4 text-leaf-500 fill-current" />
                  <span>AI Assistants & Chat Experiences</span>
                </span>
                <span className="text-leaf-800">•</span>
                
                <span className="flex items-center gap-2">
                  <Leaf className="w-4 h-4 text-leaf-500 fill-current" />
                  <span>Business Automation & Workflows</span>
                </span>
                <span className="text-leaf-800">•</span>
                
                <span className="flex items-center gap-2">
                  <Leaf className="w-4 h-4 text-leaf-500 fill-current" />
                  <span>Hosting & Website Care Plans</span>
                </span>
                <span className="text-leaf-800">•</span>
                
                <span className="flex items-center gap-2">
                  <Leaf className="w-4 h-4 text-leaf-500 fill-current" />
                  <span>Client Intake & Client Portals</span>
                </span>
                <span className="text-leaf-800">•</span>

                <span className="flex items-center gap-2">
                  <Leaf className="w-4 h-4 text-leaf-500 fill-current" />
                  <span>CRM & Sales-Support Systems</span>
                </span>
                <span className="text-leaf-800">•</span>

                <span className="flex items-center gap-2">
                  <Leaf className="w-4 h-4 text-leaf-500 fill-current" />
                  <span>Branding & Mobile-First UX</span>
                </span>
                <span className="text-leaf-800">•</span>

                <span className="flex items-center gap-2">
                  <Leaf className="w-4 h-4 text-leaf-500 fill-current" />
                  <span>DevOps, QA & Rollback Backups</span>
                </span>
                <span className="text-leaf-800">•</span>
              </div>
            </Marquee>
          </div>

          <div className="mb-20 flex justify-center max-w-full overflow-hidden">
            <CardStack
              items={cardStackItems}
              initialIndex={0}
              autoAdvance
              intervalMs={3000}
              pauseOnHover
              showDots
              cardWidth={480}
              cardHeight={300}
            />
          </div>
        </div>
      </section>
      )}

      {/* Managed WordPress Hosting Sub-Section */}
      {currentPage === "pricing" && (
      <section id="pricing" className="relative py-24 lg:py-36 px-6 lg:px-12 bg-leaf-950/60 border-t border-leaf-900/30">
        <PricingSection3 />
      </section>
      )}

      {currentPage === "work" && (
      <section id="work" className="relative py-24 lg:py-36 px-6 lg:px-12 border-t border-leaf-900/30 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          {/* Circular Flip Card Gallery */}
          <div className="w-full relative flex items-center justify-center my-8">
            <CircularGallery cards={circularCardData} />
          </div>

          {/* Call To Action Box */}
          <div className="glass p-12 rounded-[40px] border border-leaf-500/20 max-w-xl text-center relative overflow-hidden shadow-xl mt-12 animate-fade-in-up">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-leaf-500/5 rounded-full blur-3xl" />
            <h3 className="text-2xl font-extrabold text-white font-display">Ready to build something great?</h3>
            <p className="text-leaf-300 text-sm font-light mt-3 max-w-md mx-auto">
              Partner with A Fresh Leaf for bespoke custom-coded web architectures and speed integrations.
            </p>
            <button 
              onClick={() => setCurrentPage("contact")} 
              className="mt-8 bg-white hover:bg-leaf-100 text-leaf-950 font-bold px-8 py-3 rounded-full text-sm transition-all duration-300 shadow-md inline-block animate-pulse"
            >
              Start a Project
            </button>
          </div>
        </div>
      </section>
      )}

      {/* 5. ESTIMATE REQUEST / FOOTER */}
      <footer id="estimate" className="relative bg-leaf-950 border-t border-leaf-900/40 pt-24 pb-12 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Estimate Request Box */}
          {(currentPage === "home" || currentPage === "contact") && (
          <div className="glass p-12 rounded-[40px] border border-leaf-500/20 max-w-4xl mx-auto text-center mb-24 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-80 bg-leaf-500/5 rounded-full blur-[80px]" />
            
            <span className="text-xs font-bold uppercase tracking-widest text-leaf-500">Get a Fresh Start</span>
            <h2 className="text-3xl md:text-4xl font-extrabold font-display text-white mt-3">Free Speed & SEO Audit</h2>
            <p className="text-leaf-300 mt-3 max-w-md mx-auto font-light text-sm">
              We will inspect your site's core web vitals, mobile responsiveness, and keyword indexation. No obligations.
            </p>

            {auditStatus === "idle" && (
              <form onSubmit={handleAuditSubmit} className="mt-8 max-w-md mx-auto flex flex-col sm:flex-row gap-3">
                <input 
                  type="text" 
                  value={auditUrl}
                  onChange={(e) => setAuditUrl(e.target.value)}
                  required
                  placeholder="Enter your website URL (e.g. mysite.com)" 
                  className="flex-1 bg-leaf-900/40 border border-leaf-800 rounded-full px-6 py-4 text-white text-sm focus:outline-none focus:border-leaf-500/50"
                />
                <button type="submit" className="bg-white hover:bg-leaf-100 text-leaf-950 font-bold px-8 py-4 rounded-full text-sm transition-all duration-300 shadow-md">
                  Request Free Audit
                </button>
              </form>
            )}

            {auditStatus === "scanning" && (
              <div className="mt-8 max-w-md mx-auto flex flex-col items-center gap-4 py-4">
                <div className="w-10 h-10 border-4 border-leaf-500/30 border-t-leaf-500 rounded-full animate-spin" />
                <p className="text-leaf-300 font-mono text-sm animate-pulse">
                  {scanStep === 0 && "Analyzing mobile Core Web Vitals..."}
                  {scanStep === 1 && "Optimizing script payload budgets..."}
                  {scanStep === 2 && "Checking localized SEO indexing..."}
                </p>
              </div>
            )}

            {auditStatus === "success" && (
              <div className="mt-8 max-w-lg mx-auto p-6 rounded-3xl border border-leaf-500/30 bg-leaf-500/5 flex flex-col items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-leaf-500 flex items-center justify-center text-leaf-950 text-xl font-bold font-sans">
                  ✓
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-white">Diagnostics Queued!</h3>
                  <p className="text-leaf-300 mt-2 text-sm leading-relaxed">
                    We have successfully registered your request for <strong className="text-white font-mono">{auditUrl}</strong>.
                    Collin Fraum or one of our lead speed engineers will email your custom report within 24 hours.
                  </p>
                </div>
                <button 
                  onClick={() => { setAuditStatus("idle"); setAuditUrl(""); }} 
                  className="text-xs text-leaf-400 hover:text-leaf-300 underline mt-2"
                >
                  Run another audit
                </button>
              </div>
            )}
          </div>
          )}

          {/* Links & Brand footer */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 text-left">
            <div>
              <div className="mb-6">
                <Logo />
              </div>
              <p className="text-xs text-leaf-400 font-light leading-relaxed">
                Premium web design, technical search engine optimization, and digital strategies built to scale South Florida local businesses.
              </p>
            </div>
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-6">Services</h4>
              <ul className="space-y-3 text-xs text-leaf-400">
                <li><a href="#services" className="hover:text-leaf-300 transition-colors">Web Design</a></li>
                <li><a href="#services" className="hover:text-leaf-300 transition-colors">SEO Optimization</a></li>
                <li><a href="#services" className="hover:text-leaf-300 transition-colors">Speed Optimization</a></li>
                <li><a href="#services" className="hover:text-leaf-300 transition-colors">WordPress Hosting</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-6">Agency</h4>
              <ul className="space-y-3 text-xs text-leaf-400">
                <li><a href="#story" className="hover:text-leaf-300 transition-colors">Our Vision</a></li>
                <li><a href="#work" className="hover:text-leaf-300 transition-colors">Case Studies</a></li>
                <li><a href="#estimate" className="hover:text-leaf-300 transition-colors">Speed Audit</a></li>
                <li><a href="#process" className="hover:text-leaf-300 transition-colors">Our Process</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-6">Connect</h4>
              <div className="flex gap-4">
                <a href="#" className="p-3 rounded-full bg-leaf-900/60 border border-leaf-800 text-leaf-400 hover:text-white transition-colors" aria-label="Instagram">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </a>
                <a href="#" className="p-3 rounded-full bg-leaf-900/60 border border-leaf-800 text-leaf-400 hover:text-white transition-colors" aria-label="Twitter">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-leaf-900/40 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-leaf-400">
            <span>&copy; {new Date().getFullYear()} FreshLeaf. All rights reserved.</span>
            <div className="flex gap-6">
              <a href="#" className="hover:text-leaf-300 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-leaf-300 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
