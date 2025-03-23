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
$stmt = $conn->prepare("SELECT * FROM albums");
$stmt->execute();
$albums = $stmt->fetchAll(PDO::FETCH_ASSOC);


echo json_encode(['albums' => $albums]);

?>
 