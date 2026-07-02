"use client";
import { Card, CardContent, CardFooter } from "./card";
import { TimelineContent } from "./timeline-animation";
import { VerticalCutReveal } from "./vertical-cut-reveal";
import { cn } from "../../lib/utils";
import NumberFlow from "@number-flow/react";
import { Briefcase, CheckCheck, Database, Server } from "lucide-react";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

const plans = [
  {
    name: "Starter",
    description:
      "Great for small businesses and startups looking to get started with AI",
    price: 12,
    yearlyPrice: 99,
    buttonText: "Get started",
    buttonVariant: "outline" as const,
    features: [
      { text: "Up to 10 boards per workspace", icon: <Briefcase size={20} /> },
      { text: "Up to 10GB storage", icon: <Database size={20} /> },
      { text: "Limited analytics", icon: <Server size={20} /> },
    ],
    includes: [
      "Free includes:",
      "Unlimted Cards",
      "Custom background & stickers",
      "2-factor authentication",
    ],
  },
  {
    name: "Business",
    description:
      "Best value for growing businesses that need more advanced features",
    price: 48,
    yearlyPrice: 399,
    buttonText: "Get started",
    buttonVariant: "outline" as const,
    features: [
      { text: "Unlimted boards", icon: <Briefcase size={20} /> },
      { text: "Storage (250MB/file)", icon: <Database size={20} /> },
      { text: "100 workspace command runs", icon: <Server size={20} /> },
    ],
    includes: [
      "Everything in Starter, plus:",
      "Advanced checklists",
      "Custom fields",
      "Servedless functions",
    ],
  },
  {
    name: "Enterprise",
    description:
      "Advanced plan with enhanced security and unlimited access for large teams",
    price: 96,
    yearlyPrice: 899,
    popular: true,
    buttonText: "Get started",
    buttonVariant: "default" as const,
    features: [
      { text: "Unlimited board", icon: <Briefcase size={20} /> },
      { text: "Unlimited storage ", icon: <Database size={20} /> },
      { text: "Unlimited workspaces", icon: <Server size={20} /> },
    ],
    includes: [
      "Everything in Business, plus:",
      "Multi-board management",
      "Multi-board guest",
      "Attachment permissions",
    ],
  },
];

const PricingSwitch = ({
  onSwitch,
  className,
}: {
  onSwitch: (value: string) => void;
  className?: string;
}) => {
  const [selected, setSelected] = useState("0");

  const handleSwitch = (value: string) => {
    setSelected(value);
    onSwitch(value);
  };

  return (
    <div className={cn("flex justify-center", className)}>
      <div className="relative z-10 mx-auto flex w-fit rounded-full bg-neutral-900 border border-leaf-800 p-1">
        <button
          onClick={() => handleSwitch("0")}
          className={cn(
            "relative z-10 w-fit sm:h-12 cursor-pointer h-10 rounded-full sm:px-6 px-3 sm:py-2 py-1 font-medium transition-colors",
            selected === "0"
              ? "text-leaf-950"
              : "text-leaf-300 hover:text-white",
          )}
        >
          {selected === "0" && (
            <motion.span
              layoutId={"switch"}
              className="absolute top-0 left-0 sm:h-12 h-10 w-full rounded-full border-4 shadow-sm shadow-leaf-900 border-leaf-700 bg-gradient-to-t from-leaf-400 via-leaf-500 to-leaf-600"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          <span className="relative">Monthly</span>
        </button>

        <button
          onClick={() => handleSwitch("1")}
          className={cn(
            "relative z-10 w-fit cursor-pointer sm:h-12 h-10 flex-shrink-0 rounded-full sm:px-6 px-3 sm:py-2 py-1 font-medium transition-colors",
            selected === "1"
              ? "text-leaf-950"
              : "text-leaf-300 hover:text-white",
          )}
        >
          {selected === "1" && (
            <motion.span
              layoutId={"switch"}
              className="absolute top-0 left-0 sm:h-12 h-10 w-full rounded-full border-4 shadow-sm shadow-leaf-900 border-leaf-700 bg-gradient-to-t from-leaf-400 via-leaf-500 to-leaf-600"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          <span className="relative flex items-center gap-2">
            Yearly
            <span className="rounded-full bg-leaf-900/60 border border-leaf-700 px-2 py-0.5 text-xs font-semibold text-leaf-300">
              Save 20%
            </span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default function PricingSection4() {
  const [isYearly, setIsYearly] = useState(false);
  const pricingRef = useRef<HTMLDivElement>(null);

  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.4,
        duration: 0.5,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: -20,
      opacity: 0,
    },
  };

  const togglePricingPeriod = (value: string) =>
    setIsYearly(Number.parseInt(value) === 1);

  return (
    <div
      className="px-4 py-20 max-w-7xl mx-auto relative text-leaf-100"
      ref={pricingRef}
    >
      <article className="flex sm:flex-row flex-col sm:pb-8 pb-4 sm:items-center items-start justify-between">
        <div className="text-left mb-6">
          <h2 className="text-4xl font-extrabold leading-[130%] text-white mb-4">
            <VerticalCutReveal
              splitBy="words"
              staggerDuration={0.15}
              staggerFrom="first"
              reverse={true}
              containerClassName="justify-start"
              transition={{
                type: "spring",
                stiffness: 250,
                damping: 40,
                delay: 0,
              }}
            >
              Plans & Pricing
            </VerticalCutReveal>
          </h2>

          <TimelineContent
            as="p"
            animationNum={0}
            timelineRef={pricingRef}
            customVariants={revealVariants}
            className="text-leaf-300 w-[80%] font-light"
          >
            Trusted by teams all around the world. Explore our flexible pricing plans designed to scale with your business.
          </TimelineContent>
        </div>

        <TimelineContent
          as="div"
          animationNum={1}
          timelineRef={pricingRef}
          customVariants={revealVariants}
        >
          <PricingSwitch onSwitch={togglePricingPeriod} className="shrink-0" />
        </TimelineContent>
      </article>

      <TimelineContent
        as="div"
        animationNum={2}
        timelineRef={pricingRef}
        customVariants={revealVariants}
        className="grid md:grid-cols-3 gap-6 mx-auto bg-leaf-950/40 border border-leaf-900/40 sm:p-6 rounded-3xl backdrop-blur-md"
      >
        {plans.map((plan, index) => (
          <TimelineContent
            as="div"
            key={plan.name}
            animationNum={index + 3}
            timelineRef={pricingRef}
            customVariants={revealVariants}
          >
            <Card
              className={`relative flex-col flex justify-between p-6 h-full rounded-2xl transition-all duration-300 ${
                plan.popular
                  ? "scale-105 border-2 border-leaf-500 bg-gradient-to-b from-leaf-900 to-leaf-950 text-white shadow-[0_0_20px_rgba(90,200,120,0.15)]"
                  : "border border-leaf-900/60 bg-leaf-950/20 text-leaf-100 hover:border-leaf-800/80"
              }`}
            >
              <CardContent className="pt-0">
                <div className="space-y-2 pb-4">
                  {plan.popular && (
                    <div className="pt-2">
                      <span className="bg-leaf-500 text-leaf-950 px-3 py-1 rounded-full text-xs font-extrabold tracking-wider uppercase">
                        Popular
                      </span>
                    </div>
                  )}

                  <div className="flex items-baseline pt-2">
                    <span className="text-4xl font-extrabold text-white flex items-baseline">
                      $
                      <NumberFlow
                        format={{
                          minimumFractionDigits: 0,
                        }}
                        value={isYearly ? plan.yearlyPrice : plan.price}
                        className="text-4xl font-extrabold text-white"
                      />
                    </span>
                    <span
                      className={
                        plan.popular
                          ? "text-leaf-300 ml-1 text-sm"
                          : "text-leaf-400 ml-1 text-sm"
                      }
                    >
                      /{isYearly ? "year" : "month"}
                    </span>
                  </div>
                </div>

                <div className="flex justify-between mt-2">
                  <h3 className="text-2xl font-bold mb-2 text-white">{plan.name}</h3>
                </div>
                <p
                  className={
                    plan.popular
                      ? "text-sm text-leaf-300 mb-6 font-light"
                      : "text-sm text-leaf-400 mb-6 font-light"
                  }
                >
                  {plan.description}
                </p>

                <div className="space-y-4 pt-6 border-t border-leaf-900/60">
                  <h4 className="font-bold text-sm text-white mb-3">
                    {plan.includes[0]}
                  </h4>
                  <ul className="space-y-3">
                    {plan.includes.slice(1).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <span
                          className={
                            plan.popular
                              ? "text-leaf-950 h-5 w-5 bg-leaf-500 rounded-full grid place-content-center mt-0.5 mr-3 flex-shrink-0"
                              : "text-leaf-500 h-5 w-5 bg-leaf-950/80 border border-leaf-800 rounded-full grid place-content-center mt-0.5 mr-3 flex-shrink-0"
                          }
                        >
                          <CheckCheck className="h-3 w-3" />
                        </span>
                        <span
                          className={
                            plan.popular
                              ? "text-sm text-leaf-200 font-light"
                              : "text-sm text-leaf-300 font-light"
                          }
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
              <CardFooter className="pt-6">
                <button
                  className={`w-full py-3 rounded-xl font-bold text-sm transition-all duration-300 ${
                    plan.popular
                      ? "bg-leaf-500 hover:bg-leaf-600 text-leaf-950 shadow-md shadow-leaf-900/20"
                      : "bg-leaf-950 hover:bg-leaf-900 border border-leaf-800 text-leaf-200"
                  }`}
                >
                  {plan.buttonText}
                </button>
              </CardFooter>
            </Card>
          </TimelineContent>
        ))}
      </TimelineContent>
    </div>
  );
}
