<?php
// Autoriser les requêtes depuis n'importe quelle origine (tu peux spécifier l'URL de ton front-end si tu veux être plus restrictif)
header("Access-Control-Allow-Origin: *"); 



header("Content-Type: application/json");
class Database {
    private string $host = '127.0.0.1'; // Nom du conteneur Docker
    private string $dbname = 'spotify_db';  // Nom de la base de données
    private string $username = 'root';      // Utilisateur
    private string $password = 'root';      // Mot de passe
    private static ?PDO $pdo = null;

    public function getConnection(): ?PDO {
        if (!self::$pdo) {
            try {
                self::$pdo = new PDO(
                    "mysql:host={$this->host};dbname={$this->dbname};charset=utf8",
                    $this->username,
                    $this->password
                );
                self::$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            } catch (PDOException $e) {
                error_log("Erreur de connexion : " . $e->getMessage());
                return null;
            }
        }
        return self::$pdo;
    }
}


$db = new Database();
$conn = $db->getConnection();

if ($conn) {
    $stmt = $conn->query("SELECT * FROM artists"); // Récupère tous les artists de la table
    $artists = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Si des artists sont trouvés, on les encode en JSON et les renvoie
    if ($artists) {
        echo json_encode($artists);
    } else {
        echo json_encode(['message' => 'Aucun album trouvé']);
    }
} else {
    echo json_encode(['error' => 'Impossible de se connecter à la base de données']);
}
?>
