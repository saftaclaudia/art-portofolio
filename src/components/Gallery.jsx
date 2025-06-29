import { motion } from "framer-motion";
import React from "react";

// acuarele
import img1 from "../assets/acuarele/img1.jpg"; //landscape
import img2 from "../assets/acuarele/img2.jpg"; //landscape
import img3 from "../assets/acuarele/img3.jpg"; //landscape
import img4 from "../assets/acuarele/img4.jpg"; //landscape
import img5 from "../assets/acuarele/img5.jpg"; //landscape
import img6 from "../assets/acuarele/img6.jpg"; //landscape
import img7 from "../assets/acuarele/img7.jpg"; //portrait
import img8 from "../assets/acuarele/img8.jpg"; //portrait
import img9 from "../assets/acuarele/img9.jpg"; //portrait
import img10 from "../assets/acuarele/img10.jpg"; //portrait
import img11 from "../assets/acuarele/img11.jpg"; //portrait

// digital
import aimg1 from "../assets/digital/aimg1.jpg"; //landscape
import aimg2 from "../assets/digital/aimg2.jpg"; //landscape
import aimg3 from "../assets/digital/aimg3.jpg"; //landscape
import aimg4 from "../assets/digital/aimg4.jpg"; //portrait
import aimg5 from "../assets/digital/aimg5.jpg"; //portrait
import aimg6 from "../assets/digital/aimg6.jpg"; //portrait
import aimg7 from "../assets/digital/aimg7.jpg"; //portrait

const images = [
  {
    src: img6,
    alt: "Whispers of Thai Shores",
    aspect: "aspect-[4/3]",
    mediun: "watercolor",
  },

  {
    src: img2,
    alt: "Caribbean Quietude",
    aspect: "aspect-[4/3]",
    mediun: "watercolor",
  },

  {
    src: img3,
    alt: "Traces in the Sand",
    aspect: "aspect-[4/3]",
    mediun: "watercolor",
  },
  {
    src: img11,
    alt: "Sunsent Breeze",
    aspect: "aspect-[4/3]",
    medium: "watercolor",
  },
  {
    src: img4,
    alt: "Harbor Lights of Saint-Tropez",
    aspect: "aspect-[4/3]",
    mediun: "watercolor",
  },

  {
    src: img1,
    alt: "A Bite of Amalfi",
    aspect: "aspect-[4/3]",
    mediun: "watercolor",
  },

  { src: aimg1, alt: "Drift Away", aspect: "aspect-[4/3]", medium: "digital" },
  {
    src: aimg2,
    alt: "Galaxy Jellyfish",
    aspect: "aspect-[4/3]",
    medium: "digital",
  },
  { src: aimg3, alt: "Galaxy Ray", aspect: "aspect-[4/3]", medium: "digital" },

  {
    src: img9,
    alt: "Between Palms",
    aspect: "aspect-[4/4]",
    mediun: "watercolor",
  },

  {
    src: aimg5,
    alt: "Under the Punta Cana Sky",
    aspect: "aspect-[4/4]",
    medium: "digital",
  },
  {
    src: aimg6,
    alt: "Quiet Tee Time",
    aspect: "aspect-[4/4]",
    medium: "digital",
  },
  {
    src: img7,
    alt: "Golden Tides",
    aspect: "aspect-[4/4]",
    mediun: "watercolor",
  },
  {
    src: img8,
    alt: "Still Waters, Silent Peaks",
    aspect: "aspect-[4/4]",
    mediun: "watercolor",
  },

  {
    src: img10,
    alt: "Where Time Sleeps",
    aspect: "aspect-[4/4]",
    mediun: "watercolor",
  },
  {
    src: aimg7,
    alt: "My Sad Girl",
    aspect: "aspect-[4/3]",
    medium: "digital",
  },
  {
    src: img5,
    alt: "Blue Feelings",
    aspect: "aspect-[4/3]",
    mediun: "watercolor",
  },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="bg-gradient-to-b from-neutral-50 to-neutral-100 px-4 py-16 sm:px-8 lg:px20"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-gray-800 mb-10 text-center">
          Gallery
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="rounded-2xl overflow-hidden  shadow-md bg-white"
            >
              <div className={`${image.aspect} overflow-hidden`}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                ></img>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium text-gray-700">
                  {image.alt}
                </h3>
                <p className="text-sm text-grey-500">{images.medium}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
