import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import ProductCarousel from "./sections/ProductCarousel";
import CollaborationBanner from "./sections/CollaborationBanner";
import AboutManifesto from "./sections/AboutManifesto";
import JournalGrid from "./sections/JournalGrid";
import Newsletter from "./sections/Newsletter";

const ss26Products = [
  {
    id: "drava",
    name: "Drava Gathered Black",
    price: "$385.00 USD",
    image: "/new-product/product-1.png",
    badge: "Seasonal item",
    rating: 4.9,
    reviews: 875,
    colors: ["#111111", "#4a4a4a", "#7a7a7a", "#5a6b5a", "#8b6f4e", "#3e4a5e"],
  },
  {
    id: "hyco",
    name: "Hyco S Otra Gathered Black",
    price: "$340.00 USD",
    image: "/new-product/product-2.png",
    badge: "Seasonal item",
    rating: 4.7,
    reviews: 330,
    colors: ["#111111", "#3d3d3d", "#5c5c5c", "#8b7355", "#2f3e4e"],
  },
  {
    id: "orne",
    name: "Orne Otra Gathered Black",
    price: "$310.00 USD",
    image: "/new-product/product-3.png",
    badge: "Seasonal item",
    rating: 4.8,
    reviews: 128,
    colors: ["#111111", "#555555", "#9a9a9a", "#4a5a4a", "#7a5a3a"],
  },
  {
    id: "saar",
    name: "Saar Small Alias Leather",
    price: "$420.00 USD",
    image: "/new-product/product-4.png",
    badge: "Seasonal item",
    rating: 4.9,
    reviews: 215,
    colors: ["#111111", "#6b4f3a", "#8b6f4e", "#3a3a3a", "#2f4152"],
  },
  {
    id: "nile",
    name: "Nile EcoYarn Olive",
    price: "$265.00 USD",
    image: "/new-product/product-5.png",
    badge: "Seasonal item",
    rating: 4.5,
    reviews: 72,
    colors: ["#3a3f2d", "#111111", "#5a5a5a", "#8b7355", "#4a4a4a"],
  },
  {
    id: "kaamos",
    name: "Kaamos Sleek Nylon Grey",
    price: "$290.00 USD",
    image: "/new-product/product-6.png",
    badge: "Seasonal item",
    rating: 4.7,
    reviews: 156,
    colors: ["#3a3a3a", "#111111", "#7a7a7a", "#4a5a4a", "#8b6f4e"],
  },
];

const iconicProducts = [
  {
    id: "sava",
    name: "Sava M Sleek Nylon Black Backpack",
    price: "$275.00 USD",
    image: "/new-product/product-7.png",
    rating: 4.8,
    reviews: 412,
    colors: ["#111111", "#2a2a2a", "#4a4a4a", "#5a6b5a", "#8b6f4e"],
  },
  {
    id: "isar",
    name: "Isar M Komatsu Onibegie Nylon Black",
    price: "$470.00 USD",
    image: "/new-product/product-8.png",
    rating: 4.9,
    reviews: 267,
    colors: ["#111111", "#3a3a3a", "#7a7a7a", "#3e4a5e", "#6b4f3a"],
  },
  {
    id: "yukon",
    name: "Yukon Sleek Black",
    price: "$300.00 USD",
    image: "/new-product/product-9.png",
    rating: 4.6,
    reviews: 189,
    colors: ["#111111", "#4a4a4a", "#6b6b6b", "#5a6b5a", "#8b7355"],
  },
  {
    id: "oril",
    name: "Oril Small Smooth Nylon",
    price: "$245.00 USD",
    image: "/new-product/product-10.png",
    rating: 4.7,
    reviews: 94,
    colors: ["#111111", "#5a5a5a", "#9a9a9a", "#3a4a5e", "#8b6f4e"],
  },
  {
    id: "ganges",
    name: "Ganges Alias Leather Brown",
    price: "$520.00 USD",
    image: "/new-product/product-11.png",
    rating: 4.8,
    reviews: 521,
    colors: ["#4a3b2a", "#111111", "#6b4f3a", "#8b6f4e", "#3a3a3a"],
  },
  {
    id: "obsidian",
    name: "Obsidian Backpack Medium",
    price: "$380.00 USD",
    image: "/new-product/product-12.png",
    rating: 4.5,
    reviews: 63,
    colors: ["#111111", "#2a2a2a", "#4a4a4a", "#5a5a5a", "#7a7a7a"],
  },
];

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="flex-1">
        <Hero />
        <div id="collection">
          <ProductCarousel
            title="SS26 COLLECTION"
            subtitle="New arrivals for the season."
            products={ss26Products}
          />
        </div>
        <CollaborationBanner />
        <ProductCarousel
          title="THE ICONIC SILHOUETTES"
          subtitle="Proven favorites, carried daily."
          products={iconicProducts}
        />
        <AboutManifesto />
        <JournalGrid />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
