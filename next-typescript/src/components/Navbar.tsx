import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <nav className="bg-slate-300">
        <Link href={"/"}>Home</Link>
        <Link href={"/allcourse"}>All Course</Link>
        <Link href={"/contactus"}>Contact Us</Link>
      </nav>
    </>
  );
}
