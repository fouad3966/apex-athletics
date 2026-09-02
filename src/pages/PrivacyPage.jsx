import React from "react";
import AnimatedSection from "../components/AnimatedSection";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function PrivacyPage() {
  return (
    <div className="bg-surface-950 min-h-screen">
      <Header />
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto relative z-10">
          <AnimatedSection>
            <span className="inline-block text-sm font-semibold text-primary-400 uppercase tracking-[0.2em] mb-4">
              Legal
            </span>
            <h1 className="font-heading font-900 text-5xl sm:text-6xl leading-[0.95] mb-8">
              <span className="text-white">Privacy </span>
              <span className="gradient-text">Policy</span>
            </h1>
            <p className="text-sm text-surface-500 mb-12">
              Last updated: January 1, 2025
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="prose prose-invert max-w-none space-y-8">
              <div>
                <h2 className="font-heading font-bold text-xl text-white mb-3">
                  1. Information We Collect
                </h2>
                <p className="text-surface-400 leading-relaxed text-sm">
                  We collect information you provide directly, including your name,
                  email address, phone number, payment information, and fitness
                  goals when you create an account or purchase a membership. We also
                  collect usage data such as workout history, app interactions, and
                  device information to improve your experience.
                </p>
              </div>

              <div>
                <h2 className="font-heading font-bold text-xl text-white mb-3">
                  2. How We Use Your Information
                </h2>
                <p className="text-surface-400 leading-relaxed text-sm">
                  We use your information to provide and improve our services,
                  personalize your training programs, process payments, communicate
                  with you about your membership, and send relevant updates about
                  new programs and promotions (with your consent).
                </p>
              </div>

              <div>
                <h2 className="font-heading font-bold text-xl text-white mb-3">
                  3. Data Security
                </h2>
                <p className="text-surface-400 leading-relaxed text-sm">
                  We implement industry-standard security measures including
                  encryption, secure servers, and regular security audits to protect
                  your personal information. However, no method of transmission over
                  the internet is 100% secure.
                </p>
              </div>

              <div>
                <h2 className="font-heading font-bold text-xl text-white mb-3">
                  4. Your Rights
                </h2>
                <p className="text-surface-400 leading-relaxed text-sm">
                  You have the right to access, correct, or delete your personal
                  data at any time. You can also opt out of marketing communications
                  and request a copy of your data. Contact us at
                  privacy@apexathletics.com for any data-related requests.
                </p>
              </div>

              <div>
                <h2 className="font-heading font-bold text-xl text-white mb-3">
                  5. Contact Us
                </h2>
                <p className="text-surface-400 leading-relaxed text-sm">
                  If you have any questions about this Privacy Policy, please
                  contact us at privacy@apexathletics.com or write to us at 123
                  Fitness Avenue, Downtown District, NY 10001.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
      <Footer />
    </div>
  );
}
