import React, { useState, useEffect } from "react";
import Searchbar from "./Searchbar";

const App = () => {
  const [tracks, setTracks] = useState([]);
  const [artists, setArtists] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchTracks = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/tracks.php");
        const data = await response.json();
        setTracks(data);
      } catch (error) {
        console.error("Erreur lors de la récupération des sons :", error);
      }
    };
    fetchTracks();
  }, []);

  useEffect(() => {
    const fetchArtists = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/artists.php");
        const data = await response.json();
        setArtists(data);
      } catch (error) {
        console.error("Erreur lors de la récupération des artistes :", error);
      }
    };
    fetchArtists();
  }, []);

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/albums.php");
        const data = await response.json();
        setAlbums(data);
      } catch (error) {
        console.error("Erreur lors de la récupération des albums :", error);
      }
    };
    fetchAlbums();
  }, []);

  const filteredTracks = tracks.filter((track) =>
    track.song.toLowerCase().includes(searchTerm.toLowerCase()) ||
    track.artist.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredArtists = artists.filter((artist) =>
    artist.artist.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredAlbums = albums.filter((album) =>
    album.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    album.artist.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-gray-900 min-h-screen text-white p-8">
      <div className="mb-8">
        <Searchbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Musiques</h2>
        <div className="flex gap-4 overflow-x-scroll scrollbar-hide">
          {filteredTracks.map((track, index) => (
            <div
              key={index}
              className="min-w-[200px] bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition"
            >
              <img
                src={track.cover}
                alt={track.song}
                className="w-full h-32 object-cover rounded mb-2"
              />
              <audio controls className="w-full mb-2">
                <source src={track.mp3} type="audio/mp3" />
                Votre navigateur ne supporte pas l'élément audio.
              </audio>
              <p className="text-sm font-semibold">{track.song}</p>
              <a href="#" className="text-xs text-gray-400 hover:underline">
                {track.artist}
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Artistes</h2>
        <div className="flex gap-4 overflow-x-scroll scrollbar-hide">
          {filteredArtists.map((artist, index) => (
            <div
              key={index}
              className="min-w-[150px] bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition text-center"
            >
              <img
                src={artist.picture}
                alt={artist.artist}
                className="w-full h-32 object-cover rounded-full mb-2"
              />
              <a href="#" className="text-sm font-semibold hover:underline">
                {artist.artist}
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Albums</h2>
        <div className="flex gap-4 overflow-x-scroll scrollbar-hide">
          {filteredAlbums.map((album, index) => (
            <div
              key={index}
              className="min-w-[200px] bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition"
            >
              <img
                src={album.cover}
                alt={album.title}
                className="w-full h-32 object-cover rounded mb-2"
              />
              <p className="text-sm font-semibold">{album.title}</p>
              <a href="#" className="text-xs text-gray-400 hover:underline">
                {album.artist}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
