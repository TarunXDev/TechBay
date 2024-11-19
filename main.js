function initMap() {
    var russia = { lat: 3.51602, lng: -2.1969 };
    var map = new google.maps.Map(
        document.getElementById('map'), { zoom: 20, center: russia });
    var marker = new google.maps.Marker({ position: russia, map: map });
}

var MenuItems = document.getElementById("menu-items");
MenuItems.style.maxHeight = "0px";

function menutoggle() {
    if (MenuItems.style.maxHeight == "0") {
        MenuItems.style.maxHeight = "200px";
    } else {
        MenuItems.style.maxHeight = "0px";
    }
}

function searchProducts() {
    let searchTerm = document.getElementById('searchInput').value.toLowerCase();
    let products = document.querySelectorAll('.product-item');
    
    products.forEach(function (product) {
        let productName = product.getAttribute('data-name').toLowerCase();
        
        if (productName.includes(searchTerm)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}
