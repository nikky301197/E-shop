function setData(data) {
  data = JSON.stringify(data);
  localStorage.setItem("product_list", data);
}

function getData() {
  return [
    {
      id: 1,
      title: "iPhone 9",
      description: "An apple mobile which is nothing like apple",
      price: 549,
      discountPercentage: 12.96,
      rating: 4.69,
      stock: 94,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      images: [
        "https://i.dummyjson.com/data/products/1/1.jpg",
        "https://i.dummyjson.com/data/products/1/2.jpg",
        "https://i.dummyjson.com/data/products/1/3.jpg",
        "https://i.dummyjson.com/data/products/1/4.jpg",
        "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      ],
    },
    {
      id: 2,
      title: "iPhone X",
      description:
        "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
      price: 899,
      discountPercentage: 17.94,
      rating: 4.44,
      stock: 34,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
      images: [
        "https://i.dummyjson.com/data/products/2/1.jpg",
        "https://i.dummyjson.com/data/products/2/2.jpg",
        "https://i.dummyjson.com/data/products/2/3.jpg",
        "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
      ],
    },
    {
      id: 3,
      title: "Samsung Universe 9",
      description:
        "Samsung's new variant which goes beyond Galaxy to the Universe",
      price: 1249,
      discountPercentage: 15.46,
      rating: 4.09,
      stock: 36,
      brand: "Samsung",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
      images: ["https://i.dummyjson.com/data/products/3/1.jpg"],
    },
    {
      id: 4,
      title: "OPPOF19",
      description: "OPPO F19 is officially announced on April 2021.",
      price: 280,
      discountPercentage: 17.91,
      rating: 4.3,
      stock: 123,
      brand: "OPPO",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
      images: [
        "https://i.dummyjson.com/data/products/4/1.jpg",
        "https://i.dummyjson.com/data/products/4/2.jpg",
        "https://i.dummyjson.com/data/products/4/3.jpg",
        "https://i.dummyjson.com/data/products/4/4.jpg",
        "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
      ],
    },
    {
      id: 5,
      title: "Huawei P30",
      description:
        "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
      price: 499,
      discountPercentage: 10.58,
      rating: 4.09,
      stock: 32,
      brand: "Huawei",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
      images: [
        "https://i.dummyjson.com/data/products/5/1.jpg",
        "https://i.dummyjson.com/data/products/5/2.jpg",
        "https://i.dummyjson.com/data/products/5/3.jpg",
      ],
    },
    {
      id: 6,
      title: "MacBook Pro",
      description:
        "MacBook Pro 2021 with mini-LED display may launch between September, November",
      price: 1749,
      discountPercentage: 11.02,
      rating: 4.57,
      stock: 83,
      brand: "Apple",
      category: "laptops",
      thumbnail: "https://i.dummyjson.com/data/products/6/thumbnail.png",
      images: [
        "https://i.dummyjson.com/data/products/6/1.png",
        "https://i.dummyjson.com/data/products/6/2.jpg",
        "https://i.dummyjson.com/data/products/6/3.png",
        "https://i.dummyjson.com/data/products/6/4.jpg",
      ],
    },
    {
      id: 7,
      title: "Samsung Galaxy Book",
      description:
        "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
      price: 1499,
      discountPercentage: 4.15,
      rating: 4.25,
      stock: 50,
      brand: "Samsung",
      category: "laptops",
      thumbnail: "https://i.dummyjson.com/data/products/7/thumbnail.jpg",
      images: [
        "https://i.dummyjson.com/data/products/7/1.jpg",
        "https://i.dummyjson.com/data/products/7/2.jpg",
        "https://i.dummyjson.com/data/products/7/3.jpg",
        "https://i.dummyjson.com/data/products/7/thumbnail.jpg",
      ],
    },
    {
      id: 8,
      title: "Microsoft Surface Laptop 4",
      description:
        "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.",
      price: 1499,
      discountPercentage: 10.23,
      rating: 4.43,
      stock: 68,
      brand: "Microsoft Surface",
      category: "laptops",
      thumbnail: "https://i.dummyjson.com/data/products/8/thumbnail.jpg",
      images: [
        "https://i.dummyjson.com/data/products/8/1.jpg",
        "https://i.dummyjson.com/data/products/8/2.jpg",
        "https://i.dummyjson.com/data/products/8/3.jpg",
        "https://i.dummyjson.com/data/products/8/4.jpg",
        "https://i.dummyjson.com/data/products/8/thumbnail.jpg",
      ],
    },
    {
      id: 9,
      title: "Infinix INBOOK",
      description:
        "Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty",
      price: 1099,
      discountPercentage: 11.83,
      rating: 4.54,
      stock: 96,
      brand: "Infinix",
      category: "laptops",
      thumbnail: "https://i.dummyjson.com/data/products/9/thumbnail.jpg",
      images: [
        "https://i.dummyjson.com/data/products/9/1.jpg",
        "https://i.dummyjson.com/data/products/9/2.png",
        "https://i.dummyjson.com/data/products/9/3.png",
        "https://i.dummyjson.com/data/products/9/4.jpg",
        "https://i.dummyjson.com/data/products/9/thumbnail.jpg",
      ],
    },
    {
      id: 10,
      title: "HP Pavilion 15-DK1056WM",
      description:
        "HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10",
      price: 1099,
      discountPercentage: 6.18,
      rating: 4.43,
      stock: 89,
      brand: "HP Pavilion",
      category: "laptops",
      thumbnail: "https://i.dummyjson.com/data/products/10/thumbnail.jpeg",
      images: [
        "https://i.dummyjson.com/data/products/10/1.jpg",
        "https://i.dummyjson.com/data/products/10/2.jpg",
        "https://i.dummyjson.com/data/products/10/3.jpg",
        "https://i.dummyjson.com/data/products/10/thumbnail.jpeg",
      ],
    },
    {
      id: 11,
      title: "perfume Oil",
      description:
        "Mega Discount, Impression of Acqua Di Gio by GiorgioArmani concentrated attar perfume Oil",
      price: 13,
      discountPercentage: 8.4,
      rating: 4.26,
      stock: 65,
      brand: "Impression of Acqua Di Gio",
      category: "fragrances",
      thumbnail: "https://i.dummyjson.com/data/products/11/thumbnail.jpg",
      images: [
        "https://i.dummyjson.com/data/products/11/1.jpg",
        "https://i.dummyjson.com/data/products/11/2.jpg",
        "https://i.dummyjson.com/data/products/11/3.jpg",
        "https://i.dummyjson.com/data/products/11/thumbnail.jpg",
      ],
    },
    {
      id: 12,
      title: "Brown Perfume",
      description: "Royal_Mirage Sport Brown Perfume for Men & Women - 120ml",
      price: 40,
      discountPercentage: 15.66,
      rating: 4,
      stock: 52,
      brand: "Royal_Mirage",
      category: "fragrances",
      thumbnail: "https://i.dummyjson.com/data/products/12/thumbnail.jpg",
      images: [
        "https://i.dummyjson.com/data/products/12/1.jpg",
        "https://i.dummyjson.com/data/products/12/2.jpg",
        "https://i.dummyjson.com/data/products/12/3.png",
        "https://i.dummyjson.com/data/products/12/4.jpg",
        "https://i.dummyjson.com/data/products/12/thumbnail.jpg",
      ],
    },
    {
      id: 13,
      title: "Fog Scent Xpressio Perfume",
      description:
        "Product details of Best Fog Scent Xpressio Perfume 100ml For Men cool long lasting perfumes for Men",
      price: 13,
      discountPercentage: 8.14,
      rating: 4.59,
      stock: 61,
      brand: "Fog Scent Xpressio",
      category: "fragrances",
      thumbnail: "https://i.dummyjson.com/data/products/13/thumbnail.webp",
      images: [
        "https://i.dummyjson.com/data/products/13/1.jpg",
        "https://i.dummyjson.com/data/products/13/2.png",
        "https://i.dummyjson.com/data/products/13/3.jpg",
        "https://i.dummyjson.com/data/products/13/4.jpg",
        "https://i.dummyjson.com/data/products/13/thumbnail.webp",
      ],
    },
    {
      id: 14,
      title: "Non-Alcoholic Concentrated Perfume Oil",
      description:
        "Original Al Munakh® by Mahal Al Musk | Our Impression of Climate | 6ml Non-Alcoholic Concentrated Perfume Oil",
      price: 120,
      discountPercentage: 15.6,
      rating: 4.21,
      stock: 114,
      brand: "Al Munakh",
      category: "fragrances",
      thumbnail: "https://i.dummyjson.com/data/products/14/thumbnail.jpg",
      images: [
        "https://i.dummyjson.com/data/products/14/1.jpg",
        "https://i.dummyjson.com/data/products/14/2.jpg",
        "https://i.dummyjson.com/data/products/14/3.jpg",
        "https://i.dummyjson.com/data/products/14/thumbnail.jpg",
      ],
    },
    {
      id: 15,
      title: "Eau De Perfume Spray",
      description:
        "Genuine  Al-Rehab spray perfume from UAE/Saudi Arabia/Yemen High Quality",
      price: 30,
      discountPercentage: 10.99,
      rating: 4.7,
      stock: 105,
      brand: "Lord - Al-Rehab",
      category: "fragrances",
      thumbnail: "https://i.dummyjson.com/data/products/15/thumbnail.jpg",
      images: [
        "https://i.dummyjson.com/data/products/15/1.jpg",
        "https://i.dummyjson.com/data/products/15/2.jpg",
        "https://i.dummyjson.com/data/products/15/3.jpg",
        "https://i.dummyjson.com/data/products/15/4.jpg",
        "https://i.dummyjson.com/data/products/15/thumbnail.jpg",
      ],
    },
    {
      id: 16,
      title: "Hyaluronic Acid Serum",
      description:
        "L'OrÃ©al Paris introduces Hyaluron Expert Replumping Serum formulated with 1.5% Hyaluronic Acid",
      price: 19,
      discountPercentage: 13.31,
      rating: 4.83,
      stock: 110,
      brand: "L'Oreal Paris",
      category: "skincare",
      thumbnail: "https://i.dummyjson.com/data/products/16/thumbnail.jpg",
      images: [
        "https://i.dummyjson.com/data/products/16/1.png",
        "https://i.dummyjson.com/data/products/16/2.webp",
        "https://i.dummyjson.com/data/products/16/3.jpg",
        "https://i.dummyjson.com/data/products/16/4.jpg",
        "https://i.dummyjson.com/data/products/16/thumbnail.jpg",
      ],
    },
    {
      id: 17,
      title: "Tree Oil 30ml",
      description:
        "Tea tree oil contains a number of compounds, including terpinen-4-ol, that have been shown to kill certain bacteria,",
      price: 12,
      discountPercentage: 4.09,
      rating: 4.52,
      stock: 78,
      brand: "Hemani Tea",
      category: "skincare",
      thumbnail: "https://i.dummyjson.com/data/products/17/thumbnail.jpg",
      images: [
        "https://i.dummyjson.com/data/products/17/1.jpg",
        "https://i.dummyjson.com/data/products/17/2.jpg",
        "https://i.dummyjson.com/data/products/17/3.jpg",
        "https://i.dummyjson.com/data/products/17/thumbnail.jpg",
      ],
    },
    {
      id: 18,
      title: "Oil Free Moisturizer 100ml",
      description:
        "Dermive Oil Free Moisturizer with SPF 20 is specifically formulated with ceramides, hyaluronic acid & sunscreen.",
      price: 40,
      discountPercentage: 13.1,
      rating: 4.56,
      stock: 88,
      brand: "Dermive",
      category: "skincare",
      thumbnail: "https://i.dummyjson.com/data/products/18/thumbnail.jpg",
      images: [
        "https://i.dummyjson.com/data/products/18/1.jpg",
        "https://i.dummyjson.com/data/products/18/2.jpg",
        "https://i.dummyjson.com/data/products/18/3.jpg",
        "https://i.dummyjson.com/data/products/18/4.jpg",
        "https://i.dummyjson.com/data/products/18/thumbnail.jpg",
      ],
    },
    {
      id: 19,
      title: "Skin Beauty Serum.",
      description:
        "Product name: rorec collagen hyaluronic acid white face serum riceNet weight: 15 m",
      price: 46,
      discountPercentage: 10.68,
      rating: 4.42,
      stock: 54,
      brand: "ROREC White Rice",
      category: "skincare",
      thumbnail: "https://i.dummyjson.com/data/products/19/thumbnail.jpg",
      images: [
        "https://i.dummyjson.com/data/products/19/1.jpg",
        "https://i.dummyjson.com/data/products/19/2.jpg",
        "https://i.dummyjson.com/data/products/19/3.png",
        "https://i.dummyjson.com/data/products/19/thumbnail.jpg",
      ],
    },
    {
      id: 20,
      title: "Freckle Treatment Cream- 15gm",
      description:
        "Fair & Clear is Pakistan's only pure Freckle cream which helpsfade Freckles, Darkspots and pigments. Mercury level is 0%, so there are no side effects.",
      price: 70,
      discountPercentage: 16.99,
      rating: 4.06,
      stock: 140,
      brand: "Fair & Clear",
      category: "skincare",
      thumbnail: "https://i.dummyjson.com/data/products/20/thumbnail.jpg",
      images: [
        "https://i.dummyjson.com/data/products/20/1.jpg",
        "https://i.dummyjson.com/data/products/20/2.jpg",
        "https://i.dummyjson.com/data/products/20/3.jpg",
        "https://i.dummyjson.com/data/products/20/4.jpg",
        "https://i.dummyjson.com/data/products/20/thumbnail.jpg",
      ],
    },
    {
      id: 21,
      title: "- Daal Masoor 500 grams",
      description: "Fine quality Branded Product Keep in a cool and dry place",
      price: 20,
      discountPercentage: 4.81,
      rating: 4.44,
      stock: 133,
      brand: "Saaf & Khaas",
      category: "groceries",
      thumbnail: "https://i.dummyjson.com/data/products/21/thumbnail.png",
      images: [
        "https://i.dummyjson.com/data/products/21/1.png",
        "https://i.dummyjson.com/data/products/21/2.jpg",
        "https://i.dummyjson.com/data/products/21/3.jpg",
      ],
    },
    {
      id: 22,
      title: "Elbow Macaroni - 400 gm",
      description: "Product details of Bake Parlor Big Elbow Macaroni - 400 gm",
      price: 14,
      discountPercentage: 15.58,
      rating: 4.57,
      stock: 146,
      brand: "Bake Parlor Big",
      category: "groceries",
      thumbnail: "https://i.dummyjson.com/data/products/22/thumbnail.jpg",
      images: [
        "https://i.dummyjson.com/data/products/22/1.jpg",
        "https://i.dummyjson.com/data/products/22/2.jpg",
        "https://i.dummyjson.com/data/products/22/3.jpg",
      ],
    },
    {
      id: 23,
      title: "Orange Essence Food Flavou",
      description:
        "Specifications of Orange Essence Food Flavour For Cakes and Baking Food Item",
      price: 14,
      discountPercentage: 8.04,
      rating: 4.85,
      stock: 26,
      brand: "Baking Food Items",
      category: "groceries",
      thumbnail: "https://i.dummyjson.com/data/products/23/thumbnail.jpg",
      images: [
        "https://i.dummyjson.com/data/products/23/1.jpg",
        "https://i.dummyjson.com/data/products/23/2.jpg",
        "https://i.dummyjson.com/data/products/23/3.jpg",
        "https://i.dummyjson.com/data/products/23/4.jpg",
        "https://i.dummyjson.com/data/products/23/thumbnail.jpg",
      ],
    },
    {
      id: 24,
      title: "cereals muesli fruit nuts",
      description:
        "original fauji cereal muesli 250gm box pack original fauji cereals muesli fruit nuts flakes breakfast cereal break fast faujicereals cerels cerel foji fouji",
      price: 46,
      discountPercentage: 16.8,
      rating: 4.94,
      stock: 113,
      brand: "fauji",
      category: "groceries",
      thumbnail: "https://i.dummyjson.com/data/products/24/thumbnail.jpg",
      images: [
        "https://i.dummyjson.com/data/products/24/1.jpg",
        "https://i.dummyjson.com/data/products/24/2.jpg",
        "https://i.dummyjson.com/data/products/24/3.jpg",
        "https://i.dummyjson.com/data/products/24/4.jpg",
        "https://i.dummyjson.com/data/products/24/thumbnail.jpg",
      ],
    },
    {
      id: 25,
      title: "Gulab Powder 50 Gram",
      description:
        "Dry Rose Flower Powder Gulab Powder 50 Gram • Treats Wounds",
      price: 70,
      discountPercentage: 13.58,
      rating: 4.87,
      stock: 47,
      brand: "Dry Rose",
      category: "groceries",
      thumbnail: "https://i.dummyjson.com/data/products/25/thumbnail.jpg",
      images: [
        "https://i.dummyjson.com/data/products/25/1.png",
        "https://i.dummyjson.com/data/products/25/2.jpg",
        "https://i.dummyjson.com/data/products/25/3.png",
        "https://i.dummyjson.com/data/products/25/4.jpg",
        "https://i.dummyjson.com/data/products/25/thumbnail.jpg",
      ],
    },
    {
      id: 26,
      title: "Plant Hanger For Home",
      description:
        "Boho Decor Plant Hanger For Home Wall Decoration Macrame Wall Hanging Shelf",
      price: 41,
      discountPercentage: 17.86,
      rating: 4.08,
      stock: 131,
      brand: "Boho Decor",
      category: "home-decoration",
      thumbnail: "https://i.dummyjson.com/data/products/26/thumbnail.jpg",
      images: [
        "https://i.dummyjson.com/data/products/26/1.jpg",
        "https://i.dummyjson.com/data/products/26/2.jpg",
        "https://i.dummyjson.com/data/products/26/3.jpg",
        "https://i.dummyjson.com/data/products/26/4.jpg",
        "https://i.dummyjson.com/data/products/26/5.jpg",
        "https://i.dummyjson.com/data/products/26/thumbnail.jpg",
      ],
    },
    {
      id: 27,
      title: "Flying Wooden Bird",
      description:
        "Package Include 6 Birds with Adhesive Tape Shape: 3D Shaped Wooden Birds Material: Wooden MDF, Laminated 3.5mm",
      price: 51,
      discountPercentage: 15.58,
      rating: 4.41,
      stock: 17,
      brand: "Flying Wooden",
      category: "home-decoration",
      thumbnail: "https://i.dummyjson.com/data/products/27/thumbnail.webp",
      images: [
        "https://i.dummyjson.com/data/products/27/1.jpg",
        "https://i.dummyjson.com/data/products/27/2.jpg",
        "https://i.dummyjson.com/data/products/27/3.jpg",
        "https://i.dummyjson.com/data/products/27/4.jpg",
        "https://i.dummyjson.com/data/products/27/thumbnail.webp",
      ],
    },
    {
      id: 28,
      title: "3D Embellishment Art Lamp",
      description:
        "3D led lamp sticker Wall sticker 3d wall art light on/off button  cell operated (included)",
      price: 20,
      discountPercentage: 16.49,
      rating: 4.82,
      stock: 54,
      brand: "LED Lights",
      category: "home-decoration",
      thumbnail: "https://i.dummyjson.com/data/products/28/thumbnail.jpg",
      images: [
        "https://i.dummyjson.com/data/products/28/1.jpg",
        "https://i.dummyjson.com/data/products/28/2.jpg",
        "https://i.dummyjson.com/data/products/28/3.png",
        "https://i.dummyjson.com/data/products/28/4.jpg",
        "https://i.dummyjson.com/data/products/28/thumbnail.jpg",
      ],
    },
    {
      id: 29,
      title: "Handcraft Chinese style",
      description:
        "Handcraft Chinese style art luxury palace hotel villa mansion home decor ceramic vase with brass fruit plate",
      price: 60,
      discountPercentage: 15.34,
      rating: 4.44,
      stock: 7,
      brand: "luxury palace",
      category: "home-decoration",
      thumbnail: "https://i.dummyjson.com/data/products/29/thumbnail.webp",
      images: [
        "https://i.dummyjson.com/data/products/29/1.jpg",
        "https://i.dummyjson.com/data/products/29/2.jpg",
        "https://i.dummyjson.com/data/products/29/3.webp",
        "https://i.dummyjson.com/data/products/29/4.webp",
        "https://i.dummyjson.com/data/products/29/thumbnail.webp",
      ],
    },
    {
      id: 30,
      title: "Key Holder",
      description:
        "Attractive DesignMetallic materialFour key hooksReliable & DurablePremium Quality",
      price: 30,
      discountPercentage: 2.92,
      rating: 4.92,
      stock: 54,
      brand: "Golden",
      category: "home-decoration",
      thumbnail: "https://i.dummyjson.com/data/products/30/thumbnail.jpg",
      images: [
        "https://i.dummyjson.com/data/products/30/1.jpg",
        "https://i.dummyjson.com/data/products/30/2.jpg",
        "https://i.dummyjson.com/data/products/30/3.jpg",
        "https://i.dummyjson.com/data/products/30/thumbnail.jpg",
      ],
    },
  ];
}

function createHeader() {
  var main = document.querySelector("#main");
  var headerContainer = document.createElement("div");
  headerContainer.setAttribute("class", " headerContainer container-fluid  ");
  var headerRow = document.createElement("div");
  headerRow.setAttribute("style", "height : 70px");
  headerRow.setAttribute("class", "bg-dark row ");
  //  header logo starts from here
  var headerLogo = document.createElement("div");
  headerLogo.setAttribute("class", "col-md-3  ");
  headerRow.appendChild(headerLogo);

  var logoH1 = document.createElement("h1");
  logoH1.innerHTML = "<span class='text-warning'>E</span>-shop";
  logoH1.setAttribute("class", "text-white");
  logoH1.setAttribute("style", "cursor : pointer")
  logoH1.addEventListener("click", function()
  {
  var cartContainer = document.querySelector("#cart-container");
  cartContainer.innerHTML = "";
  createCart(JSON.parse(localStorage.getItem("product_list")));
  })

  headerLogo.appendChild(logoH1);
  // header logo code ends here

  // header search bar code starts from here
  var headerSearchBar = document.createElement("div");
  headerSearchBar.setAttribute(
    "class",
    "col-md-6   d-flex justify-content-center align-items-center "
  );
  var inputBar = document.createElement("input");
  inputBar.setAttribute("type", "text");
  inputBar.setAttribute("placeholder", "Search Product");
  inputBar.setAttribute("style", "height : 60% ; width : 60% ");

  headerSearchBar.appendChild(inputBar);
  headerRow.appendChild(headerSearchBar);
  // header search bar code ends here

  // header option code starts from here
  var headerOption = document.createElement("div");
  headerOption.setAttribute(
    "class",
    "col-md-3    d-flex justify-content-around align-items-center  "
  );
  if (!sessionStorage.getItem("isLoggedIn")) {
    var signUp = document.createElement("span");
    signUp.innerText = "Sign Up";
    signUp.setAttribute("class", "bg-warning , text-white p-2 ");
    signUp.setAttribute(
      "style",
      "font-weight: bold ; border-radius : 3px ; cursor:pointer "
    );
    signUp.addEventListener("click", function () {
      generateForm("Sign Up");
    });

    var signIn = document.createElement("span");
    signIn.innerHTML = "Sign In";
    signIn.setAttribute(
      "style",
      "font-weight: bold ; border-radius : 3px; cursor:pointer "
    );
    signIn.setAttribute("class", "bg-warning text-white p-2 ");
    signIn.addEventListener("click", function () {
      generateForm("Sign In");
    });

    headerOption.appendChild(signUp);
    headerOption.appendChild(signIn);
  } 
  else {
    var viewCart = document.createElement("span");
    viewCart.innerHTML = " View Cart";
    viewCart.setAttribute("class", "bg-warning , text-white p-2 ");
    viewCart.setAttribute(
      "style",
      "font-weight: bold ; border-radius : 3px; cursor:pointer "
    );

    var signOut = document.createElement("span");
    signOut.innerText = "Sign Out";
    signOut.setAttribute("class", "bg-warning , text-white p-2 ");
    signOut.setAttribute(
      "style",
      "font-weight: bold ; border-radius : 3px ; cursor:pointer "
    );

    signOut.addEventListener("click",function(){
      sessionStorage.removeItem("isLoggedIn");
      document.querySelector("#main").innerHTML = "";
      createHeader();
      createCart(JSON.parse(localStorage.getItem("product_list")));
   });
    
    headerOption.appendChild(viewCart);
    headerOption.appendChild(signOut);
    
    
  }
  headerRow.appendChild(headerOption);

  // header option code ends here

  headerContainer.appendChild(headerRow);
  main.appendChild(headerContainer);
}

function createCart(data) {
  var mainDiv = document.querySelector("#main");
  var divContainer = document.createElement("div");
  divContainer.setAttribute("class", "container   mb-5   ");
  divContainer.setAttribute("id", "cart-container");
  var rowDiv = document.createElement("div");
  rowDiv.setAttribute("class", "row   ");

  for (let product of data) {
    var cartContainer = document.createElement("div");
    cartContainer.setAttribute("class", "mt-5 col-md-4 ");
    cartContainer.setAttribute("style", "height : 400px");
    var cart = document.createElement("div");
    cart.setAttribute(
      "class",
      "  h-100 d-flex flex-column align-items-center "
    );
    var imgElement = document.createElement("img");
    imgElement.src = product.thumbnail;
    imgElement.setAttribute("style", "height : 250px; width: 100%");
    cart.appendChild(imgElement);
    var title = document.createElement("h6");
    title.setAttribute("class", "mt-1 text-center");
    title.innerText = product.title;
    cart.appendChild(title);

    var price = document.createElement("h7");
    price.setAttribute("class", "mt-1 text-success");
    price.innerText = "Rs. " + product.price;
    cart.appendChild(price);

    var viewMoreElement = document.createElement("a");
    viewMoreElement.setAttribute("class", "text-center mt-1");
    viewMoreElement.setAttribute("href", "#");
    viewMoreElement.setAttribute("style", "display:block;width:100%;");
    viewMoreElement.innerText = "View Description";
    viewMoreElement.addEventListener("click", function () {
      viewProductDescriptionComponent(product);
    });
    cart.appendChild(viewMoreElement);

    var addToCartElement = document.createElement("button");
    addToCartElement.setAttribute("class", "btn btn-warning mt-1");
    addToCartElement.setAttribute("style", "width:90%;color:white;");
    addToCartElement.innerText = "Add To Cart";
    addToCartElement.addEventListener("click", function()
    {
      saveProductInCart(product);     
    })
    cart.appendChild(addToCartElement);

    cartContainer.appendChild(cart);
    rowDiv.appendChild(cartContainer);
  }
  divContainer.appendChild(rowDiv);
  mainDiv.appendChild(divContainer);
}

function viewProductDescriptionComponent(product) {
  var cartContainer = document.querySelector("#cart-container");
  cartContainer.innerHTML = "";
  let rowDiv = document.createElement("div");
  rowDiv.setAttribute("class", "row  ");

  let colDiv1 = document.createElement("div");
  colDiv1.setAttribute("class", "col-md-6  ");
  let mainImgElement = document.createElement("img");
  mainImgElement.src = product.thumbnail;
  mainImgElement.setAttribute("style", "height:400px; width:100%;  ");
  colDiv1.appendChild(mainImgElement);

  let imageArray = document.createElement("div");
  // for (let image of product.images) 
  for (var  i = 0 ; i < 4 ; i ++)
  {
    let imgElement = document.createElement("img");
    imgElement.src =   product.images[i];
    imgElement.setAttribute("style", "height:100px; width:19%; margin-top:10px ; margin-left : 5px ; cursor : pointer");
    
    imgElement.addEventListener("click", function()
    {
      var temp = mainImgElement.src ;
      mainImgElement.src = imgElement.src;
      imgElement.src = temp ;
    })
    imageArray.appendChild(imgElement);
  }
  colDiv1.appendChild(imageArray);
  rowDiv.appendChild(colDiv1);

  let colDiv2 = document.createElement("div");
  colDiv2.setAttribute(
    "class",
    "col-md-4 offset-md-1  d-flex flex-column justify-content-start align-items-md-start"
  );

  let title = document.createElement("h1");
  title.setAttribute("class", "mt-2");
  title.innerHTML = product.title;
  colDiv2.appendChild(title);

  let description = document.createElement("p");
  description.innerHTML = "( " + product.description + " )";
  description.setAttribute("class", "");
  colDiv2.appendChild(description);

  let price = document.createElement("p");
  price.setAttribute("class", "text-warning ");
  price.innerHTML = "MRP  Rs. " + product.price;
  colDiv2.appendChild(price);


  let addToCart = document.createElement("button");
   addToCart.setAttribute("class","btn btn-warning");
   addToCart.setAttribute("style","width:90% ; font-size :17px");
   addToCart.innerText = "Add To Cart";
   addToCart.addEventListener("click", function()
   {
    saveProductInCart(product)
   });

   colDiv2.appendChild(addToCart);

  rowDiv.appendChild(colDiv2);

  cartContainer.appendChild(rowDiv);
}

function generateForm(buttontext) {
  var cartContainer = document.querySelector("#cart-container");
  cartContainer.innerHTML = "";
   
  var rowDiv = document.createElement("div");
  rowDiv.setAttribute("class", "row  d-flex justify-content-center ");
  var colDiv = document.createElement("div");
  colDiv.setAttribute("class", "col-md-6   p-5  ");
  colDiv.setAttribute(
    "style",
    "height : fit-content ; margin-top : 30px; box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;"
  );

  var heading = document.createElement("h2");
  heading.innerText = buttontext;
  heading.setAttribute("class",  "text-center ");
  colDiv.appendChild(heading);

  var emailInput = document.createElement("input");
  emailInput.setAttribute("class", "form-control mt-5");
  emailInput.setAttribute("type", "text");
  emailInput.setAttribute("placeholder", "Enter email id ");
  emailInput.setAttribute("id", "email");
  colDiv.appendChild(emailInput);

  var passwordInput = document.createElement("input");
  passwordInput.setAttribute("class", "form-control mt-5");
  passwordInput.setAttribute("type", "password");
  passwordInput.setAttribute("placeholder", "Enter password");
  passwordInput.setAttribute("id", "password");
  colDiv.appendChild(passwordInput);

  var button = document.createElement("button");
  button.innerText = buttontext;
  button.setAttribute("class", "btn btn-primary  text-white mt-5 w-100 ");
  button.addEventListener("click", async function () {
    var email = document.querySelector("#email").value;
    var password = document.querySelector("#password").value;

    if (buttontext == "Sign Up") {
      saveUser(email, password);
    } else if (buttontext == "Sign In") {
      let status = signInUser(email, password);

      if (status) {
        var main = document.querySelector("#main");
        main.innerHTML = "";
        createHeader();
        createCart(JSON.parse(localStorage.getItem("product_list")));
      } else {
        window.alert("Invalid username and password");
      }
    }
  });
  colDiv.appendChild(button);

  rowDiv.appendChild(colDiv);
  cartContainer.appendChild(rowDiv);
}


function saveUser(email, password) {
  var userlist = localStorage.getItem("user-list");
  userlist = JSON.parse(userlist);

  let user = userlist.find((user) => {
    return user.email == email;
  });
  if (user) {
    window.alert("Email id  is already exist ");
  } else {
    let user = { email: email, password: password };
    userlist.push(user);
    localStorage.setItem("user-list", JSON.stringify(userlist));
    window.alert("Sign Up success");
  }
}

function signInUser(email, password) {
  let userList = localStorage.getItem("user-list");
  userList = JSON.parse(userList);
  let user = userList.find((user) => {
    return user.email == email && user.password == password;
  });
  if (user) {
    sessionStorage.setItem("isLoggedIn", email);
    return true;
  }
  return false;
}


function saveProductInCart(product)
{
var userId = isLoggedIn();
console.log(userId);
var cart = { user : userId , productList : [] };

if (userId)
{
  console.log("if block");
  let cartList = localStorage.getItem("cart-list");
  cartList = JSON.parse(cartList);
  console.log(cartList);
   let  cartEachUser =  cartList.find( (data) => {
    return data.user == userId 
  })
  console.log("carteach user "+cartEachUser);
  if (cartEachUser)
  {
    localStorage.setItem("cart-list", JSON.stringify(cartList) )
    cartEachUser =  cartList.find( (data) => {
    return data.user == userId 
  })
  cartEachUser.productList.push(product);
  localStorage.setItem("cart-list", JSON.stringify(cartList) )
    alert("cart present for user ");
  }
  else{
    cartList.push(cart);
    localStorage.setItem("cart-list", JSON.stringify(cartList) )
      cartEachUser =  cartList.find( (data) => {
      return data.user == userId 
    })
    cartEachUser.productList.push(product);
    localStorage.setItem("cart-list", JSON.stringify(cartList) )
  alert("no cart present ");
  }
  
  // console.log(cartEachUser);
 

  // cartEachUser.productList.push(product);
  // cartList.push(cart);
  // localStorage.setItem("cart-list", JSON.stringify(cartList) )
  // alert("product is added into the cart successfully");
  
}
else{
  var cartContainer = document.querySelector("#cart-container");
  cartContainer.innerHTML = "";
  generateForm("Sign In");

}

}

function isLoggedIn()
{
  return sessionStorage.getItem("isLoggedIn");
}