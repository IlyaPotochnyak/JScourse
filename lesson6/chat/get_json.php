<?php
/**
 * Created by PhpStorm.
 * User: potoc
 * Date: 22.06.2017
 * Time: 14:25
 */

$maxId = $_POST['maxId'];
//var_dump($_POST);
$strings = file('messages.txt');
//var_dump($strings);die;
$messages = [];
//var_dump(count($strings));

for ($i = $maxId; $i < count($strings); $i++) {
    $string = explode('___', $strings[$i]);
    $arr = [];
    $arr['date'] = $string[0];
    $arr['name'] = $string[1];
    $arr['text'] = $string[2];
//    var_dump($arr);
    $messages[] = $arr;
}


header('Content-Type: application/json');
echo json_encode($messages);