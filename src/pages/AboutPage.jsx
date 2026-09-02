import React from "react";
import { Link } from "react-router-dom";
import AnimatedSection from "../components/AnimatedSection";
import Header from "../components/Header";
import Footer from "../components/Footer";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";

const values = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Peak Performance",
    desc: "We don't believe in shortcuts. Every program, every session, every rep is designed to push you toward excellence.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Community First",
    desc: "Fitness is better together. Our community of athletes, coaches, and members supports each other every step of the way.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "Innovation",
    desc: "From AI-powered training analytics to recovery science, we integrate cutting-edge technology into every aspect of your journey.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "Holistic Wellness",
    desc: "True fitness goes beyond the gym. We focus on nutrition, mental health, recovery, and lifestyle to help you thrive in every area.",
  },
];

const timeline = [
  { year: "2018", event: "APEX Athletics founded with a single location and a vision to redefine fitness." },
  { year: "2020", event: "Expanded to 5 locations and launched our digital training platform." },
  { year: "2022", event: "Surpassed 10,000 members and partnered with Nike, Adidas, and New Balance." },
  { year: "2024", event: "Introduced AI-powered personal training and recovery science labs." },
];

export default function AboutPage() {
  return (
    <div className="bg-surface-950 min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="glow-orb w-[600px] h-[600px] bg-primary-500 top-[-200px] right-[-200px]" />
        <div className="max-w-7xl mx-auto relative z-10">
          <AnimatedSection>
            <span className="inline-block text-sm font-semibold text-primary-400 uppercase tracking-[0.2em] mb-4">
              About Us
            </span>
            <h1 className="font-heading font-900 text-5xl sm:text-6xl lg:text-7xl leading-[0.95] mb-6">
              <span className="text-white">We Are </span>
              <span className="gradient-text">APEX</span>
            </h1>
            <p className="text-lg text-surface-400 max-w-2xl leading-relaxed">
              More than a gym — we're a movement. Founded on the belief that
              everyone has untapped potential, APEX Athletics brings together
              elite coaching, cutting-edge facilities, and an unshakeable
              community to help you become the strongest version of yourself.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Image + Story */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <AnimatedSection variant="fadeRight" className="flex-1">
              <div className="grid grid-cols-2 gap-4">
                <img src={image1} alt="Training at APEX" className="rounded-2xl h-64 w-full object-cover" />
                <img src={image2} alt="Community at APEX" className="rounded-2xl h-64 w-full object-cover mt-8" />
                <img src={image3} alt="Coaching at APEX" className="rounded-2xl h-64 w-full object-cover col-span-2" />
              </div>
            </AnimatedSection>
            <AnimatedSection variant="fadeLeft" className="flex-1 flex flex-col gap-6">
              <h2 className="font-heading font-800 text-3xl sm:text-4xl text-white">
                Our Story
              </h2>
              <p className="text-surface-400 leading-relaxed">
                What started as a small warehouse gym in 2018 has grown into one of
                the most respected fitness brands in the country. Our founder, a
                former competitive athlete, was frustrated by the gap between
                professional-level training and what was available to everyday
                people.
              </p>
              <p className="text-surface-400 leading-relaxed">
                APEX Athletics was born to bridge that gap — to give every member
                access to the same caliber of coaching, equipment, and programming
                that elite athletes use. Today, with over 10,000 members across
                multiple locations, we're proud to say we've helped thousands of
                people transform their lives.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 className="font-heading font-800 text-4xl sm:text-5xl text-white">
              Our <span className="gradient-text">Values</span>
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="glass-card-hover rounded-2xl p-8 h-full flex flex-col gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center text-primary-400">
                    {v.icon}
                  </div>
                  <h3 className="font-heading font-bold text-lg text-white">{v.title}</h3>
                  <p className="text-sm text-surface-400 leading-relaxed">{v.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="px-6 pb-20">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 className="font-heading font-800 text-4xl text-white">
              Our <span className="gradient-text">Journey</span>
            </h2>
          </AnimatedSection>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500 to-accent-500 opacity-30" />
            {timeline.map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.15} className="relative pl-20 pb-12 last:pb-0">
                <div className="absolute left-5 top-1 w-7 h-7 rounded-full bg-surface-950 border-2 border-primary-500 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-primary-500" />
                </div>
                <span className="text-sm font-bold text-primary-400 tracking-wider">{item.year}</span>
                <p className="text-surface-300 mt-1">{item.event}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-20">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="relative rounded-3xl overflow-hidden text-center">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-accent-500 opacity-90" />
              <div className="relative z-10 px-8 py-16">
                <h2 className="font-heading font-800 text-3xl sm:text-4xl text-white mb-4">
                  Ready to Join the Movement?
                </h2>
                <p className="text-white/70 text-lg mb-8 max-w-lg mx-auto">
                  Your transformation starts with a single step. Let's take it together.
                </p>
                <Link to="/#plans" className="btn-primary inline-block">
                  <span>View Membership Plans</span>
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
