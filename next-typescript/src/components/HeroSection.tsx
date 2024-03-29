import Link from "next/link";
export default function HeroSection(): JSX.Element {
  return (
    <>
      <main className="text-white space-y-10 flex flex-col items-center justify-center w-full min-[700px]:h-screen">
        <h1 className="min-[2000px]:text-8xl lg:text-6xl text-5xl font-bold w-[90%]">
          Master The Art of Music
        </h1>
        <p className="min-[2000px]:w-[38%] min-[2000px]:text-4xl lg:text-3xl text-3xl max-[600px]:w-[70%] w-[50%] text-center">
          Mastering music is delving into emotion's language,honing skills
          through practice, embracing creativity, infusing interpretation,
          fostering collaboration, and cherishing lifelong learning.
        </p>
        <button className="border-4 rounded-full p-3 px-5 min-[1500px]:text-4xl text-2xl max-[700px]:text-lg">
          <Link href="/courses">Explore Courses</Link>
        </button>
      </main>
    </>
  );
}
