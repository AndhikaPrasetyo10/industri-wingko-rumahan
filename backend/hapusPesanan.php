<?php
 include "koneksi.php";

if (isset($_GET['id'])){
    $id_pesanan = $_GET['id'];

    $hapus = mysqli_query($koneksi , "DELETE FROM pemesanan WHERE id_pemesanan = '$id_pesanan'");
    $hapus_detail = mysqli_query($koneksi , "DELETE FROM pemesanan_produk WHERE id_pemesanan = '$id_pesanan'");


}


?>