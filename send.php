<?php
$recipient = "vip-service.ua";

$site_name = "Call Back";

$name = trim($_POST["user-name"]);
$phone = trim($_POST["user-phone"]);
$description = trim($_POST["message"]);

$message = "Name: $name \n Phone: $phone \n Message: $description \n";


mail($recipient, $site_name, $message,
    "Content-type: text/plain; charset=\"utf-8\"\n From: $phone");