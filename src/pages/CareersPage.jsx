import React from "react";
import { Link } from "react-router-dom";
import AnimatedSection from "../components/AnimatedSection";
import Header from "../components/Header";
import Footer from "../components/Footer";

const openings = [
  {
    title: "Senior Strength Coach",
    type: "Full-time",
    location: "On-site • New York",
    desc: "Lead our strength training programs and mentor junior coaches. 5+ years experience required.",
  },
  {
    title: "HIIT & Group Fitness Instructor",
    type: "Full-time",
    location: "On-site • New York",
    desc: "Design and lead high-energy group fitness sessions. Must be certified with 2+ years experience.",
  },
  {
    title: "Nutritionist / Dietitian",
    type: "Part-time",
    location: "Hybrid",
    desc: "Provide personalized nutrition plans for our members. Registered Dietitian credential required.",
  },
  {
    title: "Front Desk & Member Experience",
    type: "Full-time",
    location: "On-site • New York",
    desc: "Be the first friendly face our members see. Help manage memberships, tours, and daily operations.",
  },
  {
    title: "Digital Marketing Specialist",
    type: "Full-time",
    location: "Remote",
    desc: "Drive our online presence through social media, content creation, and performance marketing campaigns.",
  },
];

const perks = [
  "Free gym membership for you and family",
  "Competitive salary + performance bonuses",
  "Health, dental, and vision insurance",
  "Flexible scheduling & paid time off",
  "Professional development budget",
  "Team retreats & wellness days",
];

export default function CareersPage() {
  return (
    <div className="bg-surface-950 min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="glow-orb w-[500px] h-[500px] bg-primary-500 top-[-200px] right-[-100px]" />
        <div className="max-w-7xl mx-auto relative z-10">
          <AnimatedSection>
            <span className="inline-block text-sm font-semibold text-primary-400 uppercase tracking-[0.2em] mb-4">
              Careers
            </span>
            <h1 className="font-heading font-900 text-5xl sm:text-6xl lg:text-7xl leading-[0.95] mb-6">
              <span className="text-white">Join the </span>
              <span className="gradient-text">APEX Team</span>
            </h1>
            <p className="text-lg text-surface-400 max-w-2xl leading-relaxed">
              We're building something extraordinary. If you're passionate about
              fitness and helping others reach their potential, we want to hear
              from you.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Perks */}
      <section className="px-6 pb-16">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="mb-12">
            <h2 className="font-heading font-800 text-3xl text-white">
              Why Work at <span className="gradient-text">APEX</span>
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {perks.map((perk, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="flex items-center gap-4 p-5 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-400 flex-shrink-0">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-sm text-surface-300 font-medium">
                    {perk}
                  </span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="px-6 pb-20">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="mb-12">
            <h2 className="font-heading font-800 text-3xl text-white">
              Open <span className="gradient-text">Positions</span>
            </h2>
          </AnimatedSection>
          <div className="flex flex-col gap-4">
            {openings.map((job, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="glass-card-hover rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group">
                  <div className="flex-1">
                    <h3 className="font-heading font-bold text-lg text-white mb-1">
                      {job.title}
                    </h3>
                    <p className="text-sm text-surface-400 mb-2">{job.desc}</p>
                    <div className="flex gap-3">
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary-500/10 text-primary-400 border border-primary-500/20">
                        {job.type}
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-surface-300 border border-white/10">
                        {job.location}
                      </span>
                    </div>
                  </div>
                  <Link
                    to="/contact"
                    className="btn-outline text-sm text-center whitespace-nowrap"
                  >
                    Apply Now
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
