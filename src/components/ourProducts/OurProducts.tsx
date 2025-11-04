import axios from "axios";
import { useEffect, useState } from "react";

interface Iproducts{
    id: number;
    title: string;
    description: string;
    images: string;
    price: number
}

function OurProducts() {

    const [products , setProducts] = useState<Iproducts[]>([]);
    const [showAll, setShowAll] = useState(false);

    useEffect(()=>{
        axios.get("https://dummyjson.com/products?limit=20&skip=172")
        .then((result)=>{
            setProducts(result.data.products);
        })
    } , []);

    const visibleProducts = showAll ? products : products.slice(0, 8);

    const toggleShowAll = () => {
        setShowAll((prev) => !prev);
    };

  return (
    <div>
        <div className="grid grid-cols-4 gap-10">
            {
                visibleProducts.map((item)=>(
                    <div className="bg-orange-50 pb-5 opacity-0 animate-fadeIn" key={item.id}>
                        <img src={item.images[0]} alt="" />
                        <h2 className="text-2xl font-bold px-5">{item.title}</h2>
                        <p className="text-gray-500 px-5 my-3 line-clamp-2">{item.description}</p>
                        <span className="font-bold px-5 ">{item.price}$</span>
                    </div>
                ))
            }

        </div>

        {
            products.length > 8 && (
                <div className="flex justify-center mx-auto my-15">
                    <button className="text-orange-400 font-medium border border-orange-400 py-3 px-15 cursor-pointer transition duration-300 hover:bg-orange-400 hover:text-white" onClick={toggleShowAll}>{showAll ? "Show Less" : "Show More"}</button>
                </div>
            )
        }
    </div>
  )
}

export default OurProducts;


//https://dummyjson.com/products?limit=10&skip=171
