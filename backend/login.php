<?php
include 'koneksi.php';

if (isset($_POST['login'])) {
    //ambil data form
    $user =  $_POST['name'];
    $password = $_POST['password'];

    //select data
    $ambil = mysqli_query($koneksi, "SELECT * FROM admin WHERE username = '$user' AND password = '$password'");
    $hasil = mysqli_fetch_array($ambil);
    $login_user = $hasil['username'];
    $row = mysqli_num_rows($ambil);

    //cek login form
    if ($row > 0) {
        if ($login_user == $user) {
            header('location: ../admin_pages/admin.html');
        } else {
            header('location: ../login.html');
        }
    } else{
        header('location: ../login.html');

    }
}

?>