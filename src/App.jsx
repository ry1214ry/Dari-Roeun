import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

function HomePage() {
  const { darkMode } = useTheme();
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <AppContent loading={loading} setLoading={setLoading} />
    </ThemeProvider>
  );
}

function AppContent({ loading, setLoading }) {
  const { darkMode } = useTheme();
  return (
    <div className={`min-h-screen font-sans selection:bg-[#00abf0]/30 selection:text-white transition-colors duration-300 ${darkMode ? "bg-[#0a0a0f] text-white" : "bg-white text-gray-900"}`}>
      <AnimatePresence mode="wait">
        {loading ? (
          <Loader key="loader" />
        ) : (
          <HomePage key="home" />
        )}
      </AnimatePresence>
    </div>
  );
}
