import Card from "@/components/Card";
import { getDataFromApi } from "@/helper/getDataFromApi";
import React from "react";

const SingleCard = async ({ params }) => {
  const prod = await getDataFromApi();
  const itemId = params.single[1];
  // console.log(params.single[1]);
  return (
    <div className="cardWrapper w-full h-screen flex items-center justify-center">
      <Card item={prod[itemId - 1]} data="single" />
    </div>
  );
};



export default SingleCard;
