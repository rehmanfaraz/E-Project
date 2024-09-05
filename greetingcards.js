(() => {

const products = [
    {
        "id": "card1",
        "image": "https://img.lazcdn.com/3rd/q/aHR0cHM6Ly9zdGF0aWMtMDEuZGFyYXoucGsvcC8yZTk1ODIyZWUyYTBhZTQ0OGJiNzEzZmM3NjI0ZDhjMy5wbmc=_200x200q80.png_.webp",
        "brand": "CardCraft",
        "description": "Handmade Birthday Card with Floral Design",
        "oldPrice": "$5.0",
        "newPrice": "$3.99",
        "save": "SAVE 20%"
    },
    {
        "id": "card2",
        "image": "https://img.lazcdn.com/3rd/q/aHR0cHM6Ly9way1saXZlLTIxLnNsYXRpYy5uZXQva2YvUzQzNjQ3YWZmZDFhMzRkOTc4ZDY2YzgwMjMyODI5MWUxZy5qcGc=_200x200q80.png_.webp",
        "brand": "WishfulPrints",
        "description": "Personalized Anniversary Card with Custom Text",
        "oldPrice": "$7.0",
        "newPrice": "$5.50",
        "save": "SAVE 21%"
    },
    {
        "id": "card3",
        "image": "https://img.lazcdn.com/3rd/q/aHR0cHM6Ly9way1saXZlLTIxLnNsYXRpYy5uZXQva2YvUzg0NTMxODNiNDYxZTQzYTM4Mzg5N2YxZWViZTY5N2RkZS5qcGc=_200x200q80.png_.webp",
        "brand": "JoyfulDesigns",
        "description": "Cute Baby Shower Card with Illustrated Animals",
        "oldPrice": "$6.0",
        "newPrice": "$4.75",
        "save": "SAVE 21%"
    },
    {
        "id": "card4",
        "image": "https://img.lazcdn.com/3rd/q/aHR0cHM6Ly9zdGF0aWMtMDEuZGFyYXoucGsvcC81YzdjOGQzMzk1NjRmODRmNzBiMzZlOTg4NDViN2Q0MC5qcGc=_200x200q80.png_.webp",
        "brand": "GreetingsGalore",
        "description": "Elegant Wedding Card with Gold Foil Accents",
        "oldPrice": "$8.0",
        "newPrice": "$6.50",
        "save": "SAVE 19%"
    },
    {
        "id": "card5",
        "image": "https://img.lazcdn.com/3rd/q/aHR0cHM6Ly9way1saXZlLTIxLnNsYXRpYy5uZXQva2YvUzNhNTU2OTFhZjI3OTQ4NjZhOWM4NWEyZWU1NzdkYTEyNS5qcGc=_200x200q80.png_.webp",
        "brand": "CharmingCards",
        "description": "Festive Holiday Card with Winter Scene",
        "oldPrice": "$5.0",
        "newPrice": "$3.99",
        "save": "SAVE 20%"
    },
    {
        "id": "card6",
        "image": "https://img.lazcdn.com/3rd/q/aHR0cHM6Ly9way1saXZlLTIxLnNsYXRpYy5uZXQva2YvUzBlZjhlYTM3NjgyZTQ3OWQ5ZDlmNjZhNGMzZWYwYzlkOC5qcGc=_200x200q80.png_.webp",
        "brand": "HeartfeltCreations",
        "description": "Handcrafted Sympathy Card with Peaceful Imagery",
        "oldPrice": "$6.0",
        "newPrice": "$4.50",
        "save": "SAVE 25%"
    },
    {
        "id": "card7",
        "image": "https://img.lazcdn.com/3rd/q/aHR0cHM6Ly9way1saXZlLTIxLnNsYXRpYy5uZXQva2YvUzk2MzE1ZmU1Y2Y0MjQ1N2RhZjQ2ZTI1MGVlMDQwMDk5Ty5qcGc=_200x200q80.png_.webp",
        "brand": "SentimentCards",
        "description": "Mamas Birthday cards Enriched with Love",
        "oldPrice": "$4.0",
        "newPrice": "$3.00",
        "save": "SAVE 25%"
    },
    {
        "id": "card8",
        "image": "https://img.lazcdn.com/3rd/q/aHR0cHM6Ly9zdGF0aWMtMDEuZGFyYXoucGsvcC9lNzUyMDkzMzZhY2FkMjU3ZDNjZTczYjdmODRhMjdiZi5wbmc=_200x200q80.png_.webp",
        "brand": "ArtfulGreetings",
        "description": "Modern Thank You Card with Abstract Art",
        "oldPrice": "$5.0",
        "newPrice": "$4.00",
        "save": "SAVE 20%"
    },
    {
        "id": "card9",
        "image": "https://img.lazcdn.com/3rd/q/aHR0cHM6Ly9way1saXZlLTIxLnNsYXRpYy5uZXQva2YvUzRkZjM5YWE4YWM1YzQ5YTFiMTk5YzE0MWE1NmIyZWEwQy5qcGc=_200x200q80.png_.webp",
        "brand": "ElegantExpressions",
        "description": "Minimalist Graduation Card with Simple Design",
        "oldPrice": "$6.0",
        "newPrice": "$4.80",
        "save": "SAVE 20%"
    },
    {
        "id": "card10",
        "image": "https://img.lazcdn.com/3rd/q/aHR0cHM6Ly9zdGF0aWMtMDEuZGFyYXoucGsvcC82YmIwYjg3YmMxZTg1YzgwYjM0ZTBhYTMzODVkMDVhMS5qcGc=_200x200q80.png_.webp",
        "brand": "UniqueWishes",
        "description": "Customizable Valentine's Day Card",
        "oldPrice": "$7.0",
        "newPrice": "$5.50",
        "save": "SAVE 21%"
    },
    {
        "id": "card11",
        "image": "https://img.lazcdn.com/3rd/q/aHR0cHM6Ly9way1saXZlLTIxLnNsYXRpYy5uZXQva2YvUzNjYThiNWE0OTgwYzQ1ZjU5Yjk3YTY5MzRkYzk2OWRiTC5qcGc=_200x200q80.png_.webp",
        "brand": "FestivePrints",
        "description": "Seasonal Card with Vibrant Autumn Leaves",
        "oldPrice": "$5.0",
        "newPrice": "$4.00",
        "save": "SAVE 20%"
    },
    {
        "id": "card12",
        "image": "https://img.lazcdn.com/3rd/q/aHR0cHM6Ly9zdGF0aWMtMDEuZGFyYXoucGsvcC81NjMzOTU4MmQzODZkZGVlMGRjMWI2Njc4MzMzMWE5Ny5qcGc=_200x200q80.png_.webp",
        "brand": "SparklingCards",
        "description": "New Year’s Card with Glitter Finish",
        "oldPrice": "$6.0",
        "newPrice": "$4.50",
        "save": "SAVE 25%"
    },
    {
        "id": "card13",
        "image": "https://img.lazcdn.com/3rd/q/aHR0cHM6Ly9zdGF0aWMtMDEuZGFyYXoucGsvcC9mOGI5NmU4NTEyMjk0NGRhODQwYmFmMmYwNjdjZDc4Yy5qcGc=_200x200q80.png_.webp",
        "brand": "CreativeCards",
        "description": "Cheerful Easter Card with Bunny Illustration",
        "oldPrice": "$5.0",
        "newPrice": "$3.75",
        "save": "SAVE 25%"
    },
    {
        "id": "card14",
        "image": "https://img.lazcdn.com/3rd/q/aHR0cHM6Ly9zdGF0aWMtMDEuZGFyYXoucGsvcC80MzM3ODA2OGQwNzkwZjI1ZTIzOTU0YjViZjM1NThjNi5qcGc=_200x200q80.png_.webp",
        "brand": "ArtisanGreetings",
        "description": "Classy Retirement Card with Elegant Typography",
        "oldPrice": "$8.0",
        "newPrice": "$6.00",
        "save": "SAVE 25%"
    },
    {
        "id": "card15",
        "image": "https://img.lazcdn.com/3rd/q/aHR0cHM6Ly9way1saXZlLTIxLnNsYXRpYy5uZXQva2YvUzZkYmZiODFiY2M2ZDQ3MTliNGY0YTExNzg4MzUwMTA5bi5qcGc=_200x200q80.png_.webp",
        "brand": "HeartfeltDesigns",
        "description": "Warm Get Well Soon Card with Nature Theme",
        "oldPrice": "$5.0",
        "newPrice": "$4.00",
        "save": "SAVE 20%"
    },
    {
        "id": "card16",
        "image": "https://img.lazcdn.com/3rd/q/aHR0cHM6Ly9zdGF0aWMtMDEuZGFyYXoucGsvcC8xZjI3ZjQ0YzZlYzJjMjA4YmI4NTFiZTA2NTg2OTNhZC5qcGc=_200x200q80.png_.webp",
        "brand": "CreativeWish",
        "description": "Simple Congratulations Card for Achievements",
        "oldPrice": "$4.0",
        "newPrice": "$3.00",
        "save": "SAVE 25%"
    },
    {
        "id": "card17",
        "image": "https://img.lazcdn.com/3rd/q/aHR0cHM6Ly9zdGF0aWMtMDEuZGFyYXoucGsvcC8zOWRjMmJmYWNmZDkyZmE2YzU2ZTRmODhmNmU5NzdkMS5qcGc=_200x200q80.png_.webp",
        "brand": "JoyfulCreations",
        "description": "Handmade Baby’s First Birthday Card",
        "oldPrice": "$7.0",
        "newPrice": "$5.25",
        "save": "SAVE 25%"
    },
    {
        "id": "card18",
        "image": "https://img.lazcdn.com/3rd/q/aHR0cHM6Ly9zdGF0aWMtMDEuZGFyYXoucGsvcC85MmMwYWNlMDcxNGJhOTY4YjM0M2U3YWNkMDIzNTliOC5qcGc=_200x200q80.png_.webp",
        "brand": "SentimentPrints",
        "description": "Charming Thank You Card with Watercolor Art",
        "oldPrice": "$6.0",
        "newPrice": "$4.50",
        "save": "SAVE 25%"
    },
    {
        "id": "card19",
        "image": "https://img.lazcdn.com/3rd/q/aHR0cHM6Ly9way1saXZlLTIxLnNsYXRpYy5uZXQva2YvU2NlMDQ0OWU3NzlmNjQ5NGU4MDg4NmQzYjBkMWFkMzkwRi5qcGc=_200x200q80.png_.webp",
        "brand": "EleganceCards",
        "description": "Sophisticated Christmas Card with Elegant Design",
        "oldPrice": "$7.0",
        "newPrice": "$5.50",
        "save": "SAVE 21%"
    },
    {
        "id": "card20",
        "image": "https://img.lazcdn.com/3rd/q/aHR0cHM6Ly9way1saXZlLTIxLnNsYXRpYy5uZXQva2YvU2RiZjljNjZiZWVmZjQ4YWVhN2FlYWNlOWUyYWUxMTI4cy5qcGc=_200x200q80.png_.webp",
        "brand": "WarmWishes",
        "description": "Sweet Mother’s Day Card with Hand-drawn Art",
        "oldPrice": "$6.0",
        "newPrice": "$4.75",
        "save": "SAVE 21%"
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