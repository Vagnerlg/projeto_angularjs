<?php
$carros = json_decode(file_get_contents("/var/www/html/projeto_angularjs/server/carros.txt"));
$handle = fopen("/var/www/html/projeto_angularjs/server/carros.txt", "w+");
$carro = json_decode(file_get_contents("php://input"));

$novoCarros = array();
foreach ($carros as $car) {
    if($car->data != $carro->data){
        $novoCarros[] = $car;
    }
}

$carrosString = json_encode($novoCarros);
fwrite($handle, $carrosString);
fclose($handle);
?>