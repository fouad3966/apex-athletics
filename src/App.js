import React, { Suspense, lazy, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import "./App.css";
import ErrorBoundary from "./components/ErrorBoundary";
import Chatbot from "./components/Chatbot";

// Eager load homepage components (above the fold)
import Hero from "./components/Hero";
import Programs from "./components/Programs";
import WhyUs from "./components/WhyUs";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import DiscoverSection from "./components/DiscoverSection";
import Footer from "./components/Footer";

// Lazy load subpages (code splitting)
const AboutPage = lazy(() => import("./pages/AboutPage"));
const CoachesPage = lazy(() => import("./pages/CoachesPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const CareersPage = lazy(() => import("./pages/CareersPage"));
const PrivacyPage = lazy(() => import("./pages/PrivacyPage"));
const TermsPage = lazy(() => import("./pages/TermsPage"));
const ProgramDetailPage = lazy(() => import("./pages/ProgramDetailPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

// Loading fallback
function PageLoader() {
  return (
    <div className="min-h-screen bg-surface-950 flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 animate-pulse" />
        <div className="w-24 h-1 rounded-full bg-surface-800 overflow-hidden">
          <div className="h-full w-1/2 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 animate-[shimmer_1s_ease-in-out_infinite]" />
        </div>
      </div>
    </div>
  );
}

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// Page transition wrapper
function PageTransition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}

function HomePage() {
  return (
    <>
      <Hero />
      <Programs />
      <WhyUs />
      <Pricing />
      <Testimonials />
      <DiscoverSection />
      <Footer />
    </>
  );
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/programs/:slug"
          element={
            <PageTransition>
              <ProgramDetailPage />
            </PageTransition>
          }
        />
        <Route
          path="/about"
          element={
            <PageTransition>
              <AboutPage />
            </PageTransition>
          }
        />
        <Route
          path="/coaches"
          element={
            <PageTransition>
              <CoachesPage />
            </PageTransition>
          }
        />
        <Route
          path="/contact"
          element={
            <PageTransition>
              <ContactPage />
            </PageTransition>
          }
        />
        <Route
          path="/careers"
          element={
            <PageTransition>
              <CareersPage />
            </PageTransition>
          }
        />
        <Route
          path="/privacy"
          element={
            <PageTransition>
              <PrivacyPage />
            </PageTransition>
          }
        />
        <Route
          path="/terms"
          element={
            <PageTransition>
              <TermsPage />
            </PageTransition>
          }
        />
        <Route
          path="*"
          element={
            <PageTransition>
              <NotFoundPage />
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <ScrollToTop />
        <div className="noise-overlay" />
        <div className="App">
          <Suspense fallback={<PageLoader />}>
            <AnimatedRoutes />
          </Suspense>
          <Chatbot />
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
