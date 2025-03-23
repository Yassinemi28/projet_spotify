<?php

header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Accept");


require_once("./database.php");

$query = "SELECT 
artists.name AS artist_name,
albums.name AS music_title,
albums.cover_small
FROM albums
JOIN artists ON albums.artist_id = artists.id LIMIT 25;
";
$result = $connect->query($query);
$array_albums = array();


while ($row = $result->fetch()) {

    $arr = array(
            "cover" => $row["cover_small"],
            "title" => $row["music_title"],
            "artist" => $row["artist_name"],
    );
    $array_albums[] = $arr;
}
echo json_encode($array_albums);


?>
 
