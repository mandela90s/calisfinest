// ===== PRODUCTS DATA (EASY TO EDIT) =====
const products = [
    {
        id: 1,
        name: "Packwoods Runtz Disposable",
        price: 59.99,
        image: "images/packwoods-runtz.jpg", // Local image
        brand: "Packwoods",
        description: "2g live resin disposable, 85% THC."
    },
    {
        id: 2,
        name: "Backpack Boys Gelato Cart",
        price: 49.99,
        image: "images/backpack-gelato.jpg",
        brand: "Backpack Boys",
        description: "1g cartridge, 90% THC."
    },
    // Add more products here...
];

// ===== LOAD HEADER & FOOTER =====
function loadHeaderFooter() {
    document.getElementById("header").innerHTML = `
        <header class="bg-primary text-white py-3">
            <div class="container">
                <div class="d-flex justify-content-between align-items-center">
                    <h1 class="m-0"><i class="fas fa-cannabis me-2"></i>Cali's Finest</h1>
                    <div class="d-flex align-items-center">
                        <div class="search-box me-3">
                            <input type="text" placeholder="Search...">
                            <button><i class="fas fa-search"></i></button>
                        </div>
                        <div class="cart-icon">
                            <i class="fas fa-shopping-cart"></i>
                            <span class="cart-count">0</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    `;

    document.getElementById("footer").innerHTML = `
        <footer class="bg-primary text-white py-4">
            <div class="container text-center">
                <p>&copy; 2023 Cali's Finest. All rights reserved.</p>
            </div>
        </footer>
    `;
}

// ===== LOAD PRODUCTS =====
function loadProducts() {
    const container = document.getElementById("products-container");
    container.innerHTML = "";

    products.forEach(product => {
        container.innerHTML += `
            <div class="col-md-4 mb-4">
                <div class="card h-100">
                    <img src="${product.image}" class="card-img-top" alt="${product.name}">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="text-muted">${product.brand}</p>
                        <p class="price">£${product.price.toFixed(2)}</p>
                        <button class="btn btn-primary w-100" onclick="addToCart(${product.id})">Add to Cart</button>
                    </div>
                </div>
            </div>
        `;
    });
}

// ===== CART FUNCTIONALITY =====
let cart = [];

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCartCount();
}

function updateCartCount() {
    document.querySelector(".cart-count").textContent = cart.length;
}

// ===== INITIALIZE WEBSITE =====
window.onload = function() {
    loadHeaderFooter();
    loadProducts();
};
