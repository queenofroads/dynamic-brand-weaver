import { useState } from "react";
import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";

const languages = [
  { name: "English", level: "Fluent", flag: "🇬🇧" },
  { name: "Hindi", level: "Native", flag: "🇮🇳" },
  { name: "Marathi", level: "Native", flag: "🇮🇳" },
  { name: "Telugu", level: "Native", flag: "🇮🇳" },
  { name: "Finnish", level: "Intermediate", flag: "🇫🇮" },
];

const Footer = () => {
  const [activeLang, setActiveLang] = useState<number | null>(null);

  return (
    <footer className="py-20 px-6 bg-dark-surface">
      <div className="max-w-5xl mx-auto">
        {/* Languages */}
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase mb-6" style={{ color: "hsl(42, 100%, 49%)" }}>
            Languages I Speak
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {languages.map((lang, i) => (
              <motion.button
                key={lang.name}
                onMouseEnter={() => setActiveLang(i)}
                onMouseLeave={() => setActiveLang(null)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-5 py-3 rounded-full border transition-all duration-300 text-sm"
                style={{
                  borderColor: activeLang === i ? "hsl(220, 100%, 50%)" : "hsl(220, 15%, 20%)",
                  backgroundColor: activeLang === i ? "hsl(220, 100%, 50% / 0.1)" : "transparent",
                  color: "hsl(210, 20%, 85%)",
                }}
              >
                <span className="mr-2">{lang.flag}</span>
                {lang.name}
                {activeLang === i && (
                  <motion.span
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: "auto" }}
                    className="ml-2 text-xs opacity-70"
                  >
                    · {lang.level}
                  </motion.span>
                )}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="flex flex-col md:flex-row items-center justify-between border-t pt-10 gap-6" style={{ borderColor: "hsl(220, 15%, 18%)" }}>
          <div>
            <h3 className="font-display text-xl font-semibold" style={{ color: "hsl(210, 20%, 92%)" }}>
              Shweta Singh
            </h3>
            <p className="text-sm" style={{ color: "hsl(210, 20%, 60%)" }}>
              Global Sales Leader · Helsinki, Finland
            </p>
          </div>
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/shweta-singh"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border flex items-center justify-center transition-colors duration-300 hover:bg-primary hover:border-primary"
              style={{ borderColor: "hsl(220, 15%, 25%)", color: "hsl(210, 20%, 70%)" }}
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="mailto:shweta@example.com"
              className="w-10 h-10 rounded-full border flex items-center justify-center transition-colors duration-300 hover:bg-primary hover:border-primary"
              style={{ borderColor: "hsl(220, 15%, 25%)", color: "hsl(210, 20%, 70%)" }}
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        <p className="text-center mt-8 text-xs" style={{ color: "hsl(210, 20%, 40%)" }}>
          © {new Date().getFullYear()} Shweta Singh. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
