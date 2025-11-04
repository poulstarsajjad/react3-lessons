import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

interface IProduct {
  id: number;
  title: string;
  images: string[];
}

function Slider() {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=6&skip=189")
      .then(res => res.json())
      .then((data: { products: IProduct[] }) => {
        const imgs = data.products.map(item => item.images[0]);
        setImages(imgs);
      })
      .catch(err => console.error("Error fetching images:", err));
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
        {images.length > 0 ? (
          images.map((src, i) => (
            <SwiperSlide key={i}>
              <img
                src={src}
                alt={`slide-${i}`}
                className="w-full h-[400px] object-cover"
              />
            </SwiperSlide>
          ))
        ) : (
          <p className="text-center mt-20 text-gray-500">
            در حال بارگذاری...
          </p>
        )}
      </Swiper>
    </div>
  );
}

export default Slider;
