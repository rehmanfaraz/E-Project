(() => {

    const products = [ 
        {
            "id": "1",
            "image": "https://i.etsystatic.com/34705037/r/il/59c8b3/4170914426/il_794xN.4170914426_8rhs.jpg",
            "brand": "Clock",
            "description": "Wall clock 24 inches with real moving gears Vintage Brown",
            "oldPrice": "$200.0",
            "newPrice": "$160.99",
            "save": "SAVE 20%"
        },
        {
            "id": "2",
            "image": "https://i.etsystatic.com/35571911/r/il/d829cc/6128341855/il_794xN.6128341855_2yep.jpg",
            "brand": "Clock",
            "description": "Mid Century Modern Wall Clock, Metal with Wooden Wall Clock",
            "oldPrice": "$100.0",
            "newPrice": "$49.04",
            "save": "SAVE 45%"
        },
        {
            "id": "3",
            "image": "https://i.etsystatic.com/46816292/r/il/7ad3da/6038805476/il_794xN.6038805476_rirv.jpg",
            "brand": "Clock",
            "description": "World Map Metal LED Wall Clock",
            "oldPrice": "$100.0",
            "newPrice": "$50.",
            "save": "SAVE 50%"
        },
        {
            "id": "4",
            "image": "https://i.etsystatic.com/41685737/r/il/901815/5466174209/il_794xN.5466174209_6295.jpg",
            "brand": "Clock",
            "description": "Modern Minimalist Oversized Metal Wall Clock",
            "oldPrice": "$100.0",
            "newPrice": "$49.0",
            "save": "SAVE 50%"
        },
        {
            "id": "5",
            "image": "https://i.etsystatic.com/43722341/r/il/f198e7/4920360682/il_794xN.4920360682_9qcz.jpg",
            "brand": "Clock",
            "description": "Modern Wall Clock with Golden Roman Numbers",
            "oldPrice": "$110.0",
            "newPrice": "$39.0",
            "save": "SAVE 50%"
        },
        {
            "id": "6",
            "image": "https://i.etsystatic.com/32774388/r/il/3e2fc7/5428882249/il_794xN.5428882249_r1un.jpg",
            "brand": "Clock",
            "description": "Wall Clock Unique, Round Wall Clock, Triple Circle",
            "oldPrice": "$200.0",
            "newPrice": "$100.0",
            "save": "SAVE 50%"
        },
        {
            "id": "7",
            "image": "https://i.etsystatic.com/51953146/r/il/eff624/6134429048/il_794xN.6134429048_affh.jpg",
            "brand": "Clock",
            "description": "Large and Unique Wall Clock, Illuminated Wall Clock",
            "oldPrice": "$80.0",
            "newPrice": "$40.0",
            "save": "SAVE 50%"
        },
        {
            "id": "8",
            "image": "https://i.etsystatic.com/14441612/r/il/0a3a29/1957929927/il_794xN.1957929927_1el9.jpg",
            "brand": "Clock",
            "description": "Scandi wall clock with pastel colors Minimalist wooden clock",
            "oldPrice": "$80.0",
            "newPrice": "$59.0",
            "save": "SAVE 20%"
        },
        {
            "id": "9",
            "image": " https://i.etsystatic.com/52861569/r/il/5d1a4a/6042186562/il_794xN.6042186562_gp8b.jpg",
            "brand": "Clock",
            "description": "XXL Compass Wall Clock, Metal Wall Clock,Metal Wall Art",
            "oldPrice": "$80.0",
            "newPrice": "$59.0",
            "save": "SAVE 20%"
        },
        {
            "id": "10",
            "image": " https://i.etsystatic.com/23776106/r/il/fb333f/3752315596/il_794xN.3752315596_fmot.jpg",
            "brand": "Clock",
            "description": "Made to Order Metal & Olive Wood Wall Clock , Big Wood and Metal Wall Clock",
            "oldPrice": "$80.0",
            "newPrice": "$59.0",
            "save": "SAVE 20%"
        },
        {
            "id": "11",
            "image": " https://i.etsystatic.com/17762588/r/il/cab6d3/5674777280/il_300x300.5674777280_dagf.jpg",
            "brand": "Clock",
            "description": "Hand Assembled Unique Astronomical Clock - a Luxury gift with steampunk design",
            "oldPrice": "$80.0",
            "newPrice": "$59.0",
            "save": "SAVE 20%"
        },
        {
            "id": "12",
            "image": " https://i.etsystatic.com/44077624/r/il/5824e7/5519727482/il_794xN.5519727482_61mn.jpg",
            "brand": "Clock",
            "description":" Long Oval Wall Clock in Minimalist Style,Wall Decor for Living Room",
            "oldPrice": "$80.0",
            "newPrice": "$59.0",
            "save": "SAVE 20%"
        },
        {
            "id": "13",
            "image": "https://i.etsystatic.com/43638271/r/il/388a31/5930339391/il_794xN.5930339391_ri3y.jpg",
            "brand": "Clock",
            "description":" Horloge Murale Moderne, Black Large Compass Metal Wall Clock",
            "oldPrice": "$120.0",
            "newPrice": "$60.0",
            "save": "SAVE 50%"
        },
        {
            "id": "14",
            "image": " https://i.etsystatic.com/23368284/r/il/886f84/5009224834/il_794xN.5009224834_8672.jpg",
            "brand": "Clock",
            "description":"Birds wall clock, Bird flying clock, Modern wall clock unique, Decorative clock",
            "oldPrice": "$80.0",
            "newPrice": "$59.0",
            "save": "SAVE 20%"
        },
        {
            "id": "15",
            "image": " https://i.etsystatic.com/31953897/r/il/e3d955/5609170566/il_794xN.5609170566_ke6b.jpg",
            "brand": "Clock",
            "description":" Modern beige Glass Clock, Brown Modern Wall Clock",
            "oldPrice": "$60.0",
            "newPrice": "$29.0",
            "save": "SAVE 20%"
        },
        {
            "id": "16",
            "image": " https://i.etsystatic.com/22088875/r/il/8d1f9f/5125044529/il_794xN.5125044529_atu0.jpg",
            "brand": "Clock",
            "description":" Green with gold clock, Wave wall clock, Leaves wall clock",
            "oldPrice": "$80.0",
            "newPrice": "$59.0",
            "save": "SAVE 20%"
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