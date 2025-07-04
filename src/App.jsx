import "./App.css";
import Gallery from "./components/Gallery";
import { useState } from "react";
import Header from "./components/Header";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const handleNavigate = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-neutral-50 to-neutral-100">
      <Header onNavigate={handleNavigate} />

      <main className="flex-grow ">
        {activeSection === "home" && (
          <section id="home">
            <Hero onNavigate={handleNavigate} />
          </section>
        )}

        {activeSection === "gallery" && <Gallery />}
        {activeSection === "about" && <About />}
        {activeSection === "contact" && <Contact />}
      </main>

      <Footer />
    </div>
  );
}

export default App;
