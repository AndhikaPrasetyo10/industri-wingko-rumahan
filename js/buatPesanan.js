document.addEventListener("DOMContentLoaded", function () {
    const cartItems = document.getElementById("cart-items");

    // Mengambil data dari Local Storage
    const totalPrice = localStorage.getItem('totalPrice');
    document.getElementById('totalPriceCart').value = totalPrice || '[]';
    const rawcartData = JSON.parse(localStorage.getItem("cartData"));

    cartData = rawcartData.filter(item => item !== null);

    if (cartData.length > 0) {
      // Tampilkan data dalam bentuk tabel
      cartData.forEach(item => {
        if (item != null){
          const row = document.createElement("tr");
          row.innerHTML = `
            <td>${item.nama_menu}</td>
            <td>${item.quantity}</td>
            <td>${item.price.toLocaleString()}</td>`
          //   <td>${(item.price * item.quantity).toLocaleString()}</td>
         ;
          cartItems.appendChild(row);
        }

      });
    } else {
      const emptyRow = document.createElement("tr");
      emptyRow.innerHTML = `<td colspan="4" font-size = '24px'>Keranjang belanja kosong</td>`;
      cartItems.appendChild(emptyRow);
    }

    const cartDataInput = localStorage.getItem("cartData");
    document.getElementById('cartDataInput').value = cartDataInput || '[]'
});

function hapusLocalStorageCart(){
  localStorage.removeItem('cartData')
}

//fungsi tombol menghapus local storage setelah di klik
document.getElementById('tombolSubmitPesanan').addEventListener('click',hapusLocalStorageCart);
