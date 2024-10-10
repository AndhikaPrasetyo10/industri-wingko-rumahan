const detailTableBody = document.getElementById('detail-table-body');

const urlGet = new URLSearchParams(window.location.search);

fetch(`./backend/detailPesanan.php?id=${urlGet.get('id')}`)
    .then(response => response.json())
    .then(data =>{
        console.log('terhubung mengambil data')
        data.forEach(row =>{
            const newRow = document.createElement('tr');
            newRow.innerHTML = //`
           // <td>${row.id_pemesanan}</td>
            `<td>${row.id_menu}</td>
            <td>${row.nama_menu}</td>
            <td>${row.jumlah}</td>
            <td>Rp.${row.harga}</td>
            `;
            detailTableBody.appendChild(newRow);
        });
 })
