import heroimg from "../assets/hero.png";

import hightlightimg from "../assets/hightlightimg.png";
import sneakershoe from "../assets/sneaker.png";

import clip from "../assets/video/clip.mp4";
import vcover1 from "../assets/video/vcover1.png";
import vcover2 from "../assets/video/vcover2.png";
import vcover3 from "../assets/video/vcover3.png";

import psale1 from "../assets/nike-air-red.png";
import psale2 from "../assets/nike-adapt-bb.png";
import psale3 from "../assets/nike-adapt-bb-smart.png";

import product1 from "../assets/product1.png";
import product2 from "../assets/product2.png";
import product3 from "../assets/product3.png";
import product4 from "../assets/product4.png";
import product5 from "../assets/product5.png";
import product6 from "../assets/product6.png";
import product7 from "../assets/product7.png";
import product8 from "../assets/product8.png";
import product9 from "../assets/product9.png";
import product10 from "../assets/product10.png";
import product11 from "../assets/product11.png";
import product12 from "../assets/product12.png";



const heroapi = {
  title: "Unleash Power with Zivora Spark Sneakers",
  subtitle: "Smart shoes for a smarter lifestyle",
  img: heroimg,
  btntext: "Explore Product",
  videos: [
    { imgsrc: vcover1, clip: clip },
    { imgsrc: vcover2, clip: clip },
    { imgsrc: vcover3, clip: clip },
  ],
 
};



const popularsales = {
  title: "Popular Picks",
  items: [
    {
      id: "0p0x1",
      title: "Stride in Style",
      text: "Engineered for power. Designed for elegance.",
      rating: "4.9",
      btn: "Buy Now",
      img: psale2,
      price: "8999",
      color: "from-blue-600 to-blue-500",
      shadow: "shadow-lg shadow-blue-500",
    },
    {
      id: "0p0x2",
      title: "Move with Purpose",
      text: "Premium comfort. Unmatched performance.",
      rating: "4.7",
      btn: "Shop Now",
      img: psale1,
      price: "12000",
      color: "from-red-500 to-rose-500",
      shadow: "shadow-lg shadow-rose-500",
    },
    {
      id: "0p0x3",
      title: "Luxury in Every Step",
      text: "Your journey deserves a finer feel.",
      rating: "5.0",
      btn: "Explore",
      img: psale3,
      price: "9999",
      color: "from-violet-500 to-indigo-500",
      shadow: "shadow-lg shadow-violet-500",
    },
  ],
};

const highlight = {
  heading: "HIGHLIGHTS",
  title: "STEP INTO LIMITLESS POSSIBILITIES",
  text: "Designed for those who move with purpose and passion. Embrace a style that empowers your journey — every step, every day.",
  btn: "Explore Now",
  url: "https://www.nike.com/launch/t/nocta-hot-step-black-gold",
  img: hightlightimg,
};


const sneaker = {
  heading: "FEATURED",
  title: "ELEVATED STYLE WITH EVERY STEP",
  text: "Experience the fusion of bold design and everyday comfort. These sneakers redefine streetwear with their sleek build, durable stitching, and just the right touch of attitude.",
  btn: "Explore More",
  url: "https://sneakernews.com/2022/03/21/nike-lebron-2-retro-white-midnight-navy-varsity-crimson-dr0826-100/",
  img: sneakershoe,
};

const toprateslaes = {
  title: "Premium Footwear Collection",
  items: [
    {
      id: "0M0x1",
      title: "Airflow Low Premium",
      text: "Running Shoes",
      rating: "5+",
      btn: "Buy Now",
      img: product7,
      price: "18000",
      color: "from-sky-600 to-indigo-600",
      shadow: "shadow-lg shadow-blue-500",
    },
    {
      id: "0M0x2",
      title: "Evergreen Force",
      text: "Running Shoes",
      rating: "5+",
      btn: "Buy Now",
      img: product2,
      price: "20000",
      color: "from-green-500 to-emerald-500",
      shadow: "shadow-lg shadow-green-500",
    },
    {
      id: "0M0x3",
      title: "Adapt Pro Rose",
      text: "Running Shoes",
      rating: "5+",
      btn: "Buy Now",
      img: product3,
      price: "19000",
      color: "from-red-500 to-rose-500",
      shadow: "shadow-lg shadow-rose-500",
    },
    {
      id: "0M0x4",
      title: "Skywalk Premium",
      text: "Running Shoes",
      rating: "5+",
      btn: "Buy Now",
      img: product4,
      price: "12000",
      color: "from-orange-500 to-amber-500",
      shadow: "shadow-lg shadow-orange-500",
    },
    {
      id: "0M0x5",
      title: "Flex Pro",
      text: "Running Shoes",
      rating: "5+",
      btn: "Buy Now",
      img: product5,
      price: "14000",
      color: "from-gray-900 to-yellow-500",
      shadow: "shadow-lg shadow-yellow-500",
    },
    {
      id: "0M0x6",
      title: "Jumpman PR3",
      text: "Running Shoes",
      rating: "5+",
      btn: "Buy Now",
      img: product6,
      price: "15000",
      color: "from-blue-500 to-cyan-500",
      shadow: "shadow-lg shadow-cyan-500",
    },
    {
      id: "0M0x7",
      title: "Multi-Tech Runners",
      text: "Running Shoes",
      rating: "5+",
      btn: "Buy Now",
      img: product1,
      price: "17000",
      color: "from-yellow-500 to-yellow-500",
      shadow: "shadow-lg shadow-yellow-500",
    },
    {
      id: "0M0x8",
      title: "Air Cushion Max",
      text: "Running Shoes",
      rating: "5+",
      btn: "Buy Now",
      img: product9,
      price: "16000",
      color: "from-[#936550] to-orange-900",
      shadow: "shadow-lg shadow-orange-800",
    },
    {
      id: "0M0x9",
      title: "Vintage Max-X",
      text: "Running Shoes",
      rating: "5+",
      btn: "Buy Now",
      img: product10,
      price: "19000",
      color: "from-indigo-700 to-indigo-700",
      shadow: "shadow-lg shadow-indigo-500",
    },
    {
      id: "0M0x10",
      title: "Neon Jordan 11",
      text: "Running Shoes",
      rating: "5+",
      btn: "Buy Now",
      img: product12,
      price: "20000",
      color: "from-green-600 to-lime-500",
      shadow: "shadow-lg shadow-lime-500",
    },
    {
      id: "0M0x11",
      title: "Stealth Black Max",
      text: "Running Shoes",
      rating: "5+",
      btn: "Buy Now",
      img: product11,
      price: "16000",
      color: "from-slate-900 to-black",
      shadow: "shadow-lg shadow-black",
    },
    {
      id: "0M0x12",
      title: "Hyper Zoom Max",
      text: "Running Shoes",
      rating: "5+",
      btn: "Buy Now",
      img: product8,
      price: "12000",
      color: "from-blue-900 to-blue-500",
      shadow: "shadow-lg shadow-blue-500",
    },
  ],
};

const story = {
  title: "Top Stories",
  news: [
    {
      title: "Redefining Court Style",
      text: "This season brings a fresh twist to classic court silhouettes, merging timeless structure with bold, energetic flair perfect for everyday movement.",
      img: "https://sneakernews.com/wp-content/uploads/2022/09/air-jordan-37-low.jpg?w=540&h=380&crop=1",
     
    },
    {
      title: "Autumn Vibes, Footwear Edition",
      text: "Inspired by crisp leaves and cozy layers, this new release captures the essence of fall in warm tones and textured comfort.",
      img: "https://sneakernews.com/wp-content/uploads/2022/09/nike-zoom-freak-4-ironstone-orange-trance-cobblestone-sail-dj6149-003-2.jpg?w=540&h=380&crop=1",
      
     
    },
    {
      title: "Future Meets Function",
      text: "In a world of speed and utility, this design blends modern aesthetics with performance-ready build — ideal for the movers and doers.",
      img: "https://sneakernews.com/wp-content/uploads/2022/09/Nike-Air-Max-Plus-FB3358-001-2.jpg?w=540&h=380&crop=1",
      
    },
    {
      title: "Yellow Hues in Urban Mood",
      text: "A striking color story rooted in vintage palettes, this drop brings a confident edge to classic city wear with a sun-kissed twist.",
      img: "https://sneakernews.com/wp-content/uploads/2022/03/yellow-toe-jordan-1-release-date-2.jpg",
     
     
    },
    {
      title: "Design With a Pulse",
      text: "Crafted with rhythm in mind, this silhouette echoes the energy of movement with responsive soles and a sleek, streamlined profile.",
      img: "https://sneakernews.com/wp-content/uploads/2022/09/nike-zoom-gt-cut-2-release-date.jpg?w=540&h=380&crop=1",
     
    },
    {
      title: "A Historic First in Sport",
      text: "Celebrating athletes breaking boundaries, this release honors strength, skill, and a new era of design with purpose.",
      img: "https://sneakernews.com/wp-content/uploads/2022/09/puma-stewie-1-quiet-fire-breanna-stewart-release-date-lead.jpg?w=540&h=380&crop=1",
     
    },
    {
      title: "Minimal Meets Magnetic",
      text: "Simplicity reigns supreme in this drop, combining bold color blocking with smooth transitions that speak to modern restraint.",
      img: "https://sneakernews.com/wp-content/uploads/2022/09/Nike-Air-Force-1-Black-Yellow-FB7162-081-8.jpg?w=540&h=380&crop=1",
   
     
    },
    {
      title: "Icon Meets Pop Culture",
      text: "Beloved characters collide with classic design in this cheerful release that brings a smile with every step.",
      img: "https://sneakernews.com/wp-content/uploads/2022/09/hello-kitty-adidas-superstar-GW7168-2.jpg?w=540&h=380&crop=1",
   
     
    },
    {
      title: "Dark Mode Vibes",
      text: "Sleek and mysterious, this all-black drop adds electric blue highlights for a look that owns both daylight and nightlife.",
      img: "https://sneakernews.com/wp-content/uploads/2022/09/nike-air-force-1-low-worldwide-black-royal-fb1840-001-lead.jpg?w=540&h=380&crop=1",
 
      },
  ],
};



const footerAPI = {
  titles: [ {title: "About Nike"},{title: "Get Help"},{title: "Company"} ],
  links: [
    [
      {link: "News"},
      {link: "Careers"},
      {link: "Investors"},
      {link: "Prupose"},
      {link: "Sustainability"},
    ],
    [
      {link: "Order Status"},
      {link: "Shipping & Delivery"},
      {link: "Payment Options"},
      {link: "Gift Card Balance"},
      {link: "Contact Us"},
      {link: "FAQ"},
      {link: "Blog"},
    ],
    [
      {link: "Gift Cards"},
      {link: "Promotions"},
      {link: "Find A Store"},
      {link: "Signup"},
      {link: "Nike Jouneral"},
      {link: "Send Us Feeback"},
    ],
  ]
};


export { heroapi, footerAPI, story, sneaker, highlight, toprateslaes, popularsales };
