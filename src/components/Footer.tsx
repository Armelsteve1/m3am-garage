const Footer = () => {
    return (
      <footer className="bg-gray-900 text-gray-300 py-10">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-lg font-bold text-white mb-4">À propos</h2>
            <p>
              M3AM Garage est votre partenaire de confiance pour l&apos;entretien et la réparation de vos véhicules. 
              Nous offrons des services de qualité pour assurer votre sécurité sur la route.
            </p>
          </div>
  
          <div>
            <h2 className="text-lg font-bold text-white mb-4">Coordonnées</h2>
            <ul>
              <li className="mb-2">
                <span className="font-medium">Adresse :</span> 8 Rue Mercure, 91230 Montgeron, France
              </li>
              <li className="mb-2">
                <span className="font-medium">Téléphone :</span> <a href="tel:+33123456789" className="hover:text-gray-400">+33 9 81 06 62 68</a>
              </li>
              <li>
                <span className="font-medium">Email :</span> <a href="mailto:contact@m3amgarage.com" className="hover:text-gray-400">contact@m3amgarage.com</a>
              </li>
            </ul>
          </div>
  
          <div>
            <h2 className="text-lg font-bold text-white mb-4">Horaires d&apos;ouverture</h2>
            <ul>
              <li className="mb-2">Lundi - Vendredi : 9h00 - 18h00</li>
              <li className="mb-2">Samedi : 9h00 - 12h00</li>
              <li>Dimanche : Fermé</li>
            </ul>
          </div>
        </div>
  
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p>&copy; {new Date().getFullYear()} M3AM Garage. Tous droits réservés.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;