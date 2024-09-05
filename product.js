(() => {
    const products = [
        {
            "id": 1,
            "image": "https://www.mygiftstop.com/cdn/shop/files/luminox-3051-bo-men-s-navy-seal-colormark-dive-watch-rugged-blackout-swiss-made-timepiece-my-gift-stop-3_600x.jpg?v=1716807510",
            "brand": "LUMINOX",
            "description": "Luminox 3051.BO Men's Navy SEAL Colormark Dive Watch",
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
            "id" : 4 ,
            "image": "https://www.mygiftstop.com/cdn/shop/products/swarovski-women-s-bangle-swarovski-symbolic-blue-and-white-crystals-or-5171991-my-gift-stop-3_600x.jpg?v=1716713912",
            "brand": "Swarovski",
            "description": "Swarovski Women's Bangle - Swarovski Symbolic Blue and White Crystals | 5171991",
            "oldPrice": "$$125.00",
            "newPrice": "$76.60",
            "save": "SAVE 39%"
        },
        {
            "id" : 5 ,
            "image": "https://www.mygiftstop.com/cdn/shop/products/swarovski-women-s-pendant-with-chain-eternal-flower-crystals-or-5512662-my-gift-stop-4_600x.jpg?v=1716745761",
            "brand": "Swarovski",
            "description": "Swarovski Women's Bracelet - Melt Your Heart Yellow Gold Plated",
            "oldPrice": "$129.00",
            "newPrice": "$94.94",
            "save": "SAVE 26%"
        },
        {
            "id" : 6 ,
            "image": "https://www.mygiftstop.com/cdn/shop/products/swarovski-women-s-bracelet-melt-your-heart-yellow-gold-plated-or-5446015-my-gift-stop-4_600x.jpg?v=1716772444",
            "brand": "Swarovski",
            "description": "Swarovski Women's Bracelet - Melt Your Heart Yellow Silver Plated",
            "oldPrice": "$110.00",
            "newPrice": "$74.84",
            "save": "SAVE 32%"
        },
        {
            "id" : 7 ,
            "image": "https://www.mygiftstop.com/cdn/shop/products/sterling-silver-anchor-by-the-yard-bracelet-my-gift-stop_600x.jpg?v=1716771462",
            "brand": "Swarovski",
            "description": "Swarovski Women's Bracelet - Melt Your Heart Gold Plated",
            "oldPrice": "$99.00",
            "newPrice": "$39.94",
            "save": "SAVE 60%"
        },
        {
            "id" : 8 ,
            "image": "https://theflowerstudio.pk/wp-content/uploads/2017/06/anniversary-3.webp",
            "brand": "Greeting Card",
            "description": "Add a FREE Anniversary Greeting Card to your order.",
            "oldPrice": "",
            "newPrice": "Free",
            "save": ""
            
        },
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
          
        },
        {
          "id" : "men1" ,
          "image": "https://www.mygiftstop.com/cdn/shop/products/casio-ga100-1a1-men-s-g-shock-black-resin-strap-watch-my-gift-stop-1_600x.jpg?v=1716804909",
          "brand": "Casio",
          "description": "Casio GA100-1A1 Men's G-Shock Black resin Strap Watch",
          "oldPrice": "$225.0",
          "newPrice": "$200.0",
          "save": "SAVE 12%" ,
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
      }, 
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
    },
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
  },
  {
    "id": "ran1",
    "image": "https://cdn-efojk.nitrocdn.com/fcveFyakYTVoQrsglDBYSUAYzmAyazyN/assets/images/optimized/rev-9a9e75c/www.faridabadcake.com/wp-content/uploads/2022/06/tangy-pineapple-cake-376x376.jpg",
    "brand": "Bulova Men",
    "description": "Bulova Men's Marine Star Series C Two-Tone Rose Gold Stainless Steel",
    "oldPrice": "500$",
    "newPrice": "200$",
    "save": "60%"
},
{
    "id": "bra1",
    "image": "https://www.waseemjewellers.com/cdn/shop/files/0116_463b403b-5c24-480d-ad5f-b63374945c5a.png?v=1717006817&width=1946",
    "brand": "Gold Bracelet",
    "description": "Accent your look with our Gold Bracelets—timeless pieces blending elegance and modern flair effortlessly.",
    "oldPrice": "1000$",
    "newPrice": "900$",
    "save": "10%"
},
{
    "id": "mug1",
    "image": "https://img.lazcdn.com/3rd/q/aHR0cHM6Ly9zdGF0aWMtMDEuZGFyYXoucGsvcC9hNDNlMmM4YmQ5MmFlYWFmYjg3NDQ2MWIxMGJlZmI4YS5wbmc=_200x200q80.png_.webp",
    "brand": "MUG",
    "description": "Best mom ever - Best Dad ever - Pack of 2 - Customize Mug",
    "oldPrice": "100$",
    "newPrice": "50$",
    "save": "50%"
},
{
    "id": "ran2",
    "image": "https://m.media-amazon.com/images/I/81HPqLqRQxL._AC_SX679_.jpg",
    "brand": "Bulova Men",
    "description": "Bulova Men's Marine Star 'Series A' Automatic Stainless Steel Case with Blue Textured Silicone Strap",
    "oldPrice": "300$",
    "newPrice": "100$",
    "save": "66.67%"
},
{
    "id": "bra2",
    "image": "https://www.waseemjewellers.com/cdn/shop/files/0113_9945e98b-7fed-4566-9a3c-bcc76bbcab48.png?v=1717006764&width=1946",
    "brand": "Gold Bracelet",
    "description": "Accent your look with our Gold Bracelets—timeless pieces blending elegance and modern flair effortlessly.",
    "oldPrice": "1000$",
    "newPrice": "900$",
    "save": "10%"
},
{
    "id": "Mug2",
    "image": "https://img.lazcdn.com/3rd/q/aHR0cHM6Ly9zdGF0aWMtMDEuZGFyYXoucGsvcC80MjYwOWIxZTY3OTY5MTkyYTE3ZmMxODkwNTA1ZmNhYS5qcGc=_200x200q80.png_.webp",
    "brand": "MUG",
    "description": "Fashion Coffee Mugs with glass Lid Transparent Tea Cups ( 500 ML) Cute Coffee Bar Accessories",
    "oldPrice": "100$",
    "newPrice": "50$",
    "save": "50%"
},
{
    "id": "ran3",
    "image": "https://m.media-amazon.com/images/I/51+qt39KzZL._AC_SY679_.jpg",
    "brand": "Bulova Men",
    "description": "Bulova Men's Classic Aerojet 3-Hand Automatic Leather Strap Watch",
    "oldPrice": "300$",
    "newPrice": "200$",
    "save": "33.33%"
},
{
    "id": "bra3",
    "image": "https://www.waseemjewellers.com/cdn/shop/files/0160.png?v=1716320283&width=1946",
    "brand": "Gold Bracelet",
    "description": "Accent your look with our Gold Bracelets—timeless pieces blending elegance and modern flair effortlessly.",
    "oldPrice": "1000$",
    "newPrice": "900$",
    "save": "10%"
},
{
    "id": "Mug3",
    "image": "https://img.lazcdn.com/3rd/q/aHR0cHM6Ly9zdGF0aWMtMDEuZGFyYXoucGsvcC85MTM5NTJmYzQ4YjdlMTlmNTUzZGI3MWQ4MjYxM2IzNi5qcGc=_200x200q80.png_.webp",
    "brand": "MUG",
    "description": "Fashion Coffee Mugs with glass Lid Transparent Tea Cups ( 500 ML) Cute Coffee Bar Accessories",
    "oldPrice": "100$",
    "newPrice": "50$",
    "save": "50%"
},
{
    "id": "ran4",
    "image": "https://m.media-amazon.com/images/I/81pviDhEIIL._AC_SX679_.jpg",
    "brand": "Citizen Men",
    "description": "Citizen Men's Eco-Drive Brycen Chronograph Stainless Steel Watch",
    "oldPrice": "500$",
    "newPrice": "200$",
    "save": "60%"
},
{
    "id": "bra4",
    "image": "https://www.waseemjewellers.com/cdn/shop/files/0159.png?v=1716320243&width=823",
    "brand": "Gold Bracelet",
    "description": "Accent your look with our Gold Bracelets—timeless pieces blending elegance and modern flair effortlessly.",
    "oldPrice": "1000$",
    "newPrice": "900$",
    "save": "10%"
},
{
    "id": "Mug4",
    "image": "https://img.lazcdn.com/3rd/q/aHR0cHM6Ly9zdGF0aWMtMDEuZGFyYXoucGsvcC8zMDNmMDg1MjgwMDc0NWM1MjgyYmIxYjliZDI2NDc1MS5qcGc=_200x200q80.png_.webp",
    "brand": "MUG",
    "description": "Fashion Coffee Mugs with glass Lid Transparent Tea Cups ( 500 ML) Cute Coffee Bar Accessories",
    "oldPrice": "100$",
    "newPrice": "50$",
    "save": "50%"
},
{
    "id": "ran5",
    "image": "https://m.media-amazon.com/images/I/71cdpwev8GL._AC_SY500_.jpg",
    "brand": "Citizen Men",
    "description": "Citizen Sport Luxury Blue Dial Stainless Steel Bracelet Watch 43mm ",
    "oldPrice": "500$",
    "newPrice": "200$",
    "save": "60%"
},
{
    "id": "ran6",
    "image": "https://m.media-amazon.com/images/I/81YKCVsTfsL._AC_SX679_.jpg",
    "brand": "Citizen Men",
    "description": "Citizen Men's Eco-Drive Weekender Brycen Chronograph Watch in Gold-tone Stainless Steel",
    "oldPrice": "500$",
    "newPrice": "200$",
    "save": "60%"
},
{
    "id": "bra5",
    "image": "https://www.waseemjewellers.com/cdn/shop/files/0116_463b403b-5c24-480d-ad5f-b63374945c5a.png?v=1717006817&width=1946",
    "brand": "Gold Bracelet",
    "description": "Accent your look with our Gold Bracelets—timeless pieces blending elegance and modern flair effortlessly.",
    "oldPrice": "1500$",
    "newPrice": "750$",
    "save": "50%"
},
{
    "id": "Mug5",
    "image": "https://img.lazcdn.com/3rd/q/aHR0cHM6Ly9zdGF0aWMtMDEuZGFyYXoucGsvcC81OGY1OTM3NjYzYTE0OWY0M2EyOWQ0Nzk1NmE1MTJkNy5qcGc=_200x200q80.png_.webp",
    "brand": "MUG",
    "description": "Fashion Coffee Mugs with glass Lid Transparent Tea Cups ( 500 ML) Cute Coffee Bar Accessories",
    "oldPrice": "100$",
    "newPrice": "50$",
    "save": "50%"
}, 
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
},
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
},
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

    const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');
const cart = [];

const product = products.find(p => p.id == productId);

if (product) {
    document.getElementById('product-image').src = product.image;
    document.getElementById('product-image').alt = product.brand;
    document.getElementById('product-brand').innerText = product.brand;
    document.getElementById('product-description').innerText = product.description;
    document.getElementById('product-old-price').innerText = product.oldPrice;
    document.getElementById('product-new-price').innerText = product.newPrice;
    document.getElementById('product-save').innerText = product.save;

    // Populate compare dropdown
    const compareSelect = document.getElementById('compare-select');
    products.forEach(p => {
        if (p.id !== product.id) {
            const option = document.createElement('option');
            option.value = p.id;
            option.innerText = p.description; 
            compareSelect.appendChild(option);
        }
    });
} else {
    document.querySelector('.product-page').innerHTML = '<p>Product not found</p>';
}

document.getElementById('add-to-cart').addEventListener('click', () => {
    if (product) {
        cart.push(product);
        updateCartDisplay();
        document.getElementById('cart-panel').classList.add('active');
    }
});

document.getElementById('compare-btn').addEventListener('click', () => {
    const secondProductId = document.getElementById('compare-select').value;
    if (secondProductId) {
        const compareUrl = `compare.html?id1=${product.id}&id2=${secondProductId}`;
        window.location.href = compareUrl; 
    } else {
        alert('Please select a product to compare.');
    }
});

function updateCartDisplay() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';
    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'product-item';
        itemElement.innerHTML = `
            <img src="${item.image}" alt="${item.brand}" class="product-image1">
            <div class="product-details">
                <div class="product-name">${item.brand}</div>
                <div class="product-price">${item.newPrice}</div>
            </div>
        `;
        cartItemsContainer.appendChild(itemElement);
    });
}

document.getElementById('purchase-btn').addEventListener('click', () => {
    cart.length = 0;
    updateCartDisplay();
    document.getElementById('cart-panel').classList.remove('active');
    document.getElementById('purchase-popup').classList.add('active');
});

document.getElementById('close-cart').addEventListener('click', () => {
    document.getElementById('cart-panel').classList.remove('active');
});

document.getElementById('find-more').addEventListener('click', () => {
    document.getElementById('purchase-popup').classList.remove('active');
});

document.getElementById('clear-cart').addEventListener('click', () => {
    cart.length = 0;
    updateCartDisplay();
});

})();
