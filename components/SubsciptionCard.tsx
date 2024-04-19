// components/SubscriptionCard.js
"use client";
import { useRouter } from "next/navigation";

import React from "react";
import { SubscriptionProps } from "@/types/index";

const SubscriptionCard = ({ title, price, features }: SubscriptionProps) => {
  const router = useRouter();

  const handleForm = () => {
    router.push("/payment");
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <div className="text-gray-700 mb-4">
        <span className="text-2xl font-semibold">Rs{price}</span>
      </div>
      <ul className="list-disc pl-5">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <button
        className="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
        onClick={() => handleForm()}
      >
        Rent Here
      </button>
    </div>
  );
};

export default SubscriptionCard;
