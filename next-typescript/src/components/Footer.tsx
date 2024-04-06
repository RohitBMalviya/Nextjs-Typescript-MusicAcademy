import Link from "next/link";

import Ficon from "../../public/Images/FacebookIcon.svg";
import Iicon from "../../public/Images/InstagramIcon.svg";
import Yicon from "../../public/Images/YoutubeIcon.svg";
import Licon from "../../public/Images/LinkedInIcon.svg";
import Image from "next/image";

export default function Footer(): JSX.Element {
  return (
    <>
      <footer className="bg-gray-900 h-full py-10 px-10 text-white grid min-[1440px]:grid-cols-4 lg:grid-cols-2 sm:grid-cols-2 gap-4 items-center">
        <div className="space-y-4 flex flex-col items-center h-[12rem] max-[641px]:h-full ">
          <h3 className="min-[2000px]:text-4xl lg:text-3xl text-2xl font-bold w-[70%] max-[641px]:w-full text-[#00FFFF]">
            About Us
          </h3>
          <p className="min-[2000px]:text-2xl lg:text-xl text-lg w-[70%] max-[641px]:w-full">
            Welcome to Music Academy where passion meets proficiency in the
            realm of music education
          </p>
        </div>
        <div className="space-y-4 flex flex-col items-center h-[12rem] max-[641px]:h-full">
          <h3 className="min-[2000px]:text-4xl lg:text-3xl text-2xl font-bold w-[70%] max-[641px]:w-full text-[#00FFFF]">
            Quick Link
          </h3>
          <menu className="min-[2000px]:text-2xl lg:text-xl text-lg w-[70%] max-[641px]:w-full">
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/aboutus"}>AboutUs</Link>
            </li>
            <li>
              <Link href={"/courses"}>Courses</Link>
            </li>
            <li>
              <Link href={"/contactus"}>ContactUs</Link>
            </li>
          </menu>
        </div>
        <div className="space-y-4 flex flex-col items-center h-[12rem] max-[641px]:h-full">
          <h3 className="min-[2000px]:text-4xl lg:text-3xl text-2xl font-bold w-[70%] max-[641px]:w-full pl-2 text-[#00FFFF]">
            Follow Us
          </h3>
          <ul className="min-[2000px]:text-2xl lg:text-xl text-lg w-[70%] max-[641px]:w-full flex ">
            <li>
              <Link href="#">
                <Image src={Iicon} alt="Instagram" />
              </Link>
            </li>
            <li>
              <Link href="#">
                <Image src={Ficon} alt="Facebook" />
              </Link>
            </li>
            <li>
              <Link href="#">
                <Image src={Yicon} alt="Youtube" />
              </Link>
            </li>
            <li>
              <Link href="#">
                <Image src={Licon} alt="LinkedIn" />
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-4 flex flex-col items-center h-[12rem] max-[641px]:h-full">
          <h3 className="min-[2000px]:text-4xl lg:text-3xl text-2xl font-bold w-[70%] max-[641px]:w-full text-[#00FFFF]">
            Contact Us
          </h3>
          <address className="min-[2000px]:text-2xl lg:text-xl text-lg w-[70%] max-[641px]:w-full">
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
