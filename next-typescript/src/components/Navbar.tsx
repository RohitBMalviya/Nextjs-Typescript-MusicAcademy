"use client";

import Link from "next/link";
import { useState } from "react";
import { Data } from "./SubMenuData";

export default function Navbar() {
  const [dropdown, setDropdown] = useState("none");
  return (
    <>
      <nav
        className="bg-black  w-full flex justify-center items-center space-y-4 h-20 "
        onMouseLeave={() => {
          setDropdown("none");
        }}
      >
        <ul className="min-[500px]:flex hidden justify-around items-center text-2xl max-[650px]:text-[22px] max-[950px]:w-[60%] font-semibold text- h-14 bg-white w-[50%] rounded-full ">
          <li className="hover:text-zinc-500">
            <Link href={"/"}>Home</Link>
          </li>
          <li
            className="relative hover:text-zinc-500 float-none"
            onMouseEnter={() => {
              setDropdown("block");
            }}
          >
            <Link id="menuList" href={"/courses"} className="flex">
              Courses
              <svg
                className="w-3.5  ms-2 pt-2"
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
            </Link>
            <menu
              style={{ display: `${dropdown}`, zIndex: 10 }}
              className="absolute top-14 left-[-40px] bg-white rounded-lg w-[300px] space-y-1 text-black"
              aria-labelledby="menuList"
            >
              {Data.map((items) => (
                <li key={items.id}>
                  <Link
                    href={items.link}
                    className="hover:bg-black hover:text-white  block w-full rounded-lg border-2 mt-1 mb-1 pl-6 h-10"
                  >
                    {items.menuTitle}
                  </Link>
                </li>
              ))}
            </menu>
          </li>
          <li className="hover:text-zinc-500">
            <Link href={"/contactus"}>Contact Us</Link>
          </li>
        </ul>
        <div className="hidden max-[499px]:block text-end w-full text-white">
          Menu=
        </div>
      </nav>
    </>
  );
}
