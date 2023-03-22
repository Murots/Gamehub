const qtyCount = document.querySelector(".qty-count");
const qtyDown = document.querySelector("#qty-down");
const qtyUp = document.querySelector("#qty-up");

qtyCount.innerHTML = `<p>${cartCount}</p>`;

console.dir(cartCount);

function decreaseQuantity() {
    cartCount--;
    cartBadge.innerHTML = cartCount;
    qtyCount.innerHTML = `<p>${cartCount}</p>`;

    localStorage.setItem("cartCount", cartCount);

    if (cartCount < 1) {
        badgeDisplay.style.display = "none";
    }

}

qtyDown.addEventListener("click", decreaseQuantity);

function increaseQuantity() {
    cartCount++;
    cartBadge.innerHTML = cartCount;
    qtyCount.innerHTML = `<p>${cartCount}</p>`;

    localStorage.setItem("cartCount", cartCount);

    if (cartCount > 0) {
        badgeDisplay.style.display = "block";
    }

}

qtyUp.addEventListener("click", increaseQuantity);

