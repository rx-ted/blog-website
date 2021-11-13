<?php

// header("Content-Type:application/json");
// echo "content";

require_once("init.php");
$sql = $_REQUEST["name"];
$content = $_REQUEST["content"];
$datetime = $_REQUEST["datetime"];
// echo $sql;
// echo $content;
// echo $datetime;
$sql = "insert INTO `comment`(`name`,`content`,`datetime`) VALUES ('$sql' ,'$content' ,'$datetime');";
$result = mysqli_query($conn,$sql);
echo 200;
mysqli_close($conn);

//insert INTO `comment`(`name`,`content`,`datetime`) VALUES ('a' ,'a' ,'2021-11-8 22:30:58');
?>