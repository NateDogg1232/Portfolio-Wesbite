<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title><?php
                //Don't include the whole page title thing for the home page
                if ($page != "home")
                    echo ucfirst($page) . " | ";
            ?>
        Nathaniel Barragan</title>
    <link rel="stylesheet" href="../css/main.css">
</head>
