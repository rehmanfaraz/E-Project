(() => {
    const gift = [
        {
            "id": "gift1",
            "image": "https://pk-live-21.slatic.net/kf/Se10e4009cd3e44278b694d26e477e08eQ.jpg_300x0q75.webp",
            "brand": "Mug",
            "description": "Ceramic Coffee Mug with Cute Design",
            "oldPrice": "$15.0",
            "newPrice": "$10.0",
            "save": "SAVE 33%"
        },
        {
            "id": "gift2",
            "image": "https://pk-live-21.slatic.net/kf/S5c8685e463c64101af5c75ac2d19d54dr.jpg_300x0q75.webp",
            "brand": "Bracelet",
            "description": "Leather Braided Bracelet with Charm",
            "oldPrice": "$25.0",
            "newPrice": "$18.0",
            "save": "SAVE 28%"
        },
        {
            "id": "gift3",
            "image": "https://magnumcakes.com/wp-content/uploads/2021/11/786-22-2-430x430.jpg",
            "brand": "Cake",
            "description": "Chocolate Ganache Cake",
            "oldPrice": "$40.0",
            "newPrice": "$30.0",
            "save": "SAVE 25%"
        },
        {
            "id": "gift4",
            "image": "https://pk-live-21.slatic.net/kf/S9fd7057e955d470684e1651501e36f2by.jpg_300x0q75.webp",
            "brand": "Watch",
            "description": "Stylish Analog Watch with Leather Strap",
            "oldPrice": "$100.0",
            "newPrice": "$75.0",
            "save": "SAVE 25%"
        },
        {
            "id": "gift5",
            "image": "https://pk-live-21.slatic.net/kf/S911ddcba1d1847a3aa1a3a117e0e0cb0S.jpg_300x0q75.webp",
            "brand": "Mug",
            "description": "Personalized Photo Mug",
            "oldPrice": "$20.0",
            "newPrice": "$12.0",
            "save": "SAVE 40%"
        },
        {
            "id": "gift6",
            "image": "https://static-01.daraz.pk/p/e438de224f1de88d718a3cc14be6651f.jpg_300x0q75.webp",
            "brand": "Bracelet",
            "description": "Silver Cuff Bracelet with Engraving",
            "oldPrice": "$50.0",
            "newPrice": "$35.0",
            "save": "SAVE 30%"
        },
        {
            "id": "gift7",
            "image": "https://magnumcakes.com/wp-content/uploads/2021/11/786-9-7-copy-430x430.jpg",
            "brand": "Cake",
            "description": "Vanilla Sponge Cake with Fresh Strawberries",
            "oldPrice": "$45.0",
            "newPrice": "$35.0",
            "save": "SAVE 22%"
        },
        {
            "id": "gift8",
            "image": "https://pk-live-21.slatic.net/kf/Sc6f56f28ede24fdd992c336bff5b78c13.jpg_300x0q75.webp",
            "brand": "Watch",
            "description": "Digital Fitness Tracker Watch",
            "oldPrice": "$80.0",
            "newPrice": "$60.0",
            "save": "SAVE 25%"
        },
        {
            "id": "gift9",
            "image": "https://pk-live-21.slatic.net/kf/Sdaeae58abe334aee8b5064ed483c57acg.jpg_300x0q75.webp",
            "brand": "Mug",
            "description": "Travel Mug with Insulation",
            "oldPrice": "$30.0",
            "newPrice": "$22.0",
            "save": "SAVE 27%"
        },
        {
            "id": "gift10",
            "image": "https://pk-live-21.slatic.net/kf/S49c2df32525245ae8cc24972f41170acW.jpg_300x0q75.webp",
            "brand": "Bracelet",
            "description": "Beaded Friendship Bracelet Set",
            "oldPrice": "$15.0",
            "newPrice": "$10.0",
            "save": "SAVE 33%"
        },
        {
            "id": "gift11",
            "image": "https://magnumcakes.com/wp-content/uploads/2022/03/20-years-of-love-430x430.jpg",
            "brand": "Cake",
            "description": "Red Velvet Cake with Cream Cheese Frosting",
            "oldPrice": "$50.0",
            "newPrice": "$40.0",
            "save": "SAVE 20%"
        },
        {
            "id": "gift12",
            "image": "https://pk-live-21.slatic.net/kf/S0ee0f9aed4e1454ca7434a61127766790.jpg_300x0q75.webp",
            "brand": "Watch",
            "description": "Classic Silver Watch with Metal Band",
            "oldPrice": "$120.0",
            "newPrice": "$90.0",
            "save": "SAVE 25%"
        },
        {
            "id": "gift13",
            "image": "https://pk-live-21.slatic.net/kf/S78195abd83fb4ed7ad158291ee82882bs.jpg_300x0q75.webp",
            "brand": "Mug",
            "description": "Funny Quote Coffee Mug",
            "oldPrice": "$18.0",
            "newPrice": "$14.0",
            "save": "SAVE 22%"
        },
        {
            "id": "gift14",
            "image": "https://static-01.daraz.pk/p/7b85315e3bbbbdaae7710a154eeeadd1.jpg_300x0q75.webp",
            "brand": "Bracelet",
            "description": "Gemstone Stretch Bracelet",
            "oldPrice": "$30.0",
            "newPrice": "$22.0",
            "save": "SAVE 27%"
        },
        {
            "id": "gift15",
            "image": "https://magnumcakes.com/wp-content/uploads/2021/11/786-3-9-430x430.jpg",
            "brand": "Cake",
            "description": "Lemon Drizzle Cake",
            "oldPrice": "$35.0",
            "newPrice": "$28.0",
            "save": "SAVE 20%"
        },
        {
            "id": "gift16",
            "image": "https://static-01.daraz.pk/p/96bdabf5d22227c521b4d56e161bd141.png_300x0q75.webp",
            "brand": "Watch",
            "description": "Smartwatch with Heart Rate Monitor",
            "oldPrice": "$200.0",
            "newPrice": "$150.0",
            "save": "SAVE 25%"
        },
        {
            "id": "gift17",
            "image": "https://pk-live-21.slatic.net/kf/S7b540cb1abd84d59be9072430bfcf237U.jpg_300x0q75.webp",
            "brand": "Mug",
            "description": "Color Changing Coffee Mug",
            "oldPrice": "$22.0",
            "newPrice": "$16.0",
            "save": "SAVE 27%"
        },
        {
            "id": "gift18",
            "image": "https://pk-live-21.slatic.net/kf/S15cb064d0272413e9f08bf2dcf6e063bf.jpg_300x0q75.webp",
            "brand": "Bracelet",
            "description": "Charm Bracelet with Initials",
            "oldPrice": "$40.0",
            "newPrice": "$30.0",
            "save": "SAVE 25%"
        },
        {
            "id": "gift19",
            "image": "https://magnumcakes.com/wp-content/uploads/2021/12/burnt-orange-and-teal-430x430.jpg",
            "brand": "Cake",
            "description": "Carrot Cake with Cream Cheese Icing",
            "oldPrice": "$45.0",
            "newPrice": "$35.0",
            "save": "SAVE 22%"
        },
        {
            "id": "gift20",
            "image": "https://static-01.daraz.pk/p/c037a0a1ab35f81de786b5e2035f0b5b.jpg_300x0q75.webp",
            "brand": "Watch",
            "description": "Luxury Watch with Diamond Accents",
            "oldPrice": "$1,000.0",
            "newPrice": "$750.0",
            "save": "SAVE 25%"
        },
        {
            "id": "gift21",
            "image": "https://pk-live-21.slatic.net/kf/Sbd06e71846b948a19bf054f8e649875eH.jpg_300x0q75.webp",
            "brand": "Mug",
            "description": "Funny Animal Coffee Mug",
            "oldPrice": "$17.0",
            "newPrice": "$13.0",
            "save": "SAVE 24%"
        },
        {
            "id": "gift22",
            "image": "https://static-01.daraz.pk/p/0ecd415447809949af923cc2ea736a12.jpg_300x0q75.webp",
            "brand": "Bracelet",
            "description": "Woven Friendship Bracelets",
            "oldPrice": "$12.0",
            "newPrice": "$8.0",
            "save": "SAVE 33%"
        },
        {
            "id": "gift23",
            "image": "https://magnumcakes.com/wp-content/uploads/2022/08/chef-cake-2-430x430.jpg",
            "brand": "Cake",
            "description": "Cheesecake with Fruit Topping",
            "oldPrice": "$60.0",
            "newPrice": "$45.0",
            "save": "SAVE 25%"
        },
        {
            "id": "gift24",
            "image": "https://pk-live-21.slatic.net/kf/S1a0cc94a49c846d3b531316c226f1bdeG.jpg_300x0q75.webp",
            "brand": "Watch",
            "description": "Waterproof Diving Watch",
            "oldPrice": "$300.0",
            "newPrice": "$225.0",
            "save": "SAVE 25%"
        },
        {
            "id": "gift25",
            "image": "https://pk-live-21.slatic.net/kf/Se3fa32e12aec4773b53079be1e9df1c6Z.jpg_300x0q75.webp",
            "brand": "Mug",
            "description": "Travel Mug with Lid",
            "oldPrice": "$25.0",
            "newPrice": "$18.0",
            "save": "SAVE 28%"
        },
        {
            "id": "gift26",
            "image": "https://pk-live-21.slatic.net/kf/S0a4ad62b7edf48f39dae04c7c74a09632.jpg_300x0q75.webp",
            "brand": "Bracelet",
            "description": "Gold Plated Cuff Bracelet",
            "oldPrice": "$60.0",
            "newPrice": "$45.0",
            "save": "SAVE 25%"
        },
        {
            "id": "gift27",
            "image": "https://magnumcakes.com/wp-content/uploads/2021/11/786-1-10-430x430.jpg",
            "brand": "Cake",
            "description": "Tiramisu Cake",
            "oldPrice": "$50.0",
            "newPrice": "$40.0",
            "save": "SAVE 20%"
        },
        {
            "id": "gift28",
            "image": "https://static-01.daraz.pk/p/dd726e549cf04797a2dac472421a8705.jpg_300x0q75.webp",
            "brand": "Watch",
            "description": "Stylish Dress Watch",
            "oldPrice": "$150.0",
            "newPrice": "$100.0",
            "save": "SAVE 33%"
        },
        {
            "id": "gift29",
            "image": "https://pk-live-21.slatic.net/kf/Sde2acb70e7414301b0d27a53cc0a8bdfi.jpg_300x0q75.webp",
            "brand": "Mug",
            "description": "Mug with Lid and Straw",
            "oldPrice": "$20.0",
            "newPrice": "$15.0",
            "save": "SAVE 25%"
        },
        {
            "id": "gift30",
            "image": "https://static-01.daraz.pk/p/37151cb7a4254841d3045ff7c7961e54.jpg_300x0q75.webp",
            "brand": "Bracelet",
            "description": "Vintage Style Bracelet",
            "oldPrice": "$35.0",
            "newPrice": "$25.0",
            "save": "SAVE 29%"
        },
 ];
   const container3 = document.querySelector('.card-container3');
    
     gift.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('card2');
        
        card.innerHTML = `
            <a href="productpage.html?id=${product.id}"> <img src="${product.image}" alt="${product.brand}"> </a>
            <div class="details">
                <a href="productpage.html?id=${product.id}" class="brand-link"><h4>${product.brand}</h4></a>
                <p>${product.description}</p>
                <div class="price-container3">
                    <p class="old-price">${product.oldPrice}</p>
                    <p class="price">${product.newPrice}</p>
                    <p class="save">${product.save}</p>
                </div>
            </div>
        `;
        
        container3.appendChild(card);
    });

    })();