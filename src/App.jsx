import React, { useEffect, useState } from 'react';

const App = () => {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    // Appel de l'API PHP pour récupérer les artists
    fetch('http://localhost:8000/api/api.php') // Assure-toi que le chemin est correct
      .then(response => response.json())
      .then(data => setArtists(data))
      .catch(error => console.error('Erreur:', error));
  }, []);

  return (
    <div>
      <h1>Liste des Artists</h1>
      <ul>
        {artists.map(album => (
          <li key={album.id}>{album.name}</li> // suppose qu'il y a un champ 'title' dans la table artists
        ))}
      </ul>
    </div>
  );
};

export default App;
