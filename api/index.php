<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

// Connexion à la base de données
require_once 'database.php';
$db = new Database();
$conn = $db->getConnection();

if (!$conn) {
    echo json_encode(['error' => 'Impossible de se connecter à la base de données']);
    exit;
}

// Récupérer la partie de l'URL après 'api/'
$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$uri = explode('/', $uri);
$route = end($uri); // Récupère le dernier segment de l'URL

parse_str($_SERVER['QUERY_STRING'], $queryParams);

// Mettre à jour les chemins dans le switch pour inclure le dossier 'artists'
switch ($route) {
    case 'artists':  // Route pour tous les artistes
        require_once 'artists/artists-all.php';  // Correctement pointer vers artists-all.php
        break;
    case 'artist':  // Route pour un artiste spécifique
        require_once 'artists/artist.php';  // Correctement pointer vers artist.php
        break;
    default:
        echo json_encode(['error' => 'Route not found']);
}

