import { Link } from "react-router-dom";
import Container from "../container/Container";

function Footer() {

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

    const help = [
        {name: 'Payment Options'},
        {name: 'Returns'},
        {name: 'Privacy Policies'}
    ];

  return (
    <div>
      <div className="h-0.5 bg-gray-300 mb-15"></div>
      <Container>
        <div className="grid grid-cols-6 gap-10">
            <div className="flex flex-col col-span-2">
                <h3 className="text-3xl font-bold mb-10">Poul Star</h3>
                <p className="text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing <br /> Ex doloribus, <br /> exercitationem nesciunt
                </p>
            </div>

            <div>
                <h3 className="text-gray-400 font-semibold mb-12">Links</h3>
                <ul className="flex flex-col gap-10 font-semibold">
                    {
                        navs.map((nav)=>(
                            <li key={nav.link} className="cursor-pointer transition duration-300 hover:text-orange-400">
                                <Link to={nav.link}>{nav.name}</Link>
                            </li>
                        ))
                    }
                </ul>
            </div>

            <div>
                <h3 className="text-gray-400 font-semibold mb-12">Help</h3>
                <ul className="flex flex-col gap-10 font-semibold">
                    {
                        help.map((item)=>(
                            <li key={item.name} className="cursor-pointer transition duration-300 hover:text-orange-400">{item.name}</li>
                        ))
                    }
                </ul>
            </div>

            <div className="col-span-2">
                <h3 className="text-gray-400 font-semibold mb-10">Newsletter</h3>
                <div className="flex gap-5">
                    <input className="border-b outline-none py-2 focus:border-b-orange-400" type="text" placeholder="Enter Your Email" />
                    <button className="border-b cursor-pointer text-sm font-medium transition duration-300 hover:text-orange-400">SUBSCRIBE</button>
                </div>
            </div>
        </div>

        <div className="h-0.5 bg-gray-300 mt-15"></div>

        <p className="font-medium my-10">
            2026 Poul Star &copy; All rights reverved
        </p>
      </Container>
    </div>
  )
}

export default Footer;
