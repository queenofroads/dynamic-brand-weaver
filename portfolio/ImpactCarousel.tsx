import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const painPoints = [
  {
    icon: "📉",
    title: "Revenue is Stuck",
    desc: "Your sales, CS, and marketing are working in silos. Nobody owns the number. Pipeline is dry.",
  },
  {
    icon: "🤯",
    title: "Wearing Too Many Hats",
    desc: "You're doing founder things AND sales things AND ops things. Everything is slow. Nothing is scaling.",
  },
  {
    icon: "🛠️",
    title: "MVP Stuck in Planning",
    desc: "You've been 'building' for months. You need someone who ships, not someone who decks.",
  },
];

const ImpactCarousel = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-24 px-6 md:px-16" style={{ background: "#faf8f6" }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs tracking-[0.25em] uppercase font-medium mb-3" style={{ color: "#e8876a" }}>
              Sound Familiar?
            </p>
            <h2 className="text-3xl md:text-4xl font-black mb-5 leading-tight" style={{ color: "#1a1a1a" }}>
              Feeling Stuck or{" "}
              <span style={{ color: "#e8876a" }}>Overwhelmed</span>{" "}
              as a Founder?
            </h2>
            <p className="text-sm leading-relaxed mb-8" style={{ color: "#666" }}>
              You don't need another strategy doc. You need someone who steps in, takes ownership, and moves fast.
              That's what I do.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{ background: "#e8876a" }}
            >
              Let's Talk →
            </a>
          </motion.div>

          {/* Right - pain points */}
          <div className="space-y-4">
            {painPoints.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, x: 30 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="flex gap-4 p-5 rounded-2xl border"
                style={{ borderColor: "#e5e0db", background: "#fff" }}
              >
                <div className="text-2xl">{p.icon}</div>
                <div>
                  <h4 className="font-bold text-sm mb-1" style={{ color: "#1a1a1a" }}>{p.title}</h4>
                  <p className="text-sm leading-relaxed" style={{ color: "#777" }}>{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactCarousel;
