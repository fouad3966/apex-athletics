import React, { useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "../components/AnimatedSection";
import Header from "../components/Header";
import Footer from "../components/Footer";

const contactInfo = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Visit Us",
    details: ["123 Fitness Avenue", "Downtown District, NY 10001"],
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Email Us",
    details: ["hello@apexathletics.com", "support@apexathletics.com"],
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    title: "Call Us",
    details: ["+1 (555) 123-4567", "Mon–Fri: 6AM–10PM"],
  },
];

const faqs = [
  {
    q: "What are your operating hours?",
    a: "We're open Monday to Friday from 5:00 AM to 11:00 PM, and Saturday to Sunday from 7:00 AM to 9:00 PM. Premium members get 24/7 access.",
  },
  {
    q: "Do I need prior experience to join?",
    a: "Absolutely not! We welcome all fitness levels. Our coaches will assess your current fitness and create a personalized plan to help you progress safely.",
  },
  {
    q: "Can I freeze or cancel my membership?",
    a: "Yes, you can freeze your membership for up to 3 months per year. Cancellation requires a 30-day notice with no cancellation fees.",
  },
  {
    q: "Do you offer personal training sessions?",
    a: "Yes! All plans include group coaching. Private personal training sessions are available as add-ons, and Pro Plan members get complimentary private coaching.",
  },
];

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="bg-surface-950 min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="glow-orb w-[500px] h-[500px] bg-primary-500 top-[-200px] left-1/2" />
        <div className="max-w-7xl mx-auto relative z-10">
          <AnimatedSection>
            <span className="inline-block text-sm font-semibold text-primary-400 uppercase tracking-[0.2em] mb-4">
              Get in Touch
            </span>
            <h1 className="font-heading font-900 text-5xl sm:text-6xl lg:text-7xl leading-[0.95] mb-6">
              <span className="text-white">Contact </span>
              <span className="gradient-text">Us</span>
            </h1>
            <p className="text-lg text-surface-400 max-w-2xl leading-relaxed">
              Have questions about membership, programs, or anything else? We'd
              love to hear from you.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="px-6 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactInfo.map((info, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="glass-card rounded-2xl p-8 flex flex-col items-center text-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-primary-500/10 flex items-center justify-center text-primary-400">
                    {info.icon}
                  </div>
                  <h3 className="font-heading font-bold text-lg text-white">
                    {info.title}
                  </h3>
                  {info.details.map((d, j) => (
                    <p key={j} className="text-sm text-surface-400">
                      {d}
                    </p>
                  ))}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="px-6 pb-20">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <div className="glass-card rounded-3xl p-8 sm:p-12">
              <h2 className="font-heading font-bold text-2xl text-white mb-8">
                Send Us a Message
              </h2>
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-heading font-bold text-xl text-white mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-surface-400">
                    We'll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-surface-300 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-surface-500 focus:outline-none focus:border-primary-500/50 focus:bg-white/[0.07] transition-all duration-300"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-surface-300 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-surface-500 focus:outline-none focus:border-primary-500/50 focus:bg-white/[0.07] transition-all duration-300"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-surface-300 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-surface-500 focus:outline-none focus:border-primary-500/50 focus:bg-white/[0.07] transition-all duration-300"
                      placeholder="What's this about?"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-surface-300 mb-2">
                      Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-surface-500 focus:outline-none focus:border-primary-500/50 focus:bg-white/[0.07] transition-all duration-300 resize-none"
                      placeholder="Tell us more..."
                    />
                  </div>
                  <button type="submit" className="btn-primary self-start">
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-6 pb-20">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-heading font-800 text-3xl sm:text-4xl text-white">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
          </AnimatedSection>
          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div
                  className="glass-card rounded-2xl overflow-hidden cursor-pointer"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <div className="flex items-center justify-between p-6">
                    <h3 className="font-semibold text-white text-sm pr-4">
                      {faq.q}
                    </h3>
                    <motion.div
                      animate={{ rotate: openFaq === i ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex-shrink-0"
                    >
                      <svg
                        className="w-5 h-5 text-surface-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </motion.div>
                  </div>
                  <motion.div
                    initial={false}
                    animate={{
                      height: openFaq === i ? "auto" : 0,
                      opacity: openFaq === i ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-6 text-sm text-surface-400 leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
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
