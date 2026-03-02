import { useState } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { MapPin } from "lucide-react";

const markets = [
  { name: "Finland", flag: "🇫🇮", achievement: "HQ & base for EU market expansion", detail: "€125k funding secured for startups" },
  { name: "Panama", flag: "🇵🇦", achievement: "Opened LATAM market entry", detail: "3 international markets in 8 months" },
  { name: "India", flag: "🇮🇳", achievement: "Scaled operations & partnerships", detail: "200% revenue growth achieved" },
  { name: "UAE", flag: "🇦🇪", achievement: "Middle East business development", detail: "Strategic partnerships established" },
  { name: "Malaysia", flag: "🇲🇾", achievement: "APAC market penetration", detail: "600+ qualified leads generated" },
];

const GlobalFootprint = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [active, setActive] = useState<number | null>(null);

  return (
    <section ref={ref} className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.2em] uppercase text-primary font-medium mb-3">Global Presence</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Global Market Entry
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {markets.map((market, i) => (
            <motion.div
              key={market.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              className={`relative rounded-2xl border border-border p-6 cursor-pointer transition-all duration-500 ${
                active === i
                  ? "bg-primary text-primary-foreground scale-105 shadow-lg border-primary"
                  : "bg-card text-card-foreground hover:border-primary/50"
              }`}
            >
              <div className="text-3xl mb-3">{market.flag}</div>
              <h3 className="font-display text-lg font-semibold mb-2">{market.name}</h3>
              <p className={`text-sm mb-2 ${active === i ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                {market.achievement}
              </p>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={active === i ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="flex items-center gap-1 pt-2 border-t border-white/20 mt-2">
                  <MapPin className="w-3 h-3" />
                  <span className="text-xs font-medium">{market.detail}</span>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalFootprint;
