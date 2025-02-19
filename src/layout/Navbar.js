"use client";
import CalenderIcon from "@/ui/CalenderIcon";
import CartIcon from "@/ui/CartIcon";
import CrossIcon from "@/ui/CrossIcon";
import MenuIcon from "@/ui/MenuIcon";
import PeopleIcon from "@/ui/PeopleIcon";
import SearchIcon from "@/ui/SearchIcon";
import VerticalLine from "@/ui/VerticalLine";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu open/close

  const links = [
    { label: "About", href: "/about" },
    { label: "Producers", href: "/producers" },
    { label: "Recipes", href: "/recipes" },
    { label: "Kitchen & Bar", href: "/kitchen-bar" },
    { label: "Gift Cards", href: "/gift-cards" },
    { label: "Produce", href: "/produce" },
    { label: "Meat & Seafood", href: "/meat-seafood" },
    { label: "Dairy & Eggs", href: "/dairy-eggs" },
    { label: "Bakery", href: "/bakery" },
    { label: "Easy Meals", href: "/easy-meals" },
    { label: "Drinks", href: "/drinks" },
    { label: "Pantry", href: "/pantry" },
    { label: "Savings", href: "/savings" },
  ];

  // Function to toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      {/* Top Navbar */}
      <nav className="hidden bg-[#358f80] text-gray-50 w-full md:flex md:items-center md:justify-between py-3 px-8 text-[12px]  font-semibold">
        <div className="flex items-center gap-8">
          {links.slice(0, 5).map((link) => (
            <li key={link.label} className="list-none">
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </div>
        <section className="flex items-center gap-5">
          <div className="flex items-center gap-5">
            <CalenderIcon />
            <input
              type="text"
              placeholder=" Please enter your zip"
              className="bg-transparent p-1 border rounded-lg w-[150px] border-none outline-none placeholder:text-gray-50 text-[12px]"
            />
          </div>
          <Link href="/login" className="flex items-center gap-5">
            <PeopleIcon /> Log in
          </Link>
          <VerticalLine />
          <Link href="/join">Join</Link>
        </section>
      </nav>

      {/* Main Navbar */}
      <nav className="bg-white shadow-md py-4 px-6 border-b">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo Section */}
          <div className="text-xl font-bold text-gray-900">
            <Link href="/" className="flex items-center">
              <img src="/logo.png" alt="" height={50} width={50} />
              <span className="cursor-pointer text-sm">Farm Boxes</span>
            </Link>
          </div>

          {/* Menu Icon (Visible on Mobile) */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 focus:outline-none"
            >
              {isMenuOpen ? <CrossIcon /> : <MenuIcon />}
            </button>
          </div>

          {/* Navigation Links (Visible on Desktop) */}
          <ul className="hidden md:flex space-x-10 text-gray-700  text-[12px] md:text-[14px] font-semibold">
            <VerticalLine />
            {links.slice(5).map((link) => (
              <li key={link.label}>
                <Link href={link.href}>
                  <span className="cursor-pointer hover:text-gray-800">
                    {link.label}
                  </span>
                </Link>
              </li>
            ))}
            <VerticalLine />
          </ul>

          {/* Icons Section */}
          <div className="hidden md:flex items-center space-x-4 text-[14px] font-semibold">
            <Link href={"/new-seasonal"} className="text-gray-800">
              New & Seasonal
            </Link>
            <Link href={"/search"}>
              <SearchIcon />
            </Link>
            <Link href={"/cart"}>
              <CartIcon />
            </Link>
          </div>
        </div>

        {/* Mobile Menu (Visible on Mobile) */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 transition-all duration-300 ease-in-out">
            <ul className="flex flex-col space-y-4 text-gray-700 text-[14px] font-semibold">
              {links.slice(5).map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>
                    <span className="cursor-pointer hover:text-gray-800">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
              <li>
                <Link href={"/new-seasonal"} className="text-gray-800">
                  New & Seasonal
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
