import Container from "../../components/container/Container";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import OurProducts from "../../components/ourProducts/OurProducts";
import Slider from "../../components/slider/Slider";


function Home() {
  return (
    <div>
      <Navbar />
      <Header />

      <Container>
        <div className="my-15 mx-auto text-center">
          <h2 className="text-4xl font-bold">Browse The Range</h2>
          <p className="text-gray-600 mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam fugit minima
          </p>
        </div>

      
        <div className="flex gap-10 mb-20">
          <div className="hover:scale-95 transition duration-500 hover:bg-orange-50 text-orange-400">
            <img src="https://cdn.dummyjson.com/product-images/womens-jewellery/green-crystal-earring/3.webp" alt="" />
            <h4 className="text-2xl font-medium ml-5 mb-5 text-center">Jewellery</h4>
          </div>

          <div className="hover:scale-95 transition duration-500 hover:bg-orange-50 text-orange-400">
            <img src="https://cdn.dummyjson.com/product-images/womens-shoes/calvin-klein-heel-shoes/4.webp" alt="" />
            <h4 className="text-2xl font-medium ml-5 mb-5 text-center">shoes</h4>
          </div>

          <div className="hover:scale-95 transition duration-500 hover:bg-orange-50 text-orange-400">
            <img src="https://cdn.dummyjson.com/product-images/womens-watches/rolex-cellini-moonphase/1.webp" alt="" />
            <h4 className="text-2xl font-medium ml-5 mb-5 text-center">watches</h4>
          </div>
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

      <Footer />
    </div>
  )
}

export default Home;
