import "./App.css";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="font-sans text-gray-800">
      {/* Header */}
      <Header />

      {/* Hero */}
      <Hero />

      {/* Lucrari  */}
      <Gallery />

      {/* Footer */}
      <footer className="text-center py-6 mt-10 border-t">
        <p className="text-sm text-gray-500">
          @ 2025 Claudia Safta | urmeazama pe Instagram @claudiasafta_draw
        </p>
      </footer>
    </div>
  );
}

export default App;
