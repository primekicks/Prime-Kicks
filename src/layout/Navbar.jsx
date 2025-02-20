"use client";
import CalenderIcon from "@/ui/CalenderIcon";
import CartIcon from "@/ui/CartIcon";
import CrossIcon from "@/ui/CrossIcon";
import MenuIcon from "@/ui/MenuIcon";
import MobileSearch from "@/ui/MobileSearch";
import PeopleIcon from "@/ui/PeopleIcon";
import SearchIcon from "@/ui/SearchIcon";
import VerticalLine from "@/ui/VerticalLine";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const links = [
    { label: "About", href: "/new-arrivals" },
    { label: "Sale", href: "/mens" },
    { label: "Casual", href: "/womens" },
    { label: "Formal", href: "/kids" },
    { label: "Luxury", href: "/luxury" },
    { label: "Shops", href: "/sneakers" },
    { label: "Men", href: "/sale" },
    { label: "Womens", href: "/casual" },
    { label: "Casual", href: "/womens" },
    { label: "Sale", href: "/mens" },
    { label: "Formal", href: "/formal" },
    { label: "Luxury", href: "/luxury" },
    { label: "Sports & Running", href: "/sports-running" },
    { label: "New Arrivals", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <div>
      <nav className="hidden md:flex bg-black text-gray-50  py-3 px-6 text-[12px]">
        <div
          className={` container mx-auto hidden md:flex md:items-center md:justify-between`}
        >
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
                className="bg-transparent p-1 border rounded-lg w-[150px] border-none focus:border border-b-gray-50 outline-none placeholder:text-gray-50 text-[12px]"
              />
            </div>
            <Link href="/login" className="flex items-center gap-5">
              <PeopleIcon /> Log in
            </Link>
            <VerticalLine />
            <Link href="/join">Join</Link>
          </section>
        </div>
      </nav>

      <nav className=" bg-white shadow-md py-4 px-6 border-b w-full">
        <div className="max-w-[1200px] container mx-auto flex justify-between items-center">
          <div className="text-xl font-bold text-gray-900">
            <Link href="/" className="flex items-center">
              <img src="/logo.png" alt="" height={60} width={60} />
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 focus:outline-none"
            >
              {isMenuOpen ? <CrossIcon /> : <MenuIcon />}
            </button>
          </div>

          <ul className="hidden md:flex space-x-8 text-gray-700  text-[12px] md:text-[14px]">
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

          <div className="hidden md:flex items-center justify-center space-x-4 text-[14px] font-semibold">
            <div className="flex items-center justify-center gap-2 relative">
              <input
                type="search"
                placeholder="Search product here..."
                className="max-w-max  bg-gray-200 focus:border  border-gray-700  px-2 py-1 text-gray-700 rounded-md outline-none placeholder:text-gray-400 font-thin text-sm"
              />
              <button className="absolute right-2"></button>
            </div>

            <Link href={"/cart"}>
              <CartIcon />
            </Link>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 transition-all duration-300 ease-in-out">
            <ul className="flex flex-col space-y-4 text-gray-700 text-[14px] font-semibold">
              <div className="flex  items-center justify-start gap-8 focus:border border-gray-900">
                <input
                  type="text"
                  placeholder="Search product here..."
                  className="  rounded-md focus:border border-gray-800  w-1/2 px-3 py-2"
                />

                <button className="bg-gray-900  p-2">
                  <MobileSearch />
                </button>
              </div>
              {links.slice(5).map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>
                    <span className="cursor-pointer hover:text-gray-800">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
