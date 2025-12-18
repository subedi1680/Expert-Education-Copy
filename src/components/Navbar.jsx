import { Link } from "react-router-dom";
import expertLogo from "../assets/expert_logo.png";
import { Search } from "lucide-react";
import { CircleChevronRight } from "lucide-react";
import { Menu } from "lucide-react";

function Navbar() {
  return (
    <>
      <nav className="flex flex-wrap justify-between border-b border-[#95afd9] pl-10 pr-4 md:px-10">
        <div className="my-3 -mx-6 md:mx-3">
          <Link to="/">
            <img src={expertLogo} className="h-15 "></img>
          </Link>
        </div>
        <div className="px-11 flex-1">
          <ul className="hidden space-x-1 md:flex flex-row text-white text-sm font-bold justify-end">
            <li className="group hover:bg-[#186FE9] cursor-pointer px-2.75 py-8 duration-200 relative">
              <Link to="/about">
                <span>ABOUT US</span>
              </Link>
              <ul className="absolute top-full left-0 hidden group-hover:flex flex-col bg-white text-[#4b5c81] w-63 text-md font-medium">
                <li className="px-4 py-4 hover:bg-[#2165D6] hover:text-white cursor-pointer border-b border-gray-200">
                  <Link to="/about">About Expert</Link>
                </li>
                <li className="px-4 py-4 hover:bg-[#2165D6] hover:text-white cursor-pointer border-b border-gray-200">
                  <Link to="/about/message-from-director">Message from Director</Link>
                </li>
              </ul>
            </li>
            <li className="group hover:bg-[#186FE9] cursor-pointer px-2.75 py-8 duration-200 relative">
              <span><Link to="/services/study-abroad">STUDY ABROAD</Link></span>
              <ul className="absolute top-full left-0 hidden group-hover:flex flex-col bg-white text-[#4b5c81] w-63 text-md font-medium">
                <li className="px-4 py-4 hover:bg-[#2165D6] hover:text-white cursor-pointer border-b border-gray-200">
                  Study in Australia
                </li>
                <li className="px-4 py-4 hover:bg-[#2165D6] hover:text-white cursor-pointer border-b border-gray-200">
                  Study in Canada
                </li>
                <li className="px-4 py-4 hover:bg-[#2165D6] hover:text-white cursor-pointer border-b border-gray-200">
                  Study in UK
                </li>
                <li className="px-4 py-4 hover:bg-[#2165D6] hover:text-white cursor-pointer border-b border-gray-200">
                  Study in USA
                </li>
              </ul>
            </li>
            <li className="group hover:bg-[#186FE9] cursor-pointer px-2.75 py-8 duration-200 relative">
              <span>STUDENT SERVICES</span>
              <ul className="absolute top-full left-0 hidden group-hover:flex flex-col bg-white text-[#4b5c81] w-63 text-md font-medium">
                <li className="px-4 py-4 hover:bg-[#2165D6] hover:text-white cursor-pointer border-b border-gray-200">
                  Visa Application
                </li>
                <li className="px-4 py-4 hover:bg-[#2165D6] hover:text-white cursor-pointer border-b border-gray-200">
                  PTE Test Preparation
                </li>
                <li className="px-4 py-4 hover:bg-[#2165D6] hover:text-white cursor-pointer border-b border-gray-200">
                  IELTS Training
                </li>
                <li className="px-4 py-4 hover:bg-[#2165D6] hover:text-white cursor-pointer border-b border-gray-200">
                  Study Abroad Accomodation
                </li>
                <li className="px-4 py-4 hover:bg-[#2165D6] hover:text-white cursor-pointer border-b border-gray-200">
                  Student Health Insurance
                </li>
              </ul>
            </li>
            <li className="group hover:bg-[#186FE9] cursor-pointer px-2.75 py-8 duration-200 relative">
              <span>VISA</span>
              <ul className="absolute top-full left-0 hidden group-hover:flex flex-col bg-white text-[#4b5c81] w-63 text-md font-medium">
                <li className="px-4 py-4 hover:bg-[#2165D6] hover:text-white cursor-pointer border-b border-gray-200">
                  Visitor Visa
                </li>
                <li className="px-4 py-4 hover:bg-[#2165D6] hover:text-white cursor-pointer border-b border-gray-200">
                  Parent Visa
                </li>
                <li className="px-4 py-4 hover:bg-[#2165D6] hover:text-white cursor-pointer border-b border-gray-200">
                  Partner Visa
                </li>
              </ul>
            </li>
            <li className="hover:bg-[#186FE9] cursor-pointer px-2.75 py-8 duration-200">
              EVENTS
            </li>
            <li className="hover:bg-[#186FE9] cursor-pointer px-2.75 py-8 duration-200">
              BLOG
            </li>
            <li className="group hover:bg-[#186FE9] cursor-pointer px-2.75 py-8 duration-200 relative">
              <span>CONTACT US</span>
              <ul className="absolute top-full left-0 hidden group-hover:flex flex-col bg-white text-[#4b5c81] w-63 text-md font-medium">
                <li className="px-4 py-4 hover:bg-[#2165D6] hover:text-white cursor-pointer border-b border-gray-200">
                  Find nearest office
                </li>
                <li className="px-4 py-4 hover:bg-[#2165D6] hover:text-white cursor-pointer border-b border-gray-200">
                  Other Websites
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="md:flex hidden items-center border-l border-[#95afd9] pl-10 pr-1">
          <Search color="white" />
        </div>
        <div className="flex md:hidden items-center">
          <Menu color="white" strokeWidth="2" size="30" />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
