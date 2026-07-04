import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { experience } from "../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/3 to-transparent" />
      <div className="absolute top-40 right-20 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-float-slow" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-3 sm:mb-4">
            Experience & <span className="text-gradient-purple">Education</span>
          </h2>
          <div className="section-divider" />
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-[18px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00abf0]/50 via-purple-500/30 to-transparent md:-translate-x-px" />

          {experience.map((item, index) => {
            const isLeft = index % 2 === 0;
            const Icon = item.type === "work" ? Briefcase : GraduationCap;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row items-start gap-4 md:gap-6 mb-8 md:mb-12 ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="hidden md:flex flex-1 justify-end">
                  {isLeft ? (
                    <div className="text-right pr-8">
                      <h3 className="font-bold text-sm lg:text-base">{item.title}</h3>
                      <p className="text-[#00abf0] text-xs lg:text-sm font-medium">
                        {item.organization}
                      </p>
                      <p className="text-gray-500 text-xs mt-1">{item.period}</p>
                    </div>
                  ) : (
                    <div />
                  )}
                </div>

                <div className="relative z-10 flex-shrink-0">
                  <div className="w-9 h-9 md:w-8 md:h-8 rounded-full bg-[#0a0a0f] border-2 border-[#00abf0] flex items-center justify-center glow-sm">
                    <Icon size={14} className="text-[#00abf0]" />
                  </div>
                </div>

                <div className="flex-1 md:hidden -mt-1">
                  <h3 className="font-bold text-sm sm:text-base pr-4">{item.title}</h3>
                  <p className="text-[#00abf0] text-xs sm:text-sm font-medium">
                    {item.organization}
                  </p>
                  <p className="text-gray-500 text-xs mt-1 mb-2">{item.period}</p>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="hidden md:block">
                    {!isLeft && (
                      <>
                        <h3 className="font-bold text-sm lg:text-base">{item.title}</h3>
                        <p className="text-[#00abf0] text-xs lg:text-sm font-medium">
                          {item.organization}
                        </p>
                        <p className="text-gray-500 text-xs mt-1 mb-2">
                          {item.period}
                        </p>
                      </>
                    )}
                  </div>
                  <div className="card p-4 sm:p-5">
                    <ul className="space-y-1.5 md:space-y-2">
                      {item.description.map((desc, i) => (
                        <li
                          key={i}
                          className="text-gray-500 text-xs sm:text-sm leading-relaxed flex items-start gap-2"
                        >
                          <span className="text-[#00abf0] mt-1.5 w-1.5 h-1.5 rounded-full bg-current flex-shrink-0" />
                          <span className="min-w-0">{desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
