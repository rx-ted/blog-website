<?php
$servername = "localhost";
$username = "root";
$password = "";
 
// 创建连接
$conn = mysqli_connect($servername, $username, $password,"blog",3306);
$sql = "set names utf8";
mysqli_query($conn,$sql);

?>