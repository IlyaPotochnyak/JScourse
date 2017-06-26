<?php
/**
 * Created by PhpStorm.
 * User: potoc
 * Date: 22.06.2017
 * Time: 14:18
 */


$name = $_POST['name'];
$text = $_POST['text'];


if (($name != '') && ($text != '')) {

    $f = fopen('messages.txt', 'a+');
    fwrite($f, date('Y-m-d H:i:s') . "___");

    fwrite($f, $name . "___");
//    var_dump($name . ', ' . $text);die;
    fwrite($f, $text . "\n");
    fclose($f);
}