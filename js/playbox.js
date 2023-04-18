const container = document.querySelector(".playbox-container");
container.classList.add("game-selection");

const apiBase = "http://gamehub-products-api.local";
const woocommerceBase = "/wp-json/wc/store";
const productBase = "/products";

const fullProductURL = apiBase + woocommerceBase + productBase;

async function getProducts() {
    const response = await fetch(fullProductURL);
    const products = await response.json();
    console.log(products);
    return products 
}

function createProductHTML(product) {
    const productContainer = document.createElement("a");
    productContainer.classList.add("game-selection__specific");
    productContainer.id = product.id;

    for (let i = 0; i < product.images.length; i++) {
        const imgData = product.images[i];
        const img = document.createElement("img");
        img.src = imgData.src;
        img.alt = imgData.alt;
        productContainer.append(img);
    }

    const favoritesHearth = document.createElement("img");
    favoritesHearth.src = "../icons/Hearth_gray.png";
    favoritesHearth.alt = "Hearth icon";
    favoritesHearth.id = "hearth-icon";
    favoritesHearth.classList.add("hearth-icon");
    favoritesHearth.addEventListener('click', toggleHeart); 
    productContainer.append(favoritesHearth);

    const titleContainer = document.createElement("div");
    productContainer.append(titleContainer);


    const title = document.createElement("h4");
    title.innerText = product.name;
    title.className = "specific__title";
    titleContainer.append(title);

    const plattformParagraph = document.createElement("p");
    plattformParagraph.innerText = "Playbox";
    titleContainer.append(plattformParagraph);


    const price = document.createElement("h4");
    const salePrice = product.prices.price;
    const regularPrice = product.prices.regular_price;
    const euroSymbol = product.prices.currency_symbol;

    if (product.prices.price < product.prices.regular_price) {
        price.innerHTML = `<span class="old-price">${euroSymbol} ${(regularPrice / 100)}</span> <span class="new-price">${euroSymbol} ${(salePrice / 100)}</span>`;
    } else {
        price.innerText = euroSymbol + " " + (salePrice / 100);
    }

    price.className = "specific__price";
    productContainer.append(price);


    const viewButton = document.createElement("div");
    viewButton.className = "cta";
    viewButton.innerText = "More";
    productContainer.append(viewButton);

    container.append(productContainer);
}

function createProductsHTML(products) {
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        createProductHTML(product);
    }
}

async function main() {
    try {
        const products = await getProducts();
        container.innerHTML = "";
        createProductsHTML(products);
    } catch (error) {
        console.error(error);
        container.innerHTML = errorMessage("Could not fetch data. Please try again later.");
    }
}


main()
