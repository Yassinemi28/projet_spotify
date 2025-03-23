import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Pour récupérer l'ID de l'artiste

const Artist = () => {
  const { id } = useParams(); // Récupérer l'ID de l'artiste dans l'URL
  const [artist, setArtist] = useState(null); // Stocker les infos de l'artiste

  // Récupérer les infos de l'artiste
  useEffect(() => {
    fetch(`http://localhost:8000/api/artist?id=${id}`)
      .then((res) => res.json())
      .then((data) => setArtist(data.artist)) // Mettre les données de l'artiste dans l'état
      .catch((err) => console.error(err));
  }, [id]);

  // Afficher les infos de l'artiste
  return artist ? (
    <div>
      <h1>{artist.name}</h1>
      <p>{artist.description}</p>
    </div>
  ) : (
    <p>Chargement...</p>
  );
};

export default Artist;
