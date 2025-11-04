import Container from "../container/Container";


function Footer() {
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
                    <li>Home</li>
                    <li>Shop</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>

            <div>
                <h3 className="text-gray-400 font-semibold mb-12">Help</h3>
                <ul className="flex flex-col gap-10 font-semibold">
                    <li>Payment Options</li>
                    <li>Returns</li>
                    <li>Privacy Policies</li>
                </ul>
            </div>

            <div className="col-span-2">
                <h3 className="text-gray-400 font-semibold mb-10">Newsletter</h3>
                <div className="flex gap-5">
                    <input className="border-b outline-none py-2" type="text" placeholder="Enter Your Email" />
                    <button className="border-b cursor-pointer text-sm font-medium transition duration-300 hover:text-orange-400">SUBSCRIBE</button>
                </div>
            </div>
        </div>

        <div className="h-0.5 bg-gray-300 mt-15"></div>

        <p className="font-medium my-10">
            2025 Poul Star. All rights reverved
        </p>
      </Container>
    </div>
  )
}

export default Footer;
