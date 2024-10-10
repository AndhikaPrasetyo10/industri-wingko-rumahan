<?php
include "koneksi.php";

if (isset ($_POST['submit'])){
    //ambil dari form
    $kelapa = $_POST['kelapa'];
    $telor = $_POST['telor'];
    $tepung_ketan = $_POST['tepungKetan'];
    $margarin = $_POST['margarin'];
    $gula_pasir= $_POST['gulaPasir'];
    $susu_kental = $_POST['susuKental'];
    $keju = $_POST['keju'];
    $wijen = $_POST['wijen'];
    $kemasan = $_POST['kemasan'];
    // khusus pengeluaran berbeda table db
    $pengeluaran = $_POST['pengeluaran'];
    $tanggal_pengeluaran = date("Y-m-d");

    //QUERY SEMUA BAHAN SESUAI DENGAN ID TABEL
    $queryKelapa = mysqli_query($koneksi , "SELECT * FROM stock WHERE id_stock = 1");
    $row_kelapa = mysqli_fetch_assoc($queryKelapa);

    $queryTelor = mysqli_query($koneksi , "SELECT * FROM stock WHERE id_stock = 2");
    $row_telor = mysqli_fetch_assoc($queryTelor);

    $queryTepungKetan = mysqli_query($koneksi , "SELECT * FROM stock WHERE id_stock = 3");
    $row_tepung_ketan = mysqli_fetch_assoc($queryTepungKetan);

    $queryMargarin = mysqli_query($koneksi , "SELECT * FROM stock WHERE id_stock = 4");
    $row_margarin = mysqli_fetch_assoc($queryMargarin);

    $queryGulaPasir = mysqli_query($koneksi , "SELECT * FROM stock WHERE id_stock = 5");
    $row_gula_pasir = mysqli_fetch_assoc($queryGulaPasir);

    $querySusuKental = mysqli_query($koneksi , "SELECT * FROM stock WHERE id_stock = 6");
    $row_susu_kental = mysqli_fetch_assoc($querySusuKental);

    $queryKeju = mysqli_query($koneksi , "SELECT * FROM stock WHERE id_stock = 7");
    $row_keju = mysqli_fetch_assoc($queryKeju);

    $queryWijen = mysqli_query($koneksi , "SELECT * FROM stock WHERE id_stock = 8");
    $row_wijen = mysqli_fetch_assoc($queryWijen);

    $queryKemasan = mysqli_query($koneksi , "SELECT * FROM stock WHERE id_stock = 9");
    $row_kemasan = mysqli_fetch_assoc($queryKemasan);

    //menambah stock lama dengan yang baru
    $update_kelapa = $row_kelapa["stock"] + $kelapa;
    $update_telor = $row_telor["stock"] + $telor;
    $update_tepung_ketan = $row_tepung_ketan["stock"] + $tepung_ketan;
    $update_margarin = $row_margarin["stock"] + $margarin;
    $update_gula_pasir = $row_gula_pasir["stock"] + $gula_pasir;
    $update_susu_kental = $row_susu_kental["stock"] + $susu_kental;
    $update_keju = $row_keju["stock"] + $keju;
    $update_wijen = $row_wijen["stock"] + $wijen;
    $update_kemasan = $row_kemasan["stock"] + $kemasan;

    // query untuk update memasukan data baru
    $query_update_kelapa = mysqli_query($koneksi , "UPDATE stock SET stock = $update_kelapa WHERE id_stock = 1");
    $query_update_telor = mysqli_query($koneksi , "UPDATE stock SET stock = $update_telor WHERE id_stock = 2");
    $query_update_tepung_ketan = mysqli_query($koneksi , "UPDATE stock SET stock = $update_tepung_ketan WHERE id_stock = 3");
    $query_update_margarin = mysqli_query($koneksi , "UPDATE stock SET stock = $update_margarin WHERE id_stock = 4");
    $query_update_gula_pasir = mysqli_query($koneksi , "UPDATE stock SET stock = $update_gula_pasir WHERE id_stock = 5");
    $query_update_susu_kental = mysqli_query($koneksi , "UPDATE stock SET stock = $update_susu_kental WHERE id_stock = 6");
    $query_update_keju = mysqli_query($koneksi , "UPDATE stock SET stock = $update_keju WHERE id_stock = 7");
    $query_update_wijen = mysqli_query($koneksi , "UPDATE stock SET stock = $update_wijen WHERE id_stock = 8");
    $query_update_kemasan = mysqli_query($koneksi , "UPDATE stock SET stock = $update_kemasan WHERE id_stock = 9");



    // memasukan modal dari pengeluaran ke tabel modal
    $insertModal = mysqli_query($koneksi , "INSERT INTO data_modal(tanggal,modal) VALUE ('$tanggal_pengeluaran' ,'$pengeluaran')");

    echo "<script>alert('Terimakasih Stock Telah Ditambahkan');</script>";
    echo "<script>location = ('../admin_pages/admin.html');</script>";
};
?>