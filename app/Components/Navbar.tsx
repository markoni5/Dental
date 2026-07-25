"use client";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Link from "next/link";
function Navbar() {
  const [active, setActive] = useState("Home");

  return (
    <div className="flex justify-between items-center p-4  bg-white">
      <div>
        <h1 className="text-2xl text-slate-600 font-bold">MAM Dental</h1>
        <p className="text-sm text-gray-500">For all dental students</p>
      </div>

      <div className="flex justify-center gap-12 ml-50 text-slate-600">
        <Link
          href={"/"}
          onClick={() => {
            setActive("Home");
          }}
          className={active === "Home" ? "text-blue-400 " : "cursor-pointer"}
        >
          Home
        </Link>
        <Link
          href={"/shop"}
          onClick={() => setActive("Shop")}
          className={active === "Shop" ? "text-blue-400 " : "cursor-pointer"}
        >
          Shop
        </Link>
        <Link
          href={"/offers"}
          className={active === "Offers" ? "text-blue-400 " : "cursor-pointer"}
          onClick={() => setActive("Offers")}
        >
          Offers
        </Link>
        <Link
          href={"/about"}
          onClick={() => setActive("About")}
          className={active === "About" ? "text-blue-400 " : "cursor-pointer"}
        >
          About
        </Link>
        <Link
          href={"/contact"}
          onClick={() => setActive("Contact")}
          className={active === "Contact" ? "text-blue-400 " : "cursor-pointer"}
        >
          Contact
        </Link>
      </div>

      <div className="flex justify-center gap-6 text-slate-600">
        <SearchIcon />
        <PersonIcon />
        <Link href={"/cart"}>
          <ShoppingCartIcon />
        </Link>
        <div>
          <button className="px-8 py-1.5 bg-blue-500 text-white rounded-full">
            <Link href={"/login"}>Sign In</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
