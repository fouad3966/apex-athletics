import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { gymImages } from "../data/imageLibrary";

const pages = [
  {
    to: "/about",
    title: "About Us",
    subtitle: "Our Story & Mission",
    description:
      "Discover how APEX Athletics went from a small warehouse gym to one of the most respected fitness brands in the country.",
    image: gymImages.aboutUs,
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
  {
    to: "/coaches",
    title: "Our Coaches",
    subtitle: "Meet the Experts",
    description:
      "Train with certified professionals who bring decades of experience in strength, cardio, nutrition, and sports science.",
    image: gymImages.ourCoaches,
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
  },
  {
    to: "/careers",
    title: "Careers",
    subtitle: "Join the Team",
    description:
      "We're always looking for passionate people. Explore open positions and become part of the APEX family.",
    image: gymImages.careers,
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
      </svg>
    ),
  },
  {
    to: "/contact",
    title: "Contact",
    subtitle: "Get in Touch",
    description:
      "Questions about memberships, programs, or anything else? Reach out — we'd love to hear from you.",
    image: gymImages.contact,
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
];

export default function DiscoverSection() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="glow-orb w-[500px] h-[500px] bg-primary-500 bottom-[-200px] left-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-primary-400 uppercase tracking-[0.2em] mb-4">
            Discover More
          </span>
          <h2 className="font-heading font-800 text-4xl sm:text-5xl lg:text-6xl leading-tight">
            <span className="text-white">Get to Know </span>
            <span className="gradient-text">APEX</span>
          </h2>
          <p className="mt-4 text-surface-400 max-w-2xl mx-auto text-lg">
            More than a gym — we're a community, a team, and a movement. 
            Explore everything APEX Athletics has to offer.
          </p>
        </AnimatedSection>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pages.map((page, i) => (
            <AnimatedSection key={i} variant="fadeUp" delay={i * 0.1}>
              <Link to={page.to} className="block group">
                <motion.div
                  className="relative rounded-3xl overflow-hidden h-60 sm:h-80 flex items-end"
                  whileHover={{ y: -6, transition: { duration: 0.3 } }}
                >
                  {/* Background Image */}
                  <img
                    src={page.image}
                    alt={page.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-950 via-surface-950/70 to-transparent" />
                  {/* Hover glow */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Content */}
                  <div className="relative z-10 p-8 w-full">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center text-primary-400 group-hover:bg-primary-500 group-hover:text-white transition-all duration-300">
                            {page.icon}
                          </div>
                          <div>
                            <h3 className="font-heading font-bold text-xl text-white">
                              {page.title}
                            </h3>
                            <span className="text-xs text-primary-400 font-semibold uppercase tracking-wider">
                              {page.subtitle}
                            </span>
                          </div>
                        </div>
                        <p className="text-sm text-surface-300 leading-relaxed max-w-md">
                          {page.description}
                        </p>
                      </div>

                      {/* Arrow */}
                      <div className="w-12 h-12 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center text-surface-400 group-hover:bg-primary-500 group-hover:text-white group-hover:border-primary-500 transition-all duration-300 flex-shrink-0 mt-1">
                        <svg
                          className="w-5 h-5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M7 17L17 7M17 7H7M17 7v10"
                          />
                        </svg>
                      </div>
                    </div>
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
