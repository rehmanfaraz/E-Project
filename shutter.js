(() => {

    const products =
    [
        {
            "id": "ran1",
            "image": "https://cdn-efojk.nitrocdn.com/fcveFyakYTVoQrsglDBYSUAYzmAyazyN/assets/images/optimized/rev-9a9e75c/www.faridabadcake.com/wp-content/uploads/2022/06/tangy-pineapple-cake-376x376.jpg",
            "brand": "Bulova Men",
            "description": "Bulova Men's Marine Star Series C Two-Tone Rose Gold Stainless Steel",
            "oldPrice": "500$",
            "newPrice": "200$",
            "save": "60%"
        },
        {
            "id": "bra1",
            "image": "https://www.waseemjewellers.com/cdn/shop/files/0116_463b403b-5c24-480d-ad5f-b63374945c5a.png?v=1717006817&width=1946",
            "brand": "Gold Bracelet",
            "description": "Accent your look with our Gold Bracelets—timeless pieces blending elegance and modern flair effortlessly.",
            "oldPrice": "1000$",
            "newPrice": "900$",
            "save": "10%"
        },
        {
            "id": "mug1",
            "image": "https://img.lazcdn.com/3rd/q/aHR0cHM6Ly9zdGF0aWMtMDEuZGFyYXoucGsvcC9hNDNlMmM4YmQ5MmFlYWFmYjg3NDQ2MWIxMGJlZmI4YS5wbmc=_200x200q80.png_.webp",
            "brand": "MUG",
            "description": "Best mom ever - Best Dad ever - Pack of 2 - Customize Mug",
            "oldPrice": "100$",
            "newPrice": "50$",
            "save": "50%"
        },
        {
            "id": "ran2",
            "image": "https://m.media-amazon.com/images/I/81HPqLqRQxL._AC_SX679_.jpg",
            "brand": "Bulova Men",
            "description": "Bulova Men's Marine Star 'Series A' Automatic Stainless Steel Case with Blue Textured Silicone Strap",
            "oldPrice": "300$",
            "newPrice": "100$",
            "save": "66.67%"
        },
        {
            "id": "bra2",
            "image": "https://www.waseemjewellers.com/cdn/shop/files/0113_9945e98b-7fed-4566-9a3c-bcc76bbcab48.png?v=1717006764&width=1946",
            "brand": "Gold Bracelet",
            "description": "Accent your look with our Gold Bracelets—timeless pieces blending elegance and modern flair effortlessly.",
            "oldPrice": "1000$",
            "newPrice": "900$",
            "save": "10%"
        },
        {
            "id": "Mug2",
            "image": "https://img.lazcdn.com/3rd/q/aHR0cHM6Ly9zdGF0aWMtMDEuZGFyYXoucGsvcC80MjYwOWIxZTY3OTY5MTkyYTE3ZmMxODkwNTA1ZmNhYS5qcGc=_200x200q80.png_.webp",
            "brand": "MUG",
            "description": "Fashion Coffee Mugs with glass Lid Transparent Tea Cups ( 500 ML) Cute Coffee Bar Accessories",
            "oldPrice": "100$",
            "newPrice": "50$",
            "save": "50%"
        },
        {
            "id": "ran3",
            "image": "https://m.media-amazon.com/images/I/51+qt39KzZL._AC_SY679_.jpg",
            "brand": "Bulova Men",
            "description": "Bulova Men's Classic Aerojet 3-Hand Automatic Leather Strap Watch",
            "oldPrice": "300$",
            "newPrice": "200$",
            "save": "33.33%"
        },
        {
            "id": "bra3",
            "image": "https://www.waseemjewellers.com/cdn/shop/files/0160.png?v=1716320283&width=1946",
            "brand": "Gold Bracelet",
            "description": "Accent your look with our Gold Bracelets—timeless pieces blending elegance and modern flair effortlessly.",
            "oldPrice": "1000$",
            "newPrice": "900$",
            "save": "10%"
        },
        {
            "id": "Mug3",
            "image": "https://img.lazcdn.com/3rd/q/aHR0cHM6Ly9zdGF0aWMtMDEuZGFyYXoucGsvcC85MTM5NTJmYzQ4YjdlMTlmNTUzZGI3MWQ4MjYxM2IzNi5qcGc=_200x200q80.png_.webp",
            "brand": "MUG",
            "description": "Fashion Coffee Mugs with glass Lid Transparent Tea Cups ( 500 ML) Cute Coffee Bar Accessories",
            "oldPrice": "100$",
            "newPrice": "50$",
            "save": "50%"
        },
        {
            "id": "ran4",
            "image": "https://m.media-amazon.com/images/I/81pviDhEIIL._AC_SX679_.jpg",
            "brand": "Citizen Men",
            "description": "Citizen Men's Eco-Drive Brycen Chronograph Stainless Steel Watch",
            "oldPrice": "500$",
            "newPrice": "200$",
            "save": "60%"
        },
        {
            "id": "bra4",
            "image": "https://www.waseemjewellers.com/cdn/shop/files/0159.png?v=1716320243&width=823",
            "brand": "Gold Bracelet",
            "description": "Accent your look with our Gold Bracelets—timeless pieces blending elegance and modern flair effortlessly.",
            "oldPrice": "1000$",
            "newPrice": "900$",
            "save": "10%"
        },
        {
            "id": "Mug4",
            "image": "https://img.lazcdn.com/3rd/q/aHR0cHM6Ly9zdGF0aWMtMDEuZGFyYXoucGsvcC8zMDNmMDg1MjgwMDc0NWM1MjgyYmIxYjliZDI2NDc1MS5qcGc=_200x200q80.png_.webp",
            "brand": "MUG",
            "description": "Fashion Coffee Mugs with glass Lid Transparent Tea Cups ( 500 ML) Cute Coffee Bar Accessories",
            "oldPrice": "100$",
            "newPrice": "50$",
            "save": "50%"
        },
        {
            "id": "ran5",
            "image": "https://m.media-amazon.com/images/I/71cdpwev8GL._AC_SY500_.jpg",
            "brand": "Citizen Men",
            "description": "Citizen Sport Luxury Blue Dial Stainless Steel Bracelet Watch 43mm ",
            "oldPrice": "500$",
            "newPrice": "200$",
            "save": "60%"
        },
        {
            "id": "ran6",
            "image": "https://m.media-amazon.com/images/I/81YKCVsTfsL._AC_SX679_.jpg",
            "brand": "Citizen Men",
            "description": "Citizen Men's Eco-Drive Weekender Brycen Chronograph Watch in Gold-tone Stainless Steel",
            "oldPrice": "500$",
            "newPrice": "200$",
            "save": "60%"
        },
        {
            "id": "bra5",
            "image": "https://www.waseemjewellers.com/cdn/shop/files/0116_463b403b-5c24-480d-ad5f-b63374945c5a.png?v=1717006817&width=1946",
            "brand": "Gold Bracelet",
            "description": "Accent your look with our Gold Bracelets—timeless pieces blending elegance and modern flair effortlessly.",
            "oldPrice": "1500$",
            "newPrice": "750$",
            "save": "50%"
        },
        {
            "id": "Mug5",
            "image": "https://img.lazcdn.com/3rd/q/aHR0cHM6Ly9zdGF0aWMtMDEuZGFyYXoucGsvcC81OGY1OTM3NjYzYTE0OWY0M2EyOWQ0Nzk1NmE1MTJkNy5qcGc=_200x200q80.png_.webp",
            "brand": "MUG",
            "description": "Fashion Coffee Mugs with glass Lid Transparent Tea Cups ( 500 ML) Cute Coffee Bar Accessories",
            "oldPrice": "100$",
            "newPrice": "50$",
            "save": "50%"
        }
    ];
const container2 = document.querySelector('.card-container2');
    
products.forEach(product => {
    const card = document.createElement('div');
    card.classList.add('card');
    
    card.innerHTML = `
        <a href="productpage.html?id=${product.id}"> <img src="${product.image}" alt="${product.brand}"> </a>
        <div class="details">
            <a href="productpage.html?id=${product.id}" class="brand-link"><h4>${product.brand}</h4></a>
            <p>${product.description}</p>
            <div class="price-container2">
                <p class="old-price">${product.oldPrice}</p>
                <p class="price">${product.newPrice}</p>
                <p class="save">${product.save}</p>
            </div>
        </div>
    `;
    
    container2.appendChild(card);
});

})();