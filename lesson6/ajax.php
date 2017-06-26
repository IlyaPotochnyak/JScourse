<form action="" method="get">
    <input type="hidden" name="act" value="Edit">
    <input type="hidden" name="id" value="">
    Заголовок<input type="text" name="title" value=""><br>
    Текст<textarea type="text" name="newText" rows="10" cols="45" value=""></textarea><br>

    <input type="submit" value="Редактировать">
</form>

<?php
var_dump($_GET);