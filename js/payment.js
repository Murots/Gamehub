const qtyPriceOrder2 = document.querySelector("#qty-price-order2");
const qtyPriceTotal2 = document.querySelector("#qty-price-total2");

quantityPriceTotal2 = (cartCount * 45);
quantityPriceOrder2 = (cartCount * 45);

qtyPriceOrder2.innerHTML = `<h4 class="quantityPriceAdjust">€ ${quantityPriceOrder2}</h4>`;
qtyPriceTotal2.innerHTML = `<h4 class="quantityPriceAdjust">€ ${quantityPriceTotal2}</h4>`;