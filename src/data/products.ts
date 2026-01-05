import ankaraBlazerMen from "@/assets/products/ankara-blazer-men.jpg";
import ankaraDressWomen from "@/assets/products/ankara-dress-women.jpg";
import ankaraSenator from "@/assets/products/ankara-senator.jpg";
import ankaraPeplumSet from "@/assets/products/ankara-peplum-set.jpg";
import ankaraAgbada from "@/assets/products/ankara-agbada.jpg";
import ankaraJumpsuit from "@/assets/products/ankara-jumpsuit.jpg";

export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  sizes: string[];
}

const images = [ankaraBlazerMen, ankaraDressWomen, ankaraSenator, ankaraPeplumSet, ankaraAgbada, ankaraJumpsuit];

export const products: Product[] = [
  // Men's Ankara Collection (25 items)
  { id: "1", name: "Royal Ankara Blazer", price: 899, category: "Men's Ankara", image: ankaraBlazerMen, sizes: ["S", "M", "L", "XL"] },
  { id: "2", name: "Geometric Print Blazer", price: 849, category: "Men's Ankara", image: ankaraBlazerMen, sizes: ["S", "M", "L", "XL"] },
  { id: "3", name: "Sunset Orange Blazer", price: 799, category: "Men's Ankara", image: ankaraBlazerMen, sizes: ["M", "L", "XL", "XXL"] },
  { id: "4", name: "Tribal Pattern Jacket", price: 749, category: "Men's Ankara", image: ankaraBlazerMen, sizes: ["S", "M", "L"] },
  { id: "5", name: "Modern Ankara Sport Coat", price: 699, category: "Men's Ankara", image: ankaraBlazerMen, sizes: ["S", "M", "L", "XL"] },
  { id: "6", name: "Classic Kente Blazer", price: 999, category: "Men's Ankara", image: ankaraBlazerMen, sizes: ["M", "L", "XL"] },
  { id: "7", name: "Bold Print Dinner Jacket", price: 1099, category: "Men's Ankara", image: ankaraBlazerMen, sizes: ["S", "M", "L", "XL"] },
  { id: "8", name: "Vibrant Wax Print Blazer", price: 879, category: "Men's Ankara", image: ankaraBlazerMen, sizes: ["S", "M", "L"] },
  { id: "9", name: "Executive Ankara Suit", price: 1299, category: "Men's Ankara", image: ankaraBlazerMen, sizes: ["S", "M", "L", "XL", "XXL"] },
  { id: "10", name: "Fusion Style Blazer", price: 829, category: "Men's Ankara", image: ankaraBlazerMen, sizes: ["M", "L", "XL"] },
  { id: "11", name: "Heritage Print Jacket", price: 769, category: "Men's Ankara", image: ankaraBlazerMen, sizes: ["S", "M", "L", "XL"] },
  { id: "12", name: "Contemporary Ankara Coat", price: 949, category: "Men's Ankara", image: ankaraBlazerMen, sizes: ["S", "M", "L"] },
  { id: "13", name: "Dashiki Inspired Blazer", price: 799, category: "Men's Ankara", image: ankaraBlazerMen, sizes: ["M", "L", "XL", "XXL"] },
  { id: "14", name: "Formal Ankara Tuxedo", price: 1499, category: "Men's Ankara", image: ankaraBlazerMen, sizes: ["S", "M", "L", "XL"] },
  { id: "15", name: "Casual Friday Blazer", price: 649, category: "Men's Ankara", image: ankaraBlazerMen, sizes: ["S", "M", "L"] },
  { id: "16", name: "Wedding Guest Blazer", price: 1199, category: "Men's Ankara", image: ankaraBlazerMen, sizes: ["M", "L", "XL"] },
  { id: "17", name: "Slim Fit Ankara Jacket", price: 749, category: "Men's Ankara", image: ankaraBlazerMen, sizes: ["S", "M", "L", "XL"] },
  { id: "18", name: "Double Breasted Ankara", price: 899, category: "Men's Ankara", image: ankaraBlazerMen, sizes: ["M", "L", "XL"] },
  { id: "19", name: "Mandarin Collar Jacket", price: 679, category: "Men's Ankara", image: ankaraBlazerMen, sizes: ["S", "M", "L", "XL"] },
  { id: "20", name: "Summer Ankara Blazer", price: 599, category: "Men's Ankara", image: ankaraBlazerMen, sizes: ["S", "M", "L"] },
  { id: "21", name: "Premium Wax Print Suit", price: 1399, category: "Men's Ankara", image: ankaraBlazerMen, sizes: ["S", "M", "L", "XL", "XXL"] },
  { id: "22", name: "Vintage Style Blazer", price: 849, category: "Men's Ankara", image: ankaraBlazerMen, sizes: ["M", "L", "XL"] },
  { id: "23", name: "Party Ankara Jacket", price: 799, category: "Men's Ankara", image: ankaraBlazerMen, sizes: ["S", "M", "L", "XL"] },
  { id: "24", name: "Office Ankara Blazer", price: 729, category: "Men's Ankara", image: ankaraBlazerMen, sizes: ["S", "M", "L"] },
  { id: "25", name: "Celebration Ankara Suit", price: 1249, category: "Men's Ankara", image: ankaraBlazerMen, sizes: ["M", "L", "XL", "XXL"] },

  // Women's Ankara Collection (30 items)
  { id: "26", name: "Amara Maxi Gown", price: 1299, category: "Women's Ankara", image: ankaraDressWomen, sizes: ["XS", "S", "M", "L"] },
  { id: "27", name: "Purple Royalty Dress", price: 1199, category: "Women's Ankara", image: ankaraDressWomen, sizes: ["S", "M", "L", "XL"] },
  { id: "28", name: "Evening Elegance Gown", price: 1499, category: "Women's Ankara", image: ankaraDressWomen, sizes: ["XS", "S", "M", "L"] },
  { id: "29", name: "Floral Print Maxi", price: 899, category: "Women's Ankara", image: ankaraDressWomen, sizes: ["S", "M", "L"] },
  { id: "30", name: "Ball Gown Ankara", price: 1799, category: "Women's Ankara", image: ankaraDressWomen, sizes: ["XS", "S", "M", "L"] },
  { id: "31", name: "Cocktail Ankara Dress", price: 749, category: "Women's Ankara", image: ankaraDressWomen, sizes: ["S", "M", "L", "XL"] },
  { id: "32", name: "Mermaid Style Gown", price: 1399, category: "Women's Ankara", image: ankaraDressWomen, sizes: ["XS", "S", "M"] },
  { id: "33", name: "A-Line Ankara Dress", price: 699, category: "Women's Ankara", image: ankaraDressWomen, sizes: ["S", "M", "L", "XL"] },
  { id: "34", name: "Wrap Style Maxi", price: 849, category: "Women's Ankara", image: ankaraDressWomen, sizes: ["XS", "S", "M", "L"] },
  { id: "35", name: "Off-Shoulder Gown", price: 1099, category: "Women's Ankara", image: ankaraDressWomen, sizes: ["S", "M", "L"] },
  { id: "36", name: "Adeola Peplum Set", price: 749, category: "Women's Ankara", image: ankaraPeplumSet, sizes: ["XS", "S", "M", "L"] },
  { id: "37", name: "Classic Peplum Blouse", price: 449, category: "Women's Ankara", image: ankaraPeplumSet, sizes: ["S", "M", "L", "XL"] },
  { id: "38", name: "Peplum Pencil Skirt Set", price: 699, category: "Women's Ankara", image: ankaraPeplumSet, sizes: ["XS", "S", "M", "L"] },
  { id: "39", name: "Ruffle Peplum Top", price: 399, category: "Women's Ankara", image: ankaraPeplumSet, sizes: ["S", "M", "L"] },
  { id: "40", name: "Corporate Peplum Suit", price: 899, category: "Women's Ankara", image: ankaraPeplumSet, sizes: ["XS", "S", "M", "L", "XL"] },
  { id: "41", name: "Teal Ankara Jumpsuit", price: 649, category: "Women's Ankara", image: ankaraJumpsuit, sizes: ["XS", "S", "M", "L"] },
  { id: "42", name: "Wide Leg Jumpsuit", price: 699, category: "Women's Ankara", image: ankaraJumpsuit, sizes: ["S", "M", "L"] },
  { id: "43", name: "Palazzo Ankara Jumpsuit", price: 749, category: "Women's Ankara", image: ankaraJumpsuit, sizes: ["XS", "S", "M", "L"] },
  { id: "44", name: "Belted Ankara Romper", price: 549, category: "Women's Ankara", image: ankaraJumpsuit, sizes: ["S", "M", "L", "XL"] },
  { id: "45", name: "Sleeveless Jumpsuit", price: 599, category: "Women's Ankara", image: ankaraJumpsuit, sizes: ["XS", "S", "M"] },
  { id: "46", name: "Cape Style Jumpsuit", price: 799, category: "Women's Ankara", image: ankaraJumpsuit, sizes: ["S", "M", "L", "XL"] },
  { id: "47", name: "Cropped Ankara Set", price: 649, category: "Women's Ankara", image: ankaraPeplumSet, sizes: ["XS", "S", "M", "L"] },
  { id: "48", name: "High Low Ankara Dress", price: 899, category: "Women's Ankara", image: ankaraDressWomen, sizes: ["S", "M", "L"] },
  { id: "49", name: "Bardot Ankara Gown", price: 999, category: "Women's Ankara", image: ankaraDressWomen, sizes: ["XS", "S", "M", "L"] },
  { id: "50", name: "Asymmetric Hem Dress", price: 849, category: "Women's Ankara", image: ankaraDressWomen, sizes: ["S", "M", "L", "XL"] },
  { id: "51", name: "Tiered Maxi Dress", price: 949, category: "Women's Ankara", image: ankaraDressWomen, sizes: ["XS", "S", "M", "L"] },
  { id: "52", name: "Halter Neck Gown", price: 1149, category: "Women's Ankara", image: ankaraDressWomen, sizes: ["S", "M", "L"] },
  { id: "53", name: "Bell Sleeve Dress", price: 799, category: "Women's Ankara", image: ankaraDressWomen, sizes: ["XS", "S", "M", "L", "XL"] },
  { id: "54", name: "Fitted Ankara Midi", price: 649, category: "Women's Ankara", image: ankaraDressWomen, sizes: ["S", "M", "L"] },
  { id: "55", name: "Sweetheart Neckline Gown", price: 1299, category: "Women's Ankara", image: ankaraDressWomen, sizes: ["XS", "S", "M", "L"] },

  // Men's Traditional (25 items)
  { id: "56", name: "Emerald Senator Set", price: 1199, category: "Men's Traditional", image: ankaraSenator, sizes: ["S", "M", "L", "XL", "XXL"] },
  { id: "57", name: "Gold Embroidered Senator", price: 1399, category: "Men's Traditional", image: ankaraSenator, sizes: ["M", "L", "XL"] },
  { id: "58", name: "Classic Green Senator", price: 999, category: "Men's Traditional", image: ankaraSenator, sizes: ["S", "M", "L", "XL"] },
  { id: "59", name: "Premium Senator Outfit", price: 1299, category: "Men's Traditional", image: ankaraSenator, sizes: ["M", "L", "XL", "XXL"] },
  { id: "60", name: "Luxury Brocade Senator", price: 1499, category: "Men's Traditional", image: ankaraSenator, sizes: ["S", "M", "L", "XL"] },
  { id: "61", name: "Wedding Senator Set", price: 1599, category: "Men's Traditional", image: ankaraSenator, sizes: ["M", "L", "XL"] },
  { id: "62", name: "Casual Senator Style", price: 799, category: "Men's Traditional", image: ankaraSenator, sizes: ["S", "M", "L", "XL", "XXL"] },
  { id: "63", name: "Formal Senator Attire", price: 1099, category: "Men's Traditional", image: ankaraSenator, sizes: ["M", "L", "XL"] },
  { id: "64", name: "Silk Senator Outfit", price: 1399, category: "Men's Traditional", image: ankaraSenator, sizes: ["S", "M", "L", "XL"] },
  { id: "65", name: "Velvet Senator Set", price: 1249, category: "Men's Traditional", image: ankaraSenator, sizes: ["M", "L", "XL"] },
  { id: "66", name: "Royal Blue Agbada", price: 1599, category: "Men's Traditional", image: ankaraAgbada, sizes: ["S", "M", "L"] },
  { id: "67", name: "Grand Agbada Set", price: 1899, category: "Men's Traditional", image: ankaraAgbada, sizes: ["M", "L", "XL", "XXL"] },
  { id: "68", name: "Ceremonial Agbada", price: 2199, category: "Men's Traditional", image: ankaraAgbada, sizes: ["S", "M", "L", "XL"] },
  { id: "69", name: "Gold Thread Agbada", price: 1999, category: "Men's Traditional", image: ankaraAgbada, sizes: ["M", "L", "XL"] },
  { id: "70", name: "King's Agbada Robe", price: 2499, category: "Men's Traditional", image: ankaraAgbada, sizes: ["S", "M", "L", "XL", "XXL"] },
  { id: "71", name: "Classic Navy Agbada", price: 1699, category: "Men's Traditional", image: ankaraAgbada, sizes: ["M", "L", "XL"] },
  { id: "72", name: "Traditional Chieftain Set", price: 2299, category: "Men's Traditional", image: ankaraAgbada, sizes: ["S", "M", "L", "XL"] },
  { id: "73", name: "Embroidered Kaftan", price: 1199, category: "Men's Traditional", image: ankaraSenator, sizes: ["M", "L", "XL", "XXL"] },
  { id: "74", name: "Luxury Dashiki Set", price: 899, category: "Men's Traditional", image: ankaraSenator, sizes: ["S", "M", "L", "XL"] },
  { id: "75", name: "African Print Kaftan", price: 999, category: "Men's Traditional", image: ankaraSenator, sizes: ["M", "L", "XL"] },
  { id: "76", name: "Buba & Sokoto Set", price: 749, category: "Men's Traditional", image: ankaraSenator, sizes: ["S", "M", "L", "XL", "XXL"] },
  { id: "77", name: "Aso Oke Agbada", price: 2799, category: "Men's Traditional", image: ankaraAgbada, sizes: ["M", "L", "XL"] },
  { id: "78", name: "Lace Senator Outfit", price: 1349, category: "Men's Traditional", image: ankaraSenator, sizes: ["S", "M", "L", "XL"] },
  { id: "79", name: "Jacquard Senator", price: 1149, category: "Men's Traditional", image: ankaraSenator, sizes: ["M", "L", "XL"] },
  { id: "80", name: "Owambe Special Agbada", price: 2099, category: "Men's Traditional", image: ankaraAgbada, sizes: ["S", "M", "L", "XL", "XXL"] },

  // Women's Traditional (20 items)
  { id: "81", name: "Iro & Buba Set", price: 899, category: "Women's Traditional", image: ankaraPeplumSet, sizes: ["XS", "S", "M", "L"] },
  { id: "82", name: "Lace Iro & Buba", price: 1199, category: "Women's Traditional", image: ankaraPeplumSet, sizes: ["S", "M", "L", "XL"] },
  { id: "83", name: "Aso Ebi Lace Set", price: 1499, category: "Women's Traditional", image: ankaraDressWomen, sizes: ["XS", "S", "M", "L"] },
  { id: "84", name: "George Wrapper Set", price: 1299, category: "Women's Traditional", image: ankaraDressWomen, sizes: ["S", "M", "L"] },
  { id: "85", name: "Embroidered Kaftan", price: 999, category: "Women's Traditional", image: ankaraDressWomen, sizes: ["XS", "S", "M", "L", "XL"] },
  { id: "86", name: "Boubou Maxi Dress", price: 849, category: "Women's Traditional", image: ankaraDressWomen, sizes: ["S", "M", "L"] },
  { id: "87", name: "Senegalese Boubou", price: 949, category: "Women's Traditional", image: ankaraDressWomen, sizes: ["XS", "S", "M", "L"] },
  { id: "88", name: "Nigerian Lace Gown", price: 1599, category: "Women's Traditional", image: ankaraDressWomen, sizes: ["S", "M", "L", "XL"] },
  { id: "89", name: "Cord Lace Blouse & Wrapper", price: 1399, category: "Women's Traditional", image: ankaraPeplumSet, sizes: ["XS", "S", "M", "L"] },
  { id: "90", name: "French Lace Set", price: 1699, category: "Women's Traditional", image: ankaraDressWomen, sizes: ["S", "M", "L"] },
  { id: "91", name: "Aso Oke Bridal Set", price: 2499, category: "Women's Traditional", image: ankaraDressWomen, sizes: ["XS", "S", "M", "L"] },
  { id: "92", name: "Traditional Wrapper Blouse", price: 799, category: "Women's Traditional", image: ankaraPeplumSet, sizes: ["S", "M", "L", "XL"] },
  { id: "93", name: "Owambe Ready Set", price: 1199, category: "Women's Traditional", image: ankaraDressWomen, sizes: ["XS", "S", "M", "L"] },
  { id: "94", name: "Gele Ready Outfit", price: 1349, category: "Women's Traditional", image: ankaraDressWomen, sizes: ["S", "M", "L"] },
  { id: "95", name: "Engagement Ceremony Set", price: 1899, category: "Women's Traditional", image: ankaraDressWomen, sizes: ["XS", "S", "M", "L", "XL"] },
  { id: "96", name: "Velvet Wrapper Set", price: 1099, category: "Women's Traditional", image: ankaraPeplumSet, sizes: ["S", "M", "L"] },
  { id: "97", name: "Sequence Lace Outfit", price: 1549, category: "Women's Traditional", image: ankaraDressWomen, sizes: ["XS", "S", "M", "L"] },
  { id: "98", name: "Brocade Iro & Buba", price: 1249, category: "Women's Traditional", image: ankaraPeplumSet, sizes: ["S", "M", "L", "XL"] },
  { id: "99", name: "Swiss Lace Ensemble", price: 1799, category: "Women's Traditional", image: ankaraDressWomen, sizes: ["XS", "S", "M"] },
  { id: "100", name: "Traditional Bride Set", price: 2999, category: "Women's Traditional", image: ankaraDressWomen, sizes: ["S", "M", "L"] },

  // More Ankara Styles (20 items)
  { id: "101", name: "Ankara Kimono Jacket", price: 549, category: "Women's Ankara", image: ankaraJumpsuit, sizes: ["S", "M", "L", "XL"] },
  { id: "102", name: "Men's Ankara Shorts Set", price: 449, category: "Men's Ankara", image: ankaraBlazerMen, sizes: ["S", "M", "L", "XL"] },
  { id: "103", name: "Ankara Palazzo Pants", price: 399, category: "Women's Ankara", image: ankaraJumpsuit, sizes: ["XS", "S", "M", "L"] },
  { id: "104", name: "Crop Top & Skirt Set", price: 599, category: "Women's Ankara", image: ankaraPeplumSet, sizes: ["S", "M", "L"] },
  { id: "105", name: "Ankara Bomber Jacket", price: 649, category: "Men's Ankara", image: ankaraBlazerMen, sizes: ["S", "M", "L", "XL", "XXL"] },
  { id: "106", name: "Flare Sleeve Blouse", price: 349, category: "Women's Ankara", image: ankaraPeplumSet, sizes: ["XS", "S", "M", "L"] },
  { id: "107", name: "Ankara Culottes", price: 449, category: "Women's Ankara", image: ankaraJumpsuit, sizes: ["S", "M", "L", "XL"] },
  { id: "108", name: "Men's Ankara Vest", price: 399, category: "Men's Ankara", image: ankaraBlazerMen, sizes: ["S", "M", "L", "XL"] },
  { id: "109", name: "Two-Piece Skirt Set", price: 699, category: "Women's Ankara", image: ankaraPeplumSet, sizes: ["XS", "S", "M", "L"] },
  { id: "110", name: "Ankara Shirt Dress", price: 549, category: "Women's Ankara", image: ankaraDressWomen, sizes: ["S", "M", "L", "XL"] },
  { id: "111", name: "Men's Ankara Polo", price: 299, category: "Men's Ankara", image: ankaraBlazerMen, sizes: ["S", "M", "L", "XL", "XXL"] },
  { id: "112", name: "Ankara Midi Skirt", price: 349, category: "Women's Ankara", image: ankaraPeplumSet, sizes: ["XS", "S", "M", "L"] },
  { id: "113", name: "Tailored Ankara Trousers", price: 449, category: "Men's Ankara", image: ankaraBlazerMen, sizes: ["S", "M", "L", "XL"] },
  { id: "114", name: "Fit & Flare Dress", price: 649, category: "Women's Ankara", image: ankaraDressWomen, sizes: ["S", "M", "L"] },
  { id: "115", name: "Ankara Duster Coat", price: 749, category: "Women's Ankara", image: ankaraJumpsuit, sizes: ["XS", "S", "M", "L", "XL"] },
  { id: "116", name: "Men's Ankara Caftan", price: 699, category: "Men's Traditional", image: ankaraSenator, sizes: ["M", "L", "XL"] },
  { id: "117", name: "Ruched Ankara Dress", price: 599, category: "Women's Ankara", image: ankaraDressWomen, sizes: ["XS", "S", "M", "L"] },
  { id: "118", name: "Structured Ankara Blazer", price: 799, category: "Men's Ankara", image: ankaraBlazerMen, sizes: ["S", "M", "L", "XL"] },
  { id: "119", name: "Ankara Maxi Skirt", price: 449, category: "Women's Ankara", image: ankaraPeplumSet, sizes: ["S", "M", "L"] },
  { id: "120", name: "Contemporary Dashiki", price: 549, category: "Men's Traditional", image: ankaraSenator, sizes: ["S", "M", "L", "XL", "XXL"] },
];

export const categories = ["All", "Men's Ankara", "Women's Ankara", "Men's Traditional", "Women's Traditional"];
export const sortOptions = ["Featured", "Price: Low to High", "Price: High to Low", "Newest"];

export const featuredProducts = products.slice(0, 6);
