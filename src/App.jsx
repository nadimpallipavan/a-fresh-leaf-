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
import { BorderRotate } from "./components/ui/animated-gradient-border";
import { LeadFunnel } from "./components/ui/lead-funnel";
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
    imageSrc: "./images/web_design_service.jpg",
    color: "orange"
  },
  {
    index: "002",
    tag: "Website Speed & Trust Cleanup",
    title: "Diagnostic and cleanup sweeps targeting 90+ Core Web Vitals, script cleanups, and trust elements.",
    imageSrc: "./images/speed_cleanup_service.jpg",
    color: "blue"
  },
  {
    index: "003",
    tag: "AI Assistants & Chat Experiences",
    title: "Custom-trained AI agents and automated support chat setups mapped to your business workflows.",
    imageSrc: "./images/ai_chat_service.jpg",
    color: "purple"
  },
  {
    index: "004",
    tag: "Business Automation & Workflows",
    title: "Lead nurturing sequences, automated calendar booking, and CRM system integrations.",
    imageSrc: "./images/automation_service.jpg",
    color: "green"
  },
  {
    index: "005",
    tag: "Hosting & Website Care Plans",
    title: "Enterprise cloud hosting, automated daily backups, real-time security, and updates.",
    imageSrc: "./images/hosting_care_service.jpg",
    color: "orange"
  },
  {
    index: "006",
    tag: "Client Intake & Client Portals",
    title: "Bespoke onboarding forms and client-area dashboard designs to streamline communication.",
    imageSrc: "./images/client_intake_service.jpg",
    color: "purple"
  },
  {
    index: "007",
    tag: "CRM & Sales-Support Systems",
    title: "High-performing contact capture, sales pipelines, and automatic notification triggers.",
    imageSrc: "./images/crm_sales_service.jpg",
    color: "blue"
  },
  {
    index: "008",
    tag: "Branding & Mobile-First UX",
    title: "Refined brand typography, mobile usability testing, and conversion-centered trust indicators.",
    imageSrc: "./images/branding_ux_service.jpg",
    color: "green"
  },
  {
    index: "009",
    tag: "DevOps, QA & Rollback Backups",
    title: "Professional version control setups, staging environments, QA checks, and rollback backups.",
    imageSrc: "./images/devops_qa_service.jpg",
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
    imgSrc: "./images/hero_bg.jpg",
    href: "#"
  },
  {
    heading: "Services",
    subheading: "Explore our digital growth capabilities",
    imgSrc: "./images/web_design_mockup.jpg",
    href: "#services"
  },
  {
    heading: "Our Work",
    subheading: "Case studies of brands that scaled",
    imgSrc: "./images/page_speed_mockup.jpg",
    href: "#work"
  },
  {
    heading: "About",
    subheading: "Collin Fraum and the AFL mission",
    imgSrc: "./images/seo_mockup.jpg",
    href: "#story"
  },
  {
    heading: "Pricing",
    subheading: "Starter and Growth hosting options",
    imgSrc: "./images/wordpress_maintenance_mockup.png",
    href: "#pricing"
  },
  {
    heading: "Contact",
    subheading: "Get started with your custom estimate",
    imgSrc: "./images/email_automation_mockup.png",
    href: "#estimate"
  }
];

const circularCardData = [
  { 
    image: "./images/postalprosplus_logo.png", 
    title: "PostalProsPlus", 
    url: "https://postalprosplus.com", 
    description: "Postal & shipping services with strong contact flow.",
    bgColor: "#111111",
    padding: "p-1"
  },
  { 
    image: "./images/fixmypagespeed_logo.png", 
    title: "FixMyPageSpeed", 
    url: "https://fixmypagespeed.com", 
    description: "Performance optimization WooCommerce store.",
    bgColor: "#ffffff",
    padding: "p-1"
  },
  { 
    image: "./images/saltwatercam_logo.png", 
    title: "SaltwaterCam", 
    url: "https://saltwatercam.com", 
    description: "Boynton Beach Inlet live underwater camera stream.",
    bgColor: "#09141f",
    padding: "p-0"
  },
  { 
    image: "./images/kingstonk9_logo.png", 
    title: "Kingston K9", 
    url: "https://kingstonk9.com", 
    description: "Premium dog training platform with local SEO.",
    bgColor: "#ffffff",
    padding: "p-1"
  },
  { 
    image: "./images/postalprosplus_logo.png", 
    title: "PostalProsPlus", 
    url: "https://postalprosplus.com", 
    description: "Postal & shipping services with strong contact flow.",
    bgColor: "#111111",
    padding: "p-1"
  },
  { 
    image: "./images/fixmypagespeed_logo.png", 
    title: "FixMyPageSpeed", 
    url: "https://fixmypagespeed.com", 
    description: "Performance optimization WooCommerce store.",
    bgColor: "#ffffff",
    padding: "p-1"
  },
  { 
    image: "./images/saltwatercam_logo.png", 
    title: "SaltwaterCam", 
    url: "https://saltwatercam.com", 
    description: "Boynton Beach Inlet live underwater camera stream.",
    bgColor: "#09141f",
    padding: "p-0"
  },
  { 
    image: "./images/kingstonk9_logo.png", 
    title: "Kingston K9", 
    url: "https://kingstonk9.com", 
    description: "Premium dog training platform with local SEO.",
    bgColor: "#ffffff",
    padding: "p-1"
  }
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
  const [selectedServiceForDetails, setSelectedServiceForDetails] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [previewTitle, setPreviewTitle] = useState("");
  const [deviceFrame, setDeviceFrame] = useState("desktop");
  const [previewZoom, setPreviewZoom] = useState(90);
  
  const serviceFeatures = {
    "001": [
      "Custom-coded UI mockups and design iteration loops.",
      "100% mobile-first optimized layouts and grid systems.",
      "High-converting copy and call-to-action sections.",
      "Semantic HTML5 tags for accessibility & SEO."
    ],
    "002": [
      "Targeted cleanups for 90+ Core Web Vitals scores.",
      "Next-generation WebP/AVIF image asset compression.",
      "Javascript thread cleanup and database optimization.",
      "Local security sweeps and trust badges setups."
    ],
    "003": [
      "Support chat configurations trained on custom content.",
      "Real-time chatbot integrations and API lead piping.",
      "Customer pre-qualification automation logic.",
      "Slack/email live alerts for custom inquiries."
    ],
    "004": [
      "Calendar booking sequences (Calendly/tidycal setups).",
      "Automatic custom emails and SMS follow-ups.",
      "Automated lead piping into HubSpot or target CRM.",
      "Workflow mapping for sales and client intake."
    ],
    "005": [
      "Enterprise Cloud VPS hosting with staging area.",
      "Daily backup retention with 1-click system restore.",
      "Real-time firewall, malware scans, and updates.",
      "Direct phone and email technical developer support."
    ],
    "006": [
      "Bespoke login areas and secure document uploads.",
      "Client dashboard to view project progress bars.",
      "Invoice and billing setup with Stripe/QuickBooks.",
      "Integrated client query support forms."
    ],
    "007": [
      "Sales pipeline configurations and status tags.",
      "Lead routing based on urgency and qualification.",
      "Custom triggers for text message / email alerts.",
      "Historic interaction logging and search tools."
    ],
    "008": [
      "Custom brand color palette definitions.",
      "Typography styling systems and logo lockups.",
      "Optimized visual layouts for finger-tap actions.",
      "Consistency audits across subpages."
    ],
    "009": [
      "Secure Git environments with branch controls.",
      "Staging server deployments for client previews.",
      "Automated browser compatibility checking.",
      "Backup recovery configuration."
    ]
  };

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedTimeline, setSelectedTimeline] = useState(0);
  const [currentPage, setCurrentPage] = useState("home");
  const [showAllFmps, setShowAllFmps] = useState(false);
  const [showAllAfl, setShowAllAfl] = useState(false);
  const [showAllSystems, setShowAllSystems] = useState(false);
  const [activePricingCard, setActivePricingCard] = useState(0);
  const handlePricingScroll = (e) => {
    const scrollLeft = e.target.scrollLeft;
    const width = e.target.offsetWidth;
    if (width > 0) {
      const index = Math.round(scrollLeft / width);
      setActivePricingCard(index);
    }
  };
  
  const [auditUrl, setAuditUrl] = useState("");
  const [auditStatus, setAuditStatus] = useState("idle"); // idle, scanning, success
  const [scanStep, setScanStep] = useState(0);
  React.useEffect(() => {
    const sections = [
      { id: "home-hero", page: "home" },
      { id: "services", page: "services" },
      { id: "work", page: "work" },
      { id: "story", page: "about" },
      { id: "pricing", page: "pricing" },
      { id: "contact-funnel", page: "contact" }
    ];
    
    const observerOptions = {
      root: null,
      rootMargin: "-30% 0px -60% 0px",
      threshold: 0
    };
    
    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = sections.find(s => s.id === entry.target.id);
          if (target) {
            setCurrentPage(target.page);
          }
        }
      });
    };
    
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    sections.forEach(sec => {
      const el = document.getElementById(sec.id);
      if (el) observer.observe(el);
    });
    
    return () => {
      sections.forEach(sec => {
        const el = document.getElementById(sec.id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);


  const handleNavClick = (e, page, elementId) => {
    if (e) e.preventDefault();
    setCurrentPage(page);
    setMobileMenuOpen(false);
    setTimeout(() => {
      const element = document.getElementById(elementId);
      if (element) {
        const headerOffset = 90; // Height of the fixed top nav bar + margin
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }, 50);
  };

  const handleAuditSubmit = (e) => {
    e.preventDefault();
    if (!auditUrl.trim()) return;
    setAuditStatus("scanning");
    setScanStep(0);
    
    const totalSteps = 4;
    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      if (currentStep < totalSteps) {
        setScanStep(currentStep);
      } else {
        clearInterval(interval);
        setAuditStatus("success");
      }
    }, 900);
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

      {/* Edge-to-Edge Top Navigation Bar */}
      <motion.nav 
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="fixed top-0 left-0 w-full z-50 glass py-3 border-b border-leaf-900/40 shadow-2xl px-6 lg:px-12"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="#">
            <Logo />
          </a>

          {/* Desktop Navigation */}
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2 lg:gap-4">
            <a href="#" onClick={(e) => handleNavClick(e, "home", "home-hero")} className="relative inline-block group">
              <span className={`relative z-10 block uppercase font-sans font-semibold transition-colors duration-300 text-[11px] py-1.5 px-3 ${currentPage === "home" ? "text-leaf-950" : "text-leaf-300 group-hover:text-leaf-950"}`}>
                Home
              </span>
              <span className={`absolute inset-0 border-t border-b border-leaf-500 transform transition-all duration-300 origin-center ${currentPage === "home" ? "scale-y-100 opacity-100" : "scale-y-[1.8] opacity-0 group-hover:scale-y-100 group-hover:opacity-100"}`} />
              <span className={`absolute inset-0 bg-leaf-500 transform transition-all duration-300 origin-top ${currentPage === "home" ? "scale-100 opacity-100" : "scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100"}`} />
            </a>
            
            <a href="#services" onClick={(e) => handleNavClick(e, "services", "services")} className="relative inline-block group">
              <span className={`relative z-10 block uppercase font-sans font-semibold transition-colors duration-300 text-[11px] py-1.5 px-3 ${currentPage === "services" ? "text-leaf-950" : "text-leaf-300 group-hover:text-leaf-950"}`}>
                Services
              </span>
              <span className={`absolute inset-0 border-t border-b border-leaf-500 transform transition-all duration-300 origin-center ${currentPage === "services" ? "scale-y-100 opacity-100" : "scale-y-[1.8] opacity-0 group-hover:scale-y-100 group-hover:opacity-100"}`} />
              <span className={`absolute inset-0 bg-leaf-500 transform transition-all duration-300 origin-top ${currentPage === "services" ? "scale-100 opacity-100" : "scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100"}`} />
            </a>

            <a href="#work" onClick={(e) => handleNavClick(e, "work", "work")} className="relative inline-block group">
              <span className={`relative z-10 block uppercase font-sans font-semibold transition-colors duration-300 text-[11px] py-1.5 px-3 ${currentPage === "work" ? "text-leaf-950" : "text-leaf-300 group-hover:text-leaf-950"}`}>
                Our Work
              </span>
              <span className={`absolute inset-0 border-t border-b border-leaf-500 transform transition-all duration-300 origin-center ${currentPage === "work" ? "scale-y-100 opacity-100" : "scale-y-[1.8] opacity-0 group-hover:scale-y-100 group-hover:opacity-100"}`} />
              <span className={`absolute inset-0 bg-leaf-500 transform transition-all duration-300 origin-top ${currentPage === "work" ? "scale-100 opacity-100" : "scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100"}`} />
            </a>

            <a href="#story" onClick={(e) => handleNavClick(e, "about", "story")} className="relative inline-block group">
              <span className={`relative z-10 block uppercase font-sans font-semibold transition-colors duration-300 text-[11px] py-1.5 px-3 ${currentPage === "about" ? "text-leaf-950" : "text-leaf-300 group-hover:text-leaf-950"}`}>
                About
              </span>
              <span className={`absolute inset-0 border-t border-b border-leaf-500 transform transition-all duration-300 origin-center ${currentPage === "about" ? "scale-y-100 opacity-100" : "scale-y-[1.8] opacity-0 group-hover:scale-y-100 group-hover:opacity-100"}`} />
              <span className={`absolute inset-0 bg-leaf-500 transform transition-all duration-300 origin-top ${currentPage === "about" ? "scale-100 opacity-100" : "scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100"}`} />
            </a>

            <a href="#pricing" onClick={(e) => handleNavClick(e, "pricing", "pricing")} className="relative inline-block group">
              <span className={`relative z-10 block uppercase font-sans font-semibold transition-colors duration-300 text-[11px] py-1.5 px-3 ${currentPage === "pricing" ? "text-leaf-950" : "text-leaf-300 group-hover:text-leaf-950"}`}>
                Pricing
              </span>
              <span className={`absolute inset-0 border-t border-b border-leaf-500 transform transition-all duration-300 origin-center ${currentPage === "pricing" ? "scale-y-100 opacity-100" : "scale-y-[1.8] opacity-0 group-hover:scale-y-100 group-hover:opacity-100"}`} />
              <span className={`absolute inset-0 bg-leaf-500 transform transition-all duration-300 origin-top ${currentPage === "pricing" ? "scale-100 opacity-100" : "scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100"}`} />
            </a>

            <a href="#estimate" onClick={(e) => handleNavClick(e, "contact", "contact-funnel")} className="relative inline-block group">
              <span className={`relative z-10 block uppercase font-sans font-semibold transition-colors duration-300 text-[11px] py-1.5 px-3 ${currentPage === "contact" ? "text-leaf-950" : "text-leaf-300 group-hover:text-leaf-950"}`}>
                Contact
              </span>
              <span className={`absolute inset-0 border-t border-b border-leaf-500 transform transition-all duration-300 origin-center ${currentPage === "contact" ? "scale-y-100 opacity-100" : "scale-y-[1.8] opacity-0 group-hover:scale-y-100 group-hover:opacity-100"}`} />
              <span className={`absolute inset-0 bg-leaf-500 transform transition-all duration-300 origin-top ${currentPage === "contact" ? "scale-100 opacity-100" : "scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100"}`} />
            </a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a 
              href="#contact-funnel" 
              onClick={(e) => handleNavClick(e, "contact", "contact-funnel")}
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
                  let targetId = "home-hero";
                  let page = "home";
                  if (href === "#services") { targetId = "services"; page = "services"; }
                  else if (href === "#work") { targetId = "work"; page = "work"; }
                  else if (href === "#story") { targetId = "story"; page = "about"; }
                  else if (href === "#pricing") { targetId = "pricing"; page = "pricing"; }
                  else if (href === "#estimate") { targetId = "contact-funnel"; page = "contact"; }
                  handleNavClick(e, page, targetId);
                }} 
                className="w-full"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 1. HERO SECTION */}
      <section 
        id="home-hero"
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
            A fresh leaf builds custom websites, SEO, and digital strategy that take root and scale.
          </motion.p>



          {/* Scroll action indicator */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 1 }}
            className="mt-12"
          >
            <a 
              href="#services" 
              className="text-[9px] uppercase tracking-[0.4em] text-zinc-500 hover:text-white transition-colors duration-300 font-bold"
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



      {/* 3. PRODUCT SHOWCASE SECTION */}
      <section id="services" className="relative px-6 lg:px-12 bg-black border-t border-leaf-900/30 min-h-[100dvh] lg:h-[calc(100vh-70px)] lg:min-h-[650px] flex flex-col justify-start pt-20 pb-28 lg:justify-center lg:overflow-hidden lg:pt-24">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center max-w-2xl mx-auto mb-4">
            <span className="text-xs font-bold uppercase tracking-widest text-leaf-500">Tailored Growth Solutions</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mt-1 text-center">Our Core <span className="text-leaf-400">Services</span></h2>
            <p className="text-leaf-400 text-xs mt-2 font-light">Leverage state-of-the-art web technology and data-backed search engine optimization built to convert.</p>
            
            {/* Rising Glow particle emitter */}
            <div className="w-full mt-4 flex justify-center">
              <RisingGlow
                particleCount={60}
                particleColor="#55b038"
                height={50}
                width="100%"
              />
            </div>
          </div>
 
          {/* Moving Marquee banner */}
          <div className="w-full border-y border-leaf-900/40 py-3 mb-6 select-none">
            <Marquee duration={30} pauseOnHover className="text-white">
              <div className="flex items-center gap-12 text-xs md:text-sm font-medium tracking-wider uppercase font-display">
                <span className="flex items-center gap-2">
                  <Leaf className="w-3.5 h-3.5 text-leaf-500 fill-current" />
                  <span>Website Design & Rebuilds</span>
                </span>
                <span className="text-leaf-800">•</span>
                
                <span className="flex items-center gap-2">
                  <Leaf className="w-3.5 h-3.5 text-leaf-500 fill-current" />
                  <span>Website Speed & Trust Cleanup</span>
                </span>
                <span className="text-leaf-800">•</span>
                
                <span className="flex items-center gap-2">
                  <Leaf className="w-3.5 h-3.5 text-leaf-500 fill-current" />
                  <span>AI Assistants & Chat Experiences</span>
                </span>
                <span className="text-leaf-800">•</span>
                
                <span className="flex items-center gap-2">
                  <Leaf className="w-3.5 h-3.5 text-leaf-500 fill-current" />
                  <span>Business Automation & Workflows</span>
                </span>
                <span className="text-leaf-800">•</span>
                
                <span className="flex items-center gap-2">
                  <Leaf className="w-3.5 h-3.5 text-leaf-500 fill-current" />
                  <span>Hosting & Website Care Plans</span>
                </span>
                <span className="text-leaf-800">•</span>
                
                <span className="flex items-center gap-2">
                  <Leaf className="w-3.5 h-3.5 text-leaf-500 fill-current" />
                  <span>Client Intake & Client Portals</span>
                </span>
                <span className="text-leaf-800">•</span>
 
                <span className="flex items-center gap-2">
                  <Leaf className="w-3.5 h-3.5 text-leaf-500 fill-current" />
                  <span>CRM & Sales-Support Systems</span>
                </span>
                <span className="text-leaf-800">•</span>
 
                <span className="flex items-center gap-2">
                  <Leaf className="w-3.5 h-3.5 text-leaf-500 fill-current" />
                  <span>Branding & Mobile-First UX</span>
                </span>
                <span className="text-leaf-800">•</span>
 
                <span className="flex items-center gap-2">
                  <Leaf className="w-3.5 h-3.5 text-leaf-500 fill-current" />
                  <span>DevOps, QA & Rollback Backups</span>
                </span>
                <span className="text-leaf-800">•</span>
              </div>
            </Marquee>
          </div>
 
          <div className="flex justify-center max-w-full overflow-hidden">
            <CardStack
              items={cardStackItems}
              initialIndex={0}
              autoAdvance
              intervalMs={3000}
              pauseOnHover
              showDots
              cardWidth={420}
              cardHeight={260}
              renderCard={(item, { active }) => (
                <div className="relative h-full w-full group overflow-hidden">
                  {item.imageSrc ? (
                    <img
                      src={item.imageSrc}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      draggable={false}
                      loading="eager"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-emerald-950 via-leaf-950 to-neutral-950" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent pointer-events-none" />
                  
                  <div className="absolute inset-0 p-5 flex flex-col justify-end text-left z-10">
                    <span className="text-[9px] font-bold uppercase tracking-widest text-leaf-400 mb-1">A Fresh Leaf • Service</span>
                    <h4 className="text-sm lg:text-base font-bold text-white leading-tight mb-1">{item.title}</h4>
                    <p className="text-[10px] text-leaf-300 line-clamp-2 leading-relaxed mb-3">{item.description}</p>
                    
                    {active && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedServiceForDetails(item);
                        }}
                        className="bg-leaf-500 hover:bg-leaf-600 text-leaf-950 font-bold px-4 py-2 rounded-xl text-[10px] uppercase tracking-wider transition-all duration-300 shadow-md cursor-pointer self-start"
                      >
                        What We Provide →
                      </button>
                    )}
                  </div>
                </div>
              )}
            />
          </div>
        </div>
      </section>

      {/* 4. OUR WORK SECTION */}
      <section id="work" className="relative px-6 lg:px-12 border-t border-leaf-900/30 min-h-[100dvh] lg:h-[calc(100vh-70px)] lg:min-h-[650px] flex flex-col justify-start pt-20 pb-28 lg:justify-center lg:overflow-hidden lg:pt-24">
        <div className="max-w-7xl mx-auto w-full flex flex-col items-center">
          {/* Header on top of gallery */}
          <div className="text-center max-w-2xl mx-auto mb-2">
            <span className="text-xs font-bold uppercase tracking-widest text-leaf-500">Case Studies</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mt-1 text-center">Our <span className="text-leaf-400">Work</span></h2>
            <p className="text-leaf-400 text-xs mt-2 font-light text-center">Explore modern design architectures, web interfaces, and high-performance applications built for digital growth.</p>
            {/* Rising Glow particle emitter */}
            <div className="w-full mt-4 flex justify-center">
              <RisingGlow
                particleCount={60}
                particleColor="#55b038"
                height={50}
                width="100%"
              />
            </div>
          </div>

          {/* Circular Flip Card Gallery */}
          <div className="w-full relative flex items-center justify-center my-2 py-2">
            <CircularGallery cards={circularCardData} onSelectCard={(url, title) => { setPreviewUrl(url); setPreviewTitle(title); }} />
          </div>
        </div>
      </section>

      {/* 2. THE STORY / PHILOSOPHY */}
      <section id="story" className="relative px-6 lg:px-12 border-t border-leaf-900/30 min-h-[100dvh] lg:h-[calc(100vh-70px)] lg:min-h-[650px] flex flex-col justify-start pt-20 pb-28 lg:justify-center lg:overflow-hidden lg:pt-24">
        <div className="max-w-7xl mx-auto flex flex-col items-center mb-4">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-leaf-500">Rooted in Performance</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mt-1 text-center">About <span className="text-leaf-400">Us</span></h2>
            <h3 className="text-sm md:text-xl font-sans font-semibold text-leaf-300 mt-2 leading-normal text-center">
              Digital growth is not accidental. It is engineered.
            </h3>
            {/* Rising Glow particle emitter */}
            <div className="w-full mt-2 flex justify-center">
              <RisingGlow
                particleCount={40}
                particleColor="#55b038"
                height={40}
                width="100%"
              />
            </div>
          </div>
        </div>
 
        <div className="max-w-7xl mx-auto w-full flex flex-col lg:grid lg:grid-cols-12 gap-6 lg:gap-16 items-center">
          {/* Story Left Media */}
          <div className="w-full lg:col-span-6 relative flex flex-col items-center justify-center gap-2">
            {/* Mobile Logo Showcase */}
            <div className="lg:hidden flex items-center justify-center my-2">
              <div className="w-40 h-40 rounded-[24px] border border-leaf-800/40 bg-gradient-to-br from-leaf-950 via-black to-neutral-900 relative flex items-center justify-center overflow-hidden shadow-2xl">
                {/* Pulsing Green Concentric Decorative Rings */}
                <div className="absolute w-32 h-32 rounded-full border border-leaf-500/5 animate-[spin_40s_linear_infinite]" />
                <div className="absolute w-24 h-24 rounded-full border border-dashed border-leaf-500/10 animate-[spin_20s_linear_infinite_reverse]" />
                <div className="absolute w-16 h-16 rounded-full border border-leaf-500/15" />
                
                <div className="absolute inset-0 bg-gradient-to-br from-leaf-900/5 via-transparent to-leaf-900/5 pointer-events-none" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-leaf-500/5 rounded-full blur-[30px] pointer-events-none" />
                <Logo iconOnly className="w-16 h-16 relative z-10 transition-transform duration-500 hover:scale-105 filter drop-shadow-[0_0_15px_rgba(90,200,120,0.2)]" />
              </div>
            </div>
 
            <div className="hidden lg:flex w-full max-w-sm aspect-square rounded-[32px] border border-leaf-800/40 bg-gradient-to-br from-leaf-950 via-black to-neutral-900 relative items-center justify-center p-8 overflow-hidden shadow-2xl">
              {/* Pulsing Green Concentric Decorative Rings */}
              <div className="absolute w-64 h-64 rounded-full border border-leaf-500/5 animate-[spin_40s_linear_infinite]" />
              <div className="absolute w-52 h-52 rounded-full border border-dashed border-leaf-500/10 animate-[spin_20s_linear_infinite_reverse]" />
              <div className="absolute w-40 h-40 rounded-full border border-leaf-500/15" />
              
              <div className="absolute inset-0 bg-gradient-to-br from-leaf-900/5 via-transparent to-leaf-900/5 pointer-events-none" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-leaf-500/5 rounded-full blur-[60px] pointer-events-none" />
              <Logo iconOnly className="w-36 h-36 relative z-10 transition-transform duration-500 hover:scale-105 filter drop-shadow-[0_0_25px_rgba(90,200,120,0.2)]" />
            </div>
            {/* Absolute Glass Card overlay */}
            <div className="lg:absolute lg:-bottom-6 lg:-right-6 relative mt-0 mx-auto glass p-3 md:p-4 rounded-2xl md:rounded-3xl border border-leaf-500/20 max-w-full lg:max-w-xs shadow-2xl">
              <p className="text-[11px] lg:text-sm font-medium italic text-leaf-300 leading-relaxed">
                "Our philosophy is simple: Plant the seed, watch your business grow. We build web solutions that take root, scale, and rank."
              </p>
              <div className="mt-2 flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-leaf-800 flex items-center justify-center text-[10px] font-bold text-leaf-500">CF</div>
                <div>
                  <h4 className="text-[10px] font-bold text-white leading-none">Collin Fraum</h4>
                  <p className="text-[9px] text-leaf-400 mt-0.5 leading-none">Founder & Lead Strategist</p>
                </div>
              </div>
            </div>
          </div>
 
          {/* Story Right Content */}
          <div className="w-full lg:col-span-6 flex flex-col items-start text-left">
            <p className="text-leaf-300 mt-2 font-light leading-relaxed text-sm hidden md:block">
              Most templates and off-the-shelf builders load hundreds of unused scripts, slowing down your website and hurting your SEO. At A Fresh Leaf, we hand-craft fast, clean-coded React platforms optimized to rank on page one and turn traffic into customers.
            </p>
            <div className="mt-2 lg:mt-4 space-y-3 lg:space-y-4 w-full">
              <div className="flex gap-3 lg:gap-4">
                <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl lg:rounded-2xl bg-leaf-900/60 border border-leaf-800 flex-shrink-0 flex items-center justify-center text-leaf-400">
                  <ShieldCheck className="w-5 h-5 lg:w-6 lg:h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-xs lg:text-base">Speed & Metric Audited</h4>
                  <p className="text-xs lg:text-sm text-leaf-400 mt-0.5 leading-relaxed">We optimize every asset, code split, and server layout to ensure a perfect 100/100 score on Core Web Vitals.</p>
                </div>
              </div>
              <div className="flex gap-3 lg:gap-4">
                <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl lg:rounded-2xl bg-leaf-900/60 border border-leaf-800 flex-shrink-0 flex items-center justify-center text-leaf-400">
                  <Globe className="w-5 h-5 lg:w-6 lg:h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-xs lg:text-base">Localized SEO Authority</h4>
                  <p className="text-xs lg:text-sm text-leaf-400 mt-0.5 leading-relaxed">Ethical, rank-focused strategy designed to capture localized searches and outrank your target competition.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Managed WordPress Hosting Sub-Section */}
      <section id="pricing" className="relative px-6 lg:px-12 bg-black border-t border-leaf-900/30 min-h-[100dvh] lg:min-h-[calc(100vh-90px)] flex flex-col justify-start pt-20 pb-28 lg:py-20 lg:justify-start lg:overflow-visible">
        <div className="max-w-7xl mx-auto w-full">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-4">
            <span className="text-xs font-bold uppercase tracking-widest text-leaf-500">Transparent Cost Structure</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mt-1 text-center">Our <span className="text-leaf-400">Pricing</span></h2>
            <p className="text-leaf-400 text-xs mt-2 font-light text-center">
              Simple, value-backed project plans aligned with custom web design, speed upgrades, and CRM automations.
            </p>
            {/* Rising Glow particle emitter */}
            <div className="w-full mt-4 flex justify-center">
              <RisingGlow
                particleCount={60}
                particleColor="#55b038"
                height={50}
                width="100%"
              />
            </div>
          </div>
 
          {/* Mobile Promo Alert */}
          <div className="md:hidden bg-emerald-950/30 border border-emerald-500/20 text-emerald-400 rounded-xl p-2 mb-4 text-center font-bold text-[9px] uppercase tracking-wide">
            🇺🇸 July 4th Special: 25% Off Website Rebuilds & CRM Setup
          </div>
 
          {/* Compact Promo Banner */}
          <div className="hidden md:flex bg-emerald-950/40 border border-emerald-500/20 rounded-full px-6 py-2 mb-6 text-xs font-semibold text-emerald-400 max-w-xl mx-auto shadow-md items-center justify-center gap-2 backdrop-blur-md">
            <span className="animate-pulse">🇺🇸</span>
            <span>JULY 4TH SPECIAL: 25% OFF WEBSITE REBUILDS & CRM SETUP</span>
          </div>

          <div onScroll={handlePricingScroll} className="flex overflow-x-auto snap-x gap-6 lg:grid lg:grid-cols-3 lg:gap-8 max-w-7xl mx-auto pb-6 px-6 lg:px-0 scrollbar-thin">
            {/* Column 1: FMPS */}
            <motion.div
              whileHover={{ y: -5 }}
              className="relative overflow-hidden rounded-3xl min-w-[calc(100vw-48px)] w-[calc(100vw-48px)] min-h-[300px] snap-start flex-shrink-0 lg:min-w-0 lg:w-auto"
            >
              <BorderRotate
                borderRadius={24}
                borderWidth={2}
                animationSpeed={7}
                className="p-8 flex flex-col justify-between text-left h-full w-full bg-leaf-950/40"
              >
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-leaf-500">Diagnostics & Speed</span>
                <h3 className="text-xl font-bold text-white mt-2 mb-4">Fix My Page Speed (FMPS)</h3>

                <div className="mb-6">
                  <TheItemButton 
                    variant={showAllFmps ? "default" : "outline"} 
                    className={`w-full py-2.5 rounded-xl text-xs font-bold tracking-wider uppercase border border-leaf-500/20 transition-all duration-300 ${showAllFmps ? "bg-leaf-500 hover:bg-leaf-600 text-leaf-950" : "bg-neutral-900/40 hover:bg-leaf-500 hover:text-leaf-950 text-leaf-300"}`}
                    onClick={() => setShowAllFmps(!showAllFmps)}
                  >
                    {showAllFmps ? "Hide Prices & Details" : "Show Prices & Details"}
                  </TheItemButton>
                </div>
                
                {showAllFmps && (
                  <ItemGroup className="space-y-3 max-h-[220px] overflow-y-auto pr-2 scrollbar-thin mt-4">
                    <Item variant="outline" className="border-leaf-900/60 p-3.5 bg-transparent hover:bg-leaf-900/10 rounded-xl transition-all duration-300">
                      <ItemContent className="w-full">
                        <ItemTitle className="text-xs font-bold text-leaf-300 flex justify-between items-center w-full">
                          <span>Quick Speed + Trust Snapshot</span>
                          <span className="text-white font-mono text-sm font-bold">$97</span>
                        </ItemTitle>
                        <ItemDescription className="text-[10px] text-leaf-400 mt-1 leading-normal font-light">Core Web Vitals snapshot. Easy entry offer.</ItemDescription>
                      </ItemContent>
                    </Item>

                    <Item variant="outline" className="border-leaf-500/30 p-3.5 bg-leaf-500/5 hover:bg-leaf-500/10 rounded-xl transition-all duration-300 border-l-2 border-l-leaf-500">
                      <ItemContent className="w-full">
                        <ItemTitle className="text-xs font-bold text-leaf-100 flex justify-between items-center w-full">
                          <span className="flex items-center gap-1.5">
                            Paid Audit + Cleanup Plan
                            <Badge variant="success" size="xs" className="bg-leaf-500/20 text-leaf-300 border border-leaf-500/30 text-[8px] font-sans px-1 rounded">Popular</Badge>
                          </span>
                          <span className="text-leaf-400 font-mono text-sm font-bold">$297</span>
                        </ItemTitle>
                        <ItemDescription className="text-[10px] text-leaf-300 mt-1 leading-normal font-light">Best first offer. Deep diagnostic report.</ItemDescription>
                      </ItemContent>
                    </Item>

                    <Item variant="outline" className="border-leaf-900/60 p-3.5 bg-transparent hover:bg-leaf-900/10 rounded-xl transition-all duration-300">
                      <ItemContent className="w-full">
                        <ItemTitle className="text-xs font-bold text-leaf-300 flex justify-between items-center w-full">
                          <span>Priority Audit + 30-Min Review</span>
                          <span className="text-white font-mono text-sm font-bold">$497</span>
                        </ItemTitle>
                        <ItemDescription className="text-[10px] text-leaf-400 mt-1 leading-normal font-light">Deep audit combined with direct strategy call consultation.</ItemDescription>
                      </ItemContent>
                    </Item>

                    <Item variant="outline" className="border-emerald-500/30 p-3.5 bg-emerald-500/5 hover:bg-emerald-500/10 rounded-xl transition-all duration-300 border-l-2 border-l-emerald-500">
                      <ItemContent className="w-full">
                        <ItemTitle className="text-xs font-bold text-emerald-300 flex justify-between items-center w-full">
                          <span>Speed + Trust Cleanup Sprint</span>
                          <span className="text-white font-mono text-sm font-bold">$997</span>
                        </ItemTitle>
                        <ItemDescription className="text-[10px] text-leaf-300 mt-1 leading-normal font-light">Natural upgrade path. Direct asset & code cleanup sprint.</ItemDescription>
                      </ItemContent>
                    </Item>

                    <Item variant="outline" className="border-leaf-900/60 p-3.5 bg-transparent hover:bg-leaf-900/10 rounded-xl transition-all duration-300">
                      <ItemContent className="w-full">
                        <ItemTitle className="text-xs font-bold text-leaf-300 flex justify-between items-center w-full">
                          <span>Premium Cleanup Sprint</span>
                          <span className="text-white font-mono text-sm font-bold">$1,497</span>
                        </ItemTitle>
                        <ItemDescription className="text-[10px] text-leaf-400 mt-1 leading-normal font-light">Full multi-system asset cache structure & database compression.</ItemDescription>
                      </ItemContent>
                    </Item>

                    <Item variant="outline" className="border-leaf-900/60 p-3.5 bg-transparent hover:bg-leaf-900/10 rounded-xl transition-all duration-300">
                      <ItemContent className="w-full">
                        <ItemTitle className="text-xs font-bold text-leaf-300 flex justify-between items-center w-full">
                          <span>Emergency Website Rescue Day</span>
                          <span className="text-white font-mono text-sm font-bold">$1,997</span>
                        </ItemTitle>
                        <ItemDescription className="text-[10px] text-leaf-400 mt-1 leading-normal font-light">Immediate 24-hour turnaround performance & server emergency recovery.</ItemDescription>
                      </ItemContent>
                    </Item>

                    <Item variant="outline" className="border-leaf-900/60 p-3.5 bg-transparent hover:bg-leaf-900/10 rounded-xl transition-all duration-300">
                      <ItemContent className="w-full">
                        <ItemTitle className="text-xs font-bold text-leaf-300 flex justify-between items-center w-full">
                          <span>Ongoing Basic Care Plan</span>
                          <span className="text-white font-mono text-sm font-bold">$197/mo</span>
                        </ItemTitle>
                        <ItemDescription className="text-[10px] text-leaf-400 mt-1 leading-normal font-light">Standard updates, security hardening, and daily rollback backups.</ItemDescription>
                      </ItemContent>
                    </Item>

                    <Item variant="outline" className="border-leaf-900/60 p-3.5 bg-transparent hover:bg-leaf-900/10 rounded-xl transition-all duration-300">
                      <ItemContent className="w-full">
                        <ItemTitle className="text-xs font-bold text-leaf-300 flex justify-between items-center w-full">
                          <span>Ongoing Growth Care Plan</span>
                          <span className="text-white font-mono text-sm font-bold">$397/mo</span>
                        </ItemTitle>
                        <ItemDescription className="text-[10px] text-leaf-400 mt-1 leading-normal font-light">Staging environment sync, Git source control setup, and SEO indexing checks.</ItemDescription>
                      </ItemContent>
                    </Item>

                    <Item variant="outline" className="border-leaf-900/60 p-3.5 bg-transparent hover:bg-leaf-900/10 rounded-xl transition-all duration-300">
                      <ItemContent className="w-full">
                        <ItemTitle className="text-xs font-bold text-leaf-300 flex justify-between items-center w-full">
                          <span>Premium Website Care Plan</span>
                          <span className="text-white font-mono text-sm font-bold">$747/mo</span>
                        </ItemTitle>
                        <ItemDescription className="text-[10px] text-leaf-400 mt-1 leading-normal font-light">Continuous staging sync, DevOps rollback pipelines, and speed monitoring.</ItemDescription>
                      </ItemContent>
                    </Item>

                    <Item variant="outline" className="border-leaf-900/60 p-3.5 bg-transparent hover:bg-leaf-900/10 rounded-xl transition-all duration-300">
                      <ItemContent className="w-full">
                        <ItemTitle className="text-xs font-bold text-leaf-300 flex justify-between items-center w-full">
                          <span>White-Glove Support Retainer</span>
                          <span className="text-white font-mono text-sm font-bold">$1,497/mo</span>
                        </ItemTitle>
                        <ItemDescription className="text-[10px] text-leaf-400 mt-1 leading-normal font-light">Dedicated engineer availability and unlimited small site edits.</ItemDescription>
                      </ItemContent>
                    </Item>
                  </ItemGroup>
                )}
              </div>
              </BorderRotate>
            </motion.div>

            {/* Column 2: AFL Web Services */}
            <motion.div
              whileHover={{ y: -5 }}
              className="relative overflow-hidden rounded-3xl min-w-[calc(100vw-48px)] w-[calc(100vw-48px)] min-h-[300px] snap-start flex-shrink-0 lg:min-w-0 lg:w-auto"
            >
              <BorderRotate
                borderRadius={24}
                borderWidth={3}
                animationSpeed={4}
                className="p-8 flex flex-col justify-between text-left h-full w-full bg-leaf-950/40"
              >
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-leaf-500">Design & Development</span>
                <h3 className="text-xl font-bold text-white mt-2 mb-4">A Fresh Leaf (AFL) Builds</h3>

                <div className="mb-6">
                  <TheItemButton 
                    variant={showAllAfl ? "default" : "outline"} 
                    className={`w-full py-2.5 rounded-xl text-xs font-bold tracking-wider uppercase border border-leaf-500/20 transition-all duration-300 ${showAllAfl ? "bg-leaf-500 hover:bg-leaf-600 text-leaf-950" : "bg-neutral-900/40 hover:bg-leaf-500 hover:text-leaf-950 text-leaf-300"}`}
                    onClick={() => setShowAllAfl(!showAllAfl)}
                  >
                    {showAllAfl ? "Hide Prices & Details" : "Show Prices & Details"}
                  </TheItemButton>
                </div>
                
                {showAllAfl && (
                  <ItemGroup className="space-y-3 max-h-[220px] overflow-y-auto pr-2 scrollbar-thin mt-4">
                    <Item variant="outline" className="border-leaf-900/60 p-3.5 bg-transparent hover:bg-leaf-900/10 rounded-xl transition-all duration-300">
                      <ItemContent className="w-full">
                        <ItemTitle className="text-xs font-bold text-leaf-300 flex justify-between items-center w-full">
                          <span>Basic Landing Page</span>
                          <span className="text-white font-mono text-sm font-bold">$1,250</span>
                        </ItemTitle>
                        <ItemDescription className="text-[10px] text-leaf-400 mt-1 leading-normal font-light">Clean layout single sales page built directly in React.</ItemDescription>
                      </ItemContent>
                    </Item>

                    <Item variant="outline" className="border-leaf-900/60 p-3.5 bg-transparent hover:bg-leaf-900/10 rounded-xl transition-all duration-300">
                      <ItemContent className="w-full">
                        <ItemTitle className="text-xs font-bold text-leaf-300 flex justify-between items-center w-full">
                          <span>Premium Landing Page</span>
                          <span className="text-white font-mono text-sm font-bold">$2,500</span>
                        </ItemTitle>
                        <ItemDescription className="text-[10px] text-leaf-400 mt-1 leading-normal font-light">Advanced copy integration, A/B paths, and custom graphics.</ItemDescription>
                      </ItemContent>
                    </Item>

                    <Item variant="outline" className="border-leaf-500/30 p-3.5 bg-leaf-500/5 hover:bg-leaf-500/10 rounded-xl transition-all duration-300 border-l-2 border-l-leaf-500">
                      <ItemContent className="w-full">
                        <ItemTitle className="text-xs font-bold text-leaf-100 flex justify-between items-center w-full">
                          <span className="flex items-center gap-1.5">
                            Small Business Website
                            <Badge variant="success" size="xs" className="bg-leaf-500/20 text-leaf-300 border border-leaf-500/30 text-[8px] font-sans px-1 rounded">Popular</Badge>
                          </span>
                          <span className="text-leaf-400 font-mono text-sm font-bold">$3,500</span>
                        </ItemTitle>
                        <ItemDescription className="text-[10px] text-leaf-300 mt-1 leading-normal font-light">Up to 5 pages. Custom brand theme, optimized speed & SEO.</ItemDescription>
                      </ItemContent>
                    </Item>

                    <Item variant="outline" className="border-leaf-900/60 p-3.5 bg-transparent hover:bg-leaf-900/10 rounded-xl transition-all duration-300">
                      <ItemContent className="w-full">
                        <ItemTitle className="text-xs font-bold text-leaf-300 flex justify-between items-center w-full">
                          <span>Growth Website Build</span>
                          <span className="text-white font-mono text-sm font-bold">$5,500</span>
                        </ItemTitle>
                        <ItemDescription className="text-[10px] text-leaf-400 mt-1 leading-normal font-light">Full multi-page builds featuring advanced lead funnel systems.</ItemDescription>
                      </ItemContent>
                    </Item>

                    <Item variant="outline" className="border-leaf-900/60 p-3.5 bg-transparent hover:bg-leaf-900/10 rounded-xl transition-all duration-300">
                      <ItemContent className="w-full">
                        <ItemTitle className="text-xs font-bold text-leaf-300 flex justify-between items-center w-full">
                          <span>Premium Website Rebuild</span>
                          <span className="text-white font-mono text-sm font-bold">$8,500</span>
                        </ItemTitle>
                        <ItemDescription className="text-[10px] text-leaf-400 mt-1 leading-normal font-light">Total corporate redesign, deep structural UX audit & setup.</ItemDescription>
                      </ItemContent>
                    </Item>

                    <Item variant="outline" className="border-leaf-900/60 p-3.5 bg-transparent hover:bg-leaf-900/10 rounded-xl transition-all duration-300">
                      <ItemContent className="w-full">
                        <ItemTitle className="text-xs font-bold text-leaf-300 flex justify-between items-center w-full">
                          <span>Website Rescue Sprint</span>
                          <span className="text-white font-mono text-sm font-bold">$1,500</span>
                        </ItemTitle>
                        <ItemDescription className="text-[10px] text-leaf-400 mt-1 leading-normal font-light">Repairs for broken formatting, broken styling, and mobile responsiveness bugs.</ItemDescription>
                      </ItemContent>
                    </Item>

                    <Item variant="outline" className="border-leaf-900/60 p-3.5 bg-transparent hover:bg-leaf-900/10 rounded-xl transition-all duration-300">
                      <ItemContent className="w-full">
                        <ItemTitle className="text-xs font-bold text-leaf-300 flex justify-between items-center w-full">
                          <span>Brand / UX Polish Sprint</span>
                          <span className="text-white font-mono text-sm font-bold">$997</span>
                        </ItemTitle>
                        <ItemDescription className="text-[10px] text-leaf-400 mt-1 leading-normal font-light">Clean visual edits, unified typographies, and layout polish.</ItemDescription>
                      </ItemContent>
                    </Item>

                    <Item variant="outline" className="border-leaf-900/60 p-3.5 bg-transparent hover:bg-leaf-900/10 rounded-xl transition-all duration-300">
                      <ItemContent className="w-full">
                        <ItemTitle className="text-xs font-bold text-leaf-300 flex justify-between items-center w-full">
                          <span>Full Brand + Website Refresh</span>
                          <span className="text-white font-mono text-sm font-bold">$4,500</span>
                        </ItemTitle>
                        <ItemDescription className="text-[10px] text-leaf-400 mt-1 leading-normal font-light">Complete typography update, new logo integration, and landing rebuilds.</ItemDescription>
                      </ItemContent>
                    </Item>
                  </ItemGroup>
                )}
              </div>
              </BorderRotate>
            </motion.div>

            {/* Column 3: AI & System Operations */}
            <motion.div
              whileHover={{ y: -5 }}
              className="relative overflow-hidden rounded-3xl min-w-[calc(100vw-48px)] w-[calc(100vw-48px)] min-h-[300px] snap-start flex-shrink-0 lg:min-w-0 lg:w-auto"
            >
              <BorderRotate
                borderRadius={24}
                borderWidth={2}
                animationSpeed={7}
                className="p-8 flex flex-col justify-between text-left h-full w-full bg-leaf-950/40"
              >
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-leaf-500">AI & Automation</span>
                <h3 className="text-xl font-bold text-white mt-2 mb-4">Systems & Portals</h3>

                <div className="mb-6">
                  <TheItemButton 
                    variant={showAllSystems ? "default" : "outline"} 
                    className={`w-full py-2.5 rounded-xl text-xs font-bold tracking-wider uppercase border border-leaf-500/20 transition-all duration-300 ${showAllSystems ? "bg-leaf-500 hover:bg-leaf-600 text-leaf-950" : "bg-neutral-900/40 hover:bg-leaf-500 hover:text-leaf-950 text-leaf-300"}`}
                    onClick={() => setShowAllSystems(!showAllSystems)}
                  >
                    {showAllSystems ? "Hide Prices & Details" : "Show Prices & Details"}
                  </TheItemButton>
                </div>
                
                {showAllSystems && (
                  <ItemGroup className="space-y-3 max-h-[220px] overflow-y-auto pr-2 scrollbar-thin mt-4">
                    <Item variant="outline" className="border-leaf-900/60 p-3.5 bg-transparent hover:bg-leaf-900/10 rounded-xl transition-all duration-300">
                      <ItemContent className="w-full">
                        <ItemTitle className="text-xs font-bold text-leaf-300 flex justify-between items-center w-full">
                          <span>Simple AI Chat / FAQ Setup</span>
                          <span className="text-white font-mono text-sm font-bold">$1,500</span>
                        </ItemTitle>
                        <ItemDescription className="text-[10px] text-leaf-400 mt-1 leading-normal font-light">Static business data assistant mapped to front-end chat widget.</ItemDescription>
                      </ItemContent>
                    </Item>

                    <Item variant="outline" className="border-leaf-900/60 p-3.5 bg-transparent hover:bg-leaf-900/10 rounded-xl transition-all duration-300">
                      <ItemContent className="w-full">
                        <ItemTitle className="text-xs font-bold text-leaf-300 flex justify-between items-center w-full">
                          <span>Client-Safe AI Assistant</span>
                          <span className="text-white font-mono text-sm font-bold">$2,500</span>
                        </ItemTitle>
                        <ItemDescription className="text-[10px] text-leaf-400 mt-1 leading-normal font-light">Guardrails-equipped assistant with context-based routing algorithms.</ItemDescription>
                      </ItemContent>
                    </Item>

                    <Item variant="outline" className="border-leaf-500/30 p-3.5 bg-leaf-500/5 hover:bg-leaf-500/10 rounded-xl transition-all duration-300 border-l-2 border-l-leaf-500">
                      <ItemContent className="w-full">
                        <ItemTitle className="text-xs font-bold text-leaf-100 flex justify-between items-center w-full">
                          <span className="flex items-center gap-1.5">
                            Role-Scoped Business Assistant
                            <Badge variant="success" size="xs" className="bg-leaf-500/20 text-leaf-300 border border-leaf-500/30 text-[8px] font-sans px-1 rounded">Popular</Badge>
                          </span>
                          <span className="text-leaf-400 font-mono text-sm font-bold">$5,500</span>
                        </ItemTitle>
                        <ItemDescription className="text-[10px] text-leaf-300 mt-1 leading-normal font-light">Internal workflow agent acting on designated system roles.</ItemDescription>
                      </ItemContent>
                    </Item>

                    <Item variant="outline" className="border-leaf-900/60 p-3.5 bg-transparent hover:bg-leaf-900/10 rounded-xl transition-all duration-300">
                      <ItemContent className="w-full">
                        <ItemTitle className="text-xs font-bold text-leaf-300 flex justify-between items-center w-full">
                          <span>Workflow Automation Starter</span>
                          <span className="text-white font-mono text-sm font-bold">$997</span>
                        </ItemTitle>
                        <ItemDescription className="text-[10px] text-leaf-400 mt-1 leading-normal font-light">Basic webhook setup between forms and Google Sheets/Email.</ItemDescription>
                      </ItemContent>
                    </Item>

                    <Item variant="outline" className="border-leaf-900/60 p-3.5 bg-transparent hover:bg-leaf-900/10 rounded-xl transition-all duration-300">
                      <ItemContent className="w-full">
                        <ItemTitle className="text-xs font-bold text-leaf-300 flex justify-between items-center w-full">
                          <span>Business Automation Package</span>
                          <span className="text-white font-mono text-sm font-bold">$3,500</span>
                        </ItemTitle>
                        <ItemDescription className="text-[10px] text-leaf-400 mt-1 leading-normal font-light">Advanced workflow scripts, data pipelines, and error monitors.</ItemDescription>
                      </ItemContent>
                    </Item>

                    <Item variant="outline" className="border-leaf-900/60 p-3.5 bg-transparent hover:bg-leaf-900/10 rounded-xl transition-all duration-300">
                      <ItemContent className="w-full">
                        <ItemTitle className="text-xs font-bold text-leaf-300 flex justify-between items-center w-full">
                          <span>Client Intake Form / Request Flow</span>
                          <span className="text-white font-mono text-sm font-bold">$750</span>
                        </ItemTitle>
                        <ItemDescription className="text-[10px] text-leaf-400 mt-1 leading-normal font-light">Clean customer upload & onboarding data collection forms.</ItemDescription>
                      </ItemContent>
                    </Item>

                    <Item variant="outline" className="border-leaf-900/60 p-3.5 bg-transparent hover:bg-leaf-900/10 rounded-xl transition-all duration-300">
                      <ItemContent className="w-full">
                        <ItemTitle className="text-xs font-bold text-leaf-300 flex justify-between items-center w-full">
                          <span>Client Intake + Routing Setup</span>
                          <span className="text-white font-mono text-sm font-bold">$1,500</span>
                        </ItemTitle>
                        <ItemDescription className="text-[10px] text-leaf-400 mt-1 leading-normal font-light">Forms combined with active notifications and lead sorting.</ItemDescription>
                      </ItemContent>
                    </Item>

                    <Item variant="outline" className="border-leaf-900/60 p-3.5 bg-transparent hover:bg-leaf-900/10 rounded-xl transition-all duration-300">
                      <ItemContent className="w-full">
                        <ItemTitle className="text-xs font-bold text-leaf-300 flex justify-between items-center w-full">
                          <span>CRM / Intake Readiness Setup</span>
                          <span className="text-white font-mono text-sm font-bold">$2,500</span>
                        </ItemTitle>
                        <ItemDescription className="text-[10px] text-leaf-400 mt-1 leading-normal font-light">Integration of lead data pipelines directly to HubSpot, Zoho, etc.</ItemDescription>
                      </ItemContent>
                    </Item>
                  </ItemGroup>
                )}
              </div>
              </BorderRotate>
            </motion.div>
          </div>
          
          {/* Mobile Scroll Indicator Dots */}
          <div className="flex justify-center gap-2 mt-4 lg:hidden">
            {[0, 1, 2].map((idx) => (
              <div
                key={idx}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activePricingCard === idx ? "w-6 bg-leaf-400" : "w-1.5 bg-neutral-800"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 5. CONTACT FUNNEL SECTION */}
      <section id="contact-funnel" className="relative px-6 lg:px-12 border-t border-leaf-900/30 min-h-[100dvh] lg:min-h-[calc(100vh-90px)] flex flex-col justify-start pt-20 pb-28 lg:py-8 lg:justify-center">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-6 lg:mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-leaf-500">Qualifying Flow</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mt-1 text-center">Free Speed & SEO <span className="text-leaf-400">Audit</span></h2>
            <p className="text-leaf-400 mt-2 font-light text-center">Complete our quick diagnostic questionnaire to queue your audit report callback with Collin Fraum.</p>
            {/* Rising Glow particle emitter */}
            <div className="w-full mt-2 flex justify-center">
              <RisingGlow
                particleCount={80}
                particleColor="#55b038"
                height={40}
                width="100%"
              />
            </div>
          </div>
          <LeadFunnel initialUrl={auditUrl} onComplete={(data) => {
            console.log("Lead qualification data:", data);
          }} />
        </div>
      </section>

      {/* 5. ESTIMATE REQUEST / FOOTER */}
      <footer id="estimate" className="relative bg-black border-t border-leaf-900/40 pt-16 pb-12 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
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
              <ul className="space-y-3 text-xs text-leaf-400 mb-6">
                <li>Email: <a href="mailto:afreshleaf@afreshleaf.com" className="hover:text-leaf-300 transition-colors">afreshleaf@afreshleaf.com</a></li>
                <li>Phone: <a href="tel:5613644688" className="hover:text-leaf-300 transition-colors">(561) 364-4688</a></li>
                <li>Location: Palm Beach County, FL</li>
              </ul>
              <div className="flex gap-4">
                <a href="https://www.instagram.com/afreshleaf" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-leaf-900/60 border border-leaf-800 text-leaf-400 hover:text-white transition-colors" aria-label="Instagram">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </a>
                <a href="https://facebook.com/afreshleaf" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-leaf-900/60 border border-leaf-800 text-leaf-400 hover:text-white transition-colors" aria-label="Facebook">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.8c4.56-.93 8-4.96 8-9.8z"/>
                  </svg>
                </a>
                <a href="https://x.com/afreshleaf" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-leaf-900/60 border border-leaf-800 text-leaf-400 hover:text-white transition-colors" aria-label="X">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/company/a-fresh-leaf" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-leaf-900/60 border border-leaf-800 text-leaf-400 hover:text-white transition-colors" aria-label="LinkedIn">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
 
          <div className="border-t border-leaf-900/40 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-leaf-400">
            <span>&copy; {new Date().getFullYear()} A Fresh Leaf. All rights reserved.</span>
            <div className="flex gap-6">
              <a href="#" className="hover:text-leaf-300 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-leaf-300 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Service Details Feature Modal */}
      <AnimatePresence>
        {selectedServiceForDetails && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedServiceForDetails(null)}
            className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-md flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              onClick={(e) => e.stopPropagation()}
              className="glass max-w-md w-full p-8 rounded-[32px] border border-leaf-500/20 text-left relative"
            >
              <button
                onClick={() => setSelectedServiceForDetails(null)}
                className="absolute top-4 right-4 text-leaf-400 hover:text-white transition-colors text-sm font-bold w-8 h-8 rounded-full bg-leaf-950/80 border border-leaf-900 flex items-center justify-center cursor-pointer"
              >
                ✕
              </button>
              <span className="text-[10px] font-bold uppercase tracking-widest text-leaf-500">Service Deliverables</span>
              <h3 className="text-xl font-serif font-bold text-white mt-2 mb-4">{selectedServiceForDetails.title}</h3>
              
              <ul className="space-y-3">
                {(serviceFeatures[selectedServiceForDetails.id] || []).map((feat, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-leaf-950/60 border border-leaf-800 flex items-center justify-center flex-shrink-0 text-leaf-400 text-[10px] mt-0.5">
                      ✓
                    </div>
                    <span className="text-xs text-leaf-200 leading-normal font-light">{feat}</span>
                  </li>
                ))}
              </ul>
              
              <button
                onClick={() => {
                  setSelectedServiceForDetails(null);
                  setCurrentPage("contact");
                  setTimeout(() => {
                    const element = document.getElementById("contact-funnel");
                    if (element) {
                      const headerOffset = 90;
                      const elementPosition = element.getBoundingClientRect().top;
                      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                      window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth"
                      });
                    }
                  }, 100);
                }}
                className="mt-8 w-full bg-leaf-500 hover:bg-leaf-600 text-leaf-950 font-bold py-3 rounded-2xl text-xs uppercase tracking-widest transition-all duration-300 shadow-lg text-center cursor-pointer"
              >
                Request This Service
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Live Portfolio Previewer Modal */}
      <AnimatePresence>
        {previewUrl && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] bg-black/90 backdrop-blur-md flex flex-col"
          >
            {/* Top Bar Controls */}
            <div className="w-full bg-neutral-950 border-b border-leaf-900/40 p-4 flex flex-col sm:flex-row gap-4 items-center justify-between z-20">
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold uppercase tracking-wider text-leaf-500">Live Client Showcase</span>
                <span className="text-leaf-800">|</span>
                <h3 className="text-sm font-semibold text-white">{previewTitle}</h3>
              </div>
              
              <div className="flex items-center gap-3">
                {/* Device Frame Toggles */}
                <div className="flex items-center gap-1.5 bg-leaf-950/60 border border-leaf-900 p-1 rounded-full">
                  <button
                    onClick={() => setDeviceFrame("desktop")}
                    className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider transition-colors cursor-pointer ${deviceFrame === "desktop" ? "bg-leaf-500 text-leaf-950" : "text-leaf-400 hover:text-white"}`}
                  >
                    Desktop
                  </button>
                  <button
                    onClick={() => setDeviceFrame("tablet")}
                    className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider transition-colors cursor-pointer ${deviceFrame === "tablet" ? "bg-leaf-500 text-leaf-950" : "text-leaf-400 hover:text-white"}`}
                  >
                    Tablet
                  </button>
                  <button
                    onClick={() => setDeviceFrame("mobile")}
                    className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider transition-colors cursor-pointer ${deviceFrame === "mobile" ? "bg-leaf-500 text-leaf-950" : "text-leaf-400 hover:text-white"}`}
                  >
                    Mobile
                  </button>
                </div>

                {/* Zoom / Scale Toggles */}
                <div className="flex items-center gap-1 bg-leaf-950/60 border border-leaf-900 p-1 rounded-full">
                  <button
                    onClick={() => setPreviewZoom(75)}
                    className={`px-2 py-0.5 rounded-full text-[9px] font-bold transition-colors cursor-pointer ${previewZoom === 75 ? "bg-leaf-500 text-leaf-950" : "text-leaf-400 hover:text-white"}`}
                  >
                    75%
                  </button>
                  <button
                    onClick={() => setPreviewZoom(90)}
                    className={`px-2 py-0.5 rounded-full text-[9px] font-bold transition-colors cursor-pointer ${previewZoom === 90 ? "bg-leaf-500 text-leaf-950" : "text-leaf-400 hover:text-white"}`}
                  >
                    90%
                  </button>
                  <button
                    onClick={() => setPreviewZoom(100)}
                    className={`px-2 py-0.5 rounded-full text-[9px] font-bold transition-colors cursor-pointer ${previewZoom === 100 ? "bg-leaf-500 text-leaf-950" : "text-leaf-400 hover:text-white"}`}
                  >
                    100%
                  </button>
                </div>
              </div>
              
              <button
                onClick={() => {
                  setPreviewUrl(null);
                  setPreviewTitle("");
                }}
                className="bg-leaf-900/80 border border-leaf-800 hover:border-leaf-500 text-leaf-300 hover:text-white font-bold px-4 py-1.5 rounded-full text-[10px] uppercase tracking-wider transition-all duration-300 cursor-pointer"
              >
                ✕ Close Preview
              </button>
            </div>
            
            {/* Frame Body */}
            <div className="flex-1 w-full flex items-center justify-center p-4 bg-neutral-900/50 overflow-auto">
              <div
                className="h-full bg-white rounded-2xl border border-leaf-900/40 overflow-hidden shadow-2xl transition-all duration-500"
                style={{
                  width: deviceFrame === "desktop" ? "100%" : deviceFrame === "tablet" ? "768px" : "375px",
                  maxWidth: "100%"
                }}
              >
                <iframe
                  src={previewUrl}
                  title={`Live preview of ${previewTitle}`}
                  className="border-none bg-white origin-top-left"
                  style={{
                    width: `${10000 / previewZoom}%`,
                    height: `${10000 / previewZoom}%`,
                    transform: `scale(${previewZoom / 100})`,
                  }}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Automated FTP Deployment Trigger v3
