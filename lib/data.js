import banner from "@/public/banner.jpg";
import tractor from "@/public/tractor.jpg";
import facebook from "@/public/facebook.svg";
import instagram from "@/public/instagram.svg";
import linkedin from "@/public/linkedin.svg";
import twitter from "@/public/twitter.svg";
import farmer1 from "@/public/farmer1.jpg";
import farmer2 from "@/public/farmer2.jpg";
import harvester from "@/public/harvester.jpg";
import mower from "@/public/mower.jpg";
import planter from "@/public/planter.jpg";
import plower from "@/public/plower.jpg";
import powerSprayer from "@/public/power_sprayer.png";
import sprayPump from "@/public/spray_pump.jpg";

export const links = [
  {
    name: "Home",
    hash: "/",
  },
  {
    name: "Browse Equipments",
    hash: "/browse",
  },
  {
    name: "How it Works",
    hash: "/how-it-works",
  },
];

export const featuredEquipments = [
  {
    id: 1,
    image: tractor,
    name: "Bulldozer",
    description:
      "A powerful and versatile tractor designed for various agricultural tasks. Equipped with advanced features for enhanced efficiency.",
    price: "₹1499",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: 2,
    image: harvester,
    name: "Harvester",
    description:
      "A powerful and versatile harvester designed for various agricultural tasks. Equipped with advanced features for enhanced efficiency.",
    price: "₹1299",
    rating: "⭐⭐⭐⭐",
  },
  {
    id: 3,
    image: plower,
    name: "Plower",
    description:
      "A powerful and versatile plower designed for various agricultural tasks. Equipped with advanced features for enhanced efficiency.",
    price: "₹649",
    rating: "⭐⭐",
  },
  {
    id: 4,
    image: mower,
    name: "Mower",
    description:
      "A powerful and versatile mower designed for various agricultural tasks. Equipped with advanced features for enhanced efficiency.",
    price: "₹799",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: 5,
    image: planter,
    name: "Planter",
    description:
      "A powerful and versatile planter designed for various agricultural tasks. Equipped with advanced features for enhanced efficiency.",
    price: "₹1099",
    rating: "⭐⭐⭐⭐",
  },
  {
    id: 6,
    image: powerSprayer,
    name: "Power-Sprayer",
    description:
      "A versatile power sprayer designed for various agricultural tasks. Equipped with advanced features for enhanced efficiency.",
    price: "₹499",
    rating: "⭐⭐⭐",
  },
  {
    id: 7,
    image: sprayPump,
    name: "Spray-Pump",
    description:
      "A powerful and versatile tractor designed for various agricultural tasks. Equipped with advanced features for enhanced efficiency.",
    price: "₹999",
    rating: "⭐⭐⭐⭐⭐",
  },
];
export const footerLinks = [
  {
    name: "How It Works",
    href: "/how-it-works",
  },
  {
    name: "FAQ",
    href: "/faq",
  },
  {
    name: "Contact Us",
    href: "/contact-us",
  },
  {
    name: "Terms of Service",
    href: "/terms",
  },
  {
    name: "Privacy Policy",
    href: "/privacy",
  },
];

export const footerIcons = [
  {
    name: "facebook",
    href: "#",
    imageUrl: facebook,
  },
  {
    name: "instagram",
    href: "#",
    imageUrl: instagram,
  },
  {
    name: "linkedin",
    href: "#",
    imageUrl: linkedin,
  },
  {
    name: "twitter",
    href: "#",
    imageUrl: twitter,
  },
];

export const testimonials = [
  {
    imageUrl: farmer1,
    text: "Renting equipment from farmGearX has been a game-changer for my organic vegetable farm. The variety and quality of tools available made my planting season more efficient. I highly recommend this platform to farmers.",
    farmerName: "John, Organic Vegetable Farmer",
  },
  {
    imageUrl: farmer2,
    text: "As a dairy farmer, finding the right equipment at the right time is crucial. farmGearX made it possible for me to access high-quality machinery when needed. The seamless process and excellent service have saved me both time and resources.",
    farmerName: "Williams, Dairy Farmer",
  },
  {
    imageUrl: farmer1,
    text: "Being a wheat crop grower, I often require specialized equipment. farmGearX made it easy for me to connect with equipment owners, and the booking process was a breeze. It is a valuable resource for any farmer seeking reliable tools.",
    farmerName: "Carlos, Wheat Crop Grower",
  },
  {
    imageUrl: farmer2,
    text: "Renting equipment from farmGearX has been a game-changer for my organic vegetable farm. The variety and quality of tools available made my planting season more efficient. I highly recommend this platform to farmers.",
    farmerName: "Kweku, Organic Vegetable Farmer",
  },
];
export const bannerImg = banner;
