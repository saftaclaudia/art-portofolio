import "./App.css";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import { useState } from "react";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const handleNavigate = (section) => {
    setActiveSection(section);
  };

  return (
    <>
      <Header onNavigate={handleNavigate} />

      {activeSection === "home" && (
        <section id="home" className="min-h-screen">
          <Hero onNavigate={handleNavigate} />
        </section>
      )}

      {activeSection === "gallery" && <Gallery />}
      {activeSection === "about" && <About />}

      {/* Footer */}
      <footer className="text-center py-6 mt-10 border-t">
        <p className="text-sm text-gray-500">
          @ 2025 Claudia Safta | urmeazama pe Instagram @claudiasafta_draw
        </p>
      </footer>
    </>
  );
}

export default App;
