import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { projects, categories } from "../data/projects";

const GitHubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12 24 5.37 18.63 0 12 0z"/></svg>
);

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered = projects.filter(
    (p) => activeCategory === "all" || p.category === activeCategory
  );

  return (
    <section id="projects" className="py-16 sm:py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00abf0]/3 to-transparent" />
      <div className="absolute top-20 right-10 w-80 h-80 bg-[#00abf0]/5 rounded-full blur-3xl" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-3 sm:mb-4">
            Featured <span className="text-gradient-blue">Projects</span>
          </h2>
          <div className="section-divider" />
        </div>

        <div className="flex justify-center gap-1.5 sm:gap-2 mb-8 sm:mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 sm:px-5 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium capitalize ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-[#00abf0] to-[#0094d4] text-[#0a0a0f] font-semibold shadow-lg shadow-[#00abf0]/20"
                  : "bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-transparent"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {filtered.map((project) => (
            <div
              key={project.id}
              className="group card overflow-hidden"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 flex items-end justify-center gap-3 p-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 bg-gradient-to-br from-[#00abf0] to-[#0094d4] text-[#0a0a0f] rounded-lg shadow-lg shadow-[#00abf0]/30"
                    aria-label="Live demo"
                  >
                    <ExternalLink size={16} />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 glass text-white rounded-lg hover:bg-white/20 backdrop-blur-sm"
                    aria-label="GitHub repository"
                  >
                    <GitHubIcon />
                  </a>
                </div>
              </div>

              <div className="p-3 sm:p-5">
                <h3 className="font-bold text-xs sm:text-base mb-1 sm:mb-2 leading-tight">
                  {project.title}
                </h3>
                <p className="text-gray-500 text-[10px] sm:text-sm leading-relaxed mb-2 sm:mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1 sm:gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag text-[8px] sm:text-xs px-1.5 py-0.5 sm:px-2.5 sm:py-1">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
