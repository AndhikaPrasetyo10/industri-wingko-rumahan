<?php

$host = "localhost";
$user = "root";
$pass = "";
$db = "dbfresh.co";

$koneksi = mysqli_connect($host, $user, $pass, $db);

	if (!$koneksi) {
		die("Koneksi Gagal:".mysqli_connect_error());
	}
 ?>