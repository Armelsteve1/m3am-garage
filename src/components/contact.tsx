"use client";

import React, { useState } from "react";
import { FaUser, FaEnvelope, FaPhone, FaCalendarAlt, FaCommentDots, FaArrowUp } from "react-icons/fa";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Formulaire soumis :", formData);
    setIsSubmitted(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      message: "",
    });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-white text-gray-800 min-h-screen flex flex-col items-center justify-center px-4 relative">
      <div className="bg-white text-gray-800 rounded-lg shadow-lg p-8 w-full max-w-3xl">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-900">Prendre Rendez-vous</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
            <div className="bg-gray-100 p-3">
              <FaUser className="text-gray-500" />
            </div>
            <input
              type="text"
              name="name"
              placeholder="Votre nom et prénom"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 outline-none"
              required
            />
          </div>
          <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
            <div className="bg-gray-100 p-3">
              <FaEnvelope className="text-gray-500" />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Votre email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 outline-none"
              required
            />
          </div>
          <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
            <div className="bg-gray-100 p-3">
              <FaPhone className="text-gray-500" />
            </div>
            <input
              type="tel"
              name="phone"
              placeholder="Votre téléphone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 outline-none"
              required
            />
          </div>

          <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
            <div className="bg-gray-100 p-3">
              <FaCalendarAlt className="text-gray-500" />
            </div>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full p-3 outline-none"
              required
            />
          </div>
          <div className="flex items-start border border-gray-300 rounded-lg overflow-hidden">
            <div className="bg-gray-100 p-3">
              <FaCommentDots className="text-gray-500" />
            </div>
            <textarea
              name="message"
              placeholder="Votre message (optionnel)"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 outline-none resize-none"
              rows={4}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-lg transition"
          >
            Envoyer
          </button>
        </form>
      </div>

      {isSubmitted && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-20">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full text-center">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Rendez-vous confirmé !</h3>
            <p className="text-gray-600">Merci, {formData.name}. Nous avons bien reçu votre demande.</p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
            >
              Fermer
            </button>
          </div>
        </div>
      )}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg transition"
        aria-label="Retour en haut"
      >
        <FaArrowUp size={20} />
      </button>
    </div>
  );
};

export default Contact;