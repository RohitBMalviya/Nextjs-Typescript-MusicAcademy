import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <nav className="bg-black  w-full flex justify-center items-center space-y-4 h-20 ">
        <ul className="min-[400px]:flex hidden lg:flex md:flex sm:flex justify-around items-center text-3xl font-semibold text- h-16 bg-white lg:w-1/2 rounded-full px-8">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/allcourse"}>All Course</Link>
          </li>
          <li>
            <Link href={"/contactus"}>Contact Us</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
