import React from "react";

function Footer() {
  return (
    <footer id="footer">
      <div className="text-black text-center py-4 bg-yellow-400 h-40 ">
        
          <p>© 2025 DevFellas. All rights reserved</p>
        
        <hr style={{ width: "50%", border: "2px solid black", margin: "20px auto" }} />


        <ul className="inline-flex space-x-5">

          <li>
            <p>© 2025 DevFellas. All rights reserved.</p>
          </li>
          <li>
            <a href="#Privacy" className="hover:text-blue-500 underline">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#Terms" className="hover:text-blue-500 underline">
              Terms of Services
            </a>
          </li>
          {/* <li>
            <a href="#" className="relative text-blue-500">
              Cookies Settings
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-700 to-green-300"></span>
            </a>
          </li> */}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
