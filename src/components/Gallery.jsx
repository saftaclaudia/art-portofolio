import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

export default function Gallery() {
  const [artworks, setArtworks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchArtworks() {
      const { data, error } = await supabase.from("artworks").select("*");
      if (error) {
        setError("Faild to fetch Artworks");
        console.error(error);
      } else {
        setArtworks(data);
      }
    }
    fetchArtworks();
  }, []);

  if (error) return <p className="text-center mt-8 text-red-600">{error}</p>;

  return (
    <section
      id="gallery"
      className="bg-gradient-to-b from-neutral-50 to-neutral-100 px-4 py-16 sm:px-8 lg:px20"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-gray-800 mb-10 text-center">
          Gallery
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {artworks.map((artwork) => (
            <div
              key={artwork.id}
              className="border rounded shadow hover:shadow-md transition p-4 bg-white"
            >
              <img
                src={artwork.image_url}
                alt={artwork.title}
                className="w-full h-64 object-cover mb-4 rounded"
              />
              <h3 className="text-lg font-semibold">Title: {artwork.title}</h3>
              <p className="text-sm text-gray-500">Medium: {artwork.medium}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
