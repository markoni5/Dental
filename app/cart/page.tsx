"use client";
import Link from "next/link";
import Image from "next/image";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import VerifiedIcon from "@mui/icons-material/Verified";
import StarIcon from "@mui/icons-material/Star";

const recommended = [
  {
    id: 1,
    name: "Dental Instrument Set",
    price: 199.0,
    image: "/71JnB3Ni6cL.jpg",
    rating: 4.8,
  },
  {
    id: 2,
    name: "Human Tooth Model",
    price: 45.0,
    image: "/tooth.png",
    rating: 4.9,
  },
  {
    id: 3,
    name: "High-Speed Handpiece",
    price: 129.99,
    image: "/handpi.png",
    rating: 4.7,
  },
];

export default function CartPage() {
  return (
    <div className="min-h-screen py-16 px-8">
      <div className="max-w-6xl mx-auto">
        {/* Main Cart Section */}
        <div className="flex flex-col lg:flex-row gap-12 mb-20">
          {/* Cart Items Area (Empty State) */}
          <div className="flex-2">
            <div className="flex items-center justify-between mb-8 border-b border-slate-100 pb-6">
              <h1 className="text-4xl font-black text-slate-900">Your Cart</h1>
              <span className="text-slate-400 font-bold">0 Items</span>
            </div>

            <div className="bg-slate-50 rounded-[40px] p-20 text-center border-2 border-dashed border-slate-200">
              <div className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl shadow-blue-500/5 rotate-3 hover:rotate-0 transition-transform duration-500">
                <ShoppingBagIcon
                  className="text-blue-500"
                  style={{ fontSize: 40 }}
                />
              </div>
              <h2 className="text-3xl font-bold text-slate-800 mb-4">
                Your cart is feeling a bit light
              </h2>
              <p className="text-gray-500 max-w-sm mx-auto mb-10 leading-relaxed">
                Seems like you haven't added anything to your cart yet. Explore
                our professional dental gear and equip your future.
              </p>
              <Link href="/shop">
                <button className="bg-blue-600 text-white px-10 py-4 rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/30 flex items-center mx-auto group">
                  Go to Shop
                  <ArrowRightAltIcon className="ml-2 transition-transform group-hover:translate-x-1" />
                </button>
              </Link>
            </div>
          </div>

          {/* Cart Summary Side */}
          <div className="flex-1">
            <div className="bg-slate-900 rounded-[40px] p-10 text-white sticky top-10">
              <h2 className="text-2xl font-bold mb-8">Summary</h2>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-slate-400">
                  <span>Subtotal</span>
                  <span>$0.00</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Shipping</span>
                  <span className="text-green-400">
                    Calculated at next step
                  </span>
                </div>
                <div className="border-t border-white/10 pt-4 flex justify-between text-xl font-bold">
                  <span>Total</span>
                  <span>$0.00</span>
                </div>
              </div>

              <button
                disabled
                className="w-full bg-white/10 text-white/40 py-5 rounded-2xl font-bold mb-6 cursor-not-allowed border border-white/5"
              >
                Checkout Now
              </button>

              <div className="space-y-4 pt-4 border-t border-white/10">
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <LocalShippingIcon
                    className="text-blue-400"
                    fontSize="small"
                  />
                  <span>Free campus delivery on orders over $150</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <VerifiedIcon className="text-blue-400" fontSize="small" />
                  <span>Student satisfaction guaranteed</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recommended Section */}
        <div>
          <h2 className="text-2xl font-bold text-slate-800 mb-8">
            Recommended for You
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recommended.map((item) => (
              <div
                key={item.id}
                className="group bg-white p-6 rounded-3xl border border-slate-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-square bg-slate-50 rounded-2xl mb-4 flex items-center justify-center p-6 relative overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={120}
                    height={120}
                    className="object-contain transition-transform group-hover:scale-110"
                  />
                  <div className="absolute bottom-2 right-2 bg-white px-2 py-1 rounded-full text-[10px] font-black flex items-center gap-1 shadow-sm">
                    <StarIcon
                      className="text-yellow-400"
                      style={{ fontSize: 12 }}
                    />{" "}
                    4.9
                  </div>
                </div>
                <h3 className="font-bold text-slate-800 mb-1">{item.name}</h3>
                <p className="text-blue-600 font-black mb-4">${item.price}</p>
                <button className="w-full py-2.5 rounded-xl bg-slate-50 text-slate-700 font-bold text-sm hover:bg-slate-900 hover:text-white transition-all">
                  Quick Add
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
