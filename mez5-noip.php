<?php
header('content-type: application/json; charset=utf-8');
$data = json_encode($_SERVER['mez5.no-ip.org']);
echo $_GET['callback'] . '(' . $data . ');';
?>
