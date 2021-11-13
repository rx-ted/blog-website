<?php
require_once("init.php");
$id = $_REQUEST["id"];
$sql = "delete from comment where Id=$id";
$result = mysqli_query($conn,$sql);
echo 200;
mysqli_close($conn);

?>