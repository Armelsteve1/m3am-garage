"use client";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useRef, useState } from "react";

const testimonials = [
  {
    name: "SOUOP, Willy",
    text: "Excellent garage. J'ai froissé ma portière et mon aile arrière sur un pilier dans mon parking. Ce garage m'a été recommandé et j'y ai fait un tour. Accueil satisfaisant, service professionnel, la qualité du travail était au rendez-vous, ma voiture m'a été rendue comme neuve. J'y ai envoyé mon frère également pour le même niveau de satisfaction.",
    rating: 5,
  },
  {
    name: "Clarisse Michel",
    text: "Je recommande fortement ! Garagiste compétent et compréhensif ! Un travail rapide et efficace, n’hésitez pas !",
    rating: 4,
  },
  {
    name: "Max Fabou",
    text: "Très bon accueil voiture impeccable.",
    rating: 5,
  },
  {
    name: "Arnaud Jersy",
    text: "Très bon accueil et très bon professionnalisme.",
    rating: 5,
  },
  {
    name: "Nadir Bouakkaz",
    text: "Meilleure carrosserie de Montgeron !",
    rating: 5,
  },
  {
    name: "Amina K.",
    text: "Un service client exceptionnel, je suis ravie !",
    rating: 5,
  },
];

const TestimonialsCarousel = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [selectedTestimonial, setSelectedTestimonial] = useState<string | null>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-white py-8 px-4 rounded-lg shadow-lg">
      <h3 className="text-3xl font-semibold text-center text-gray-800 mb-6">
        Ce que disent nos clients
      </h3>
      <div className="relative">
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-300 hover:bg-gray-400 text-gray-800 p-3 rounded-full shadow-lg z-10"
        >
          <FaChevronLeft size={20} />
        </button>
        <div
          ref={carouselRef}
          className="flex gap-6 overflow-x-auto px-4 scrollbar-hide"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 shadow-md rounded-xl text-center min-w-[300px] flex-shrink-0"
            >
              <p className="text-sm text-gray-600 italic leading-relaxed max-w-[250px] mx-auto line-clamp-3">
                "{testimonial.text}"
              </p>
              {testimonial.text.length > 150 && (
                <button
                  onClick={() => setSelectedTestimonial(testimonial.text)}
                  className="text-blue-500 text-sm mt-2 underline"
                >
                  Voir plus
                </button>
              )}
              <div className="text-yellow-500 flex justify-center gap-1 mt-2">
                {Array(testimonial.rating)
                  .fill(0)
                  .map((_, i) => (
                    <FaStar key={i} />
                  ))}
              </div>
              <p className="font-semibold text-gray-800 mt-4">{testimonial.name}</p>
            </div>
          ))}
        </div>
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-300 hover:bg-gray-400 text-gray-800 p-3 rounded-full shadow-lg z-10"
        >
          <FaChevronRight size={20} />
        </button>
      </div>

      {/* Popup modale */}
      {selectedTestimonial && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-20">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <p className="text-gray-800 text-sm leading-relaxed">{selectedTestimonial}</p>
            <button
              onClick={() => setSelectedTestimonial(null)}
              className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
            >
              Fermer
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TestimonialsCarousel;