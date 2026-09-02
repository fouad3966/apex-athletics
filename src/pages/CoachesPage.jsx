import React from "react";
import AnimatedSection from "../components/AnimatedSection";
import Header from "../components/Header";
import Footer from "../components/Footer";
import tImage1 from "../assets/t-image1.png";
import tImage2 from "../assets/t-image2.jpg";
import tImage3 from "../assets/t-image3.jpg";

const coaches = [
  {
    name: "Marcus Rivera",
    role: "Head Strength Coach",
    bio: "15+ years of experience training professional athletes. CSCS certified with a Master's in Exercise Science.",
    image: tImage1,
    specialties: ["Powerlifting", "Olympic Lifting", "Mobility"],
  },
  {
    name: "Sarah Chen",
    role: "Lead HIIT & Cardio Coach",
    bio: "Former national track athlete turned fitness coach. Passionate about making high-intensity training accessible to all.",
    image: tImage2,
    specialties: ["HIIT", "Running", "Endurance"],
  },
  {
    name: "David Okonkwo",
    role: "Nutrition & Wellness Coach",
    bio: "Registered dietitian with a holistic approach to fitness. Combines nutrition science with mental wellness strategies.",
    image: tImage3,
    specialties: ["Nutrition", "Recovery", "Lifestyle"],
  },
];

export default function CoachesPage() {
  return (
    <div className="bg-surface-950 min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="glow-orb w-[500px] h-[500px] bg-accent-500 top-[-100px] left-[-200px]" />
        <div className="max-w-7xl mx-auto relative z-10">
          <AnimatedSection>
            <span className="inline-block text-sm font-semibold text-primary-400 uppercase tracking-[0.2em] mb-4">
              Our Team
            </span>
            <h1 className="font-heading font-900 text-5xl sm:text-6xl lg:text-7xl leading-[0.95] mb-6">
              <span className="text-white">Meet Your </span>
              <span className="gradient-text">Coaches</span>
            </h1>
            <p className="text-lg text-surface-400 max-w-2xl leading-relaxed">
              Our coaches aren't just certified — they're experienced athletes,
              lifelong learners, and passionate mentors dedicated to your success.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Coaches Grid */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coaches.map((coach, i) => (
              <AnimatedSection key={i} delay={i * 0.15}>
                <div className="glass-card-hover rounded-3xl overflow-hidden group h-full flex flex-col">
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={coach.image}
                      alt={coach.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-950 via-transparent to-transparent" />
                  </div>
                  <div className="p-8 flex flex-col gap-4 flex-1">
                    <div>
                      <h3 className="font-heading font-bold text-xl text-white">
                        {coach.name}
                      </h3>
                      <p className="text-sm text-primary-400 font-semibold">
                        {coach.role}
                      </p>
                    </div>
                    <p className="text-sm text-surface-400 leading-relaxed flex-1">
                      {coach.bio}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {coach.specialties.map((s) => (
                        <span
                          key={s}
                          className="px-3 py-1 rounded-full text-xs font-medium bg-primary-500/10 text-primary-400 border border-primary-500/20"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
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
