import type { Iproducts } from "../../types/types";


function Product({...item}: Iproducts) {
  return (
    <div className="bg-orange-50 pb-5 opacity-0 animate-fadeIn transition duration-300 hover:bg-orange-100" key={item.id}>
        <img className="w-full h-2/3" src={item.images[0]} alt="" />
        <h2 className="text-2xl font-bold px-5 line-clamp-1">{item.title}</h2>
        <p className="text-gray-500 px-5 my-3 line-clamp-2">{item.description}</p>
        <span className="font-bold px-5 ">{item.price} $</span>
    </div>
  )
}

export default Product;
