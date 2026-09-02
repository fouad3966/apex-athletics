import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import AnimatedSection from "../components/AnimatedSection";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { programsData } from "../data/programsData";

export default function ProgramDetailPage() {
  const { slug } = useParams();
  const program = programsData.find((p) => p.slug === slug);

  if (!program) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="bg-surface-950 min-h-screen">
      <Header />

      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="glow-orb w-[600px] h-[600px] bg-primary-500 top-[-200px] right-[-200px]" />
        <div className="glow-orb w-[400px] h-[400px] bg-accent-500 bottom-[-100px] left-[-100px]" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Breadcrumb */}
          <AnimatedSection>
            <div className="flex items-center gap-2 text-sm text-surface-500 mb-8">
              <Link
                to="/"
                className="hover:text-primary-400 transition-colors"
              >
                Home
              </Link>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
              <Link
                to="/#programs"
                className="hover:text-primary-400 transition-colors"
              >
                Programs
              </Link>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-surface-300">{program.heading}</span>
            </div>
          </AnimatedSection>

          <div className="flex flex-col lg:flex-row items-start gap-16">
            {/* Left — Main Info */}
            <div className="flex-1">
              <AnimatedSection>
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white mb-8">
                  <div className="w-10 h-10 fill-current">{program.image}</div>
                </div>
                <h1 className="font-heading font-900 text-5xl sm:text-6xl lg:text-7xl leading-[0.95] mb-6">
                  <span className="gradient-text">{program.heading}</span>
                </h1>
                <p className="text-lg text-surface-400 max-w-2xl leading-relaxed">
                  {program.fullDescription}
                </p>
              </AnimatedSection>

              {/* Quick Stats */}
              <AnimatedSection delay={0.15} className="mt-10">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    {
                      label: "Duration",
                      value: program.duration,
                      icon: (
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      ),
                    },
                    {
                      label: "Frequency",
                      value: program.frequency,
                      icon: (
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      ),
                    },
                    {
                      label: "Level",
                      value: program.level,
                      icon: (
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                      ),
                    },
                  ].map((stat, i) => (
                    <div
                      key={i}
                      className="glass-card rounded-2xl p-5 flex flex-col gap-2"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-400">
                        {stat.icon}
                      </div>
                      <span className="text-xs text-surface-500 uppercase tracking-wider font-semibold">
                        {stat.label}
                      </span>
                      <span className="text-white font-heading font-bold text-lg">
                        {stat.value}
                      </span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>

            {/* Right — CTA Sidebar */}
            <AnimatedSection variant="fadeLeft" delay={0.2} className="w-full lg:w-80 flex-shrink-0">
              <div className="glass-card rounded-3xl p-8 sticky top-28">
                <h3 className="font-heading font-bold text-xl text-white mb-2">
                  Ready to Start?
                </h3>
                <p className="text-sm text-surface-400 mb-6">
                  Join the {program.heading} program and start transforming your
                  body today.
                </p>
                <Link
                  to="/#plans"
                  className="btn-primary w-full flex items-center justify-center gap-2 mb-4"
                >
                  <span>Choose a Plan</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link
                  to="/contact"
                  className="btn-outline w-full flex items-center justify-center"
                >
                  <span>Ask a Question</span>
                </Link>
                <div className="mt-8 pt-6 border-t border-white/10">
                  <h4 className="text-xs text-surface-500 uppercase tracking-wider font-semibold mb-4">
                    Equipment Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {program.equipment.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1.5 rounded-lg text-xs font-medium bg-white/5 text-surface-300 border border-white/5"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="mb-12">
            <h2 className="font-heading font-800 text-3xl sm:text-4xl text-white">
              Key <span className="gradient-text">Benefits</span>
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {program.benefits.map((benefit, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <motion.div
                  className="glass-card-hover rounded-2xl p-6 flex items-start gap-4 h-full"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-surface-300 text-sm leading-relaxed">
                    {benefit}
                  </p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Weekly Schedule */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="mb-12">
            <h2 className="font-heading font-800 text-3xl sm:text-4xl text-white">
              Weekly <span className="gradient-text">Schedule</span>
            </h2>
            <p className="text-surface-400 mt-3 max-w-xl">
              A sample training week. Your coach will adapt this based on your
              fitness level and goals.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {program.schedule.map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="glass-card rounded-2xl p-6 group hover:border-primary-500/30 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-primary-500/10 flex items-center justify-center">
                      <span className="text-sm font-bold text-primary-400">
                        {item.day.slice(0, 2)}
                      </span>
                    </div>
                    <span className="text-white font-heading font-bold">
                      {item.day}
                    </span>
                  </div>
                  <p className="text-sm text-surface-400 leading-relaxed">
                    {item.focus}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Other Programs */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="mb-12">
            <h2 className="font-heading font-800 text-3xl sm:text-4xl text-white">
              Explore Other <span className="gradient-text">Programs</span>
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {programsData
              .filter((p) => p.slug !== slug)
              .map((p, i) => (
                <AnimatedSection key={i} delay={i * 0.1}>
                  <Link to={`/programs/${p.slug}`}>
                    <motion.div
                      className="glass-card-hover rounded-2xl p-8 flex flex-col gap-4 group"
                      whileHover={{ y: -6, transition: { duration: 0.25 } }}
                    >
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 border border-primary-500/20 flex items-center justify-center text-primary-400 group-hover:from-primary-500 group-hover:to-accent-500 group-hover:text-white transition-all duration-300">
                        <div className="w-6 h-6 fill-current">{p.image}</div>
                      </div>
                      <h3 className="font-heading font-bold text-lg text-white">
                        {p.heading}
                      </h3>
                      <p className="text-sm text-surface-400 leading-relaxed">
                        {p.details}
                      </p>
                      <div className="flex items-center gap-2 text-sm font-semibold text-primary-400">
                        <span>Learn More</span>
                        <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </div>
                    </motion.div>
                  </Link>
                </AnimatedSection>
              ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
