(() => {
    const trending = [
        {
            "image": "https://www.mygiftstop.com/cdn/shop/files/luminox-3051-bo-men-s-navy-seal-colormark-dive-watch-rugged-blackout-swiss-made-timepiece-my-gift-stop-3_600x.jpg?v=1716807510",
            "brand": "LUMINOX",
            "description": "Luminox 3051.BO Men's Navy SEAL Colormark Dive Watch ",
            "oldPrice": "$495.00",
            "newPrice": "$185.94",
            "save": "SAVE 62%" ,
            "id" : 9 ,
        },
        {
            "image": "https://www.mygiftstop.com/cdn/shop/products/swarovski-women-s-bangle-swarovski-symbolic-blue-and-white-crystals-or-5171991-my-gift-stop-1_600x.jpg?v=1716713910",
            "brand": "Swarovski",
            "description": "Swarovski Women's Bangle - Swarovski Symbolic Blue and White Crystals | 5171991",
            "oldPrice": "$125.00",
            "newPrice": "$76.60",
            "save": "SAVE 39%",
            "id": 10
        },
        {
            "image": "https://www.mygiftstop.com/cdn/shop/products/swarovski-women-s-bracelet-melt-your-heart-yellow-gold-plated-or-5446015-my-gift-stop-1_600x.jpg?v=1716772440",
            "brand": "Swarovski",
            "description": "Swarovski Women's Bracelet - Melt Your Heart Yellow Gold Plated | 5446015",
            "oldPrice": "$99.00",
            "newPrice": "$39.94",
            "save": "SAVE 60%",
            "id": 11
        },
        {
            "image": "https://www.mygiftstop.com/cdn/shop/products/luminox-navy-seal-dive-watch-model-3005-my-gift-stop_600x.jpg?v=1716800938",
            "brand": "Luminox",
            "description": "Luminox Navy SEAL Dive Watch Model 3005",
            "oldPrice": "$425.00",
            "newPrice": "$228.95",
            "save": "SAVE 46%",
            "id": 12
        },
        {
            "image": "https://www.mygiftstop.com/cdn/shop/products/luminox-3057-wo-men-s-navy-seal-colormark-white-dial-white-silicone-strap-dive-watch-my-gift-stop-1_600x.jpg?v=1716804005",
            "brand": "Luminox",
            "description": "Luminox 3057.WO Men's Navy Seal Colormark White Dial White Silicone Strap Dive Watch",
            "oldPrice": "$435.00",
            "newPrice": "$189.94",
            "save": "SAVE 56%",
            "id": 13
        },
        {
            "image": "https://www.mygiftstop.com/cdn/shop/products/seiko-unisex-watch-series-5-black-dial-silver-stainless-steel-bracelet-or-snk375k1-my-gift-stop-1_600x.jpg?v=1716731028",
            "brand": "SEIKO",
            "description": "Seiko Unisex Watch - Series 5 Black Dial Silver Stainless Steel Bracelet | SNK375K1",
            "oldPrice": "$220.00",
            "newPrice": "$114.95",
            "save": "SAVE 48%",
            "id": 14
        }
    ];

    const container1 = document.querySelector('.card-container1');

    trending.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('card');
        
        card.innerHTML = `
            <a href="productpage.html?id=${product.id}"> <img src="${product.image}" alt="${product.brand}"> </a>
            <div class="details">
                <a href="productpage.html?id=${product.id}" class="brand-link"><h4>${product.brand}</h4></a>
                <p>${product.description}</p>
                <div class="price-container">
                    <p class="old-price">${product.oldPrice}</p>
                    <p class="price">${product.newPrice}</p>
                    <p class="save">${product.save}</p>
                </div>
            </div>
        `;
        
        container1.appendChild(card);
    });

    let isDragging1 = false;
    let startX1;
    let scrollLeft1;

    container1.addEventListener('mousedown', (e) => {
        isDragging1 = true;
        startX1 = e.pageX - container1.offsetLeft;
        scrollLeft1 = container1.scrollLeft;
        container1.classList.add('no-select'); 
    });

    container1.addEventListener('mouseleave', () => {
        if (isDragging1) {
            isDragging1 = false;
            container1.classList.remove('no-select'); // Enable text selection
        }
    });

    container1.addEventListener('mouseup', () => {
        if (isDragging1) {
            isDragging1 = false;
            container1.classList.remove('no-select'); // Enable text selection
        }
    });

    container1.addEventListener('mousemove', (e) => {
        if (!isDragging1) return;
        e.preventDefault();
        const x = e.pageX - container1.offsetLeft;
        const walk = (x - startX1) * 1; // Adjust scroll speed
        container1.scrollLeft = scrollLeft1 - walk;
    });
})();
