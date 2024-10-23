import Logic from "@/components/Logic";
import { getDataFromApi } from "@/helper/getDataFromApi";
import React from "react";

const Product = async () => {
  const prod = await getDataFromApi();
  return (
    <div className="container mx-auto p-4 font-[family-name:var(--font-geist-sans)]">
      <div className="flex justify-between items-center my-4 ">
        <h1 className="text-2xl text-center w-full font-bold">
          Best products for you{" "}
        </h1>
      </div>
      <Logic products={prod} />
    </div>
  );
};

export default Product;
