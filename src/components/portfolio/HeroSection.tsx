import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const slides = [
  { gradient: "from-[hsl(220,100%,15%)] via-[hsl(220,80%,25%)] to-[hsl(220,60%,35%)]" },
  { gradient: "from-[hsl(220,60%,20%)] via-[hsl(42,60%,25%)] to-[hsl(42,80%,35%)]" },
  { gradient: "from-[hsl(42,80%,20%)] via-[hsl(220,50%,20%)] to-[hsl(220,100%,25%)]" },
];

const stats = [
  { value: "€125k", label: "Funding Secured", delay: 0 },
  { value: "200%", label: "Revenue Growth", delay: 1 },
  { value: "10+", label: "Years Global Experience", delay: 0.5 },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((p) => (p + 1) % slides.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.2 }}
          className={`absolute inset-0 bg-gradient-to-br ${slides[current].gradient}`}
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 text-center px-6 max-w-5xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-sm md:text-base tracking-[0.3em] uppercase mb-4"
          style={{ color: "hsl(42, 100%, 49%)" }}
        >
          Helsinki · Panama · India · UAE · Malaysia
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-6"
          style={{ color: "white" }}
        >
          Shweta Singh
          <span className="block text-2xl md:text-3xl lg:text-4xl font-light mt-2 opacity-90">
            The Global Closer & Community Builder
          </span>
        </motion.h1>

        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mt-10 mb-10">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 1 + stat.delay * 0.3, duration: 0.6 }}
              className="animate-float bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-4 md:px-8 md:py-5"
              style={{ animationDelay: `${stat.delay}s` }}
            >
              <div className="text-2xl md:text-3xl font-display font-bold" style={{ color: "hsl(42, 100%, 49%)" }}>
                {stat.value}
              </div>
              <div className="text-xs md:text-sm tracking-wide opacity-80" style={{ color: "white" }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.6 }}
        >
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base rounded-full gap-2"
            onClick={() => window.open("https://www.linkedin.com/in/shweta-singh", "_blank")}
          >
            Let's Connect <ArrowRight className="w-4 h-4" />
          </Button>
        </motion.div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === current ? "w-8 bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
