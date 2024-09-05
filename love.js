(() => {

    const products = [
       
    {
        "id": "lovepop1",
        "image": "https://www.lovepop.com/cdn/shop/files/VB5723.jpg?v=1715658619&width=360",
        "brand": "Lovepop",
        "description": "3D Pop-Up Flower Bouquet",
        "oldPrice": "8$",
        "newPrice": "5$",
        "save": "37%"
    },
    {
        "id": "lovepop2",
        "image": "https://www.lovepop.com/cdn/shop/files/LP5404_Disney_sStitchCowabungaBirthdayPop-UpCard_Sentimental-1.jpg?v=1713836336&width=360",
        "brand": "Lovepop",
        "description": "Disney Stitch Cowabunga Birthday Card",
        "oldPrice": "7$",
        "newPrice": "4$",
        "save": "43%"
    },
    {
        "id": "lovepop3",
        "image": "https://www.lovepop.com/cdn/shop/files/LP5629_YouBrightenMyWorldBirdsSuncatcherCard_GIF.gif?v=1719882803&width=360",
        "brand": "Lovepop",
        "description": "You Brighten My World Birds Suncatcher Card",
        "oldPrice": "6$",
        "newPrice": "3$",
        "save": "50%"
    },
    {
        "id": "lovepop4",
        "image": "https://www.lovepop.com/cdn/shop/files/LP5403_DisneyandPixarUpBirthdayAdventuresPop-UpCard_Detail.jpg?v=1713759705&width=360",
        "brand": "Lovepop",
        "description": "Disney and Pixar Up Birthday Adventures Card",
        "oldPrice": "9$",
        "newPrice": "6$",
        "save": "33%"
    },
    {
        "id": "lovepop5",
        "image": "https://www.lovepop.com/cdn/shop/files/LP5407_MinionsBelloBirthday_Pop-UpCard_Detail.jpg?v=1716532192&width=360",
        "brand": "Lovepop",
        "description": "Minions Bello Birthday Pop-Up Card",
        "oldPrice": "8$",
        "newPrice": "5$",
        "save": "37%"
    },
    {
        "id": "lovepop6",
        "image": "https://www.lovepop.com/cdn/shop/files/CP5678_Purr-fectCatBouquet_Detail.jpg?v=1721013219&width=360",
        "brand": "Lovepop",
        "description": "Purr-fect Cat Bouquet Card",
        "oldPrice": "7$",
        "newPrice": "4$",
        "save": "43%"
    },
    {
        "id": "lovepop7",
        "image": "https://www.lovepop.com/cdn/shop/files/CP5573_Cherry_Blossom_Bouquet_lifestyle_1.jpg?v=1719630932&width=360",
        "brand": "Lovepop",
        "description": "Cherry Blossom Bouquet Card",
        "oldPrice": "10$",
        "newPrice": "7$",
        "save": "30%"
    },
    {
        "id": "lovepop8",
        "image": "https://www.lovepop.com/cdn/shop/files/LP5566_Marvel_sSpider-ManMilesMoralesBirthdayPop-UpCard_Detail.jpg?v=1722564604&width=360",
        "brand": "Lovepop",
        "description": "Marvel's Spider-Man Miles Morales Birthday Card",
        "oldPrice": "9$",
        "newPrice": "6$",
        "save": "33%"
    },
    {
        "id": "lovepop9",
        "image": "https://www.lovepop.com/cdn/shop/files/CP5745_MidnightFloralsBouquet_Detail.jpg?v=1721098533&width=360",
        "brand": "Lovepop",
        "description": "Midnight Florals Bouquet Card",
        "oldPrice": "8$",
        "newPrice": "5$",
        "save": "37%"
    },
    {
        "id": "lovepop10",
        "image": "https://www.lovepop.com/cdn/shop/files/LP5673_OhSpritz_BirthdayPop-UpCard_Detail.jpg?v=1717552169&width=360",
        "brand": "Lovepop",
        "description": "Oh Spritz Birthday Pop-Up Card",
        "oldPrice": "7$",
        "newPrice": "4$",
        "save": "43%"
    },
    {
        "id": "lovepop11",
        "image": "https://www.lovepop.com/cdn/shop/files/LP5405_Disney_sWinniethePoohNewBabyPop-UpCard_Sentimental-1.jpg?v=1716955198&width=360",
        "brand": "Lovepop",
        "description": "Disney's Winnie the Pooh New Baby Card",
        "oldPrice": "8$",
        "newPrice": "5$",
        "save": "37%"
    },
    {
        "id": "lovepop12",
        "image": "https://www.lovepop.com/cdn/shop/files/PA5263_MarvelDeadpoolBirthdayNestingCard_GIF.gif?v=1710570912&width=360",
        "brand": "Lovepop",
        "description": "Marvel Deadpool Birthday Nesting Card",
        "oldPrice": "9$",
        "newPrice": "6$",
        "save": "33%"
    },
    {
        "id": "lovepop13",
        "image": "https://www.lovepop.com/cdn/shop/files/LP5445_DisneyandPixarCarsLightningMcQueenKachow_BirthdayPop-UpCard_Detail.jpg?v=1713759875&width=360",
        "brand": "Lovepop",
        "description": "Disney and Pixar Cars Lightning McQueen Birthday Card",
        "oldPrice": "10$",
        "newPrice": "7$",
        "save": "30%"
    },
    {
        "id": "lovepop14",
        "image": "https://www.lovepop.com/cdn/shop/files/LP5561_DisneyandPixar_sWALL_EOutOfThisWorldBirthdayPop-UpCard_Detail.jpg?v=1717552036&width=360",
        "brand": "Lovepop",
        "description": "Disney and Pixar's WALL-E Out of This World Birthday Card",
        "oldPrice": "9$",
        "newPrice": "6$",
        "save": "33%"
    },
    {
        "id": "lovepop15",
        "image": "https://www.lovepop.com/cdn/shop/files/PA5168_BlankBoxSet_CoverOverview_coloredbg_1.jpg?v=1712890846&width=360",
        "brand": "Lovepop",
        "description": "Blank Box Set for Custom Cards",
        "oldPrice": "15$",
        "newPrice": "12$",
        "save": "20%"
    },
    {
        "id": "lovepop16",
        "image": "https://www.lovepop.com/cdn/shop/files/LP5743_BewareHalloweenSpiderPop-UpCard_Sentimental-1.jpg?v=1720402255&width=360",
        "brand": "Lovepop",
        "description": "Beware Halloween Spider Pop-Up Card",
        "oldPrice": "7$",
        "newPrice": "4$",
        "save": "43%"
    },
    {
        "id": "lovepop17",
        "image": "https://www.lovepop.com/cdn/shop/files/LP5500_HappyBirthdaytoYou_ConfettiCakePop-UpCard_Detail.jpg?v=1714612646&width=360",
        "brand": "Lovepop",
        "description": "Happy Birthday to You Confetti Cake Pop-Up Card",
        "oldPrice": "8$",
        "newPrice": "5$",
        "save": "37%"
    },
    {
        "id": "lovepop18",
        "image": "https://www.lovepop.com/cdn/shop/files/PA5474_bday_box_set_CoverOverview_coloredbg_2.jpg?v=1713576243&width=360",
        "brand": "Lovepop",
        "description": "Birthday Box Set for Celebration Cards",
        "oldPrice": "25$",
        "newPrice": "20$",
        "save": "20%"
    },
    {
        "id": "lovepop19",
        "image": "https://www.lovepop.com/cdn/shop/files/LP5404_Disney_sStitchCowabungaBirthdayPop-UpCard_Sentimental-1.jpg?v=1713836336&width=360",
        "brand": "Lovepop",
        "description": "Disney Stitch Cowabunga Birthday Card",
        "oldPrice": "7$",
        "newPrice": "4$",
        "save": "43%"
    },
    {
        "id": "lovepop20",
        "image": "https://www.lovepop.com/cdn/shop/files/VB5723.jpg?v=1715658619&width=360",
        "brand": "Lovepop",
        "description": "3D Pop-Up Flower Bouquet",
        "oldPrice": "8$",
        "newPrice": "5$",
        "save": "37%"
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