const shoppingCart = document.querySelector(".shopping-cart");
document.querySelector("#shopping-cart-button").onclick = (event) => {
  shoppingCart.classList.toggle("active");
  event.preventDefault();
};

// mecegah tombol shopping cart untuk berpindah keatas
const shoppingCartButtonElement = document.getElementById( "shopping-cart-button");
shoppingCartButtonElement.addEventListener("click", function (event) {
  event.preventDefault();
});

let quantity = document.querySelector('.quantity');
let total = document.querySelector('.total');
let cartItem = document.querySelector('.list-item');
let products = [
  {
    id_menu : 1,
    nama_menu: 'Wingko Keju',
    image : 'Wingko Keju.jpg',
    price : 40000
  },
  {
    id_menu : 2,
    nama_menu: 'Wingko Wijen',
    image :'Wingko Wijen.jpg',
    price : 40000
  }
]
let listCards =[];
//sementara buat ngebersihin local saat refersh web karna masih suka error
if (localStorage.getItem('cartData')) {
    localStorage.clear('cartData');
    reloadCard();

    //fungsi yang masih harus dibenerin
    // listCards = JSON.parse(localStorage.getItem('cartData'));

}

let masukanButton = document.querySelectorAll('.masukan-Button');
masukanButton.forEach((button, index) => {
  button.onclick = () => {
    addToCard(index);
  };
});

function addToCard(key){
  if(listCards[key]){
    // listCards[key].quantity +=1;
    changeQuantity(key ,listCards[key].quantity + 1);
  } else{
    listCards[key] = JSON.parse(JSON.stringify(products[key]));
    listCards[key].quantity = 1;
  }
  saveCartToLocalStorage();
  reloadCard();
}

function reloadCard(){
  let count = 0;
  let totalPrice = 0;
  cartItem.innerHTML = '';
  listCards.forEach((value,key) => {
    console.log(`key: ${key}, value:`, value);
    totalPrice = totalPrice + value.price;
    count = count + value.quantity;
    if (value != null){
      let newDiv = document.createElement('div');
      newDiv.innerHTML = `
    <div class="cart-item">
      <img src = "img/menu/${value.image}"/>
      <div class="item-detail">
      <h3>${value.nama_menu}<h3>
      <div class = "item-price">${value.price.toLocaleString()}</div>
      </div>
      <div class = "remove-item">
        <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
        <div class = "count">${value.quantity}</div>
        <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
      </div>
    </div>`;
      cartItem.appendChild(newDiv);
    }
  })
  total.innerText = totalPrice.toLocaleString();
  quantity.innerText = count;

  localStorage.setItem('totalPrice', totalPrice);

}

function changeQuantity(key,quantity){
  if (quantity == 0){
    delete listCards[key];
  }else{
    listCards[key].quantity = quantity;
    listCards[key].price = quantity * products[key].price;

  }
  saveCartToLocalStorage();
  reloadCard()
}

function saveCartToLocalStorage() {
  const cartData = listCards.map(item => {
    return {
      id_menu: item.id_menu,
      nama_menu: item.nama_menu,
      image: item.image,
      price: item.price,
      quantity: item.quantity
    };
  });
  localStorage.setItem('cartData', JSON.stringify(listCards));
}

reloadCard();