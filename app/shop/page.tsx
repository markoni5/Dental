"use client";
import { useState } from "react";
import Image from "next/image";
import FilterListIcon from "@mui/icons-material/FilterList";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StarIcon from "@mui/icons-material/Star";
import SearchIcon from "@mui/icons-material/Search";

const categories = [
  "All Products",
  "Dental Instruments",
  "Study Materials",
  "Models & Typodonts",
  "Handpieces",
  "Consumables",
];

const products = [
  {
    id: 1,
    name: "High-Speed Handpiece",
    category: "Handpieces",
    price: 129.99,
    rating: 4.8,
    reviews: 124,
    image: "/handpi.png",
    description:
      "High-speed dental handpiece with LED light, ergonomic design and quiet operation.",
  },
  {
    id: 2,
    name: "Typodont Study Model",
    category: "Models & Typodonts",
    price: 89.5,
    rating: 4.9,
    reviews: 82,
    image: "/tym.png",
    description:
      "Realistic typodont model for student practice, perfect for clinical training.",
  },
  {
    id: 3,
    name: "Dental Instrument Set",
    category: "Dental Instruments",
    price: 199.0,
    rating: 4.7,
    reviews: 45,
    image: "/71JnB3Ni6cL.jpg",
    description:
      "Complete 12-piece instrument kit for clinical rotations and exams.",
  },
  {
    id: 4,
    name: "Sterile Nitro Gloves",
    category: "Consumables",
    price: 15.99,
    rating: 4.6,
    reviews: 210,
    image: "/glov.png",
    description: "Powder-free, high-tactility gloves. Box of 100.",
  },
  {
    id: 5,
    name: "Human Tooth Model",
    category: "Study Materials",
    price: 45.0,
    rating: 4.8,
    reviews: 67,
    image: "/tooth.png",
    description:
      "Enlarged human tooth model for detailed study and patient consultation.",
  },
];

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState("All Products");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter(
    (product) =>
      (activeCategory === "All Products" ||
        product.category === activeCategory) &&
      product.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="min-h-screen py-8">
      {/* Search and Filter Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6 bg-white p-6 rounded-3xl shadow-sm border border-slate-50">
        <div className="relative w-full md:w-96">
          <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search for materials, tools..."
            className="w-full pl-12 pr-6 py-3 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-blue-500 transition-all"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full whitespace-nowrap text-sm font-semibold transition-all ${
                activeCategory === cat
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30"
                  : "bg-slate-50 text-slate-600 hover:bg-slate-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Sidebar Filters - Desktop only for now */}
        <aside className="hidden lg:block w-64 space-y-8">
          <div>
            <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center">
              <FilterListIcon className="mr-2 text-blue-600" /> Filters
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-bold text-slate-500 mb-3 uppercase tracking-wider">
                  Price Range
                </p>
                <input type="range" className="w-full accent-blue-600" />
                <div className="flex justify-between text-sm font-semibold text-slate-600 mt-2">
                  <span>$0</span>
                  <span>$500+</span>
                </div>
              </div>

              <div className="pt-4">
                <p className="text-sm font-bold text-slate-500 mb-3 uppercase tracking-wider">
                  Rating
                </p>
                <div className="space-y-2">
                  {[4, 3, 2].map((star) => (
                    <label
                      key={star}
                      className="flex items-center gap-2 cursor-pointer group"
                    >
                      <input
                        type="checkbox"
                        className="w-5 h-5 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-slate-600 group-hover:text-blue-600 transition-colors">
                        {star}+ Stars
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-600 rounded-3xl p-6 text-white overflow-hidden relative">
            <div className="relative z-10 text-center">
              <p className="text-blue-200 text-sm font-bold mb-2">
                Student exclusive
              </p>
              <h4 className="text-xl font-bold mb-4">Bulk Order Discount</h4>
              <p className="text-sm text-blue-50/80 mb-6">
                Planning a class order? Get up to 30% off.
              </p>
              <button className="bg-white text-blue-600 w-full py-2.5 rounded-xl font-bold text-sm">
                Inquire Now
              </button>
            </div>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
          </div>
        </aside>

        {/* Product Grid */}
        <main className="flex-1">
          <div className="flex justify-between items-center mb-8">
            <p className="text-slate-500 font-medium">
              Showing{" "}
              <span className="text-slate-900 font-bold">
                {filteredProducts.length}
              </span>{" "}
              products
            </p>
            <select className="bg-transparent border-none text-slate-900 font-bold focus:ring-0 cursor-pointer">
              <option>Sort by: Newest</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Top Rated</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 flex flex-col"
              >
                <div className="relative  aspect-4/3 bg-slate-50 flex items-center justify-center p-8 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-8 group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-all cursor-pointer hover:bg-blue-500 hover:text-white">
                    <ShoppingCartIcon fontSize="small" />
                  </div>
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-slate-700 flex items-center gap-1">
                    <StarIcon
                      className="text-yellow-400"
                      style={{ fontSize: 14 }}
                    />{" "}
                    {product.rating}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">
                    {product.category}
                  </p>
                  <h3 className="text-xl font-bold text-slate-800 mb-2 truncate group-hover:text-blue-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray-500 text-sm line-clamp-2 mb-6 flex-1">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-2xl font-black text-slate-900">
                      ${product.price}
                    </span>
                    <button className="bg-slate-900 text-white px-6 py-2.5 rounded-2xl font-bold hover:bg-blue-600 transition-all active:scale-95 shadow-lg shadow-slate-900/10">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20 bg-slate-50 rounded-[40px] border-2 border-dashed border-slate-200">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                <SearchIcon className="text-slate-300" fontSize="large" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-2">
                No products found
              </h3>
              <p className="text-slate-500">
                Try adjusting your filters or search terms.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("All Products");
                }}
                className="mt-6 text-blue-600 font-bold hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
