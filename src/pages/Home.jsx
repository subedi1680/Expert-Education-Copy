import expertLogo from '../assets/expert_logo.png'
import {Search} from "lucide-react"
import {CircleChevronRight} from "lucide-react"
function Home(){
   return(
     <>
      <div className="bg-[url(assets/home_expert_image.png)] bg-cover bg-center h-[600px] flex flex-col backdrop-blur-3xl w-full">
        <nav className="flex flex-wrap justify-between border-b border-[#4A82E1] px-10">
          <div className="my-3 mx-3">
            <img src={expertLogo} className="h-15 "></img>
          </div>
          <div className="py-7 px-10 flex-1">
            <ul className="space-x-7 flex flex-row text-white text-sm font-bold justify-end">
            <li>ABOUT US</li>
            <li>STUDY ABROAD</li>
            <li>STUDENT SERVICES</li>
            <li>VISA</li>
            <li>EVENTS</li>
            <li>BLOG</li>
            <li>CONTACT US</li>
            <li>NPL PREDICT & WIN</li>
          </ul>
          </div>
          <div className="flex items-center border-l border-[#4A82E1] pl-10 pr-5"><Search color="white"/></div>
        </nav>
        <div className="flex flex-col mt-10 ml-35 text-white">
            <div className="underline underline-offset-8 decoration-1 font-bold text-md tracking-[.5em]">EXPERT EDUCATION</div>
            <div className="text-5xl font-bold">Explore Your</div>
            <div>Dream Overseas</div>
            <div className="flex flex-row"><CircleChevronRight />Discover your actions</div>
        </div>
      </div>
      <div className="flex flex-col justify-between items-center text-[21px] text-white bg-[#1877F2]">
        <div className="w-[75vw] py-18">
          We provide students with the <b>best consultancy in Nepal</b> for their
          education goals and visa requirements. Over the years, we’ve helped
          over <b>150,000 international students</b> achieve their academic goals
          abroad. We are partnered with more than <b>600 education institutions</b> in
          Australia, Canada, the UK and the US to guide your way to the college
          or university you prefer.
        </div>
        <div className="w-[75vw] mb-18">
          It is time to take a step in the right direction with Expert
          Education, your reliable and <span className="hover:text-[#324B78] hover:cursor-pointer duration-300">top education consultancy in Nepal.</span>
        </div>
      </div>
    </>
   )
}
export default Home;