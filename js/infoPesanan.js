const tableBody = document.getElementById('info-table-body');

//menulis table dengan mengambil dari db pesanan
fetch("./backend/informasiPesanan.php")
    .then(response => response.json())
    .then(data =>{
        console.log('terhubung mengambil data')
        data.forEach(row =>{
            const newRow = document.createElement('tr');
            newRow.innerHTML = `
            <td>${row.tanggal_pesanan}</td>
            <td>${row.pemilik}</td>
            <td>Rp.${row.Jumlah_harga}</td>
            <td><a class="detailButton" href="detailPesanan.html?id=${row.id_pemesanan}">Detail</a></td>
            <td><a class = "statusButton" color-status="${row.status}">${row.status}</a>
            `;
            tableBody.appendChild(newRow);
        });
 })
