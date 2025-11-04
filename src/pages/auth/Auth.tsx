import { useState } from "react";

function Auth() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const toggleModal = () => setIsOpen(!isOpen);
  const switchMode = () => setIsLogin(!isLogin);

  return (
    <div>
      <button
        onClick={toggleModal}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        {isLogin ? "Login" : "Register"}
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-2xl shadow-lg w-80 relative">
            <h2 className="text-xl font-semibold text-center mb-4">
              {isLogin ? "Login" : "Create Account"}
            </h2>

            <form className="flex flex-col gap-3">
              {!isLogin && (
                <input
                  type="text"
                  placeholder="Username"
                  className="border p-2 rounded-md"
                />
              )}
              <input
                type="email"
                placeholder="Email"
                className="border p-2 rounded-md"
              />
              <input
                type="password"
                placeholder="Password"
                className="border p-2 rounded-md"
              />

              <button
                type="submit"
                className="bg-blue-600 text-white py-2 rounded-md mt-2 hover:bg-blue-700"
              >
                {isLogin ? "Login" : "Register"}
              </button>
            </form>

            <p className="text-sm text-center mt-3">
              {isLogin ? "Don’t have an account?" : "Already have an account?"}{" "}
              <button
                onClick={switchMode}
                className="text-blue-600 hover:underline"
              >
                {isLogin ? "Register" : "Login"}
              </button>
            </p>

            <button
              onClick={toggleModal}
              className="absolute top-2 right-3 text-gray-500 hover:text-black"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Auth;