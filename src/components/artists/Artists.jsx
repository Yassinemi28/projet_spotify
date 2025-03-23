import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Pour faire des liens
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // N'oublie pas d'importer les styles

const Artists = () => {
  const [artists, setArtists] = useState([]); // Stocker la liste des artistes

  // Récupérer les artistes depuis l'API
  useEffect(() => {
    fetch("http://localhost:8000/api/artists/artists-all.php") // L'URL de l'API
      .then((res) => res.json())
      .then((data) => setArtists(data.artists)) // Mettre les artistes dans l'état
      .catch((err) => console.error(err)); // Gérer les erreurs
  }, []);

  return (
    <div className="p-4">
    <h1 className="text-3xl font-bold mb-4">Liste des Artistes</h1>
    
    <Swiper
      spaceBetween={20}  // Espacement entre les cartes
      slidesPerView={10}  // Nombre de cartes visibles en même temps
      loop={true} // Activer la boucle
    >
      {artists.map((artist) => (
        <SwiperSlide key={artist.id}>
          <div className="bg-white shadow-2xl rounded-lg overflow-hidden p-4 flex flex-col items-center">
            {/* Image ronde de l'artiste */}
            <img
              src={`${artist.photo}`}  // Assurez-vous que vous avez une image pour l'artiste
              alt={artist.name}
              className="w-32 h-32 rounded-full object-cover mb-4"
            />
            {/* Nom de l'artiste avec lien vers son profil */}
            <Link to={`/artist/${artist.id}`} className="text-lg font-semibold text-blue-500">
              {artist.name}
            </Link>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
  );
};

export default Artists;
