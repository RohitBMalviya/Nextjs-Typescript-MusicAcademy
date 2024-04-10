"use client";

import Link from "next/link";
import { useState } from "react";
import { Data } from "./SubMenuData";
import { usePathname } from "next/navigation";
import Menu from "../../public/Images/Menu.svg";
import Image from "next/image";

export default function Navbar(): JSX.Element {
  const pathname = usePathname();
  const [dropdown, setDropdown] = useState("none");
  const [menu, setMenu] = useState(false);

  const handleOnClicked = () => {
    if (dropdown === "none") {
      setDropdown("block");
    }
    if (dropdown === "block") {
      setDropdown("none");
    }
  };

  return (
    <>
      <nav className="bg-transparent  w-full flex justify-center items-center h-20 min-[2000px]:h-24 fixed top-4">
        <ul className="min-[550px]:flex hidden justify-around items-center text-2xl max-[650px]:text-[22px] max-[1024px]:w-[70%] font-semibold h-14 min-[2000px]:h-16 bg-white w-[50%] rounded-full ">
          <li>
            <Link
              href={"/"}
              className={`${
                pathname === "/" ? "text-blue-600" : "text-black"
              } hover:text-zinc-500`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href={"/aboutus"}
              className={`${
                pathname === "/aboutus" ? "text-blue-600" : "text-black"
              } hover:text-zinc-500`}
            >
              About Us
            </Link>
          </li>
          <li
            className="relative "
            onMouseEnter={() => {
              setDropdown("block");
            }}
            onMouseLeave={() => {
              setDropdown("none");
            }}
            onClick={handleOnClicked}
          >
            <div id="menuList" className={"hover:text-zinc-500 flex"}>
              <p>Courses</p>
              <svg
                className="w-3.5 ms-2 hover:text-zinc-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </div>

            <menu
              style={{ display: `${dropdown}`, zIndex: 10 }}
              className="absolute left-[-40px] rounded-lg w-[300px] space-y-1"
              aria-labelledby="menuList"
            >
              <li className="pt-5 bg-transparent"></li>
              {Data.map((items) => (
                <li key={items.id}>
                  <Link
                    href={items.link}
                    className={`bg-black text-white hover:bg-white hover:text-black  block w-full rounded-lg border-2 mt-1 mb-1 pl-8 h-10 ${
                      pathname === `${items.link}`
                        ? "text-blue-600"
                        : "text-black"
                    }`}
                  >
                    {items.menuTitle}
                  </Link>
                </li>
              ))}
            </menu>
          </li>
          <li>
            <Link
              href={"/contactus"}
              className={`${
                pathname === "/contactus" ? "text-blue-600" : "text-black"
              } hover:text-zinc-500`}
            >
              Contact Us
            </Link>
          </li>
        </ul>
        {/* ------------------------------------------- Menu ------------------------------------------ */}
        <div
          className="hidden max-[549px]:flex justify-end items-center w-full text-white mr-4 mt-0"
          id="menu"
        >
          <button
            onClick={() => {
              setMenu(!menu);
            }}
          >
            <Image src={Menu} alt="Menu" width={20} aria-labelledby="menu" />
          </button>
        </div>
      </nav>
    </>
  );
}
