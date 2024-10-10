const urlSelesai = new URLSearchParams(window.location.search);
const idSelesai = urlSelesai.get("id");

const selesaiButton = document.getElementById("pesananSelesai");

selesaiButton.addEventListener("click",function(){

    if(confirm("Apakah Pesanan Ini Sudah Selesai ?")){
        //ambil id terus kirim
        fetch("../backend/pesananSelesai.php?id=" + idSelesai, {
            method : "GET"
        })
    }

})
