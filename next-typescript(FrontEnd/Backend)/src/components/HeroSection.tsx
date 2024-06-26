import Link from "next/link";
export default function HeroSection(): JSX.Element {
  return (
    <>
      <main className="text-white space-y-10 flex flex-col items-center justify-center w-full min-[700px]:h-screen max-[700px]:mb-10">
        <h1 className="min-[2000px]:text-[10rem] lg:text-9xl text-7xl font-bold max-[600px]:w-[90%] text-[#00FFFF]">
          Master The Art of Music
        </h1>
        <p className="min-[2000px]:w-[38%] min-[2000px]:text-3xl lg:text-2xl text-xl max-[600px]:w-[70%] w-[50%] text-center pb-20">
          Mastering music is delving into emotion's language, honing skills
          through practice, embracing creativity, infusing interpretation,
          fostering collaboration, and cherishing life long learning.
        </p>
        <button className="border-4 rounded-full p-3 px-5 min-[1500px]:text-2xl text-lg max-[700px]:text-sm">
          <Link href="/courses">Explore Courses</Link>
        </button>
      </main>
    </>
  );
}
