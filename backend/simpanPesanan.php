<?php
include 'koneksi.php';

if (isset($_POST['submit'])) {
    // Mengambil data dari form
    $pemilik = $_POST['nama'];
    $alamat = $_POST['alamat'];
    $kontak = $_POST['kontak'];
    $catatan = $_POST['catatan'];
    $Jumlah_harga = $_POST['totalPrice'];
    $tanggal_pesanan = date("Y-m-d");
    $rawCartdata = json_decode($_POST['cartData']); //decode buat mengurai json
    $status = "Menunggu Konfirmasi";

    //filter cart data agar tidak null
    $cart_data = array_filter($rawCartdata, function ($item){
        return $item !== null ;
    });

    $insertPemesanan = "INSERT INTO pemesanan (tanggal_pesanan, pemilik, alamat, kontak, catatan, Jumlah_harga , status) VALUES ('$tanggal_pesanan', '$pemilik', '$alamat', '$kontak', '$catatan', '$Jumlah_harga' , '$status')";

    if (mysqli_query($koneksi, $insertPemesanan)) {
        // Mendapatkan id pemesanan insert diatas
        $id_pemesanan = mysqli_insert_id($koneksi);

        foreach ($cart_data as $item) {
            $id_menu = $item->id_menu;
            $nama_menu = $item->nama_menu;
            $quantity = $item->quantity;
            $price = $item->price;

            $insertDetailPesanan = "INSERT INTO pemesanan_produk (id_pemesanan, id_menu, nama_menu, jumlah, harga) VALUES ('$id_pemesanan', '$id_menu', '$nama_menu', '$quantity', '$price')";

            if (!mysqli_query($koneksi, $insertDetailPesanan)) {
                echo "Error: " . $insertDetailPesanan . "<br>" . mysqli_error($koneksi);
            }
        }

        echo "<script>alert('Terima Kasih Pemesanan Akan Di Proses! Silahkan Lihat Pesanan Anda Di Info Pesanan');</script>";
        echo "<script>location= '../index.html'</script>";
    } else {
        echo "Error: " . $insertPemesanan . "<br>" . mysqli_error($koneksi);
    }
}
?>
