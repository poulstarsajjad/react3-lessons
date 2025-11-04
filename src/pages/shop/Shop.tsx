import Banner from "../../components/banner/Banner";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import StoreBenefits from "../../components/storeBenefits/StoreBenefits";


function Shop() {
  return (
    <div>
      <Navbar />
      <Banner title="Shop" />

      <StoreBenefits />
      <Footer />
    </div>
  )
}

export default Shop;
