// import { Link } from "react-router-dom";
// import Container from "../container/Container";
// import { useEffect, useState } from "react";


// function Navbar() {

//     const navs = [
//         {
//             name: "Home",
//             link: "/"
//         },
//         {
//             name: "Shop",
//             link: "/shop"
//         },
//         {
//             name: "Blog",
//             link: "/blog"
//         },
//         {
//             name: "Contact",
//             link: "/contact"
//         }
//     ];

//     const [user , setUser] = useState(null);

//     useEffect(() => {
//     const storedUser = localStorage.getItem("user");
//     if (storedUser) {
//       setUser(JSON.parse(storedUser));
//     }
//   }, []);

//   return (
//     <div className="w-full h-20 grid items-center">
//       <Container>
//         <div className="grid grid-cols-3 items-center">
//             <div className="flex items-center justify-center w-24">
//                 <img src="logo.png" alt="logo" />
//             </div>

//             <ul className="flex items-center justify-center gap-15">
//                 {
//                     navs.map((nav)=>(
//                         <li className="text-xl text-orange-400 text-shadow-sm text-shadow-orange-500 font-medium cursor-pointer transition duration-300 hover:text-orange-300" key={nav.name}>
//                             <Link to={nav.link}>{nav.name}</Link>
//                         </li>
//                     ))
//                 }
//             </ul>

//             <ul className="flex justify-end items-center gap-10"> 
//                 <li className=" ">           
//                     <Link to="/auth" className="flex items-center justify-center gap-2">
//                         {user && (
//                             <span className="text-lg font-medium text-orange-500">
//                                 {user.username}
//                             </span>
//                         )}
//                         <span className="w-7 transition duration-200 hover:scale-120">
//                             <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M0 0h48v48H0z" fill="none"></path> <g id="Shopicon"> <path d="M31.278,25.525C34.144,23.332,36,19.887,36,16c0-6.627-5.373-12-12-12c-6.627,0-12,5.373-12,12 c0,3.887,1.856,7.332,4.722,9.525C9.84,28.531,5,35.665,5,44h38C43,35.665,38.16,28.531,31.278,25.525z M16,16c0-4.411,3.589-8,8-8 s8,3.589,8,8c0,4.411-3.589,8-8,8S16,20.411,16,16z M24,28c6.977,0,12.856,5.107,14.525,12H9.475C11.144,33.107,17.023,28,24,28z"></path> </g> </g></svg>
//                         </span>
//                     </Link>
//                 </li>
                
//                 <li className="w-7 transition duration-200 hover:scale-120">              
//                     <Link to="/cart">
//                         <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
//                     </Link>
//                 </li>
//             </ul>
//         </div>
//       </Container>
//     </div>
//   )
// }

// export default Navbar;









import { Link } from "react-router-dom";
import Container from "../container/Container";
import { useEffect, useRef, useState } from "react";

function Navbar() {
  const navs = [
    { name: "Home", link: "/" },
    { name: "Shop", link: "/shop" },
    { name: "Blog", link: "/blog" },
    { name: "Contact", link: "/contact" }
  ];

  const [user, setUser] = useState(null);
  const [open, setOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const dropdownRef = useRef(null);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  // close on outside click
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // LOGIN (DummyJSON)
  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (!res.ok) throw new Error("Invalid credentials");

      const data = await res.json();
      localStorage.setItem("user", JSON.stringify(data));
      localStorage.setItem("token", data.token);
      setUser(data);
      setOpen(false);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
    setOpen(false);
  };

  return (
    <div className="w-full h-20 grid items-center">
      <Container>
        <div className="grid grid-cols-3 items-center">
          {/* Logo */}
          <div className="flex items-center justify-center w-24">
            <img src="logo.png" alt="logo" />
          </div>

          {/* Navs */}
          <ul className="flex items-center justify-center gap-15">
            {navs.map((nav) => (
              <li key={nav.name} className="text-xl text-orange-400 text-shadow-sm text-shadow-orange-500 font-medium cursor-pointer transition duration-300 hover:text-orange-300">
                <Link to={nav.link}>{nav.name}</Link>
              </li>
            ))}
          </ul>

          {/* Account */}
          <ul className="flex justify-end items-center gap-6">
            <li ref={dropdownRef} className="relative">
              <button onClick={() => setOpen((p) => !p)} className="flex items-center gap-2">
                {user && (
                  <span className="text-gray-700 text-lg font-medium">
                    Welcome <span className="text-lg text-orange-400 font-bold">{user.username}</span>
                  </span>
                )}

                <span className="w-7 transition duration-200 hover:scale-120 cursor-pointer">
                   <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M0 0h48v48H0z" fill="none"></path> <g id="Shopicon"> <path d="M31.278,25.525C34.144,23.332,36,19.887,36,16c0-6.627-5.373-12-12-12c-6.627,0-12,5.373-12,12 c0,3.887,1.856,7.332,4.722,9.525C9.84,28.531,5,35.665,5,44h38C43,35.665,38.16,28.531,31.278,25.525z M16,16c0-4.411,3.589-8,8-8 s8,3.589,8,8c0,4.411-3.589,8-8,8S16,20.411,16,16z M24,28c6.977,0,12.856,5.107,14.525,12H9.475C11.144,33.107,17.023,28,24,28z"></path> </g> </g></svg>
                </span>
              </button>

              {/* DROPDOWN */}
              {open && (
                <div className="absolute right-0 mt-1 w-85 bg-orange-100 shadow-md shadow-gray-500 rounded-2xl p-5 z-50">
                  {!user ? (
                    <>
                      {/* Tabs */}
                      <div className="flex gap-4 mb-5">
                        <button onClick={() => setIsLogin(true)} className={`font-medium cursor-pointer ${isLogin ? "text-orange-500" : "text-gray-400"}`}>
                          Login
                        </button>
                        <button onClick={() => setIsLogin(false)} className={`font-medium cursor-pointer ${!isLogin ? "text-orange-500" : "text-gray-400"}`}>
                          Register
                        </button>
                      </div>

                      {/* Login Form */}
                      {isLogin && (
                        <form
                          onSubmit={handleLogin}
                          className="flex flex-col gap-4"
                        >
                          <input
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="border border-gray-400 px-3 py-2 rounded outline-orange-400"
                          />
                          <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="border border-gray-400 px-3 py-2 rounded outline-orange-400"
                          />

                          {error && (
                            <span className="text-sm text-red-500">
                              {error}
                            </span>
                          )}

                          <button className="text-xl font-semibold bg-orange-400 text-white py-2 rounded-md mt-2 cursor-pointer transition duration-300 hover:bg-orange-500">
                            Login
                          </button>
                        </form>
                      )}

                      {/* Register (Fake) */}
                      {!isLogin && (
                        <p className="text-sm text-gray-500">
                          Register is demo-only.
                        </p>
                      )}
                    </>
                  ) : (
                    <>
                      <p className="text-center text-xl font-medium mb-3">
                        Username: <span className="text-lg text-gray-600">{user.username}</span>
                      </p>
                      <button onClick={handleLogout} className="w-full bg-red-600 text-white py-2 rounded cursor-pointer transition duration-300 hover:bg-red-700">
                        Logout
                      </button>
                    </>
                  )}
                </div>
              )}
            </li>

            {/* Cart */}
            <li className="w-7 transition duration-200 hover:scale-120">
               <Link to="/cart">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
               </Link>
            </li>  
          </ul>
        </div>
      </Container>
    </div>
  );
}

export default Navbar;
