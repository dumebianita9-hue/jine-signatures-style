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
  // Women's Ankara Collection
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

  // Women's Traditional
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

  // Women English Wear
  { id: "101", name: "Elegant Blazer Dress", price: 1299, category: "Women English Wear", image: ankaraDressWomen, sizes: ["XS", "S", "M", "L"] },
  { id: "102", name: "Classic Pencil Skirt Suit", price: 1499, category: "Women English Wear", image: ankaraPeplumSet, sizes: ["S", "M", "L", "XL"] },
  { id: "103", name: "Formal Office Dress", price: 999, category: "Women English Wear", image: ankaraDressWomen, sizes: ["XS", "S", "M", "L"] },
  { id: "104", name: "Professional Trouser Suit", price: 1599, category: "Women English Wear", image: ankaraPeplumSet, sizes: ["S", "M", "L"] },
  { id: "105", name: "Cocktail Evening Dress", price: 1799, category: "Women English Wear", image: ankaraDressWomen, sizes: ["XS", "S", "M", "L"] },

  // Kiddies
  { id: "111", name: "Girls Ankara Dress", price: 499, category: "Kiddies", image: ankaraDressWomen, sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y"] },
  { id: "112", name: "Girls Party Gown", price: 699, category: "Kiddies", image: ankaraDressWomen, sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y"] },
  { id: "113", name: "Girls Traditional Set", price: 599, category: "Kiddies", image: ankaraPeplumSet, sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y"] },
  { id: "114", name: "Girls English Dress", price: 549, category: "Kiddies", image: ankaraDressWomen, sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y"] },
  { id: "115", name: "Girls Jumpsuit", price: 449, category: "Kiddies", image: ankaraJumpsuit, sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y"] },
];

export const categories = ["All", "Women's Ankara", "Women's Traditional", "Women English Wear", "Kiddies"];
export const sortOptions = ["Featured", "Price: Low to High", "Price: High to Low", "Newest"];

export const featuredProducts = products.slice(0, 6);
