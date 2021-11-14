<?php
require_once("init.php");
$sql = $_REQUEST["name"];
$content = $_REQUEST["content"];
$datetime = $_REQUEST["datetime"];
$sql = "insert INTO `comment`(`name`,`content`,`datetime`) VALUES ('$sql' ,'$content' ,'$datetime');";
$result = mysqli_query($conn,$sql);
echo 200;
mysqli_close($conn);
?>