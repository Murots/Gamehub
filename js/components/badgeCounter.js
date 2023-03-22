// const addToCartButton = document.querySelector("#add-to-cart-button"); //Knapp
// const cartBadge = document.querySelector("#cart-badge"); //Teller
// const badgeDisplay = document.querySelector(".badge");
// const addToCartFeedback = document.querySelector(".add-to-cart-feedback")

// let cartCount = 0;
// cartBadge.innerHTML = cartCount;

// function addItemToCart() {
//     cartCount++;
//     cartBadge.innerHTML = cartCount;

//     if (cartCount > 0) {
//         badgeDisplay.style.display = "block";
//         addToCartFeedback.innerHTML = `<p class="success">The item was added to your shopping cart.</p>`
//     }
// }

// addToCartButton.addEventListener("click", addItemToCart);



const addToCartButton = document.querySelector("#add-to-cart-button");
let cartCount = parseInt(localStorage.getItem("cartCount")) || 0;
const cartBadge = document.querySelector("#cart-badge");
const badgeDisplay = document.querySelector(".badge");
const addToCartFeedback = document.querySelector(".add-to-cart-feedback");

cartBadge.innerHTML = cartCount;

if (localStorage.getItem("displayBadge") === "true") {
    badgeDisplay.style.display = "block";
}  

if (cartCount < 1) {
    badgeDisplay.style.display = "none";
}

function addItemToCart() {
    cartCount++;
    cartBadge.innerHTML = cartCount;

    localStorage.setItem("cartCount", cartCount);

    if (cartCount > 0) {
        badgeDisplay.style.display = "block";
        localStorage.setItem("displayBadge", "true");
        addToCartFeedback.innerHTML = `<p class="success">The item was added to your shopping cart.</p>`
    } 

}

addToCartButton.addEventListener("click", addItemToCart);






