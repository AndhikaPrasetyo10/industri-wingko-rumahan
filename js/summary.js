const summaryDate = document.getElementById("summaryDate");
const wingkoKeju = document.getElementById("wingkoKejuValue").querySelector("input");
const wingkoWijen = document.getElementById("wingkoWijenValue").querySelector("input");
const dataTable = document.getElementById('summary-content');

//box keuangan
const orderBox = document.getElementById('orderBox');
const orderBox_number = document.getElementById('orderBox_number');
const dailyIncome_number = document.getElementById("dailyIncome_number");
let dailyIncome = 0;
const monthlyIncome_number = document.getElementById("monthlyIncome_number");
let monthlyIncome = 0;
const pengeluaran_number = document.getElementById("pengeluaran_number");
let pengeluaran = 0;
const pengeluaranBulanan_number = document.getElementById("pengeluaranBulanan_number");
let pengeluaranBulanan = 0;



//fungsi mereload table biar ga numpuk saat di click 2 kali
function reloadTable(){
    while(dataTable.firstChild){
        dataTable.removeChild(dataTable.firstChild);
    }
}

//berjalan saat submit di click
document.querySelector('.summaryButton').addEventListener('click',function(e){
//menghilangkan fungsi form agar tidak berpindah ke file php
 e.preventDefault();
 reloadTable();

 fetch('../backend/summary.php',{
    method : "POST",
    headers : {
        "Content-Type" : "application/x-www-form-urlencoded"
    },
    body : new URLSearchParams({
        'submit' : 'true',
        'tanggal' : summaryDate.value
    })
 })
    .then(response => response.json())
    .then(data => {
        console.log('terhubung mengambil data', );
        console.log(data);
        //  tampilin jumlah ke html
        // fungsi '?' untuk mengubah data menjadi 0 apabila data null(pesanan tidak ada)
        wingkoKeju.value = (data.total_wingko.jumlah_wingko_keju.keju !== null) ? data.total_wingko.jumlah_wingko_keju.keju : 0;
        wingkoWijen.value = (data.total_wingko.jumlah_wingko_wijen.wijen !== null) ? data.total_wingko.jumlah_wingko_wijen.wijen : 0;

        //parse jumlah ke int buat dijumlahkan ke komp0sisi total
        wingkoKejuInt = parseInt(data.total_wingko.jumlah_wingko_keju.keju !== null ? data.total_wingko.jumlah_wingko_keju.keju : 0);
        wingkoWijenInt = parseInt(data.total_wingko.jumlah_wingko_wijen.wijen !== null ? data.total_wingko.jumlah_wingko_wijen.wijen : 0);

    //box keuangan
        // order box
        orderBox.value = parseInt(wingkoKeju.value) + parseInt(wingkoWijen.value);
        orderBox_number.textContent = orderBox.value;

        //daily income box
        let totalKeuntungan = 0;
       for(let array of data.dailyIncome){
        const income = parseInt(array.Total_keuntungan);
        totalKeuntungan += income;
       }
        dailyIncome = totalKeuntungan;
        console.log(dailyIncome);
        dailyIncome_number.textContent = "Rp."+ dailyIncome;
        //Monthly Income Box
       let keuntunganBulanan = 0;
       for (let array of data.monthlyIncome){
        const monthIncome = parseInt(array.Total_keuntungan);
        keuntunganBulanan += monthIncome;
       }
       monthlyIncome = keuntunganBulanan;
       monthlyIncome_number.textContent = "Rp."+ monthlyIncome;

       //pengeluaran Box
       let totalPengeluaran = 0;
       for (let array of data.pengeluaran){
        const dataPengeluaran = parseInt(array.modal);
        totalPengeluaran += dataPengeluaran;
        }
        pengeluaran = totalPengeluaran;
        pengeluaran_number.textContent = "Rp." + pengeluaran;
       //pengeluaran bulanan box
       let totalPengeluaranBulanan = 0;
       for (let array of data.pengeluaranBulanan){
        const dataPengeluaranBulanan = parseInt(array.modal);
        totalPengeluaranBulanan += dataPengeluaranBulanan;
       }
       pengeluaranBulanan = totalPengeluaranBulanan;
       pengeluaranBulanan_number.textContent = "Rp." + pengeluaranBulanan;

        fetch('../backend/stockBahan.php')
         .then(response => response.json())
         .then(stock =>{
           console.log('terhubung mengambil data stock');
           stock.forEach(data =>{
               let komposisiTotal = (data.komposisi_wingko_keju * wingkoKejuInt) + (data.komposisi_wingko_wijen * wingkoWijenInt);
               let selisih = data.stock - komposisiTotal;
               if (selisih >= 0){
                selisih = "Bahan Cukup"
               }
               const newRow = document.createElement('tr');
               newRow.innerHTML = `
               <td>${data.nama_bahan}</td>
               <td>${data.komposisi_wingko_keju} ${data.komposisi_wingko_keju < 20 ? 'pcs' : 'gram'}</td>
               <td>${data.komposisi_wingko_wijen} ${data.komposisi_wingko_wijen < 20 ? 'pcs' : 'gram'}</td>
               <td>${komposisiTotal} ${komposisiTotal < 45 ? 'pcs' : 'gram'}</td>
               <td>${data.stock}  ${data.komposisi_wingko_keju < 20 ? 'pcs' : 'gram'}  </td>
               <td>${selisih} </td>



               `;
            dataTable.appendChild(newRow);

                   })
               })
    })
})

// saat tombol stock di click
const itemDetailtambahStock = document.querySelector("#tambahStockID");

document.querySelector('.tambahStockButton').addEventListener("click" ,function(e) {
    e.preventDefault();
    itemDetailtambahStock.style.display = "flex";

});
// tombol close
document.querySelector(".tambahStock .close-icon").addEventListener("click" , function(e){
    e.preventDefault();
    itemDetailtambahStock.style.display = "none";

});


