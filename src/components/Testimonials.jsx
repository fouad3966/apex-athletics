import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { testimonialsData } from "../data/testimonialsData";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const next = () =>
    setCurrent((prev) => (prev + 1) % testimonialsData.length);
  const prev = () =>
    setCurrent(
      (prev) =>
        (prev - 1 + testimonialsData.length) % testimonialsData.length
    );

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  const testimonial = testimonialsData[current];

  return (
    <section
      id="testimonials"
      className="section-padding relative overflow-hidden"
    >
      <div className="glow-orb w-[500px] h-[500px] bg-accent-500 top-[-100px] right-[-200px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Left Side */}
          <div className="flex-1">
            <AnimatedSection>
              <span className="inline-block text-sm font-semibold text-primary-400 uppercase tracking-[0.2em] mb-4">
                Testimonials
              </span>
              <h2 className="font-heading font-800 text-4xl sm:text-5xl leading-tight mb-8">
                <span className="stroke-text">What They </span>
                <span className="text-white">Say</span>
                <br />
                <span className="gradient-text">About Us</span>
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="relative min-h-[200px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                  >
                    {/* Quote icon */}
                    <svg
                      className="w-10 h-10 text-primary-500/30 mb-4"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                    >
                      <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z" />
                    </svg>

                    <p className="text-lg text-surface-300 leading-relaxed mb-6 italic">
                      "{testimonial.review}"
                    </p>

                    <div className="flex items-center gap-4">
                      <img
                        src={testimonial.image}
                        alt={`${testimonial.name} — ${testimonial.status}`}
                        className="w-12 h-12 rounded-full object-cover ring-2 ring-primary-500/30"
                      />
                      <div>
                        <div className="font-heading font-bold text-white">
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-primary-400">
                          {testimonial.status}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Navigation */}
              <div className="flex items-center gap-4 mt-8">
                <button
                  onClick={prev}
                  className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:bg-white/10 transition-colors duration-300"
                  aria-label="Previous testimonial"
                >
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <div className="flex gap-2">
                  {testimonialsData.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrent(i)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        i === current
                          ? "w-8 bg-gradient-to-r from-primary-500 to-accent-500"
                          : "w-2 bg-surface-700 hover:bg-surface-600"
                      }`}
                      aria-label={`Go to testimonial ${i + 1}`}
                    />
                  ))}
                </div>
                <button
                  onClick={next}
                  className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:bg-white/10 transition-colors duration-300"
                  aria-label="Next testimonial"
                >
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </AnimatedSection>
          </div>

          {/* Right Side - Featured Image */}
          <AnimatedSection variant="fadeLeft" className="flex-1 hidden lg:flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-3xl blur-3xl" />
              <img
                src={testimonial.image}
                alt={`${testimonial.name} — ${testimonial.status}`}
                className="relative w-80 h-96 object-cover rounded-3xl shadow-2xl ring-1 ring-white/10"
              />
            </div>
          </AnimatedSection>
        </div>

        {/* CTA Section */}
        <AnimatedSection className="mt-24">
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-600 via-primary-500 to-accent-500 opacity-90" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.1)_0%,_transparent_60%)]" />

            <div className="relative z-10 px-8 py-16 sm:px-16 flex flex-col sm:flex-row items-center justify-between gap-8">
              <div>
                <h2 className="font-heading font-800 text-3xl sm:text-4xl text-white mb-3">
                  Ready to Level Up Your Body?
                </h2>
                <p className="text-white/70 text-lg max-w-lg">
                  Join thousands of members who transformed their lives. Your
                  journey starts today.
                </p>
              </div>
              {subscribed ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center gap-3 px-6 py-4 rounded-xl bg-white/20 backdrop-blur-sm"
                >
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white font-semibold">
                    You're in! We'll be in touch.
                  </span>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubscribe}
                  className="flex flex-col sm:flex-row items-stretch gap-3 w-full sm:w-auto"
                >
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    aria-label="Email address for newsletter"
                    className="px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/40 focus:bg-white/15 transition-all duration-300 min-w-[260px] backdrop-blur-sm"
                  />
                  <button
                    type="submit"
                    className="px-8 py-4 rounded-xl bg-white text-primary-600 font-bold hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap"
                  >
                    Join Now
                  </button>
                </form>
              )}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
