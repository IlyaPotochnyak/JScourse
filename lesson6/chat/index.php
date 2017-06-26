<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Chat</title>
    <script src="../../jquery-3.2.1.js"></script>
    <script src="chat.js"></script>
    <style>
        .date {
            color: grey;
            font-size: 10;
        }
    </style>
</head>
<body>
<h1>Чат</h1>
<hr>

Имя:
<input name="name" id="name"/>

Текст:
<input name="text" id="text"/>
<input type="submit" id="btnSend">
<hr>
<div id="chat"></div>
</body>
</html>