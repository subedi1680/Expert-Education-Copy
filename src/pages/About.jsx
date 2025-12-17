import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import About_bg from "../assets/about_bg.png";
import { House, ArrowRight } from "lucide-react";
import Members from "../assets/members.svg";
import User from "../assets/user.svg";
import Branch from "../assets/branch.svg";
import Partner from "../assets/partner.svg";
import Smallcards from "../components/Smallcards";

function About() {
  return (
    <>
      {/* Top section */}
      <div className="relative bg-[url(assets/about_bg.png)] bg-cover bg-center h-[350px] text-white">
        <Navbar />
        <div className="flex flex-row items-center ">
          <div className="flex flex-col flex-1 ml-44 mt-16">
            <p className="text-5xl font-bold">About Expert Education</p>
            <p className="text-xl mt-10">
              Taking you where dreams are made true
            </p>
          </div>
            <div className="flex flex-row flex-1 justify-end items-center mt-20 mr-50 space-x-2">
              <House size="20" />

              <p>→ About Us</p>
            </div>
        </div>
      </div>

      {/* Motto Section */}
      <div>
        <div className="w-300 mx-44 mt-22 mb-5">
          <p className="text-[#b4bac1] text-sm">OUR MOTTO</p>
          <p className="text-5xl font-bold text-[#344871]">
            Making your journey to study abroad achievable
          </p>
          <p className="text-[#344871] text-[22px] mt-10">
            We are a top Education and Visa Consulting Agency with a worldwide
            presence in 23 countries. We provide reliable, credible, and
            authentic counselling for students from Nepal who wish to study
            abroad in the UK, the USA, Canada, or Australia. We have an expert
            team with 22 years of global experience in helping you reach the
            finish line of your study goals.
          </p>
          <p className="text-5xl font-bold text-[#344871] mt-15">
            Why Choose Us?
          </p>
          <p className="text-[#344871] text-[22px] mt-10">
            Expert Education has highly qualified education consultancy agents
            among international students. We’re committed to transforming dreams
            into reality, and helping every aspiring international student
            achieve their goals by studying abroad. Our visa consultancy experts
            have assisted countless students in providing absolutely
            personalised attention and quality services.
          </p>
          <p className="text-[#344871] text-[22px] mt-5">
            We understand the significance of your dreams and the preparation
            that goes into it. Hence, the advice and guidance we offer are based
            on sound facts, presenting a precise list of requirements through
            secure and reliable channels, and accurate information wherever
            needed.
          </p>
        </div>
        <div className="flex flex-row w-300 justify-between mx-44 p-10">
          <Smallcards
            image={Members}
            text1="1500+"
            text2="Global Team Members"
          />
          <Smallcards
            image={User}
            text1="20+"
            text2="Registered Migration Agents"
          />
          <Smallcards image={Branch} text1="80+" text2="Branch Offices" />
          <Smallcards image={Partner} text1="600+" text2="Global Partners" />
        </div>
        <p className="mx-44 text-[#636363 font-semibold] mb-10">
          Welcome to the best education consultancy in Nepal!
        </p>
      </div>

      {/* Mission and Vision Section */}
      <div className="bg-[#f5f8fb] h-[91vh]">
        <div className="w-290 mx-42 pt-16"> 
          <div className="w-280">
          <p className="text-[#334770] text-4xl font-bold">Guiding you all the way from Nepal to the overseas</p>
          <p className="text-[#626263] font-semibold mt-7">
            At Expert Education, our team of experts bring to you experience and
            transparent advice to help pursue your tertiary studies. They hold
            certified qualifications for effective education and visa
            counselling.
          </p>
          <p className="text-[#626263] font-semibold mt-7">
            Expert Education was established in 2003 and has expanded to over
            80+ branches across 23 countries.
          </p>
          <p className="text-[#626263] font-semibold mt-7">
            We assist with the <b className="text-[#1877f2] ">visa application process</b>, including
            consultancy to choose the education institute best suited to you,
            admission requirements, scholarships, and so on.
          </p>
        </div>
        <div className="flex flex-row space-x-3 mt-10">
          <div className="bg-[#334770] text-white flex flex-col items-center p-10 flex-1 rounded-md">
            <p className="text-2xl font-bold">Our Mission</p>
            <p className="text-center">
              Our mission is to provide tailored advice and support to
              international students in all areas above and beyond education,
              empowering them to make the best decisions for their future.
            </p>
          </div>
          <div className="bg-[#334770] text-white flex flex-col items-center p-10 flex-1 rounded-md">
            <p className="text-2xl font-bold">Our Vision</p>
            <p className="text-center">
              Our vision is to assist international students in attaining their
              abroad study goals and guide them in achieving their career goals
              to set up a bright future.
            </p>
          </div>
        </div>
        </div>
      </div>

      {/* Get consulted now section  */}
      <div className="bg-[#1877f2] md:h-93 md:pt-18 md:pl-35 h-140 pt-18">
        <div className="md:w-300 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col flex-2 p-7">
            <div className="text-white text-4xl md:text-5xl font-bold">
              From Nepal to the excellence in education abroad
            </div>
            <div className="text-white text-lg font-semibold mt-3">
              See where you land with the able assistance of Expert Education.
            </div>
          </div>
          <div className="flex flex-row border border-white rounded-xl py-5 px-5 space-x-2 md:items-center justify-between w-82">
            <button className="text-white text-md  font-bold">
              Get Consulted Now
            </button>
            <ArrowRight color="white" size="40" />
          </div>
        </div>
      </div>

      {/* Footer section */}
      <Footer />
    </>
  );
}

export default About;
