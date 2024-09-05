(() => {

    const products = [
        {
            "id": "hallmark1",
            "image": "https://www.hallmark.com/dw/image/v2/AALB_PRD/on/demandware.static/-/Sites-hallmark-master/default/dw3a243568/images/finished-goods/products/499FBD9374/Polka-Dots-and-Doodles-Birthday-Card-for-Niece_499FBD9374_02.jpg?sw=570&sh=758&sm=fit&q=65",
            "brand": "Hallmark",
            "description": "Polka Dots and Doodles Birthday Card for Niece",
            "oldPrice": "5$",
            "newPrice": "3$",
            "save": "40%"
        },
        {
            "id": "hallmark2",
            "image": "https://www.hallmark.com/dw/image/v2/AALB_PRD/on/demandware.static/-/Sites-hallmark-master/default/dw88b5d1bb/images/finished-goods/products/1HGN1501/Disney-Haunted-Mansion-Foolish-Mortals-Mug_1HGN1501_01.jpg?sw=570&sh=758&sm=fit&q=65",
            "brand": "Hallmark",
            "description": "Disney Haunted Mansion Foolish Mortals Mug",
            "oldPrice": "15$",
            "newPrice": "12$",
            "save": "20%"
        },
        {
            "id": "hallmark3",
            "image": "https://www.hallmark.com/dw/image/v2/AALB_PRD/on/demandware.static/-/Sites-hallmark-master/default/dwd5cb657f/images/finished-goods/products/1KHW1048/ZipAlong-Black-Cat-Halloween-Plush-Toy_1KHW1048_01.jpg?sw=570&sh=758&sm=fit&q=65",
            "brand": "Hallmark",
            "description": "ZipAlong Black Cat Halloween Plush Toy",
            "oldPrice": "25$",
            "newPrice": "20$",
            "save": "20%"
        },
        {
            "id": "hallmark4",
            "image": "https://www.hallmark.com/dw/image/v2/AALB_PRD/on/demandware.static/-/Sites-hallmark-master/default/dw6777be96/images/finished-goods/products/1HGN1529/Peanuts-Bat-Snoopy-and-Woodstock-Halloween-Mug_1HGN1529_01.jpg?sw=570&sh=758&sm=fit&q=65",
            "brand": "Hallmark",
            "description": "Peanuts Bat Snoopy and Woodstock Halloween Mug",
            "oldPrice": "15$",
            "newPrice": "12$",
            "save": "20%"
        },
        {
            "id": "hallmark5",
            "image": "https://www.hallmark.com/dw/image/v2/AALB_PRD/on/demandware.static/-/Sites-hallmark-master/default/dwa2af3e52/images/finished-goods/products/1HGN1531/Peanuts-Bat-Snoopy-Figurine-With-Light_1HGN1531_01.jpg?sw=570&sh=758&sm=fit&q=65",
            "brand": "Hallmark",
            "description": "Peanuts Bat Snoopy Figurine With Light",
            "oldPrice": "30$",
            "newPrice": "25$",
            "save": "17%"
        },
        {
            "id": "hallmark6",
            "image": "https://www.hallmark.com/dw/image/v2/AALB_PRD/on/demandware.static/-/Sites-hallmark-master/default/dw2c793def/images/finished-goods/products/1HGN1532/Peanuts-Snoopy-the-Vampire-Beagle-Novelty-Crew-Socks_1HGN1532_01.jpg?sw=570&sh=758&sm=fit&q=65",
            "brand": "Hallmark",
            "description": "Peanuts Snoopy the Vampire Beagle Novelty Crew Socks",
            "oldPrice": "10$",
            "newPrice": "8$",
            "save": "20%"
        },
        {
            "id": "hallmark7",
            "image": "https://www.hallmark.com/dw/image/v2/AALB_PRD/on/demandware.static/-/Sites-hallmark-master/default/dwc84dbc10/images/finished-goods/products/1HGN1540/Disney-Haunted-Mansion-Resting-Place-Throw-Blanket_1HGN1540_01.jpg?sw=570&sh=758&sm=fit&q=65",
            "brand": "Hallmark",
            "description": "Disney Haunted Mansion Resting Place Throw Blanket",
            "oldPrice": "50$",
            "newPrice": "45$",
            "save": "10%"
        },
        {
            "id": "hallmark8",
            "image": "https://www.hallmark.com/dw/image/v2/AALB_PRD/on/demandware.static/-/Sites-hallmark-master/default/dwbb7189e9/images/finished-goods/products/6014623/Jim-Shore-Peanuts-Snoopy-Monster-Mini-Figurine_6014623_02.jpg?sw=570&sh=758&sm=fit&q=65",
            "brand": "Hallmark",
            "description": "Jim Shore Peanuts Snoopy Monster Mini Figurine",
            "oldPrice": "15$",
            "newPrice": "12$",
            "save": "20%"
        },
        {
            "id": "hallmark9",
            "image": "https://www.hallmark.com/dw/image/v2/AALB_PRD/on/demandware.static/-/Sites-hallmark-master/default/dw7f050026/images/finished-goods/products/6014475/Jim-Shore-Gnome-Pumpkin-Figurine_6014475_02.jpg?sw=570&sh=758&sm=fit&q=65",
            "brand": "Hallmark",
            "description": "Jim Shore Gnome Pumpkin Figurine",
            "oldPrice": "20$",
            "newPrice": "18$",
            "save": "10%"
        },
        {
            "id": "hallmark10",
            "image": "https://www.hallmark.com/dw/image/v2/AALB_PRD/on/demandware.static/-/Sites-hallmark-master/default/dw45112cee/images/finished-goods/products/6014498/Jim-Shore-Pirate-Gnome-Figurine_6014498_02.jpg?sw=570&sh=758&sm=fit&q=65",
            "brand": "Hallmark",
            "description": "Jim Shore Pirate Gnome Figurine",
            "oldPrice": "20$",
            "newPrice": "18$",
            "save": "10%"
        },
        {
            "id": "hallmark11",
            "image": "https://www.hallmark.com/dw/image/v2/AALB_PRD/on/demandware.static/-/Sites-hallmark-master/default/dw376a981d/images/finished-goods/products/1KHW1047/Mickey-and-Minnie-Halloween-Better-Together-Plush_1KHW1047_01.jpg?sw=570&sh=758&sm=fit&q=65",
            "brand": "Hallmark",
            "description": "Mickey and Minnie Halloween Better Together Plush",
            "oldPrice": "30$",
            "newPrice": "28$",
            "save": "7%"
        },
        {
            "id": "hallmark12",
            "image": "https://www.hallmark.com/dw/image/v2/AALB_PRD/on/demandware.static/-/Sites-hallmark-master/default/dw00cbe6e6/images/finished-goods/products/6014479/Jim-Shore-Black-Cat-on-Pumpkin-LightUp-Figurine_6014479_02.jpg?sw=570&sh=758&sm=fit&q=65",
            "brand": "Hallmark",
            "description": "Jim Shore Black Cat on Pumpkin Light-Up Figurine",
            "oldPrice": "25$",
            "newPrice": "20$",
            "save": "20%"
        },
        {
            "id": "hallmark13",
            "image": "https://www.hallmark.com/dw/image/v2/AALB_PRD/on/demandware.static/-/Sites-hallmark-master/default/dwe8eb9554/images/finished-goods/products/6014474/Jim-Shore-Werewolf-With-Moon-Figurine_6014474_02.jpg?sw=570&sh=758&sm=fit&q=65",
            "brand": "Hallmark",
            "description": "Jim Shore Werewolf With Moon Figurine",
            "oldPrice": "35$",
            "newPrice": "30$",
            "save": "14%"
        },
        {
            "id": "hallmark14",
            "image": "https://www.hallmark.com/dw/image/v2/AALB_PRD/on/demandware.static/-/Sites-hallmark-master/default/dw1c34bc74/images/finished-goods/products/1HGN1517/Peanuts-Snoopy-Boo-LightUp-Sign_1HGN1517_02.jpg?sw=570&sh=758&sm=fit&q=65",
            "brand": "Hallmark",
            "description": "Peanuts Snoopy Boo Light-Up Sign",
            "oldPrice": "35$",
            "newPrice": "30$",
            "save": "14%"
        },
        {
            "id": "hallmark15",
            "image": "https://www.hallmark.com/dw/image/v2/AALB_PRD/on/demandware.static/-/Sites-hallmark-master/default/dwdcc38f7c/images/finished-goods/products/23HOCUSSPPS/Hocus-Pocus-Mug-and-Blanket-Halloween-Gift-Set_23HOCUSSPPS_01.jpg?sw=570&sh=758&sm=fit&q=65",
            "brand": "Hallmark",
            "description": "Hocus Pocus Mug and Blanket Halloween Gift Set",
            "oldPrice": "45$",
            "newPrice": "40$",
            "save": "11%"
        },
        {
            "id": "hallmark16",
            "image": "https://www.hallmark.com/dw/image/v2/AALB_PRD/on/demandware.static/-/Sites-hallmark-master/default/dwf2c7a8cc/images/finished-goods/products/1HGN1539/Disney-Haunted-Mansion-Stretching-Portrait-Candy-Dish_1HGN1539_02.jpg?sw=570&sh=758&sm=fit&q=65",
            "brand": "Hallmark",
            "description": "Disney Haunted Mansion Stretching Portrait Candy Dish",
            "oldPrice": "30$",
            "newPrice": "25$",
            "save": "17%"
        },
        {
            "id": "hallmark17",
            "image": "https://www.hallmark.com/dw/image/v2/AALB_PRD/on/demandware.static/-/Sites-hallmark-master/default/dw3ea26598/images/finished-goods/products/1HGN1504/Haunted-Mansion-Glow-in-the-Dark-Bat-Pillow_1HGN1504_02.jpg?sw=570&sh=758&sm=fit&q=65",
            "brand": "Hallmark",
            "description": "Haunted Mansion Glow-in-the-Dark Bat Pillow",
            "oldPrice": "20$",
            "newPrice": "15$",
            "save": "25%"
        },
        {
            "id": "hallmark18",
            "image": "https://www.hallmark.com/dw/image/v2/AALB_PRD/on/demandware.static/-/Sites-hallmark-master/default/dw17fd4e67/images/finished-goods/products/1HGN1556/Mickey-Mouse-Halloween-Countdown-Calendar-Figurine_1HGN1556_01.jpg?sw=570&sh=758&sm=fit&q=65",
            "brand": "Hallmark",
            "description": "Mickey Mouse Halloween Countdown Calendar Figurine",
            "oldPrice": "35$",
            "newPrice": "30$",
            "save": "14%"
        },
        {
            "id": "hallmark19",
            "image": "https://www.hallmark.com/dw/image/v2/AALB_PRD/on/demandware.static/-/Sites-hallmark-master/default/dw26feb87c/images/finished-goods/products/1HGN1552/Nightmare-Before-Christmas-Cookie-Jar-With-Sound_1HGN1552_01.jpg?sw=570&sh=758&sm=fit&q=65",
            "brand": "Hallmark",
            "description": "Nightmare Before Christmas Cookie Jar With Sound",
            "oldPrice": "40$",
            "newPrice": "35$",
            "save": "12%"
        },
        {
            "id": "hallmark20",
            "image": "https://www.hallmark.com/dw/image/v2/AALB_PRD/on/demandware.static/-/Sites-hallmark-master/default/dw3e1c154d/images/finished-goods/products/6014486/Jim-Shore-Day-of-the-Dead-Skull-With-Flowers-Figurine_6014486_02.jpg?sw=570&sh=758&sm=fit&q=65",
            "brand": "Hallmark",
            "description": "Jim Shore Day of the Dead Skull With Flowers Figurine",
            "oldPrice": "45$",
            "newPrice": "40$",
            "save": "11%"
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