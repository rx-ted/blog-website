<?php

header("Content-Type:application/json");
// echo "content";

require_once("init.php");
$sql = $_GET["sql"];
// echo $sql;
$result = mysqli_query($conn,$sql);
echo json_encode(mysqli_fetch_all($result,1));
mysqli_close($conn);

?>