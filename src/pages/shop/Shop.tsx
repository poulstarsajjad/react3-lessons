// import { useEffect, useState } from "react";
// import Banner from "../../components/banner/Banner";
// import StoreBenefits from "../../components/storeBenefits/StoreBenefits";
// import type { Iproducts } from "../../components/ourProducts/OurProducts";
// import axios from "axios";
// import Product from "../../components/product/Product";
// import Container from "../../components/container/Container";
// import { Link } from "react-router-dom";

// function Shop() {

//   const [products , setProducts] = useState<Iproducts[]>([]);

//   useEffect(()=>{
//     axios.get('https://dummyjson.com/products?limit=20&skip=172')
//     .then((result)=>{
//       setProducts(result.data.products)
//     })
//   } , []);
//   return (
//     <div>
//       <Banner title="Shop" />
//         <Container>
//           <div className="grid grid-cols-4 gap-10 my-15">
//             {
//               products.map((item)=>(
//                 <Link to={`/shop/${item.id}`} key={item.id}>
//                   <Product {...item} />
//                 </Link>
//               ))
//             }
//           </div>
//         </Container>
//       <StoreBenefits />
//     </div>
//   )
// }

// export default Shop;





// import { useEffect, useState } from "react";
// import Banner from "../../components/banner/Banner";
// import StoreBenefits from "../../components/storeBenefits/StoreBenefits";
// import type { Iproducts } from "../../components/ourProducts/OurProducts";
// import axios from "axios";
// import Product from "../../components/product/Product";
// import Container from "../../components/container/Container";
// import { Link } from "react-router-dom";

// function Shop() {
//   const [products, setProducts] = useState<Iproducts[]>([]);
//   const [selectedCategory, setSelectedCategory] = useState<string>("All");

//   useEffect(() => {
//     axios.get('https://dummyjson.com/products?limit=20&skip=172')
//       .then((result) => {
//         setProducts(result.data.products);
//       });
//   }, []);

//   // ۱. پیدا کردن دسته‌بندی‌های یکتا (Unique Categories)
//   const categories = ["All", ...new Set(products.map(p => p.category))];

//   // ۲. فیلتر کردن محصولات بر اساس انتخاب کاربر
//   const filteredProducts = selectedCategory === "All" 
//     ? products 
//     : products.filter(p => p.category === selectedCategory);

//   return (
//     <div>
//       <Banner title="Shop" />
      
//       <Container>
//         {/* بخش دکمه‌های فیلتر */}
//         <div className="flex justify-center gap-4 my-8 flex-wrap">
//           {categories.map(cat => (
//             <button
//               key={cat}
//               onClick={() => setSelectedCategory(cat)}
//               className={`capitalize px-6 py-2 rounded-full border-2 transition-all cursor-pointer ${
//                 selectedCategory === cat 
//                 ? "bg-orange-400 text-white border-orange-400" 
//                 : "border-gray-200 text-gray-600 hover:border-orange-400"
//               }`}
//             >
//               {/* نمایش زیبا: حذف خط تیره و بزرگ کردن حرف اول */}
//               {cat === "All" ? "All" : cat.split('-')[1] || cat.split('-')[0]}
//             </button>
//           ))}
//         </div>

//         {/* نمایش محصولات فیلتر شده */}
//         <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 my-15">
//           {filteredProducts.map((item) => (
//             <Link to={`/shop/${item.id}`} key={item.id}>
//               <Product {...item} />
//             </Link>
//           ))}
//         </div>

//         {/* نمایش پیام در صورت نبود محصول */}
//         {filteredProducts.length === 0 && (
//           <p className="text-center text-gray-500 my-10">No products found in this category.</p>
//         )}
//       </Container>

//       <StoreBenefits />
//     </div>
//   );
// }

// export default Shop;






import { useEffect, useState } from "react";
import Banner from "../../components/banner/Banner";
import StoreBenefits from "../../components/storeBenefits/StoreBenefits";
import axios from "axios";
import Product from "../../components/product/Product";
import Container from "../../components/container/Container";
import { Link } from "react-router-dom";
import Loading from "../../components/loading/Loading";
import type { Iproducts } from "../../types/types";

function Shop() {
  const [products, setProducts] = useState<Iproducts[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  
  // ۱. استیت برای صفحه فعلی
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8; // تعداد محصول در هر صفحه

  const [isLoading , setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios.get('https://dummyjson.com/products?limit=20&skip=172')
      .then((result) => {
        setProducts(result.data.products);
        setIsLoading(false)
      });
  }, []);

  // ۲. فیلتر کردن محصولات (مثل قبل)
  const filteredProducts = selectedCategory === "All" 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  // ۳. منطق صفحه‌بندی
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // محصولاتی که فقط در صفحه فعلی نمایش داده می‌شوند
  const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

  // ۴. محاسبه تعداد کل صفحات
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  // ۵. هندل کردن تغییر دسته‌بندی (ریست کردن صفحه به ۱)
  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    setCurrentPage(1); // وقتی دسته‌بندی عوض شد، برگرد به صفحه اول
  };

  return (
    <div>
      <Banner title="Shop" />
      
      <Container>
        {/* بخش دکمه‌های فیلتر */}
        {
          isLoading ? <Loading /> : (
            <div className="flex justify-center gap-4 my-8 flex-wrap">
              {["All", ...new Set(products.map(p => p.category))].map(cat => (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className={`capitalize px-6 py-2 rounded-full border-2 transition-all cursor-pointer ${
                    selectedCategory === cat 
                    ? "bg-orange-400 text-white border-orange-400" 
                    : "border-gray-200 text-gray-600 hover:border-orange-400"
                  }`}
                >
                  {cat === "All" ? "All" : cat.split('-')[1] || cat.split('-')[0]}
                </button>
              ))}
            </div>
          )
        }

        {/* نمایش محصولات صفحه فعلی */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 my-15">
          {currentItems.map((item) => (
            <Link to={`/shop/${item.id}`} key={item.id}>
              <Product {...item} />
            </Link>
          ))}
        </div>

        {/* ۶. بخش دکمه‌های صفحه‌بندی */}
        {totalPages > 1 && (
          <div className="flex justify-center gap-2 mb-10">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(pageNumber => (
              <button
                key={pageNumber}
                onClick={() => {
                   setCurrentPage(pageNumber);
                   window.scrollTo(0, 500); // اسکرول به شروع بخش محصولات
                }}
                className={`w-10 h-10 rounded-lg border transition-all cursor-pointer ${
                  currentPage === pageNumber
                  ? "bg-orange-400 text-white border-orange-400"
                  : "border-gray-300 hover:bg-orange-50"
                }`}
              >
                {pageNumber}
              </button>
            ))}
          </div>
        )}
      </Container>

      <StoreBenefits />
    </div>
  );
}

export default Shop;