<?php 
 
header("Content-type: text/javascript"); 

$JSON = file_get_contents("http://localhost:5000/user/chiffa");
echo $JSON;

?>
 
informationProfil(profil);
