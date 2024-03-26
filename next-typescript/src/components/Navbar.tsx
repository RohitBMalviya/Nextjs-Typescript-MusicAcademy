import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <nav className="bg-black  w-full flex justify-center items-center space-y-4 h-20 ">
        <ul className="min-[430px]:flex hidden justify-around items-center text-2xl font-semibold text- h-16 bg-white w-[60%] rounded-full ">
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
