import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const work = [
  {
    company: "iLuSpace",
    role: "Co-Founder & Head of Sales",
    period: "2022 – Present",
    location: "Helsinki, Finland",
    highlights: [
      "Opened 3 international markets (Panama, India, UAE) in 8 months",
      "Secured €125k ESA BIC funding support",
      "Built outbound pipeline and led sales at Slush and Arctic 15",
    ],
    tag: "Current",
  },
  {
    company: "Shaadi.com",
    role: "Sales Head",
    period: "2013 – 2015",
    location: "India",
    highlights: [
      "Led a team of 10, escalating revenue by 200% in two years",
      "Increased referral & renewal sales by 40% in 18 months",
      "Implemented full branding and marketing strategy",
    ],
    tag: "Scale",
  },
  {
    company: "Regus (IWG)",
    role: "Account Manager",
    period: "2017 – 2019",
    location: "Kuala Lumpur, Malaysia",
    highlights: [
      "Overachieved sales targets, boosted conversions by 25%",
      "Closed deals on first call with C-suite buyers",
      "Selected as peer mentor for team-wide improvement",
    ],
    tag: "APAC",
  },
  {
    company: "Monster.com",
    role: "Key Account Manager",
    period: "2016 – 2017",
    location: "UAE Market",
    highlights: [
      "Generated $15,000 quarterly revenue in Middle East",
      "Managed full sales cycle from prospecting to close",
    ],
    tag: "MEA",
  },
];

const SalesEngineLab = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="work" ref={ref} className="py-24 px-6 md:px-16" style={{ background: "#faf8f6" }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xs tracking-[0.25em] uppercase font-medium mb-3" style={{ color: "#e8876a" }}>
            Track Record
          </p>
          <h2 className="text-3xl md:text-5xl font-black" style={{ color: "#1a1a1a" }}>
            Work That Moved the Needle
          </h2>
        </motion.div>

        <div className="space-y-5">
          {work.map((w, i) => (
            <motion.div
              key={w.company}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="rounded-2xl p-7 border flex flex-col md:flex-row gap-6"
              style={{ borderColor: "#e5e0db", background: "#fff" }}
            >
              <div className="md:w-48 flex-shrink-0">
                <span
                  className="inline-block text-xs px-3 py-1 rounded-full font-semibold mb-3"
                  style={{ background: "#f0e8e4", color: "#e8876a" }}
                >
                  {w.tag}
                </span>
                <h3 className="font-black text-lg" style={{ color: "#1a1a1a" }}>{w.company}</h3>
                <p className="text-sm font-medium mt-1" style={{ color: "#555" }}>{w.role}</p>
                <p className="text-xs mt-1" style={{ color: "#aaa" }}>{w.period}</p>
                <p className="text-xs" style={{ color: "#aaa" }}>{w.location}</p>
              </div>
              <div className="flex-1 space-y-2">
                {w.highlights.map((h) => (
                  <div key={h} className="flex items-start gap-2 text-sm" style={{ color: "#555" }}>
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#e8876a" }} />
                    {h}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SalesEngineLab;
