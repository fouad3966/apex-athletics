import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-surface-950 flex items-center justify-center px-6 relative overflow-hidden">
      <div className="glow-orb w-[500px] h-[500px] bg-primary-500 top-[-200px] left-1/2 -translate-x-1/2" />

      <div className="text-center max-w-lg relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="font-heading font-900 text-[8rem] sm:text-[10rem] leading-none gradient-text mb-0">
            404
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="font-heading font-bold text-2xl text-white mb-4 -mt-4">
            Page Not Found
          </h2>
          <p className="text-surface-400 mb-8 leading-relaxed">
            Looks like this page took a rest day. Let's get you back on track.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/" className="btn-primary inline-flex items-center justify-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span>Back to Home</span>
            </Link>
            <Link to="/contact" className="btn-outline inline-flex items-center justify-center gap-2">
              <span>Contact Us</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
