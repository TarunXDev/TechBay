// Updated products array with various gadgets
const products = [
    {
      id: 1,
      name: "MacBook Pro 16-inch",
      price: "₹2,39,900",
      rating: 4.8,
      image: "https://via.placeholder.com/250?text=MacBook+Pro",
      description: "Powerful laptop with M2 Max chip for creators and professionals.",
    },
    {
      id: 2,
      name: "Dell XPS 13",
      price: "₹1,49,900",
      rating: 4.6,
      image: "https://via.placeholder.com/250?text=Dell+XPS+13",
      description: "Ultra-thin laptop with stunning display and top-notch performance.",
    },
    {
      id: 3,
      name: "iPhone 15 Pro Max",
      price: "₹1,59,900",
      rating: 4.9,
      image: "https://via.placeholder.com/250?text=iPhone+15+Pro+Max",
      description: "Premium smartphone with A17 Bionic chip and superior cameras.",
    },
    {
      id: 4,
      name: "Samsung Galaxy S23 Ultra",
      price: "₹1,34,999",
      rating: 4.7,
      image: "https://via.placeholder.com/250?text=Galaxy+S23+Ultra",
      description: "Top-notch Android phone with an excellent display and camera.",
    },
    {
      id: 5,
      name: "Sony WH-1000XM5 Headphones",
      price: "₹29,999",
      rating: 4.5,
      image: "https://via.placeholder.com/250?text=Sony+WH-1000XM5",
      description: "Industry-leading noise-canceling headphones with rich sound.",
    },
    {
      id: 6,
      name: "Apple Watch Series 9",
      price: "₹49,900",
      rating: 4.6,
      image: "https://via.placeholder.com/250?text=Apple+Watch+Series+9",
      description: "Advanced smartwatch with health and fitness tracking.",
    },
    {
      id: 7,
      name: "Lenovo Legion 5 Pro",
      price: "₹1,29,999",
      rating: 4.4,
      image: "https://via.placeholder.com/250?text=Lenovo+Legion+5+Pro",
      description: "High-performance gaming laptop with NVIDIA RTX graphics.",
    },
    {
      id: 8,
      name: "Samsung Galaxy Tab S9 Ultra",
      price: "₹1,19,999",
      rating: 4.7,
      image: "https://via.placeholder.com/250?text=Galaxy+Tab+S9+Ultra",
      description: "Large Android tablet with a brilliant AMOLED display.",
    },
    {
      id: 9,
      name: "Google Pixel 8 Pro",
      price: "₹98,999",
      rating: 4.6,
      image: "https://via.placeholder.com/250?text=Pixel+8+Pro",
      description: "The best of Google with AI-powered photography.",
    },
    {
      id: 10,
      name: "Bose SoundLink Flex",
      price: "₹12,999",
      rating: 4.3,
      image: "https://via.placeholder.com/250?text=Bose+SoundLink+Flex",
      description: "Portable Bluetooth speaker with amazing sound quality.",
    },
  ];
  
  // Function to generate product cards
  function displayProducts() {
    const productsContainer = document.getElementById("products-container");
  
    products.forEach((product) => {
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
  
  // Add to Cart Function
  function addToCart(productId) {
    const product = products.find((p) => p.id === productId);
    alert(`${product.name} has been added to the cart!`);
  }
  
  // Buy Now Function
  function buyNow(productId) {
    const product = products.find((p) => p.id === productId);
    alert(`Proceeding to buy ${product.name}!`);
  }
  
  // Initialize products display
  displayProducts();
  