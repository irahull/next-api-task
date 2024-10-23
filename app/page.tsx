import Card from "@/components/Card";
import Image from "next/image";
import Link from "next/link";


type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

export default async function Home() {
  const res1 = await fetch('https://fakestoreapi.com/products');
  const products: Product[] = await res1.json();
  // console.log("hello");
  return (
    <div className="">
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
          href="#Product"
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
  <div id="Product" className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 text-center mt-10 to-purple-500">Products</div>
  <div className="cards mt-10  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 md:px-10">
   
        {products.map((item) => (
          <Card key={item.id} item={item} data="all" />
        ))}
      </div>
  </div>
  );
}
