<?php

$contactNom = $_REQUEST ["contact-nom"] ?? "";
$contactEmail = $_REQUEST ["contact-email"] ?? "";
$contactMessage = $_REQUEST ["contact-message"] ?? "";

$block = "Nom : $contactNom, \nMail : $contactEmail, \n\nMessage : $contactMessage\n------------------\n\n";
file_put_contents("php/model/contact.txt", $block, FILE_APPEND);

echo "Merci $contactNom, votre message a bien été envoyé, il sera traité au plus vite ! ";
?>