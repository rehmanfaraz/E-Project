(() => {
    const products = [
        {
            "id" : 1 ,
            "image": "https://www.mygiftstop.com/cdn/shop/files/luminox-3051-bo-men-s-navy-seal-colormark-dive-watch-rugged-blackout-swiss-made-timepiece-my-gift-stop-3_600x.jpg?v=1716807510",
            "brand": "LUMINOX",
            "description": "Luminox 3051.BO Men's Navy SEAL Colormark Dive Watch ",
            "oldPrice": "$495.00",
            "newPrice": "$185.94",
            "save": "SAVE 62%"
        },
        {
            "id" : 2 ,
            "image": "https://www.mygiftstop.com/cdn/shop/files/luminox-3051-bo-men-s-navy-seal-colormark-dive-watch-rugged-blackout-swiss-made-timepiece-my-gift-stop-2_600x.jpg?v=1716807509",
            "brand": "CASIO",
            "description": "Casio GA100-1A1 Men's G-Shock Black resin Strap Watch",
            "oldPrice": "$110.00",
            "newPrice": "$74.84",
            "save": "SAVE 32%"
        },
        {
            "id" : 3 ,
            "image": "https://www.mygiftstop.com/cdn/shop/products/luminox-3059-evo-navy-seal-colormark-dive-watch-my-gift-stop-2_600x.jpg?v=1716800914",
            "brand": "Luminox",
            "description": "Luminox 3059 EVO Navy SEAL Colormark Dive Watch",
            "oldPrice": "$$445.00",
            "newPrice": "$198.94",
            "save": "SAVE 55%"
        },
        {
            "id" : 12 ,
            "image": "https://www.mygiftstop.com/cdn/shop/products/luminox-navy-seal-dive-watch-model-3005-my-gift-stop_600x.jpg?v=1716800938",
            "brand": "Luminox",
            "description": "Luminox Navy SEAL Dive Watch Model 3005",
            "oldPrice": "$425.00",
            "newPrice": "$228.95",
            "save": "SAVE 46%",
        },
        {
            "id" : 13 ,
            "image": "https://www.mygiftstop.com/cdn/shop/products/luminox-3057-wo-men-s-navy-seal-colormark-white-dial-white-silicone-strap-dive-watch-my-gift-stop-1_600x.jpg?v=1716804005",
            "brand": "Luminox",
            "description": "Luminox 3057.WO Men's Navy Seal Colormark White Dial White Silicone Strap Dive Watch",
            "oldPrice": "$435.00",
            "newPrice": "$189.94",
            "save": "SAVE 56%",
        },
        {
            "id" : "men2" ,
            "image": "https://www.mygiftstop.com/cdn/shop/files/casio-men-s-quartz-watch-g-shock-analog-digital-strap-shock-resistant-or-ga100l-8a-my-gift-stop-1_600x.jpg?v=1716750413",
            "brand": "Casio",
            "description": "Casio GA100-1A1 Men's G-Shock Black resin Strap Watch",
            "oldPrice": "$150.0",
            "newPrice": "$75.0",
            "save": "SAVE 32%"
        },
        {
            "image": "https://www.mygiftstop.com/cdn/shop/products/seiko-unisex-watch-series-5-black-dial-silver-stainless-steel-bracelet-or-snk375k1-my-gift-stop-1_600x.jpg?v=1716731028",
            "brand": "SEIKO",
            "description": "Seiko Unisex Watch - Series 5 Black Dial Silver Stainless Steel Bracelet | SNK375K1",
            "oldPrice": "$220.00",
            "newPrice": "$114.95",
            "save": "SAVE 48%",
            "id": 14
        },
        {
            "id" : "men1" ,
            "image": "https://www.mygiftstop.com/cdn/shop/products/casio-ga100-1a1-men-s-g-shock-black-resin-strap-watch-my-gift-stop-1_600x.jpg?v=1716804909",
            "brand": "Casio",
            "description": "Casio GA100-1A1 Men's G-Shock Black resin Strap Watch",
            "oldPrice": "$225.0",
            "newPrice": "$200.0",
            "save": "SAVE 12%"
        },
    {
        "id": "men3",
        "image": "https://cdn2.chrono24.com/images/topmodels/981-cik797l6ykgfd90130pthe51-Main.png",
        "brand": "Casio",
        "description": "Casio GA100-1A1 Men's G-Shock Black Resin Strap Watch",
        "oldPrice": "$150.0",
        "newPrice": "$75.0",
        "save": "SAVE 50%"
    },
    {
        "id": "men4",
        "image": "https://cdn2.chrono24.com/images/topmodels/2460-qdbmfkxeh413c9x6str5otx5-Main.png",
        "brand": "Seiko",
        "description": "Seiko Men's Automatic Diver's Watch",
        "oldPrice": "$200.0",
        "newPrice": "$150.0",
        "save": "SAVE 25%"
    },
    {
        "id": "men5",
        "image": "https://cdn2.chrono24.com/images/topmodels/2887-bx10fbakjz03f7x7t2xgmy06-Main.png",
        "brand": "Citizen",
        "description": "Citizen Eco-Drive Men's Chronograph Watch",
        "oldPrice": "$250.0",
        "newPrice": "$180.0",
        "save": "SAVE 28%"
    },
    {
        "id": "men6",
        "image": "https://cdn2.chrono24.com/images/topmodels/2840-kqj07cplajc3l73cpz39pvpr-Main.png",
        "brand": "Invicta",
        "description": "Invicta Men's Pro Diver Collection Watch",
        "oldPrice": "$100.0",
        "newPrice": "$70.0",
        "save": "SAVE 30%"
    },
    {
        "id": "men7",
        "image": "https://cdn2.chrono24.com/images/topmodels/2899-4k6soievypt77btk2q73437q-Main.png",
        "brand": "Michael Kors",
        "description": "Michael Kors Men's Lexington Chronograph Watch",
        "oldPrice": "$250.0",
        "newPrice": "$200.0",
        "save": "SAVE 20%"
    },
    {
        "id": "men8",
        "image": "https://cdn2.chrono24.com/images/topmodels/2839-6rzxzfmsq4pb7ifwxftcj57a-Main.png",
        "brand": "Tissot",
        "description": "Tissot Men's PRC 200 Chronograph Watch",
        "oldPrice": "$350.0",
        "newPrice": "$300.0",
        "save": "SAVE 14%"
    },
    {
        "id": "men9",
        "image": "https://cdn2.chrono24.com/images/topmodels/2857-4135rwx9xf7t3iulwte2rhil-Main.png",
        "brand": "Hamilton",
        "description": "Hamilton Men's Khaki Field Mechanical Watch",
        "oldPrice": "$450.0",
        "newPrice": "$400.0",
        "save": "SAVE 11%"
    },
    {
        "id": "men10",
        "image": "https://cdn2.chrono24.com/images/topmodels/2842-bs6p9ibf70rheol81vwyfk46-Main.png",
        "brand": "Bulova",
        "description": "Bulova Men's Precisionist Chronograph Watch",
        "oldPrice": "$500.0",
        "newPrice": "$350.0",
        "save": "SAVE 30%"
    },
    {
        "id": "men11",
        "image": "https://cdn2.chrono24.com/images/topmodels/2798-qip1bsryaw88fstyhzbxqxbc-Main.png",
        "brand": "TAG Heuer",
        "description": "TAG Heuer Men's Formula 1 Quartz Watch",
        "oldPrice": "$1,200.0",
        "newPrice": "$900.0",
        "save": "SAVE 25%"
    },
    {
        "id": "men12",
        "image": "https://cdn2.chrono24.com/images/topmodels/2967-gfakv7ltb0b7j5h9tyqrvh1i-Main.png",
        "brand": "Rolex",
        "description": "Rolex Men's Submariner Date Watch",
        "oldPrice": "$8,000.0",
        "newPrice": "$7,000.0",
        "save": "SAVE 12%"
    },
    {
        "id": "men13",
        "image": "https://cdn2.chrono24.com/images/topmodels/2978-owbxtcelwi4pqzgxgjjtyv41-Main.png",
        "brand": "Omega",
        "description": "Omega Men's Seamaster Aqua Terra Watch",
        "oldPrice": "$6,000.0",
        "newPrice": "$5,000.0",
        "save": "SAVE 17%"
    },
    {
        "id": "men14",
        "image": "https://img.chrono24.com/images/uhren/25307007-jiwmpqhz546vr47740hpe0jj-Square280.jpg",
        "brand": "Omega",
        "description": "Omega Men's Seamaster Aqua Terra Watch",
        "oldPrice": "$6,000.0",
        "newPrice": "$5,000.0",
        "save": "SAVE 17%"
    },

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