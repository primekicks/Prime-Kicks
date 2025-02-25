"use client";
import CalenderIcon from "@/ui/CalenderIcon";
import CartIcon from "@/ui/CartIcon";
import CrossIcon from "@/ui/CrossIcon";
import Favourite from "@/ui/Favourite";
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
    { label: "Sports", href: "/sports" },
    { label: "New Arrivals", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <nav className=" hidden md:flex bg-black text-gray-50  py-3 px-6 text-[12px]">
        <div
          className={`max-w-[1400px] container mx-auto hidden md:flex md:items-center md:justify-between`}
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

      <nav className=" bg-white shadow-md py-2 px-6 border-b w-full z-50 top-0 sticky">
        <div className="max-w-[1200px] container mx-auto flex justify-between items-center">
          <div className="text-xl font-bold text-gray-900">
            <Link href="/" className="flex items-center">
              <img src="/logo.png" alt="" height={60} width={60} />
            </Link>
          </div>
          {/* <div>
            <Favourite />
          </div> */}

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

          <div className="hidden md:flex items-center justify-center gap-3 space-x-4 text-[14px] font-semibold">
            <div className="flex items-center justify-center relative">
              <div className="flex justify-center items-center ">
                <input
                  type="text"
                  name="text"
                  placeholder="Search..."
                  class="max-w-[190px] bg-gray-200 text-gray-800 px-2 py-0 min-h-[35px] rounded-2xl outline-none border-0 shadow-md   hover:outline hover:outline-1 font-thin  transition duration-200 placeholder:font-thin"
                />

                <button className="absolute right-10  h-auto">
                  <SearchIcon />
                </button>
              </div>
              <button className="absolute right-2"></button>

              <Link href={"/cart"}>
                <CartIcon />
              </Link>
            </div>
          </div>

          {isMenuOpen && (
            <div className="md:hidden absolute top-14 left-0 w-full bg-white shadow-md z-50 transition-all  duration-300 ease-in-out">
              <ul className="flex overflow-scroll flex-col space-y-4 text-gray-700 text-[14px] font-semibold p-4">
                <div className="flex items-center justify-start gap-2 px-3">
                  <input
                    type="text"
                    placeholder="Search product here..."
                    className="rounded-md border border-gray-500 outline-none  focus:border-gray-900 w-full px-3 py-2"
                  />
                  <button className="bg-gray-900 p-2 rounded-md text-white">
                    <MobileSearch />
                  </button>
                </div>
                {links.slice(5).map((link) => (
                  <li key={link.label} className="px-3">
                    <Link href={link.href}>
                      <span className="cursor-pointer hover:text-gray-800">
                        {link.label}
                      </span>
                    </Link>
                  </li>
                ))}
                <div className="flex justify-start items-start flex-col p-2 px-3 gap-2">
                  <Link
                    href={"/login"}
                    className="bg-gray-900 text-gray-50 p-3 w-full rounded-md"
                  >
                    Log in
                  </Link>
                  <Link
                    href={"/signup"}
                    className="border border-gray-900 w-full p-3 rounded-md"
                  >
                    Sign up
                  </Link>
                </div>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
