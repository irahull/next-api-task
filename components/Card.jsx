import Link from "next/link";
import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";

const Card = ({ item, data }) => {
  console.log(data);
  return (
    <div
      className="my-5 bg-white shadow hover:shadow-lg  border rounded-lg overflow-hidden"
      key={item.id}
    >
      <div className=" p-4 rounded transition">
        <img
          src={item.image}
          alt="Product Image"
          className="w-full h-48 object-contain mb-4"
        />
        <Link
          href={data === "all" ? `product/${item.category}/${item.id}` : ""}
        >
          {" "}
          <h2 className="text-lg font-semibold">{item.title}</h2>
        </Link>
        <p className="text-gray-500">{item.category}</p>
        <p className="text-green-600 font-bold">${item.price}</p>
        <p className="text-sm my-2 text-gray-700 truncate ">
          {item.description.slice(0, 60)}
        </p>
        <div className="flex items-center ">
          <div className="flex items-center text-yellow-500">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaRegStar />
          </div>
          <span className="ml-2 text-gray-600">4.5 (120)</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
