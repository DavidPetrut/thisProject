<?php

    $executionStartTime = microtime(true) / 1000;

    $url1 = 'http://api.geonames.org/timezoneJSON?formatted=true&lat=' . $_REQUEST['lat'] . '&lng=' . $_REQUEST['lng'] .  '&username=David112&style=full';

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_URL,$url1);

    $result=curl_exec($ch);

    curl_close($ch);

    $decode = json_decode($result,true);    

    
    header('Content-Type: application/json; charset=UTF-8');

    echo json_encode($output); 

?>