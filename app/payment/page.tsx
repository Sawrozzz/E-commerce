
'use client'
import React, { useState } from 'react';
import {useRouter} from 'next/navigation';
import { toast } from 'react-hot-toast';


const PaymentMethodForm = () => {
  // State variables to store form data
  const [paymentMethod, setPaymentMethod] = useState('credit_card');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
   const router = useRouter();
  const handlePay = () =>{
    router.push('/success')
    toast.success("You did it ")
  }
  

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your payment processing logic here
    console.log({
      paymentMethod,
      cardNumber,
      expiryDate,
      cvv,
    });
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md p-8 mt-10">
      <h2 className="text-2xl font-bold mb-6">Payment Method</h2>
      <form onSubmit={handleSubmit}>
        {/* Payment Method Selection */}
        <div className="mb-6">
          <label htmlFor="paymentMethod" className="block text-gray-700 font-bold mb-2">Payment Method</label>
          <select id="paymentMethod" name="paymentMethod" value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)} className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
            <option value="credit_card">Credit Card</option>
            <option value="debit_card">Debit Card</option>
            <option value="paypal">PayPal</option>
          </select>
        </div>
        {/* Card Number Input */}
        <div className="mb-4">
          <label htmlFor="cardNumber" className="block text-gray-700 font-bold mb-2">Card Number</label>
          <input type="text" id="cardNumber" name="cardNumber" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        {/* Expiry Date Input */}
        <div className="mb-4">
          <label htmlFor="expiryDate" className="block text-gray-700 font-bold mb-2">Expiry Date</label>
          <input type="text" id="expiryDate" name="expiryDate" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        {/* CVV Input */}
        <div className="mb-6">
          <label htmlFor="cvv" className="block text-gray-700 font-bold mb-2">CVV</label>
          <input type="text" id="cvv" name="cvv" value={cvv} onChange={(e) => setCvv(e.target.value)} className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        {/* Submit Button */}
        <div className="flex items-center justify-center">
          <button onClick={()=>handlePay()} type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Pay Now</button>
        </div>
      </form>
    </div>
  );
};

export default PaymentMethodForm;
