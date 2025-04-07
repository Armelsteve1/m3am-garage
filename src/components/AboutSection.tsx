"use client";
import { FaTools, FaCalendarAlt, FaMoneyBillWave } from "react-icons/fa";
import TestimonialsCarousel from "./TestimonialsCarousel";

const AboutSection = () => {
  return (
    <section className="bg-gray-900 text-white py-12 px-4 space-y-12">
      <div className="max-w-5xl mx-auto text-center space-y-4">
        <h2 className="text-4xl font-bold text-blue-400">À propos de M3AM Garage</h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Depuis plus de 10 ans, M3AM Garage est votre partenaire de confiance pour l'entretien et la réparation automobile. 
          Notre expertise et notre passion pour les véhicules garantissent un service de qualité supérieure.
        </p>
      </div>

      <TestimonialsCarousel />
      <div className="bg-gray-800 py-12 px-6 rounded-lg shadow-lg">
        <h3 className="text-4xl font-semibold text-blue-400 mb-8 text-center">Avant / Après</h3>
        <p className="text-gray-300 mb-8 text-center">
            Découvrez la transformation spectaculaire de vos véhicules grâce à notre expertise et notre savoir-faire.
        </p>
  <div className="flex flex-wrap justify-center gap-8">
    <div className="relative group">
      <img
        src="/avant.png"
        alt="Avant réparation"
        className="w-96 h-96 rounded-xl shadow-lg transform transition-transform group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-xl">
        <span className="text-white font-bold text-2xl">Avant</span>
      </div>
    </div>
    <div className="relative group">
      <img
        src="/apres.png"
        alt="Après réparation"
        className="w-96 h-96 rounded-xl shadow-lg transform transition-transform group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-xl">
        <span className="text-white font-bold text-2xl">Après</span>
      </div>
    </div>
  </div>
</div>

      {/* FAQ rapide */}
      <div className="bg-gray-800 py-8 px-4 rounded-lg shadow-lg">
        <h3 className="text-3xl font-semibold text-blue-400 mb-6 text-center">Questions fréquentes</h3>
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="flex items-start gap-4">
            <FaCalendarAlt className="text-blue-400 mt-1" size={24} />
            <div>
              <strong className="block text-white">⏳ Combien de temps dure une réparation ?</strong>
              <p className="text-gray-300">Entre 1 et 3 jours selon l’ampleur des dégâts.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <FaTools className="text-blue-400 mt-1" size={24} />
            <div>
              <strong className="block text-white">📅 Faut-il prendre un rendez-vous ?</strong>
              <p className="text-gray-300">Oui, nous fonctionnons uniquement sur rendez-vous pour une prise en charge rapide.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <FaMoneyBillWave className="text-blue-400 mt-1" size={24} />
            <div>
              <strong className="block text-white">💰 Les devis sont-ils gratuits ?</strong>
              <p className="text-gray-300">Absolument ! Contactez-nous pour un devis gratuit et sans engagement.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;