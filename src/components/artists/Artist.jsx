import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const Artist = () => {
  const { id } = useParams();
  const [artist, setArtist] = useState(null);
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    Promise.all([
      fetch(`http://localhost:8000/api/artist?id=${id}`).then((res) => res.json()),
      fetch(`http://localhost:8000/api/albums-artist?id=${id}`).then((res) => res.json()),
    ])
      .then(([artistData, albumsData]) => {
        setArtist(artistData.artist);
        setAlbums(albumsData.albums || []);
      })
      .catch((err) => console.error("Erreur chargement:", err));
  }, [id]);

  if (!artist) return <div className="text-center text-white">Chargement...</div>;

  return (
    <div className="bg-neutral-900 text-white min-h-screen flex">
      <div className="w-1/5 bg-black p-6 flex flex-col items-start">
      <img src="../../public/spotify_logo.svg" alt="spotifyLogo" srcset="" className="" />
        <nav className="space-y-4">
          <Link to="/" className="block text-gray-300 hover:text-white">🏠 Home</Link>
          <Link to="/artists" className="block text-gray-300 hover:text-white">🎤 Artists</Link>
        </nav>
      </div>

      <div className="w-4/5 p-10">
        <div className="bg-black rounded-lg flex items-center shadow-lg p-6">
          <img src={artist.photo} className="w-32 h-32 rounded-full object-cover mx-4" />
          <div>
            <h1 className="text-3xl font-bold">{artist.name}</h1>
            <p className="text-lg opacity-80">{artist.description}</p>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Albums {artist.name}</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 overflow-y-auto lg:grid-cols-4 gap-6">
            {albums.map((album) => (
              <div key={album.id} className="bg-black/20 bg-opa shadow-lg rounded-lg p-4 flex flex-col items-center">
              <img src={album.cover} className="w-32 h-32 rounded-lg object-cover mb-2"/>
              <p className="text-lg font-semibold text-white text-center">{album.name}</p>
            </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Artist;
