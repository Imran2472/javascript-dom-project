var HomeSliderImg = [
  "https://img.lazcdn.com/us/domino/e3bac7c4-ca54-4e85-aae2-ce9c90830173_PK-1976-688.jpg_2200x2200q80.jpg",
  "https://img.lazcdn.com/us/domino/ffb0fcb0-93bd-4ce5-a558-6e0ff72e5c98_PK-1976-688.jpg_2200x2200q80.jpg",
  "https://img.lazcdn.com/us/domino/86de7066-4812-4884-b668-5111c00191f7_PK-1976-688.jpg_2200x2200q80.jpg",
  "https://img.lazcdn.com/us/domino/77f79ea3-0c13-423d-a5d7-36b2e9089077_PK-1976-688.jpg_2200x2200q80.jpg",
  "https://img.lazcdn.com/us/domino/d1a84646-d644-4458-8845-fe0175e98abc_PK-1976-688.jpg_2200x2200q80.jpg",
  "https://img.lazcdn.com/us/domino/606d36dc-3acb-43b0-b3b7-87c13e74398d_PK-1976-688.jpg_2200x2200q80.jpg",
  "https://img.lazcdn.com/us/domino/fb3dcd72-1c52-46a1-9385-0ea65b08d1a1_PK-1976-688.jpg_2200x2200q80.jpg",
  "https://img.lazcdn.com/us/domino/5c42d06a-bc1f-4f64-a1d3-2bd3e4611f07_PK-1976-688.jpg_2200x2200q80.jpg",
  "https://img.lazcdn.com/us/domino/acad97f6-5e10-4a2d-8056-0022f43c866f_PK-1976-688.jpg_2200x2200q80.jpg",
  "https://img.lazcdn.com/us/domino/35467bca-9c80-405b-b130-3748c568e5a0_PK-1976-688.jpg_2200x2200q80.jpg",
];

function CreatsHomeSLider() {
  var homeSliderContainer = document.querySelector(".home_slider");
  var swiper_wrapper = document.createElement("div");
  swiper_wrapper.className = "swiper-wrapper";
  homeSliderContainer.appendChild(swiper_wrapper);
  homeSliderContainer.appendChild(swiper_wrapper);
  for (var i = 0; i < HomeSliderImg.length; i++) {
    var swiper_slide = document.createElement("div");
    swiper_slide.className = "swiper-slide";
    swiper_slide.classList.add("img-set");
    var img = document.createElement("img");
    img.src = HomeSliderImg[i];
    swiper_slide.appendChild(img);
    swiper_wrapper.appendChild(swiper_slide);
  }
  var swipper_button_next = document.createElement("div");
  homeSliderContainer.appendChild(swipper_button_next);
  swipper_button_next.className = "swiper-button-next";
  var swipper_button_prev = document.createElement("div");
  homeSliderContainer.appendChild(swipper_button_prev);
  swipper_button_prev.className = "swiper-button-prev";
  var swipper_pagination = document.createElement("div");
  homeSliderContainer.appendChild(swipper_pagination);
  swipper_pagination.className = "swiper-pagination";
}

CreatsHomeSLider();

var products1 = [
  {
    id: 1,
    pera: "Dawlance Air Conditioner Mega T+ 10 DC Inverter 0.75 Ton / Split AC / Cool Only / 8000 BTU",
    image:
      "https://img.drz.lazcdn.com/static/pk/p/58a3ce1524bcec9c89b69d4c60135bdb.jpg_400x400q80.jpg_.webp",
    price: "Rs.84,999",
    discountPrice: "Rs. 100,000 -15%",
  },
  {
    id: 2,
    pera: "GLUPATONE Extreme Strong Emulsion 50ml With Homeo Cure Beauty Cream (Pack Of 2)",
    image:
      "https://img.drz.lazcdn.com/static/pk/p/6784c2fd2071c82c038d9ad3bae57149.jpg_400x400q80.jpg_.webp",
    price: "Rs. 830",
    discountPrice: "Rs. 1,280 -35%",
  },
  {
    id: 3,
    pera: "Pack of 8 Knorr Noodles Chatpatta - 50G",
    image:
      "https://img.drz.lazcdn.com/static/pk/p/7f4555eb13db505c4c045ad5a20314b5.jpg_400x400q80.jpg_.webp",
    price: "Rs. 345",
    discountPrice: "Rs. 400 -14%",
  },
  {
    id: 4,
    pera: "Habitt - Mack King Size Floor Bed",
    image:
      "https://img.drz.lazcdn.com/static/pk/p/6f1e989717769e71aa4cd8f3f7b4a526.jpg_400x400q80.jpg_.webp",
    price: "Rs. 14,111",
    discountPrice: "Rs. 42,000 -66%",
  },
  {
    id: 5,
    pera: "KalaKola Hairwell Shampoo Hair Color (Dark Brown) Sachet Box",
    image:
      "https://img.drz.lazcdn.com/g/kf/S2f3bea7447c54f53bf253a6f039e62d8w.png_400x400q80.png_.webp",
    price: "Rs. 574",
    discountPrice: "Rs. 1,260 -54%",
  },
  {
    id: 6,
    pera: "FORT 5 IN 1 Whitening Face wash | Glow-Enhancing Cleanser for Radiant Skin Reduce Wrinkles & Circle and Brightening Face Wash",
    image:
      "https://img.drz.lazcdn.com/static/pk/p/f2f698f03eba11cb3bbbfd7c54ac33af.jpg_400x400q80.jpg_.webp",
    price: "Rs. 244",
    discountPrice: "Rs. 500 -51%",
  },
];

var productCountainers = document.querySelector("#flash .container-fluid .row");
console.log(productCountainers);
function CreateProductCards() {
  for (var i = 0; i < products1.length; i++) {
    var product_col = document.createElement("div");
    product_col.className = "col-lg-2 col-md-3 col-sm-4 box-product";
    product_col.innerHTML = `
    <div class="card-content">
    <div class="img" style="width: 100%; height: 180px;">
        <img src="${products1[i].image}"
            alt="" style="width: 100%; height: 100%; object-fit: cover;">
    </div>
    <div class="cart-information">
        <div class="description mt-3">${products1[i].pera
          .toString()
          .slice(0, 50)}...</div>
        <div class="price mt-1">${products1[i].price}</div>
        <div class="cut-price">
        ${products1[i].discountPrice}
        </div>
    </div>
</div>`;
    productCountainers.appendChild(product_col);
  }
}

CreateProductCards();

var categories = [
  {
    imageUrl:
      "https://img.drz.lazcdn.com/static/pk/p/08dd047d016d77bbbb0e75ba7e73d2c7.jpg_170x170q80.jpg_.webp",
    title: "Sunglasses",
  },
  {
    imageUrl:
      "https://img.drz.lazcdn.com/static/pk/p/0b3577b60768b47eaaa9c94f0b69943a.jpg_170x170q80.jpg_.webp",
    title: "Dusters & Dust Cloths",
  },
  {
    imageUrl:
      "https://img.drz.lazcdn.com/static/pk/p/9aff3729fb8009d8ee0c3934815829ce.jpg_170x170q80.jpg_.webp",
    title: "Winter Jackets & Coats",
  },
  {
    imageUrl:
      "https://img.drz.lazcdn.com/g/kf/S8e0600ffad52471f8d6e3fd92fa78162A.jpg_170x170q80.jpg_.webp",
    title: "Mobiles",
  },
  {
    imageUrl:
      "https://img.drz.lazcdn.com/static/pk/p/c0b406222a677d855d7901ecf93d3910.jpg_170x170q80.jpg_.webp",
    title: "Coffee Machines",
  },
  {
    imageUrl:
      "https://img.drz.lazcdn.com/static/pk/p/5ac28423998bb8159c1af91427f276c7.jpg_170x170q80.jpg_.webp",
    title: "Dog & Cat Beds",
  },
  {
    imageUrl:
      "https://img.drz.lazcdn.com/static/pk/p/7e01e8c0b597024716460714c5f4e061.jpg_170x170q80.jpg_.webp",
    title: "Tablets",
  },
  {
    imageUrl:
      "https://img.drz.lazcdn.com/static/pk/p/010c5cd578ac6e2b6602325ab1d310e1.jpg_170x170q80.jpg_.webp",
    title: "Starter Kits",
  },
  {
    imageUrl:
      "https://img.drz.lazcdn.com/static/pk/p/9ab526990ac7a16ec1ff7ac124433674.jpg_170x170q80.jpg_.webp",
    title: "Blocks & Building Toys",
  },
  {
    imageUrl:
      "https://img.drz.lazcdn.com/static/pk/p/af55fad60ccb3cf8c7aa49a883caf054.jpg_170x170q80.jpg_.webp",
    title: "Knife Sharpeners & Blocks",
  },
  {
    imageUrl:
      "https://img.drz.lazcdn.com/static/pk/p/9720e1488ecfec37a5d8dd41ac6abd34.jpg_170x170q80.jpg_.webp",
    title: "Face Mask & Packs",
  },
  {
    imageUrl:
      "https://img.drz.lazcdn.com/g/kf/S43ac6caeb3c6424d82a792e5b3cd917f1.jpg_170x170q80.jpg_.webp",
    title: "Jewellery storage",
  },
  {
    imageUrl:
      "https://img.drz.lazcdn.com/static/pk/p/9734b43b464b8276b4ceb88a0150fbc1.jpg_170x170q80.jpg_.webp",
    title: "Microphones",
  },
  {
    imageUrl:
      "https://img.drz.lazcdn.com/static/pk/p/61cc87299dda2d7d05f864cf2fee38ab.jpg_170x170q80.jpg_.webp",
    title: "Zakat",
  },
  {
    imageUrl:
      "https://img.drz.lazcdn.com/static/pk/p/35ad1a25f6ad0dbbde6fd477272684fd.jpg_170x170q80.jpg_.webp",
    title: "Outdoor Tables",
  },
  {
    imageUrl:
      "https://img.drz.lazcdn.com/static/pk/p/cded791cb89120878f8891be7eaa3788.jpg_170x170q80.jpg_.webp",
    title: "Shower Caddies & Hangers",
  },
];
var catParent = document.getElementById("cat-row");
function CategoryShow() {
  for (var i = 0; i < categories.length; i++) {
    var col = document.createElement("div");
    col.setAttribute(
      "class",
      "d-flex flex-column justify-content-center align-items-center border py-2 px-1 cards-col"
    );
    var image_div = document.createElement("div");
    image_div.setAttribute("class", "image-div");
    var img = document.createElement("img");
    img.style.width = "100%";
    img.style.height = "100%";
    img.style.borderRadius = "5px";
    img.style.objectFit = "cover";
    img.setAttribute("src", categories[i].imageUrl);
    image_div.appendChild(img);
    var title_div = document.createElement("div");
    var titleText = document.createTextNode(categories[i].title);
    title_div.appendChild(titleText);
    title_div.setAttribute("class", "fw-normal mt-2");
    title_div.style.fontSize = "12px";
    col.appendChild(image_div);
    col.appendChild(title_div);
    catParent.appendChild(col);
  }
}

CategoryShow();

var product = [
  {
    image:
      "https://img.drz.lazcdn.com/static/pk/p/d08aea77ac60661fc59a5030da74c4e0.jpg_720x720q80.jpg_.webp",
    desc: "7 in 1 Smart Watch - 7 Straps Smart watch Ultra watch 8 for Gift - 7in1 Smart watch for Boys - 7 in 1 Ultra Smart watch for Girls - Ultra 7 in 1 strap - Smart watch with 7 straps - Smart watch 7 in 1 - Ultra Smart watch 7 straps - Smartwatch Ultra 8 watch",
    price: "Rs. 1999 -44%",
    rating: "472",
  },
  {
    image:
      "https://img.drz.lazcdn.com/static/pk/p/91c3e0893d1e1fba9935b8d50dcc91fa.jpg_720x720q80.jpg_.webp",
    desc: "FLK SPOT Mens Excercise Running Sneakers Casual shoes Fashion Breathable Fast shoes Training sneakers for Men Tennis Trending sneakers for walking gym",
    price: "Rs. 770 -61%",
    rating: "372",
  },
  {
    image:
      "	https://img.drz.lazcdn.com/static/pk/p/f6ef83bad531a7f6a2103a30924facf5.jpg_720x720q80.jpg_.webp",
    desc: "Pack of 12 Lipsticks Casual Lipsticks Fashion Breathable Fast Lipsticks Training sneakers for Men Tennis Trending sneakers for walking gym",
    price: "Rs. 647 -21%",
    rating: "172",
  },
  {
    image:
      "https://img.drz.lazcdn.com/static/pk/p/37f53c981604471c4722fbead29541be.jpg_720x720q80.jpg_.webp",
    desc: "Bathroom Shelf Shampoo Storage Rack Bath Hanging Basket Iron Cosmetic Holder Punch-Free Kitchen Seasoning Organizer Accessories Bathroom Shelf Shampoo Storage Rack Bath Hanging Basket Iron Cosmetic Holder Punch-Free Kitchen Seasoning Organizer Accessories",
    price: "Rs. 301 -61%",
    rating: "972",
  },
  {
    image:
      "https://img.drz.lazcdn.com/static/pk/p/d30f213f937b362edd73dfee697d4f71.jpg_720x720q80.jpg_.webp",
    desc: "Enacolor Ultralight Eyeglasses Women's Pure School Style Student Large Frame Flat Lens Anti-blue Light Frame Glasses Ins Gilr New Accessories",
    price: "Rs. 356 -65%",
    rating: "672",
  },
  {
    image:
      "	https://img.drz.lazcdn.com/static/pk/p/6909158cf456524509a8d4ed245878d0.jpg_720x720q80.jpg_.webp",
    desc: "Jenpharm - Anagrow Anti Hair Loss Shampoo 100ml",
    price: "Rs. 898 -22%",
    rating: "232",
  },
  {
    image:
      "	https://img.drz.lazcdn.com/g/kf/S0fbaf9b24eb14207b3e6eaf660d7ed71m.jpg_720x720q80.jpg_.webp",
    desc: "Airpods Air Pro 3rd Gen TWS Bluetooth Earbuds / Earphones Super Sounds Bas And No Delay With Charging Case High Quality touch sensor True Stereo Headphones Connect with all devices",
    price: "Rs. 998 -67%",
    rating: "532",
  },
  {
    image:
      "	https://img.drz.lazcdn.com/static/pk/p/cf6eda842d7177bc3b0c81b2fd6d0e0f.jpg_720x720q80.jpg_.webp",
    desc: "Marble Sheet - Marble Sheet Sticker - 60cm x 100cm/200Cm Marble Sheet Texture Design PVC Waterproof Self adhesive Wallpaper Sticker sheet Furniture New Skin Kitchen Cabinet Paper Stickers sheet Oilproof Table top Sticker sheet",
    price: "Rs. 456 -67%",
    rating: "412",
  },
  {
    image:
      "	https://img.drz.lazcdn.com/static/pk/p/d585babf3804b92b49e74ba1546e4e0a.jpg_120x120q80.jpg_.webp",
    desc: "Air Humidifier - Diffuser for Air Freshener / Aromatherapy - USB Desktop Fogger - Mist Maker Sprayer with Led Colorful Light - Silent Portable Humidifier for Room / Car / Offices / Double Nozzle Humidifier / Mini Humidifier",
    price: "Rs. 1506 -27%",
    rating: "362",
  },
  {
    image:
      "	https://img.drz.lazcdn.com/static/pk/p/40a7950f27ac3e877ac901d1585aed18.jpg_720x720q80.jpg_.webp",
    desc: "Magnetic Broken Heart Love Bracelet for Men and Women - 2pcs/Set Pair of Cuba Style Magnetic Chain Bracelet for Couples - Bracelet for Couples",
    price: "Rs. 299 -77%",
    rating: "262",
  },
  {
    image:
      "https://img.drz.lazcdn.com/static/pk/p/2fde336deabc6682412779dc7a46deb9.png_720x720q80.png_.webp",
    desc: "2Pcs Motion Activated Glow Bike Flashlight Car Motorcycle Cycle Tire Valve Caps Wheel Light Amazing Fantastic Bicycle Accessory LEDs",
    price: "Rs. 173 -37%",
    rating: "112",
  },
  {
    image:
      "https://img.drz.lazcdn.com/static/pk/p/946ca717c1a72779c46d5abafb413882.jpg_720x720q80.jpg_.webp",
    desc: "Packof 9 Clothes Storage Bag, Foldable Blanket Quilts Bag, Eco Friendly Bamboo Non-Woven Fabric",
    price: "Rs. 680 -27%",
    rating: "182",
  },
  {
    image:
      "	https://img.drz.lazcdn.com/static/pk/p/616ccff3a8e805596f66653292e25944.jpg_720x720q80.jpg_.webp",
    desc: "New Professional Vintage T-Shaped Blade T9 Direct Charging Dragon Style Hair Clippers for Men , Zero Gapped, Lines, Edges, Sideburns, Beard Trimmer for Men, Grooming Kit Low Noise ,USB Rechargeable with Guide Combs",
    price: "Rs. 699 -87%",
    rating: "12",
  },
  {
    image:
      "	https://img.drz.lazcdn.com/static/pk/p/24a1dbee1db7fe26f6cf38a5deecc420.jpg_720x720q80.jpg_.webp",
    desc: "Garena Free Fire Diamonds 13",
    price: "Rs. 19 -87%",
    rating: "172",
  },
  {
    image:
      "https://img.drz.lazcdn.com/static/pk/p/3b2039be3f12cabb8150482b4b154eb7.jpg_720x720q80.jpg_.webp",
    desc: "Black The boys printed summer tracksuit for men round neck half sleeves tshirt&trouser for men& boys best article of summer collection - T shirt for Men - Trouser for Men",
    price: "Rs. 799 -87%",
    rating: "192",
  },
  {
    image:
      "	https://img.drz.lazcdn.com/static/pk/p/e5670492b228479d646783f08f49715a.jpg_720x720q80.jpg_.webp",
    desc: "CCTV - 1080P Full HD CCTV Camera -CCTV Camera Wifi - Wifi Smart Camera - Wifi Camera -Home Security Camera - Smart Camera Wifi - CCTV Wifi - Wifi Camera Blub Socket - Security Camera For Home Wifi - Camera CCTV - Security Camera - Security Camera For Home",
    price: "Rs. 2879 -87%",
    rating: "342",
  },
  {
    image:
      "https://img.drz.lazcdn.com/static/pk/p/9ac80adbf1bb288e8e447101ace45c59.jpg_720x720q80.jpg_.webp",
    desc: "Microfiber Cloth For Scratch-Free Cleaning - 300 GSM - 20*40",
    price: "Rs. 289 -87%",
    rating: "442",
  },
  {
    image:
      "	https://img.drz.lazcdn.com/g/kf/Sb29b42034f8b4f3da531086e4200641bW.jpg_720x720q80.jpg_.webp",
    desc: "Retro Sunglasses Men Brand Designer Fashion Rimless Sun Glasses Shades Cutting Lens Ladies Frameless Eyeglasses",
    price: "Rs. 319 -71%",
    rating: "542",
  },
  {
    image:
      "https://img.drz.lazcdn.com/static/pk/p/bdfc091f1facd0ba7b607d9112c494fb.jpg_720x720q80.jpg_.webp",
    desc: "F3 Mobile Screen Magnifier 3D Enlarged Screen Display Mobile Stand High Quality",
    price: "Rs. 324 -61%",
    rating: "242",
  },
  {
    image:
      "https://img.drz.lazcdn.com/g/kf/S8dc1452bcdf346159b5bef8b3d054320j.jpg_720x720q80.jpg_.webp",
    desc: "BT8 Wireless Bluetooth Earphones Headphones Outdoor Sports Headset 5.3 With Charging Bin Display Touch Control Earbuds for Muisc",
    price: "Rs. 1552 -61%",
    rating: "262",
  },
  {
    image:
      "https://img.drz.lazcdn.com/static/pk/p/4ec8c573c971d912dda6745d2b972729.jpg_720x720q80.jpg_.webp",
    desc: "Perfumed Body Spray Big Boss - 200ML Perfumed Body Spray Outdoor Sports Headset 5.3 With Perfumed Body Spray Bin Display Touch Control Earbuds for Muisc",
    price: "Rs. 352 -21%",
    rating: "282",
  },
  {
    image:
      "https://img.drz.lazcdn.com/static/pk/p/98ca796a76bb855a71778d0edfa1814d.jpg_720x720q80.jpg_.webp",
    desc: "Men's Winter Collection 2 piece track suit",
    price: "Rs. 890 -21%",
    rating: "582",
  },
  {
    image: "https://video-play.daraz.pk/cover/3554094.jpg",
    desc: "Face Value Counter 10KG To 60KG Weight Adjustable Professional Counter Hand Gripper for Men & Women | Counter Hand Grip|Finger Exerciser|Power Gripper",
    price: "Rs. 390 -61%",
    rating: "432",
  },
  {
    image:
      "https://img.drz.lazcdn.com/static/pk/p/0b242f3d3b74d97059f8cb41eba26b78.jpg_720x720q80.jpg_.webp",
    desc: "12 Color Super Light Clay Air Dry Polymer Modelling Clay With 3 Tools, Kids Art Crafts Best Gift, clay for kids",
    price: "Rs. 57 -21%",
    rating: "132",
  },
  {
    image:
      "	https://img.drz.lazcdn.com/g/kf/S343578ee0a044f229fc4e11c1373f5412.jpg_720x720q80.jpg_.webp",
    desc: "Camelo leather sandals,Men’s casual sandals,Fashion Comfort &Stylish sandals",
    price: "Rs. 557 -21%",
    rating: "132",
  },
  {
    image:
      "https://img.drz.lazcdn.com/static/pk/p/2033a1aaf077efe4c1c008fbf639ae92.jpg_720x720q80.jpg_.webp",
    desc: "Beeswax Furniture Polish ,Wood Seasoning Beeswax | Natural Wood Wax Traditional Beeswax Polish for Wood & Furniture | Beeswax Wood Polish and Cleaner for Furniture Care",
    price: "Rs. 270 -29%",
    rating: "22",
  },
  {
    image:
      "https://img.drz.lazcdn.com/static/pk/p/34a4fcd5146be0d87e184af99648e023.jpg_720x720q80.jpg_.webp",
    desc: "Ocean silicone Band Strap for Smart Watch Ultra 8 7 6 5 4 SE 45mm 49mm 44mm 42mm",
    price: "Rs. 44 -29%",
    rating: "92",
  },
  {
    image:
      "https://img.drz.lazcdn.com/g/kf/Se59f9e54899449e2bd71b90f709c5169C.jpg_720x720q80.jpg_.webp",
    desc: "Customize Rings With box Customize your name on Rings",
    price: "Rs. 144 -59%",
    rating: "72",
  },
  {
    image:
      "https://img.drz.lazcdn.com/static/pk/p/0acfb18df45a376c86cc1f1a0c198143.jpg_720x720q80.jpg_.webp",
    desc: "100% Pure Double Shaded TOP Quality BAG for Laptop University college school Laptop Backpack B210, 16-Inch Laptop/Tablet , Durable, Water-Repellent, Lightweight, Clean Design, Sleek for Travel, Business Casual or College,",
    price: "Rs. 595 -29%",
    rating: "72",
  },
  {
    image:
      "https://img.drz.lazcdn.com/static/pk/p/f7e09e260e2a84372c53eaafb28ac88b.jpg_720x720q80.jpg_.webp",
    desc: "AKG Handsfree - Universal AKG Handfree For All Android Devices Having 3.5mm Headphone Jack - Tuned By Samsung - PUBG AKG Earphone - Handfree For Music - EO-IG955 - Black Color",
    price: "Rs. 295 -29%",
    rating: "272",
  },
  {
    image:
      "https://img.drz.lazcdn.com/static/pk/p/f46982f55b59ebcb41e642f5e36b8d36.jpg_720x720q80.jpg_.webp",
    desc: "Winter Track Suit Hoodie and Trouser Full tracksuit for Men'sr",
    price: "Rs. 1295 -29%",
    rating: "292",
  },
  {
    image:
      "https://img.drz.lazcdn.com/static/pk/p/d8e7e8e9ecd00f261c9e1b5e1def4d04.jpg_720x720q80.jpg_.webp",
    desc: "SUNISA 6 PCS Matte Liquid Peel Off Nail Polish",
    price: "Rs. 299 -29%",
    rating: "492",
  },
  {
    image:
      "	https://img.drz.lazcdn.com/static/pk/p/b24ff2c164732f5189e4adc277ee8d16.jpg_720x720q80.jpg_.webp",
    desc: "Two layer Jewelry organizer Box (Imported) - Women Display Storage Case Large PU Leather Jewelry Holder with Lock for Earring Ring Necklace Bracelet",
    price: "Rs. 299 -29%",
    rating: "492",
  },
  {
    image:
      "https://img.drz.lazcdn.com/static/pk/p/77631a3df33a24737d53cfaa91443f34.jpg_720x720q80.jpg_.webp",
    desc: "Two layer Jewelry organizer Box (Imported) - Women Display Storage Case Large PU Leather Jewelry Holder with Lock for Earring Ring Necklace Bracelet",
    price: "Rs. 399 -29%",
    rating: "492",
  },
];

var productmain = document.getElementById("product-row");
var StartIndex = 0;
var minimumIndex = 6;
var button = document.getElementById("load-more");
function ProducrShowHomePage() {
  var CardToShow = product.slice(StartIndex, StartIndex + minimumIndex);
  CardToShow.forEach((data) => {
    var product_col = document.createElement("div");
    product_col.className = "col-lg-2 col-md-3 col-sm-4 p-1";
    product_col.innerHTML = `
    <div class="card-content2 border rounded-1">
    <div class="img" style="width: 100%; height: 180px;">
        <img src="${data.image}"
            alt="" style="width: 100%; height: 100%; object-fit: cover;">
    </div>
    <div class="cart-information p-3">
        <div class="description mt-3">${data.desc
          .toString()
          .slice(0, 40)}...</div>
        <div class="price mt-1">${data.price}</div>
        <div class="reviews">
        <div class="stars">
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fas fa-regular fa-star"></i>
        </div>
        <div class="review">${data.rating}</div>
        </div>
    </div>
</div>`;
    productmain.appendChild(product_col);
  });
  //   for (var i = 0; i < CardToShow.length; i++) {
  //     var product_col = document.createElement("div");
  //     product_col.className = "col-lg-2 col-md-3 col-sm-4 p-1";
  //     product_col.innerHTML = `
  //     <div class="card-content2 border rounded-1">
  //     <div class="img" style="width: 100%; height: 180px;">
  //         <img src="${product[i].image}"
  //             alt="" style="width: 100%; height: 100%; object-fit: cover;">
  //     </div>
  //     <div class="cart-information p-3">
  //         <div class="description mt-3">${product[i].desc
  //           .toString()
  //           .slice(0, 40)}...</div>
  //         <div class="price mt-1">${product[i].price}</div>
  //         <div class="reviews">
  //         <div class="stars">
  //         <i class="fa-solid fa-star"></i>
  //         <i class="fa-solid fa-star"></i>
  //         <i class="fa-solid fa-star"></i>
  //         <i class="fa-solid fa-star"></i>
  //         <i class="fas fa-regular fa-star"></i>
  //         </div>
  //         <div class="review">${product[i].rating}</div>
  //         </div>
  //     </div>
  // </div>`;
  //     productmain.appendChild(product_col);
  //   }
  StartIndex += minimumIndex;
  if (StartIndex > product.length) {
    button.style.display = "none";
  }
}
ProducrShowHomePage();

button.addEventListener("click", function () {
  button.innerHTML = `<div class="d-flex align-items-center">
  <strong role="status"></strong>
  <div class="spinner-border ms-auto" aria-hidden="true"></div>`;
  setTimeout(() => {
    ProducrShowHomePage(); // Call the function again after 3 seconds to load more products.
    button.innerHTML = "Load More";
  }, 3000);
});

function ShowCreaTAccount() {
  document.getElementById("signup").classList.add("show");
  document.getElementById("login-form").style.display = "none";
}
function ShowHaveAccount() {
  document.getElementById("signup").classList.remove("show");
  document.getElementById("login-form").style.display = "block";
}

function showPassword() {
  var x = document.querySelectorAll(".password_input");
  for (var i = 0; i < x.length; i++) {
    if (x[i].type === "password") {
      x[i].type = "text";
    } else {
      x[i].type = "password";
    }
  }
}

var userName = document.getElementById("user-name");
var email = document.getElementById("email");
var password = document.getElementById("password");
var confirmPassword = document.getElementById("confirm-password");

var name = null;
var email_val = null;
var password_val = null;
var confirmPassword_val = null;

var loginUserEmail = document.getElementById("login-user-email");
var loginPassword = document.getElementById("login-password");
// console.log(loginPassword, loginUserEmail, "Login");
function RegisterAndLogin() {
  if (
    userName.value === "" ||
    email.value === "" ||
    password.value === "" ||
    confirmPassword.value === ""
  ) {
    Toastify({
      text: "All Fields are Required !",
      duration: 3000,
      newWindow: true,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "center", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      },
      onClick: function () {}, // Callback after click
    }).showToast();
    return false;
  }
  name = userName.value;
  email_val = email.value;
  password_val = password.value;
  confirmPassword_val = confirmPassword.value;
  if (password.value !== confirmPassword.value) {
    Toastify({
      text: `Passwords do not match`,
      duration: 3000,
      newWindow: true,
      close: true,
      gravity: "top",
      position: "center",
      stopOnFocus: true,
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      },
    }).showToast();
    return false;
  }
  Toastify({
    text: `Register Successfully`,
    duration: 3000,
    newWindow: true,
    close: true,
    gravity: "top",
    position: "center",
    stopOnFocus: true,
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
  }).showToast();
  ShowHaveAccount();
}
var showName = document.getElementById("name");
function Login() {
  if (loginUserEmail.value === "" || loginPassword.value === "") {
    Toastify({
      text: "All Fields are Required !",
      duration: 3000,
      newWindow: true,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "center", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      },
      onClick: function () {}, // Callback after click
    }).showToast();
    return false;
  }
  if (
    loginUserEmail.value === email_val &&
    loginPassword.value === password_val
  ) {
    Toastify({
      text: "Login Successfully !",
      duration: 3000,
      newWindow: true,
      close: true,
      gravity: "top",
      position: "center",
      stopOnFocus: true,
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      },
    }).showToast();
    document.getElementById("loginandsignup").style.display = "none";
    if (name) {
      showName.innerHTML = `${name}`;
    } else {
      showName.innerHTML = "User";
    }
  } else {
    Toastify({
      text: "Invalid Credentials",
      duration: 3000,
      newWindow: true,
      close: true,
      gravity: "top",
      position: "center",
      stopOnFocus: true,
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      },
    }).showToast();
    return false;
  }
  setTimeout(() => {
    Toastify({
      text: `Wellcome ${name}`,
      duration: 3000,
      newWindow: true,
      close: true,
      gravity: "top",
      position: "center",
      stopOnFocus: true,
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      },
    }).showToast();
  }, 2000);
}
