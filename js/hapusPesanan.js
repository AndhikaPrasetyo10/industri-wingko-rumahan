const url = new URLSearchParams(window.location.search);
const id = url.get("id");

const hapusButton = document.getElementById("hapusPesanan");

hapusButton.addEventListener("click",function(){

    if(confirm("Apakah Anda Yakin Pesanan Ini Akan Dihapus ?")){
        //ambil id terus kirim ke hapusPesanan.php
        fetch("../backend/hapusPesanan.php?id=" + id, {
            method : "GET"
        })
    }

})
