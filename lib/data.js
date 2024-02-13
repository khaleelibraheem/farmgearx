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
    name: "Tractor",
    model: "GreenHarvest 5000",
    description:
      "The GreenHarvest 5000 is a versatile tractor designed for various agricultural tasks. With its powerful engine and advanced features, it provides optimal performance for plowing, cultivating, and towing.",
    price: "₹1499",
    rating: "⭐⭐⭐⭐⭐",
    specifications: [
      "Powerful engine",
      "Multi-functional capabilities",
      "Reliable towing capacity",
      "Advanced technology features",
      "Comfortable operator cabin",
    ],
  },
  {
    id: 2,
    image: harvester,
    name: "Harvester",
    model: "HarvestKing 8000",
    description:
      "The HarvestKing 8000 is a state-of-the-art harvester suitable for various crops. Its automated harvesting system and adjustable settings make it a reliable choice for efficiently gathering crops during the harvest season.",
    price: "₹1299",
    rating: "⭐⭐⭐⭐",
    specifications: [
      "Automated harvesting system",
      "Adjustable settings for versatility",
      "Efficient crop gathering",
      "Modern harvesting technology",
      "Reliable performance during harvest",
    ],
  },
  {
    id: 3,
    image: plower,
    name: "Plower",
    model: "EcoPlow X-500",
    description:
      "The EcoPlow X-500 is an environmentally friendly plower designed for soil preparation. With sustainable features and adjustable depth settings, it ensures efficient plowing while minimizing environmental impact.",
    price: "₹649",
    rating: "⭐⭐⭐",
    specifications: [
      "Sustainable design features",
      "Adjustable depth settings",
      "Efficient soil preparation",
      "Reduced environmental impact",
      "Modern plowing technology",
    ],
  },
  {
    id: 4,
    image: mower,
    name: "Mower",
    model: "TurboMow Pro 300",
    description:
      "The TurboMow Pro 300 is a professional-grade mower suitable for large fields and lawns. Its cutting-edge technology ensures efficient grass cutting, making it an ideal choice for landscaping and maintaining open spaces.",
    price: "₹799",
    rating: "⭐⭐⭐⭐⭐",
    specifications: [
      "Efficient grass cutting",
      "Wide cutting deck",
      "Adjustable cutting height",
      "Robust build for durability",
      "Suitable for landscaping tasks",
    ],
  },
  {
    id: 5,
    image: planter,
    name: "Planter",
    model: "SeedMaster Plus 600",
    description:
      "The SeedMaster Plus 600 is an advanced planter designed for precise seed placement and spacing. Its cutting-edge technology ensures uniform planting, contributing to optimal crop growth and yield.",
    price: "₹1099",
    rating: "⭐⭐⭐⭐",
    specifications: [
      "Precise seed placement",
      "Uniform seed spacing",
      "Cutting-edge planting technology",
      "Optimal crop growth support",
      "High planting efficiency",
    ],
  },
  {
    id: 6,
    image: powerSprayer,
    name: "Power Sprayer",
    model: "PowerSpray Master 2000",
    description:
      "The PowerSpray Master 2000 is a high-capacity power sprayer equipped for precision spraying in agriculture. With adjustable settings and a robust pumping system, it offers efficient coverage for pest control and crop treatment.",
    price: "₹499",
    rating: "⭐⭐⭐",
    specifications: [
      "Precision spraying capabilities",
      "Adjustable spray settings",
      "Robust pumping system",
      "Efficient pest control",
      "Crop treatment functionality",
    ],
  },
  {
    id: 7,
    image: sprayPump,
    name: "Spray Pump",
    model: "AquaSpray Pro 400",
    description:
      "The AquaSpray Pro 400 is a powerful spray pump designed for irrigation and crop hydration. With a robust pumping mechanism and adjustable pressure settings, it provides reliable water distribution for enhanced crop growth.",
    price: "₹999",
    rating: "⭐⭐⭐⭐⭐",
    specifications: [
      "Robust pumping mechanism",
      "Adjustable pressure settings",
      "Reliable water distribution",
      "Enhanced crop hydration",
      "Suitable for various irrigation tasks",
    ],
  },
];

export const equipments = [
  {
    id: 1,
    image: tractor,
    name: "Tractor",
    model: "GreenHarvest 5000",
    description:
      "The GreenHarvest 5000 is a versatile tractor designed for various agricultural tasks. With its powerful engine and advanced features, it provides optimal performance for plowing, cultivating, and towing.",
    price: "₹1499",
    rating: "⭐⭐⭐⭐⭐",
    specifications: [
      "Powerful engine",
      "Multi-functional capabilities",
      "Reliable towing capacity",
      "Advanced technology features",
      "Comfortable operator cabin",
    ],
  },
  {
    id: 2,
    image: tractor,
    name: "Tractor",
    model: "AgriMaster Pro 700",
    description:
      "AgriMaster Pro 700 is a powerful tractor designed for heavy-duty tasks. With precision control, high towing capacity, and modern features, it ensures optimal performance in diverse farming operations.",
    price: "₹1699",
    rating: "⭐⭐⭐⭐⭐",
    specifications: [
      "Heavy-duty engine",
      "Advanced control features",
      "High towing capacity",
      "Modern efficiency features",
      "Ergonomic and comfortable design",
    ],
  },
  {
    id: 3,
    image: tractor,
    name: "Tractor",
    model: "EcoTractor X-3000",
    description:
      "EcoTractor X-3000 combines sustainability with functionality. Its eco-friendly design, efficient engine, and versatile capabilities make it an environmentally conscious choice for modern agricultural practices.",
    price: "₹1299",
    rating: "⭐⭐⭐⭐⭐",
    specifications: [
      "Eco-friendly design features",
      "Fuel-efficient and powerful",
      "Multi-functional capabilities",
      "Modern technology integration",
      "Comfortable operator cabin",
    ],
  },
  {
    id: 4,
    image: harvester,
    name: "Harvester",
    model: "HarvestKing 8000",
    description:
      "The HarvestKing 8000 is a state-of-the-art harvester suitable for various crops. Its automated harvesting system and adjustable settings make it a reliable choice for efficiently gathering crops during the harvest season.",
    price: "₹1299",
    rating: "⭐⭐⭐⭐",
    specifications: [
      "Automated harvesting system",
      "Adjustable settings for versatility",
      "Efficient crop gathering",
      "Modern harvesting technology",
      "Reliable performance during harvest",
    ],
  },
  {
    id: 5,
    image: harvester,
    name: "Harvester",
    model: "CropMaster Pro 900",
    description:
      "CropMaster Pro 900 is designed for optimal crop harvesting. Its advanced features, high-speed performance, and efficient harvesting system make it a top choice for farmers seeking productivity and reliability.",
    price: "₹1299",
    rating: "⭐⭐⭐⭐",
    specifications: [
      "Cutting-edge harvesting technology",
      "Fast and efficient operation",
      "Ensures efficient crop gathering",
      "Suitable for various crops",
      "Reliable performance during harvest",
    ],
  },
  {
    id: 6,
    image: harvester,
    name: "Harvester",
    model: "AgriHarvest X-6000",
    description:
      "AgriHarvest X-6000 is a robust harvester for modern agriculture. With its powerful engine, advanced technology, and versatile capabilities, it ensures efficient crop harvesting and reliable performance in diverse fields.",
    price: "₹1299",
    rating: "⭐⭐⭐⭐",
    specifications: [
      "High-performance engine",
      "Modern technology features",
      "Multi-functional capabilities",
      "Ensures efficient crop gathering",
      "Reliable performance during harvest",
    ],
  },
  {
    id: 7,
    image: plower,
    name: "Plower",
    model: "EcoPlow X-500",
    description:
      "The EcoPlow X-500 is an environmentally friendly plower designed for soil preparation. With sustainable features and adjustable depth settings, it ensures efficient plowing while minimizing environmental impact.",
    price: "₹649",
    rating: "⭐⭐⭐",
    specifications: [
      "Sustainable design features",
      "Adjustable depth settings",
      "Efficient soil preparation",
      "Reduced environmental impact",
      "Modern plowing technology",
    ],
  },
  {
    id: 8,
    image: plower,
    name: "Plower",
    model: "PowerPlow Pro 800",
    description:
      "PowerPlow Pro 800 is a powerful plower for heavy-duty soil preparation. With its robust design, adjustable features, and efficient performance, it ensures optimal soil cultivation in diverse agricultural settings.",
    price: "₹649",
    rating: "⭐⭐⭐",
    specifications: [
      "Robust build for durability",
      "Customizable settings for various soils",
      "Ensures optimal soil cultivation",
      "Suitable for various agricultural settings",
      "Reliable performance during plowing",
    ],
  },
  {
    id: 9,
    image: plower,
    name: "Plower",
    model: "PrecisionTill X-750",
    description:
      "PrecisionTill X-750 excels in precision soil preparation. With advanced features, adjustable depth settings, and modern technology, it ensures efficient and accurate soil cultivation, supporting optimal crop growth.",
    price: "₹649",
    rating: "⭐⭐⭐",
    specifications: [
      "Accurate and efficient cultivation",
      "Customizable settings for various soils",
      "Modern technology features",
      "Ensures optimal soil cultivation",
      "Suitable for various agricultural settings",
    ],
  },
  {
    id: 10,
    image: mower,
    name: "Mower",
    model: "TurboMow Pro 300",
    description:
      "The TurboMow Pro 300 is a professional-grade mower suitable for large fields and lawns. Its cutting-edge technology ensures efficient grass cutting, making it an ideal choice for landscaping and maintaining open spaces.",
    price: "₹799",
    rating: "⭐⭐⭐⭐⭐",
    specifications: [
      "Efficient grass cutting",
      "Wide cutting deck",
      "Adjustable cutting height",
      "Robust build for durability",
      "Suitable for landscaping tasks",
    ],
  },
  {
    id: 11,
    image: mower,
    name: "Mower",
    model: "PrecisionTrim X-600",
    description:
      "PrecisionTrim X-600 offers precise trimming and cutting for meticulous landscaping. With its advanced features, adjustable settings, and ergonomic design, it's a reliable choice for achieving precision in lawn maintenance.",
    price: "₹799",
    rating: "⭐⭐⭐⭐⭐",
    specifications: [
      "Precise trimming capabilities",
      "Advanced cutting features",
      "Customizable height and settings",
      "User-friendly and ergonomic design",
      "Durable build for longevity",
    ],
  },
  {
    id: 12,
    image: mower,
    name: "Mower",
    model: "GreenScape Master 800",
    description:
      "GreenScape Master 800 is designed for expansive green spaces. Its wide cutting swath, efficient grass disposal, and high-speed performance make it an excellent choice for professional landscapers and large property owners.",
    price: "₹799",
    rating: "⭐⭐⭐⭐⭐",
    specifications: [
      "Expansive cutting coverage",
      "Quick and efficient grass disposal",
      "Fast and powerful operation",
      "Suitable for professional landscapers",
      "Versatile applications for large properties",
    ],
  },
  {
    id: 13,
    image: planter,
    name: "Planter",
    model: "SeedMaster Plus 600",
    description:
      "The SeedMaster Plus 600 is an advanced planter designed for precise seed placement and spacing. Its cutting-edge technology ensures uniform planting, contributing to optimal crop growth and yield.",
    price: "₹1099",
    rating: "⭐⭐⭐⭐",
    specifications: [
      "Precise seed placement",
      "Uniform seed spacing",
      "Cutting-edge planting technology",
      "Optimal crop growth support",
      "High planting efficiency",
    ],
  },
  {
    id: 14,
    image: planter,
    name: "Planter",
    model: "PrecisionPlanter X-700",
    description:
      "PrecisionPlanter X-700 excels in precision farming. Its advanced features, adjustable settings, and modern technology make it a reliable choice for farmers seeking accuracy and efficiency in seed planting.",
    price: "₹1099",
    rating: "⭐⭐⭐⭐",
    specifications: [
      "Accurate and precise planting",
      "Customizable settings for various crops",
      "Modern technology features",
      "Ensures efficiency in seed placement",
      "Suitable for various planting needs",
    ],
  },
  {
    id: 15,
    image: planter,
    name: "Planter",
    model: "EcoSeedTech 3000",
    description:
      "EcoSeedTech 3000 combines sustainability with precision planting. Its eco-friendly design, efficient seed placement, and versatile capabilities make it an environmentally conscious choice for modern agriculture.",
    price: "₹1099",
    rating: "⭐⭐⭐⭐",
    specifications: [
      "Eco-friendly design features",
      "Precision in seed planting",
      "Multi-functional capabilities",
      "Modern technology integration",
      "Easy to operate and maintain",
    ],
  },
  {
    id: 16,
    image: powerSprayer,
    name: "Power Sprayer",
    model: "PowerSpray Master 2000",
    description:
      "The PowerSpray Master 2000 is a high-capacity power sprayer equipped for precision spraying in agriculture. With adjustable settings and a robust pumping system, it offers efficient coverage for pest control and crop treatment.",
    price: "₹499",
    rating: "⭐⭐⭐",
    specifications: [
      "Precision spraying capabilities",
      "Adjustable spray settings",
      "Robust pumping system",
      "Efficient pest control",
      "Crop treatment functionality",
    ],
  },
  {
    id: 17,
    image: powerSprayer,
    name: "Power Sprayer",
    model: "AgriSpray Pro 500",
    description:
      "AgriSpray Pro 500 is a reliable companion for agricultural spraying needs. With its advanced features, high-capacity tank, and precise spraying capabilities, it ensures effective pest control and optimal crop health.",
    price: "₹499",
    rating: "⭐⭐⭐",
    specifications: [
      "Cutting-edge spraying technology",
      "Large tank for extended use",
      "Precise and even spraying",
      "Effective pest control capabilities",
      "Supports optimal crop health",
    ],
  },
  {
    id: 18,
    image: powerSprayer,
    name: "Power Sprayer",
    model: "EcoSprayer X-700",
    description:
      "EcoSprayer X-700 combines efficiency with sustainability. Its eco-friendly design, adjustable spray settings, and modern technology make it an environmentally conscious choice for precise and effective agricultural spraying.",
    price: "₹499",
    rating: "⭐⭐⭐",
    specifications: [
      "Eco-friendly design features",
      "Customizable spray settings",
      "Precise and even spraying",
      "Modern technology integration",
      "Supports optimal crop health",
    ],
  },
  {
    id: 19,
    image: sprayPump,
    name: "Spray Pump",
    model: "AquaSpray Pro 400",
    description:
      "The AquaSpray Pro 400 is a powerful spray pump designed for irrigation and crop hydration. With a robust pumping mechanism and adjustable pressure settings, it provides reliable water distribution for enhanced crop growth.",
    price: "₹999",
    rating: "⭐⭐⭐⭐⭐",
    specifications: [
      "Robust pumping mechanism",
      "Adjustable pressure settings",
      "Reliable water distribution",
      "Enhanced crop hydration",
      "Suitable for various irrigation tasks",
    ],
  },
  {
    id: 20,
    image: sprayPump,
    name: "Spray Pump",
    model: "AgriMist Pro 600",
    description:
      "AgriMist Pro 600 is a high-capacity misting pump for agricultural applications. With advanced features, adjustable mist settings, and efficient misting capabilities, it ensures effective crop protection and pest control.",
    price: "₹999",
    rating: "⭐⭐⭐⭐⭐",
    specifications: [
      "Large capacity for extended use",
      "Customizable misting options",
      "Cutting-edge misting technology",
      "Effective crop protection and pest control",
      "Suitable for various agricultural applications",
    ],
  },
  {
    id: 21,
    image: sprayPump,
    name: "Spray Pump",
    model: "EcoSprinkle X-850",
    description:
      "EcoSprinkle X-850 combines efficiency with sustainability in irrigation. With eco-friendly design features, adjustable sprinkle settings, and modern technology, it ensures environmentally conscious water distribution for optimal crop growth.",
    price: "₹999",
    rating: "⭐⭐⭐⭐⭐",
    specifications: [
      "Eco-friendly design features",
      "Customizable sprinkle options",
      "Modern technology features",
      "Supports optimal crop growth",
      "Suitable for various irrigation tasks",
    ],
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
