<?php
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

?>
