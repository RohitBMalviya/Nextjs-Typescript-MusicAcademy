import Link from "next/link";

export default function Footer(): JSX.Element {
  return (
    <>
      <footer className="bg-gray-900 h-full py-14 text-white grid min-[1440px]:grid-cols-4 lg:grid-cols-2 sm:grid-cols-2 gap-6 items-center">
        <div className="space-y-4 flex flex-col items-center h-[12rem]">
          <h3 className="min-[2000px]:text-4xl lg:text-3xl text-2xl font-bold w-[60%]">
            About Us
          </h3>
          <p className="min-[2000px]:text-2xl lg:text-xl text-lg w-[60%]">
            Welcome to Music Academy where passion meets proficiency in the
            realm of music education
          </p>
        </div>
        <div className="space-y-4 flex flex-col items-center h-[12rem]">
          <h3 className="min-[2000px]:text-4xl lg:text-3xl text-2xl font-bold w-[60%]">
            Quick Link
          </h3>
          <menu className="min-[2000px]:text-2xl lg:text-xl text-lg w-[60%]">
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/aboutUs"}>AboutUs</Link>
            </li>
            <li>
              <Link href={"/courses"}>Courses</Link>
            </li>
            <li>
              <Link href={"/contactus"}>ContactUs</Link>
            </li>
          </menu>
        </div>
        <div className="space-y-4 flex flex-col items-center h-[12rem]">
          <h3 className="min-[2000px]:text-4xl lg:text-3xl text-2xl font-bold w-[60%]">
            Follow Us
          </h3>
          <ul className="min-[2000px]:text-2xl lg:text-xl text-lg w-[60%] flex ">
            <li>
              <Link href="#">I</Link>
            </li>
            <li>
              <Link href="#">F</Link>
            </li>
            <li>
              <Link href="#">Y</Link>
            </li>
            <li>
              <Link href="#">L</Link>
            </li>
          </ul>
        </div>
        <div className="space-y-4 flex flex-col items-center h-[12rem]">
          <h3 className="min-[2000px]:text-4xl lg:text-3xl text-2xl font-bold w-[60%]">
            Contact Us
          </h3>
          <address className="min-[2000px]:text-2xl lg:text-xl text-lg w-[60%]">
            Maharashtra,Bharat Pune 412115 <br />
            Email: music@academy.com <br />
            phone:+91 9876543210
          </address>
        </div>
      </footer>
      <small className="text-white text-center flex justify-center">
        &#169; 2024 Music Academy All Rights Reserved
      </small>
    </>
  );
}
