import React, { useEffect, useState } from 'react';
import Card from './component/Card';

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = () => {
      fetch('https://fakestoreapi.com/products')
        .then(response => {
          return response.json();
        })
        .then(data => {
          setProducts(data);
        })
       
    };

    fetchProducts();
  }, []);

 

  return (
    <>
    <div className="w-full bg-[lightgray] p-4 flex justify-center items-center flex-col">
    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-6">product List</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10">
      {products.map(item => (
        <Card key={item.id} product={item} />
      ))}
    </div>
  </div>
  </>
  );
};

export default App;
