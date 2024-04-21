'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

const PaymentSuccess = () => {
  const router = useRouter();

  const handleHome = () => {
    router.push('/');
  };

  return (
    <div className="animate-fadeIn flex flex-col items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold text-green-600 mb-4">Payment Successful! 🎉</h1>
        <p className="text-lg text-gray-700 font-bold">You are good to go!</p>
      </div>
      <button onClick={handleHome} className="mt-8 px-6 py-3 bg-green-500 text-white rounded-md shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
        Go to Homepage
      </button>
    </div>
  );
};

export default PaymentSuccess;

