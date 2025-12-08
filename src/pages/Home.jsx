import expertLogo from "../assets/expert_logo.png";
import { Search } from "lucide-react";
import { CircleChevronRight } from "lucide-react";
function Home() {
  return (
    <>
      <div className="bg-[url(assets/home_expert_image.png)] bg-cover bg-center h-[600px] flex flex-col backdrop-blur-3xl w-full">
        <nav className="flex flex-wrap justify-between border-b border-[#3A52B0] px-10">
          <div className="my-3 mx-3">
            <img src={expertLogo} className="h-15 "></img>
          </div>
          <div className="px-11 flex-1">
            <ul className="space-x-1 flex flex-row text-white text-sm font-bold justify-end">
              <li className="group hover:bg-[#186FE9] cursor-pointer px-2.75 py-8 duration-200 relative">
                <span>ABOUT US</span>
                <ul className="absolute top-full left-0 hidden group-hover:flex flex-col bg-white text-[#4b5c81] w-63 text-md font-medium">
                  <li className="px-4 py-4 hover:bg-[#2165D6] hover:text-white cursor-pointer border-b border-gray-200">
                    About Expert
                  </li>
                  <li className="px-4 py-4 hover:bg-[#2165D6] hover:text-white cursor-pointer border-b border-gray-200">
                    Message from Director
                  </li>
                </ul>
              </li>
              <li className="group hover:bg-[#186FE9] cursor-pointer px-2.75 py-8 duration-200 relative">
                <span>STUDY ABROAD</span>
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
                  <li className="px-4 py-4 hover:bg-[#2165D6] hover:text-white cursor-pointer border-b border-gray-200">
                    Banking in Australia
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
              <li className="hover:bg-[#186FE9] cursor-pointer px-2.75 py-8 duration-200">
                NPL PREDICT & WIN
              </li>
            </ul>
          </div>
          <div className="flex items-center border-l border-[#3A52B0] pl-10 pr-1">
            <Search color="white" />
          </div>
        </nav>
        <div className="flex flex-col mt-12 ml-30 text-white">
          <div className="underline underline-offset-10 decoration-1 font-extrabold text-sm tracking-[.5em]">
            EXPERT EDUCATION
          </div>
          <div className="text-5xl font-bold mt-9">Explore your</div>
          <div className="text-5xl font-bold mt-2">Dreams Overseas</div>
          <div className="flex flex-row justify-start items-center text-md mt-3 space-x-1">
            <div>
              <CircleChevronRight strokeWidth="1" size="40" />
            </div>
            <div className="font-semibold tracking-widest">
              Discover your options
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between items-center text-[21px] text-white bg-[#1877F2] ">
        <div className="w-[76vw] pt-17.5">
          We provide students with the {""}
          <span className="hover:text-[#324B78] hover:cursor-pointer duration-300">
            <b>best consultancy in Nepal</b>
          </span>{" "}
          for their education goals and visa requirements. Over the years, we’ve
          helped over <b>150,000 international students</b> achieve their
          academic goals abroad. We are partnered with more than{" "}
          <b>600 education institutions</b> in Australia, Canada, the UK and the
          US to guide your way to the college or university you prefer.
        </div>
        <div className="w-[76vw] mt-5 mb-17.5">
          It is time to take a step in the right direction with Expert
          Education, your reliable and{" "}
          <span className="hover:text-[#324B78] hover:cursor-pointer duration-300">
            top education consultancy in Nepal.
          </span>
        </div>
      </div>
    </>
  );
}
export default Home;
