<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

// Connexion à la base de données
require_once __DIR__ . '/../database.php';

$db = new Database();
$conn = $db->getConnection();

if (!$conn) {
    echo json_encode(['error' => 'Impossible de se connecter à la base de données']);
    exit;
}

// Récupérer tous les artistes
$stmt = $conn->prepare("SELECT 
tracks.name AS track_name,
tracks.mp3 AS track_mp3,
albums.name AS album_name,
albums.cover_small AS album_cover,
artists.name AS artist_name
FROM tracks
JOIN albums ON tracks.album_id = albums.id
JOIN artists ON albums.artist_id = artists.id LIMIT 100;
");
$stmt->execute();
$albums = $stmt->fetchAll(PDO::FETCH_ASSOC);


echo json_encode(['albums' => $albums]);

?>
 