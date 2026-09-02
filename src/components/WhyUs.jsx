import React from "react";
import AnimatedSection from "./AnimatedSection";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import nike from "../assets/nike.png";
import adidas from "../assets/adidas.png";
import newBalence from "../assets/nb.png";

const reasons = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    text: "Over 140+ Expert Coaches",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    text: "Train Smarter & Faster Than Before",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
      </svg>
    ),
    text: "1 Free Program for New Members",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    text: "Trusted by Reliable Partners",
  },
];

const partners = [
  { src: nike, name: "Nike" },
  { src: adidas, name: "Adidas" },
  { src: newBalence, name: "New Balance" },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="section-padding relative overflow-hidden">
      <div className="glow-orb w-[500px] h-[500px] bg-primary-500 bottom-[-200px] right-[-200px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Image Grid */}
          <AnimatedSection variant="fadeRight" className="flex-1">
            <div className="grid grid-cols-10 grid-rows-5 gap-3 h-[500px]">
              <div className="col-span-3 row-span-5 rounded-2xl overflow-hidden group">
                <img
                  src={image1}
                  alt="Strength training at APEX Athletics"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="col-span-7 row-span-3 rounded-2xl overflow-hidden group">
                <img
                  src={image2}
                  alt="Group workout session"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="col-span-4 row-span-2 rounded-2xl overflow-hidden group">
                <img
                  src={image3}
                  alt="Personal training session"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="col-span-3 row-span-2 rounded-2xl overflow-hidden group">
                <img
                  src={image4}
                  alt="Modern gym equipment"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </div>
          </AnimatedSection>

          {/* Text Content */}
          <div className="flex-1 flex flex-col gap-8">
            <AnimatedSection variant="fadeUp">
              <span className="inline-block text-sm font-semibold text-primary-400 uppercase tracking-[0.2em] mb-4">
                Why Choose Us
              </span>
              <h2 className="font-heading font-800 text-4xl sm:text-5xl leading-tight">
                <span className="stroke-text">Why </span>
                <span className="text-white">Choose</span>
                <br />
                <span className="gradient-text">APEX Athletics?</span>
              </h2>
            </AnimatedSection>

            <AnimatedSection variant="fadeUp" delay={0.15}>
              <div className="flex flex-col gap-4">
                {reasons.map((reason, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-primary-500/30 hover:bg-white/[0.04] transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-400 group-hover:bg-primary-500 group-hover:text-white transition-all duration-300 flex-shrink-0">
                      {reason.icon}
                    </div>
                    <span className="font-semibold text-surface-200 text-sm uppercase tracking-wide">
                      {reason.text}
                    </span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection variant="fadeUp" delay={0.3}>
              <div className="pt-6 border-t border-white/5">
                <h3 className="text-xs uppercase text-surface-500 tracking-[0.2em] mb-4 font-semibold">
                  Our Partners
                </h3>
                <div className="flex items-center gap-8">
                  {partners.map((partner, i) => (
                    <img
                      key={i}
                      className="w-10 opacity-40 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
                      src={partner.src}
                      alt={partner.name}
                    />
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
