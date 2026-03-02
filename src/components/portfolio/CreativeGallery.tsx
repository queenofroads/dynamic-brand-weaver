import { useRef } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ChevronLeft, ChevronRight, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";

const galleryItems = [
  { id: 1, caption: "Brand Identity Design", aspect: "landscape" },
  { id: 2, caption: "Event Poster", aspect: "portrait" },
  { id: 3, caption: "Social Media Campaign", aspect: "square" },
  { id: 4, caption: "Presentation Design", aspect: "landscape" },
  { id: 5, caption: "Infographic", aspect: "portrait" },
  { id: 6, caption: "Marketing Collateral", aspect: "square" },
];

const aspectMap = {
  landscape: "w-[360px] h-[240px]",
  portrait: "w-[240px] h-[340px]",
  square: "w-[280px] h-[280px]",
};

const gradients = [
  "from-primary/20 to-accent/20",
  "from-accent/20 to-primary/20",
  "from-primary/30 to-primary/10",
  "from-accent/30 to-accent/10",
  "from-primary/15 to-accent/25",
  "from-accent/15 to-primary/25",
];

const CreativeGallery = () => {
  const { ref, isVisible } = useScrollAnimation();
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    scrollRef.current?.scrollBy({ left: dir === "left" ? -320 : 320, behavior: "smooth" });
  };

  return (
    <section ref={ref} className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between mb-12"
        >
          <div>
            <p className="text-sm tracking-[0.2em] uppercase text-primary font-medium mb-3">Portfolio</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">Designs & Creations</h2>
          </div>
          <div className="hidden md:flex gap-2">
            <Button variant="outline" size="icon" onClick={() => scroll("left")} className="rounded-full">
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={() => scroll("right")} className="rounded-full">
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </motion.div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 px-6 md:px-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))] items-end"
        style={{ scrollbarWidth: "none" }}
      >
        {galleryItems.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            className="snap-start shrink-0 group cursor-pointer"
          >
            <div
              className={`${aspectMap[item.aspect as keyof typeof aspectMap]} bg-gradient-to-br ${gradients[i]} rounded-2xl border border-border flex flex-col items-center justify-center relative overflow-hidden transition-all duration-500 group-hover:scale-[1.03] group-hover:shadow-xl`}
            >
              <Palette className="w-10 h-10 text-muted-foreground/40 mb-2" />
              <span className="text-xs text-muted-foreground/60 tracking-wide uppercase">Upload image</span>
            </div>
            <p className="mt-3 text-sm font-medium text-foreground text-center">{item.caption}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CreativeGallery;
