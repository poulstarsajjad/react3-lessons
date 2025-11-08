import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Shop from "./pages/shop/Shop";
import Blog from "./pages/blog/Blog";
import Contact from "./pages/contact/Contact";
import Cart from "./pages/cart/Cart";
import Auth from "./pages/auth/Auth";
import ProductItem from "./pages/productItem/ProductItem";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/shop/:id" element={<ProductItem />} />
    </Routes>
  )
}

export default App;
