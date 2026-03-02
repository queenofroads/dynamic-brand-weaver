import { useRef } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ChevronLeft, ChevronRight, Users, Award, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const impacts = [
  {
    title: "MiB ry Leadership",
    subtitle: "Mentoring & Integration",
    description: "Led mentoring program supporting 100+ international professionals in Finland. Built bridge between immigrant talent and Finnish tech ecosystem.",
    icon: Users,
    color: "from-primary to-primary/70",
  },
  {
    title: "DEI Seminar",
    subtitle: "Fiskars × Aalto × Fortum",
    description: "Organized landmark diversity seminar bringing together Finland's biggest corporates to drive inclusive hiring practices.",
    icon: Award,
    color: "from-accent to-accent/70",
  },
  {
    title: "Slush Volunteer",
    subtitle: "Helsinki Tech Scene",
    description: "Active contributor to the world's leading startup event, connecting global founders with Nordic investors.",
    icon: Heart,
    color: "from-primary to-accent",
  },
  {
    title: "Arctic15 Speaker",
    subtitle: "Growth & Sales",
    description: "Shared insights on international market entry and sales pipeline strategies with fellow startup professionals.",
    icon: Award,
    color: "from-accent to-primary",
  },
  {
    title: "Nordeep Volunteering",
    subtitle: "Community Impact",
    description: "Contributed to deep-tech community initiatives promoting diversity in Nordic tech ecosystem.",
    icon: Heart,
    color: "from-primary/80 to-primary",
  },
];

const ImpactCarousel = () => {
  const { ref, isVisible } = useScrollAnimation();
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    scrollRef.current?.scrollBy({ left: dir === "left" ? -340 : 340, behavior: "smooth" });
  };

  return (
    <section ref={ref} className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between mb-12"
        >
          <div>
            <p className="text-sm tracking-[0.2em] uppercase text-primary font-medium mb-3">Community & Impact</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">Making a Difference</h2>
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
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 px-6 md:px-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))]"
        style={{ scrollbarWidth: "none" }}
      >
        {impacts.map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="snap-start shrink-0 w-[300px] md:w-[320px]"
            >
              {/* Polaroid style */}
              <div className="bg-card rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500 group">
                <div className={`h-48 bg-gradient-to-br ${item.color} flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
                  <Icon className="w-16 h-16 text-white/80 group-hover:scale-110 transition-transform duration-500" />
                  {/* Placeholder for real photo */}
                  <div className="absolute bottom-2 right-2 text-[10px] tracking-wider uppercase text-white/50">
                    Upload photo
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-semibold text-card-foreground">{item.title}</h3>
                  <p className="text-xs text-primary font-medium tracking-wide uppercase mb-2">{item.subtitle}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default ImpactCarousel;
