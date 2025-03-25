<?php

$servername = "127.0.0.1";
$username = "root";
$password = "root";
try {
    $connect = new PDO("mysql:host=$servername;dbname=spotify_db", $username, $password);
    $connect->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
}
catch(PDOException $e) {
    echo "Erreur : ".$e->getMessage();
    die();
}