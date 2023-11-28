
import { useContext } from "react";
import { createContext, useState, useEffect } from "react";
import Mens_img_1_1 from "../images/Mens/mens_img_1_1.webp";
import Mens_img_1_2 from "../images/Mens/mens_img_1_2.webp";
import Mens_img_1_3 from "../images/Mens/mens_img_1_3.webp";
import Mens_img_1_4 from "../images/Mens/mens_img_1_4.webp";
import Mens_img_2_1 from "../images/Mens/mens_img_2_1.webp";
import Mens_img_2_2 from "../images/Mens/mens_img_2_2.webp";
import Mens_img_2_3 from "../images/Mens/mens_img_2_3.webp";
import Mens_img_2_4 from "../images/Mens/mens_img_2_4.webp";
import Mens_img_3_1 from "../images/Mens/mens_img_3_1.webp";
import Mens_img_3_2 from "../images/Mens/mens_img_3_2.webp";
import Mens_img_3_3 from "../images/Mens/mens_img_3_3.webp";
import Mens_img_3_4 from "../images/Mens/mens_img_3_4.webp";
import Mens_img_4_1 from "../images/Mens/mens_img_4_1.webp";
import Mens_img_4_2 from "../images/Mens/mens_img_4_2.webp";
import Mens_img_4_3 from "../images/Mens/mens_img_4_3.webp";
import Mens_img_4_4 from "../images/Mens/mens_img_4_4.webp";
import Mens_img_5_1 from "../images/Mens/mens_img_5_1.webp";
import Mens_img_5_2 from "../images/Mens/mens_img_5_2.webp";
import Mens_img_5_3 from "../images/Mens/mens_img_5_3.webp";
import Mens_img_5_4 from "../images/Mens/mens_img_5_4.webp";
import Mens_img_6_1 from "../images/Mens/mens_img_6_1.webp";
import Mens_img_6_2 from "../images/Mens/mens_img_6_2.webp";
import Mens_img_6_3 from "../images/Mens/mens_img_6_3.webp";
import Mens_img_6_4 from "../images/Mens/mens_img_6_4.webp";
import Mens_img_7_1 from "../images/Mens/mens_img_7_1.webp";
import Mens_img_7_2 from "../images/Mens/mens_img_7_2.webp";
import Mens_img_7_3 from "../images/Mens/mens_img_7_3.webp";
import Mens_img_7_4 from "../images/Mens/mens_img_7_4.webp";
import Mens_img_8_1 from "../images/Mens/mens_img_8_1.webp";
import Mens_img_8_2 from "../images/Mens/mens_img_8_2.webp";
import Mens_img_8_3 from "../images/Mens/mens_img_8_3.webp";
import Mens_img_8_4 from "../images/Mens/mens_img_8_4.jpg";
import Bags_1_1 from "../images/Bags/bags_1_1.webp"
import Bags_1_2 from "../images/Bags/bags_1_2.webp"
import Bags_1_3 from "../images/Bags/bags_1_3.webp"
import Bags_1_4 from "../images/Bags/bags_1_4.webp"
import Bags_2_1 from "../images/Bags/bags_2_1.webp"
import Bags_2_2 from "../images/Bags/bags_2_2.webp"
import Bags_2_3 from "../images/Bags/bags_2_3.webp"
import Bags_2_4 from "../images/Bags/bags_2_4.webp"
import Bags_3_1 from "../images/Bags/bags_3_1.webp"
import Bags_3_2 from "../images/Bags/bags_3_2.webp"
import Bags_3_3 from "../images/Bags/bags_3_3.webp"
import Bags_3_4 from "../images/Bags/bags_3_4.webp"
import Bags_4_1 from "../images/Bags/bags_4_1.webp"
import Bags_4_2 from "../images/Bags/bags_4_2.webp"
import Bags_4_3 from "../images/Bags/bags_4_3.webp"
import Bags_4_4 from "../images/Bags/bags_4_4.webp"
import Mens_watch_1_1 from "../images/Watches/mens_watch_1_1.jpg"
import Mens_watch_1_2 from "../images/Watches/mens_watch_1_2.webp"
import Mens_watch_1_3 from "../images/Watches/mens_watch_1_3.jpg"
import Mens_watch_1_4 from "../images/Watches/mens_watch_1_4.jpg"
import Mens_watch_2_1 from "../images/Watches/mens_watch_2_1.jpg"
import Mens_watch_2_2 from "../images/Watches/mens_watch_2_2.webp"
import Mens_watch_2_3 from "../images/Watches/mens_watch_2_3.jpg"
import Mens_watch_2_4 from "../images/Watches/mens_watch_2_4.jpg"
import Mens_watch_3_1 from "../images/Watches/mens_watch_3_1.jpg"
import Mens_watch_3_2 from "../images/Watches/mens_watch_3_2.webp"
import Mens_watch_3_3 from "../images/Watches/mens_watch_3_3.jpg"
import Mens_watch_3_4 from "../images/Watches/mens_watch_3_4.jpg"
import Mens_watch_4_1 from "../images/Watches/mens_watch_4_1.jpg"
import Mens_watch_4_2 from "../images/Watches/mens_watch_4_2.jpg"
import Mens_watch_4_3 from "../images/Watches/mens_watch_4_3.jpg"
import Mens_watch_4_4 from "../images/Watches/mens_watch_4_4.jpg"
import womens_1_1 from "../images/Womens/Womens_1_1.webp"
import womens_1_2 from "../images/Womens/Womens_1_2.webp"
import womens_1_3 from "../images/Womens/Womens_1_3.webp"
import womens_1_4 from "../images/Womens/Womens_1_4.webp"
import womens_2_1 from "../images/Womens/womens_2_1.webp"
import womens_2_2 from "../images/Womens/womens_2_2.webp"
import womens_2_3 from "../images/Womens/womens_2_3.webp"
import womens_2_4 from "../images/Womens/Womens_2_4.webp"
import womens_3_1 from "../images/Womens/womens_3_1.webp"
import womens_3_2 from "../images/Womens/womens_3_2.webp"
import womens_3_3 from "../images/Womens/womens_3_3.webp"
import womens_3_4 from "../images/Womens/womens_3_4.webp"
import womens_4_1 from "../images/Womens/womens_4_1.webp"
import womens_4_2 from "../images/Womens/womens_4_2.webp"
import womens_4_3 from "../images/Womens/womens_4_3.webp"
import womens_4_4 from "../images/Womens/womens_4_4.webp"
import womens_5_1 from "../images/Womens/womens_5_1.webp"
import womens_5_2 from "../images/Womens/womens_5_2.webp"
import womens_5_3 from "../images/Womens/womens_5_3.webp"
import womens_5_4 from "../images/Womens/womens_5_4.webp"
import womens_6_1 from "../images/Womens/womens_6_1.webp"
import womens_6_2 from "../images/Womens/womens_6_2.webp"
import womens_6_3 from "../images/Womens/womens_6_3.webp"
import womens_6_4 from "../images/Womens/womens_6_4.webp"
import womens_7_1 from "../images/Womens/womens_7_1.webp"
import womens_7_2 from "../images/Womens/womens_7_2.webp"
import womens_7_3 from "../images/Womens/womens_7_3.webp"
import womens_7_4 from "../images/Womens/womens_7_4.webp"
import womens_8_1 from "../images/Womens/womens_8_1.webp"
import womens_8_2 from "../images/Womens/womens_8_2.webp"
import womens_8_3 from "../images/Womens/womens_8_3.webp"
import womens_8_4 from "../images/Womens/womens_8_4.webp"
import Kids_1_1 from "../images/Kids/Kids_1_1.webp"
import Kids_1_2 from "../images/Kids/Kids_1_2.webp"
import Kids_1_3 from "../images/Kids/Kids_1_3.webp"
import Kids_1_4 from "../images/Kids/Kids_1_1.webp"
import Kids_2_1 from "../images/Kids/Kids_2_1.webp"
import Kids_2_2 from "../images/Kids/Kids_2_2.webp"
import Kids_2_3 from "../images/Kids/Kids_2_3.webp"
import Kids_2_4 from "../images/Kids/Kids_2_1.webp"
import Kids_3_1 from "../images/Kids/Kids_3_1.webp"
import Kids_3_2 from "../images/Kids/kids_3_2.webp"
import Kids_3_3 from "../images/Kids/Kids_3_3.webp"
import Kids_3_4 from "../images/Kids/Kids_3_1.webp"
import Kids_4_1 from "../images/Kids/Kids_4_1.jpg"
import Kids_4_2 from "../images/Kids/Kids_4_2.webp"
import Kids_4_3 from "../images/Kids/Kids_4_3.webp"
import Kids_4_4 from "../images/Kids/Kids_4_1.jpg"
export const Context = createContext();

const New_product = [
    {
        name: "Dobby Kurta",
        image: Mens_img_1_1,
        image_2: Mens_img_1_2,
        image_3: Mens_img_1_3,
        imgae_4:  Mens_img_1_4,
        desc: "Woven style dobby kurta Ban neckline Antique button closure on the placket Two side pockets Color: Royal Blue Fabric: Dobby Weight: 324 g Model is wearing size M",
        price: "20",
        category: "Mens",
        id: "1"
    },
    {
        name: "Self Jacquard Kurta",
        image: Mens_img_3_1,
        image_2: Mens_img_3_2,
        image_3: Mens_img_3_3,
        imgae_4:  Mens_img_3_4,
        desc: "Basic style dyed self jacquard kurta Ban neckline Red-tone lining on the neckline ,placket and cuffs Antique button closure on the placket Two side pockets Color: Black Fabric: Self Jacquard Weight: 324 g Model is wearing size M",
        price: "30",
        category: "Mens",
        id: "2"
    },
    {
        name: "Khaddar Shirt-Printed",
        image: womens_1_1 ,
        image_2: womens_1_2 ,
        image_3: womens_1_3,
        imgae_4: womens_1_4,
        desc: "Product Details Shirt Floral printed shirt 1.83 M Fabric: Khaddar Other Details Weight: 390 g Code: U3084SH-SSH-BGE",
        price: "70",
        category: "Womens",
        id: "3"
    },
    {
        name: "Printed Grip Top",
        image: womens_3_1 ,
        image_2: womens_3_2 ,
        image_3: womens_3_3,
        imgae_4: womens_3_4,
        desc: "Printed cold shoulder button down top with collar. Buttoned cuffs. Fabric: Grip Other Details Weight: 220 g Model is wearing size S Code: V0140TP-SML-OCR",
        price: "60",
        category: "Womens",
        id: "4"
    },
    {
        name: "Waistcoat (BWC-113)",
        image: Kids_1_1 ,
        image_2: Kids_1_2,
        image_3: Kids_1_3,
        imgae_4: Kids_1_4,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure atque cum modi excepturi quod itaque totam perferendis quisquam odio!",
        price: "50",
        category: "Kids",
        id: "5"
    },
    {
        name: "Waistcoat (BWC-114)",
        image: Kids_2_1 ,
        image_2: Kids_2_2,
        image_3: Kids_2_3,
        imgae_4: Kids_2_4,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure atque cum modi excepturi quod itaque totam perferendis quisquam odio!",
        price: "50",
        category: "Kids",
        on_sale: 'false',
        id: "6"
    },
    {
        name: "Bicocca Chronograph ",
        image: Mens_watch_1_1,
        image_2: Mens_watch_1_2 ,
        image_3: Mens_watch_1_3,
        imgae_4: Mens_watch_1_4,
        desc: "Printed numerals on the face float above the tower of subdials on this striking watch bordered by chunky geometric markers and 3D numbers on the bezel.",
        orginal_price: '100$',
        price: "70",
        category: "Mens_watch",
        id: "7"
       },
       {
        name: "Silicone Strap Chronograph ",
        image: Mens_watch_3_1,
        image_2: Mens_watch_3_2 ,
        image_3: Mens_watch_3_3,
        imgae_4: Mens_watch_3_4,
        desc: "Bold logo embossing on the silicone strap gives a sporty look to this Swiss-made chronograph featuring an easily read dial and framed by a tachymeter bezel.",
        orginal_price: '70$',
        price: "60",
        category: "Mens_watch",
        id: "8"
       },
       {
        name: "BRAID DETAIL TOTE BAG",
        image: Bags_1_1,
        image_2: Bags_1_2,
        image_3: Bags_1_3,
        imgae_4: Bags_1_4,
        desc: "Details: Colour: Mustard Material: PU Size: H 11.5''/W 15.5'' Additional Component: Small Pouch",
        orginal_price: "35$",
        price: "20",
        category: "Womens_bags",
        id: "9"
    },
    {
        name: "EMBELLISHED CLUTCH",
        image: Bags_2_1,
        image_2: Bags_2_2,
        image_3: Bags_2_3,
        imgae_4: Bags_2_4,
        desc: "Details: Colour: Grey Material: Silk with Adda Work Size: H 4",
        orginal_price: "25$",
        price: "22",
        category: "Womens_bags",
        id: "10"
    },
    {
        name: "NAVY HAND BAG",
        image: Bags_3_1,
        image_2: Bags_3_2,
        image_3: Bags_3_3,
        imgae_4: Bags_3_4,
        desc: "Details: Colour: Navy Material: Textured PU Size: H 9.5 /W 9",
        orginal_price: "25$",
        price: "27",
        category: "Womens_bags",
        id: "11"
    },
    {
        name: "GREY SHOULDER BAG",
        image: Bags_4_1,
        image_2: Bags_4_2,
        image_3: Bags_4_3,
        imgae_4: Bags_4_4,
        desc: "Details: Colour: Grey Material: Textured PU Size: H 6.5/W 10",
        orginal_price: "35$",
        price: "30",
        category: "Womens_bags",
        id: "12"
    },
]

const Mens = [
    {
        name: "Dobby Kurta",
        image: Mens_img_1_1,
        image_2: Mens_img_1_2,
        image_3: Mens_img_1_3,
        imgae_4:  Mens_img_1_4,
        desc: "Woven style dobby kurta Ban neckline Antique button closure on the placket Two side pockets Color: Royal Blue Fabric: Dobby Weight: 324 g Model is wearing size M",
        price: "20",
        category: "Mens",
        id:"1"
    },
    {
        name: "Self Jacquard Kurta",
        image: Mens_img_2_1,
        image_2: Mens_img_2_2,
        image_3: Mens_img_2_3,
        imgae_4:  Mens_img_2_4,
        desc: "Self jacquard kurta with geometric pattern Ban neckline Antique button closure on the placket Two side pockets Color: Powder Pink Fabric: Self Jacquard Weight: 332 g Model is wearing size M",
        price: "40",
        category: "Mens",
        id:"2"
    },
    {
        name: "Self Jacquard Kurta",
        image: Mens_img_3_1,
        image_2: Mens_img_3_2,
        image_3: Mens_img_3_3,
        imgae_4:  Mens_img_3_4,
        desc: "Basic style dyed self jacquard kurta Ban neckline Red-tone lining on the neckline ,placket and cuffs Antique button closure on the placket Two side pockets Color: Black Fabric: Self Jacquard Weight: 324 g Model is wearing size M",
        price: "30",
        category: "Mens",
        id:"3"
    },
    {
        name: "Self Jacquard Kurta",
        image: Mens_img_4_1,
        image_2: Mens_img_4_2,
        image_3: Mens_img_4_3,
        imgae_4:  Mens_img_4_4,
        desc: "Self jacquard kurta with abstract pattern Ban neckline Thread detailing with black lining on the ban Antique button closure with thread detailing on the placket Two side pockets Color: Grey Fabric: Self Jacquard Weight: 328 g Model is wearing size M",
        price: "50",
        category: "Mens",
        id:"4"
    },
    {
        name: "Dobby Kurta",
        image: Mens_img_5_1,
        image_2: Mens_img_5_2,
        image_3: Mens_img_5_3,
        imgae_4:  Mens_img_5_4,
        desc: "Woven style dobby kurta Ban neckline Antique button closure on the placket Two side pockets Color: Aqua Fabric: Dobby Weight: 318 g Model is wearing size M",
        price: "55",
        category: "Mens",
        id:"5"
    },
    {
        name: "Self Jacquard Kurta",
        image: Mens_img_6_1,
        image_2: Mens_img_6_2,
        image_3: Mens_img_6_3,
        imgae_4:  Mens_img_6_4,
        desc: "Self jacquard kurta with geometric pattern Ban neckline with thread detailing Colored crystal button closure on the placket Two side pockets Color: Sky Blue Fabric: Self Jacquard Weight: 312 g Model is wearing size M",
        price: "60",
        category: "Mens",
        id:"6"
    },
    {
        name: "Self Jacquard Kurta",
        image: Mens_img_7_1,
        image_2: Mens_img_7_2,
        image_3: Mens_img_7_3,
        imgae_4:  Mens_img_7_4,
        desc: "Self jacquard kurta with geometric pattern Ban neckline Antique button closure on the placket Two side pockets Color: Navy Blue Fabric: Self Jacquard Weight: 332 g Model is wearing size M",
        price: "60",
        category: "Mens",
        id:"7"
    },
    {
        name: "Dobby Kurta",
        image: Mens_img_8_1,
        image_2: Mens_img_8_2,
        image_3: Mens_img_8_3,
        imgae_4:  Mens_img_8_4,
        desc: "Woven style dobby kurta Ban neckline with thread detailing Crystal button closure on the placket Two side pockets Color: Peacock Blue Fabric: Dobby Weight: 318 g Model is wearing size M",
        price: "60",
        category: "Mens",
        id:"8"
    },
    
]
const Womesbags = [
    {
        name: "BRAID DETAIL TOTE BAG",
        image: Bags_1_1,
        image_2: Bags_1_2,
        image_3: Bags_1_3,
        imgae_4: Bags_1_4,
        desc: "Details: Colour: Mustard Material: PU Size: H 11.5''/W 15.5'' Additional Component: Small Pouch",
        orginal_price: "35$",
        price: "20",
        category: "Womens_bags",
        id:"1"
    },
    {
        name: "EMBELLISHED CLUTCH",
        image: Bags_2_1,
        image_2: Bags_2_2,
        image_3: Bags_2_3,
        imgae_4: Bags_2_4,
        desc: "Details: Colour: Grey Material: Silk with Adda Work Size: H 4",
        orginal_price: "25$",
        price: "22",
        category: "Womens_bags",
        id:"2"
    },
    {
        name: "NAVY HAND BAG",
        image: Bags_3_1,
        image_2: Bags_3_2,
        image_3: Bags_3_3,
        imgae_4: Bags_3_4,
        desc: "Details: Colour: Navy Material: Textured PU Size: H 9.5 /W 9",
        orginal_price: "25$",
        price: "27",
        category: "Womens_bags",
        id:"3"
    },
    {
        name: "GREY SHOULDER BAG",
        image: Bags_4_1,
        image_2: Bags_4_2,
        image_3: Bags_4_3,
        imgae_4: Bags_4_4,
        desc: "Details: Colour: Grey Material: Textured PU Size: H 6.5/W 10",
        orginal_price: "35$",
        price: "30",
        category: "Womens_bags",
        id:"4"
    },
]
const MensWatches = [
   {
    name: "Bicocca Chronograph ",
    image: Mens_watch_1_1,
    image_2: Mens_watch_1_2 ,
    image_3: Mens_watch_1_3,
    imgae_4: Mens_watch_1_4,
    desc: "Printed numerals on the face float above the tower of subdials on this striking watch bordered by chunky geometric markers and 3D numbers on the bezel.",
    orginal_price: '100$',
    price: "70",
    category: "Mens_watch",
    on_sale: 'true',
    id:"1"
   },
   {
    name: "Colonne Chronograph  ",
    image: Mens_watch_2_1,
    image_2: Mens_watch_2_2 ,
    image_3: Mens_watch_2_3,
    imgae_4: Mens_watch_2_4,
    desc: "Signature lion head hardware provides a distinctive finish for this sleek chronograph bracelet watch.",
    orginal_price: '130$',
    price: "100",
    category: "Mens_watch",
    on_sale: 'true',
    id:"2"
   },
   {
    name: "Silicone Strap Chronograph ",
    image: Mens_watch_3_1,
    image_2: Mens_watch_3_2 ,
    image_3: Mens_watch_3_3,
    imgae_4: Mens_watch_3_4,
    desc: "Bold logo embossing on the silicone strap gives a sporty look to this Swiss-made chronograph featuring an easily read dial and framed by a tachymeter bezel.",
    orginal_price: '70$',
    price: "60",
    category: "Mens_watch",
    on_sale: 'true',
    id:"3"
   },
   {
    name: "x 2PAC Time Teller",
    image: Mens_watch_4_1,
    image_2: Mens_watch_4_2 ,
    image_3: Mens_watch_4_3,
    imgae_4: Mens_watch_4_4,
    desc: "A rose motif and song lyrics bring signature Tupac style to this gleaming timepiece with a matching bracelet completing this sleek look.",
    orginal_price: '200$',
    price: "150",
    category: "Mens_watch",
    on_sale: 'true',
    id:"4"
   },
]
const WomensDresses = [
    {
        name: "Khaddar Shirt-Printed",
        image: womens_1_1 ,
        image_2: womens_1_2 ,
        image_3: womens_1_3,
        imgae_4: womens_1_4,
        desc: "Product Details Shirt Floral printed shirt 1.83 M Fabric: Khaddar Other Details Weight: 390 g Code: U3084SH-SSH-BGE",
        price: "70",
        category: "Womens",
        on_sale: 'false',
        id:"1"
    },
    {
        name: "2 Piece Missouri Suit-Embroidered",
        image: womens_2_1 ,
        image_2: womens_2_2 ,
        image_3: womens_2_3,
        imgae_4: womens_2_4,
        desc: "Product Details Shirt Dyed shirt with tilla and sequins embroidery and tie-knot closure on the waist Slit on the cuffs Fabric: Missouri Trouser Wide-leg trousers with elasticized waistband Fabric: Cambric Other Details Weight: 424 g Model is wearing size S Code: P9199SU-XSM-ORG",
        price: "60",
        category: "Womens",
        on_sale: 'false',
        id:"2"
    },
    {
        name: "Printed Grip Top",
        image: womens_3_1 ,
        image_2: womens_3_2 ,
        image_3: womens_3_3,
        imgae_4: womens_3_4,
        desc: "Printed cold shoulder button down top with collar. Buttoned cuffs. Fabric: Grip Other Details Weight: 220 g Model is wearing size S Code: V0140TP-SML-OCR",
        price: "60",
        category: "Womens",
        on_sale: 'false',
        id:"3"
    },
    {
        name: "3 Piece Organza Saree",
        image: womens_4_1 ,
        image_2: womens_4_2 ,
        image_3: womens_4_3,
        imgae_4: womens_4_4,
        desc: "Product Details Saree Printed saree Fabric: Organza Blouse Embroidered blouse with embellished neck and sleeves Fabric: Raw Silk Petticoat Dyed petticoat Fabric: Cotton Other Details Weight: 1120 g Model is wearing size S",
        price: "90",
        category: "Womens",
        on_sale: 'false',
        id:"4"
    },
    {
        name: "2 Piece Khaddar",
        image: womens_5_1 ,
        image_2: womens_5_2 ,
        image_3: womens_5_3,
        imgae_4: womens_5_4,
        desc: "Product Details Shirt Printed shirt with button detailing on neckline Fabric: Slub Khaddar Trouser Dyed wide leg trouser with embroidered hem and elasticized waistband Fabric: Slub Khaddar Other Details Weight: 560 g Model is wearing size S",
        price: "50",
        category: "Womens",
        on_sale: 'false',
        id:"5"
    },
    {
        name: "Grip Top-Embroidered(Pret)",
        image: womens_6_1 ,
        image_2: womens_6_2 ,
        image_3: womens_6_3,
        imgae_4: womens_6_4,
        desc: "Product Details Top Dyed top with embroidery and cuff sleeves with bow tie neck High low style Fabric: Grip Other Details Weight: 320 g Model is wearing size S",
        price: "60",
        category: "Womens",
        on_sale: 'false',
        id:"6"
    },
    {
        name: "Khaddar Kurti-Printed",
        image: womens_7_1 ,
        image_2: womens_7_2 ,
        image_3: womens_7_3,
        imgae_4: womens_7_4,
        desc: "Product Details Shirt Printed kurti with pleats detailing on sleeves and buttons on neckline High low style hemline Fabric: Khaddar Other Details Weight: 288 g Model is wearing size S",
        price: "66",
        category: "Womens",
        on_sale: 'false',
        id:"7"
    },
    {
        name: "3 Piece Khaddar",
        image: womens_8_1 ,
        image_2: womens_8_2 ,
        image_3: womens_8_3,
        imgae_4: womens_8_4,
        desc: "Product Details Printed Suit Shirt Paste print shirt 1.83 M Fabric: Slub Khaddar Dupatta Dyed shawl 2.5 M Fabric:Yarn Dyed Trouser Dyed trouser 1.8 M Fabric: Slub khaddar Other Details Weight: 880 g",
        price: "80",
        category: "Womens",
        on_sale: 'false',
        id:"8"
    },
  
]
const Kids = [
    {
        name: "Waistcoat (BWC-113)",
        image: Kids_1_1 ,
        image_2: Kids_1_2,
        image_3: Kids_1_3,
        imgae_4: Kids_1_4,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure atque cum modi excepturi quod itaque totam perferendis quisquam odio!",
        price: "50",
        category: "Kids",
        on_sale: 'false',
        id:"1"
    },
    {
        name: "Waistcoat (BWC-114)",
        image: Kids_2_1 ,
        image_2: Kids_2_2,
        image_3: Kids_2_3,
        imgae_4: Kids_2_4,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure atque cum modi excepturi quod itaque totam perferendis quisquam odio!",
        price: "50",
        category: "Kids",
        on_sale: 'false',
        id:"2"
    },
    {
        name: "DAISY JACQUARD SWEATER",
        image: Kids_3_1 ,
        image_2: Kids_3_2,
        image_3: Kids_3_3,
        imgae_4: Kids_3_4,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure atque cum modi excepturi quod itaque totam perferendis quisquam odio!",
        price: "50",
        category: "Kids",
        on_sale: 'false',
        id:"3"
    },
    {
        name: "Graphic T-Shirt",
        image: Kids_4_1 ,
        image_2: Kids_4_2,
        image_3: Kids_4_3,
        imgae_4: Kids_4_4,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure atque cum modi excepturi quod itaque totam perferendis quisquam odio!",
        price: "50",
        category: "Kids",
        on_sale: 'false',
        id:"4"
    },
]


const AppContext = ({ children }) => {

const [details, setdetails] = useState([]) 
const [Relatedpro, setRelatedpro] = useState([]) 
const [Cartdata, SetcartData] = useState([])
const [OpenNavbar, setOpenNavbar] = useState(true)
const [Favriouedata, SetFavriouedata] = useState([])
const [OpenLoginPage, setOpenLoginpage] = useState(false)
const [OpenSearchsection, setOpenSearchsection] = useState(false)
const [OpenBuysection, setOpenBuysection] = useState(false)
const [OpenResnavbar, setOpenResnavbar] = useState(false)
const [CartLength, setCartLength] = useState(0)
const [FavioruteLength, setFavioruteLength] = useState(0)
const [itemnumber, setitemnumber] = useState(1)
const [price, setprice] = useState(1)
const [SortingdataCommand, SetSortngdataCommand] = useState(null)
useEffect(()=>{
    if(itemnumber !== 0){
      setprice(details.price * itemnumber)
    }
    if(itemnumber == 0){
      setitemnumber(1)
     }
  },[itemnumber])

  const setitemnumbers = (state)=>{
   if(itemnumber !== 0){
    if(state == "plus"){
      setitemnumber(itemnumber + 1)
     }
     if(state == "minus"){
      setitemnumber(itemnumber - 1)
     }
   }
  }
  useEffect(()=>{
    if(details.category == "Mens"){
     setRelatedpro(Mens)
    }
    if(details.category == "Womens"){
     setRelatedpro(WomensDresses)
    }
    if(details.category == "Kids"){
     setRelatedpro(Kids)
    }
    if(details.category == "Womens_bags"){
     setRelatedpro(Womesbags)
    }
    if(details.category == "Mens_watch"){
     setRelatedpro(MensWatches)
    }
   },[details]) 
// For Pushing data into card//
   const handlecart = (item)=>{
    Cartdata.push(item)
    setCartLength(Cartdata.length)
  }
// For Pushing data into Favourite//
const handlefavourite = (item)=>{
    Favriouedata.push(item)
    setFavioruteLength(Favriouedata.length)
}
// For Opening buy section//
   const openBuySection = ()=>{
       setOpenBuysection(true);
       setOpenSearchsection(false);
       setOpenResnavbar(false)
       setOpenNavbar(false)
}
//For Closing buy section//
const offBuysection = ()=>{
    setOpenBuysection(false)
    setOpenResnavbar(false)
    setOpenNavbar(true)
  } 
// For Opening Res Navabar//
const openResnavbar = ()=>{
    setOpenResnavbar(true)
    setOpenNavbar(false)
}
// For Closing Res Navabar//  
  const closeResnavbar = ()=>{
    setOpenNavbar(true)
    setOpenResnavbar(false)
}
// For Opening Search Section//    
  const openSearchSection = ()=>{
    setOpenSearchsection(true);
    setOpenLoginpage(false);
    setOpenResnavbar(false)
    setOpenNavbar(false);
}
//For Search Section//
const offSearchsection = ()=>{
    setOpenSearchsection(false)
    setOpenResnavbar(false)
    setOpenNavbar(true)
   } 
// For Opening Login Section//      
  const openLoginSection = ()=>{
    setOpenLoginpage(true);
    setOpenSearchsection(false);
    setOpenResnavbar(false)
    setOpenNavbar(false)
}
//For Closing Login Section//
const offLoginsection = ()=>{
    setOpenLoginpage(false)
    setOpenResnavbar(false)
    setOpenNavbar(true)
}
//For Cleaning cart data//
const cleanCartandFav = (e)=>{
    e.preventDefault()
    SetcartData([])
} 
      
    return (
        <Context.Provider
            value={{
            New_product,
            Mens,
            Womesbags,
            MensWatches,
            WomensDresses,
            Kids,
            details,
            setdetails,
            Relatedpro,
            setRelatedpro,
            Cartdata,
            SetcartData,
            Favriouedata,
            SetFavriouedata,
            OpenNavbar,
            setOpenNavbar,
            OpenResnavbar,
            setOpenResnavbar,
            OpenLoginPage,
            setOpenLoginpage,
            OpenSearchsection,
            setOpenSearchsection,
            OpenBuysection,
            setOpenBuysection,
            CartLength,
            setCartLength,
            FavioruteLength,
            setFavioruteLength,
            itemnumber,
            setitemnumber,
            price,
            setprice,
            setitemnumbers,
            SortingdataCommand,
            SetSortngdataCommand ,
            handlecart,
            handlefavourite,
            openBuySection,
            openResnavbar,
            closeResnavbar,
            openSearchSection,
            offSearchsection,
            openLoginSection,
            offLoginsection, 
            offBuysection,  
            cleanCartandFav,   
            }}
        >
            {children}
        </Context.Provider>
    )
}
export default AppContext