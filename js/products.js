const apiBase = "http://gamehub-products-api.local";
const woocommerceBase = "/wp-json/wc/store";
const productBase = "/products/";

const fullProductURL = apiBase + woocommerceBase + productBase;

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const productId = params.get("id");

const title = document.querySelector("title");
// heading.innerHTML = nameId;
title.innerHTML = "Gamehub | " + productId;

const specificProductURL = apiBase + woocommerceBase + productBase + productId;


async function getProductDetails() {
    const response =  await fetch(specificProductURL);
    const productDetails = await response.json();
    console.dir(productDetails);
    return productDetails;  
}

function createProductDetailsHTML(productDetails) {
    const selectedProductContainer = document.querySelector(".selected-game");

    const productImage = document.createElement("img");
    productImage.classList.add("selected-game__images");
    productImage.src = productDetails.images[0].src;
    productImage.alt = productDetails.images[0].alt;
    selectedProductContainer.append(productImage);

    const textDetailsContainer = document.createElement("div");
    textDetailsContainer.classList.add("selected-game__details");
    selectedProductContainer.append(textDetailsContainer);

    const productTitle = document.createElement("h3");
    productTitle.innerText = productDetails.name + " - Playbox";
    textDetailsContainer.append(productTitle);

}

async function main() {
    const productDetails = await getProductDetails();
    createProductDetailsHTML(productDetails);
}

main();





