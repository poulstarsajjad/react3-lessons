import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Banner from "../../components/banner/Banner";
import Container from "../../components/container/Container";
import { Rating } from 'react-simple-star-rating';
import { useShoppingCartContext } from "../../context/ShoppingCartContext";
import Loading from "../../components/loading/Loading";
import type { Iproducts } from "../../types/types";

function ProductItem() {
    const params = useParams();
    const [productItem , setProductItem] = useState<Iproducts | null>(null);
    const {handleIncreaseProductQty , handleDecreaseProductQty , getProductQty} = useShoppingCartContext();
    const [isLoading , setIsLoading] = useState(false);

    useEffect(()=>{
        setIsLoading(true);
        axios.get(`https://dummyjson.com/products/${params.id}`)
        .then((result)=>{
            setProductItem(result.data);
            setIsLoading(false);
        })
    } , []);

  return (
    <div>
      <Banner title={productItem?.title} />
      <Container>
        {
          isLoading ? <Loading /> : (
            <div className="grid grid-cols-2 items-center gap-10 my-15">
              <div className="grid grid-cols-4 gap-5 items-center">
                <div className="flex flex-col gap-5">
                  <img className="shadow-md shadow-orange-400 rounded-xl" src={productItem?.images?.[0]} alt="" />
                  <img className="shadow-md shadow-orange-400 rounded-xl" src={productItem?.images?.[1]} alt="" />
                  <img className="shadow-md shadow-orange-400 rounded-xl" src={productItem?.images?.[2]} alt="" />
                </div>
                <div className="col-span-3">
                  <img className="shadow-md shadow-orange-400 rounded-xl" src={productItem?.images?.[0]} alt="" />
                </div>
              </div>
              
              <div>
                <h1 className="text-3xl font-bold">{productItem?.title}</h1>
                <p className="text-xl text-gray-500 font-medium my-5">{productItem?.price}$</p>

                <div className="flex items-center gap-2 my-3">
                  <Rating
                    readonly       // فقط برای نمایش (غیرفعال برای کاربر)
                    initialValue={productItem?.rating}  // مقدار از API
                    allowFraction   // نمایش اعشاری (مثلاً 4.3)
                    size={30}
                    fillColor="#facc15"
                    SVGstyle={{ display: 'inline' }} 
                  />
                  <span className="text-sm text-gray-500">
                    ({productItem?.rating})
                  </span>
                </div>

                <p className="text-sm w-2/3 leading-7">{productItem?.description}</p>

                <div className="flex gap-20 items-center mt-10">
                  <div className="flex items-center gap-5 border-2 border-orange-500 rounded-md">
                    <button className="cursor-pointer transition duration-300 hover:scale-95" onClick={()=>handleDecreaseProductQty(parseInt(params.id as string))}>
                      <svg width="35px" height="35px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlnsSketch="http://www.bohemiancoding.com/sketch/ns" fill="#ff6900"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>minus-square</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" sketchType="MSPage"> <g id="Icon-Set-Filled" sketchType="MSLayerGroup" transform="translate(-154.000000, -1037.000000)" fill="#ff6900"> <path d="M176,1054 L164,1054 C163.448,1054 163,1053.55 163,1053 C163,1052.45 163.448,1052 164,1052 L176,1052 C176.552,1052 177,1052.45 177,1053 C177,1053.55 176.552,1054 176,1054 L176,1054 Z M182,1037 L158,1037 C155.791,1037 154,1038.79 154,1041 L154,1065 C154,1067.21 155.791,1069 158,1069 L182,1069 C184.209,1069 186,1067.21 186,1065 L186,1041 C186,1038.79 184.209,1037 182,1037 L182,1037 Z" id="minus-square" sketchType="MSShapeGroup"> </path> </g> </g> </g></svg>
                    </button>
                    <span className="text-xl font-bold text-gray-600 text-center w-4">{getProductQty(parseInt(params.id as string))}</span>
                    <button className="cursor-pointer transition duration-300 hover:scale-95" onClick={()=>handleIncreaseProductQty(parseInt(params.id as string))}>
                      <svg width="35px" height="35px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlnsSketch="http://www.bohemiancoding.com/sketch/ns" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>plus-square</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"> <g id="Icon-Set-Filled" sketch:type="MSLayerGroup" transform="translate(-102.000000, -1037.000000)" fill="#ff6900"> <path d="M124,1054 L119,1054 L119,1059 C119,1059.55 118.552,1060 118,1060 C117.448,1060 117,1059.55 117,1059 L117,1054 L112,1054 C111.448,1054 111,1053.55 111,1053 C111,1052.45 111.448,1052 112,1052 L117,1052 L117,1047 C117,1046.45 117.448,1046 118,1046 C118.552,1046 119,1046.45 119,1047 L119,1052 L124,1052 C124.552,1052 125,1052.45 125,1053 C125,1053.55 124.552,1054 124,1054 L124,1054 Z M130,1037 L106,1037 C103.791,1037 102,1038.79 102,1041 L102,1065 C102,1067.21 103.791,1069 106,1069 L130,1069 C132.209,1069 134,1067.21 134,1065 L134,1041 C134,1038.79 132.209,1037 130,1037 L130,1037 Z" id="plus-square" sketch:type="MSShapeGroup"> </path> </g> </g> </g></svg>
                    </button>
                  </div>
                  <div>
                    <button className="bg-orange-400 text-orange-50 rounded py-3 px-10 cursor-pointer transition duration-300 hover:bg-orange-500" onClick={()=>handleIncreaseProductQty(parseInt(params.id as string))}>Add to cart</button>
                  </div>
                </div>
              </div>
            </div>
          )
        }
      </Container>
    </div>
  )
}

export default ProductItem;
