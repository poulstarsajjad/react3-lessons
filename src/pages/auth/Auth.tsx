import { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Banner from "../../components/banner/Banner";
import Footer from "../../components/footer/Footer";


function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  const switchMode = () => setIsLogin(!isLogin);

  return (
    <div>
      <Navbar />
      <Banner title="Login / Register" />

      <div className="flex items-center justify-center py-15">
        <div className="px-6 py-10 rounded-2xl shadow-md shadow-orange-500 w-90 bg-orange-50">
          <h2 className="text-2xl text-orange-500 font-bold text-center mb-4">
            {isLogin ? "Login" : "Register"}
          </h2>

          <form className="flex flex-col gap-4">
            {!isLogin && (
              <input type="text" placeholder="Username" className="border border-gray-400 py-2 px-4 outline-none rounded-md" />
            )}
            <input type="email" placeholder="Email" className="border border-gray-400 py-2 px-4 outline-none rounded-md"/>
            <input type="password" placeholder="Password" className="border border-gray-400 py-2 px-4 outline-none rounded-md" />

            <button type="submit" className="bg-orange-400 text-white py-2 rounded-md mt-2 cursor-pointer transition duration-300 hover:bg-orange-500">
              {isLogin ? "Login" : "Register"}
            </button>
          </form>
            
          <p className="text-sm text-center mt-3">
            {isLogin ? "Don’t have an account?" : "Already have an account?"}{" "}  {/* برای فاصله متن و دکمه */}
            <button onClick={switchMode} className="text-blue-600 font-medium transition duration-700 hover:underline cursor-pointer">
              {isLogin ? "Register" : "Login"}
            </button>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Auth;
