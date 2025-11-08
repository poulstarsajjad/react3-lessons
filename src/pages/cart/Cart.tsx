import Banner from "../../components/banner/Banner";
import Container from "../../components/container/Container";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import StoreBenefits from "../../components/storeBenefits/StoreBenefits";

function Cart() {
  return (
    <div>
      <Navbar />
      <Banner title="Cart" />
      <Container>
        <div className="grid grid-cols-3 gap-20 mt-20 mb-15">
            <div className="col-span-2 flex flex-col gap-10 w-full">
                <div className="flex justify-between items-center h-40 shadow-md shadow-orange-500">
                    <img className="w-40 h-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWbPJwqEl5UjinrU1gQwaBOl4N1P5SvKNwu7qldHeJI4qaiS2yLSInGPLzPOOomhQmHIk&usqp=CAU" alt="" />
                    <h4 className="text-2xl font-bold text-gray-900">product title</h4>
                    <h4 className="text-xl font-medium text-gray-800">159,000.00$</h4>
                    <div className="flex justify-center items-center gap-5">
                        <button className="cursor-pointer transition duration-300 hover:scale-95">
                            <svg width="25px" height="25px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlnsSketch="http://www.bohemiancoding.com/sketch/ns" fill="#ff6900"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>minus-square</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" sketchType="MSPage"> <g id="Icon-Set-Filled" sketchType="MSLayerGroup" transform="translate(-154.000000, -1037.000000)" fill="#ff6900"> <path d="M176,1054 L164,1054 C163.448,1054 163,1053.55 163,1053 C163,1052.45 163.448,1052 164,1052 L176,1052 C176.552,1052 177,1052.45 177,1053 C177,1053.55 176.552,1054 176,1054 L176,1054 Z M182,1037 L158,1037 C155.791,1037 154,1038.79 154,1041 L154,1065 C154,1067.21 155.791,1069 158,1069 L182,1069 C184.209,1069 186,1067.21 186,1065 L186,1041 C186,1038.79 184.209,1037 182,1037 L182,1037 Z" id="minus-square" sketchType="MSShapeGroup"> </path> </g> </g> </g></svg>
                        </button>
                        <span className="text-lg font-bold text-gray-600 text-center w-4">7</span>
                        <button className="cursor-pointer transition duration-300 hover:scale-95">
                            <svg width="25px" height="25px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlnsSketch="http://www.bohemiancoding.com/sketch/ns" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>plus-square</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"> <g id="Icon-Set-Filled" sketch:type="MSLayerGroup" transform="translate(-102.000000, -1037.000000)" fill="#ff6900"> <path d="M124,1054 L119,1054 L119,1059 C119,1059.55 118.552,1060 118,1060 C117.448,1060 117,1059.55 117,1059 L117,1054 L112,1054 C111.448,1054 111,1053.55 111,1053 C111,1052.45 111.448,1052 112,1052 L117,1052 L117,1047 C117,1046.45 117.448,1046 118,1046 C118.552,1046 119,1046.45 119,1047 L119,1052 L124,1052 C124.552,1052 125,1052.45 125,1053 C125,1053.55 124.552,1054 124,1054 L124,1054 Z M130,1037 L106,1037 C103.791,1037 102,1038.79 102,1041 L102,1065 C102,1067.21 103.791,1069 106,1069 L130,1069 C132.209,1069 134,1067.21 134,1065 L134,1041 C134,1038.79 132.209,1037 130,1037 L130,1037 Z" id="plus-square" sketch:type="MSShapeGroup"> </path> </g> </g> </g></svg>
                        </button>
                    </div>
                    <button className="cursor-pointer transition duration-300 hover:scale-95 mr-10">
                        <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M18 6L17.1991 18.0129C17.129 19.065 17.0939 19.5911 16.8667 19.99C16.6666 20.3412 16.3648 20.6235 16.0011 20.7998C15.588 21 15.0607 21 14.0062 21H9.99377C8.93927 21 8.41202 21 7.99889 20.7998C7.63517 20.6235 7.33339 20.3412 7.13332 19.99C6.90607 19.5911 6.871 19.065 6.80086 18.0129L6 6M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M14 10V17M10 10V17" stroke="#FF0000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                    </button>
                </div>

                <div className="flex justify-between items-center h-40 shadow-md shadow-orange-500">
                    <img className="w-40 h-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWbPJwqEl5UjinrU1gQwaBOl4N1P5SvKNwu7qldHeJI4qaiS2yLSInGPLzPOOomhQmHIk&usqp=CAU" alt="" />
                    <h4 className="text-2xl font-bold text-gray-900">product title</h4>
                    <h4 className="text-xl font-medium text-gray-800">159,000.00$</h4>
                    <div className="flex justify-center items-center gap-5">
                        <button className="cursor-pointer transition duration-300 hover:scale-95">
                            <svg width="25px" height="25px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlnsSketch="http://www.bohemiancoding.com/sketch/ns" fill="#ff6900"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>minus-square</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" sketchType="MSPage"> <g id="Icon-Set-Filled" sketchType="MSLayerGroup" transform="translate(-154.000000, -1037.000000)" fill="#ff6900"> <path d="M176,1054 L164,1054 C163.448,1054 163,1053.55 163,1053 C163,1052.45 163.448,1052 164,1052 L176,1052 C176.552,1052 177,1052.45 177,1053 C177,1053.55 176.552,1054 176,1054 L176,1054 Z M182,1037 L158,1037 C155.791,1037 154,1038.79 154,1041 L154,1065 C154,1067.21 155.791,1069 158,1069 L182,1069 C184.209,1069 186,1067.21 186,1065 L186,1041 C186,1038.79 184.209,1037 182,1037 L182,1037 Z" id="minus-square" sketchType="MSShapeGroup"> </path> </g> </g> </g></svg>
                        </button>
                        <span className="text-lg font-bold text-gray-600 text-center w-4">7</span>
                        <button className="cursor-pointer transition duration-300 hover:scale-95">
                            <svg width="25px" height="25px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>plus-square</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"> <g id="Icon-Set-Filled" sketch:type="MSLayerGroup" transform="translate(-102.000000, -1037.000000)" fill="#ff6900"> <path d="M124,1054 L119,1054 L119,1059 C119,1059.55 118.552,1060 118,1060 C117.448,1060 117,1059.55 117,1059 L117,1054 L112,1054 C111.448,1054 111,1053.55 111,1053 C111,1052.45 111.448,1052 112,1052 L117,1052 L117,1047 C117,1046.45 117.448,1046 118,1046 C118.552,1046 119,1046.45 119,1047 L119,1052 L124,1052 C124.552,1052 125,1052.45 125,1053 C125,1053.55 124.552,1054 124,1054 L124,1054 Z M130,1037 L106,1037 C103.791,1037 102,1038.79 102,1041 L102,1065 C102,1067.21 103.791,1069 106,1069 L130,1069 C132.209,1069 134,1067.21 134,1065 L134,1041 C134,1038.79 132.209,1037 130,1037 L130,1037 Z" id="plus-square" sketch:type="MSShapeGroup"> </path> </g> </g> </g></svg>
                        </button>
                    </div>
                    <button className="cursor-pointer transition duration-300 hover:scale-95 mr-10">
                        <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M18 6L17.1991 18.0129C17.129 19.065 17.0939 19.5911 16.8667 19.99C16.6666 20.3412 16.3648 20.6235 16.0011 20.7998C15.588 21 15.0607 21 14.0062 21H9.99377C8.93927 21 8.41202 21 7.99889 20.7998C7.63517 20.6235 7.33339 20.3412 7.13332 19.99C6.90607 19.5911 6.871 19.065 6.80086 18.0129L6 6M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M14 10V17M10 10V17" stroke="#FF0000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                    </button>
                </div>
                
            </div>
            <div className="col-span-1 bg-orange-50 w-full h-96 p-10">
                <h3 className="text-3xl font-bold text-center">Cart Totals</h3>
                <div className="flex flex-col items-center mt-10 gap-10">
                    <h5 className="text-xl font-semibold flex items-center gap-20">
                        Subtotal
                        <span className="text-lg text-gray-400">280,000.00$</span>
                    </h5>
                    <h5 className="text-xl font-semibold flex items-center gap-20">
                        Total
                        <span className="text-xl text-orange-500">250,000.00$</span>
                    </h5>
                </div>
                <button className="flex justify-center mx-auto mt-15 text-orange-400 font-medium border border-orange-400 py-3 px-15 cursor-pointer transition duration-300 hover:bg-orange-400 hover:text-white">Check Out</button>
            </div>
        </div>
      </Container>
      <StoreBenefits />
      <Footer />
    </div>
  )
}

export default Cart;
