<?php
$carros = json_decode(file_get_contents("/var/www/html/projeto_angularjs/server/carros.txt"));
$handle = fopen("/var/www/html/projeto_angularjs/server/carros.txt", "w+");
$carro = json_decode(file_get_contents("php://input"));
array_push($carros, $carro);
$carrosString = json_encode($carros);
fwrite($handle, $carrosString);
fclose($handle);
?>