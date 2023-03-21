const addToCartButton = document.querySelector("#add-to-cart-button"); //Knapp
const cartBadge = document.querySelector("#cart-badge"); //Teller
const badgeDisplay = document.querySelector(".badge");
const addToCartFeedback = document.querySelector(".add-to-cart-feedback")

let cartCount = 0;
cartBadge.innerHTML = cartCount;

function addItemToCart() {
    cartCount++;
    cartBadge.innerHTML = cartCount;

    if (cartCount > 0) {
        badgeDisplay.style.display = "block";
        addToCartFeedback.innerHTML = `<p class="success">The item was added to your shopping cart.</p>`
    }
}

addToCartButton.addEventListener("click", addItemToCart);