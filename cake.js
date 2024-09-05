
(() => {

    const products =[
        {
            "id": "cake1",
            "image": "https://cdn-efojk.nitrocdn.com/fcveFyakYTVoQrsglDBYSUAYzmAyazyN/assets/images/optimized/rev-9a9e75c/www.faridabadcake.com/wp-content/uploads/2022/06/tangy-pineapple-cake-376x376.jpg",
            "brand": "pineapple Cake",
            "description": "A moist cake topped with caramelized pineapple rings and maraschino cherries",
            "oldPrice": "50$",
            "newPrice": "20$",
            "save": "Save 60%"
        },
        {
            "id": "cake2",
            "image": "https://cakemehometonight.com/wp-content/uploads/2023/02/24.jpg",
            "brand": "Red Velvet Cake",
            "description": "A rich and moist cake with a hint of cocoa, layered with tangy cream cheese frosting.",
            "oldPrice": "60$",
            "newPrice": "35$",
            "save": "Save 42%"
        },
        {
            "id": "cake3",
            "image": "https://w4s8p5t8.rocketcdn.me/wp-content/uploads/2022/04/vegan-black-forest-cake.jpg",
            "brand": "Black Forest Cake",
            "description": "A decadent chocolate cake filled with cherries and whipped cream, topped with chocolate shavings.",
            "oldPrice": "80$",
            "newPrice": "50$",
            "save": "Save 38%"
        },
        {
            "id": "cake4",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8O72WT7PSB0tROnB5gjuvAEfGUeT9ONTWag&s",
            "brand": "Lemon Drizzle Cake",
            "description": "A light and zesty cake soaked with a tangy lemon syrup, perfect for citrus lovers.",
            "oldPrice": "70$",
            "newPrice": "50$",
            "save": "Save 29%"
        },
        {
            "id": "cake5",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpJDCplYbHyptVmP34cpcbv2s4v1iwU5joFw&s",
            "brand": "Cheesecake",
            "description": "A creamy and smooth cake made with cream cheese, often with a graham cracker crust.",
            "oldPrice": "70$",
            "newPrice": "30$",
            "save": "Save 57%"
        },
        {
            "id": "cake6",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW39BRTdCkykCOVKg02s3X6cW5H4z3uknWCg&s",
            "brand": "Victoria Sponge Cake",
            "description": "A classic British cake with layers of light sponge, filled with jam and whipped cream",
            "oldPrice": "100$",
            "newPrice": "50$",
            "save": "Save 50%"
        },
        {
            "id": "cake7",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCGLJ6kGMO4q1Vk2limHZWIlNBboonnXCu3Q&s",
            "brand": "Chocolate Lava Cake",
            "description": "A rich chocolate cake with a molten chocolate center that oozes out when cut.",
            "oldPrice": "120$",
            "newPrice": "50$",
            "save": "Save 58%"
        },
        {
            "id": "cake8",
            "image": "https://i.ytimg.com/vi/gIpKJqpzTXY/maxresdefault.jpg",
            "brand": "Pineapple Upside-Down Cake",
            "description": "A moist cake topped with caramelized pineapple rings and maraschino cherries",
            "oldPrice": "50$",
            "newPrice": "20$",
            "save": "Save 60%"
        },
        {
            "id": "cake9",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRor08RXZsWkPKSaZVT6AapA0uCZJw_p8qwZg&s",
            "brand": "Coffee Walnut Cake",
            "description": "A coffee-flavored cake studded with crunchy walnuts and topped with a coffee-infused frosting.",
            "oldPrice": "50$",
            "newPrice": "30$",
            "save": "Save 40%"
        },
        {
            "id": "cake10",
            "image": "https://images.ctfassets.net/uw7yiu2kuigc/MIOmnrKHsqn7mCmGW3t1x/fa1ac27b6966146bb14d1db8455b46fb/Opera-Cake-Lead.jpg",
            "brand": "Opera Cake",
            "description": "A French layered cake made with almond sponge, coffee buttercream, and chocolate ganache.",
            "oldPrice": "40$",
            "newPrice": "20$",
            "save": "Save 50%"
        },
        {
            "id": "cake11",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdjyGMS0oonB0h4bqgeGZ3c2mFQA6mf-3H-Q&s",
            "brand": "Banoffee Cake",
            "description": "A deliciously sweet cake with layers of banana, toffee, and whipped cream.",
            "oldPrice": "60$",
            "newPrice": "20$",
            "save": "Save 67%"
        },
        {
            "id": "cake12",
            "image": "https://handletheheat.com/wp-content/uploads/2015/03/Best-Birthday-Cake-with-milk-chocolate-buttercream-SQUARE.jpg",
            "brand": "Pink & White Chocolate Cake",
            "description": "A deliciously sweet cake with layers of chocolate and whipped cream.",
            "oldPrice": "60$",
            "newPrice": "50$",
            "save": "Save 17%"
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