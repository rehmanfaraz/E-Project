(() => {

    const products = [ 
        {
            "id": "mugpage1",
            "image": "https://img.lazcdn.com/3rd/q/aHR0cHM6Ly9way1saXZlLTIxLnNsYXRpYy5uZXQva2YvUzI1N2NmMzJhMjM2ZTQ3ZGNhNTE2MzFhOTI4MDJlNjI0MC5qcGc=_200x200q80.png_.webp",
            "brand": "Mug Co.",
            "description": "Inspirational Quote Mug",
            "oldPrice": "12$",
            "newPrice": "8$",
            "save": "33%"
        },
        {
            "id": "mugpage2",
            "image": "https://img.lazcdn.com/3rd/q/aHR0cHM6Ly9zdGF0aWMtMDEuZGFyYXoucGsvcC81MGZlZjE4YmM2NmQyZjlhNmIzMzQ4MGVmYzA1NmExMC5qcGc=_200x200q80.png_.webp",
            "brand": "Mug Co.",
            "description": "Funny Coffee Mug",
            "oldPrice": "10$",
            "newPrice": "7$",
            "save": "30%"
        },
        {
            "id": "mugpage3",
            "image": "https://img.lazcdn.com/3rd/q/aHR0cHM6Ly9zdGF0aWMtMDEuZGFyYXoucGsvcC85MTM5NTJmYzQ4YjdlMTlmNTUzZGI3MWQ4MjYxM2IzNi5qcGc=_200x200q80.png_.webp",
            "brand": "Mug Co.",
            "description": "Cute Animal Mug",
            "oldPrice": "15$",
            "newPrice": "10$",
            "save": "33%"
        },
        {
            "id": "mugpage4",
            "image": "https://img.lazcdn.com/3rd/q/aHR0cHM6Ly9way1saXZlLTIxLnNsYXRpYy5uZXQva2YvUzhlYWFlMTlmNTgzNDQyNTE5YzhkNmY5NjljOWQ3MWY5aC5qcGc=_200x200q80.png_.webp",
            "brand": "Mug Co.",
            "description": "Personalized Name Mug",
            "oldPrice": "18$",
            "newPrice": "12$",
            "save": "33%"
        },
        {
            "id": "mugpage5",
            "image": "https://img.lazcdn.com/3rd/q/aHR0cHM6Ly9zdGF0aWMtMDEuZGFyYXoucGsvcC8yNmNhNDhiNDgzMzRiZmNkYWEzMGExODgyOTBjZmI1YS5qcGc=_200x200q80.png_.webp",
            "brand": "Mug Co.",
            "description": "Floral Design Mug",
            "oldPrice": "14$",
            "newPrice": "9$",
            "save": "36%"
        },
        {
            "id": "mugpage6",
            "image": "https://img.lazcdn.com/3rd/q/aHR0cHM6Ly9zdGF0aWMtMDEuZGFyYXoucGsvcC9mZmMzMGY0ZmJhMDkwZTA3YTc3NWRkYzUzY2I2NzJhYS5qcGc=_200x200q80.png_.webp",
            "brand": "Mug Co.",
            "description": "Creative Art Mug",
            "oldPrice": "16$",
            "newPrice": "11$",
            "save": "31%"
        },
        {
            "id": "mugpage7",
            "image": "https://img.lazcdn.com/3rd/q/aHR0cHM6Ly9zdGF0aWMtMDEuZGFyYXoucGsvcC82YTIzNDc0MWMwZTIyZmZiNWU5Y2Q1MzMxODgyOTFmNi5qcGc=_200x200q80.png_.webp",
            "brand": "Mug Co.",
            "description": "Geeky Design Mug",
            "oldPrice": "20$",
            "newPrice": "15$",
            "save": "25%"
        },
        {
            "id": "mugpage8",
            "image": "https://img.lazcdn.com/3rd/q/aHR0cHM6Ly9zdGF0aWMtMDEuZGFyYXoucGsvcC9iZGNmYmM1Yjk4MDcyNTNlZjYxOGFhZmM3ZTc3YTkyMC5qcGc=_200x200q80.png_.webp",
            "brand": "Mug Co.",
            "description": "Coffee Lover Mug",
            "oldPrice": "11$",
            "newPrice": "7$",
            "save": "36%"
        },
        {
            "id": "mugpage9",
            "image": "https://img.lazcdn.com/3rd/q/aHR0cHM6Ly9zdGF0aWMtMDEuZGFyYXoucGsvcC82NjZhMTk1OTA3N2RmMzI1ZTc2NjJkMGI3NGU5MjgyMS5qcGc=_200x200q80.png_.webp",
            "brand": "Mug Co.",
            "description": "Nature Lover Mug",
            "oldPrice": "13$",
            "newPrice": "9$",
            "save": "31%"
        },
        {
            "id": "mugpage10",
            "image": "https://img.lazcdn.com/3rd/q/aHR0cHM6Ly9zdGF0aWMtMDEuZGFyYXoucGsvcC9jYzAzZDhlOTg3NzU1MGRkNTUyZTZlN2JhYWVjZjE4Zi5qcGc=_200x200q80.png_.webp",
            "brand": "Mug Co.",
            "description": "Classic Design Mug",
            "oldPrice": "15$",
            "newPrice": "10$",
            "save": "33%"
        },
        {
            "id": "mugpage11",
            "image": "https://img.lazcdn.com/3rd/q/aHR0cHM6Ly9zdGF0aWMtMDEuZGFyYXoucGsvcC9lMzhiYjllOTM0NWU4MmIxMjkyMzY2NGQxMTIwNWY4MC5qcGc=_200x200q80.png_.webp",
            "brand": "Mug Co.",
            "description": "Cute Cat Mug",
            "oldPrice": "14$",
            "newPrice": "9$",
            "save": "36%"
        }, 
        {
            "id": "mugpage12",
            "image": "https://img.lazcdn.com/3rd/q/aHR0cHM6Ly9zdGF0aWMtMDEuZGFyYXoucGsvcC9nM2U2MDFmYTM3NzM0YjM3NGY2YTI3NTc0MTg1ZTI0ZC5qcGc=_200x200q80.png_.webp",
            "brand": "Mug Co.",
            "description": "Retro Style Mug",
            "oldPrice": "17$",
            "newPrice": "12$",
            "save": "29%"
        },
        {
            "id": "mugpage13",
            "image": "https://img.lazcdn.com/3rd/q/aHR0cHM6Ly9zdGF0aWMtMDEuZGFyYXoucGsvcC9kMDc4ZmI3YjZlYmI3MjRiOWQ2ZTRmOTZmNzJlZTAzNi5qcGc=_200x200q80.png_.webp",
            "brand": "Mug Co.",
            "description": "Travel Mug",
            "oldPrice": "20$",
            "newPrice": "15$",
            "save": "25%"
        },
        {
            "id": "mugpage14",
            "image": "https://img.lazcdn.com/3rd/q/aHR0cHM6Ly9zdGF0aWMtMDEuZGFyYXoucGsvcC8xYjQ3MzFkYzY1ZjczZmRmY2JkNGFhZDI1NTNmNzRlOC5qcGc=_200x200q80.png_.webp",
            "brand": "Mug Co.",
            "description": "Personalized Couple Mug",
            "oldPrice": "22$",
            "newPrice": "18$",
            "save": "18%"
        },
        {
            "id": "mugpage15",
            "image": "https://img.lazcdn.com/3rd/q/aHR0cHM6Ly9zdGF0aWMtMDEuZGFyYXoucGsvcC81ZmVjYTQzNTY3MDE2ZjljMmU2MTBlOGJhYjQ0YTVmYy5qcGc=_200x200q80.png_.webp",
            "brand": "Mug Co.",
            "description": "Elegant Black Mug",
            "oldPrice": "19$",
            "newPrice": "14$",
            "save": "26%"
        },
        {
            "id": "mugpage16",
            "image": "https://img.lazcdn.com/3rd/q/aHR0cHM6Ly9zdGF0aWMtMDEuZGFyYXoucGsvcC84NGY1NjEzNjc5MWFlZjk0NDhhZTIzMjg1ZGI2ZDE2MC5qcGc=_200x200q80.png_.webp",
            "brand": "Mug Co.",
            "description": "Customized Photo Mug",
            "oldPrice": "15$",
            "newPrice": "10$",
            "save": "33%"
        },
        {
            "id": "mugpage17",
            "image": "https://img.lazcdn.com/3rd/q/aHR0cHM6Ly9zdGF0aWMtMDEuZGFyYXoucGsvcC9hOGE4MzM4ZGEwM2Y1MjJmMWIxZTdiZmQxNzc4M2NlZS5qcGc=_200x200q80.png_.webp",
            "brand": "Mug Co.",
            "description": "Funny Animal Mug",
            "oldPrice": "11$",
            "newPrice": "8$",
            "save": "27%"
        },
        {
            "id": "mugpage18",
            "image": "https://img.lazcdn.com/3rd/q/aHR0cHM6Ly9zdGF0aWMtMDEuZGFyYXoucGsvcC84ZmQzMDJkYjJiYWI0MTViZGRjNzMwMTMzZDAyMzJkYi5qcGc=_200x200q80.png_.webp",
            "brand": "Mug Co.",
            "description": "Coffee Shop Mug",
            "oldPrice": "12$",
            "newPrice": "9$",
            "save": "25%"
        },
        {
            "id": "mugpage19",
            "image": "https://img.lazcdn.com/3rd/q/aHR0cHM6Ly9zdGF0aWMtMDEuZGFyYXoucGsvcC9hZjZjNTZhYzM1Mzg5YmRiMmE1NzFkMjhlZTY0NzA0My5qcGc=_200x200q80.png_.webp",
            "brand": "Mug Co.",
            "description": "Charming Ceramic Mug",
            "oldPrice": "16$",
            "newPrice": "11$",
            "save": "31%"
        },
        {
            "id": "mugpage20",
            "image": "https://img.lazcdn.com/3rd/q/aHR0cHM6Ly9zdGF0aWMtMDEuZGFyYXoucGsvcC8wMzBjMTI1YmJjYjEyYjEzMmRiMjMxNzVmZTAwYjJhZS5qcGc=_200x200q80.png_.webp",
            "brand": "Mug Co.",
            "description": "Classic White Mug",
            "oldPrice": "14$",
            "newPrice": "10$",
            "save": "29%"
        }


    ] ; 
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