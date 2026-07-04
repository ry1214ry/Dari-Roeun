import { useState } from "react";
import { Code2, Coffee, Zap, ChevronDown } from "lucide-react";
import aboutImg from "../assets/hero.png";

const highlights = [
  { icon: Code2, label: "Clean Code", desc: "Writing maintainable, scalable code" },
  { icon: Zap, label: "Fast Delivery", desc: "Agile development with quick turnaround" },
  { icon: Coffee, label: "Dedicated", desc: "Passionate about solving problems" },
];

export default function About() {
  const [expanded, setExpanded] = useState(false);
  return (
    <section id="about" className="py-16 sm:py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00abf0]/3 to-transparent" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#00abf0]/5 rounded-full blur-3xl" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-3 sm:mb-4">
            About <span className="text-gradient-blue">Me</span>
          </h2>
          <div className="section-divider" />
        </div>

        <div className="grid grid-cols-2 gap-4 sm:gap-12 items-center">
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto aspect-square rounded-2xl overflow-hidden border border-white/10 glow-border">
                <img
                  src={aboutImg}
                  alt="Developer workspace"
                  className="w-full h-full object-cover"
                />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0a0a0f]/60 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-gradient-to-br from-[#00abf0] to-purple-500 rounded-2xl p-3 sm:p-4 shadow-xl hidden md:block glow">
              <p className="text-[#0a0a0f] font-bold text-base sm:text-lg">10+</p>
              <p className="text-[#0a0a0f]/80 text-xs font-medium">Projects Done</p>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <p className={`text-gray-400 leading-relaxed text-base md:text-lg ${expanded ? "" : "line-clamp-3"}`}>
                I'm a passionate Full Stack Web Developer with over 5 years of
                experience building modern web applications. I specialize in the
                MERN stack and love creating elegant solutions to complex
                problems. I build exceptional digital experiences that live at
                the intersection of design and technology, crafting seamless
                user interfaces and robust backend systems.
              </p>
              <button
                onClick={() => setExpanded(!expanded)}
                className="mt-2 text-xs text-[#00abf0] hover:text-[#0094d4] flex items-center gap-1"
              >
                {expanded ? "Show less" : "Read more"}
                <ChevronDown size={14} className={`${expanded ? "rotate-180" : ""}`} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
