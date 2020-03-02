<?php
    $q = $_REQUEST["q"];
    $splittedData = explode(";", $q);
    $to = "cinosmoh@gmail.com";
    $subject = "Delivery Time!!!";
    $message = "Name: " . $splittedData[0] . "\n" . "Address: " . $splittedData[1] . "\n" . "Phone no: " . $splittedData[2] . "\n" . $splittedData[3] . "\n" . $splittedData[4];
    mail($to, $subject, $message);
?>
