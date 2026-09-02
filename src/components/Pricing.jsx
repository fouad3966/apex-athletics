import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { plansData } from "../data/plansData";

export default function Pricing() {
  return (
    <section id="plans" className="section-padding relative overflow-hidden">
      <div className="glow-orb w-[600px] h-[600px] bg-primary-500 top-[-200px] left-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-primary-400 uppercase tracking-[0.2em] mb-4">
            Pricing Plans
          </span>
          <h2 className="font-heading font-800 text-4xl sm:text-5xl lg:text-6xl leading-tight">
            <span className="stroke-text">Ready to Start </span>
            <span className="text-white">Your Journey</span>
            <br />
            <span className="gradient-text">With Us?</span>
          </h2>
          <p className="mt-4 text-surface-400 max-w-2xl mx-auto text-lg">
            Choose a plan that fits your goals. Every membership includes access
            to our state-of-the-art facility and supportive community.
          </p>
        </AnimatedSection>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-stretch">
          {plansData.map((plan, index) => {
            const isPremium = plan.name === "PREMIUM PLAN";
            return (
              <AnimatedSection
                key={index}
                variant="fadeUp"
                delay={index * 0.12}
              >
                <motion.div
                  className={`relative rounded-3xl p-8 h-full flex flex-col ${
                    isPremium
                      ? "bg-gradient-to-br from-primary-600 via-primary-500 to-accent-500 shadow-2xl shadow-primary-500/20 ring-1 ring-white/20"
                      : "glass-card"
                  }`}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                >
                  {/* Popular badge */}
                  {isPremium && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <div className="px-4 py-1.5 rounded-full bg-white text-primary-600 text-xs font-bold uppercase tracking-wider shadow-lg">
                        Most Popular
                      </div>
                    </div>
                  )}

                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                      isPremium
                        ? "bg-white/20 text-white"
                        : "bg-primary-500/10 text-primary-400"
                    }`}
                  >
                    <div className="w-7 h-7 fill-current">{plan.icon}</div>
                  </div>

                  {/* Plan Name */}
                  <h3
                    className={`font-heading font-bold uppercase tracking-wider text-sm mb-2 ${
                      isPremium ? "text-white/80" : "text-surface-400"
                    }`}
                  >
                    {plan.name}
                  </h3>

                  {/* Price */}
                  <div className="flex items-baseline gap-1 mb-8">
                    <span className="text-5xl font-heading font-bold text-white">
                      ${plan.price}
                    </span>
                    <span
                      className={`text-sm ${
                        isPremium ? "text-white/60" : "text-surface-500"
                      }`}
                    >
                      /month
                    </span>
                  </div>

                  {/* Features */}
                  <div className="flex flex-col gap-4 flex-1 mb-8">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div
                          className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                            isPremium
                              ? "bg-white/20"
                              : "bg-primary-500/10"
                          }`}
                        >
                          <svg
                            className={`w-3 h-3 ${
                              isPremium ? "text-white" : "text-primary-400"
                            }`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={3}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <span
                          className={`text-sm ${
                            isPremium ? "text-white/90" : "text-surface-300"
                          }`}
                        >
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Link
                    to="/contact"
                    className={`w-full py-4 rounded-xl font-semibold text-sm transition-all duration-300 text-center block ${
                      isPremium
                        ? "bg-white text-primary-600 hover:bg-white/90 hover:shadow-lg hover:shadow-white/20"
                        : "bg-white/5 text-white border border-white/10 hover:bg-primary-500 hover:border-primary-500 hover:shadow-lg hover:shadow-primary-500/20"
                    }`}
                  >
                    Get Started
                  </Link>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
