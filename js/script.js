// NAV BAR MENU //

// Toggle class active mengambil dari style.css dan html
const navbarNav = document.querySelector(".navbar-nav");
// saat hamburger menu di click
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//untuk menghilangkan nav side bar di luar tombol menu
const hamburgerMenu = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (event) {
  if (!hamburgerMenu.contains(event.target) &&!navbarNav.contains(event.target))
  {
    navbarNav.classList.remove("active");
  }
});
const menuButtonElement = document.getElementById("hamburger-menu");
menuButtonElement.addEventListener("click", function (event) {
  event.preventDefault();
});

// NAV BAR MENU END //





// // Rincian Box
// const itemDetailRincian = document.querySelector("#item-detail-rincian");
// const itemDetailButtons = document.querySelectorAll(".item-detail-button");

// itemDetailButtons.forEach((btn) => {
//   btn.onclick = (e) => {
//     itemDetailRincian.style.display = "flex";
//     e.preventDefault();
//   };
// });

// // klik tombol close
// document.querySelector(".rincian .close-icon").onclick = (e) => {
//   itemDetailRincian.style.display = "none";
//   e.preventDefault();
// };
