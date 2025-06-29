import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="py-20 px-6 text-gray-800">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 items-center justify-items-center ">
        {/* Textul */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold mb-4">About Me</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            {" "}
            I'm Claudia, a passionate artist inspired by the beauty of nature,
            human emotion, and vibrant colors. I create watercolor and digital
            paintings that aim to tell stories and evoke feelings through
            brushstrokes and light
          </p>
          <p className="text-gray-600 leading-relaxed">
            My journey started in childhood, sketching flowers and seaside
            landscapes. Today, I transform those inspirations into artworks
            filled with life and emotion.
          </p>
        </motion.div>
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img
            src="./public/profile.jpg"
            alt="Artist Claudia Safta"
            className="w-72 h-72 object-cover rounded-2xl shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default About;
