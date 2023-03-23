const qtyCount = document.querySelector(".qty-count");
const qtyDown = document.querySelector("#qty-down");
const qtyUp = document.querySelector("#qty-up");
const qtyPrice = document.querySelector("#qty-price");
const qtyPriceShipping = document.querySelector("#qty-price-shipping");
const qtyPriceOrder = document.querySelector("#qty-price-order");
const qtyPriceTotal = document.querySelector("#qty-price-total");

console.dir(qtyDown);

let quantityPrice = (cartCount * 45);
let quantityPriceShipping = quantityPrice;
let quantityPriceOrder = quantityPrice;
let quantityPriceTotal = quantityPrice;

qtyPrice.innerHTML = `<h4 class="item-information_price">€ ${quantityPrice}</h4>`;
qtyPriceShipping.innerHTML = `<h4>€ ${quantityPriceShipping}</h4>`;
qtyPriceOrder.innerHTML = `<h4 class="quantityPriceAdjust">€ ${quantityPriceOrder}</h4>`;
qtyPriceTotal.innerHTML = `<h4 class="quantityPriceAdjust">€ ${quantityPriceTotal}</h4>`;

qtyCount.innerHTML = `<p>${cartCount}</p>`;

function decreaseQuantity() {
    cartCount--;
    cartBadge.innerHTML = cartCount;
    qtyCount.innerHTML = `<p>${cartCount}</p>`;

    localStorage.setItem("cartCount", cartCount);

    let quantityPrice = (cartCount * 45);
    let quantityPriceShipping = quantityPrice;
    let quantityPriceOrder = quantityPrice;
    let quantityPriceTotal = quantityPrice;

    qtyPrice.innerHTML = `<h4 class="item-information_price">€ ${quantityPrice}</h4>`;
    qtyPriceShipping.innerHTML = `<h4>€ ${quantityPriceShipping}</h4>`;
    qtyPriceOrder.innerHTML = `<h4 class="quantityPriceAdjust">€ ${quantityPriceOrder}</h4>`;
    qtyPriceTotal.innerHTML = `<h4 class="quantityPriceAdjust">€ ${quantityPriceTotal}</h4>`;

    if (cartCount < 1) {
        badgeDisplay.style.display = "none";
        qtyDown.disabled = true; 
    }

}

qtyDown.addEventListener("click", decreaseQuantity);

function increaseQuantity() {
    cartCount++;
    cartBadge.innerHTML = cartCount;
    qtyCount.innerHTML = `<p>${cartCount}</p>`;

    localStorage.setItem("cartCount", cartCount);

    let quantityPrice = (cartCount * 45);
    let quantityPriceShipping = quantityPrice;
    let quantityPriceOrder = quantityPrice;
    let quantityPriceTotal = quantityPrice;

    qtyPrice.innerHTML = `<h4 class="item-information_price">€ ${quantityPrice}</h4>`;
    qtyPriceShipping.innerHTML = `<h4>€ ${quantityPriceShipping}</h4>`;
    qtyPriceOrder.innerHTML = `<h4 class="quantityPriceAdjust">€ ${quantityPriceOrder}</h4>`;
    qtyPriceTotal.innerHTML = `<h4 class="quantityPriceAdjust">€ ${quantityPriceTotal}</h4>`;

    if (cartCount > 0) {
        badgeDisplay.style.display = "block";
        qtyDown.disabled = false; 
    }
}


qtyUp.addEventListener("click", increaseQuantity);

