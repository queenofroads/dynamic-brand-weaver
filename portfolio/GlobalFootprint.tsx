import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Zap, TrendingUp, Mail, Users } from "lucide-react";

const services = [
  {
    icon: <Zap className="w-6 h-6" />,
    tag: "Service 01",
    title: "MVP Builder with AI Tools",
    description:
      "I help founders ship their first product faster — using AI tools to compress months of work into weeks. No fluff, no long roadmaps. Just a working product in your hands.",
    points: ["AI tool stack selection", "Rapid prototyping & iteration", "From idea to launch-ready MVP"],
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    tag: "Service 02",
    title: "Revenue Leader as a Service",
    description:
      "I step in as a fractional revenue lead — aligning your CS, Sales, and Marketing so they stop working in silos and start closing together.",
    points: ["Team alignment & process design", "Outbound sequence setup", "Revenue split & profit model advisory"],
  },
  {
    icon: <Mail className="w-6 h-6" />,
    tag: "Service 03",
    title: "Revenue Execution",
    description:
      "Hands-on execution from day one. I write newsletters and emails that convert, and sell your services through strategic partnerships.",
    points: ["Copywriting for email & newsletters", "Sales partnership deals", "Cold outreach & pipeline building"],
  },
  {
    icon: <Users className="w-6 h-6" />,
    tag: "Service 04",
    title: "Sales Team & CRM Setup",
    description:
      "I build the sales infrastructure from scratch — CRM, sequences, qualification frameworks — so your team stops guessing and starts winning.",
    points: ["HubSpot / Pipedrive / Apollo setup", "SDR process design", "Lead qualification frameworks"],
  },
];

const GlobalFootprint = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="services" ref={ref} className="py-24 px-6 md:px-16" style={{ background: "#fff" }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xs tracking-[0.25em] uppercase font-medium mb-3" style={{ color: "#e8876a" }}>
            What I Do
          </p>
          <h2 className="text-3xl md:text-5xl font-black" style={{ color: "#1a1a1a" }}>
            How I Help You Grow
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="rounded-2xl p-8 border hover:border-[#e8876a] transition-colors duration-300 group"
              style={{ borderColor: "#e5e0db", background: "#faf8f6" }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#e8876a] transition-colors duration-300"
                style={{ background: "#f0e8e4", color: "#e8876a" }}
              >
                <span className="group-hover:text-white transition-colors duration-300">{s.icon}</span>
              </div>
              <p className="text-xs tracking-widest uppercase mb-2" style={{ color: "#aaa" }}>{s.tag}</p>
              <h3 className="text-xl font-bold mb-3" style={{ color: "#1a1a1a" }}>{s.title}</h3>
              <p className="text-sm leading-relaxed mb-5" style={{ color: "#666" }}>{s.description}</p>
              <ul className="space-y-2">
                {s.points.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-sm" style={{ color: "#555" }}>
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#e8876a" }} />
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalFootprint;
