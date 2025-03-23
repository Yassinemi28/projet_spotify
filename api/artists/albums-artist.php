<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

require_once __DIR__ . '/../database.php';


$database = new Database();
$conn = $database->getConnection();

if (isset($_GET['id'])) {
    $artist_id = $_GET['id'];

    $query = "SELECT id, name, cover FROM albums WHERE artist_id = :artist_id";
    $stmt = $conn->prepare($query);
    $stmt->bindParam(":artist_id", $artist_id);
    $stmt->execute();

    $albums = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode(["albums" => $albums]);
} else {
    echo json_encode(["message" => "Aucun ID d'artiste fourni"]);
}
?>
