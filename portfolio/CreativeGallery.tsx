import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const CreativeGallery = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" ref={ref} className="py-24 px-6 md:px-16" style={{ background: "#fff" }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div
              className="absolute -top-4 -left-4 w-full h-full rounded-3xl"
              style={{ background: "#f0e8e4", zIndex: 0 }}
            />
            <img
              src="/shweta-warm.jpg"
              alt="Shweta Singh"
              className="relative rounded-3xl w-full object-cover"
              style={{ maxHeight: "520px", objectPosition: "top", zIndex: 1 }}
            />
            <div
              className="absolute bottom-6 left-6 right-6 rounded-2xl px-5 py-4 backdrop-blur-md"
              style={{ background: "rgba(255,255,255,0.92)", zIndex: 2 }}
            >
              <div className="flex justify-between">
                <div className="text-center">
                  <div className="text-xl font-black" style={{ color: "#e8876a" }}>10+</div>
                  <div className="text-xs" style={{ color: "#888" }}>Years in Sales</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-black" style={{ color: "#e8876a" }}>5</div>
                  <div className="text-xs" style={{ color: "#888" }}>Countries</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-black" style={{ color: "#e8876a" }}>5</div>
                  <div className="text-xs" style={{ color: "#888" }}>Languages</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-black" style={{ color: "#e8876a" }}>€125k</div>
                  <div className="text-xs" style={{ color: "#888" }}>Funding Secured</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <p className="text-xs tracking-[0.25em] uppercase font-medium mb-3" style={{ color: "#e8876a" }}>
              About Me
            </p>
            <h2 className="text-3xl md:text-4xl font-black mb-2 leading-tight" style={{ color: "#1a1a1a" }}>
              Meet{" "}
              <span style={{ color: "#e8876a" }}>Shweta Singh</span>
            </h2>
            <p className="text-lg font-semibold mb-6" style={{ color: "#555" }}>
              Your Growth Operator
            </p>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#666" }}>
              I've spent 10+ years selling B2B across India, Malaysia, Estonia, UAE, and Finland — from scaling a team to 200% revenue growth at Shaadi.com, to opening 3 international markets in 8 months as Co-Founder of iLuSpace.
            </p>
            <p className="text-sm leading-relaxed mb-8" style={{ color: "#666" }}>
              Today I work with founders and service businesses who need someone who doesn't just advise — but actually executes. I build MVPs with AI, set up outbound machines, and align revenue teams so they stop working in silos.
            </p>

            <div className="space-y-3 mb-8">
              {[
                "Co-Founder & Head of Sales, iLuSpace (ESA BIC incubated)",
                "Team Lead, MiB ry National Mentoring Program (100+ mentors)",
                "Board Member, FiTA Finland (300+ community)",
                "Volunteer: Slush, Arctic 15, Nordeep",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm" style={{ color: "#555" }}>
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#e8876a" }} />
                  {item}
                </div>
              ))}
            </div>

            <a
              href="https://www.linkedin.com/in/shwetasunilsingh"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold border transition-colors hover:bg-[#e8876a] hover:text-white hover:border-[#e8876a]"
              style={{ borderColor: "#e8876a", color: "#e8876a" }}
            >
              Connect on LinkedIn →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CreativeGallery;
