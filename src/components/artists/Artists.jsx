import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

const Artists = () => {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/artists/artists-all.php")
      .then((res) => res.json())
      .then((data) => setArtists(data.artists || []))
      .catch((err) => console.error("Erreur chargement:", err));
  }, []);

  return (
    <div className="bg-neutral-900 text-white min-h-screen flex">
      {/* Sidebar */}
      <div className="w-1/5 bg-black p-6 flex flex-col items-start">
      <Link to={`/`}>
        <img src="../../public/spotify_logo.svg" alt="spotifyLogo" srcset="" className="" />
        </Link>
        <nav className="space-y-4">
          <Link to="/" className="block text-gray-300 hover:text-white">
            🏠 Home
          </Link>
          <Link to="/artists" className="block text-gray-300 hover:text-white">
            🎤 Artists
          </Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className="w-4/5 p-10">
        <h1 className="text-3xl font-bold mb-4">Liste des Artistes</h1>

        {/* Carrousel Swiper */}
        <Swiper spaceBetween={20} slidesPerView={6} loop={true}>
          {artists.map((artist) => (
            <SwiperSlide key={artist.id}>
              <Link to={`/artist/${artist.id}`} className="block">
                <div className="bg-black/20 shadow-lg rounded-lg p-4 flex flex-col items-center hover:bg-black/30 transition">
                  <img
                    src={artist.photo}
                    className="w-32 h-32 rounded-full object-cover mb-4"
                  />
                  <p className="text-lg font-semibold text-white text-center">
                    {artist.name}
                  </p>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </div>
  );
};

export default Artists;
