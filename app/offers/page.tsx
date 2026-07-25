"use client";
import Image from "next/image";
import Link from "next/link";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import TimerIcon from "@mui/icons-material/Timer";

const offers = [
  {
    id: 1,
    title: "Premium Dental Toolkit",
    description: "Complete set for 2nd-year students",
    originalPrice: 250,
    discountedPrice: 185,
    image: "/71JnB3Ni6cL.jpg",
    badge: "Bestseller",
  },
  {
    id: 2,
    title: "High-Speed Handpiece",
    description: "Ceramic bearings, ultra-quiet",
    originalPrice: 420,
    discountedPrice: 315,
    image: "/handpi.png",
    badge: "25% Off",
  },
  {
    id: 3,
    title: "Advanced Typodont Model",
    description: "Realistic gingival texture",
    originalPrice: 180,
    discountedPrice: 145,
    image: "/tym.png",
    badge: "Limited Stock",
  },
  {
    id: 4,
    title: "Sterile Consumables Pack",
    description: "Gloves, masks, and bibs (Bulk)",
    originalPrice: 85,
    discountedPrice: 60,
    image: "/glov.png",
    badge: "Student Deal",
  },
];

export default function OffersPage() {
  return (
    <div className="min-h-screen py-12 px-8">
      {/* Hero Section */}
      <div className="bg-linear-to-r from-blue-600 to-blue-400 rounded-3xl p-12 text-white mb-16 flex flex-col md:flex-row items-center justify-between overflow-hidden relative">
        <div className="z-10 max-w-2xl">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            <LocalOfferIcon className="mr-2 text-yellow-300" fontSize="small" />
            Special Semester Offers
          </div>
          <h1 className="text-5xl font-bold leading-tight mb-6">
            Equip Your Future with <br />
            <span className="text-yellow-300">Unbeatable Deals</span>
          </h1>
          <p className="text-lg text-blue-50/90 mb-8 max-w-lg">
            We understand the investment dental students make. That's why we've
            partnered with top brands to bring you professional gear at student
            prices.
          </p>
          <div className="flex space-x-4">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-blue-50 transition-all shadow-lg shadow-blue-900/20">
              View All Deals
            </button>
            <div className="flex items-center text-blue-100">
              <TimerIcon className="mr-2" />
              <span>
                Ends in:{" "}
                <span className="font-bold underline">03d : 14h : 22m</span>
              </span>
            </div>
          </div>
        </div>

        <div className="hidden md:block absolute -right-16 -bottom-16 opacity-20">
          <LocalOfferIcon style={{ fontSize: "300px" }} />
        </div>
      </div>

      {/* Offers Grid */}
      <div className="mb-20">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-bold text-slate-800">Flash Sales</h2>
            <p className="text-gray-500 mt-2">
              Professional equipment, student-friendly prices.
            </p>
          </div>
          <Link
            href="/shop"
            className="text-blue-500 font-medium hover:underline flex items-center"
          >
            Go to Shop <ArrowRightAltIcon className="ml-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className="group bg-white border border-slate-100 rounded-2xl p-6 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-4 left-4 bg-yellow-400 text-blue-900 text-xs font-bold px-3 py-1 rounded-full z-10">
                {offer.badge}
              </div>

              <div className="h-48 flex items-center justify-center mb-6 py-4 transition-transform duration-500 group-hover:scale-110">
                <Image
                  src={offer.image}
                  alt={offer.title}
                  width={150}
                  height={150}
                  className="object-contain"
                />
              </div>

              <div className="space-y-3">
                <h3 className="font-bold text-slate-800 text-lg group-hover:text-blue-600 transition-colors">
                  {offer.title}
                </h3>
                <p className="text-gray-500 text-sm line-clamp-2">
                  {offer.description}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                  <div>
                    <span className="text-gray-400 line-through text-xs mr-2">
                      ${offer.originalPrice}
                    </span>
                    <span className="text-blue-600 font-bold text-xl">
                      ${offer.discountedPrice}
                    </span>
                  </div>
                  <button className="bg-slate-900 text-white p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                    <ShoppingCartIcon fontSize="small" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Student Referral Section */}
      <div className="bg-slate-50 rounded-3xl p-10 flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">
            Refer a Classmate
          </h2>
          <p className="text-gray-600 mb-6">
            Share the love! Get a{" "}
            <span className="font-bold text-blue-600">$10 voucher</span> for
            every classmate who makes their first purchase over $50. No limits
            on how much you can earn.
          </p>
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Your student email"
              className="px-6 py-3 rounded-full border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 flex-1 max-w-sm"
            />
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition-colors">
              Get Invite Link
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/3 aspect-video bg-blue-100 rounded-2xl flex items-center justify-center">
          <Image
            src="/tooth.png"
            alt="Student"
            width={200}
            height={200}
            className="opacity-80"
          />
        </div>
      </div>
    </div>
  );
}

// Small helper for the missing icon in the local scope if not imported globally
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
