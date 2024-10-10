<?php
include 'koneksi.php';

$data = json_decode(file_get_contents('php://input'), true);

if(isset($data['id_pemesanan']) && isset($data['selectValue'])) {
    $id_pemesanan = $data['id_pemesanan'];
    $value = $data['selectValue'];

    $sql = "UPDATE pemesanan SET status = '$value' WHERE id_pemesanan = $id_pemesanan";

    if ($koneksi->query($sql) === TRUE) {
        $response = array('status' => 'success',);
    }
    echo json_encode($response);
}
?>