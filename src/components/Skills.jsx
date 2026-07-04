import { motion } from "framer-motion";
import { skills } from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/3 to-transparent" />
      <div className="absolute top-40 left-20 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl animate-float-slow" />
      <div className="absolute bottom-40 right-20 w-72 h-72 bg-[#00abf0]/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-3 sm:mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <div className="section-divider" />
          <p className="text-gray-500 mt-4 max-w-xl mx-auto text-sm sm:text-base">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-6"
        >
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -6, scale: 1.03 }}
                className="group relative card p-4 sm:p-6 flex flex-col items-center gap-2 sm:gap-3 cursor-default"
              >
                <div className="p-2.5 sm:p-3 rounded-xl bg-white/[0.05] group-hover:bg-[#00abf0]/10 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-[#00abf0]/10">
                  <Icon
                    size={26}
                    style={{ color: skill.color }}
                    className="group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <span className="text-[10px] sm:text-xs font-medium text-gray-400 group-hover:text-white transition-colors text-center">
                  {skill.name}
                </span>
                {index === 0 && (
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-[#00abf0] rounded-full animate-ping-slow" />
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
