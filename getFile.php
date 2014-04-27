<?php
    if(isset($_GET['filename'])) {
        $fName = $_GET['filename'];

        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $fName);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);

        $text = curl_exec($ch);
        echo $text;
    }
?>
