import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false); // For mobile menu
  const navigate = useNavigate();

  const adminEmail = "ala";
  const adminPassword = "123123";

  const toggleLogin = () => {
    setIsLoginOpen(!isLoginOpen);
    setError("");
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === adminEmail && password === adminPassword) {
      toggleLogin();
      navigate("/dashboard");
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-customBlue text-white shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-black">My Company</h1>

        {/* Hamburger Menu Button for Small Screens */}
        <button className="flex flex-col justify-between h-6 w-8 md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
  <span className="block h-1 w-full bg-black transition-transform duration-300"></span>
  <span className="block h-1 w-full bg-black transition-transform duration-300"></span>
  <span className="block h-1 w-full bg-black transition-transform duration-300"></span>
</button>

        {/* <button
          className="text-black text-3xl md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
           ☰
        </button> */}

        {/* Navigation Links */}
        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } absolute md:static bg-customBlue md:bg-transparent top-14 left-0 w-full md:w-auto md:flex md:space-x-6 md:items-center`}
        >
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 items-center text-black font-bold">
            <li>
              <a href="#hero" className="hover:text-yellow-300">
                HomeHome
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-yellow-300">
                About
              </a>
            </li>
            <li>
              <a href="#home" className="hover:text-yellow-300">
                Services
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-yellow-300">
                Contact Us
              </a>
            </li>
            <li>
              <button
                onClick={toggleLogin}
                className="px-4 py-2 bg-yellow-400 text-blue-900 font-bold rounded hover:bg-yellow-500"
              >
                Login
              </button>
            </li>
          </ul>
        </nav>
      </div>

      {/* Login Modal */}
      {isLoginOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={toggleLogin}
        >
          <div
            className="bg-white w-96 p-6 rounded-lg shadow-lg relative"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-bold text-gray-700 mb-4 text-center">
              Login
            </h2>
            {error && (
              <p className="text-red-500 text-sm mb-4 text-center">{error}</p>
            )}
            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500 text-gray-800"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500 text-gray-800"
                  placeholder="Enter your password"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 bg-blue-700 text-white font-bold rounded hover:bg-blue-800"
              >
                Login
              </button>
            </form>
            <button
              onClick={toggleLogin}
              className="absolute top-2 right-2 text-gray-700 hover:text-gray-900"
            >
              ✖
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
