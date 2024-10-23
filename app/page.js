import Link from "next/link";

export default async function Home() {
  return (
    <main className="bg-red-100 h-screen px-10 py-4">
      <div className="flex items-center justify-between">
        <a
          href="#"
          title=""
          className="flex text-2xl text-red-500 font-normal text-bold"
        >
          Ecom
        </a>

        <div className="relative hidden md:justify-center md:items-center md:inline-flex group">
          <Link
            href="/product"
            title=""
            className="relative inline-flex items-center justify-center px-6 py-2 text-base rounded font-bold bg-red-200 text-red-500 border-2 border-red-500 border-solid"
            role="button"
          >
            {" "}
            Order Now{" "}
          </Link>
        </div>
      </div>

      <section className="h-[90vh] flex items-center justify-center flex-col text-center">
        <h1 className="text-4xl font-normal text-red-500 uppercase sm:text-5xl lg:text-6xl xl:text-8xl">
          Get goods <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500">
            delivered
          </span>
        </h1>

        <div className="mt-8 sm:mt-10">
          <Link
            href="/product"
            title=""
            className="inline-flex items-center justify-center px-10 py-3 text-base font-normal text-bold text-black transition-all duration-200 rounded-full bg-red-300 "
            role="button"
          >
            {" "}
            View More{" "}
          </Link>
        </div>
      </section>
    </main>
  );
}
