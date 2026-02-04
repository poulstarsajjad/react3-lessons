import { useEffect, useMemo, useState } from "react";
import Banner from "../../components/banner/Banner";
import CartItem from "../../components/cartItem/CartItem";
import Container from "../../components/container/Container";
import StoreBenefits from "../../components/storeBenefits/StoreBenefits";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";
import axios from "axios";
import Loading from "../../components/loading/Loading";
import type { Iproducts } from "../../types/types";

function Cart() {

    const {cartItems} = useShoppingCartContext();
    const [productData , setProductData] = useState<Iproducts[]>([]);
    const [isLoading , setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        axios.get('https://dummyjson.com/products?limit=20&skip=172')
        .then((result) => {
            setProductData(result.data.products);
            setIsLoading(false);
        })
    }, []);

    const totalPrice = useMemo(() => {
        return cartItems.reduce((total, item) => {
        const selected = productData.find((product) => String(product.id) === String(item.id));
        return total + (selected?.price || 0) * item.qty;
        }, 0);
    }, [cartItems, productData]);

  return (
    <div>
      <Banner title="Cart" />
      <Container>
        <div className="grid grid-cols-3 gap-20 mt-20 mb-15">
            {
                isLoading ? <Loading /> : (
                    <div className="col-span-2 flex flex-col gap-10 w-full">
                        {cartItems.map((item)=>(
                            <CartItem key={item.id} {...item} />
                        ))}
                    </div>
                )
            }
            <div className="col-span-1 bg-orange-50 w-full h-80 p-10">
                <h3 className="text-3xl font-bold text-center">Cart Totals</h3>
                <div className="flex flex-col items-center mt-10 gap-10">
                    <h5 className="text-xl font-semibold flex items-center gap-20">
                        Total
                        <span className="text-lg text-gray-400">{totalPrice.toLocaleString()}$</span>
                    </h5>
                </div>
                <button className="flex justify-center mx-auto mt-15 text-orange-400 font-medium border border-orange-400 py-3 px-15 cursor-pointer transition duration-300 hover:bg-orange-400 hover:text-white">Check Out</button>
            </div>
        </div>
      </Container>
      <StoreBenefits />
    </div>
  )
}

export default Cart;
