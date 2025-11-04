import { Link } from "react-router-dom";
import Container from "../container/Container";


function Navbar() {

    const navs = [
        {
            name: "Home",
            link: "/"
        },
        {
            name: "Shop",
            link: "/shop"
        },
        {
            name: "Blog",
            link: "/blog"
        },
        {
            name: "Contact",
            link: "/contact"
        }
    ];

    const btns = [
        {
            svg: (<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14.9536 14.9458L21 21M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>),
            link: "/search"
        },
        {
            svg: (<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M0 0h48v48H0z" fill="none"></path> <g id="Shopicon"> <path d="M31.278,25.525C34.144,23.332,36,19.887,36,16c0-6.627-5.373-12-12-12c-6.627,0-12,5.373-12,12 c0,3.887,1.856,7.332,4.722,9.525C9.84,28.531,5,35.665,5,44h38C43,35.665,38.16,28.531,31.278,25.525z M16,16c0-4.411,3.589-8,8-8 s8,3.589,8,8c0,4.411-3.589,8-8,8S16,20.411,16,16z M24,28c6.977,0,12.856,5.107,14.525,12H9.475C11.144,33.107,17.023,28,24,28z"></path> </g> </g></svg>),
            link: "/profile"
        },
        {
            svg: (<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>),
            link: "/cart"
        }
    ];

  return (
    <div className="w-full h-20 flex items-center">
      <Container>
        <div className="grid grid-cols-3 items-center">
            <div className="w-24">
                <img src="logo.png" alt="logo" />
            </div>

            <ul className="flex justify-center gap-15 ">
                {
                    navs.map((nav)=>(
                        <li className="text-xl text-orange-400 text-shadow-sm text-shadow-orange-500 font-medium cursor-pointer transition duration-300 hover:text-orange-300" key={nav.name}>
                            <Link to={nav.link}>{nav.name}</Link>
                        </li>
                    ))
                }
            </ul>

            <ul className="flex justify-end items-center gap-10">
                {
                    btns.map((item)=>(
                        <li key={item.link} className="w-6 transition duration-200 hover:scale-120">
                            <Link to={item.link}>{item.svg}</Link>
                        </li>
                    ))
                }
            </ul>
        </div>
      </Container>
    </div>
  )
}

export default Navbar;
