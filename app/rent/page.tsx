// "use client";
// import {useRouter} from 'next/navigation'
// import React from "react";

// const BuyNow = () => {
//   const dayPrice = 3000;
//   const weekPrice = 15000;
//   const monthPrice = 50000;

//   const router = useRouter()
//   const handleForm =()=>{

//     router.push('/payment')
//   }

//   return (
//     <section className="bg-gray-100 py-12">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="text-3xl font-extrabold text-gray-900 mb-6 flex justify-center">Rent a Car</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {/* Card for Rent for a Day */}
//           <div className="bg-white p-8 rounded-lg shadow-md">
//             <h3 className="text-xl font-semibold mb-4">Rent for a Day</h3>
//             <p className="text-gray-700">Rent a car for a day at just ₹{dayPrice}. Not much discount in the 1-day package.</p>
//             <div className="mt-6">
//               <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
//               onClick={()=>handleForm()}
//               >
//                 Rent Now
//               </button>
//             </div>
//           </div>

//           {/* Card for Rent for a Week */}
//           <div className="bg-white p-8 rounded-lg shadow-md">
//             <h3 className="text-xl font-semibold mb-4">Rent for a Week</h3>
//             <p className="text-gray-700">Rent a car for a week at just ₹{weekPrice}. Get a discount compared to the 1-day package!</p>
//             <div className="mt-6">
//               <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
//                 Rent Now
//               </button>
//             </div>
//           </div>

//           {/* Card for Rent for a Month */}
//           <div className="bg-white p-8 rounded-lg shadow-md">
//             <h3 className="text-xl font-semibold mb-4">Rent for a Month</h3>
//             <p className="text-gray-700">Rent a car for a month at just ₹{monthPrice}. Enjoy a larger discount compared to shorter durations!</p>
//             <div className="mt-6">
//               <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
//                 Rent Now
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
// export default BuyNow;

import SubscriptionCard from "@/components/SubsciptionCard";
import React from "react";

const BuyNow = () => {
  const packages = [
    {
      title: "1 Day",
      price: 3000,
      features: ["Feature 1", "Feature 2", "Feature 3"],
    },
    {
      title: "1 Week",
      price: 15000,
      features: ["Feature 1", "Feature 2", "Feature 3"],
    },
    {
      title: "1 Month",
      price: 50000,
      features: ["Feature 1", "Feature 2", "Feature 3"],
    },
  ];

  return (
    <div className="container mt-4 px-4 py-8">
      <h1 className="text-3xl font-semibold mb-8 flex justify-center mt-10">
        Subscription Packages
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12">
        {packages.map((packag, index) => (
          <SubscriptionCard
            key={index}
            title={packag.title}
            price={packag.price}
            features={packag.features}
          />
        ))}
      </div>
    </div>
  );
};

export default BuyNow;
