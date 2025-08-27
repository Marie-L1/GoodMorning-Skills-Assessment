const cards = [
    {
        title: "White Cleansing Foam",
        description: "Cleanser with Glutathione Diamond Powder",
        price: "$9.70",
        image: "./images/product_1.jpg"
    }, 
    {
        title: "White Cleansing Foam - Bundle of 2",
        description: "Bundle deal for glowing skin",
        price: "$18.50",
        image: "./images/product_2.jpg"
    },
    {
        title: "White Cleansing Foam - Bundle of 3",
        description: "Glutathione Brightening Cleanser",
        price: "$27.00",
        image: "/images/product_3.jpg"
    }
];

const productCardContainer = document.querySelector(".product-card-container")
const cartCountElement = document.getElementById("cart-count");
let cartCount = 0;

cards.forEach((product) => {
    const card = document.createElement("article");
    card.classList.add("product-card");
    card.innerHTML = 
    `
        <img src="${product.image}" alt="${product.title}" class="product-card__image">
        <h2 class="product-card__title">${product.title}</h2>
        <p class="product-card__description">${product.description}</p>
        <p class="product-card__price">${product.price}</p>
        <button class="add-to-cart" type="button" aria-label="Add ${product.title} to cart">Add to Cart</button>
    `;
    productCardContainer.appendChild(card);
})

productCardContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("add-to-cart")) {
        cartCount++;
        cartCountElement.textContent = cartCount;
    }
});
