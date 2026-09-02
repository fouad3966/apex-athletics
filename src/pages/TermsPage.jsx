import React from "react";
import AnimatedSection from "../components/AnimatedSection";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function TermsPage() {
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
              <span className="text-white">Terms of </span>
              <span className="gradient-text">Service</span>
            </h1>
            <p className="text-sm text-surface-500 mb-12">
              Last updated: January 1, 2025
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="prose prose-invert max-w-none space-y-8">
              <div>
                <h2 className="font-heading font-bold text-xl text-white mb-3">
                  1. Membership Agreement
                </h2>
                <p className="text-surface-400 leading-relaxed text-sm">
                  By purchasing a membership at APEX Athletics, you agree to abide
                  by these terms and conditions. Memberships are billed monthly and
                  auto-renew unless cancelled with 30 days written notice.
                </p>
              </div>

              <div>
                <h2 className="font-heading font-bold text-xl text-white mb-3">
                  2. Facility Rules
                </h2>
                <p className="text-surface-400 leading-relaxed text-sm">
                  Members must follow all posted facility rules, including proper
                  attire, equipment etiquette, and hygiene standards. APEX reserves
                  the right to revoke membership for violation of these rules.
                </p>
              </div>

              <div>
                <h2 className="font-heading font-bold text-xl text-white mb-3">
                  3. Assumption of Risk
                </h2>
                <p className="text-surface-400 leading-relaxed text-sm">
                  Physical exercise involves inherent risks. By using our
                  facilities and services, you acknowledge and accept these risks.
                  We recommend consulting with a healthcare provider before
                  beginning any new exercise program.
                </p>
              </div>

              <div>
                <h2 className="font-heading font-bold text-xl text-white mb-3">
                  4. Cancellation Policy
                </h2>
                <p className="text-surface-400 leading-relaxed text-sm">
                  You may cancel your membership at any time with 30 days notice.
                  No cancellation fees apply. Refunds for prepaid memberships will
                  be calculated on a pro-rata basis.
                </p>
              </div>

              <div>
                <h2 className="font-heading font-bold text-xl text-white mb-3">
                  5. Modifications
                </h2>
                <p className="text-surface-400 leading-relaxed text-sm">
                  APEX Athletics reserves the right to modify these terms at any
                  time. Members will be notified of significant changes via email.
                  Continued use of our services after changes constitutes acceptance
                  of the updated terms.
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
