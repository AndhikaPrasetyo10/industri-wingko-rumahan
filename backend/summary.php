<?php
include "koneksi.php";

if (isset($_POST['submit'])){
    //array utama
    $data = array();
    $tanggal = $_POST['tanggal'];
    //parse tanggal menjadi hanya bulan saja dan tahun saja
    $bulan = date("m",strtotime($tanggal));
    $tahun = date("Y", strtotime($tanggal));

    $filter = "SELECT * FROM pemesanan_produk
    JOIN pemesanan ON pemesanan_produk.id_pemesanan = pemesanan.id_pemesanan
    WHERE pemesanan.tanggal_pesanan = '$tanggal'";
    $data_produk = mysqli_query($koneksi,$filter);

    while ($detail = mysqli_fetch_assoc($data_produk)) {
        $data['pemesanan_produk'][] = $detail;
    }

    //menjumlah semua quantity sesuai dengan id menu
    $wingkoKeju = mysqli_query($koneksi,"SELECT SUM(jumlah) AS keju FROM pemesanan_produk
    JOIN pemesanan ON pemesanan_produk.id_pemesanan = pemesanan.id_pemesanan
    WHERE pemesanan_produk.id_menu = 1 AND pemesanan.tanggal_pesanan = '$tanggal'");
    $jumlahWingkoKeju = mysqli_fetch_assoc($wingkoKeju);

    $wingkoWijen = mysqli_query($koneksi,"SELECT SUM(jumlah) AS wijen FROM pemesanan_produk
    JOIN pemesanan ON pemesanan_produk.id_pemesanan = pemesanan.id_pemesanan
    WHERE pemesanan_produk.id_menu = 2 AND pemesanan.tanggal_pesanan = '$tanggal'");
    $jumlahWingkoWijen = mysqli_fetch_assoc($wingkoWijen);

    $jumlahData = array(
        "jumlah_wingko_keju" => $jumlahWingkoKeju,
        "jumlah_wingko_wijen" => $jumlahWingkoWijen,);
    //memasukan data jumlah ke array utama
    $data['total_wingko'] = $jumlahData;

    // Income box data proses
    $incomeArray = array();
    $dataDailyIncome = mysqli_query($koneksi ,"SELECT * FROM data_income WHERE tanggal = '$tanggal'");
    while($dailyIncome = mysqli_fetch_assoc($dataDailyIncome)){
        $incomeArray[] = $dailyIncome;
    }
    //memasukan data ke array utama
    $data['dailyIncome'] = $incomeArray;

    $incomeMonthArray = array();
    $dataMonthlyIncome = mysqli_query($koneksi, "SELECT * FROM data_income WHERE DATE_FORMAT(tanggal , '%Y-%m') = '$tahun-$bulan'");
    while($monthlyIncome = mysqli_fetch_assoc($dataMonthlyIncome)){
        $incomeMonthArray[] = $monthlyIncome;
    }
    $data['monthlyIncome'] = $incomeMonthArray;

    // data Box pengeluaran proses
    $pengeluaranArray = array();
    $dataPengeluaran = mysqli_query($koneksi, "SELECT * FROM data_modal WHERE tanggal = '$tanggal'");
    while($pengeluaran = mysqli_fetch_assoc($dataPengeluaran)){
        $pengeluaranArray[] = $pengeluaran;
    }
    $data['pengeluaran'] = $pengeluaranArray;

    $pengeluaranMonthArray = array();
    $dataMonthlyPengeluaran = mysqli_query($koneksi, "SELECT * FROM data_modal WHERE DATE_FORMAT(tanggal , '%Y-%m') = '$tahun-$bulan'");
    while($monthlyPengeluaran = mysqli_fetch_assoc($dataMonthlyPengeluaran)){
        $pengeluaranMonthArray[] = $monthlyPengeluaran;
    }
    $data['pengeluaranBulanan'] = $pengeluaranMonthArray;

    header('Content-Type: application/json');
    echo json_encode($data);
};
?>