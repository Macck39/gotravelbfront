import React, {useState} from "react";
import { Link } from "react-router-dom";
// Green color code
// #32C534
const Navbar = () => {
    const [menuClick, setMenuClick] = useState(false)

  return (
    <div className="w-full">
      <section className="flex justify-between sm:justify-between py-4 px-14 sm:px-20 md:px-52 items-center bg-[#1c2b39] sm:bg-white">
        <div>
          <h3 className="text-lg font-semibold text-white sm:text-black">GoTravelB</h3>
          <h6 className="text-[#32C534] text-center text-sm">24/7 available</h6>
        </div>
        <div className="hidden sm:block">
          <div className="flex items-center">
            <span className="mr-4">
              <img className="w-8" src="/images/home-icon.png" alt="" />
            </span>
            <span className="font-medium text-[#32C534]">Address</span>
          </div>
          <div>Bengaluru, Karnataka</div>
        </div>
        <div className="hidden sm:block">
          <div className="flex items-center">
            <span className="mr-4">
              <img className="w-8" src="/images/mail-icon.png" alt="" />
            </span>
            <span className="font-medium text-[#32C534]">Email Us</span>
          </div>
          <div>Bengaluru, Karnataka</div>
        </div>
        <img
          className="w-8 sm:hidden cursor-pointer"
          src="/images/white-hamburger.png"
          alt="hamburger menu icon"
          onClick={() => {setMenuClick(!menuClick)}}
        />
      </section>

        {/* Desktop view */}
      <nav className="sm:w-fit md:w-full hidden sm:block">
        <ul className="md:px-80 py-2 bg-[#1c2b39] flex justify-between text-white items-center flex-row">
        <Link to={'/'}><li className="p-4 cursor-pointer hover:text-[#32C534]">Home</li></Link>
          <Link to={'/fleet'}><li className="p-4 cursor-pointer hover:text-[#32C534]">Fleet</li></Link>
          <Link to={'/blogs'}><li className="p-4 cursor-pointer hover:text-[#32C534]">Blog</li></Link>
          <Link to={'/about'}><li className="p-4 cursor-pointer hover:text-[#32C534]">About Us</li></Link>
          <Link to={'/contact'}><li className="p-4 cursor-pointer hover:text-[#32C534]">Contact Us</li></Link>
        </ul>
      </nav>
      
      {/* Mobile view */}

      {menuClick && <nav className="sm:w-fit md:w-full">
        <ul className="py-2 bg-[#1c2b39] flex flex-col justify-between items-start text-white">
          <li className="p-4 cursor-pointer hover:text-[#32C534] ml-2 hover:ml-4"><Link to={'/'}>Home</Link></li>
          <Link to={'/fleet'}><li className="p-4 cursor-pointer hover:text-[#32C534] ml-2 hover:ml-4">Fleet</li></Link>
          <Link to={'/blogs'}><li className="p-4 cursor-pointer hover:text-[#32C534] ml-2 hover:ml-4">Blog</li></Link>
          <Link to={'/about'}><li className="p-4 cursor-pointer hover:text-[#32C534] ml-2 hover:ml-4">About Us</li></Link>
          <Link to={'/contact'}><li className="p-4 cursor-pointer hover:text-[#32C534] ml-2 hover:ml-4">Contact Us</li></Link>
        </ul>
      </nav>}
    </div>
  );
};

export default Navbar;
