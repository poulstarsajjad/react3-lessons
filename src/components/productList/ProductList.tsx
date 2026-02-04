import { useState, useEffect } from 'react';
import type { Iproducts } from '../../types/types';

const ProductList = () => {
  const [products, setProducts] = useState<Iproducts[]>([]);

  // لیست آیدی‌هایی که قصد نمایش آن‌ها را دارید
  const productId = [186, 182, 178];

  useEffect(() => {
    const fetchData = async () => {
        const response = await fetch('https://dummyjson.com/products?limit=20&skip=172');
        const data = await response.json();
        
        // فیلتر کردن داده‌ها بر اساس لیست آیدی‌های مورد نظر
        const filtered = data.products.filter((product: Iproducts )=> 
          productId.includes(product.id)
        );
        setProducts(filtered);
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="flex justify-center gap-10 mb-20">
        {products.map(product => (
          <div key={product.id} className="w-1/3 flex flex-col hover:scale-95 transition duration-500 hover:bg-orange-50 text-orange-400">
            <img src={product.thumbnail} alt="" />
            <h4 className="text-2xl font-medium ml-5 mb-5 text-center capitalize">{product.category.split('-')[1]}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
