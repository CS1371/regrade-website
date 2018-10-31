<?php

header('Access-Control-Allow-Origin: *');  
//$_SERVER['CONTENT-TYPE'] = 'application/json';
header('Content-Type: application/json');

// $test = $_POST["test"];
// echo "$test";

// $variable->test1 = '345';
// $variable->test2 = '34654';
// $print = json_encode($variable);
// var_dump($print);

var_dump($_REQUEST);
echo file_get_contents('php://input');
echo "hello is: " . $_REQUEST["hello"];

echo "Always here";
?>