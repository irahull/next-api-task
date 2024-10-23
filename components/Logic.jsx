"use client";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const Logic = ({ products }) => {
  const [sortedProducts, setSortedProducts] = useState(products);
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    const sorted = [...products].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.price - b.price;
      } else if (sortOrder === "desc") {
        return b.price - a.price;
      } else {
        return 0;
      }
    });
    setSortedProducts(sorted);
  }, [sortOrder, products]);

  return (
    <div>
      <div className=" container mx-auto p-4  flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Product List</h1>
        <select
          className="border p-2 rounded"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="">Price : Any </option>
          <option value="asc">Price: Low to High</option>
          <option value="desc">Price: High to Low</option>
        </select>
      </div>
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {sortedProducts.map((item) => (
          <Card key={item.id} item={item} data="all" />
        ))}
      </div>
    </div>
  );
};

export default Logic;
