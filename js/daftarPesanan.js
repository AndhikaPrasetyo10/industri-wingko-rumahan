const tableBody = document.getElementById('daftar-table-body');

//menulis table dengan mengambil dari db pesanan
fetch("../backend/informasiPesanan.php")
    .then(response => response.json())
    .then(data =>{
        console.log('terhubung mengambil data')
        data.forEach(row =>{
            const newRow = document.createElement('tr');
            newRow.innerHTML = `
            <td>${row.tanggal_pesanan}</td>
            <td>${row.pemilik}</td>
            <td>${row.alamat}</td>
            <td>${row.kontak}</td>
            <td>${row.catatan}</td>
            <td>Rp.${row.Jumlah_harga}</td>
            <td><a class="detailButton" href="../admin_pages/detail(admin).html?id=${row.id_pemesanan}">Detail</a></td>
            <td class="status">
              <select name = "status_pesanan">
                <option value = "Dalam Antrian" class = "antri">Dalam Antrian</option>
                <option value = "Sedang Dibuat"  class = "proses">Sedang Dibuat</option>
                <option value = "Dalam Perjalanan" class = "diantar">Dalam Perjalanan</option>
              </select>
            </td>
            `;

            const selectButton = newRow.querySelector('select[name="status_pesanan"]');
            selectButton.value = row.status;

            selectButton.addEventListener('change', function() {
                const id_pemesanan = row.id_pemesanan;

                fetch("../backend/ubahStatus.php",{
                  method : 'POST',
                  headers :{
                    'Content-Type' : 'application/json',
                  },
                  body : JSON.stringify({ id_pemesanan : id_pemesanan , selectValue : selectButton.value}),
                })
                .then(response => response.json())

            });
            tableBody.appendChild(newRow);
        });
 })
