import Container from "../../components/container/Container";
import Header from "../../components/header/Header";
import OurProducts from "../../components/ourProducts/OurProducts";
import ProductList from "../../components/productList/ProductList";
import Slider from "../../components/slider/Slider";


function Home() {
  return (
    <div>
      <Header />

      <Container>
        <div className="my-15 mx-auto text-center">
          <h2 className="text-4xl font-bold">Browse The Range</h2>
          <p className="text-gray-600 mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam fugit minima
          </p>
        </div>
      
        <div>
          <ProductList />
        </div>

        <div className="my-15 mx-auto text-center">
          <h2 className="text-4xl font-bold">Our Products</h2>
        </div>

        <OurProducts />

      </Container>
      
      <div className="w-full bg-orange-100 mb-15 flex gap-60 items-center justify-center">
        <div className="flex flex-col">
          <h2 className="text-4xl font-bold">
            50+ Luxury products <br /> available
          </h2>
          <p className="text-gray-600 my-5">
            Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit Distinctio facere 
          </p>
          <button className="bg-orange-400 text-white font-medium py-3 w-40 cursor-pointer transition duration-300 hover:bg-orange-500">Explore More</button>
        </div>

        <div className="mr-2 w-[300px]">
          <Slider />
        </div>
      </div>

    </div>
  )
}

export default Home;
