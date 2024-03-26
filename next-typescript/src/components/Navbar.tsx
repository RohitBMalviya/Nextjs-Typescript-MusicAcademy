"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [dropdown, setDropdown] = useState("");
  return (
    <>
      <nav className="bg-black  w-full flex justify-center items-center space-y-4 h-20 ">
        <ul className="min-[500px]:flex hidden justify-around items-center text-2xl max-[650px]:text-[22px] max-[950px]:w-[60%] font-semibold text- h-16 bg-white w-[55%] rounded-full ">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link id="menuList" href={"/courses"} className="relative flex">
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
            <menu className="absolute" aria-labelledby="menuList">
              <li>
                <Link href="/allcourse">All Course</Link>
              </li>
              <li>
                <Link href="/basic">Basic Music Theory</Link>
              </li>
              <li>
                <Link href="/advance">Advance Composition</Link>
              </li>
              <li>
                <Link href="/songwriting">Songwriting</Link>
              </li>
              <li>
                <Link href="/musicproduction">Music Production</Link>
              </li>
            </menu>
          </li>
          <li>
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
