import { Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="py-16 px-6 md:px-16 border-t" style={{ background: "#faf8f6", borderColor: "#e5e0db" }}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <h3 className="font-black text-xl mb-1" style={{ color: "#1a1a1a" }}>Shweta Singh</h3>
          <p className="text-sm" style={{ color: "#888" }}>Growth Operator · Helsinki, Finland</p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/shwetasunilsingh"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border flex items-center justify-center transition-all hover:bg-[#e8876a] hover:border-[#e8876a] hover:text-white"
            style={{ borderColor: "#ddd", color: "#555" }}
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="mailto:shweta.finland@gmail.com"
            className="w-10 h-10 rounded-full border flex items-center justify-center transition-all hover:bg-[#e8876a] hover:border-[#e8876a] hover:text-white"
            style={{ borderColor: "#ddd", color: "#555" }}
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        <p className="text-xs" style={{ color: "#aaa" }}>
          © {new Date().getFullYear()} Shweta Singh. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
