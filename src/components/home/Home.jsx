import { useState, useEffect } from 'react';  

const Home = () => {
  const [tracks, setTracks] = useState([]);
  const [artists, setArtists] = useState([]);
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const fetchTracks = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/tracks/tracks.php", {
          method: "GET",
          headers: { Accept: "application/json" },
        });
        const data = await response.json();
        setTracks(data);
        console.log("Sons chargés :", data);
      } catch (error) {
        console.error("Erreur lors de la récupération des sons :", error);
      }
    };
    fetchTracks();
  }, []);

  useEffect(() => {
    const fetchArtists = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/artists/artists-all.php", {
          method: "GET",
          headers: { Accept: "application/json" },
        });
        const data = await response.json();
        setArtists(data);
        console.log("Artistes chargés :", data);
      } catch (error) {
        console.error("Erreur lors de la récupération des artistes :", error);
      }
    };
    fetchArtists();
  }, []);

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/albums/albums.php", {
          method: "GET",
          headers: { Accept: "application/json" },
        });
        const data = await response.json();
        setAlbums(data);
        console.log("Albums chargés :", data);
      } catch (error) {
        console.error("Erreur lors de la récupération des albums :", error);
      }
    };
    fetchAlbums();
  }, []);

  // Carousel pour Musiques
  const renderTracksCarousel = () => {
    return (
      <div className="carousel-container">
        <h2>Musiques</h2>
        <div className="carousel">
          {tracks.map((track, index) => (
            <div key={index} className="carousel-item">
              <img src={track.cover} alt={track.song} />
              <audio controls>
              <source src={track.mp3} type="audio/mp3" />
              Votre navigateur ne supporte pas l'élément audio.
            </audio>
              <p>{track.song}</p>
              <a href="#">{track.artist}</a>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Carousel pour Artistes
  const renderArtistsCarousel = () => {
    return (
      <div className="carousel-container">
        <h2>Artistes</h2>
        <div className="carousel">
          {artists.map((artist, index) => (
            <div key={index} className="carousel-item">
              <img src={artist.picture} alt={artist.artist} />
              <a href="#">{artist.artist}</a>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Carousel pour Albums
  const renderAlbumsCarousel = () => {
    return (
      <div className="carousel-container">
        <h2>Albums</h2>
        <div className="carousel">
          {albums.map((album, index) => (
            <div key={index} className="carousel-item">
              <img src={album.cover} alt={album.title} />
              <p>{album.title}</p>
              <a href="#">{album.artist}</a>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div>
      {tracks.length > 0 && renderTracksCarousel()}
      {artists.length > 0 && renderArtistsCarousel()}
      {albums.length > 0 && renderAlbumsCarousel()}
    </div>
  );
};

export default Home;