import React from "react";
import { motion } from "framer-motion";
import Header from "./Header";
import heart from "../assets/heart.png";
import calories from "../assets/calories.png";

const heroImage = "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&h=1000&fit=crop";

const stats = [
  { value: "140+", label: "Expert Coaches" },
  { value: "978+", label: "Members Joined" },
  { value: "50+", label: "Fitness Programs" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-surface-950"
    >
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="glow-orb w-[600px] h-[600px] bg-primary-500 top-[-200px] right-[-100px]" />
        <div className="glow-orb w-[400px] h-[400px] bg-accent-500 bottom-[-100px] left-[-100px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,61,38,0.08)_0%,_transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(255,123,17,0.05)_0%,_transparent_60%)]" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <Header />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-28 sm:pt-32 pb-16 sm:pb-20 flex flex-col lg:flex-row items-center gap-8 lg:gap-12 min-h-screen">
        {/* Left Content */}
        <motion.div
          className="flex-1 flex flex-col gap-6 sm:gap-8 text-center lg:text-left items-center lg:items-start"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={itemVariants}>
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary-500" />
              </div>
              <span className="text-sm font-medium text-surface-300 tracking-wide">
                The #1 Fitness Destination in Town
              </span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.div variants={itemVariants}>
            <h1 className="font-heading font-900 text-4xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.95] tracking-tight">
              <span className="block text-white">Unleash</span>
              <span className="block gradient-text">Your Peak</span>
              <span className="block text-white">Potential</span>
            </h1>
          </motion.div>

          {/* Subtext */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-surface-400 max-w-lg leading-relaxed"
          >
            Transform your body and mind with world-class coaches, cutting-edge
            equipment, and programs designed to push you beyond every limit.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4">
            <button
              onClick={() => scrollTo("plans")}
              className="btn-primary inline-flex items-center gap-2"
            >
              <span>Start Your Journey</span>
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
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </button>
            <button
              onClick={() => scrollTo("programs")}
              className="btn-outline inline-flex items-center gap-2"
            >
              <span>Explore Programs</span>
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center lg:justify-start gap-6 sm:gap-12 pt-4 border-t border-white/10 mt-4 w-full"
          >
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-xl sm:text-3xl font-heading font-bold text-white">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm text-surface-400 uppercase tracking-wider mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right - Hero Image + floating cards */}
        <motion.div
          className="flex-1 relative flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Glow behind image */}
          <div className="absolute w-80 h-80 bg-primary-500/20 rounded-full blur-[100px]" />

          {/* Hero Image */}
          <div className="relative">
            <img
              src={heroImage}
              alt="Athlete performing exercise at APEX Athletics"
              className="relative z-10 w-72 sm:w-80 lg:w-96 h-[360px] sm:h-[400px] lg:h-[480px] object-cover rounded-3xl ring-1 ring-white/10 drop-shadow-2xl"
            />

            {/* Heart Rate Card */}
            <motion.div
              className="absolute -left-6 top-1/4 z-20 glass-card rounded-2xl p-4 flex flex-col gap-2"
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <img src={heart} className="w-8 h-8" alt="Heart rate icon" />
              <div className="text-xs text-surface-400">Heart Rate</div>
              <div className="text-xl font-bold font-heading text-white">
                116{" "}
                <span className="text-xs text-primary-400 font-normal">
                  bpm
                </span>
              </div>
            </motion.div>

            {/* Calories Card */}
            <motion.div
              className="absolute -right-4 bottom-1/4 z-20 glass-card rounded-2xl p-4 flex items-center gap-3"
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            >
              <img src={calories} className="w-10 h-14" alt="Calories icon" />
              <div className="flex flex-col">
                <div className="text-xs text-surface-400">Calories Burned</div>
                <div className="text-xl font-bold font-heading text-white">
                  220{" "}
                  <span className="text-xs text-accent-400 font-normal">
                    kcal
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-xs text-surface-500 tracking-widest uppercase">
          Scroll
        </span>
        <motion.div
          className="w-5 h-8 rounded-full border-2 border-surface-600 flex justify-center pt-1.5"
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-2 rounded-full bg-primary-500"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
