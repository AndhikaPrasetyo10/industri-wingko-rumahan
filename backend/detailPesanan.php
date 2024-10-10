<?php
 include 'koneksi.php';

$ambil = "SELECT * FROM pemesanan_produk WHERE pemesanan_produk.id_pemesanan='$_GET[id]'";
$hasil = mysqli_query($koneksi,$ambil);

$data = array();
if (mysqli_num_rows($hasil)  > 0){
    while ($row = mysqli_fetch_assoc($hasil)){
        $data[] = $row;
    }
}

header('Content-Type: application/json');
echo json_encode($data);
?>
