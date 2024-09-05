(() => {
    const products = [
        
        {
            "id": "bracelets1",
            "image": "https://m.media-amazon.com/images/I/81ekP7iAUgS._AC_UL320_.jpg",
            "brand": "Swarovski",
            "description": "Swarovski Crystal Bangle Bracelet",
            "oldPrice": "$120.00",
            "newPrice": "$79.99",
            "save": "SAVE 33%"
        },
        {
            "id": "bracelets2",
            "image": "https://m.media-amazon.com/images/I/61R4PFrfFeL._AC_UL320_.jpg",
            "brand": "Pandora",
            "description": "Pandora Moments Snake Chain Bracelet",
            "oldPrice": "$100.00",
            "newPrice": "$69.99",
            "save": "SAVE 30%"
        },
        {
            "id": "bracelets3",
            "image": "https://m.media-amazon.com/images/I/61RQ5Fyuh+L._AC_UL320_.jpg",
            "brand": "Tiffany & Co.",
            "description": "Tiffany T Wire Bracelet",
            "oldPrice": "$450.00",
            "newPrice": "$299.00",
            "save": "SAVE 34%"
        },
        {
            "id": "bracelets4",
            "image": "https://m.media-amazon.com/images/I/51Qsbcwo4xL._AC_UL320_.jpg",
            "brand": "Kate Spade",
            "description": "Kate Spade New York Gold Tone Bracelet",
            "oldPrice": "$85.00",
            "newPrice": "$59.99",
            "save": "SAVE 29%"
        },
        {
            "id": "bracelets5",
            "image": "https://m.media-amazon.com/images/I/51LlqztaIqL._AC_UL320_.jpg",
            "brand": "Michael Kors",
            "description": "Michael Kors Logo Bracelet",
            "oldPrice": "$150.00",
            "newPrice": "$89.99",
            "save": "SAVE 40%"
        },
        {
            "id": "bracelets6",
            "image": "https://m.media-amazon.com/images/I/51C2s7SH52L._AC_UL320_.jpg",
            "brand": "Chamilia",
            "description": "Chamilia Silver Charm Bracelet",
            "oldPrice": "$110.00",
            "newPrice": "$75.00",
            "save": "SAVE 32%"
        },
        {
            "id": "bracelets7",
            "image": "https://m.media-amazon.com/images/I/51MJLkegTvL._AC_UL320_.jpg",
            "brand": "Alex and Ani",
            "description": "Alex and Ani Expandable Wire Bangle",
            "oldPrice": "$45.00",
            "newPrice": "$29.99",
            "save": "SAVE 33%"
        },
        {
            "id": "bracelets8",
            "image": "https://m.media-amazon.com/images/I/51rjR9o-A+L._AC_UL320_.jpg",
            "brand": "Vera Wang",
            "description": "Vera Wang Signature Pearl Bracelet",
            "oldPrice": "$180.00",
            "newPrice": "$119.99",
            "save": "SAVE 33%"
        },
        {
            "id": "bracelets9",
            "image": "https://m.media-amazon.com/images/I/51VyeU801cL._AC_UL320_.jpg",
            "brand": "Fossil",
            "description": "Fossil Silver Tone Bracelet",
            "oldPrice": "$75.00",
            "newPrice": "$49.99",
            "save": "SAVE 33%"
        },
        {
            "id": "bracelets10",
            "image": "https://m.media-amazon.com/images/I/61gIXTjJC3L._AC_UL320_.jpg",
            "brand": "Steve Madden",
            "description": "Steve Madden Crystal-Studded Bracelet",
            "oldPrice": "$65.00",
            "newPrice": "$39.99",
            "save": "SAVE 38%"
        },
        {
            "id": "bracelets11",
            "image": "https://m.media-amazon.com/images/I/71WCV4Tv0HL._AC_UL320_.jpg",
            "brand": "Coach",
            "description": "Coach Signature C Bracelet",
            "oldPrice": "$120.00",
            "newPrice": "$79.99",
            "save": "SAVE 33%"
        },
        {
            "id": "bracelets12",
            "image": "https://m.media-amazon.com/images/I/517jvjVVmDL._AC_UL320_.jpg",
            "brand": "Bvlgari",
            "description": "Bvlgari Serpenti Viper Bracelet",
            "oldPrice": "$550.00",
            "newPrice": "$399.00",
            "save": "SAVE 27%"
        },
        {
            "id": "bracelets13",
            "image": "https://m.media-amazon.com/images/I/51SS1CMIMsL._AC_UL320_.jpg",
            "brand": "Zara",
            "description": "Zara Beaded Bracelet",
            "oldPrice": "$30.00",
            "newPrice": "$19.99",
            "save": "SAVE 33%"
        },
        {
            "id": "bracelets14",
            "image": "https://m.media-amazon.com/images/I/517YDr2MzuL._AC_UL320_.jpg",
            "brand": "H&M",
            "description": "H&M Stackable Bracelets",
            "oldPrice": "$25.00",
            "newPrice": "$15.99",
            "save": "SAVE 36%"
        },
        {
            "id": "bracelets15",
            "image": "https://m.media-amazon.com/images/I/51zQYOwQ1WL._AC_UL320_.jpg",
            "brand": "Aldo",
            "description": "Aldo Gold-Tone Bracelet",
            "oldPrice": "$40.00",
            "newPrice": "$29.99",
            "save": "SAVE 25%"
        },
        {
            "id": "bracelets16",
            "image": "https://m.media-amazon.com/images/I/51alk-+nkIL._AC_UL320_.jpg",
            "brand": "Lana Jewelry",
            "description": "Lana Jewelry Chain Bracelet",
            "oldPrice": "$350.00",
            "newPrice": "$249.99",
            "save": "SAVE 29%"
        },
        {
            "id": "bracelets17",
            "image": "https://m.media-amazon.com/images/I/518+WSnEAlL._AC_UL320_.jpg",
            "brand": "John Hardy",
            "description": "John Hardy Classic Chain Bracelet",
            "oldPrice": "$550.00",
            "newPrice": "$399.00",
            "save": "SAVE 27%"
        },
        {
            "id": "bracelets18",
            "image": "https://m.media-amazon.com/images/I/51bCflO+iSL._AC_UL320_.jpg",
            "brand": "David Yurman",
            "description": "David Yurman Cable Classic Bracelet",
            "oldPrice": "$650.00",
            "newPrice": "$499.00",
            "save": "SAVE 23%"
        },
        {
            "id": "bracelets19",
            "image": "https://m.media-amazon.com/images/I/51ao1VqlL4L._AC_UL320_.jpg",
            "brand": "Kendra Scott",
            "description": "Kendra Scott Elisa Adjustable Bracelet",
            "oldPrice": "$60.00",
            "newPrice": "$39.99",
            "save": "SAVE 33%"
        },
        {
            "id": "bracelets20",
            "image": "https://m.media-amazon.com/images/I/61NO4glmKWL._AC_UL320_.jpg",
            "brand": "Etsy",
            "description": "Etsy Handmade Beaded Bracelet",
            "oldPrice": "$25.00",
            "newPrice": "$15.00",
            "save": "SAVE 40%"
        },
        {
            "id": "bracelets21",
            "image": "https://m.media-amazon.com/images/I/51kN5EkuHcL._AC_UL320_.jpg",
            "brand": "Bamboo",
            "description": "Bamboo Bangle Bracelet",
            "oldPrice": "$30.00",
            "newPrice": "$22.99",
            "save": "SAVE 23%"
        },
        {
            "id": "bracelets22",
            "image": "https://m.media-amazon.com/images/I/51rjR9o-A+L._AC_UL320_.jpg",
            "brand": "Luxe Jewelry",
            "description": "Luxe Jewelry Silver Bracelet",
            "oldPrice": "$90.00",
            "newPrice": "$59.99",
            "save": "SAVE 33%"
        },
        {
            "id": "bracelets23",
            "image": "https://m.media-amazon.com/images/I/61uH+pjxllL._AC_UL320_.jpg",
            "brand": "Urban Outfitters",
            "description": "Urban Outfitters Friendship Bracelet",
            "oldPrice": "$25.00",
            "newPrice": "$19.99",
            "save": "SAVE 20%"
        },
        {
            "id": "bracelets24",
            "image": "https://m.media-amazon.com/images/I/51MkKfRzm4L._AC_UL320_.jpg",
            "brand": "Avery",
            "description": "Avery Infinity Bracelet",
            "oldPrice": "$55.00",
            "newPrice": "$39.99",
            "save": "SAVE 27%"
        },
        {
            "id": "bracelets25",
            "image": "https://m.media-amazon.com/images/I/51rjR9o-A+L._AC_UL320_.jpg",
            "brand": "Chloé",
            "description": "Chloé C Bracelet",
            "oldPrice": "$320.00",
            "newPrice": "$240.00",
            "save": "SAVE 25%"
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