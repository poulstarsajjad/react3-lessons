import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Loading from "../loading/Loading";
import type { IProduct } from "../../types/types";

function Slider() {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=6&skip=189")
      .then((res) => res.json())
      .then((data: { products: IProduct[] }) => {
        const imgs = data.products.map(item => item.images[0]);
        setImages(imgs);
      })
  }, []);

  return (
    <div className="w-full h-[400px]">
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 2500 }}
        modules={[Autoplay]}
        className="rounded-2xl overflow-hidden"
      >
        {
          images.length > 0 ? (
            images.map((image) => (
              <SwiperSlide key={image}>
                <img src={image} alt='' className="w-full h-[400px] object-cover"/>
              </SwiperSlide>
            ))
          ) : <Loading />
        }
      </Swiper>
    </div>
  );
}

export default Slider;
