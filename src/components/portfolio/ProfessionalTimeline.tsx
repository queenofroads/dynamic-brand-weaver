import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const milestones = [
  { year: "2024–Present", role: "Co-Founder & COO", company: "iLuSpace", metric: "Building SaaS for smart spaces" },
  { year: "2023–2024", role: "Sales & BD Manager", company: "Granlund", metric: "Opened 3 new markets in 8 months" },
  { year: "2021–2023", role: "Key Account Manager", company: "3DBear", metric: "€125k EU funding secured" },
  { year: "2020–2021", role: "Business Developer", company: "CEAS / ESA BIC", metric: "Closed largest deal in company history" },
  { year: "2018–2019", role: "Growth Manager", company: "ProAkatemia (TAMK)", metric: "200% revenue growth" },
  { year: "2015–2018", role: "Area Sales Manager", company: "SRG Asia Pacific", metric: "600+ APAC leads" },
  { year: "2013–2015", role: "Business Development", company: "Adventz Group", metric: "Scaled B2B operations" },
  { year: "2008–2013", role: "Sr. Sales Executive", company: "TalentEdge / NIIT", metric: "Top performer, EdTech sales" },
];

const ProfessionalTimeline = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-24 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.2em] uppercase text-primary font-medium mb-3">Journey</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">Professional Timeline</h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          {milestones.map((m, i) => (
            <motion.div
              key={m.year}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`relative flex items-start mb-10 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } flex-row`}
            >
              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary -translate-x-1.5 mt-1.5 z-10 ring-4 ring-background" />

              <div className={`ml-10 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                <span className="text-xs font-medium text-primary tracking-wider uppercase">{m.year}</span>
                <h3 className="font-display text-lg font-semibold text-foreground mt-1">{m.role}</h3>
                <p className="text-sm text-muted-foreground">{m.company}</p>
                <p className="text-sm font-medium text-accent mt-1">{m.metric}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfessionalTimeline;
