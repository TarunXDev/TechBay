// Sample product data (could be replaced with actual products data)
const products = [
    {
      id: 1,
      name: "iPhone 15 Pro Max",
      price: "₹1,59,900",
      rating: 4.9,
      image: "https://via.placeholder.com/250?text=iPhone+15+Pro+Max",
      description: "Premium smartphone with A17 Bionic chip and superior cameras.",
    },
    {
      id: 2,
      name: "Samsung Galaxy S23 Ultra",
      price: "₹1,34,999",
      rating: 4.8,
      image: "https://via.placeholder.com/250?text=Galaxy+S23+Ultra",
      description: "Top-notch Android phone with an excellent display and camera.",
    },
    {
      id: 3,
      name: "Google Pixel 8 Pro",
      price: "₹98,999",
      rating: 4.7,
      image: "https://via.placeholder.com/250?text=Pixel+8+Pro",
      description: "The best of Google with AI-powered photography.",
    },
    // More products...
  ];
  
  // Function to display products
  function displayProducts(filteredProducts) {
    const productsContainer = document.getElementById("products-container");
    productsContainer.innerHTML = ""; // Clear previous products
  
    filteredProducts.forEach((product) => {
      const productCard = document.createElement("div");
      productCard.className = "product-card";
  
      productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3 class="product-title">${product.name}</h3>
        <p class="product-description">${product.description}</p>
        <p class="product-price">${product.price}</p>
        <p class="product-rating">⭐ ${product.rating}</p>
        <button class="add-to-cart" onclick="addToCart(${product.id})">Add to Cart</button>
        <button class="buy-now" onclick="buyNow(${product.id})">Buy Now</button>
      `;
  
      productsContainer.appendChild(productCard);
    });
  }
  
  // Function to filter products based on search query
  function searchProducts(query) {
    const filteredProducts = products.filter(product =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    displayProducts(filteredProducts);
  }
  
  // Event listener for the search button
  document.getElementById("searchButton").addEventListener("click", function () {
    const searchQuery = document.getElementById("searchInput").value;
    searchProducts(searchQuery);
  });
  
  // Event listener for "Enter" key press in the search input
  document.getElementById("searchInput").addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      const searchQuery = document.getElementById("searchInput").value;
      searchProducts(searchQuery);
    }
  });
  
  // Initially display all products
  displayProducts(products);
  
  // Function to handle Add to Cart
  function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    alert(`${product.name} has been added to the cart!`);
  }
  
  // Function for the Buy Now button
  function buyNow(productId) {
    const product = products.find(p => p.id === productId);
    alert(`Proceeding to checkout for ${product.name}`);
  }
  