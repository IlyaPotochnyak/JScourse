<?php
/**
 * Created by PhpStorm.
 * User: potoc
 * Date: 26.06.2017
 * Time: 16:14
 */

$query = $_POST['req'];
//var_dump($query);
//file('countries.txt');
$content = file('countries.txt');
$result = [];
foreach ($content as $key=>$val){
    if (false !== $pos = mb_stripos($val, $query)){
        $result[]['name'] = $val;
//        $result[] = $pos;
    }
//    var_dump(strpos($val, $query));
}
//var_dump($result);


//foreach
//stripos, mb_stripos
//header('Content-Type: application/json');
echo json_encode($result);
