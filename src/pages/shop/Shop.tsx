import { useEffect, useState } from "react";
import Banner from "../../components/banner/Banner";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import StoreBenefits from "../../components/storeBenefits/StoreBenefits";
import type { Iproducts } from "../../components/ourProducts/OurProducts";
import axios from "axios";
import Product from "../../components/product/Product";
import Container from "../../components/container/Container";
import { Link } from "react-router-dom";


function Shop() {

  const [products , setProducts] = useState<Iproducts[]>([]);

  useEffect(()=>{
    axios.get('https://dummyjson.com/products?limit=20&skip=172')
    .then((result)=>{
      setProducts(result.data.products)
    })
  } , []);
  return (
    <div>
      <Navbar />
      <Banner title="Shop" />
        <Container>
          <div className="grid grid-cols-4 gap-10 my-15">
            {
              products.map((item)=>(
                <Link to={`/shop/${item.id}`} key={item.id}>
                  <Product {...item} />
                </Link>
                
              ))
            }
          </div>
        </Container>
      <StoreBenefits />
      <Footer />
    </div>
  )
}

export default Shop;
