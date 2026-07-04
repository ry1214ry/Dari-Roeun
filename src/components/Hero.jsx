import { Mail, Download, ArrowRight } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import profileImg from "../assets/images/ri.png";

const GitHubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12 24 5.37 18.63 0 12 0z"/></svg>
);
const LinkedInIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
);
const TwitterIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.751 3h3.067l-6.7 7.625L22 21h-6.172l-4.833-6.293L5.464 21H2.395l7.167-8.156L2 3h6.328l4.37 5.752L17.75 3Zm-1.076 16.172h1.7L7.404 4.732H5.58l11.095 14.44Z"/></svg>
);

const socialIcons = [
  { icon: GitHubIcon, href: "https://github.com", label: "GitHub" },
  { icon: LinkedInIcon, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: TwitterIcon, href: "https://twitter.com", label: "Twitter" },
  { icon: Mail, href: "mailto:hello@example.com", label: "Email" },
];

export default function Hero() {
  const { darkMode } = useTheme();
  return (
    <section
      id="home"
      className="relative flex items-center justify-center overflow-hidden pt-16 pb-12 sm:pb-0 grid-bg"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#00abf0]/5 via-transparent to-purple-500/5" />
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#00abf0]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute top-1/3 right-1/3 w-48 h-48 bg-gradient-to-br from-[#00abf0]/5 to-purple-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-[1.1fr_1.9fr] sm:grid-cols-2 gap-1.5 sm:gap-6 lg:gap-12 items-center">
          <div className="order-1">
            <p className="text-gradient font-mono text-sm mb-2 sm:mb-4 tracking-wider font-semibold">
              Hi, there! My name is
            </p>

            <h1 className="text-lg sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-tight mb-2 sm:mb-4">
              Dary{" "}
              <span className="text-gradient-blue inline-block">Reoun</span>
            </h1>

            <h2 className={`text-base sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-6 ${darkMode ? "text-gray-400" : "text-gray-800"}`}>
              Full Stack{" "}
              <span className={`${darkMode ? "text-white glow-text" : "text-gray-900"}`}>Web Developer</span>
            </h2>

            <p className={`text-xs sm:text-base md:text-lg max-w-lg leading-relaxed mb-3 sm:mb-8 ${darkMode ? "text-gray-500" : "text-gray-700"}`}>
              I build exceptional digital experiences that live at the
              intersection of design and technology. Let's create something
              amazing together.
            </p>

            <div className="flex items-center gap-1 sm:gap-3 mb-8">
              {socialIcons.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-7 h-7 sm:w-10 sm:h-10 rounded-md sm:rounded-xl inline-flex items-center justify-center ${darkMode ? "icon-btn text-white/50 border-white/10" : "text-gray-600 border border-gray-300 hover:border-gray-500 hover:text-gray-800 hover:bg-gray-100"}`}
                  aria-label={label}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>

            <div className="flex items-center gap-1 sm:gap-4">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="btn-primary group inline-flex items-center gap-1 sm:gap-2 text-[#0a0a0f] px-2 py-1.5 sm:px-6 sm:py-3 rounded-lg sm:rounded-xl font-semibold text-[10px] sm:text-base"
              >
                Contact Me
                <ArrowRight size={14} className="sm:size-[18]" />
              </a>
              <a
                href="#"
                className={`inline-flex items-center gap-1 sm:gap-2 px-2 py-1.5 sm:px-6 sm:py-3 rounded-lg sm:rounded-xl font-semibold text-[10px] sm:text-base ${darkMode ? "btn-outline text-gray-300" : "border border-gray-400 text-gray-800 hover:border-gray-500 hover:bg-gray-100"}`}
              >
                <Download size={14} />
                Resume
              </a>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end order-2 self-stretch">
            <div className="relative w-full h-full">
              <div className="relative w-full h-full">
                <img
                  src={profileImg}
                  alt="Dary Roeun"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 bg-gradient-to-br from-[#00abf0] to-[#0094d4] text-[#0a0a0f] px-2 py-1 sm:px-4 sm:py-2 rounded-xl font-bold text-[10px] sm:text-sm shadow-xl whitespace-nowrap">
                +5 Years Exp
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}