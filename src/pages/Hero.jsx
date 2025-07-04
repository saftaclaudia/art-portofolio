import { motion } from "framer-motion";
import { Link } from "react-scroll";
import myPortrait from "../assets/profile.jpg";

export default function Hero({ onNavigate }) {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center px-6 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-4xl mx-auto text-center">
        {/* Profile image */}
        <motion.img
          src={myPortrait}
          alt="Self portret"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-full mx-auto mb-6 shadow-lg border-4 border-white"
        />

        {/* Title */}
        <motion.h1
          className="text-3xl md:text-5xl font-bold text-gray-800 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Welcome to my artistic word
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-gray-700 text-lg md:text-xl mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Explore my watercolor and digital artworks,inspired by nature,
          emotion, and color.
        </motion.p>

        {/*  Buton */}

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="bg-gray-800 text-white px-6 py-3 rounded-xl font-medium shadow-md"
          onClick={() => onNavigate("gallery")}
        >
          View Gallery
        </motion.button>
      </div>
    </section>
  );
}
