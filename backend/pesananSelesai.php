<?php

include "koneksi.php";

if (isset($_GET['id'])){
    $id_pesanan = $_GET['id'];
    $tanggal = date("Y-m-d");

    $dataPemesanan = mysqli_query($koneksi , "SELECT * FROM pemesanan WHERE id_pemesanan = '$id_pesanan'");
    $pemesanan = mysqli_fetch_assoc($dataPemesanan);

    $dataProduk1 = mysqli_query($koneksi, "SELECT * FROM pemesanan_produk WHERE id_pemesanan = '$id_pesanan' AND id_menu = 1");
    $dataWingkoKeju = mysqli_fetch_assoc($dataProduk1);

    $dataProduk2 = mysqli_query($koneksi, "SELECT * FROM pemesanan_produk WHERE id_pemesanan = '$id_pesanan' AND id_menu = 2");
    $dataWingkoWijen = mysqli_fetch_assoc($dataProduk2);

    //ambil semua harga // ?? buat menghindar nilai null
    $hargaWingkoKeju = $dataWingkoKeju["harga"] ?? 0;
    $hargaWingkoWijen = $dataWingkoWijen["harga"] ?? 0;
    $totalIncome = $pemesanan["Jumlah_harga"];

    //masukin total harga sama harga satuan item ke income table
    $insertIncome = mysqli_query($koneksi , "INSERT INTO data_income(tanggal,laba_wingko_keju,laba_wingko_wijen,Total_keuntungan)
    VALUE('$tanggal','$hargaWingkoKeju','$hargaWingkoWijen','$totalIncome')");

    //ngurangin stock sejumlah koposisi dikali jumlah
    $dataStock = mysqli_query($koneksi , "SELECT * FROM stock");
    //loop per row data
    while ($stock = mysqli_fetch_assoc($dataStock)) {
        $stock_item = $stock["stock"];

        // ?? 0 = untuk menghindari nilai null
        $jumlah_komposisi_keju = ($dataWingkoKeju["jumlah"] ?? 0) * $stock["komposisi_wingko_keju"];;
        $jumlah_komposisi_wijen = ($dataWingkoWijen["jumlah"] ?? 0 )* $stock["komposisi_wingko_wijen"];

        $stockBaru = $stock_item - ($jumlah_komposisi_keju + $jumlah_komposisi_wijen);

        mysqli_query($koneksi, "UPDATE stock SET stock = '$stockBaru' WHERE id_stock = '$stock[id_stock]'");
    }

    // hapus pesanan setelah selesai di kalkulasi
    $hapus = mysqli_query($koneksi , "DELETE FROM pemesanan WHERE id_pemesanan = '$id_pesanan'");
    $hapus_detail = mysqli_query($koneksi , "DELETE FROM pemesanan_produk WHERE id_pemesanan = '$id_pesanan'");
}

?>