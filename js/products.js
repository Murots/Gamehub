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
    productImage.classList.add("selected-game__img");
    productImage.src = productDetails.images[0].src;
    productImage.alt = productDetails.images[0].alt;
    selectedProductContainer.append(productImage);

    const textDetailsContainer = document.createElement("div");
    textDetailsContainer.classList.add("selected-game__details");
    selectedProductContainer.append(textDetailsContainer);

    const productTitle = document.createElement("h3");
    productTitle.innerText = productDetails.name + " - Playbox";
    textDetailsContainer.append(productTitle);

    const productShape = document.createElement("h4");
    const returnedShapeString = document.createElement("div");
    returnedShapeString.innerHTML = productDetails.short_description;
    productShape.innerText = returnedShapeString.textContent;
    textDetailsContainer.append(productShape);

    const productDescription = document.createElement("p");
    const returnedDescriptionString = document.createElement("div");
    returnedDescriptionString.innerHTML = productDetails.description;
    productDescription.innerText = "Description: " + returnedDescriptionString.textContent;
    textDetailsContainer.append(productDescription);

    const productGenre = document.createElement("p");
    productGenre.className = ("details_genre")
    const categoryNames = productDetails.categories.map(function(category) {
        return category.name;
    });
    productGenre.innerText = "Genre: " + categoryNames.join(", ");
    textDetailsContainer.append(productGenre);

    const productDecision = document.createElement("div");
    productDecision.className = ("details_decision");
    textDetailsContainer.append(productDecision);

    const productDecisionLeft = document.createElement("div")
    productDecision.append(productDecisionLeft);

    const productPrice = document.createElement("h3");
    const salePrice = productDetails.prices.price;
    const regularPrice = productDetails.prices.regular_price;
    const euroSymbol = productDetails.prices.currency_symbol;

    if (productDetails.prices.price < productDetails.prices.regular_price) {
        productPrice.innerHTML = `<span class="old-price">${euroSymbol} ${(regularPrice / 100)}</span> <span class="new-price">${euroSymbol} ${(salePrice / 100)}</span>`;
    } else {
        productPrice.innerText = euroSymbol + " " + (salePrice / 100);
    }
    
    productDecisionLeft.append(productPrice);

}

async function main() {
    const productDetails = await getProductDetails();
    createProductDetailsHTML(productDetails);
}

main();




