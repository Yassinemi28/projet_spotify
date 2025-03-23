<?php
header("Access-Control-Allow-Origin: *"); // Permet les requêtes depuis n'importe quel domaine
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE"); // Méthodes HTTP autorisées
header("Access-Control-Allow-Headers: Content-Type"); // En-têtes autorisés

// Vérification si 'id' existe dans les paramètres de la requête
if (isset($queryParams['id'])) {
    getArtist($conn, $queryParams['id']);
} else {
    echo json_encode(['error' => 'Artist ID missing']);
}

// Fonction pour récupérer un artiste par ID
function getArtist($conn, $id) {
    $stmt = $conn->prepare("SELECT * FROM artists WHERE id = :id");
    $stmt->bindParam(':id', $id, PDO::PARAM_INT);
    $stmt->execute();
    $artist = $stmt->fetch(PDO::FETCH_ASSOC);

    if (!$artist) {
        echo json_encode(['error' => 'Artist not found']);
    } else {
        echo json_encode(['artist' => $artist]);
    }
}

