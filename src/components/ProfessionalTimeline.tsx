import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const markets = ["🇫🇮 Finland", "🇮🇳 India", "🇲🇾 Malaysia", "🇦🇪 UAE", "🇵🇦 Panama"];
const tools = ["HubSpot", "Pipedrive", "Apollo", "Salesforce", "LinkedIn Sales Nav", "Salesloft", "Zoominfo", "G2"];

const ProfessionalTimeline = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-24 px-6 md:px-16" style={{ background: "#fff" }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Markets */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs tracking-[0.25em] uppercase font-medium mb-3" style={{ color: "#e8876a" }}>Global Footprint</p>
            <h3 className="text-2xl font-black mb-6" style={{ color: "#1a1a1a" }}>Markets I've Operated In</h3>
            <div className="flex flex-wrap gap-3">
              {markets.map((m) => (
                <span key={m} className="px-4 py-2 rounded-full text-sm font-medium border" style={{ borderColor: "#e5e0db", color: "#555" }}>
                  {m}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Tools */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <p className="text-xs tracking-[0.25em] uppercase font-medium mb-3" style={{ color: "#e8876a" }}>Tech Stack</p>
            <h3 className="text-2xl font-black mb-6" style={{ color: "#1a1a1a" }}>Tools I Work With</h3>
            <div className="flex flex-wrap gap-3">
              {tools.map((t) => (
                <span key={t} className="px-4 py-2 rounded-full text-sm font-medium" style={{ background: "#f0e8e4", color: "#c4604a" }}>
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* CTA band */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 rounded-3xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8"
          style={{ background: "linear-gradient(135deg, #e8876a, #c4604a)" }}
        >
          <div>
            <h3 className="text-2xl md:text-3xl font-black text-white mb-2">Ready to grow faster?</h3>
            <p className="text-sm" style={{ color: "rgba(255,255,255,0.8)" }}>
              Let's figure out where you're leaking revenue and fix it.
            </p>
          </div>
          <a
            href="mailto:shweta.finland@gmail.com"
            className="flex-shrink-0 px-8 py-4 rounded-full font-semibold text-sm transition-opacity hover:opacity-90"
            style={{ background: "#fff", color: "#c4604a" }}
          >
            Book a Free 30-min Call →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProfessionalTimeline;
