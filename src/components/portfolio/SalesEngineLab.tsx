import { useState } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Badge } from "@/components/ui/badge";

const categories = [
  {
    name: "CRM",
    tools: [
      { name: "Salesforce", level: "Expert" },
      { name: "HubSpot", level: "Expert" },
      { name: "Pipedrive", level: "Expert" },
    ],
  },
  {
    name: "Prospecting",
    tools: [
      { name: "Apollo", level: "Expert" },
      { name: "LinkedIn Sales Nav", level: "Expert" },
      { name: "Salesloft", level: "Advanced" },
    ],
  },
  {
    name: "Intelligence",
    tools: [
      { name: "Zoominfo", level: "Expert" },
      { name: "G2", level: "Advanced" },
    ],
  },
];

const SalesEngineLab = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [hoveredTool, setHoveredTool] = useState<string | null>(null);

  return (
    <section ref={ref} className="py-24 px-6 bg-dark-surface">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.2em] uppercase font-medium mb-3" style={{ color: "hsl(42, 100%, 49%)" }}>
            Tools & Skills
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold" style={{ color: "hsl(210, 20%, 92%)" }}>
            Sales Engine Lab
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: ci * 0.15, duration: 0.5 }}
            >
              <h3
                className="font-display text-xs tracking-[0.3em] uppercase mb-6 pb-2 border-b"
                style={{ color: "hsl(42, 100%, 49%)", borderColor: "hsl(220, 15%, 20%)" }}
              >
                {cat.name}
              </h3>
              <div className="space-y-3">
                {cat.tools.map((tool) => (
                  <div
                    key={tool.name}
                    onMouseEnter={() => setHoveredTool(tool.name)}
                    onMouseLeave={() => setHoveredTool(null)}
                    className="group flex items-center justify-between rounded-xl px-5 py-4 border transition-all duration-300 cursor-pointer"
                    style={{
                      borderColor: hoveredTool === tool.name ? "hsl(220, 100%, 50%)" : "hsl(220, 15%, 18%)",
                      backgroundColor: hoveredTool === tool.name ? "hsl(220, 100%, 50% / 0.1)" : "transparent",
                    }}
                  >
                    <span className="font-medium text-sm" style={{ color: "hsl(210, 20%, 85%)" }}>
                      {tool.name}
                    </span>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8, x: 10 }}
                      animate={
                        hoveredTool === tool.name
                          ? { opacity: 1, scale: 1, x: 0 }
                          : { opacity: 0, scale: 0.8, x: 10 }
                      }
                      transition={{ duration: 0.2 }}
                    >
                      <Badge className="bg-accent text-accent-foreground text-[10px] tracking-wider uppercase">
                        {tool.level}
                      </Badge>
                    </motion.div>
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
