import Link from "next/link";

export default async function Home() {
  return (
    <main className="bg-red-100 h-screen px-10 py-4">
      <div class="flex items-center justify-between">
        <a
          href="#"
          title=""
          class="flex text-2xl text-red-500 font-normal text-bold"
        >
          Ecom
        </a>

        <div class="relative hidden md:justify-center md:items-center md:inline-flex group">
          <Link
            href="/product"
            title=""
            class="relative inline-flex items-center justify-center px-6 py-2 text-base rounded font-bold bg-red-200 text-red-500 border-2 border-red-500 border-solid"
            role="button"
          >
            {" "}
            Order Now{" "}
          </Link>
        </div>
      </div>

      <section class="h-[90vh] flex items-center justify-center flex-col text-center">
        <h1 class="text-4xl font-normal text-red-500 uppercase sm:text-5xl lg:text-6xl xl:text-8xl">
          Get goods <br />
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500">
            delivered
          </span>
        </h1>

        <div class="mt-8 sm:mt-10">
          <Link
            href="/product"
            title=""
            class="inline-flex items-center justify-center px-10 py-3 text-base font-normal text-bold text-black transition-all duration-200 rounded-full bg-red-300 "
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
