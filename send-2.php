<?php
$recipient = "vip-service.ua";
$site_name = "Call Back";
$name = htmlspecialchars($_POST["user-name"]);
$phone = htmlspecialchars($_POST["user-phone"]);
$message = "Name: $name \n Phone: $phone \n";


mail($recipient, $site_name,
    "Content-type: text/plain; charset=\"utf-8\"\n From: $phone");