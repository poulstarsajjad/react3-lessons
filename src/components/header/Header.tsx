import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="bg-[url('/header5.jpg')] bg-cover bg-center w-full h-lvh relative">
      <div className="bg-orange-100 w-1/2 h-1/2 absolute right-15 top-1/4 flex flex-col pl-10 py-10 shadow-lg">
        <h3 className="font-semibold mb-3 tracking-widest">New Arrival</h3>
        <h1 className="text-orange-400 text-5xl font-bold mb-5">
            Discover Our <br /> New Collection
        </h1>
        <p className="font-medium mb-5 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum vel ipsa facere sed  <br /> similique consectetur suscipit, inventore doloribus! Exercitationem,
        </p>
        <Link to="/shop">
          <button className="bg-orange-400 border-orange-400 py-5 w-60 text-white font-medium cursor-pointer transition duration-300 hover:bg-orange-500">BUY NOW</button>
        </Link>
      </div>
    </div>
  )
}

export default Header;
