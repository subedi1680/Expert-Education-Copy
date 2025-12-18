import { House } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import Australia_abroad from "../assets/study-abroad-in-australia-800x533.jpg";
import Canada_abroad from "../assets/Study-abroad-in-canada-800x533.jpg";
import USA_abroad from "../assets/Study-abroad-in-USA-800x533.jpg";
import UK_abroad from "../assets/Study-abroad-in-uk-800x533.jpg";
import Australia_flag from "../assets/au.svg";
import Canada_flag from "../assets/ca.svg";
import USA_flag from "../assets/us.svg";
import UK_flag from "../assets/gb.svg";

function StudyAbroad() {
  return (
    <>
      <div className="relative bg-[url(assets/studyabroad_bg.png)] bg-cover bg-center h-[350px] text-white">
        <Navbar />
        <div className="flex flex-row items-center ">
          <div className="flex flex-col flex-1 ml-44 mt-10">
            <p className="text-5xl font-bold">Study Abroad</p>
            <p className="text-xl mt-10">Pursue Academic Excellence Overseas</p>
            <p className="text-xl">Australia | Canada | The USA | The UK</p>
          </div>
          <div className="flex flex-row flex-1 justify-end items-center mt-25 mr-50 space-x-2">
            <House size="20" />
            <p>→ Study Abroad</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-[30%_70%] w-300 mx-44 mt-15">
        {/* Sidebar Section */}
        <div>
          <Sidebar />
        </div>

        {/* Text Section */}
        <div className="space-y-5 text-[#555555]">
          <p>
            Deciding to study in a country outside of your native country is a
            huge decision to make. It entails adopting new habits, learning
            about a new culture, and adjusting to a lifestyle previously unknown
            to you. When it comes to achieving your career goals, these aspects
            become all the more an adventure.
          </p>
          <p>
            Moreover, you get to broaden your scope of academic excellence and
            open your mind to the amazing possibility of settling abroad. That
            said, those who choose to study abroad are more sought after by
            employers of reputed organisations. Expert Education is a study
            abroad consultancy in Nepal, equipped with the expertise and
            professional assistance to help you attain your goals to pursue a
            course overseas.
          </p>
          <p>
            We have special education counsellors and visa consultancy services
            in Nepal, located across different branches. So, feel free to reach
            out to our friendly team today!
          </p>
          <p className="text-3xl font-bold text-[#344871]">
            Considering your chances of studying abroad?
          </p>
          <p>
            The decision to study in a foreign country may seem daunting if you
            are unsure of the preparations you need to make.
          </p>
          <p>
            Essentially, you need to put some effort into planning as this will
            take you a long way. Firstly, you may prioritise your choice of a
            destination by picking the university, course, and of course, at the
            least, the country.
          </p>
          <p>
            If you prefer a particular education institute based on what you’ve
            heard, be sure to research as well. You can visit their website and
            check for their accreditation, the scope of the course being
            offered, its popularity, the tuition fee, scholarship plans offered,
            faculty, and accommodation.
          </p>
          <p>
            Apart from visiting the institute’s website, you can also check out
            other portals that talk about the graduate employability rate of the
            preferred institution.
          </p>
          <p>
            Let’s say you’ve finally selected the country to study, like
            Australia or the UK; check other factors as well. These can include
            your options to work after completing your course in that country.
            Additionally, you must check the visa regulations in the country for
            international students.
          </p>
          <p>
            It’s good to research on your end, but we recommend that you also
            seek professional advice. Our study abroad consultancy in Nepal can
            guide and assist you in understanding your chances of travelling
            overseas to pursue a course.{" "}
          </p>
          <p className="text-3xl font-bold text-[#344871]">
            Your academic goals are waiting to be achieved
          </p>
          <p>Choose your study destination</p>
          <div className="grid grid-cols-2 gap-6 justify-center mx-auto max-w-4xl">
            {/* Australia */}
            <div className="flex flex-col shadow-gray-300 shadow-xl w-[92.5vw] md:w-[22vw] h-117 md:h-108 md:rounded-2xl rounded-xl">
              <img
                src={Australia_abroad}
                className="w-[92.5vw] h-60 md:w-full md:h-45 rounded-t-xl"
              ></img>
              <img
                src={Australia_flag}
                className="absolute w-15 h-15 object-cover rounded-full border-5 border-white mt-48 ml-68 md:mt-33 md:ml-60 shadow-gray-300 shadow-sm"
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
            <div className="flex flex-col shadow-gray-300 shadow-xl w-[92.5vw] md:w-[22vw] h-108 md:rounded-2xl rounded-xl">
              <img
                src={Canada_abroad}
                className="w-[92.5vw] h-60 md:w-full md:h-45 rounded-t-xl"
              ></img>
              <img
                src={Canada_flag}
                className="absolute w-15 h-15 object-cover rounded-full border-5 border-white mt-48 ml-68 md:mt-33 md:ml-60 shadow-gray-300 shadow-sm"
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
            <div className="flex flex-col shadow-gray-300 shadow-xl w-[92.5vw] md:w-[22vw] h-108 md:rounded-2xl rounded-xl">
              <img
                src={USA_abroad}
                className="w-[92.5vw] h-60 md:w-full md:h-45 rounded-t-xl"
              ></img>
              <img
                src={USA_flag}
                className="absolute w-15 h-15 object-cover rounded-full border-5 border-white mt-48 ml-68 md:mt-33 md:ml-60 shadow-gray-300 shadow-sm"
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
            <div className="flex flex-col shadow-gray-300 shadow-xl w-[92.5vw] md:w-[22vw] h-108 md:rounded-2xl rounded-xl">
              <img
                src={UK_abroad}
                className="w-[92.5vw] h-60 md:w-full md:h-45 rounded-t-xl"
              ></img>
              <img
                src={UK_flag}
                className="absolute w-15 h-15 object-cover rounded-full border-5 border-white mt-48 ml-68 md:mt-33 md:ml-60 shadow-gray-300 shadow-sm"
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

          <p className="text-3xl font-bold text-[#344871]">
            General university admission requirements abroad
          </p>
          <p>
            The admission process can be different across universities of the
            same country and among other countries. However, an idea of the list
            of requirements can help you be more prepared for what to expect.
          </p>
          <p>
            The university application process may be a bit more complex in a
            foreign country. You may have to cross many stages of the admissions
            application process before you can actually gain admission in that
            university.
          </p>
          <ul>
            <li>Appear for the required tests at the university selected</li>
            <li>
              Arrange for recommendation letters for the purpose of admission
            </li>
            <li>Draft and prepare Essays and Statement of Purpose</li>
            <li>
              Collect all the requested transcripts for submission to the
              University
            </li>
            <li>Fill out the University’s application form</li>
            <li>Report necessary test scores to the universities</li>
            <li>Accept the offer stated in the admission form</li>
            <li>Pay the admission fee set by the University</li>
          </ul>
          <p className="text-3xl font-bold text-[#344871]">
            General visa application process requirements
          </p>
          <p>
            When applying for a student visa, the requirements and documentation
            required will depend on the country for which you are applying.
          </p>
          <p>The general list of documents required are:</p>
          <ul>
            <li>Application form</li>
            <li>Certificates</li>
            <li>Test scores or competitive exam scores</li>
            <li>Statement of purpose</li>
            <li>Letters of Recommendation</li>
            <li>Passport-size photographs</li>
            <li>Experience documents</li>
            <li>Official bank letter</li>
            <li>Sponsoring authority</li>
          </ul>
          <p>
            Planning ahead of time and preparing all the documents a couple of
            months prior to the application process will ease an already
            overwhelming journey.
          </p>
          <p>
            Wish to know more? Reach out to our study abroad education
            consultant in Nepal.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}
export default StudyAbroad;
