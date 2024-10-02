
import React from 'react';

const Card = ({ product }) => {
  return (
    <div className="border-4 rounded-3xl border-black shadow-md p-4 bg-white mx-auto w-full sm:w-[45vw] md:w-[30vw] lg:w-[25vw]"> 
    <img
      src={product.image}
      alt={product.title}
      className="w-full h-60  mb-4 rounded" 
    />
    <h2 className="text-lg font-bold mb-5">{product.title}</h2>
    <p className="text-gray-700 mb-5">{product.description}</p> 
    <p className="font-bold">Price: ${product.price}</p>
    <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
          Buy Now
        </button>
  </div>
  );
};

export default Card;
