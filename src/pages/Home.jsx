import Navbar from "../components/Navbar";
import Australia_abroad from "../assets/study-abroad-in-australia-800x533.jpg";
import Canada_abroad from "../assets/Study-abroad-in-canada-800x533.jpg";
import USA_abroad from "../assets/Study-abroad-in-USA-800x533.jpg";
import UK_abroad from "../assets/Study-abroad-in-uk-800x533.jpg";
import Australia_flag from "../assets/au.svg";
import Canada_flag from "../assets/ca.svg";
import USA_flag from "../assets/us.svg";
import UK_flag from "../assets/gb.svg";
import Global_branches from "../assets/EEVS-Global-Branches-Map.png";
import Goal_1 from "../assets/commence-with-your-goals.jpg";
import Goal_2 from "../assets/commence-with-your-goals-2.jpg";
import { Play } from "lucide-react";
import { ArrowRight } from "lucide-react";

function Home() {
  return (
    <>
      {/* nav bar and background image */}
      <div className="relative bg-[url(assets/home_expert_image.png)] bg-cover bg-center h-[450px] md:h-[600px] flex flex-col backdrop-blur-3xl md:w-full z-10">
        <Navbar />
        <div className="flex flex-col mt-20 md:mt-12 ml-7 md:ml-30 text-white">
          <div className="underline underline-offset-8  md:underline-offset-10 decoration-1 font-extrabold text-sm md:tracking-[.5em] tracking-[.25em]">
            EXPERT EDUCATION
          </div>
          <div className="text-4xl md:text-5xl font-bold mt-3 md:mt-9 tracking-[0.06em] md:tracking-[0em]">
            Explore your
          </div>
          <div className="text-4xl md:text-5xl font-bold md:mt-2 tracking-[0.07em] md:tracking-[0em]">
            Dreams Overseas
          </div>
          <div className="flex flex-row justify-start items-center text-md mt-3 space-x-1">
            <div className="hidden md:flex">
              <CircleChevronRight strokeWidth="1" size="40" />
            </div>
            <div className="flex md:hidden">
              <CircleChevronRight strokeWidth="1" size="25" />
            </div>
            <div className="font-semibold md:tracking-widest text-[12px] md:text-[16px]">
              Discover your options
            </div>
          </div>
        </div>
      </div>
      {/* consultancy descrive text */}
      <div className=" relative flex flex-col justify-between items-center text-[21px]/8.25 text-white bg-[#1877F2] z-20 -mt-[72px] md:mt-0">
        <div className="px-[15px] md:w-[76vw] pt-17.5">
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
        <div className="px-[15px] md:w-[76vw] mt-5 mb-17.5">
          It is time to take a step in the right direction with Expert
          Education, your reliable and{" "}
          <span className="hover:text-[#324B78] hover:cursor-pointer duration-300">
            top education consultancy in Nepal.
          </span>
        </div>
      </div>
      {/* study in countries cards */}
      <div className="flex flex-col md:my-17 md:w-295 md:ml-40 my-12.5 ml-3.5">
        <div className="text-[#344871] text-[34px]/10 md:text-[45px] font-bold">
          Your academic goals are waiting to be achieved
        </div>
        <div className="mt-5 text-[#575656]">Choose your study destination</div>
        <div className="flex flex-col md:flex-row justify-between mt-12 md:mt-15 space-y-9">
          {/* Australia */}
          <div className="flex flex-col shadow-gray-300 shadow-xl w-[92.5vw] md:w-[17.65vw] h-117 md:h-108 md:rounded-2xl rounded-xl">
            <img
              src={Australia_abroad}
              className="w-[92.5vw] h-60 md:w-80 md:h-45 rounded-t-xl"
            ></img>
            <img
              src={Australia_flag}
              className="absolute w-15   h-15 object-cover rounded-full border-5 border-white mt-48 ml-68 md:mt-33 md:ml-45  shadow-gray-300 shadow-sm"
            ></img>
            <p className="text-[#344871] text-2xl font-bold mt-6 md:mt-8 mx-7 hover:text-[#1877F2] cursor-pointer">
              Study in Australia
            </p>
            <p className="text-[#585656] font-2 mt-2 md:mt-3 mx-7">
              Widen your career scope by studying in Australia in some of the
              top most globally ranked universities.
            </p>
            <p className="mt-2.5 mx-7 text-[#1877F2] underline hover:text-[#3e5b95] cursor-pointer">
              Learn More
            </p>
          </div>
          {/* Canada */}
          <div className="flex flex-col shadow-gray-300 shadow-xl w-[92.5vw] md:w-[17.65vw] h-108 md:rounded-2xl rounded-xl">
            <img
              src={Canada_abroad}
              className="w-[92.5vw] h-60 md:w-80 md:h-45 rounded-t-xl"
            ></img>
            <img
              src={Canada_flag}
              className="absolute w-15   h-15 object-cover rounded-full border-5 border-white mt-48 ml-68 md:mt-33 md:ml-45  shadow-gray-300 shadow-sm"
            ></img>
            <p className="text-[#344871] text-2xl font-bold mt-6 md:mt-8 mx-7 hover:text-[#1877F2] cursor-pointer">
              Study in Canada
            </p>
            <p className="text-[#585656] font-2 mt-2 md:mt-3 mx-7">
              Enjoy quality education and an affordable fee structure while
              pursuing your studies in Canada.
            </p>
            <p className="mt-2.5 mx-7 text-[#1877F2] underline hover:text-[#3e5b95] cursor-pointer">
              Learn More
            </p>
          </div>
          {/* USA */}
          <div className="flex flex-col shadow-gray-300 shadow-xl w-[92.5vw] md:w-[17.65vw] h-108 md:rounded-2xl rounded-xl">
            <img
              src={USA_abroad}
              className="w-[92.5vw] h-60 md:w-80 md:h-45 rounded-t-xl"
            ></img>
            <img
              src={USA_flag}
              className="absolute w-15   h-15 object-cover rounded-full border-5 border-white mt-48 ml-68 md:mt-33 md:ml-45  shadow-gray-300 shadow-sm"
            ></img>
            <p className="text-[#344871] text-2xl font-bold mt-6 md:mt-8 mx-7 hover:text-[#1877F2] cursor-pointer">
              Study in USA
            </p>
            <p className="text-[#585656] font-2 mt-2 md:mt-3 mx-7">
              Experience academic excellence with the world’s most advanced
              internet and technology structure in the US.
            </p>
            <p className="mt-2.5 mx-7 text-[#1877F2] underline hover:text-[#3e5b95] cursor-pointer">
              Learn More
            </p>
          </div>
          {/* UK */}
          <div className="flex flex-col shadow-gray-300 shadow-xl w-[92.5vw] md:w-[17.65vw] h-108 md:rounded-2xl rounded-xl">
            <img
              src={UK_abroad}
              className="w-[92.5vw] h-60 md:w-80 md:h-45 rounded-t-xl"
            ></img>
            <img
              src={UK_flag}
              className="absolute w-15   h-15 object-cover rounded-full border-5 border-white mt-48 ml-68 md:mt-33 md:ml-45  shadow-gray-300 shadow-sm"
            ></img>
            <p className="text-[#344871] text-2xl font-bold mt-6 md:mt-8 mx-7 hover:text-[#1877F2] cursor-pointer">
              Study in UK
            </p>
            <p className="text-[#585656] font-2 mt-2 md:mt-3 mx-7">
              Plenty of research facilities and even more opportunities to
              explore your career options in the UK.
            </p>
            <p className="mt-2.5 mx-7 text-[#1877F2] underline hover:text-[#3e5b95] cursor-pointer">
              Learn More
            </p>
          </div>
        </div>
      </div>
      {/* world map section */}
      <div className="bg-[#344871] text-white pb-30 md:pb-0">
        <div className="flex flex-col md:h-[94vh] md:w-295 md:mx-42 items-center mt-12.5 mx-3.5">
          <div className="flex flex-col md:flex-row mt-10 md:mt-20 p-2 mb-11">
            <div className="flex flex-col">
              <div className="text-3xl md:text-5xl font-bold">
                Accelerating your academic growth overseas
              </div>
              <div className="mt-8 text-[1.09em]">
                Our education consultants can support with excellence in
                guidance with education and visa consultancy in Nepal. We’ve
                been growing since 2003 with over 80+ branches across 23
                countries. You can enjoy a wide range of services for fulfilling
                your dreams to study in Australia, the UK, Canada and the US.
              </div>
            </div>
            <div className="mt-10 md:mt-0">
              <img src={Global_branches} className="w-570  h-280.04"></img>
            </div>
          </div>
          <hr className="border-[#768299] w-[90vw] md:w-300"></hr>
          <div className="flex flex-col md:flex-row justify-between md:gap-x-50 mt-10 gap-y-13 md:gap-y-0">
            <div className="flex flex-col items-center">
              <div className="flex flex-row md:flex-col items-center">
                <p className="text-[#abb2c0] font-semibold text-[0.8em]">
                  INTERNATIONAL STUDENTS
                </p>
                <p className="text-[#abb2c0] font-semibold text-[0.8em]">
                  ASSISTED
                </p>
              </div>
              <p className="md:text-5xl font-bold text-3xl">150,000+</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex flex-row md:flex-col items-center">
                <p className="text-[#abb2c0] font-semibold text-[0.8em]">
                  SCHOLARSHIPS{" "}
                </p>
                <p className="text-[#abb2c0] font-semibold text-[0.8em]">
                  {" "}
                  APPROVED
                </p>
              </div>
              <p className="md:text-5xl font-bold text-3xl">22,000+</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex flex-row md:flex-col items-center">
                <p className="text-[#abb2c0] font-semibold text-[0.8em]">
                  ENROLLED IN
                </p>
                <p className="text-[#abb2c0] font-semibold text-[0.8em]">
                  {" "}
                  IELTS/PTE PREPARATION CLASSES
                </p>
              </div>
              <p className="md:text-5xl font-bold text-3xl">40,000+</p>
            </div>
          </div>
        </div>
      </div>

      {/* Goals section */}
      <div className="flex flex-col md:flex-row md:w-295 md:ml-35 md:mt-12">
        <div className="flex flex-col md:flex-1 md:p-10 mt-12 ml-3 md:mt-0 md:ml-3">
          <p className="text-[#344871] text-4xl md:text-5xl font-bold">
            Commence with your goals
          </p>
          <p className="text-[#5a5a5a] text-[21px] mt-6">
            Expert Education offers you the best education consultancy in Nepal.
          </p>
          <div className="flex flex-row items-center mt-5">
            <Play fill="#1877f2" stroke="#1877f2" size="10" />
            <p className="ml-4 text-[#1877f2] font-bold text-lg">
              Visa consultation
            </p>
          </div>
          <p className="pl-7 text-[#5a5a5a] md:text-[18px] text-[19px]">
            We provide professional visa consulting experts to assist you with
            all details and requirements specific to your goals.
          </p>
          <div className="flex flex-row items-center mt-5">
            <Play fill="#1877f2" stroke="#1877f2" size="10" />
            <p className="ml-4 text-[#1877f2] font-bold text-lg">
              Admissions advice
            </p>
          </div>
          <p className="pl-7 text-[#5a5a5a] md:text-[18px] text-[19px]">
            We’ll guide you from the very beginning till you gain admission in a
            college or university suitable to you.
          </p>
          <div className="flex flex-row items-center mt-5">
            <Play fill="#1877f2" stroke="#1877f2" size="10" />
            <p className="ml-4 text-[#1877f2] font-bold text-lg">
              Travel and stay
            </p>
          </div>
          <p className="pl-7 text-[#5a5a5a] md:text-[18px] text-[20px]">
            Need the best accommodation while studying abroad? We’ve got you
            covered.
          </p>
        </div>
        <div className="relative flex flex-col flex-1 md:mt-10 ml-4 mt-6 pb-50 md:pb-70">
          <div>
            <img src={Goal_1} className="w-90 md:w-92 h-92 rounded-md"></img>
          </div>
          <div className="absolute mt-54 md:mt-51 md:ml-47">
            <img src={Goal_2} className="w-87 md:w-92 h-68 rounded-md"></img>
          </div>
        </div>
      </div>
      {/* get top education consultancy */}
      <div className="bg-[#1877f2] md:h-93 md:pt-18 md:pl-35 h-140 pt-18">
        <div className="md:w-300 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col flex-2 p-7">
            <div className="text-white text-4xl md:text-5xl font-bold">
              There’s a University waiting to fulfil your study goals
            </div>
            <div className="text-white text-lg font-semibold mt-3">
              Get expert advice on choosing education institutes, addressing the
              admissions process, scholarships, etc.
            </div>
          </div>
          <div className="flex flex-row border border-white rounded-xl py-5 px-5 space-x-2 md:items-center w-82">
            <button className="text-white text-md  font-bold">
              Get top education consultancy in Nepal
            </button>
            <ArrowRight color="white" size="40" />
          </div>
        </div>
      </div>
      {/* clients review */}
      <div></div>
    </>
  );
}
export default Home;
