const slider = document.querySelector('.slider');

const apiBase = "https://gamehub.murots.no";
const woocommerceBase = "/wp-json/wc/store";
const productBase = "/products";
const featuredBase = "?featured=true";

const fullProductURL = apiBase + woocommerceBase + productBase;
const fullFeaturedProductURL = apiBase + woocommerceBase + productBase + featuredBase;

async function getFeaturedProducts() {
    const response = await fetch(fullFeaturedProductURL);
    const featuredProducts = await response.json();
    console.log(featuredProducts);
    return featuredProducts;
}


function createFeaturedProductHTML(featuredProduct) {

    const slide = document.createElement("div");
    const featuredProductImage = featuredProduct.images[0].src;
    slide.className = "slide-one";
    slide.style.backgroundImage = `url(${featuredProductImage})`;
    slider.append(slide);

    const slideTitle = document.createElement("h2");
    slideTitle.innerText = featuredProduct.name.toUpperCase();
    slide.append(slideTitle);

    const featuredProductId = featuredProduct.id;
    const slideCtaButton = document.createElement("a");
    slideCtaButton.classList.add("featured-cta", "cta-large");
    slideCtaButton.innerText = "Shop now!";
    slideCtaButton.href = "products.html?id=" + featuredProductId;
    slide.append(slideCtaButton);

    const sliderDots = document.querySelectorAll('.slider-dot');
    for (let i = 0; i < sliderDots.length; i++) {
        const dot = sliderDots[i];
    
        dot.addEventListener('click', function() {

        slider.scroll({
            left: i * slider.offsetWidth,
            behavior: 'smooth'
        });

        for (let i = 0; i < sliderDots.length; i++) {
            const otherDot = sliderDots[i];
            otherDot.classList.remove('active');
        }

        dot.classList.add('active');
  
        });
    }
}

function createFeaturedProductsHTML(featuredProducts) {
    console.log(featuredProducts)
    for (let i = 0; i < featuredProducts.length; i++) {
        const featuredProduct = featuredProducts[i];
        console.log(featuredProduct);
        createFeaturedProductHTML(featuredProduct);
    }
}

async function main() {
    try {
        const featuredProducts = await getFeaturedProducts();
        slider.innerHTML = "";
        createFeaturedProductsHTML(featuredProducts);
    } catch (error) {
        console.error(error);
        slider.innerHTML = errorMessage("Could not fetch data. Please try again later.");
    }
}

main();
















// const apiBase = "http://gamehub-products-api.local";
// const woocommerceBase = "/wp-json/wc/store";
// const productBase = "/products";
// const featuredBase = "?featured=true";

// const fullProductURL = apiBase + woocommerceBase + productBase;
// const fullFeaturedProductURL = apiBase + woocommerceBase + productBase + featuredBase;

// async function getFeaturedProducts() {
//     const response = await fetch(fullFeaturedProductURL);
//     const featuredProducts = await response.json();
//     console.log(featuredProducts);
//     return featuredProducts;
// }


// function createFeaturedProductsHTML(featuredProducts) {
//     const slider = document.querySelector('.slider');
//     // const featuredProductId = featuredProducts.id;

//     const sliderDots = document.querySelectorAll('.slider-dot');

//     const slideOne = document.createElement("div");
//     const featuredProductOneImage = featuredProducts[0].images[0].src;
//     slideOne.className = "slide-one";
//     slideOne.style.backgroundImage = `url(${featuredProductOneImage})`;
//     slider.append(slideOne);

//     const slideOneTitle = document.createElement("h2");
//     slideOneTitle.innerText = "CYBERPUNK 2048";
//     slideOne.append(slideOneTitle);


//     const slideOneCtaButton = document.createElement("a");
//     slideOneCtaButton.className = ("cta-large");
//     slideOneCtaButton.innerText = "Shop now!";
//     slideOne.append(slideOneCtaButton);

//     // productContainer.href = "products.html?id=" + productId;

//     const slideTwo = document.createElement("div");
//     const featuredProductTwoImage = featuredProducts[1].images[0].src;
//     slideTwo.className = "slide-two";
//     slideOne.style.backgroundImage = `url(${featuredProductTwoImage})`;
//     slider.append(slideTwo);

//     const slideTwoTitle = document.createElement("h2");
//     slideTwoTitle.innerText = "FORGE LEGEND";
//     slideTwo.append(slideTwoTitle);

//     const slideTwoCtaButton = document.createElement("a");
//     slideTwoCtaButton.className = ("cta-large");
//     slideTwoCtaButton.innerText = "Shop now!";
//     slideTwo.append(slideTwoCtaButton);



//     for (let i = 0; i < sliderDots.length; i++) {
//         const dot = sliderDots[i];
    
//         dot.addEventListener('click', function() {

//         slider.scroll({
//             left: i * slider.offsetWidth,
//             behavior: 'smooth'
//         });

//         for (let i = 0; i < sliderDots.length; i++) {
//             const otherDot = sliderDots[i];
//             otherDot.classList.remove('active');
//         }

//         dot.classList.add('active');
  
//         });
//     }
// }


// async function main() {
//     const featuredProducts = await getFeaturedProducts();
//     createFeaturedProductsHTML(featuredProducts);
// }

// main();

// const slider = document.querySelector('.slider');
// const sliderDots = document.querySelectorAll('.slider-dot');

// for (let i = 0; i < sliderDots.length; i++) {
//     const dot = sliderDots[i];
    
//     dot.addEventListener('click', function() {

//     slider.scroll({
//         left: i * slider.offsetWidth,
//         behavior: 'smooth'
//     });

//     for (let i = 0; i < sliderDots.length; i++) {
//         const otherDot = sliderDots[i];
//         otherDot.classList.remove('active');
//     }

//     dot.classList.add('active');
  
//     });
// }
