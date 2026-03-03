import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden" style={{ background: "#f9f5f2" }}>
      {/* Nav */}
      <nav className="relative z-20 flex items-center justify-between px-8 md:px-16 py-6">
        <span className="font-bold text-xl tracking-tight" style={{ color: "#1a1a1a" }}>
          Shweta Singh
        </span>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium" style={{ color: "#444" }}>
          <a href="#about" className="hover:text-black transition-colors">About</a>
          <a href="#services" className="hover:text-black transition-colors">Services</a>
          <a href="#work" className="hover:text-black transition-colors">Work</a>
          <a href="#contact" className="hover:text-black transition-colors">Contact</a>
        </div>
        <a
          href="https://calendly.com"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-opacity hover:opacity-90"
          style={{ background: "#1a1a1a" }}
        >
          Book a Call
        </a>
      </nav>

      {/* Hero */}
      <div
        className="relative mx-6 md:mx-12 rounded-3xl overflow-hidden flex items-center min-h-[85vh]"
        style={{ background: "linear-gradient(135deg, #e8876a 0%, #d4735a 40%, #c4604a 100%)" }}
      >
        {/* Watermark name */}
        <div
          className="absolute bottom-4 right-4 text-6xl md:text-9xl font-black tracking-widest select-none pointer-events-none"
          style={{ color: "rgba(255,255,255,0.12)", lineHeight: 1 }}
        >
          SHWETA
        </div>

        {/* Left content */}
        <div className="relative z-10 px-10 md:px-16 py-16 max-w-xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-xs tracking-[0.25em] uppercase mb-5 font-medium"
            style={{ color: "rgba(255,255,255,0.75)" }}
          >
            Growth Operator · Revenue Leader · AI Builder
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6"
            style={{ color: "#fff" }}
          >
            I Help Businesses
            <br />
            Grow Faster —
            <br />
            <span style={{ color: "#1a1a1a" }}>With AI, Strategy</span>
            <br />
            <span style={{ color: "#1a1a1a" }}>& Execution.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-sm md:text-base mb-10 leading-relaxed"
            style={{ color: "rgba(255,255,255,0.85)" }}
          >
            10+ years of B2B sales across 5 countries. I step in to align teams,
            build outbound systems, and ship MVPs fast — so founders stop burning time and start closing.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.6 }}
            className="flex items-center gap-4"
          >
            <a
              href="#services"
              className="flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold transition-opacity hover:opacity-90"
              style={{ background: "rgba(255,255,255,0.95)", color: "#1a1a1a" }}
            >
              See How I Work <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#work"
              className="text-sm font-medium underline underline-offset-4"
              style={{ color: "rgba(255,255,255,0.8)" }}
            >
              View Case Studies
            </a>
          </motion.div>
        </div>

        {/* Right photo */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.9 }}
          className="absolute right-0 bottom-0 h-full flex items-end justify-end pointer-events-none"
          style={{ width: "45%" }}
        >
          <img
            src="/shweta-bw.jpg"
            alt="Shweta Singh"
            className="h-full w-full object-cover object-top"
            style={{ maskImage: "linear-gradient(to left, black 60%, transparent 100%)" }}
          />
        </motion.div>
      </div>

      {/* Stats bar */}
      <div className="mx-6 md:mx-12 mt-0 grid grid-cols-2 md:grid-cols-4 border-x border-b rounded-b-2xl" style={{ borderColor: "#e5e0db", background: "#fff" }}>
        {[
          { value: "10+", label: "Years Global Sales" },
          { value: "5", label: "Countries Operated In" },
          { value: "200%", label: "Revenue Growth (Shaadi.com)" },
          { value: "€125k", label: "Funding Secured" },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 + i * 0.1, duration: 0.5 }}
            className="px-8 py-6 border-r last:border-r-0"
            style={{ borderColor: "#e5e0db" }}
          >
            <div className="text-2xl font-black mb-1" style={{ color: "#e8876a" }}>{stat.value}</div>
            <div className="text-xs" style={{ color: "#888" }}>{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
