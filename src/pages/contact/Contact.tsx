import Banner from "../../components/banner/Banner";
import Container from "../../components/container/Container";
import StoreBenefits from "../../components/storeBenefits/StoreBenefits";

function Contact() {
  return (
    <div>
      <Banner title="Contact" />
      <div className="mt-20">
        <h1 className="text-3xl font-bold text-center mb-3">Get In Touch With Us</h1>
        <p className="text-gray-400 text-center ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus laudantium quas <br /> accusantium soluta repudiandae laboriosam impedit molestiae natus
        </p>

        <Container>
          <div className="grid grid-cols-2 mt-30 mx-30">
          <div className="flex flex-col gap-15">
            <div>
              <h1 className="text-2xl font-bold flex gap-7">
                <span>
                  <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                </span>
                Address
              </h1>
              <p className="ml-18 font-medium text-gray-700">
                Iran-Gilan <br /> Rasht-Golsar
              </p>
            </div>

            <div>
              <h1 className="text-2xl font-bold flex gap-7">
                <span>
                  <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14.3308 15.9402L15.6608 14.6101C15.8655 14.403 16.1092 14.2384 16.3778 14.1262C16.6465 14.014 16.9347 13.9563 17.2258 13.9563C17.517 13.9563 17.8052 14.014 18.0739 14.1262C18.3425 14.2384 18.5862 14.403 18.7908 14.6101L20.3508 16.1702C20.5579 16.3748 20.7224 16.6183 20.8346 16.887C20.9468 17.1556 21.0046 17.444 21.0046 17.7351C21.0046 18.0263 20.9468 18.3146 20.8346 18.5833C20.7224 18.8519 20.5579 19.0954 20.3508 19.3L19.6408 20.02C19.1516 20.514 18.5189 20.841 17.8329 20.9541C17.1469 21.0672 16.4427 20.9609 15.8208 20.6501C10.4691 17.8952 6.11008 13.5396 3.35083 8.19019C3.03976 7.56761 2.93414 6.86242 3.04914 6.17603C3.16414 5.48963 3.49384 4.85731 3.99085 4.37012L4.70081 3.65015C5.11674 3.23673 5.67937 3.00464 6.26581 3.00464C6.85225 3.00464 7.41488 3.23673 7.83081 3.65015L9.40082 5.22021C9.81424 5.63615 10.0463 6.19871 10.0463 6.78516C10.0463 7.3716 9.81424 7.93416 9.40082 8.3501L8.0708 9.68018C8.95021 10.8697 9.91617 11.9926 10.9608 13.04C11.9994 14.0804 13.116 15.04 14.3008 15.9102L14.3308 15.9402Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                </span>
                Phone
              </h1>
              <p className="ml-18 font-medium text-gray-700">
                Mobile: +98 9123456789 <br /> Hotline: +98 013-12345678
              </p>
            </div>

            <div>
              <h1 className="text-2xl font-bold flex gap-7">
                <span>
                  <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 7V12L10.5 14.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                </span>
                Working Time
              </h1>
              <p className="ml-18 font-medium text-gray-700">
                Saturday - Thursday <br /> 9:00 - 21:00
              </p>
            </div>
            
          </div>
          <div>
            <form className="flex flex-col mb-20">
              <label className="font-semibold">Your Name</label>
              <input type="text" placeholder="Poul Star" className="border border-gray-400 rounded-md py-3 px-5 outline-none" />
              <label className="mt-20 font-semibold">Email address</label>
              <input type="email" placeholder="example@email.com" className="border border-gray-400 rounded-md py-3 px-5 outline-none" />
              <label className="mt-20 font-semibold">Subject</label>
              <input type="text" placeholder="This is an optional" className="border border-gray-400 rounded-md py-3 px-5 outline-none" />
              <label className="mt-20 font-semibold">Message</label>
              <textarea placeholder="Hi I'd like to ask about" className="border border-gray-400 rounded-md py-5 px-5 outline-none h-40"></textarea>
              <button className="bg-orange-400 text-white font-medium py-3 w-50 cursor-pointer transition duration-300 hover:bg-orange-500 rounded mt-10">Submit</button>

            </form>
          </div>
        </div>
        </Container>
        <StoreBenefits />
      </div>
    </div>
  )
}

export default Contact;
