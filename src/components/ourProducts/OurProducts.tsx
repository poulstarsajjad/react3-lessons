import axios from "axios";
import { useEffect, useState } from "react";
import Product from "../product/Product";
import Loading from "../loading/Loading";
import type { Iproducts } from "../../types/types";

function OurProducts() {

    const [products , setProducts] = useState<Iproducts[]>([]);
    const [showAll, setShowAll] = useState(false);
    const [isLoading , setIsLoading] = useState(false);

    useEffect(()=>{
        setIsLoading(true);
        axios.get("https://dummyjson.com/products?limit=20&skip=172")
        .then((result)=>{
            setProducts(result.data.products);
            setIsLoading(false);
        })
    } , []);

    const visibleProducts = showAll ? products : products.slice(0, 8);

    const toggleShowAll = () => {
        setShowAll((prev) => !prev);
    };

  return (
    <div>
        {
            isLoading ? <Loading /> : (
                <div className="grid grid-cols-4 gap-10">
                    {
                        visibleProducts.map((item)=>(
                            <Product key={item.id} {...item} />
                        ))
                    }
                </div>
            )
        }

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


//https://dummyjson.com/products?limit=20&skip=172
