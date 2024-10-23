import Card from '@/components/Card';
import React from 'react';

// Define the type for the product data
type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

type PageProps = {
  params: {
    slug: string;
  };
  products: Product[];
};

// Fetch data at build time
export async function getStaticPropss() {
  const res = await fetch('https://fakestoreapi.com/products');
  const products: Product[] = await res.json();
  console.log(res);
  return {
    props: {
      products,
    },
  };
}

const Page = async ({ params }: PageProps) => {
      const res =await params
  const slug = res.slug;
//   console.log(slug);
  const res1 = await fetch('https://fakestoreapi.com/products');
  const products: Product[] = await res1.json();

  // Convert slug to a number for comparison
  const slugAsNumber = Number(slug);

  const FilteredData = products.filter(product => product.id === slugAsNumber);
  // console.log(FilteredData[0]); // Log the fetched products
  return (
    <div>
      <h1>Page: {slug}</h1>
      <div className="flex justify-center items-center">
        <Card item={FilteredData[0]} data="single" />
      </div>
    </div>
  );
}

export default Page;
