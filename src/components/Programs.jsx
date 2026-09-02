import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { programsData } from "../data/programsData";

const cardHoverVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.03, transition: { duration: 0.3, ease: "easeOut" } },
};

export default function Programs() {
  return (
    <section id="programs" className="section-padding relative">
      {/* Background */}
      <div className="glow-orb w-[500px] h-[500px] bg-accent-500 top-0 left-[-200px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-primary-400 uppercase tracking-[0.2em] mb-4">
            Our Programs
          </span>
          <h2 className="font-heading font-800 text-4xl sm:text-5xl lg:text-6xl leading-tight">
            <span className="stroke-text">Explore Our </span>
            <span className="gradient-text">Programs</span>
          </h2>
          <p className="mt-4 text-surface-400 max-w-2xl mx-auto text-lg">
            Discover training programs crafted by elite coaches to help you
            achieve extraordinary results, no matter your fitness level.
          </p>
        </AnimatedSection>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programsData.map((card, index) => (
            <AnimatedSection
              key={index}
              variant="fadeUp"
              delay={index * 0.1}
            >
              <Link to={`/programs/${card.slug}`} className="block h-full">
                <motion.div
                  className="glass-card-hover rounded-2xl p-8 h-full flex flex-col gap-5 cursor-pointer group"
                  variants={cardHoverVariants}
                  initial="rest"
                  whileHover="hover"
                >
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 border border-primary-500/20 flex items-center justify-center text-primary-400 group-hover:from-primary-500 group-hover:to-accent-500 group-hover:text-white transition-all duration-300">
                    <div className="w-6 h-6 fill-current">{card.image}</div>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading font-bold text-xl text-white group-hover:gradient-text transition-colors duration-300">
                    {card.heading}
                  </h3>

                  {/* Description */}
                  <p className="text-surface-400 text-sm leading-relaxed flex-1">
                    {card.details}
                  </p>

                  {/* Link */}
                  <div className="flex items-center gap-2 text-sm font-semibold text-primary-400 group-hover:text-primary-300 transition-colors duration-300 mt-auto">
                    <span>Learn More</span>
                    <svg
                      className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </div>
                </motion.div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
