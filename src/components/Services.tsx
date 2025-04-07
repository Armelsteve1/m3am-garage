import { FaPaintBrush, FaTools, FaCarCrash, FaCarSide, FaBatteryFull, FaOilCan } from "react-icons/fa";

const services = [
  {
    icon: <FaPaintBrush size={50} className="text-blue-500" />,
    title: "Carrosserie & Peinture",
    description: "Nous offrons des services de réparation de carrosserie et de peinture automobile pour redonner à votre véhicule son éclat d'origine.",
  },
  {
    icon: <FaTools size={50} className="text-green-500" />,
    title: "Entretien Mécanique",
    description: "De la vidange aux réparations complexes, nous assurons un entretien mécanique complet pour garantir la performance de votre véhicule.",
  },
  {
    icon: <FaCarCrash size={50} className="text-red-500" />,
    title: "Réparation après accident",
    description: "Nos experts redonnent vie à votre véhicule après un accident, en réparant les dommages visibles et invisibles.",
  },
  {
    icon: <FaCarSide size={50} className="text-yellow-500" />,
    title: "Nettoyage & Polish",
    description: "Un nettoyage intérieur et extérieur professionnel, accompagné d'un polissage pour un fini impeccable.",
  },
  {
    icon: <FaBatteryFull size={50} className="text-purple-500" />,
    title: "Batteries & Électricité",
    description: "Installation, diagnostic et remplacement de batteries, ainsi que des réparations électriques pour votre véhicule.",
  },
  {
    icon: <FaOilCan size={50} className="text-orange-500" />,
    title: "Changement d'huile",
    description: "Service rapide et efficace pour le changement d'huile et des filtres, garantissant la longévité de votre moteur.",
  },
];

const Services = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-gray-100 to-gray-200">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-12">
           <span className="text-blue-500">Nos Services</span>
        </h2>
        <p className="text-lg text-gray-600 mb-10">
          Découvrez nos services professionnels conçus pour répondre à tous vos besoins automobiles. Nous mettons notre expertise à votre service pour garantir votre satisfaction.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
            >
              <div className="mb-6 flex justify-center">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">{service.title}</h3>
              <p className="text-gray-600 text-base">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;